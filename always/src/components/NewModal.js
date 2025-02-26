import { useEffect, useState } from "react";
import '../style/modal.css';

const Modal = ({onClose}) =>{
  const [email, setEmail] = useState('');
      const [password, setPasssWord] = useState('');
      const [isSubmitted, setIsSubmitted] = useState(false);
      const valueNew = (e)=>{
        setEmail(e.target.value)
      }
      const valueChange = (e)=>{
        setPasssWord(e.target.value);
    }
    useEffect(()=>{
      if (isSubmitted) {
      if (email === 'frank@gmail.com'  && password ==='1234'){
        alert('successful');
      }else{
        alert('invalid email');
      }
    }
    setIsSubmitted(false);
      
      //if(email.includes('@')){
       // alert("the email is invalid");
     // }else{
       // alert('not correct');
     // }
    },[email, password, isSubmitted]);
  
    {/*const loginForm = ()=>{
      if(email === ""){
        alert("input email")
      }else{
        alert("welcome")
      }*/}
      const handleLogin = () => {
        setIsSubmitted(true);
      }
  

    
  return(
    <div className="modal-back">
    <div className="col">
        <button onClick={() => onClose(false)}>X</button>
        <form onSubmit={handleLogin}>
          <h1>enter your email</h1>
        <input 
        type="text"
        name="" placeholder="Email"
        value={email}
        onChange={valueNew}
        /><br/>
        <input
        type=""
        name="" placeholder="password"
        value={password}
        onChange={valueChange}
        />
        <input type="submit" value="LOGIN"/>
     </form>
    </div>
    </div>
  )
}



const NewModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="modal-box">
      <button className="modal-click" onClick={openModal}>Open Modal</button>
      <div className="modal-it" style={{ display: showModal ? "block" : "none" }}>
        {showModal && <Modal onClose={() => setShowModal(false)} /> }
    </div>
    </div>
  );
};
export default NewModal