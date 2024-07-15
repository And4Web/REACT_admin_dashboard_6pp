import { BiLoader } from 'react-icons/bi'
import '../styles/loader.scss';

function Loader() {
  return (
    <div className='.loader' style={{paddingTop: "2rem", marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <BiLoader style={{fontSize: "2rem"}}/> 
      <h4 style={{fontSize:"1.5rem"}}>Loading...</h4>
    </div>
  )
}

export default Loader