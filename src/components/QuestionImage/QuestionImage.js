import "./QuestionImage.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ex1 from "../../assets/images/ex1.PNG";
import ex2 from "../../assets/images/ex2.PNG";

function QuestionImage() {
    const params = useParams();

    // define static data for test case only
    let daten = [
        { question: "Which side has more dots?", img: ex1 },
        { question: "Where are more dots?", img: ex2 }
    ];
    let parsedId = parseInt(params.exerciseId);
    parsedId = (parsedId > daten.length) ? 0 : parsedId - 1;

    //TODO: implement logic for showing the picture only one second: https://stackoverflow.com/questions/54958440/how-to-make-the-background-image-change-every-x-seconds-in-react
    // show picture and question
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {daten[parsedId].question}
                    </Card.Text>
                </Card.Body>
                <div>
                    <Card.Img className="Image-Dots" variant="bottom" src={daten[parsedId].img} />
                </div>
            </Card>
        </div>
    )
}

export default QuestionImage;