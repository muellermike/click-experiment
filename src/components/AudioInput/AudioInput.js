import React from "react";
import './AudioInput.css';
import { Button } from "react-bootstrap";
import { HiOutlineMicrophone, HiOutlinePause } from "react-icons/hi";
import { Outlet } from 'react-router-dom';
import MicRecorder from "mic-recorder-to-mp3";

/*
*   Functionality implemented as: https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10
*   https://github.com/Matheswaaran/react-mp3-audio-recording/blob/master/src/App.js
*/
class AudioInput extends React.Component {
    constructor(props){
        super(props);

        // set the bit rate for the audio to be recorded to 128 bits
        this.Mp3Recorder = new MicRecorder({ bitRate: 128 });

        // set basic state values
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
            startTime: '',
            endTime: ''
        };

        // bind methods to the current state
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.playBlob = this.playBlob.bind(this);
    }

    /*
    *   Start recording the audio when the user has the permission to do so.
    *   Otherwise ask for permission again.
    */
    startRecording() {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
            this.checkAudioPermission();
          } else {
              console.log("Recording started");
              this.Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
          }
    }

    /*
    *   Stop recording and store blob into URL in current state
    */
    stopRecording() {
        console.log("Recording stopped.");
        this.Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                this.setState({ endTime: new Date()})
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL: blobURL, isRecording: false, blob: blob });
                this.props.setAudioRecording(true);
                let reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    this.setState({ base64String: reader.result.split(",")[1] });
                    this.props.setValue(reader.result.split(",")[1], this.state.endTime - this.state.startTime);
                }
            }).catch((e) => console.log(e));
    }

    /*
    *   check whether the user has the permission to record audio in browser
    */
    checkAudioPermission() {
        // check if the permission for the microphone is allowed in the browser
        navigator.mediaDevices.getUserMedia({ audio: true },
            () => {
                console.log("Permission Granted");
                this.setState({ isBlocked: false });
            },
            () => {
                console.log("Permission Denied");
                this.setState({ isBlocked: true });
            });
    }
    
    /*
    *   Run steps after component is mounted:
    *   get permission to record audio in browser
    */
    componentDidMount() {
        // check audio recording permission
        this.checkAudioPermission()
        this.setState( {startTime: new Date()});
    }

    /*
    *   Play sound recorded before (only if there is a blobURL)
    */
    playBlob() {
        if(this.state.blobURL) {
            let tmp = new Audio(this.state.blobURL);
            tmp.play();
        }
        return "";
    }

    /*
    *   Render buttons which show the recording and pause icon
    */
    render(){
        return (
            <div>
                {!this.state.isRecording ? <Button variant="success" className="Mic-button" onClick={this.startRecording}><HiOutlineMicrophone size={"2em"} /> </Button> :
                <Button variant="warning" className="Mic-button" onClick={this.stopRecording}><HiOutlinePause size={"2em"} /> </Button> }
                { this.state.blobURL && this.props.showPlayAudio ?  <Button onClick={this.playBlob}>play audio</Button> : ""}
                <Outlet />
            </div>
          );
    }
  
}

export default AudioInput;
