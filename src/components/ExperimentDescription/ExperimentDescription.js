import "./ExperimentDescription.css";
import { Accordion } from "react-bootstrap";

function ExperimentDescription() {
    // show the rules of the experiment in an accordion
    return (
        <div>
            <Accordion defaultActiveKey="0" className="Experiment-description">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiment Rules</Accordion.Header>
                    <Accordion.Body>
                    You have to solve the task by answering whether there are more dots on the right or left side.
                    Therefore, please press the corresponding button for left and right.
                    Note that we are going to pay according to your mentioned result and not whether the result was correct.
                    In other words, when the true result was right but you stated left we pay you the amount for the answer left.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default ExperimentDescription;