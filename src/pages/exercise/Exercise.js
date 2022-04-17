import { useEffect } from "react";
import { Accordion, Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
//import { MicRecorder } from "mic-recorder-to-mp3";

function Exercise() {
    let daten = [
        { question: "Which side has more dots?", img: ""}
    ];

    // lade Daten von einem API
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
        .then(result => result.json());
    }, []);

    /*navigator.getUserMedia({ audio: true },
        () => {
            console.log("Permission Granted");
        },
        () => {
            console.log("Permission Denied");
        });*/

    // Daten anzeigen
    return (
        <div>
            <Container>
                <Row className="Container-Row">
                    <Col xs={5}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    {daten[0].question}
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={daten[0].img} />
                        </Card>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Answer</Form.Label>
                                <Button variant="success"><i className="fa fa-microphone" /></Button>{' '}
                                <Form.Text className="text-muted">
                                We'll never share your voice inputwith anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" disabled type="submit">
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                Loading...
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Accordion defaultActiveKey="0" className="Experiment-description">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiment Description</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    )
}

export default Exercise;