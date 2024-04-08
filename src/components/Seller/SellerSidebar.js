import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="list-group">
            <a to="/seller/dashboard"  className="list-group-item list-group-item-action active" aria-current="true">
                Dashboard
            </a>
            <Link to="/seller/products"className="list-group-item list-group-item-action">Products</Link>
            <Link to="/seller/add-product"className="list-group-item list-group-item-action">Add Products</Link>
            <Link to="/seller/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/seller/customers" className="list-group-item list-group-item-action">Customer</Link>
            <Link to="/seller/reports" className="list-group-item list-group-item-action">Reports</Link>
            <Link to="/seller/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/seller/changepassword" className="list-group-item list-group-item-action">Change Password</Link>

            <a href="#" className="list-group-item list-group-item-action text-danger">Logout</a>
        </div>
    )
} export default Sidebar;