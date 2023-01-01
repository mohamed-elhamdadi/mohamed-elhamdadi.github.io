import logo from './logo.svg';
import './App.scss';

import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <h1>Mohamed Elhamdadi</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
