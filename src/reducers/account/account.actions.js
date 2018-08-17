import * as types from 'constants/actionTypes';

export const updateAccountData = (email, name, profile) => {
  return {
    type: types.UPDATE_ACCOUNT_DATA,
    email,
    name,
    profile
  }
}
