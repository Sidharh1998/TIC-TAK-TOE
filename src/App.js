import './App.css';
import Icon from './components/Icon';
import { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { GiCircleSparks} from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



let tikArray= new Array(9).fill("")
function App() {
let[isCross,setIsCross]=useState(true)

let [winMessage,setWinMessage]=useState("")
let[draw,setDraw]=useState("")

const playAgain=()=>{
  tikArray.fill("");
  setIsCross(true)
  setWinMessage("")
  setDraw("")
}


const findWinner=()=>{

  if(tikArray[0]===tikArray[1] && tikArray[0]===tikArray[2] && tikArray[0]!==""){
    setWinMessage(tikArray[0]," has won")
  }
  else if(tikArray[3]===tikArray[4] && tikArray[3]===tikArray[5] && tikArray[3]!==""){
    setWinMessage(tikArray[3]," has won")
  }
  else if(tikArray[6]===tikArray[7] && tikArray[6]===tikArray[8] && tikArray[6]!==""){
    setWinMessage(tikArray[6]," has won")
  }
  else if(tikArray[0]===tikArray[3] && tikArray[0]===tikArray[6] && tikArray[0]!==""){
    setWinMessage(tikArray[0]," has won")
  }
  else if(tikArray[1]===tikArray[4] && tikArray[1]===tikArray[7] && tikArray[1]!==""){
    setWinMessage(tikArray[1]," has won")
  }
  else if(tikArray[2]===tikArray[5] && tikArray[2]===tikArray[8] && tikArray[2]!==""){
    setWinMessage(tikArray[2]," has won")
  }
  else if(tikArray[0]===tikArray[4] && tikArray[0]===tikArray[8] && tikArray[0]!==""){
    setWinMessage(tikArray[0]," has won")
  }
  else if(tikArray[2]===tikArray[4] && tikArray[2]===tikArray[6] && tikArray[2]!==""){
    setWinMessage(tikArray[2]," has won")
  }
  else if(tikArray.indexOf("")===-1){
      setDraw("Draw")
    return toast('DRAW !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    
  }
}



const changeItem=(index)=>{

   if(winMessage){
     return toast.success('🦄 Game Over! The winner is '+winMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
     
    
    
   }
   
 else if(tikArray[index]!==""){
    return toast('Open your eyes dude where are u Tapping !', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else if(tikArray[index]===""){
    tikArray[index]=isCross===true ? "cross":"circle";
    console.log( tikArray[index],isCross);
    setIsCross(!isCross)
    findWinner()
  }
}





  return( 
    <div className="App">
      <ToastContainer/>
      <nav><h1>TIC-TAK-TOE</h1></nav>
      <br></br>
      <br></br>
      <br></br>

      

    {
      winMessage !=="" ? 
      (
      <div>
      <h2  className='message'>The Winner is{winMessage==="cross"?<GiCrossMark className='icon-text'/> :<GiCircleSparks className='icon-text'/>}
      </h2> <button onClick={playAgain}>Play Again</button>
      </div>
      ):
      (  <h2 className='message'>Chance is of{isCross ? <GiCrossMark className='icon-text'/> :<GiCircleSparks className='icon-text'/>}</h2>)  
      

      
    }
   
    {
      draw !=="" ?(<button onClick={playAgain}>Reset</button>):(<></>)
    }
    <br></br>
    <br></br>
    <br></br>
    <div className='grid'>

  
        {
          tikArray.map((value,key)=>(
           <div className='icon-hover' key={key} onClick={()=>changeItem(key)}>
            <Icon ic={value} />
            </div>
          ))
        }
 </div>

    </div>
  )
}

export default App;
