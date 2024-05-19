import { useRef } from 'react';
import Btn from './components/Btn';


function App() {
 const  ref = useRef(null);
  return (
    <>
      <div ref={ref} className='flex gap-3 w-screen h-screen bg-zinc-800 items-center justify-center'>
        <h1 className='absolute font-semibold text-zinc-600 top-10'><i>floating Boxes...</i></h1>
        <Btn boxRef={ref}/>
        <Btn boxRef={ref}/>
        <Btn boxRef={ref}/>
        <Btn boxRef={ref}/>
       
      </div>
    </>
  )
}

export default App ;
