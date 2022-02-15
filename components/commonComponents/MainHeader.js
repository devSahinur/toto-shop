import Header from "../Header"
import Navbar from "../Navbar"
import Breadcrumb from "./Breadcrumb"

function MainHeader({BreadcrumbTitle}) {
  return (
    <>
    <Header/>
    <Navbar/>
    {BreadcrumbTitle === 'no' ?  <> </> :  <Breadcrumb title={BreadcrumbTitle} /> }

    </>
  )
}

export default MainHeader