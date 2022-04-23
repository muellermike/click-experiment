import { Col, Form, Row, Button, Spinner, Card } from "react-bootstrap";
import AudioInput from "../../components/AudioInput/AudioInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ParticipantInfo.css";

// redux: https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
function ParticipantInfo() {

    let navigate = useNavigate();
    const [isRecorded, setRecorded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setRecorded(false);
        navigate("/exercise/1");
    }

    const setAudioRecording = (value) => {
        setRecorded(value);
    }

    // check cards (Header and Footer): https://react-bootstrap.github.io/components/cards/#header-and-footer
    // show data to receive participant information
    return (
        <div>
            <h2>Microphone Check and Participant Information</h2><br />
            <p>
                To check the audio for the experiment please test below. Additionally, please provide information about yourself. 
                All data is being recorded anonymously. We never have the possibility to find out who you are.
                Please answer the question with an audio input. Please check your surrounding.
            </p>
            <Card>
                <Form className="form-container">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalGender">
                        <Form.Label column sm={4}>Gender</Form.Label>
                        <Col sm={8}>
                            <AudioInput setAudioRecording={setAudioRecording} showPlayAudio></AudioInput>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalAge">
                        <Form.Label column sm={4}>Age</Form.Label>
                        <Col sm={8}>
                            <AudioInput setAudioRecording={setAudioRecording} showPlayAudio></AudioInput>
                        </Col>
                    </Form.Group>
                    <Button variant="primary" disabled={!isRecorded} type="submit" onClick={handleSubmit}>
                        { false ? <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        /> : '' }
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default ParticipantInfo;