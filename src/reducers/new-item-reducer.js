import { UPDATE_NEW_ITEM_VALUE } from '../constants';

export default function(state = '', action) {
  if (action = UPDATE_NEW_ITEM_VALUE) {
    return action.value
  }
  return state;
}
