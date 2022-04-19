import "./QuestionImage.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function QuestionImage() {
    const params = useParams();

    // define static data for test case only
    let daten = [
        { question: "Which side has more dots?", img: "" },
        { question: "Where are more dots?", img: "" }
    ];

    //TODO: implement logic for showing the picture only one second: https://stackoverflow.com/questions/54958440/how-to-make-the-background-image-change-every-x-seconds-in-react
    // show picture and question
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {daten[(parseInt(params.exerciseId)-1)].question}
                    </Card.Text>
                </Card.Body>
                <Card.Img className="Image-Dots" variant="bottom" src={daten[(parseInt(params.exerciseId)-1)].img} />
            </Card>
        </div>
    )
}

export default QuestionImage;