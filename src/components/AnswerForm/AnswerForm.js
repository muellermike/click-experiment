import "./AnswerForm.css";
import { Button, Form, Spinner } from "react-bootstrap";
import AudioInput from "../AudioInput/AudioInput";

function AnswerForm(props) {
    //TODO: implement audio recoder functionality: https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10
    //https://github.com/Matheswaaran/react-mp3-audio-recording/blob/master/src/App.js

    // show form to input audio file
    return (
        <div>
            <Form className="vertical-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Please answer the question with an audio input. Please check your surrounding.</Form.Label><br />
                    <AudioInput></AudioInput>
                    <Form.Text className="text-muted">
                        We'll never share your voice input with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" disabled type="submit">
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