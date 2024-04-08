

// Assets

import SellerSidebar from "./SellerSidebar";
function SellerDashboard(props){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < SellerSidebar/>
                </div> 
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Products </h4>
                                    <p><a href='#'>19</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <p><a href='#'>29</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Customers</h4>
                                    <p><a href='#'>9</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellerDashboard;