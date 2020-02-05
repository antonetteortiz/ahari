import openSocket from 'socket.io-client';
const { REACT_APP_SERVER_URL, REACT_APP_SERVER_PORT, REACT_APP_SERVER_KEY } = process.env;
const socket = openSocket(`${REACT_APP_SERVER_URL}`,
 { transports: ['polling'],
   extraHeaders: {
        'Access-Control-Allow-Origin': ['http://localhost:3000',
                                        'https://test.aharinannies.com',
                                        'https://aharinannies.com']
      }
});

socket.on('register', ()=>{
  //  console.log(`leapdb is ready`);
});

socket.on('error', (error)=>{
  console.log(`server has error`);
  console.log('error');
});



export default socket;
