import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const onClickAdd = () => {
        setCount(c => c + 1);
    };
    const onClickDec = () => {
        setCount(c => Math.max(c - 1, 0));
    };
    function CalcFish() {
        if(count === 0) {
            return <h1>{count}</h1>
        } else if  (count % 3 === 0 && count % 5 === 0) {
            return <h1>neue Fische</h1>;
        } else if (count % 3 === 0) {
            return <h1>neue</h1>;
        } else if (count % 5 === 0) {
            return <h1>Fische</h1>;
        } else {
            return <h1>{count}</h1>;
        }
    }


    return (
        <>
            <CalcFish/>
            <h2>{count}</h2>
            <div className="card">
                <button className="Button" onClick={onClickDec}>
                    -
                </button>
                <button className="Button" onClick={onClickAdd}>
                    +
                </button>
            </div>
        </>
    )
}

export default App