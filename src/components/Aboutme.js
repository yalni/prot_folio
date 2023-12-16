import { Circle } from "react-awesome-shapes";
import { Row, Col } from "react-bootstrap";
import about from "../assets/img/about.png";
import edu from "../assets/img/edu.png";



function Aboutme() {
  return (
    <section className="mid">
      <Row>
        <Col>
          <img className="circle" src={about} alt="" />
        </Col>
        <Col className="paragraph">

          <p>
            
          Results-driven Frontend Developer with a IT Bachelor's Degree and Specialized in Frontend & Backend developer from University of Moratuwa. <span className="job1">Meta verified  HTML, CSS Expert </span>  with JavaScript, jQuery, and server-side skills. Specialized in crafting scalable, smartphone-optimized scalable designs for an exceptional user experience and balance between functional and aesthetic design. Proficient in Adobe Illustrator with <span className="job2">100% freelanced client satisfaction</span>, responsive design, and SEO principles. Strong problem-solving skills and effective communication. Committed to building reusable, aesthetically pleasing code while ensuring brand consistency.

          </p>
        </Col>
      </Row>
      <Row className="edu">
          <img className="eduimg" src={edu} alt=""/>
        </Row>
    </section>
  );

}

export default Aboutme;
