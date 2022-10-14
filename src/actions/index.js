// action types

export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const SEARCH_RESULT = "SEARCH_RESULT";

//action creator
export function addContact(user) {
  return {
    type: ADD_CONTACT,
    user,
  };
}

export function deleteContact(userId) {
  return {
    type: REMOVE_CONTACT,
    userId,
  };
}

export function updateContact(user) {
  return {
    type: UPDATE_CONTACT,
    user,
  };
}

export function searchResult(searchTerm) {
  return {
    type: SEARCH_RESULT,
    searchTerm,
  };
}
