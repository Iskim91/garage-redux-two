// import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { deleteCar } from "../actions";

// class CarDeleted extends Component {
//   // componentWillMount() {
//   //   this.props.fetchCar(this.props.garage, this.props.match.params.id);
//   // }
//   // componentDidMount() {
//   //   if (!this.props.car) {
//   //     this.props.fetchCar(this.props.garage, this.props.match.params.id);
//   //   }
//   // }
//   renderSubmit = () => {
//     event.preventDefault();
//     this.props.deleteCar(this.props.car, this.props.garage, (car) => {
//       this.props.history.push('/');
//       return car;
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button type="submit" onSubmit={this.renderSubmit} >Delete</button>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state, ownProps) {
//   const idFromUrl = parseInt(ownProps.match.params.id, 10);
//   const car = state.cars.find(c => c.id === idFromUrl);
//   return {
//     car,
//     garage: state.garage
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ deleteCar }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CarDeleted);
