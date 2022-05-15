import "./ExperimentDescription.css";
import { Accordion } from "react-bootstrap";

function ExperimentDescription() {
    // show the experiment description in an accordion
    return (
        <div>
            <Accordion defaultActiveKey="0" className="Experiment-description">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Experiment Description</Accordion.Header>
                    <Accordion.Body>
                    With the Dots Game we try to train a model which understands a user answer provided by voice.
                    Therefore, please answer in a sentence such as "There are more dots on the right / left side".
                    Provide either right or left depending on the Dots Game. Note that we are going to pay according to your
                    mentioned result and not whether the result was correct.
                    In other words, when the true result was left but you stated right we pay you the amount for the answer right.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default ExperimentDescription;