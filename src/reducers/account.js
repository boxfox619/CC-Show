import update from 'react-addons-update';

const initialState = {
  name: 'Guest',
  id: 'Guest'
}

const account = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    default:
      return state;
  }
}
export default account
