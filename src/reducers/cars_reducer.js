import { FETCH_CARS, FETCH_CAR, CAR_DELETED } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case FETCH_CAR:
    debugger
      return [action.payload];
    case CAR_DELETED:
      return action.payload;
    default:
      return state;
  }
}
