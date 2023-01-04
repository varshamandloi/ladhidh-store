import BottomBar from "../components/BottomBar"
import Categories from "../components/Categories"
import { productCategory } from "../Product"
function CategoriesPage() {
  return (
    <>
    <Categories productCategory = {productCategory}/>
    <BottomBar/>
    </>
  )
}

export default CategoriesPage