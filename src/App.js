import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Restaurants from "./pages/Restaurants/Restaurants";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="header"><Header/></div>
                <div className="content">
                    <Route exact path='/' render={() => <Home/>}/>
                    <Route exact path='/restaurants' render={() => <Restaurants/>}/>
                    <Route exact path='/contacts' render={() => <Contacts/>}/>
                    <Route exact path='/about' render={() => <About/>}/>
                </div>
                <div className="footer"><Footer/></div>
            </div>
        </BrowserRouter>
    )
}

export default App;
