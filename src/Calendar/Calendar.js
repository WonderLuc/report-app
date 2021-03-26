import './Calendar.css';

function Calendar(props){
  
  return(
    <div className="calendar">
      <label className="calendar__text" htmlFor="day">Выбирете дату</label>
      <input className="calendar__input" id="day" type="date" name="day" 
        value={props.date}
        onChange={(e)=>{props.setDate(e.target.value)}} /> 
    </div>
  )
}

export default Calendar;