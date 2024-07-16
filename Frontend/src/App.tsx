import { lazy, Suspense } from "react"
import { BrowserRouter as BR, Routes, Route } from "react-router-dom"
import Loader from "./components/Loader";

const Dashboard = lazy(()=>import("./pages/Dashboard"));
const Products = lazy(()=>import('./pages/Products'));
const Transaction = lazy(()=>import("./pages/Transaction"));
const Customer = lazy(()=>import("./pages/Customer"));

function App() {
  return (
    <BR>      
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<><h1>Admin Dashboard - Home Page</h1></>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/transactions" element={<Transaction/>}/>
        <Route path="/customers" element={<Customer/>}/>
          
          
          {/*Charts  */}



          {/* Apps */}


      </Routes>   
      </Suspense> 
    </BR>
  )
}

export default App
