import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLeft: 1,
      firstRight: 1,
      secondLeft: 1,
      secondRight: 1,
      currentPlayer: "first"
    };
  }

chopFirstRight = (add) => {
  this.setState({ firstRight: this.state.firstRight + add, currentPlayer: "first" });
}
chopFirstLeft = (add) => {
  this.setState({ firstLeft: this.state.firstLeft + add, currentPlayer: "first" });
}
  chopSecondRight = (add) => {
    this.setState({ secondRight: this.state.secondRight + add, currentPlayer: "second" });
}
chopSecondLeft = (add) => {
  this.setState({ secondLeft: this.state.secondLeft + add, currentPlayer: "second" });
}

  render() {
    const one = <img src="one.png" height="150px" />;
    const two = <img src="two.png" height="150px" />;
    const three = <img src="three.png" height="150px" />;
    const four = <img src="four.png" height="150px" />;
    return (
      <MuiThemeProvider>
    <div style={{ height: "100vh", display: 'flex', flexDirection: 'column' }}>
        {/* <div className={this.state.currentPlayer === "first" ? "rotated" : "rotatedForSecond"}> */}
        {/* <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }} > */}
        <div className="rotated">
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '50%' }} >
          <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'center' }}>
                {this.state.secondLeft >= 5 ? "DEAD" : this.state.secondLeft === 1 ? one : this.state.secondLeft === 2 ? two : this.state.secondLeft === 3 ? three : this.state.secondLeft === 4 ? four : null }
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <FlatButton
              label="Left"
              disabled={this.state.currentPlayer === "first"}
              // buttonStyle={{ width: '20px' }}
                  onClick={(e) => { e.preventDefault(); this.chopFirstLeft(this.state.secondLeft); }}
              labelStyle={{ fontSize: '12px' }}
              primary={true}             
            />
            <FlatButton
              label="Right"
                  disabled={this.state.currentPlayer === "first"}
              primary={true}
                  onClick={(e) => { e.preventDefault(); this.chopFirstRight(this.state.secondLeft); }}
              labelStyle={{ fontSize: '12px' }}
            />
          </div>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }} >
          <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'center' }}>
                {this.state.secondRight >= 5 ? "DEAD" : this.state.secondRight === 1 ? one : this.state.secondRight === 2 ? two : this.state.secondRight === 3 ? three : this.state.secondRight === 4 ? four : null}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <FlatButton
              label="Left"
                  disabled={this.state.currentPlayer === "first"}
              // buttonStyle={{ width: '20px' }}
              labelStyle={{ fontSize: '12px' }}
              primary={true}
                  onClick={(e) => { e.preventDefault(); this.chopFirstLeft(this.state.secondRight); }}

            />
            <FlatButton
              label="Right"
                  disabled={this.state.currentPlayer === "first"}
              primary={true}
              labelStyle={{ fontSize: '12px' }}
                  onClick={(e) => { e.preventDefault(); this.chopFirstRight(this.state.secondRight); }}

            />
          </div>
          </div>
      </div>
      <div style={{ height: '2px', width: '100vw', backgroundColor: 'black' }} />
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }} >
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '50%' }} >
          <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'center' }}>
                {this.state.firstLeft >= 5 ? "DEAD" : this.state.firstLeft === 1 ? one : this.state.firstLeft === 2 ? two : this.state.firstLeft === 3 ? three : this.state.firstLeft === 4 ? four : null}                
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <FlatButton
              label="Left"
                  disabled={this.state.currentPlayer === "second"}

              // buttonStyle={{ width: '20px' }}
              labelStyle={{ fontSize: '12px' }}
              secondary={true}             
                  onClick={(e) => { e.preventDefault(); this.chopSecondLeft(this.state.firstLeft); }}

            />
            <FlatButton
              label="Right"
                  disabled={this.state.currentPlayer === "second"}

              secondary={true}
                  onClick={(e) => { e.preventDefault(); this.chopSecondRight(this.state.firstLeft); }}
              labelStyle={{ fontSize: '12px' }}
            />
          </div>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '50%' }} >
          <div style={{ display: 'flex', flex: 1, justifyContent: "center", alignItems: 'center' }}>
                {this.state.firstRight >= 5 ? "DEAD" : this.state.firstRight === 1 ? one : this.state.firstRight === 2 ? two : this.state.firstRight === 3 ? three : this.state.firstRight === 4 ? four : null}                                
                {/* {this.state.firstRight >= 5 ? "DEAD" : this.state.firstRight} */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }} >
            <FlatButton
              label="Left"
                  disabled={this.state.currentPlayer === "second"}

              // buttonStyle={{ width: '20px' }}
              labelStyle={{ fontSize: '12px' }}
              secondary={true}
                  onClick={(e) => { e.preventDefault(); this.chopSecondLeft(this.state.firstRight); }}

            />
            <FlatButton
              label="Right"
                  disabled={this.state.currentPlayer === "second"}

              secondary={true}
              labelStyle={{ fontSize: '12px' }}
                  onClick={(e) => { e.preventDefault(); this.chopSecondRight(this.state.firstRight); }}
            />
          </div>
          </div>
      </div>
    </div>
      </MuiThemeProvider>
  );
}
}

export default App;
