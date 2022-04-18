import React from "react";
import './AudioInput.css';
import { Button } from "react-bootstrap";
import { HiOutlineMicrophone, HiOutlinePause } from "react-icons/hi";
import { Outlet } from 'react-router-dom';
import MicRecorder from "mic-recorder-to-mp3";

class AudioInput extends React.Component {
    constructor(props){
        super(props);

        // set the bit rate for the audio to be recorded to 128 bits
        this.Mp3Recorder = new MicRecorder({ bitRate: 128 });

        // set basic state values
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false
        };

        this.removeActivity = this.removeActivity.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.playBlob = this.playBlob.bind(this);
    }

    removeActivity(aId) {
        this.props.remove(aId);
    }

    startRecording() {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
          } else {
              console.log("Recording started");
              this.Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
          }
    }

    stopRecording() {
        console.log("Recording stopped.");
        this.Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL: blobURL, isRecording: false, blob: blob });
            }).catch((e) => console.log(e));
    }
    
    componentDidMount() {
        // check if the permission for the microphone is allowed in the browser
        navigator.getUserMedia({ audio: true },
            () => {
                console.log("Permission Granted");
                this.setState({ isBlocked: false });
            },
            () => {
                console.log("Permission Denied");
                this.setState({ isBlocked: true });
            });
    }

    playBlob() {
        let tmp = new Audio(this.state.blobURL);
        tmp.play();
        return "";
    }

    render(){
        return (
            <div>
                {!this.state.isRecording ? <Button variant="success" className="Mic-button" onClick={this.startRecording}><HiOutlineMicrophone size={"2em"} /> </Button> :
                <Button variant="warning" className="Mic-button" onClick={this.stopRecording}><HiOutlinePause size={"2em"} /> </Button> }
                { this.state.blobURL ?  <Button onClick={this.playBlob}>play audio</Button> : ""}
                <Outlet />
            </div>
          );
    }
  
}

export default AudioInput;
