import React, { Component } from 'react';
import Notification from './notification/Notification';

import Section from './section/Section';
import Statistics from './statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const { name } = e.target;

    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const positivePercentage = good
      ? (good * 100) / this.countTotalFeedback()
      : 0;

    return Number(positivePercentage).toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

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
          {totalFeedback !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
