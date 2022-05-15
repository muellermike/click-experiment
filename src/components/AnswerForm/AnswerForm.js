import "./AnswerForm.css";
import { Button, Form, Spinner } from "react-bootstrap";
import AudioInput from "../AudioInput/AudioInput";
import { useState } from "react";

function AnswerForm(props) {
    const [isRecorded, setRecorded] = useState(false);
    const [recording, setRecording] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(recording);
    }

    const setAudioRecording = (value) => {
        setRecorded(value);    
    }

    const handleExerciseRecording = (recording, timeToRecording) => {
        setRecording({
            "recording": recording,
            "timeToRecording": timeToRecording,
            "endTime": new Date()
        });
    }

    // show form to input audio file
    return (
        <div>
            <Form className="vertical-center">
                <Form.Group className="mb-3" controlId="formBasicAudio">
                    <Form.Label>Please answer the question with an audio input in a sentence like "There are more dots on the right / left side". Please check your surrounding.</Form.Label><br />
                    <AudioInput setAudioRecording={setAudioRecording} setValue={handleExerciseRecording}></AudioInput>
                    <Form.Text className="text-muted">
                        We'll never share your voice input with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" disabled={!isRecorded} type="submit" onClick={handleSubmit}>
                    { false ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    /> : '' }
                    Submit Answer
                </Button>
            </Form>
            
        </div>
    )
}

export default AnswerForm;