import * as React from 'react';
import './Cube.css';
import Cube from 'react-3d-cube';

class LogoCube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
    };
  }

  handleWin = () => {
    if (!this.state.hasWon) {
      this.setState({ hasWon: true });
    }
  };

  resetGame = () => {
    this.setState({ hasWon: false });
  };

  render() {
    return (
      <center>
        <h1>spin the cube and find the emoji vro</h1>

        <div style={{ marginTop: '30px' }}>
          <div style={{ width: 300, height: 300 }}>
            <Cube size={300} index="front">
              <div style={{ backgroundColor: 'lightblue' }}>
                <img style={{ width: '280px', height: '300px' }} alt="" />
              </div>

              <div style={{ backgroundColor: 'lightblue' }}>
                <img style={{ width: '280px', height: '300px' }} alt="" />
              </div>

              <div style={{ backgroundColor: 'lightblue' }}>
                <img style={{ width: '280px', height: '300px' }} alt="" />
              </div>

              <div style={{ backgroundColor: 'lightblue' }}>
                <img style={{ width: '280px', height: '300px' }} alt="" />
              </div>

              <div style={{ backgroundColor: 'lightblue' }}>
                <img style={{ width: '280px', height: '300px' }} alt="" />
              </div>

              {/* Face 6: THE WINNING FACE */}
              <div 
                style={{ backgroundColor: 'lightblue', cursor: 'pointer' }}
                onClick={this.handleWin}         /* Triggers on click */
                onMouseEnter={this.handleWin}    /* Triggers when cursor hovers over it */
              >
                <img
                  style={{ width: '280px', height: '300px', objectFit: 'contain' }}
                  src="https://thumbs.dreamstime.com/b/big-smile-emoticon-26256350.jpg"
                  alt="Smiling emoji"
                />
              </div>
            </Cube>
          </div>
        </div>
        {this.state.hasWon ? (
          <div style={{ margin: '20px', color: '#2ecc71' }}>
            <h2>you found it!</h2>
          </div>
        ) : (
          <h3 style={{ color: '#7f8c8d' }}>keep spinning...</h3>
        )}
      </center>
    );
  }
}

export default LogoCube;