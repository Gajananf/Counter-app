import React from "react";
import { useState } from "react";
export const Count = () => {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(() => count + 1)
    }

    const Decrement = () => {
        if (count === 0) {
            alert("Count Reached 0 you can't decrease again");

        }
        else if(count > 0){
            setCount(() => count - 1)
        }

    }


    return (
        <div>
            <h1>{count}</h1>

            <button className="In-btn" onClick={Increment}> INCREMENT</button>
            <button className="De-btn" onClick={Decrement}> DECREMENT</button>
        </div>
    )
}