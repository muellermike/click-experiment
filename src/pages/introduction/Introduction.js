import { Card, Col, Container, Row } from "react-bootstrap";
import ParticipantIdentifier from "../../components/ParticipantIdentifier/ParticipantIdentifier";
import "./Introduction.css";
import exampleImg from "../../assets/images/example.PNG";

function Introduction() {
    
    /*
    *   Show introduction to the experiment.
    */
    return (
        <div>
            <h1>Welcome to the Dots Experiment</h1>
            <div>
                <p>Thank you for participating in our Dots Experiment.</p>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Title>Dots Game</Card.Title>
                                <Card.Body>
                                    <p>In this game you will see a box with multiple red dots in it (see example below).</p>
                                    <p>You will only see the dots for about 5 seconds, and once they disappear your task is to indicate whether there were more dots on the right side of the square or on the left side of the square (note that sometimes a dot will be on the line between two parts). You indicate this by clicking the answer button you like.</p>
                                    <p>Before starting the experiment game you have to provide your gender and age.</p>
                                </Card.Body>
                                <div>
                                    <Card.Img variant="bottom" src={exampleImg} />
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Title>Payment</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">based on your answers</Card.Subtitle>
                                <Card.Body>
                                    <p>You are being paid according to your provided answer. We do not check whether your answer was correct or not.</p>
                                    <p>If you show by clicking that it has more dots on the rigth side you are being paid 1 Swiss Franc. When you select the left side with more dots we pay you 0.5 Swiss Francs.</p>
                                </Card.Body>
                            </Card>
                            <ParticipantIdentifier></ParticipantIdentifier>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Introduction;