import './DoctorDairy.css';
import Field from "../Field/Field";
import Calendar from "../Calendar/Calendar";
import { useState } from 'react';

function DoctorDairy(props){
  const [date, setDate] = useState(new Date());
  const [fields, setField] = useState({});

  return(
    <form>
      <h2> Дневник работы врача</h2>
      <Calendar setDate={setDate} date={date}/>
      <section>
        <h3>Члены Семей аттестованных и пенсионеров</h3>
        <div>
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setField}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setField}/>
        <div>
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setField}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setField}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setField}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setField}/>
      </section>
    </form>
  )
}
export default DoctorDairy;