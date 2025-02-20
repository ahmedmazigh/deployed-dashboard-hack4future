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
import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const VideoWrapper = () => {
  return (
    <div className="video-container" style={{ height: `600px` }}>
      <video width="100%" height="100%" controls>
        <iframe width="1074" height="604" src="https://www.youtube.com/embed/RSMnAMRolhg" title="OIIAOIIA CAT × AFTER DARK (EXTENDED)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </video>
    </div>
  );
};


const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <VideoWrapper />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
