import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from "../../../common/IconBtn"
const RenderTotalAmount = () => {
    const {cart}=useSelector((state)=>state.cart)
    const {total}=useSelector((state)=>state.cart )
    const handleBuyCourse=()=>{
        const courses=cart.map((course)=>course._id)
        console.log("Id of courses going to bought",courses)
    }
  return (
    <div>
        <p>Total:</p>
        <p>Rs {total}</p>
        <IconBtn 
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses={"w-full justtify-center"}
        />
    </div>
  )
}

export default RenderTotalAmount