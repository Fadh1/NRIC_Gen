import React from 'react';
import { Typography, Button } from 'antd';
import './App.css';
const { Title } = Typography;



class App extends React.Component{
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { random: "S0000001I" };
    }

    handleClick() {
      var alphabet = ["S","T","F","G","A", "B", "C", "D", "E", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "U", "V", "W", "X", "Y", "Z"];
      var startRand = Math.floor(Math.random()*4);
      var endRand = Math.floor(Math.random()*alphabet.length);
      var digitRand = Math.floor(1000000 + Math.random() * 9000000)
      var random = alphabet[startRand] + digitRand+ alphabet[endRand]; 
      this.setState({ random: random });
    }


    render(){
      return (
        <div className="App" style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <Title>NRIC Number</Title>
          <Title level = {3}>{this.state.random}</Title>
          <Button onClick={this.handleClick.bind(this)} style={{ marginTop: 20 }} type="primary" size="large">
            Generate!
          </Button>
        </div>
      );

    }
}

export default App;
