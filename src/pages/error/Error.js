import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import "./Error.css";

function Error() {
    const globalState = useSelector(state => state.userInfoState);
    const imageState = useSelector(state => state.imageState);
    
    /*
    *   Show error text and redirect to the homepage.
    */
    return (
        <div>
            <h1>An error occured</h1>
            <div>
                <p>Sorry, we ran into a problem.</p>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Title>Please try again later</Card.Title>
                                <Card.Body>
                                    <p>Either restart the experiment with the button bellow or go back to the Survey Page.</p>
                                    <p>Another opportunity is to write an email to me.</p>
                                        <Button variant="primary" href={"/?img_tm=" + imageState.imageTime + "&id_user=" + globalState.externalUserId}>Restart the experiment</Button>
                                    <Button variant="secondary" href="mailto:mike.mueller@student.unisg.ch?subject=Experiment App not working properly">Write a mail</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Error;