import "./AnswerForm.css";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import { useState } from "react";

function AnswerForm(props) {
    const initialAnswer = "";
    const [isAnswered, setAnswered] = useState(false);
    const [answer, setAnswer] = useState(initialAnswer);

    const answers = [
        { value: "left", name: "left" },
        { value: "right", name: "right" }
    ];
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(answer);
        setAnswered(false);
        setAnswer(initialAnswer);
    }

    // show form to input audio file
    return (
        <div>
            <Form className="vertical-center">
                <Form.Group className="mb-3" controlId="formBasicAudio">
                    <Form.Label>Please answer the question by <b>clicking on one of the buttons</b> below.</Form.Label><br />
                    <ButtonGroup>
                        {answers.map((a, idx) => (
                        <ToggleButton
                            required
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={'outline-success'}
                            name="radio"
                            value={a.value}
                            checked={answer === a.value}
                            onChange={(e) => {
                                setAnswer(e.currentTarget.value);
                                setAnswered(true);
                            }}
                        >
                            {a.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Form.Group>
                <Button variant="primary" disabled={!isAnswered} type="submit" onClick={handleSubmit}>
                    Submit Answer
                </Button>
            </Form>
            
        </div>
    )
}

export default AnswerForm;