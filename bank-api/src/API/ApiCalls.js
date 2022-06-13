import axios from "axios";

// GET A USER PROFIL

export async function getUserProfile(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    key: "value",
  };
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      bodyParameters,
      config
    );
    return {
      firstName: data.body.firstName,
      lastName: data.body.lastName,
    };
  } catch (err) {
    console.log(err.message);
    return "not found";
  }
}

//LOGIN

export async function postFormData(email, password) {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email: email, password: password }
    );
    const token = data.body.token;

    localStorage.setItem("token", token);
    return "token received";
  } catch (err) {
    console.log(err.message);
    return "error";
  }
}

//CREATE USER

export async function createUser(email, password, firstName, lastName) {
  try {
    const { data } = await axios.post(
      "http://localhost:3001/api/v1/user/signup",
      {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }
    );
    return true;
  } catch (err) {
    return false;
  }
}

// MODIFY A USER

export async function modifyUser(firstName, lastName) {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    firstName: firstName,
    lastName: lastName,
  };

  try {
    const { data } = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      bodyParameters,
      config
    );
  } catch (err) {
    console.log(err.message);
  }
}
