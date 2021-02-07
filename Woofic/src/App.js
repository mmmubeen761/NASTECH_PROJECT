import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
// import Loginn from "./Components/Loginn";
// import Signupp from "./Components/Signupp";
// import User from './Components/User';
import Dashboard from "./Components/ClientPortal/Dashboard";
import AdminDashboard from "./Components/AdminPortal/AdminDashboard";
import ServiceProvider from './Components/ServiceProviderForm'
import Client from './Components/Client';
import Supplier from "./Components/Supplier";
import UpdateProfile from './Components/ClientPortal/UpdateProfile'
import AdminUpdateProfile from './Components/AdminPortal/UpdateProfile'
import SupplierUpdateProfile from './Components/SupplierPortal/UpdateProfile'
import AddService from './Components/ClientPortal/AddService';
import YourService from './Components/ClientPortal/YourService';
import AllQuotation from './Components/ClientPortal/AllQuotation';
import Feedback from './Components/ClientPortal/Feedback';
import ApproveReg from './Components/AdminPortal/ApproveReg';
import SupplierDashboard from './Components/SupplierPortal/SupplierDashboard';
import SuperDashboard from './Components/SuperPortal/SuperDashboard';
import Registration from './Components/SuperPortal/Registration';
import Quotation from './Components/SupplierPortal/Quotation';
import Quote from './Components/SupplierPortal/Quote';
import Chat from './Components/ClientPortal/Chat';
import SupChat from './Components/SupplierPortal/Chat';
import Blog from './Components/ClientPortal/Blog';
import Contact from './Components/ClientPortal/Contact';
import Suppliers from './Components/ClientPortal/Suppliers';
import BlogStatus from './Components/ClientPortal/BlogStatus';
import CreateBlog from './Components/ClientPortal/CreateBlog';
import Todo from './Components/AdminPortal/Todo';
import SupplierTodo from './Components/SupplierPortal/Todo';
import Help from './Components/ClientPortal/Help';
import Complain from './Components/ClientPortal/Complain';
import Invoice from './Components/ClientPortal/Invoice';
import firebase from './Config.jsx/firebase'

function App() {
  
  const token = localStorage.getItem("user_token");


  return (
  <Router>
    <div className="App">
          <Switch>

            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={ Dashboard } />
            <Route exact path="/admindashboard" component={ AdminDashboard } />
            <Route exact path="/superdashboard" component={ SuperDashboard } />
            <Route exact path="/client" component={ Client } />
            <Route exact path="/serviceprovider" component={ ServiceProvider } />
            <Route exact path="/supplier" component={ Supplier } />
            <Route exact path="/suppliers" component={ Suppliers } />
            <Route exact path="/updateprofile" component={ UpdateProfile } />
            <Route exact path="/adminupdateprofile" component={ AdminUpdateProfile } />
            <Route exact path="/supplierupdateprofile" component={ SupplierUpdateProfile } />
            <Route exact path="/addservice" component={ AddService } />
            <Route exact path="/myservice" component={ YourService } />
            <Route exact path="/feedback" component={ Feedback } />
            <Route exact path="/approvereg" component={ ApproveReg } />
            <Route exact path="/supplierdashboard" component={ SupplierDashboard } />
            <Route exact path="/quotation" component={ Quotation } />
            <Route exact path="/allquotation/:sid" component={ AllQuotation } />
            <Route exact path="/quote" component={ Quote } />
            <Route exact path="/invoice" component={ Invoice } />
            <Route path="/chat" component={ Chat } />
            <Route path="/chat/:cid/:name" component={ Chat } />
            <Route path="/supchat" component={ SupChat } />
            <Route path="/blog" component={ Blog } />
            <Route path="/blogstatus" component={ BlogStatus } />
            <Route path="/createblog" component={ CreateBlog } />
            <Route path="/todo" component={ Todo } />
            <Route path="/suppliertodo" component={ SupplierTodo } />
            <Route path="/help" component={ Help } />
            <Route path="/complain" component={ Complain } />
            <Route path="/registration" component={ Registration } />
            <Route path="/contactus" component={ Contact } />
            {/* <Route path="/user" component={User} /> */}
            {/* 
            <Route path="/update/:User" component={User} />
            <Route path="/editproduct/:id" component={EditProduct} />
            <Route path="/editcategory/:cid" component={EditCategory} />
            <Route path="/editstatus/:sid" component={EditStatus} />
             */}
          </Switch>
        </div>
    
    </Router>
  );
}

export default App;