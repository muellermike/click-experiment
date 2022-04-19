import { useState } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ParticipantIdentifier() {
    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();

    const handleSumbit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // TODO: save id into reducer or so
            navigate("/exercises/1");
        }

        setValidated(true);
    }

    /*
    *   Form for the identification of a participant
    */
    return (
        <div>
            <Card>
                <Card.Title>Participate in the experiment</Card.Title>
                <Card.Body>
                    <p>Please provide the ID from Prolific.</p>
                    <Form noValidate validated={validated} onSubmit={handleSumbit}>
                        <Form.Group>
                            <FloatingLabel label="Prolific-ID">
                                <Form.Control required type="text" placeholder="12345" />
                                <Form.Control.Feedback type="invalid">Please provide a Prolific-ID!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" style={{ margin: "25px"}} type="submit">Next</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ParticipantIdentifier;