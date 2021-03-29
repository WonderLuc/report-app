import "./Field.css";

function Field(props){
  let className = "field__input " + 
    props.options.class
    .split(" ")
    .reduce((acc, current)=>{
      return acc + `field__input_${current} `;
    }, '');

    let dictionary ={
      'Всего': 'All',
      'Неотложных': 'urgent',
      'Диспансер. набор': 'dispensary',
      'Разовые': 'once',
      'Закрытые обращения': 'closed',
      'СТВ': 'ovw',
      'Профосмотры': 'inspection',
      'Прочие': 'other',
      'Посещения СТВ': 'ovwVisits'
    }
    let changeHandler = (e)=>{
      let value = e.target.value;
      let name = dictionary[props.options.text] || props.options.text;
      let newState = {};
      newState[''+name] = value;
      props.changeHandler(prevState=>{
        let obj = Object.assign({},prevState,newState);
        return obj;
      });
    }
  return(
    <label className="field">
      <span className="field__text">{props.options.text}</span>
      <input className={className} type={props.options.type} onChange={changeHandler}/>
    </label>
  )
}
export default Field;