export const addItem = (album) => {
  return {
    type: "ADD",
    payload: album,
  };
};
