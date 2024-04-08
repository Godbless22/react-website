
//import {Link} from 'react-router-dom';
// Assets
import Sidebar from "./Sidebar";
import logo from '../../logo.svg';
function AddAddress(){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < Sidebar/>
                </div> 
                <div className='col-md-9 col-12 '>
                    <div className='card'>
                        <h4 className='mt-2' align="center">Register</h4>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label for="address" className="form-label"> Add Address </label>
                                    <textarea  className="form-control" id="address"></textarea>
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
export default AddAddress;