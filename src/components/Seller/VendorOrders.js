import {Link} from 'react-router-dom';
import logo from '../../logo.svg';

// Assets

import SellerSidebar from "./SellerSidebar";
function VendorOrders(){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < SellerSidebar/>
                </div> 
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/> </Link>
                                            <p><Link>Django</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td ><span className='text-success'><i className='fa fa-check-circle'></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-primary btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </a>

                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/> </Link>
                                            <p><Link>Django</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td ><span className='text-success'><i className='fa fa-check-circle'></i>Completed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-primary btn-sm dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </a>

                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Approve</a></li>
                                                    <li><a className="dropdown-item" href="#">Sent</a></li>
                                                    <li><a className="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VendorOrders;