import { useState, React, useEffect } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { storeExternalUserId } from '../../actions';

function ParticipantIdentifier() {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    
    const [validated, setValidated] = useState(false);
    const [extUserId, setExtUserId] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let query = useQuery();

    useEffect(() => {
        if (query.get("unipark-id")) {
            setExtUserId(query.get("unipark-id"))
        }
    }, [query])

    const handleSumbit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            dispatch(storeExternalUserId(extUserId));
            navigate("/participant");
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
                    <p>Please provide the ID from UniPark.</p>
                    <Form noValidate validated={validated} onSubmit={handleSumbit}>
                        <Form.Group>
                            <FloatingLabel label="UniPark-ID">
                                <Form.Control required type="text" placeholder="12345" onChange={e => setExtUserId(e.target.value)} value={extUserId} disabled={query.get("unipark-id")} />
                                <Form.Control.Feedback type="invalid">Please provide a UniPark-ID!</Form.Control.Feedback>
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