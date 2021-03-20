import "./Main.css";
import ReportSelect from "../ReportSelect/ReportSelect";

function Main (props){
  return (
    <div>
    {props.reports.map((elem,index)=>{
       return <ReportSelect key={index} text={elem.text}/>;
    })}
    </div>
  );
}

export default Main;