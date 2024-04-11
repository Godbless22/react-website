//Packages
import {Link} from 'react-router-dom';
// Assets
import logo from '../logo.svg';
function SingleProduct(props){
    return (
        <div className='col-23 col-md-3 mb-4'>
            <div className="card">
            
            <Link to={`/product/${props.product.title}/${props.product.id}`}> <img src={logo} className="card-img-top" alt="..."/> </Link>
                <div className="card-body">
                <h6 className="card-title"> <Link to={`/product/${props.product.title}/${props.product.id}`}>{props.product.title}</Link></h6>
                
                    <h5 className="card-title text-muted">Price Rs. {props.product.price}</h5>
                </div>
                <div className='card-footer'>
                    <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus fa-2x"></i></button>
                    <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart fa-2x"></i></button>
                </div>
            </div> 
        </div>
    )
}
export default SingleProduct;