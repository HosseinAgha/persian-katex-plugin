import './App.less';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import katex from 'katex/katex.webpack.js';
import persianKatexPlugin from '../src/index';

katex.plugin(new persianKatexPlugin());

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
