import { actionTypes } from '../../actions/account';
import update from 'react-addons-update';

const initialState = {
  name: 'Guest',
  email: '로그인이 필요합니다',
  profile: '/images/tmpprofile.png'
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DATA:
      return {
        name: action.name,
        email: action.email,
        profile: action.profile
      }
    default:
      return state;
  }
}
export default account
