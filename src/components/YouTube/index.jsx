import React, { useEffect, useMemo, useState } from "react";
import { Wrapper, Title, Box, Grid, Card, TopBar } from "./style";

const HANDLE = "degabrielofi";
const MAX = 6;

function getApiKey() {
  // Vite
  if (
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_YOUTUBE_API_KEY
  ) {
    return import.meta.env.VITE_YOUTUBE_API_KEY;
  }
  // CRA
  if (
    typeof process !== "undefined" &&
    process.env?.REACT_APP_YOUTUBE_API_KEY
  ) {
    return process.env.REACT_APP_YOUTUBE_API_KEY;
  }
  return "";
}

function formatDate(iso) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

const YoutubeLatest = () => {
  const apiKey = useMemo(() => getApiKey(), []);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function run() {
      setLoading(true);
      setError("");

      if (!apiKey) {
        setLoading(false);
        setError("Faltou configurar a API Key no .env.");
        return;
      }

      try {
        // 1) Resolve canal pelo @handle (forHandle) :contentReference[oaicite:2]{index=2}
        const chRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forHandle=${encodeURIComponent(
            HANDLE
          )}&key=${encodeURIComponent(apiKey)}`
        );

        const chJson = await chRes.json();
        const ch = chJson?.items?.[0];

        if (!ch) {
          throw new Error(
            "Não encontrei o canal pelo handle. Verifique o @handle."
          );
        }

        const uploads = ch?.contentDetails?.relatedPlaylists?.uploads;
        if (!uploads) {
          throw new Error("Não consegui obter a playlist de uploads do canal.");
        }

        // 2) Puxa últimos vídeos pela playlist de uploads
        const plRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${encodeURIComponent(
            uploads
          )}&maxResults=${MAX}&key=${encodeURIComponent(apiKey)}`
        );

        const plJson = await plRes.json();
        const items = plJson?.items || [];

        const mapped = items
          .map((it) => {
            const sn = it?.snippet;
            const videoId = it?.contentDetails?.videoId;
            const thumb =
              sn?.thumbnails?.maxres?.url ||
              sn?.thumbnails?.high?.url ||
              sn?.thumbnails?.medium?.url ||
              sn?.thumbnails?.default?.url;

            return {
              videoId,
              title: sn?.title || "",
              publishedAt: sn?.publishedAt || "",
              thumbnail: thumb || "",
            };
          })
          .filter((v) => v.videoId);

        if (!alive) return;

        setChannel({
          title: ch?.snippet?.title || "@degabrielofi",
          avatar:
            ch?.snippet?.thumbnails?.high?.url ||
            ch?.snippet?.thumbnails?.default?.url ||
            "",
          url: `https://www.youtube.com/@${HANDLE}`,
        });

        setVideos(mapped);
        setLoading(false);
      } catch (e) {
        if (!alive) return;
        setLoading(false);
        setError(e?.message || "Erro ao carregar vídeos.");
      }
    }

    run();
    return () => {
      alive = false;
    };
  }, [apiKey]);

  return (
    <Wrapper id="YouTube">
      <Title>
        <div className="title_page">
          <h1 className="section-title-01">
            <i className="bx bxl-youtube m-2"></i>YOUTUBE
          </h1>
          <h2 className="section-title-02">ÚLTIMOS VÍDEOS</h2>
        </div>
      </Title>

      <Box>
        <TopBar>
          <div className="left">
            {channel?.avatar ? (
              <img
                className="avatar"
                src={channel.avatar}
                alt={channel.title}
              />
            ) : (
              <div className="avatar placeholder" />
            )}

            <div className="meta">
              <div className="kicker">CANAL</div>
              <div className="name">{channel?.title || "@degabrielofi"}</div>
              <div className="sub">@{HANDLE}</div>
            </div>
          </div>

          <a
            className="primary"
            href={`https://www.youtube.com/@${HANDLE}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver canal <i className="bx bx-right-arrow-alt"></i>
          </a>
        </TopBar>

        {loading ? (
          <div className="state">Carregando vídeos…</div>
        ) : error ? (
          <div className="state error">{error}</div>
        ) : (
          <Grid>
            {videos.map((v) => (
              <Card
                key={v.videoId}
                href={`https://www.youtube.com/watch?v=${v.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="thumb">
                  {v.thumbnail ? (
                    <img src={v.thumbnail} alt={v.title} loading="lazy" />
                  ) : (
                    <div className="thumb placeholder" />
                  )}
                </div>

                <div className="body">
                  <div className="date">{formatDate(v.publishedAt)}</div>
                  <div className="title">{v.title}</div>
                  <div className="cta">
                    Assistir <i className="bx bx-play"></i>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        )}
      </Box>
    </Wrapper>
  );
};

export default YoutubeLatest;
