import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

function useSocket(){

  const handleSocketOn = (event, callback) => {
    socket.on(event, callback);
  }

  const handleSocketEmit = (event, payload) => {
    socket.emit(event, payload);
  }

  return [handleSocketOn, handleSocketEmit]
}

export default useSocket;