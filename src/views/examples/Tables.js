/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import { 
  Container, 
  Row, 
  Card, 
  CardHeader, 
  CardFooter, 
  Table, 
  Pagination, 
  PaginationItem, 
  PaginationLink, 
  Badge, 
  Progress 
} from "reactstrap";
import Header from "components/Headers/Header.js";
// core components

const Tables = () => {
  return (
    <>
      <Header />
      {/* Contenu de la page */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Liste des Dispositifs Actifs</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col"># Dispositif</th>
                    <th scope="col">Status</th>
                    <th scope="col">Localisation</th>
                    <th scope="col">Batterie</th>
                    <th scope="col">Capacité déchets</th>
                    <th scope="col">Qualité d'eau</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {/* Dispositif 1 */}
                  <tr>
                    <th scope="row">Dispositif A1</th>
                    <td>
                      <Badge color="success" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Actif
                      </Badge>
                    </td>
                    <td>Zone Industrielle</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" barClassName="bg-success" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress max="100" value="30" barClassName="bg-warning" />
                        </div>
                      </div>
                    </td>
                    <td>pH 7.2</td>
                    <td className="text-right"></td>
                  </tr>
                  {/* Dispositif 2 */}
                  <tr>
                    <th scope="row">Dispositif B2</th>
                    <td>
                      <Badge color="warning" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        Maintenance
                      </Badge>
                    </td>
                    <td>Zone Urbaine</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">45%</span>
                        <div>
                          <Progress max="100" value="45" barClassName="bg-warning" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">65%</span>
                        <div>
                          <Progress max="100" value="65" barClassName="bg-danger" />
                        </div>
                      </div>
                    </td>
                    <td>pH 6.8</td>
                    <td className="text-right"></td>
                  </tr>
                  {/* Dispositif 3 */}
                  <tr>
                    <th scope="row">Dispositif C3</th>
                    <td>
                      <Badge color="success" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Actif
                      </Badge>
                    </td>
                    <td>Zone Rurale</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">95%</span>
                        <div>
                          <Progress max="100" value="95" barClassName="bg-success" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">15%</span>
                        <div>
                          <Progress max="100" value="15" barClassName="bg-info" />
                        </div>
                      </div>
                    </td>
                    <td>pH 7.5</td>
                    <td className="text-right"></td>
                  </tr>
                  {/* Dispositif 4 */}
                  <tr>
                    <th scope="row">Dispositif D4</th>
                    <td>
                      <Badge color="secondary" className="badge-dot mr-4">
                        <i className="bg-secondary" />
                        Inactif
                      </Badge>
                    </td>
                    <td>Zone Portuaire</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">20%</span>
                        <div>
                          <Progress max="100" value="20" barClassName="bg-danger" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" barClassName="bg-danger" />
                        </div>
                      </div>
                    </td>
                    <td>pH 7.0</td>
                    <td className="text-right"></td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                    <PaginationItem className="disabled">
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex="-1">
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
