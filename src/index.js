import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // What am I missing #4?

  render() {
    // What value should go in the TODO #2?
    // How do we handle events? #3?
    return (
      // After we made all those changes to Board, what's the story #8
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  // Same thing, what am I missing here #5?

  // Let's do something with i #1
  // Now how do we get the value from the board? #6
  // Fancy JS time, what else can be passed #7?
  renderSquare(i) {
    return <Square />;
  }

  // What's something we're missing that we should definitely be defining? #9

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
