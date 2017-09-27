export const actionTypes = {
  UPDATE_DATA : "UPDATE_DATA"
};


export const updateAccountData = (email, name, profile) => {
  return {
    type: actionTypes.UPDATE_DATA,
    email,
    name,
    profile
  }
}
