import api from "./api";

export async function signInPost(loginForm) {
  const response = await api.post("/auth/login", loginForm);
  return response.data;
}

export async function signUpPost(signUpForm) {
  const response = await api.post("/auth/sign-up", signUpForm);
  return response.data;
}