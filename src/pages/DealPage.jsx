import Deals from "../components/Deals"
import BottomBar from "../components/BottomBar"
import {productDetail } from "../Product"
function DealPage() {
  return (
    <>
   <Deals productDetail = {productDetail}/>
   <BottomBar/>
    </>
  )
}

export default DealPage