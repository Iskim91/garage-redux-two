import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  // shouldComponentUpdate(nextProps) {
  //   nextProps.cars !== this.props.cars;
  // }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id} >
          <li >
            <h1>{car.brand} {car.model}</h1>
            <p>{car.owner}</p>
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to="/cars/new">
          Add a Car
        </Link>
        <ul>
          {this.renderCars()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
