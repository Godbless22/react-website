//Packages
import {Link} from 'react-router-dom';
// Assets
import logo from '../logo.svg';
function Checkout(props){
    return (
        <div className='container mt-4'>
            <h3 className='mb-4'>All Items  </h3>
            <div className='row'>
                <div className='col-md-8 col-8'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
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
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/> </Link>
                                        <p><Link>Python</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/> </Link>
                                        <p><Link>Reac Js</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/> </Link>
                                        <p><Link>Vue J</Link></p>
                                    </td>
                                    <td>Rs. 500</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>Total</td>
                                    <td>Rs. 2000</td>
                                </tr>
                                <tr>
                                    <td colSpan='3' align='center'>
                                        <Link className='btn btn-secondary' to='/categories'>Continue Shopping</Link>
                                        <Link className='btn btn-success m-1'>Proceed to Payment</Link>
                                    </td>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;