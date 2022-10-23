import { unstable_ClassNameGenerator } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { Sample2} from "./Sample2"

//1. Creating - createContext - done
//2. Publisher -provider - context.Provider
//3. Subscriber - useContext - useContext(context)


//create context

const NameContext = createContext()

export function Example () {
//   const name ="Jack"

// const name = ["Jack", "John","Lisa"]
const [nameList, setNameList] = useState( ["Jack", "John","Lisa"])
const [name, setName] = useState("Dhana")

 function sayHello() {
    alert("You CLicked Me🥳")
 }

    return (
        <NameContext.Provider value={name}>
         <div>
         {/* {nameList.map((nm, index) => <Sample key={index} name={nm} /> )}
         <button onClick={sayHello}>Click Me!!!</button><br/><br/> */}
         <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter name"  />
         <button onClick={()=> setNameList([...nameList, name])}>Update Name</button>
           <Sample />
           <Sample1 />
           {/* <Sample2 /> */}
        </div>
        </NameContext.Provider>
        
    )
}

export const useGlobalContext = () => {
    return useContext(NameContext);
}


function Sample({name}) {
 
    // const name = useContext(NameContext)
    return(
        <div>
            <h1>Welcome Everyone {name}</h1>
        </div>
    )
}

function Sample1({name}) {
 
    // const name = useContext(NameContext)
    return(
        <div>
            <h1>Hi All by {name}</h1>
        </div>
    )
}
