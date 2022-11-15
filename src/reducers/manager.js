const managerReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "REMOVE":
      return state.push(action.payload);
    default:
      return state;
  }
};
export default managerReducer;
