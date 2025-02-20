import { useState } from "react";
// Bibliothèque pour concaténer des classes
import classnames from "classnames";
// Plugin JavaScript pour créer des graphiques
import Chart from "chart.js";
// Plugins React pour créer des graphiques
import { Line, Bar } from "react-chartjs-2";
// Composants Reactstrap
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// Composants et variables core
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  return (
    <>
      <Header />
      {/* Contenu de la page */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Vue d'ensemble
                    </h6>
                    <h2 className="mb-0">Déchets collectés</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Mois</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Semaine</span>
                          <span className="d-md-none">S</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Graphique en ligne pour la collecte de déchets */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Analyse de l'eau</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Graphique en barres pour l'analyse de l'eau */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Données du dispositif</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Voir tous
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Site</th>
                    <th scope="col">Déchets (kg)</th>
                    <th scope="col">pH de l'eau</th>
                    <th scope="col">Performance (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Site A</th>
                    <td>450</td>
                    <td>7.2</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 85%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Site B</th>
                    <td>320</td>
                    <td>6.8</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" /> 80%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Site C</th>
                    <td>600</td>
                    <td>7.5</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 90%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Site D</th>
                    <td>280</td>
                    <td>7.0</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 75%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Site E</th>
                    <td>510</td>
                    <td>7.3</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 88%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Répartition des données</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Voir tout
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Source</th>
                    <th scope="col">Contribution</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Capteurs de déchets</th>
                    <td>45%</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">45%</span>
                        <div>
                          <Progress
                            max="100"
                            value="45"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Capteurs d'eau</th>
                    <td>55%</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">55%</span>
                        <div>
                          <Progress
                            max="100"
                            value="55"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
