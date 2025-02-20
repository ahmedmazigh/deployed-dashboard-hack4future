import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

// Exemple de données pour les dispositifs
const devices = [
  {
    id: "Dispositif A1",
    status: "Actif",
    location: "Zone Industrielle",
    videoUrl: "https://www.youtube.com/embed/RSMnAMRolhg"
  },
  {
    id: "Dispositif B2",
    status: "Actif",
    location: "Zone Urbaine",
    videoUrl: "https://www.youtube.com/embed/tP-EsZ-deHg"
  },
  {
    id: "Dispositif C3",
    status: "Maintenance",
    location: "Zone Rurale",
    videoUrl: "https://www.youtube.com/embed/0QRFEL2aQNM"
  },
  {
    id: "Dispositif D4",
    status: "Actif",
    location: "Zone Portuaire",
    videoUrl: "https://www.youtube.com/embed/5eR6QPcoL_w"
  }
];

const VideoWrapper = ({ videoUrl }) => {
  return (
    <div className="video-container" style={{ height: `600px` }}>
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title="Diffusion en direct"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const ActiveDevices = ({ devices, onSelect, selectedDeviceId }) => {
  return (
    <Card className="shadow">
      <CardBody>
        <h5 className="mb-3">Dispositifs Actifs</h5>
        <ListGroup>
          {devices.map((device, index) => (
            <ListGroupItem
              key={index}
              action
              active={device.id === selectedDeviceId}
              onClick={() => onSelect(device)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>{device.id}</div>
                <div>
                  <span
                    className={`badge ${
                      device.status === "Actif"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {device.status}
                  </span>
                </div>
              </div>
              <small className="text-muted">
                Localisation : {device.location}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

const Live = () => {
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="8">
            <Card className="shadow border-0">
              <VideoWrapper videoUrl={selectedDevice.videoUrl} />
            </Card>
          </Col>
          <Col lg="4">
            <ActiveDevices
              devices={devices}
              onSelect={setSelectedDevice}
              selectedDeviceId={selectedDevice.id}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Live;
