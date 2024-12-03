import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <div>
<div className="flex justify-between items-center">
    <figure className="h-[120px] w-[120px]">
    <img src="https://s7.gifyu.com/images/SJSyQ.jpg" alt="" />
    </figure>

    <div className="flex gap-5 font-semibold grid grid-rows-6">
        <Link to="/">Dashboard</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Sales">Sales</Link>
        <Link to="/Customers">Customers</Link>
        <Link to="/Transections">Transections</Link>
        <Link to="/Analytics">Analytics</Link>
      
        
            </div>
</div>
<Outlet/>
     </div>
    )
}
export default Sidebar ;