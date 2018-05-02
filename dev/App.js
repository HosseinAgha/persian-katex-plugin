import './App.less';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'katex/dist/katex.css';
import katex from 'katex';
import persianKatexPlugin from '../src/index';

persianKatexPlugin(katex);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div>
        <textarea
          style={{ height: 32, width: 260 }}
          onChange={(e) => this.setState({inputValue: e.target.value})}
          value={this.inputValue}
        />
        <div
          ref={(e) => this.box = e}
          style={{ padding: 20 }}
        >
        </div>
      </div>
    )
  }
  componentDidUpdate(prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      try {
        katex.render(this.state.inputValue, this.box);
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export default hot(module)(App);
