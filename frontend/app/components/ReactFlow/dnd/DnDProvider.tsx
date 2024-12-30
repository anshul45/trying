import { useState } from "react";
import DnDContext from "./DnDContext";

export const DnDProvider = ({ children }:any) => {
    const [type, setType] = useState(null);
   
    return (
      <DnDContext.Provider value={[type, setType]}>
        {children}
      </DnDContext.Provider>
    );
  }
   
  
  export default DnDProvider;