import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'
import Notification from './components/notification/Notification'

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
	  const infoFromLS = JSON.parse(localStorage.getItem('feedbackInfo'));
    return infoFromLS !== null ? infoFromLS : {good: 0, neutral: 0, bad: 0}
  })

  useEffect(() => {
    localStorage.setItem('feedbackInfo', JSON.stringify(feedbacks));
  }, [feedbacks])

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1
    })
  }

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const resetFeedbacks = () => { 
    setFeedbacks({
      good: 0,
	    neutral: 0,
	    bad: 0
    })
  }

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <h2 className='cafeTitle'>Sip Happens Café</h2>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options
        updateFeedback={updateFeedback}
        resetFeedbacks={resetFeedbacks}
        totalFeedback={totalFeedback}
        />
      {totalFeedback > 0
        ? <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
        : <Notification />}
    </>
  )
}

export default App
