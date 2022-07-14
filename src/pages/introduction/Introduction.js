import { Container, Row } from "react-bootstrap";
import ParticipantIdentifier from "../../components/ParticipantIdentifier/ParticipantIdentifier";
import "./Introduction.css";

function Introduction() {
    
    /*
    *   Show introduction to the experiment.
    */
    return (
        <div>
            <h1>Welcome to the Dots Estimation Experiment</h1>
            <div>
                <Container>
                    <Row>
                        <ParticipantIdentifier></ParticipantIdentifier>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Introduction;