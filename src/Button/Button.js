import "./Button.css";

function Button(props){
  let className = "button "+props.className;
  return(
    <button className={className} onClick={(e)=>{props.handler(e);}}>
      {props.text}
    </button>
  );
}

export default Button;