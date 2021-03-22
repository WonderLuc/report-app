import './DoctorDairy.css';
import Field from "../Field/Field";

function doctorDairy(props){

  return(
    <div>
      <h2> Дневник работы врача</h2>
      <Field options={{text:"Посещения", type:"number", class:""}}/>
    </div>
  )
}
export default doctorDairy;