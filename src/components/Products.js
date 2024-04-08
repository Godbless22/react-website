import {useState,useEffect} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useParams } from "react-router-dom";

function Products(props){
    const baseUrl='http://127.0.0.1:8000/api';
    const [totalResults, setTotalResults]=useState(0);
    const [products,setProducts]=useState([]);
    // const [baseurl,setbaseurl]=useState(baseUrl+'/products/');
    const {category_slug,category_id} = useParams();
    // console.log(category_id);
    


    useEffect(() => {
        fetchData(baseUrl+'/products/?category='+category_id);
    },[baseUrl, totalResults]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=> response.json())
        // .then((data)=> setProducts(data.results));
        .then((data) => {
            setProducts(data.results);
            setTotalResults(data.count);
          });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);
    }

    var links=[];
    var limit = 1;
    var totaLinks=totalResults/limit;
    for(let i=1; i<=totaLinks; i++){
        links.push(<li className="page-item"><Link className="page-link" onClick={() =>changeUrl(baseUrl+`/products/?category=${category_id}&page=${i}`) } to={`/category/${category_slug}/${category_id}/?page=${i}`}>{i}</Link></li>)
    }
    

    return(
        <section className="container mt-4">
                {/* Products Start */}
                <h3 className='mb-4'>All Products </h3>
                <div className='row'>
                    {/* {products.length > 0 ? (
                    products?.props?.produc?.map((product, index) => (
                        <SingleProduct key={index} product={product} />
                    ))
                    ) : (
                    <p>No products available.</p>
                    )} */}
                    {
                        products?.map((product)=> <SingleProduct product={product} />)

                    }

                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {/* <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li> */}
                            {links}
                        {/* <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li> */}
                    </ul>
                </nav>
                {/* End Products */}
        </section>


    )
}
export default Products;