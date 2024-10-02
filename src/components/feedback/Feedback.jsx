import css from './Feedback.module.css'

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
        <ul>
            <li className={css.feedbackItem}>Good: {good}</li>
            <li className={css.feedbackItem}>Neutral: {neutral}</li>
            <li className={css.feedbackItem}>Bad: {bad}</li>
            <li className={css.feedbackItem}>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    )
}

export default Feedback