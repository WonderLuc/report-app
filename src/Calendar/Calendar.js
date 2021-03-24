import './Calendar.css';

function Calendar(props){
  
  return(
    <div>
      <label htmlFor="day">Выбирете дату</label>
      <input id="day" type="date" name="day" 
        value={props.date}
        onChange={(e)=>{props.setDate(e.target.value)}} /> 
    </div>
  )
}

export default Calendar;