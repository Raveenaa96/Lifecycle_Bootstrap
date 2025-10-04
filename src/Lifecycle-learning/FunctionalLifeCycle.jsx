import { useState,useEffect } from "react"

export function FunctionalLifeCycle() {
    const [price,setPrice] = useState(100);
    const [tax,setTax] = useState(price*5/100);

    useEffect(()=>{
        console.log("useeffect rendering")
        let taxCalc = price *5/100;
        setTax(taxCalc)

        return(()=> {
            console.log("2.unmounting Phase")
        })
    },[price])

return <div>
    <div className="heading">
    <h1>Function LifeCycle</h1>
    </div>
    <div className="price">
        <p>Price: {price}</p>
        <p>Tax: {tax}</p>
        <button onClick={()=>setPrice(price+100)}>Increase Price + 100</button>
    </div>
</div>
}