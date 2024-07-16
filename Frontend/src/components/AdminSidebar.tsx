import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

function AdminSidebar() {
  const location = useLocation();
  console.log("location >>> ", location);

  return (
    <aside>
      <h2>Logo.</h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  );
}

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const DivOne = ({location}:{location: Location}) => {
  return (
    <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          <Li
            url="/products"
            text="Products"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/customers"
            text="Customers"
            location={location}
            Icon={IoIosPeople}
          />
          <Li
            url="/transactions"
            text="Transaction"
            location={location}
            Icon={AiFillFileText}
          />
        </ul>
      </div>
  )

}

const DivTwo = ({location}:{location: Location}) => {
  return (
    <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/chart/bar"
        text="Bar"
        location={location}
        Icon={FaChartBar}
      />
      <Li
        url="/chart/pie"
        text="Pie"
        location={location}
        Icon={FaChartPie}
      />
      <Li
        url="/chart/line"
        text="Line"
        location={location}
        Icon={FaChartLine}
      />
     
    </ul>
  </div>
  )
}


const DivThree = ({location}:{location: Location}) => {
  return (
    <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/app/coupon"
        text="Coupon"
        location={location}
        Icon={RiCoupon3Fill}
      />
      <Li
        url="/app/stopwatch"
        text="Stopwatch"
        location={location}
        Icon={FaStopwatch}
      />
      <Li
        url="/app/toss"
        text="Toss"
        location={location}
        Icon={FaGamepad}
      />
     
    </ul>
  </div>
  )
}

const Li = ({ url, text, location, Icon }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        to={url}
        style={{
          color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
        }}
      >
        <Icon /> {text}
      </Link>
    </li>
  );
};

export default AdminSidebar;
