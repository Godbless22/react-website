import {Routes, Route} from 'react-router-dom';

//Assests
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';

// Website
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import AllProducts from './components/AllProducts'; 
import SingleProduct from './components/SingleProduct';
import OrderSuccess from './components/OrderSuccess'; 
import OrderFailure from './components/OrderFailure'; 
import TestFetch from './components/TestFetch';

// Customer panel
import Checkout from './components/Checkout';
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders'
import Wishlist from './components/Customer/WishList'
import Profile from './components/Customer/Profile'
import ChangePassword from './components/Customer/ChangePassword'
import AddressList from './components/Customer/AddressList'
import AddAddress from './components/Customer/AddAddress'

// Seller Panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import VendorOrders from './components/Seller/VendorOrders';
import Customers from './components/Seller/Customers';
import Reports from './components/Seller/Reports';
import VendorProfile from './components/Seller/VendorProfile';
import VendorChangePassword from './components/Seller/VendorChangePassword';

// import bootstrap from 'bootstrap'; 
 
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/categories' element={ <Categories />}/>
        <Route path='/products' element={ <AllProducts />}/>
        <Route path='/category/:category_slug/:category_id' element={ <Products />}/>
        <Route path='/product/:product_slug/:product_id' element={ <ProductDetail />}/>
        <Route path='/checkout' element={ <Checkout />}/>
        <Route path='/order/success' element={ <OrderSuccess />}/>
        <Route path='/order/failure' element={ <OrderFailure />}/>
        {/* <Route path='/test/fetch' element={<TestFetch />}/> */}
        {/* Customer Routes */}
        <Route path='/customer/register' element={ <Register />}/>
        <Route path='/customer/login' element={ <Login />}/>
        <Route path='/customer/dashboard' element={ <Dashboard />}/>
        <Route path='/customer/wishlist' element={ <Wishlist />}/>
        <Route path='/customer/orders' element={ <Orders />}/>
        <Route path='/customer/profile' element={ <Profile />}/>
        <Route path='/customer/changepassword' element={ <ChangePassword />}/>
        <Route path='/customer/addresses' element={ <AddressList />}/>
        <Route path='/customer/add_address' element={ <AddAddress />}/>
        {/* Seller Routes */}
        <Route path='/seller/register' element={ <SellerRegister />}/>
        <Route path='/seller/login' element={ <SellerLogin />}/>
        <Route path='/seller/dashboard' element={ <SellerDashboard />}/>
        <Route path='/seller/products' element={ <SellerProducts />}/>
        <Route path='/seller/add-product' element={ <AddProduct />}/>
        <Route path='/seller/orders' element={ <VendorOrders />}/>
        <Route path='/seller/customers' element={ <Customers />}/>
        <Route path='/seller/reports' element={ <Reports />}/>
        <Route path='/seller/profile' element={ <VendorProfile />}/>
        <Route path='/seller/changepassword' element={ <VendorChangePassword />}/>
      </Routes>
     
      <Footer />
    </>
  );
}

export default App;
