import './DoctorDairy.css';
import Field from "../Field/Field";
import Calendar from "../Calendar/Calendar";
import { useState } from 'react';

function DoctorDairy(props){
  const [date, setDate] = useState(new Date());
  const [famylies, setFamilies] = useState({});
  const [employes, setEmployes] = useState({});
  const [oldmans, setOldmans] = useState({});
  const [freemans, setFreemans] = useState({});
  const [other, setOther] = useState({});
  const [paid, setPaid] = useState({});

  return(
    <form>
      <h2> Дневник работы врача</h2>
      <Calendar setDate={setDate} date={date}/>

      <section>
        <h3>Аттестованные (ФБ)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setEmployes}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setEmployes}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setEmployes}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setEmployes}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setEmployes}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setEmployes}/>
      </section>
      <section>
        <h3>Пенсионеры (ФБ)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setOldmans}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setOldmans}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setOldmans}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setOldmans}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setOldmans}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setOldmans}/>
      </section>
      <section>
        <h3>Члены Семей аттестованных и пенсионеров (ОМС)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setFamilies}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setFamilies}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setFamilies}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setFamilies}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setFamilies}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setFamilies}/>
      </section>
      <section>
        <h3>Вольнонаемные (ОМС)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setFreemans}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setFreemans}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setFreemans}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setFreemans}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setFreemans}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setFreemans}/>
      </section>
      <section>
        <h3>Прочие (ОМС)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setOther}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setOther}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setOther}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setOther}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setOther}/>
      </section>
      <section>
        <h3>Прочие (ОМС)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setOther}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setOther}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Неотложных", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Диспансер. набор", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setOther}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setOther}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setOther}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setOther}/>
      </section>
      <section>
        <h3>Платные услуги (ДБФ)</h3>
        <div className="fieldset">
          <h4>Посещения</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setPaid}/>
          <Field options={{text:"I", type:"number", class:""}} changeHandler={setPaid}/>
          <Field options={{text:"II", type:"number", class:""}} changeHandler={setPaid}/>
        </div>
        <Field options={{text:"Посещения СТВ", type:"number", class:""}} changeHandler={setPaid}/>
        <div className="fieldset">
          <h4>Посещения по заболеванию</h4>
          <Field options={{text:"Всего", type:"number", class:""}} changeHandler={setPaid}/>
          <Field options={{text:"Разовые", type:"number", class:""}} changeHandler={setPaid}/>
          <Field options={{text:"Закрытые обращения", type:"number", class:""}} changeHandler={setPaid}/>
          <Field options={{text:"СТВ", type:"number", class:""}} changeHandler={setPaid}/>
        </div>
        <Field options={{text:"Профосмотры", type:"number", class:""}} changeHandler={setPaid}/>
        <Field options={{text:"Прочие", type:"number", class:""}} changeHandler={setPaid}/>
      </section>
    </form>
  )
}
export default DoctorDairy;