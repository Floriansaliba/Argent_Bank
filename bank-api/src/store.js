import { createStore } from "redux";
import { produce } from "immer";
import {
  GET_EMAIL,
  GET_PASSWORD,
  SAVE_PASSWORD,
  SAVE_EMAIL,
  CLEAR_HISTORY,
  GET_TOKEN,
  LOGGED,
  LOGGED_OUT,
  GET_FIRST_NAME,
  GET_LAST_NAME,
  EDIT_PROFIL,
  CLOSE_PROFIL_EDITING,
  GET_NEW_FIRST_NAME,
  GET_NEW_LAST_NAME,
  SAVE_NAME,
  REMEMBER_ME,
  DONT_REMEMBER_ME,
  CLEAR_FORM,
  CLEAR_FIRST_AND_LAST_NAMES,
} from "./actions";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// state initial

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
  isLogged: false,
  firstName: "",
  lastName: "",
  newFirstName: "",
  newLastName: "",
  profilEditing: false,
};

// Reducer

export function reducer(state = initialState, action) {
  if (action.type === GET_EMAIL) {
    const email = action.payload.email;
    return produce(state, (draft) => {
      draft.email = email;
    });
  }
  if (action.type === GET_PASSWORD) {
    const password = action.payload.password;
    return produce(state, (draft) => {
      draft.password = password;
    });
  }
  if (action.type === SAVE_EMAIL) {
    const email = action.payload.email;
    return produce(state, (draft) => {
      draft.savedEmail = email;
    });
  }
  if (action.type === SAVE_PASSWORD) {
    const password = action.payload.password;
    return produce(state, (draft) => {
      draft.savedPassword = password;
    });
  }
  if (action.type === CLEAR_HISTORY) {
    return produce(state, (draft) => {
      draft.savedPassword = "";
      draft.savedEmail = "";
    });
  }
  if (action.type === GET_TOKEN) {
    const token = action.payload.token;
    return produce(state, (draft) => {
      draft.token = token;
    });
  }
  if (action.type === LOGGED) {
    return produce(state, (draft) => {
      draft.isLogged = true;
    });
  }
  if (action.type === LOGGED_OUT) {
    return produce(state, (draft) => {
      draft.isLogged = false;
    });
  }
  if (action.type === GET_FIRST_NAME) {
    const firstName = action.payload.firstName;
    return produce(state, (draft) => {
      draft.firstName = firstName;
    });
  }
  if (action.type === GET_LAST_NAME) {
    const lastName = action.payload.lastName;
    return produce(state, (draft) => {
      draft.lastName = lastName;
    });
  }
  if (action.type === EDIT_PROFIL) {
    return produce(state, (draft) => {
      draft.profilEditing = true;
    });
  }
  if (action.type === CLOSE_PROFIL_EDITING) {
    return produce(state, (draft) => {
      draft.profilEditing = false;
    });
  }
  if (action.type === GET_NEW_FIRST_NAME) {
    return produce(state, (draft) => {
      const newFirstName = action.payload.newFirstName;
      draft.newFirstName = newFirstName;
    });
  }
  if (action.type === GET_NEW_LAST_NAME) {
    return produce(state, (draft) => {
      const newLastName = action.payload.newLastName;
      draft.newLastName = newLastName;
    });
  }
  if (action.type === SAVE_NAME) {
    return produce(state, (draft) => {
      const firstName = action.payload.firstName;
      const lastName = action.payload.lastName;
      draft.firstName = firstName;
      draft.lastName = lastName;
    });
  }
  if (action.type === REMEMBER_ME) {
    return produce(state, (draft) => {
      draft.rememberMe = true;
    });
  }
  if (action.type === DONT_REMEMBER_ME) {
    return produce(state, (draft) => {
      draft.rememberMe = false;
    });
  }
  if (action.type === CLEAR_FORM) {
    return produce(state, (draft) => {
      draft.email = "";
      draft.password = "";
    });
  }
  if (action.type === CLEAR_FIRST_AND_LAST_NAMES) {
    return produce(state, (draft) => {
      draft.firstName = "";
      draft.lastName = "";
      draft.newFirstName = "";
      draft.newLastName = "";
    });
  }

  return state;
}

// Store

export const store = createStore(reducer, reduxDevtools);
