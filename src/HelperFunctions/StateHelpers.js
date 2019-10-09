export function updateStateByKey(key, value, callback) {
  callback(prevState => {
    var newState = { ...prevState };
    newState[key] = value;
    return newState;
  })
}