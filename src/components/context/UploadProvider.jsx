import React, { useState } from "react";
import Uploads from "../Uploads";
import { createContext} from "react";
 
const setContext= createContext();


export const uploadProvider = ({children}) => {
    const [favourite,setFavourite]= useState(0);

    // const addFavourite =(e)=>{
    //     setfavourite(favourite + 1)
    //     console.log (favourite)
    // }

  return  
  (
    <setContext.Provider value={[favourite,setFavourite]}>
        {children}
    </setContext.Provider>
  );
}
export default setContext