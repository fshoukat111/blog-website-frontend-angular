import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  /**
  * Takes an object array list, an item , and delete flag as parameter
  * Adds, updates or deletes and item from the object array list
  * @param state Current store state
  * @param newItem New item to be added/deleted in state
  * @param isDelete Either need to updated to deleted new item
  */
  static updateStore(state: any[], newItem: any, isDelete = false) {
    // debugger

    if (newItem && state) {
      if (Array.isArray(newItem)) { // If newItem is an array
        if (newItem.length) {
          state = [...state, ...newItem];
        }
      } else { // If newItem is object
        const index = state.findIndex(a => (a.id && a.id === newItem.id) || (a._id && a._id === newItem._id));
        // console.log('indexhelper',index)
        if (index > -1) {
          if (isDelete) {
            state.splice(index, 1);
          } else {
            state[index] = newItem;
          }
        } else {
          state.push(newItem);
          console.log('state', state)

        }
      }
    }
    return state;
  }
}
