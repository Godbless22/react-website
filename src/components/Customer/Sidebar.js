import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="list-group">
            <a to="/customer/dashboard"  className="list-group-item list-group-item-action active" aria-current="true">
                Dashboard
            </a>
            <Link to="/customer/orders"className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Wishlist</Link>
            <Link to="/customer/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/customer/changepassword" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/customer/addresses" className="list-group-item list-group-item-action">Addresses</Link>
            <a href="#" className="list-group-item list-group-item-action text-danger">Logout</a>
        </div>
    )
} export default Sidebar;