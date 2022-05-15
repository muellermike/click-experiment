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
            <h1>Welcome to our NLP Experiment</h1>
            <div>
                <p>Thank you for participating in our NLP Experiment.</p>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Title>Dots Game</Card.Title>
                                <Card.Body>
                                    <p>In this game you will see a box with multiple red dots in it (see example below).</p>
                                    <p>You will only see the dots for about 1 second, and once they disappear your task is to indicate whether there were more dots on the right side of the square or on the left side of the square (note that sometimes a dot will be on the line between two parts).</p>
                                    <p>Please respond with an audio recording stating in a full sentence which side has more dots. Please answer in with a sentence like: "There are more dots on the right side". This is important because our algorithm processes such sentences. Note that your audio will never be shared with anyone.</p>
                                    <p>Before starting the experiment game you have to record your gender and age. In this step you can become familiar with the audio recording and also check your audio. This won't be possible in the real game.</p>
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
                                    <p>Since we want to understand what you have said, you are being paid according to your stated answer. We do not check whether your answer was correct or not.</p>
                                    <p>Again, please always respond with a full sentence.</p>
                                    <p>If you state in your answer that it has more dots on the rigth side you are being paid 1 Swiss Franc. When you mention the left side with more dots we pay you 0.5 Swiss Francs.</p>
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