import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';

export default function(state = {}, action) {
  if (action.type === ADD_NEW_ITEM) {
    return [ ...state, action.item ]
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter(item => item.id !== action.id)
  }

  if (action.type === TOGGLE_ITEM) {
    const item = action.item;
    return [ ...state, !item.packed]
  }

  if (action.type === MARK_ALL_AS_UNPACKED) {
    return [ ...state, action.item.packed = false]
  }
  return state;
}
