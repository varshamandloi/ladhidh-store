import Carousal from "../components/Carousal"
import Deals from "../components/Deals"
import Categories from "../components/Categories"
import Certificate from "../components/Certificate"
import Footer from "../components/Footer"
import BottomBar from "../components/BottomBar"


import {productDetail , productCategory} from "../Product"

function Home() {
  return (
    <>
    <Carousal/>
     <Deals productDetail = {productDetail}/>
     <Categories productCategory = {productCategory}/>
     <Certificate/>
     <Footer/>
     <BottomBar/>
    </>
  )
}

export default Home