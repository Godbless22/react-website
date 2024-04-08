

// Assets

import Sidebar from "./Sidebar";
function Dashboard(props){
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-8 mb-2'>
                    < Sidebar/>
                </div> 
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <p><a href='#'>229</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Wishlist</h4>
                                    <p><a href='#'>199</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Addresses </h4>
                                    <p><a href='#'>10</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;