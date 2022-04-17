import "./AnswerForm.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { HiOutlineMicrophone } from "react-icons/hi";
//import { MicRecorder } from "mic-recorder-to-mp3";

function AnswerForm() {
    //TODO: implement audio recoder functionality
    
    // show form to input audio file
    return (
        <div>
            <Form className="vertical-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Please answer the question with an audio input. Please check your surrounding.</Form.Label><br />
                    <Button variant="success" className="Mic-button"><HiOutlineMicrophone size={"2em"} /> </Button>
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