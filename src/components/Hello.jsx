import React from 'react'


import { useAdmin } from '../context/AdminContext';



export default function Hello() {

    const {currentadmin,setCurrentadmin } = useAdmin();

console.log('hello',currentadmin)

  return (
    <div>
        <hr/>
        Hello Admin 
        <button onClick={()=>setCurrentadmin('Ankit Thapa')}>Click me</button>
        <button onClick={()=>setCurrentadmin('Thapa')}>Set Thapa</button>
        
    </div>
  )
}
