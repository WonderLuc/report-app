import "./ReportSelect.css";
import {Link} from 'react-router-dom';

function ReportSelect(props){
  
  return (
    <nav>
      <div>
        <h2>Дневник Работы Врача</h2>
        <Link to={`/doctor-dairy`}>Заполнить</Link>
      </div>
    </nav>
    
  )
}

export default ReportSelect;