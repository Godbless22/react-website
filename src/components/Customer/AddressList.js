
import {Link} from 'react-router-dom';
// Assets
import Sidebar from "./Sidebar";
import logo from '../../logo.svg';
function AddressList(){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < Sidebar/>
                </div> 
                <div className='col-md-9 col-12 '>
                    <div className="row">
                        <div className="col-12">
                            <Link to='/customer/add_address'className='btn btn-outline-success mb-4 float-end'><i className='fa fa-plus-circle'></i> Add Address</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                        <i className="fa fa-check-circle fa-2x text-success mb-2"></i><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                        <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                        <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                        <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                        <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <p>
                                    <span className="badge bg-secondary mb-2">Mark Default</span><br/>
                                        Scolaire Djione, Bonaberi, Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default AddressList;