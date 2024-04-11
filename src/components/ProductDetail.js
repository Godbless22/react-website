import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";



function ProductDetail() {
    const baseUrl='http://127.0.0.1:8000/api';
    // const [totalResults, setTotalResults]=useState(0);
    const [productData,setproductData]=useState([]);
    const [productImgs,setproductImgs]=useState([]);
    const {product_slug,product_id} = useParams();

    useEffect(() => {
        fetchData(baseUrl+'/product/'+product_id);
    },[]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=> response.json())
        .then((data) => {
            setproductData(data);
            setproductImgs(data.product_imgs);
            // setTotalResults(data.count);
          });
    }
    console.log(productImgs);

    return (
        <section className="Contaniner mt-4">
            <div className="row"> 
                <div className="col-4">
                    <div id="thumbnailProdeuctSlider" className="carousel slide carousel-dark">
                        <div className="carousel-indicators">
                            {
                                productImgs?.map((img,index)=>{
                                    if(index==0){
                                        return <button type="button" data-bs-target="#thumbnailProdeuctSlider" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide 1"></button>
                                    }else{
                                        return <button type="button" data-bs-target="#thumbnailProdeuctSlider" data-bs-slide-to={index}  aria-current="true" aria-label="Slide 1"></button>
                                    }
                                } )
                            }
                            
                        </div>
                        <div className="carousel-inner">
                            {
                                productImgs?.map((img,index)=>{
                                    if(index==0){
                                        return <div className='carousel-item active'>
                                            <img src={img.image} className="img-thumbnail mb-4" alt={index}/>
                                        </div>
                                    }else{
                                        return <div className='carousel-item '>
                                            <img src={img.image} className="img-thumbnail mb-4" alt={index}/>
                                        </div>
                                    }
                                } )

                            }

                            {/* <div className="carousel-item">
                                <div className='row mb-5'>
                                    <img src={logo} className="img-thumbnail mb-4" alt="..."/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='row mb-5'>
                                    <img src={logo} className="img-thumbnail mb-4" alt="..."/>
                                </div>
                            </div> */}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#thumbnailProdeuctSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#thumbnailProdeuctSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                
                </div>
                <div className="col-8">
                    <h3>{productData?.title}</h3>
                    <p>{productData?.detail}</p>
                    <h5 className="card-title text-muted">Price: $. {productData?.price}</h5> 
                    <p className="mt-3">
                        <Link title='Add to Cart'target='_blank' className='btn btn-dark'>
                            <i className="fa-solid fa-cart-plus fa-2x"></i> Demo
                        </Link>
                        <button title='Add to Cart' className='btn btn-primary m-1'>
                            <i className="fa-solid fa-cart-plus fa-2x"></i> Add to Cart
                        </button>
                        <button title='Buy Now' className='btn btn-success m-1'>
                        <i className="fa fa-credit-card fa-2x" aria-hidden="true"></i> Buy Now
                        </button>
                        <button title='Add to Wishlist' className='btn btn-danger m-1'>
                            <i className="fa fa-heart fa-2x"></i> Wishlist
                        </button>
                    </p>
                    <hr/>
                    <div className='producttags mt-3'>
                        <h5>Tags</h5>
                        <p>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Django</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Web Scripts</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Django</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Python</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Web Scripts</Link>
                        </p>
                    </div>
                </div>

            </div>

        </section>    
    )
} export default ProductDetail;