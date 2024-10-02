import css from './Options.module.css'

function Options({ updateFeedback, resetFeedbacks, totalFeedback }) {
    return (
        <div>
            <button className={css.btn} type='button' onClick={() => updateFeedback('good')}>Good</button>
            <button className={css.btn}  type='button' onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.btn}  type='button' onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button className={css.btn} type='button' onClick={resetFeedbacks}>Reset</button>}
        </div>
    )
}

export default Options

