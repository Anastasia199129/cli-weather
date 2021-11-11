import { chooseСity } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const queryReduser = createReducer('Minsk', {
  [chooseСity]: (state, action) => action.payload,
});
// const queryReduser = (state = { name: 'Minsk' }, { type, payload }) => {
//   switch (type) {
//     case 'сities/chooseСity':
//       return { name: payload };

//     default:
//       return state;
//   }
// };

export default queryReduser;
