import "./Exercise.css";
import { useEffect } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import QuestionImage from "../../components/QuestionImage/QuestionImage";
import AnswerForm from "../../components/AnswerForm/AnswerForm";
//import { MicRecorder } from "mic-recorder-to-mp3";

function Exercise() {

    // lade Daten von einem API
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
        .then(result => result.json());
    }, []);

    /*navigator.getUserMedia({ audio: true },
        () => {
            console.log("Permission Granted");
        },
        () => {
            console.log("Permission Denied");
        });*/

    // Daten anzeigen
    return (
        <div>
            <Container>
                <Row className="Container-Row">
                    <Col xs={7}>
                        <QuestionImage />
                    </Col>
                    <Col className="Container-Col">
                        <AnswerForm />
                    </Col>
                </Row>
            </Container>
            <Accordion defaultActiveKey="0" className="Experiment-description">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiment Description</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    )
}

export default Exercise;