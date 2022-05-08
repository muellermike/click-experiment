import "./Exercise.css";
import { Col, Container, Row } from "react-bootstrap";
import QuestionImage from "../../components/QuestionImage/QuestionImage";
import AnswerForm from "../../components/AnswerForm/AnswerForm";
import ExperimentDescription from "../../components/ExperimentDescription/ExperimentDescription";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Exercise() {
    let navigate = useNavigate();
    const { experimentId } = useParams();
    const [exercise, setExercise] = useState({});

    // lade die nächste "Aufgabe" über das API
    useEffect(() => {
        const requestOptions = {
            mode: 'cors',
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': "test_value" }
        };

        fetch('http://localhost:8080/v1/experiments/' + experimentId  + '/15/exercises/next', requestOptions)
        .then(response => response.json())
        .then(data => {
            setExercise(data)
            console.log(data)}
            );
    }, [experimentId]);

    const handleSubmit = (recording) => {
        if(recording.recording && recording.timeToRecording) {
            console.log(recording,recording);
            // POST recording
            const requestOptions = {
                mode: 'cors',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'X-API-KEY': "test_value" },
                body: JSON.stringify({ recording: recording.recording, timeToRecording: recording.timeToRecording, userId: 15, experimentId: parseInt(experimentId), exerciseId: parseInt(exercise.id) })
            };
            fetch('http://localhost:8080/v1/recordings', requestOptions)
            .then(response => response.json())
            .then(data =>  {
                alert("sent recording " + data);
                const requestOptions = {
                    mode: 'cors',
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', 'X-API-KEY': "test_value" }
                };
        
                fetch('http://localhost:8080/v1/experiments/' + experimentId  + '/15/exercises/next', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setExercise(data)
                    console.log(data)
                });
            });
        } else {
            alert("you shall not pass");
            //navigate("/participant");
        }
    }

    // Daten anzeigen
    return (
        <div>
            <Container>
                <Row className="Container-Row">
                    <Col xs={12} sm={12} md={7}>
                        <QuestionImage question={exercise.question} image={"data:" + exercise.mimeType + ";base64, " + exercise.encodedString} />
                    </Col>
                    <Col className="Container-Col">
                        <AnswerForm onSubmit={handleSubmit} />
                    </Col>
                </Row>
            </Container>
            <ExperimentDescription></ExperimentDescription>            
        </div>
    )
}

export default Exercise;