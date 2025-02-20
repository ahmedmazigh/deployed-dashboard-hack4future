/*! 
=========================================================
* Argon Dashboard React - v1.2.4
=========================================================
* (C) 2024 Creative Tim - modifié pour projet de collecte de déchets et analyse de l'eau
=========================================================
*/

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Statistiques du dispositif */}
            <Row>
              {/* Carte 1 : Déchets collectés */}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Déchets collectés
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          1,250 kg
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-trash-alt" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 5.2%
                      </span>{" "}
                      <span className="text-nowrap">
                        Depuis le mois dernier
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* Carte 2 : Volume d'eau analysé */}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Analyse d'eau
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          3,500 L
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-tint" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 2%
                      </span>{" "}
                      <span className="text-nowrap">
                        Depuis la semaine dernière
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* Carte 3 : Capteurs actifs */}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          PlastiBots actifs
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">150</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-microchip" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 0.5%
                      </span>{" "}
                      <span className="text-nowrap">
                        Mise à jour quotidienne
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* Carte 4 : Performance du dispositif */}
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">92%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-tachometer-alt" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 4%
                      </span>{" "}
                      <span className="text-nowrap">
                        Depuis le mois dernier
                      </span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
