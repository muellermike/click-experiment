import { Col, Form, Row, Button, ButtonGroup, Card, FloatingLabel, ToggleButton, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { storeExperimentId, storeUserId } from '../../actions';
import "./ParticipantInfo.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";

function ParticipantInfo() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [startTimeAge, setStartTimeAge] = useState(new Date());
    const [startTimeGender] = useState(new Date());
    const [clickTimeGender, setClickTimeGender] = useState(null);
    const [endTimeAge, setEndTimeAge] = useState(null);
    const globalState = useSelector(state => state.userInfoState);
    const imageState = useSelector(state => state.imageState);
    const experimentState = useSelector(state => state.experimentState);

    const genders = [
        { name: "I am a female", value: "female" },
        { name: "I am a male", value: "male" },
        { name: "I am diverse", value: "diverse" }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // POST user
        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': process.env.REACT_APP_API_KEY_VALUE },
            body: JSON.stringify({
                id: globalState.externalUserId,
                age: age,
                timeToAgeEntry: (endTimeAge - startTimeAge),
                gender: gender,
                timeToGenderClick: (clickTimeGender - startTimeGender),
                timeToSubmit: (new Date() - startTimeGender)
            })
        };
        
        fetch(process.env.REACT_APP_API_BASE_URL + '/users', requestOptions)
        .then(response => {
            if(response.status !== 200) {
                throw new Error("Server Error");
            }

            return response.json();
        })
        .then(data =>  {
            dispatch(storeUserId(data));
            requestOptions.body = JSON.stringify({ 
                user: data, 
                start: new Date().toISOString(), 
                imageTime: imageState.imageTime, 
                experimentName: experimentState.experimentName
            });
            
            fetch(process.env.REACT_APP_API_BASE_URL + '/experiments', requestOptions)
            .then(response => {
                if(response.status !== 200) {
                    throw new Error("Server Error");
                }

                return response.json();
            })
            .then(data => {
                dispatch(storeExperimentId(data));
                navigate("/practise-intro");
            });
        })
        .catch(function(err) {
            navigate("/error");
        });
    }

    // show form to receive participant information
    return (
        <div>
            <h2>Participant Information</h2><br />
            <p>
                Please provide information about yourself. Both, gender and age are required.
                All data is being collected anonymously. We never have the possibility to find out who you are.
                Please answer the question with either a text or number input.
            </p>
            <Card>
                <Form className="form-container">
                    <Row>
                        <Form.Group className="no-padding" controlId="formHorizontalGender">
                            <Card className="participant-card">
                                <Card.Header as="h5">Gender</Card.Header>
                                <Card.Body>
                                    <Card.Title>Provide your gender</Card.Title>
                                    <Card.Text>
                                        Please select your gender.
                                    </Card.Text>
                                    <ButtonGroup className="gender-btn-group">
                                        {genders.map((g, idx) => (
                                        <ToggleButton
                                            required
                                            disabled={gender}
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={'outline-success'}
                                            name="radio"
                                            value={g.value}
                                            checked={gender === g.value}
                                            onChange={(e) => {
                                                setGender(e.currentTarget.value);
                                                setClickTimeGender(new Date());
                                                setStartTimeAge(new Date());
                                            }}
                                        >
                                            {g.name}
                                        </ToggleButton>
                                        ))}
                                    </ButtonGroup>
                                    { gender !== "" ? 
                                    <Alert key={"success"} variant={"success"}>
                                        <HiOutlineBadgeCheck size={"2em"} /> Successfully answered!
                                    </Alert> : "" }
                                </Card.Body>
                            </Card>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formHorizontalAge">
                            { gender !== "" ?
                            <Card className="participant-card">
                                <Card.Header as="h5">Age</Card.Header>
                                <Card.Body>
                                    <Card.Title>Provide your age</Card.Title>
                                    <Card.Text>
                                        Please only provide your current age as a number.
                                    </Card.Text>
                                    <FloatingLabel label="Your Age">
                                        <Form.Control required type="number" placeholder="26" disabled={age > 14 && age < 100} onChange={e => {
                                            setAge(e.target.value);
                                            setEndTimeAge(new Date());
                                        }} value={age} />
                                        <Form.Control.Feedback type="invalid">Please provide your age!</Form.Control.Feedback>
                                    </FloatingLabel>
                                </Card.Body>
                            </Card> : "" }
                        </Form.Group>
                    </Row>
                    <Row className="button-row">
                        <Col>
                            <Button variant="primary" type="submit" disabled={!gender | !age} onClick={handleSubmit}>Go to practice game</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default ParticipantInfo;