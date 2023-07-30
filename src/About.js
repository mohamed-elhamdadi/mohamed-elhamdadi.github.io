import './App.scss';
import { Col, Row } from 'react-bootstrap';

function About(){
    return (
        <>
          <Row>
            <h3>About Me</h3>
            <p>
            Currently, I work as a Professor in the Department of Mathematics and Statistics at the University of South Florida. I completed part of my undergraduate at the University of Fes in Fes, Morocco. I finished my bachelor's degree, master's degree, and Ph.D. from Laboratoire J.A. Dieudonn&eacute; at Universit&eacute; de Nice Sophia Antipolis in Nice, France. 
            </p>
            <a href="http://unice.fr/">Universit&eacute; de Nice Sophia Antipolis Website</a>
            <br/>
            <a href="http://math.unice.fr/">Laboratoire J.A. Dieudonn&eacute; Webpage</a>
          </Row>
          <br/>
          <Row>
            <Col>
              <h3>Research Interests</h3>
              <ul>
                <li>Algebraic and Geometric Topology</li>
                <li>Knot Theory and Protein Folding</li>
                <li>Quantum Invariants of Knots</li>
                <li>Quantum Algebra</li>
                <li>K-theory</li>
              </ul>
            </Col>
          </Row>
        </>
      );
}

export default About;