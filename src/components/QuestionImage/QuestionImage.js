import React from "react";
import "./QuestionImage.css";
import { Card } from "react-bootstrap";

class QuestionImage extends React.Component {

    render(){
        //TODO: implement logic for showing the picture only one second: https://stackoverflow.com/questions/54958440/how-to-make-the-background-image-change-every-x-seconds-in-react
        // show picture and question
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.question}
                        </Card.Text>
                    </Card.Body>
                    <div>
                        <Card.Img className="Image-Dots" variant="bottom" src={this.props.image} />
                    </div>
                </Card>
            </div>
        );
    }
}

export default QuestionImage;