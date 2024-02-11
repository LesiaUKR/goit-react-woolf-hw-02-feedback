import React, { Component } from 'react';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout } from './Layout.js';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { Section } from 'components/Section/Section.jsx';
import { NotificationMessage } from './NotificationMessage/NotificationMessage.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositivePersentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    const positivePersentage = Math.round((positiveFeedback / total) * 100);
    return positivePersentage ? positivePersentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePersentage = this.countPositivePersentage();
    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <NotificationMessage message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePersentage={positivePersentage}
            />
          )}
        </Section>
      </Layout>
    );
  }
}
