import React, { Component } from 'react';
import Section from '../section/Section';

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { name } = e.target;

    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <button type="button" name="good" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.addFeedback}>
            Bad
          </button>
        </Section>
        <Section title="Statistics">
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </Section>
      </>
    );
  }
}

export default Main;
