import socketIOClient from 'socket.io-client';

let socket = socketIOClient('http://localhost:4404/');

export default socket;