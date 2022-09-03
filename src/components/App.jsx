import React, { Component } from 'react'
import s from '../components/Feedback.module.css'
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/Section'


class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

feedbackIncrementGood = () => {
    this.setState (prevState => ({
        good: prevState.good +1,
    }))}

    handleClick = e => {
        const { name } = e.target;
        this.setState(state => ({ [name]: state[name] + 1 }));
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      };

countTotalFeedback = () => {
            const total = this.state.good + this.state.neutral + this.state.bad;
            return total
          };

countPositiveFeedbackPercentage = () => {
            return Math.round((this.state.good / this.countTotalFeedback()) * 100);
          };

    render(){
        const total = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        const { good, neutral, bad } = this.state;
        

        return (
            
            <div className={s.card}>
                  <Section title="Please leave feedback" />

                  <FeedbackOptions
                   options={this.state}
                   onLeaveFeedback={this.handleClick}
                   />
                  
                  <span className={s.title}>Statistics</span>
                  {total !== 0 ? (
                  <Statistics
                  good={good} 
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positiveFeedbackPercentage={positiveFeedbackPercentage}
                />
                  ) : (
                    <Notification message="There is no feedback" />
                    )}
               
               
               </div>
                    
        )
    }
}



export default Feedback;