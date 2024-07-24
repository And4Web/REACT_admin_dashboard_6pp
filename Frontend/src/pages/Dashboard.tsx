import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa";
import userImage from '../assets/images/male4.png';
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from '../assets/data.json';

function Dashboard() {
  return (
    <div className='admin-container'>
      <AdminSidebar/>

      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search" />
          <FaRegBell/>
          <img src={userImage} alt="Male" />
        </div>



        {/* widget container */}

        <div className="widget-container">
          <WidgetItem percent={22} amount={true} value={340000} heading="Revenue" color="rgba(0, 115, 255)"/>
          <WidgetItem percent={-5} amount={false} value={340} heading="Users" color="rgba(0, 200, 20)"/>
          <WidgetItem percent={11} amount={false} value={400} heading="Transactions" color="rgba(255, 196, 0)"/>
          <WidgetItem percent={19} amount={false} value={64} heading="Products" color="rgba(76, 0, 255)"/>
        </div>

        {/* Graph container */}
        <section className="graph-container">
          {/* revenue chart */}
          <div className="revenue-chart">
            <h2>Revenue and Transactions</h2>
          </div>

          {/* inventory chart */}
          <div className="inventory-chart">
            <h2>Inventory</h2> 
            <div>
              {
                data.categories.map(i=>{
                  return (
                    <CategoryItem key={i.value} heading={i.heading} value={i.value} color={`hsl(${i.value*4}, ${i.value*3}%, ${i.value}%)`}/>
                  )
                })
              }
              {/* <CategoryItem heading="Laptop" value={70} color="purple"/>
              <CategoryItem heading="Smartphone" value={45} color="gold"/>
              <CategoryItem heading="Camera" value={80} color="green"/>
              <CategoryItem heading="Tablet" value={30} color="pink"/> */}
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({heading, percent, amount=false, color, value}:WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{amount ? `$${value}`: value}</h4>
        {
          percent > 0 ? <span className="green"><HiTrendingUp/> +{percent}%</span> : <span className="red"><HiTrendingDown/> {percent}%</span>
        }
      </div>

      <div className="widget-circle" style={{
        background: `conic-gradient(${color} ${(Math.abs(percent)/100)*360}deg, rgb(255,255,255) 0)`,
      }}>
        <span style={{color}}>{percent}%</span>
      </div>
    </article>
  )
}

interface CategoryItemProps{
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({color, value, heading}: CategoryItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading}</h5>
      <div>
        <div style={{
          backgroundColor: color,
          width: `${value}%`
        }}></div>
      </div>
      <span>{value}%</span>
    </div>
  )
}


export default Dashboard