import { useState,useEffect } from "react"

export function ResultMark() {
    const [mark,setMark] = useState();
    const [result,setResult] = useState('');

    useEffect(()=>{
        if(mark == 0) {
            setResult("meet parents")
        }
        else if(mark <= 10) {
            setResult("Poor result")
        }
        else if(mark <= 25) {
            setResult("Fail")
        }
        else if(mark <= 35) {
            setResult("Pass")
        }
        else if(mark <= 50) {
            setResult("Average Pass")
        }
        else if(mark <= 75) {
            setResult("Good")
        }
        else if(mark <= 90) {
            setResult("Extraordinary Pass")
        }
        else {
            setResult("")
        }

    },[mark])

return <div>
    <div className="heading">
    <h1>Student Marks</h1>
    </div>
    <div className="mark-result">
        <p>Enter mark:<input onChange={(e)=>{setMark(e?.target?.value)}} /></p>
        <p>Result: {result}</p>
    </div>
</div>
}