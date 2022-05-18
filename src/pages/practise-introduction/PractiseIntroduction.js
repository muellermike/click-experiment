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
                                <p>Take your time to figure out how the user interface works and how you can interact with it. During the practise game you have the opportunity to reload the task. This functionality won't be possible during the real experiment.</p>
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