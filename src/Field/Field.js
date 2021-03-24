import "./Field.css";

function Field(props){
  let className = "field-input " + props.options.class
    props.options.class
    .split(" ")
    .reduce((acc, current)=>{
      return acc + `field-input_${current} `;
    }, '');

    let changeHandler = (e)=>{
      let value = e.target.value;
      let name = props.options.text;
      let newState = {};
      newState[''+name] = value;
      props.changeHandler(prevState=>{
        let obj = Object.assign({},prevState,newState);
        return obj;
      });
    }
  return(
    <label className="field">
      <span className="field-label">{props.options.text}</span>
      <input className={className} type={props.options.type} onChange={changeHandler}/>
    </label>
  )
}
export default Field;