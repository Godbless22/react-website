

//import {Link} from 'react-router-dom';
// Assets
import SellerSidebar from "./SellerSidebar";
import logo from '../../logo.svg';
function AppProduct(){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < SellerSidebar/>
                </div> 
                <div className='col-md-9 col-12 '>
                    <div className='card'>
                        <h4 className='mt-4' align="center">Add Product</h4>
                        <div className='card-body'>
                            <form>
                            <div className="mb-3">
                                    <label for="firstName" className="form-label ">Category </label>
                                    <select className="form-control">
                                        <option>Python</option>
                                        <option>JavaScript</option>
                                        <option>PHP</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label"> Title</label>
                                    <input type="text" className="form-control" id="title"/>
                                </div>
                                <div className="mb-3">
                                    <label for="price" className="form-label">Price </label>
                                    <input type="number" className="form-control" id="price"/>
                                </div>
                                <div className="mb-3">
                                    <label for="description" className="form-label"> Description</label>
                                    <textarea className="form-control" rows={6} id="description"></textarea>
                                </div>
                                <div className="mb-3">
                                    <div className='mb-3>'>
                                         <label for="ProductImg" className="form-label"> Product Images</label>
                                         <input type="file" className="form-control" id='ProductImg' />
                                         {/* <input type="image" className="form-control" id='ProductImg'/> */}
                                        
                                    </div>
                                    
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default AppProduct;