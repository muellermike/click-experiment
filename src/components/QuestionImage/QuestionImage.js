import "./QuestionImage.css";
import { Card } from "react-bootstrap";

function QuestionImage() {
    // define static data for test case only
    let daten = [
        { question: "Which side has more dots?", img: ""}
    ];

    //TODO: implement logic for showing the picture only one second
    // show picture and question
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {daten[0].question}
                    </Card.Text>
                </Card.Body>
                <Card.Img className="Image-Dots" variant="bottom" src={daten[0].img} />
            </Card>
        </div>
    )
}

export default QuestionImage;