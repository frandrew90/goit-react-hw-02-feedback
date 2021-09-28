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

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    // let positivePercentage = 0;
    // if (good === 0) {
    //   positivePercentage = 0;
    //   return positivePercentage;
    // }
    const positivePercentage = good
      ? (good * 100) / this.countTotalFeedback()
      : 0;

    // console.log(good);
    // console.log(this.countTotalFeedback());
    return Number(positivePercentage).toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();

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
          <p>Total:{totalFeedback}</p>
          <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
        </Section>
      </>
    );
  }
}

export default Main;
