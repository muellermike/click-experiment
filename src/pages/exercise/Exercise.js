import "./Exercise.css";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuestionImage from "../../components/QuestionImage/QuestionImage";
import AnswerForm from "../../components/AnswerForm/AnswerForm";
import ExperimentDescription from "../../components/ExperimentDescription/ExperimentDescription";
//import { MicRecorder } from "mic-recorder-to-mp3";

function Exercise() {

    // lade Daten von einem API
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
        .then(result => result.json());
    }, []);

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
            <ExperimentDescription></ExperimentDescription>            
        </div>
    )
}

export default Exercise;