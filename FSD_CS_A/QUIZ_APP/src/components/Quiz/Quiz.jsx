import quesBank from "../../assets/data"
import './Quiz.css';

const Quiz = () => {
    return (
        <div>
            Question {quesBank[0].id}: {quesBank[0].ques}<br/>
            {quesBank[0].options.map((option, index) => {
                const inputId = `${quesBank[0].id}-${index}`;
                return (
                    <div key={inputId}>
                        <input 
                            type="radio" 
                            id={inputId} 
                            name={quesBank[0].id} 
                            className={quesBank[0].ques} 
                            value={option} 
                        />
                        <label htmlFor={inputId}>{option}</label>
                    </div>
                )
            })}
            <button>Prev</button>
            <button>Next</button>
        </div>
    )
}

export default Quiz;