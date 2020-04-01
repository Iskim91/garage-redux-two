import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCar, deleteCar, fetchCars } from "../actions";

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);

  }

  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.deleteCar(this.props.car.id, this.props.history)
  }

  render() {
    return (
      <div>
        <h1>{this.props.car.brand} {this.props.car.model}</h1>
        <p>{this.props.car.owner}</p>
        <p>{this.props.car.plate}</p>
        <form action="" onSubmit={this.handleSubmit}>
          <button type="submit">Delete</button>
        </form>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return {
    car: car,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar, fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
