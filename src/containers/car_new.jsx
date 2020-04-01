import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      model: '',
      owner: '',
      plate: ''
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCar(this.state.brand, this.state.model, this.state.owner, this.state.plate, this.props.garage, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  handleChange = (event) => {
    if (event.target.name === 'brand') {
      this.setState({ brand: event.target.value });
    } else if (event.target.name === 'model') {
      this.setState({ model: event.target.value });
    } else if (event.target.name === 'owner') {
      this.setState({ owner: event.target.value });
    } else if (event.target.name === 'plate') {
      this.setState({ plate: event.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="brand">Brand</label>
        <input type="text" value={this.state.brand} name="brand" onChange={this.handleChange} />
        <label htmlFor="model">Model</label>
        <input type="text" value={this.state.model} name="model" onChange={this.handleChange} />
        <label htmlFor="owner">Owner</label>
        <input type="text" value={this.state.owner} name="owner" onChange={this.handleChange} />
        <label htmlFor="plate">Plate</label>
        <input type="text" value={this.state.plate} name="plate" onChange={this.handleChange} />
        <button
          type="submit"
          // disabled={this.props.pristine || this.props.submitting}
        >Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps, { createCar })(CarNew);


