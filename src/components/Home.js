import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import AllProducts from './AllProducts';
import SingleProduct from './SingleProduct';


function Home (){
    const products =[
        {
            'title':'Product 1',
            'price': 200
        },
        {
            'title':'Product 2',
            'price': 150
        },
        {
            'title':'Product 3',
            'price': 300
        },
        {
            'title':'Product 4',
            'price': 100
        },
    ]
    return(

        <main className='mt-4'>
            <div className='container'>
                {/*Latest Products Start */}
                <h3 className='mb-4'>Latest Products <Link to='/products' className='float-end btn btn-dark '>View All Products <i className="fa-solid fa-arrow-right-long"></i></Link></h3>
                <div className='row'>
                    {
                        products.map((product)=> <SingleProduct product={product} />)
                    }
                    {/*Product Box */}
                        

                    {/*Product Box End */}
                </div>
                {/*End Latest Products */}

                {/* Popular Categories Start */}
                <h3 className='mb-4'>Popular Categories <a href='#' className='float-end btn btn-dark '>View All Categorise <i className="fa-solid fa-arrow-right-long"></i></a></h3>
                <div className='row'>
                    {/*Category Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Category title</h4>
                        </div>
                        <div className='card-footer'>
                        Product Downloads: 135
                        </div>
                    </div> 
                    </div>
                    {/*Category Box End */}
                                {/*Category Box */}
                                <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Category title</h4>
                        </div>
                        <div className='card-footer'>
                        Product Downloads: 135
                        </div>
                    </div> 
                    </div>
                    {/*Category Box End */}
                    {/*Category Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Category title</h4>
                        </div>
                        <div className='card-footer'>
                        Product Downloads: 135
                        </div>
                    </div> 
                    </div>
                    {/*Category Box End */}
                    {/*Category Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Category title</h4>
                        </div>
                        <div className='card-footer'>
                        Product Downloads: 135
                        </div>
                    </div> 
                    </div>
                    {/*Category Box End */}


                </div>  
                {/* End Popular Categories */}

                {/*Popular Products Start */}
                <h3 className='mb-4'>Popular Products <a href='#' className='float-end btn btn-dark '>View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
                <div className='row'>
                    {/*Product Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Product title</h4>
                        <h5 className="card-title text-muted">Price: $. 100</h5>
                        </div>
                        <div className='card-footer'>
                        <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus fa-2x"></i></button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart fa-2x"></i></button>
                        </div>
                    </div> 
                    </div>
                    {/*Product Box End */}
                    {/*Product Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Product title</h4>
                        <h5 className="card-title text-muted">Price: $. 100</h5>
                        </div>
                        <div className='card-footer'>
                        <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus fa-2x"></i></button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart fa-2x"></i></button>
                        </div>
                    </div> 
                    </div>
                    {/*Product Box End */}
                    {/*Product Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Product title</h4>
                        <h5 className="card-title text-muted">Price: $. 100</h5>
                        </div>
                        <div className='card-footer'>
                        <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus fa-2x"></i></button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart fa-2x"></i></button>
                        </div>
                    </div> 
                    </div>
                    {/*Product Box End */}
                    {/*Product Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Product title</h4>
                        <h5 className="card-title text-muted">Price: $. 100</h5>
                        </div>
                        <div className='card-footer'>
                        <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus fa-2x"></i></button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart fa-2x"></i></button>
                        </div>
                    </div> 
                    </div>
                    {/*Product Box End */}
                </div>
                {/*End Popular Products */}


                {/* Popular Sellers Start */}
                <h3 className='mb-4'>Popular Sellers <a href='#' className='float-end btn btn-dark '>View All Sellers <i className="fa-solid fa-arrow-right-long"></i></a></h3>
                <div className='row'>
                    {/*Seller Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Seller Name</h4>
                        </div>
                        <div className='card-footer'>
                        Categories: <a href='#'>Python</a> <a href='#'>PHP</a>
                        </div>
                    </div> 
                    </div>
                    {/*Seller Box End */}
                    {/*Seller Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Seller Name</h4>
                        </div>
                        <div className='card-footer'>
                        Categories: <a href='#'>ReactJS</a> <a href='#'>AngularJS</a>
                        </div>
                    </div> 
                    </div>
                    {/*Seller Box End */}
                    {/*Seller Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Seller Name</h4>
                        </div>
                        <div className='card-footer'>
                        Categories: <a href='#'>VueJS</a> <a href='#'>Javascript</a>
                        </div>
                    </div> 
                    </div>
                    {/*Seller Box End */}
                    {/*Seller Box */}
                    <div className='col-23 col-md-3 mb-4'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h4 className="card-title">Seller Name</h4>
                        </div>
                        <div className='card-footer'>
                        Categories: <a href='#'>WordPress</a> <a href='#'>C#</a>
                        </div>
                    </div> 
                    </div>
                    {/*Seller Box End */}

                </div>  
                {/* End Popular Sellers */}

                {/*Review and Ratings */}
                    <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                        </div>
                        <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                        </div>
                        <div className="carousel-item">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <i class='fa fa-star text-warning'></i>
                            <cite title="Source Title">Customer Name</cite>
                            </figcaption>
                        </figure>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>

                {/*End Review and Ratings */}


                    
            </div>
        </main>


    )
}
export default Home;