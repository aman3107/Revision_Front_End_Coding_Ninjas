import React from "react";
import "./styles.css";

const MOODS = [
  "happy",
  "sad",
  "angry",
  "excited",
  "fearful",
  "disgusted",
  "surprised",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: "",
    };
  }

  handleClick() {
    const moodIndex = Math.floor(Math.random() * MOODS.length);
    this.setState({ 
      prediction: MOODS[moodIndex] 
    });
  }

  render() {
    const {currentPrediction} = this.state.prediction;
    return (
      <div>
        <h1>Mood Predictor</h1>
        {{currentPrediction} && (
          <p>
            Mood predictor has predicted that you mood will be
            <b> {currentPrediction} </b>today.
          </p>
        )}
        <button onClick={this.handleClick}>Predict Mood</button>
      </div>
    );
  }
}

export default App;
