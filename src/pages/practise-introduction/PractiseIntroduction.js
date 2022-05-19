import { Card, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PractiseIntroduction() {
    let navigate = useNavigate();

    const handleClickNext = (event) => {
        event.preventDefault();
        navigate("/practise");
    }

    /*
    *   Show introduction to the practise part.
    */
    return (
        <div>
            <h1>Practise Task of the Dots Experiment</h1>
            <div>
                <p>Get to know how the Dots Experiment works</p>
                <Container>
                    <Row>
                        <Card>
                            <Card.Title>Dots Game</Card.Title>
                            <Card.Body>
                                <p>In the next step you have the chance to test the experiment.</p>
                                <p>You will see the dots game almost as it is during the experiemnt. The only difference is that there are more hints how the user interface works.</p>
                                <p>Take your time to figure out how the user interface works and how you can interact with it. The practise game does not influence the payment.</p>
                                <p>The dots image is only visible for about 5 seconds. Please make sure you look at the picture to decide what to answer.</p>
                                <p>Afterwards, press the green microphone button to start recording. Once you have finished speaking, press the yellow pause button. Then, you can submit your recorded answer.</p>
                                <p>Once you are ready, scroll down to start the experiment.</p>
                                <Button variant="primary" onClick={handleClickNext} >Go to the practise game</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default PractiseIntroduction;