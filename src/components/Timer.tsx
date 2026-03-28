// import { useEffect, useState } from 'react';

// export default function Timer() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setTime(new Date());
//       console.log(`interval: ${Date.now()}`);
//     }, 1000);

//     return () => {
//       clearInterval(intervalID);
//     };
//   }, []);

//   return (
//     <>
//       <p>{time.toLocaleTimeString()}</p>
//     </>
//   );
// }
