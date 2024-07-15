import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import { Location } from "react-router-dom";


function AdminSidebar() {

  const location = useLocation();

  return (
    <aside>
      <h2>Logo.</h2>
      <div>        
        <ul>
          <li>
            <Link to={"/dashboard"} >
              <RiDashboardFill/> Dashboard
            </Link>
          </li>

          <li>
            <Link to={"/products"} >
              <RiShoppingBag3Fill/> Product
            </Link>
          </li>

          <li>
            <Link to={"/customer"} >
              <IoIosPeople/> Customers
            </Link>
          </li>
          
          <li>
            <Link to={"/transaction"} >
              <AiFillFileText/> Transaction
            </Link>
          </li>




        </ul>
      </div>
    </aside>
  )
}



export default AdminSidebar