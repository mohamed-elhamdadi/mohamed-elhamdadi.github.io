import './App.scss';
import book from './Quandles.jpg';
import { useState } from 'react';
import profile_img from './mohamed_profile.jpg';
import About from './About';
import Research from './Research';
import Classes from './Classes';
import Students from './Students';
import CV from './CV';

import {
  Container, Row, Col, Nav, Navbar, Card
} from 'react-bootstrap';

function getPage(page){
  if(page == 'about') return <About/>;
  else if(page == 'research') return <Research/>;
  else if(page == 'classes') return <Classes/>;
  else if(page == 'students') return <Students/>;
  else if(page == 'CV') return <CV/>;
  else return "";
}

function App() {
  const [page, setPage] = useState(<About/>);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <Card>
              <Card.Img className='profile-img' variant="top" src={profile_img} alt="profile picture of Mohamed Elhamdadi"></Card.Img>
              <Card.Body>
                <Card.Title>Mohamed Elhamdadi</Card.Title>
                <Card.Text>Professor of Mathematics</Card.Text>
                <Card.Link href="http://math.usf.edu/">Department of Mathematics and Statistics</Card.Link>
                <br/>
                <Card.Link href="http://usf.edu/">University of South Florida</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <Row>
              <Col className="text-center">
                <a className="header-link" href="#" onClick={() => setPage(getPage('about'))}>Home</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('research'))}>Research &amp; Publications</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('classes'))}>Classes</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('students'))}>Postdocs &amp; Students</a>
                <a className="header-link" href="#" onClick={() => setPage(getPage('CV'))}>CV</a>
              </Col>
            </Row>
            <div className='scroll'>
            {page}
            </div>
            
          </Col>
          <Col className='text-center' xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <br/>
            <p>Check out my book</p>
              <img src={book} width='80%' />
              <br/>
              <a target="_" href="http://bookstore.ams.org/stml-74">on AMS</a>
              <br/>
              <a target="_" href="https://www.amazon.com/Quandles-Introduction-Student-Mathematical-Library/dp/1470422131">on Amazon</a>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default App;
