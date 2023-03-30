import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardarea from './components/Main/Cardarea'
import Detailsarea from './components/Main/Detailsarea'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [Card, setCard] = useState([])

  const [Details, setDetails] = useState("")



  useEffect ( () => {

    fetch ('fakeapi.json')
    .then (response => response.json())
    .then (data => setCard (data))

  }, [])

  const addToList = (data) => {

    const time = JSON.parse (localStorage.getItem('time'))

    if (time) {

      const sum = time  + data.secound;


      localStorage.setItem('time', sum)
      setDetails (sum)

      






    }

    else {


      localStorage.setItem ('time', data.secound)

      setDetails (data.secound)
    }


  }


  




  return (
    <div className="App my-5">

      <div className='grid lg:grid-cols-4'>


        <div className='col-span-3 grid lg:grid-cols-2 gap-5'>


          {


Card.map ( (card) =>  <Cardarea click = {addToList} data = {card}></Cardarea>)
          }


        
        </div>

        <div className='col-span-1'>

        <Detailsarea detail = {Details}></Detailsarea>

        </div>



        <ToastContainer></ToastContainer>




      </div>
     
    </div>
  )
}

export default App
