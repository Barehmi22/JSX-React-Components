import { product } from "./product"
 
function Image(){
    const firstName=""
    return (
        <>
    {firstName && <img src={product.image} alt={"aaaa"}/>}
    </>
    )
}
export  {Image};