// actions

export const GET_EMAIL = "get user email";
export const GET_PASSWORD = "get user password";
export const SAVE_PASSWORD = "save user password";
export const SAVE_EMAIL = "save user email";
export const CLEAR_HISTORY = "clear history";
export const GET_TOKEN = "get user token";
export const LOGGED = "user is logged";
export const LOGGED_OUT = "user is logged out ";
export const GET_FIRST_NAME = "get user first name";
export const GET_LAST_NAME = "get user last name";
export const EDIT_PROFIL = "edit user profil";
export const CLOSE_PROFIL_EDITING = "close the profile editor";
export const GET_NEW_FIRST_NAME = "get new first-name entered by user";
export const GET_NEW_LAST_NAME = "get new last-name entered by user";
export const SAVE_NAME = "save new user name";
export const REMEMBER_ME = "put variable rememberMe to true";
export const DONT_REMEMBER_ME = "put variable rememberMe to false";
export const CLEAR_FORM = "Clear form";
export const CLEAR_FIRST_AND_LAST_NAMES =
  "Clear any first and last name registered in the global state";

// actions creators

export const getEmail = (email) => ({
  type: GET_EMAIL,
  payload: { email: email },
});

export const getPassword = (password) => ({
  type: GET_PASSWORD,
  payload: { password: password },
});

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: { email: email },
});

export const savePassword = (password) => ({
  type: SAVE_PASSWORD,
  payload: { password: password },
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});

export const getToken = (token) => ({
  type: GET_TOKEN,
  payload: { token: token },
});

export const logged = () => ({
  type: LOGGED,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});

export const getFirstName = (firstName) => ({
  type: GET_FIRST_NAME,
  payload: { firstName: firstName },
});

export const getLastName = (lastName) => ({
  type: GET_LAST_NAME,
  payload: { lastName: lastName },
});

export const editProfil = () => ({
  type: EDIT_PROFIL,
});

export const closeProfilEditing = () => ({
  type: CLOSE_PROFIL_EDITING,
});

export const getNewFirstName = (newFirstName) => ({
  type: GET_NEW_FIRST_NAME,
  payload: { newFirstName: newFirstName },
});

export const getNewLastName = (newLastName) => ({
  type: GET_NEW_LAST_NAME,
  payload: { newLastName: newLastName },
});

export const saveName = (firstName, lastName) => ({
  type: SAVE_NAME,
  payload: { firstName: firstName, lastName: lastName },
});

export const remember = () => ({
  type: REMEMBER_ME,
});

export const dontRemember = () => ({
  type: DONT_REMEMBER_ME,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const clearFirstAndLastNames = () => ({
  type: CLEAR_FIRST_AND_LAST_NAMES,
});
