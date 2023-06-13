import React from 'react'
import { SiNintendogamecube } from "react-icons/si";
import { GiCrossMark } from "react-icons/gi";

import { GiCircleSparks} from "react-icons/gi";


const Icon = ({ic}) => {
  switch(ic){
    
    case "circle":
        return <GiCircleSparks className='icon'/>
    case "cross":
        return <GiCrossMark className='icon'/>
    default:
        return<SiNintendogamecube className='icon'/>
  }
}

export default Icon
