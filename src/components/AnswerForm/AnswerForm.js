import "./AnswerForm.css";
import { Button, Form, Spinner } from "react-bootstrap";
import AudioInput from "../AudioInput/AudioInput";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function AnswerForm(props) {
    const params = useParams();
    let navigate = useNavigate();
    const [isRecorded, setRecorded] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let parsedId = parseInt(params.exerciseId);
        setRecorded(false);
        navigate("/exercises/" + (parsedId+1));
    }

    const setAudioRecording = (value) => {
        setRecorded(value);    
    }

    // show form to input audio file
    return (
        <div>
            <Form className="vertical-center">
                <Form.Group className="mb-3" controlId="formBasicAudio">
                    <Form.Label>Please answer the question with an audio input. Please check your surrounding.</Form.Label><br />
                    <AudioInput setAudioRecording={setAudioRecording}></AudioInput>
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