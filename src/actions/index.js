// TODO: add and export your own actions
export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const CAR_CREATED = "CAR_CREATED";
export const CAR_DELETED = "CAR_DELETED";

const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

export function fetchCars(garage) {
  // const url = `${BASE_URL}?key=${API_KEY}`;
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function createCar(brand, model, owner, plate, garage, callback) {
  const body = { brand: brand, model: model, owner: owner, plate: plate};
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(r => r.json()).then(callback);
  return {
    type: CAR_CREATED,
    payload: request
  };
}

export function deleteCar(id, history) {
  const url = `${BASE_URL}/cars/${id}`;
  const request = fetch(url, {
    method: 'DELETE',
  }).then(r => r.json()).then(() => history.push(""));
  return {
    type: CAR_DELETED,
    payload: request
  };
}

export function fetchCar(id) {
  const url = `${BASE_URL}/cars/${id}`;
  const promise = fetch(url, {
    method: "GET"
  }).then(r => r.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}
// TODO: add and export your own actions
