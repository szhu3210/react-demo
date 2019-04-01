import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Line(props) {
  return (
    <line
      className="line"
      x1={props.x1}
      y1={props.y1}
      x2={props.x2}
      y2={props.y2}
      style={{display: props.show? "" : "none"}}
      />
  )
}

class Canvas extends Component {

  static renderLine(i, x1, y1, x2, y2, show) {
    return (
      <Line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        show={show}
      />
    );
  }

  renderLines = (lines) =>
      lines.map((line, i) => {
        return App.renderLine(i, line.x1, line.y1, line.x2, line.y2, line.show)
      }
    );

  render() {
    const lines = this.props.lines;
    return (
      <div>
        <svg height="250" width="250">
          {this.renderLines(lines)}
        </svg>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    const points = [
      {
        x: 0,
        y: 0,
      },
      {
        x: 50,
        y: 50,
      },
      {
        x: 40,
        y: 170,
      },
      {
        x: 140,
        y: 70,
      },
      {
        x: 40,
        y: 120,
      },
      {
        x: 10,
        y: 220,
      },
    ];
    this.initialState = {
      points: points,
      play: false,
      lines: App.generateLines(points),
      playlist: [],
      paused: false,
      button: "pause"
    };
    this.state = this.initialState;
  }

  static generateLines(points) {

    const lines = [];

    for (let i = 0; i < points.length-1; i++) {
      lines.push({
        x1: points[i].x,
        y1: points[i].y,
        x2: points[i+1].x,
        y2: points[i+1].y,
        show: false,
      })
    }
    return lines;
  }

  showLine(i, hide=false) {
    const lines = this.state.lines.slice();
    lines[i].show = !hide;
    this.setState({
      lines: lines
    })
  }

  showLines(hide=false) {
    let t = 0;
    let playlist = [];
    for (let i=0; i<this.state.lines.length; i++) {
      if (hide) {
        this.showLine(i, true);
      } else {
        if (!this.state.lines[i].show) {
          playlist.push(
            setTimeout(() => {
              this.showLine(i);
            }, 1000 * ++t)
          );
        }
        this.setState({
          playlist: playlist
        });
      }
    }
  }

  start() {
    this.clearPlay();
    this.clearLines();
    this.setState(this.initialState);
    this.showLines();
  }

  clearPlay() {
    const playlist = this.state.playlist;
    playlist.forEach((t) => clearTimeout(t));
    this.setState({
      playlist: []
    });
  }

  clearLines() {
    this.clearPlay();
    for (let i=0; i<this.state.lines.length; i++) {
      this.showLines(true);
    }
  }

  pause() {
    if (this.state.paused) {
      this.showLines();
      this.setState({
        button: "pause",
        paused: false
      })
    } else {
      this.clearPlay();
      this.setState({
        button: "resume",
        paused: true
      })
    }
  }

  render() {

    return (
      <div>
        <Canvas lines={this.state.lines} />
        <button onClick={() => this.start()}>start</button>
        <button onClick={() => this.pause()}>{this.state.button}</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


