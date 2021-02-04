import React, {useEffect} from "react";
import "./Home.css"
import Pizzacard from "../../components/Pizzacard/Pizzacard";
import {connect} from "react-redux";
import {getPizzas} from "../../redux/homeReducer";

const Home = ({pizzas, getPizzas}) => {

    useEffect(() => getPizzas(), [])

    return (
        <div className="container container-home-page my-5">
            <div className="row row-1 my-4">
                {(pizzas !== undefined) && pizzas.map(pizzaitem =>
                    (<div className="col-xl-4 col-sm-6 col-xs-12"><Pizzacard pizza={pizzaitem}/></div>))
                }
            </div>
        </div>
    )
}

let MapStateToProps = (state) => {
    return {
        pizzas: state.home.pizzas
    }
}

export default connect(MapStateToProps,{getPizzas})(Home)