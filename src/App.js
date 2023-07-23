import './App.scss';
import { useState } from 'react';
import profile_img from './mohamed_profile.jpeg';
import About from './About';

import {
  Container, Row, Col, Nav, Navbar, Card
} from 'react-bootstrap';

function getPage(page){
  if(page == 'about') return <About/>;
  else return "";
}

function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <Card>
              <Card.Img variant="top" src={profile_img} alt="profile picture of Mohamed Elhamdadi"></Card.Img>
              <Card.Body>
                <Card.Title>Mohamed Elhamdadi</Card.Title>
                <Card.Text>Professor of Mathematics</Card.Text>
                <Card.Link href="http://math.usf.edu/">Department of Mathematics and Statistics</Card.Link>
                <br/>
                <Card.Link href="http://usf.edu/">University of South Florida</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7} xl={7} xxl={7}>
            <Row>
              <Col className="text-center">
                <a className="header-link" href="#" onClick={() => setPage(getPage('about'))}>About Me</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('research'))}>Research &amp; Publications</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('classes'))}>Classes</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('students'))}>Postdocs &amp; Students</a>
              </Col>
            </Row>
            {page}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
