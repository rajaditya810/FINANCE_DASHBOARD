
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <>
    <section className="flex justify-between m-4">
    <div className="title ">
     <h1 className="font-poppins text-4xl font-bold text-white" >Finance Dashboard</h1>
    </div>
     <div className="">
        <ul className="flex space-evenly gap-6">
          <li className="navbar font-poppins text-xl text-white "><Link to='/'>Home</Link></li>
            <li className="navbar font-poppins text-xl text-white "><Link to='/transactions'>Transactions</Link></li>
            <li className="navbar font-poppins text-xl text-white "><Link to='/Profile'>Profile</Link></li>
    </ul>
       
     </div>
    </section>
     
    </>
  )
}

export default Navbar;
