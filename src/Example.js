import { createContext, useContext } from "react";
import { Sample2} from "./Sample2"

//1. Creating - createContext - done
//2. Publisher -provider - context.Provider
//3. Subscriber - useContext - useContext(context)


//create context

const NameContext = createContext()

export function Example () {
  const name ="Jack"
    return (
        <NameContext.Provider value={name}>
         <div>
           <Sample />
           <Sample1 />
           <Sample2 />
        </div>
        </NameContext.Provider>
        
    )
}

export const useGlobalContext = () => {
    return useContext(NameContext);
}


function Sample() {
 
    const name = useContext(NameContext)
    return(
        <div>
            <h1>Welcome Everyone {name}</h1>
        </div>
    )
}

function Sample1() {
 
    const name = useContext(NameContext)
    return(
        <div>
            <h1>Hi All by {name}</h1>
        </div>
    )
}
