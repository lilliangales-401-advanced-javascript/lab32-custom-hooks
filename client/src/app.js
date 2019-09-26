import React, {useState, useEffect} from 'react';
import useForm from './hooks/useForm';
import useSocket from './hooks/useSocket';
import useQ from './hooks/useQ';


const App = (props) => {

  const [values, handleChange, handleSubmit] = useForm(handlePublish)
  const [queueMessage, setQueueMessage] = useState({});
  const [socketMessage, setSocketMessage] = useState({});
  const [handleSocketOn, handleSocketEmit] = useSocket({});
  const [ queuePublish, queueSubscribe] = useQ('deeds')


  function handlePublish(values){
    queuePublish('deeds', 'work', values);
    handleSocketEmit('words', values);
  }


  useEffect( () => {
    queueSubscribe('work', message => {
      setQueueMessage(message);
    });

    handleSocketOn('incoming', message => {
        setSocketMessage(message)});

  }, []);


  return (
    <>
      <pre>Form Values: {JSON.stringify(values)}</pre>
      <pre>Queue Values: {JSON.stringify(queueMessage)}</pre>
      <pre>Socket Values: {JSON.stringify(socketMessage)}</pre>
      <form onSubmit={handleSubmit}>
        <input name='firstName' placeholder="First Name" onChange={handleChange} />
        <input name='lastName' placeholder="Last Name" onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
}

export default App;

