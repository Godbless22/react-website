import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Categories (){
    const baseUrl='http://127.0.0.1:8000/api';
    const [totalResults, setTotalResults]=useState(0);
    const [categories,setCategories]=useState([]);
    // const [baseurl,setbaseurl]=useState(baseUrl+'/products/');
    
    useEffect(() => {
        fetchData(baseUrl+'/categories');
    },[baseUrl, totalResults]);

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response)=> response.json())
        // .then((data)=> setProducts(data.results));
        .then((data) => {
            setCategories(data.results);
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
        links.push(<li className="page-item"><Link className="page-link" onClick={() =>changeUrl(baseUrl+`/categories/?page=${i}`) } to={`/categories/?page=${i}`}>{i}</Link></li>)
    }
    return(
        <section className="container mt-4">
                {/*Categories Start */}
                <h3 className='mb-4'>All Categories </h3>
                <div className='row mb-2'>
                    {
                        categories?.map((category)=>
                        <div className='col-23 col-md-3 mb-4'>
                            <div className="card">
                                <img src={logo} className="card-img-top" alt={category.title}/>
                                <div className="card-body">
                                <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                                </div>
                                <div className='card-footer'>
                                Product Downloads: 135
                                </div>
                            </div> 
                        </div> 
                        )

                    }
                </div>  
                {/* End Categories */}

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {links}
                    </ul>
                </nav>
        </section>


    )
}
export default Categories;