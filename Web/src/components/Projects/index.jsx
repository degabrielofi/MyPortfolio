import { AllProjects, Title } from "./style";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../Data/projects.json";

const Projects = () => {
  return (
    <AllProjects id="portfolio">
      <Title>
        <div className="title_page">
          <h1 className="section-title-01">
            <i className="bx bx-book-content m-2"></i>PORTFÓLIO
          </h1>
          <h2 className="section-title-02">MEUS PROJETOS</h2>
        </div>
      </Title>

      <section className="project">
        <Container>
          <Row>
            {projects.map((project) => {
              return (
                <Col key={project.title} size={12} sm={6} md={4} id="Portfolio">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={project.imgUrl} alt="Projects" />
                      </div>
                      <div className="flip-card-back">
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>
                        <div className="links">
                          {project.id ? (
                            <a href={`/details/${project.id}`}>
                              <i className="bx bx-plus"></i>
                            </a>
                          ) : (
                            ""
                          )}
                          {project.github ? (
                            <a target="--blank" href={project.github}>
                              <i className="bx bxl-github"></i>
                            </a>
                          ) : (
                            ""
                          )}
                          <a target="--blank" href={project.link}>
                            <i className="bx bx-link"></i>
                          </a>
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
