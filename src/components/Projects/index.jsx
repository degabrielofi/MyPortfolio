import { AllProjects, Title } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import projects from "assets/data/projects.json";

const Projects = () => {
  return (
    <AllProjects id="Portfolio">
      <Title>
        <div className="title_page">
          <h1 className="section-title-01">
            <i className="bx bx-book-content m-2"></i>CONSTRUÇÕES
          </h1>
          <h2 className="section-title-02">
            PROJETOS QUE EU DESENHEI E ENTREGUEI
          </h2>
        </div>
      </Title>

      <section className="project">
        <Container>
          <Row>
            {projects.map((project) => {
              return (
                <Col key={project.title} xs={12} sm={6} md={4}>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        {/* ✅ Badge opcional: você controla pelo JSON */}
                        {project.solo ? (
                          <div className="badge">SOLO</div>
                        ) : null}
                        <img src={project.imgUrl} alt={project.title} />
                      </div>

                      <div className="flip-card-back">
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>

                        <div className="links">
                          {project.id ? (
                            <a
                              href={`/details/${project.id}`}
                              aria-label="Ver detalhes"
                            >
                              <i className="bx bx-plus"></i>
                            </a>
                          ) : (
                            ""
                          )}

                          {project.github ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={project.github}
                              aria-label="GitHub"
                            >
                              <i className="bx bxl-github"></i>
                            </a>
                          ) : (
                            ""
                          )}

                          {project.link ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={project.link}
                              aria-label="Abrir projeto"
                            >
                              <i className="bx bx-link"></i>
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </AllProjects>
  );
};

export default Projects;
