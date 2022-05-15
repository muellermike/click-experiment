import React from "react";
import "./QuestionImage.css";
import { Card } from "react-bootstrap";

class QuestionImage extends React.Component {
    constructor(props){
        super(props);

        // set basic state values
        this.state = {
            timeIsUp: false
        };
    }

    /*
    *   Run steps after component is mounted:
    *   set timeout for showing image several seconds
    */
     componentDidUpdate(prevProps, prevState) {
         if(prevProps !== this.props) {
            this.setState({
                timeIsUp: false
            });
            
            this.timer = setTimeout(() => {
                this.setState({
                    timeIsUp: true
                   });
               }, 2000);
         }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                timeIsUp: true
               });
           }, 2000);
    }

    /*
    *  Run steps before the component will unmount.
    *  timeout is cleared.
    */
    componentWillUnmount() {
        if(this.timer) {
            clearTimeout(this.timer);
        }
    }

    render(){
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
                        {this.state.timeIsUp ? <Card.Img className="Image-Dots" variant="bottom" /> : 
                            <Card.Img className="Image-Dots" variant="bottom" src={this.props.image} />
                        }
                    </div>
                </Card>
            </div>
        );
    }
}

export default QuestionImage;