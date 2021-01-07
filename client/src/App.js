import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store"
import Navbar from './component/header/navbar';
import AddAddress from './component/Address/addAddress';
import UpdateAddress from './component/Address/updateAddress';
import AddressItemsView from './component/Address/address_items_view';
import Landing from './component/home/landing';


function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/new/address" component={AddAddress} />
        <Route exact path="/addresses" component={AddressItemsView} />
        <Route exact path="/update/address/:id" component={UpdateAddress} />
      </Router>
    </Provider>
  );
}

export default App;
