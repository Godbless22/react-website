import {Link} from 'react-router-dom';

function Header (){
    return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
        <Link className="navbar-brand" to="/">Python Market Place</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Categories">Categories</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to='/customer/register' href="#">Register</Link></li>
                        <li><Link className="dropdown-item" to='/customer/login' href="#">Login</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to='/customer/dashboard' href="#">Dashboard</Link></li>
                        <li><a className="dropdown-item" href="#"> Logout </a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Vendor Panel
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to='/seller/register' href="#">Register</Link></li>
                        <li><Link className="dropdown-item" to='/seller/login' href="#">Login</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to='/seller/dashboard' href="#">Dashboard</Link></li>
                        <li><a className="dropdown-item" href="#"> Logout </a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/checkout">New Cart (4)</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/checkout">My Cart (4)</Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
        )
}
export default Header;