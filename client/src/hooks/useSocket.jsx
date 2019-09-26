// import { useState } from "react";
//
// function useForm(callback){
//   const [values, setValues] = useState({});
//
//   const handleChange = e => {
//     setValues({...values, [e.target.name]: e.target.value});
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     callback(values);
//   };
//
//   return [values, handleChange, handleSubmit]
// }
//
// export default useForm;


import { useState } from "react";
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

function useSocket(){

  const handleSocketOn = (event, callback) => {
    socket.on(event, callback);
  }

  const handleSocketEmit = (event, message) => {
    socket.emit(event, message);
  }

  return [handleSocketOn, handleSocketEmit]
}

export default useSocket;