import Button from '../Button/Button';
import './Modal.css';
import ReactDOM from 'react-dom';

function Modal(props){
  return ReactDOM.createPortal(
    <div className="modal">
      <h2 className="modal__text">{props.text}</h2>
      <div className="buttons">
        <Button className="button_positive button_big" text="Нет" handler={props.cancel}/>
        <Button className="button_negative button_big" text='Да' handler={props.accept}/> 
      </div>
      
    </div>, 
    document.getElementById('modal')
  );
}

export default Modal;