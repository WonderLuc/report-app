import "./Field.css";

function Field(props){
  let className = "field-input " + props.options.class
    props.options.class
    .split(" ")
    .reduce((acc, current)=>{
      return acc + `field-input_${current} `;
    }, '');

  return(
    <label className="field">
      <span className="field-label">{props.options.text}</span>
      <input className={className} type={props.options.type}/>
    </label>
  )
}
export default Field;