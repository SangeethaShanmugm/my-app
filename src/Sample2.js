import { useGlobalContext } from "./Example.js"
export function Sample2() {
 
    const name = useGlobalContext();

    return(
        <div>
            <h1>Happy Diwali by{name} 😀😀⭐⭐🎆🎆🎇🥳🥳</h1>
        </div>
    )
}