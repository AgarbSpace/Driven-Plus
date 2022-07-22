import api from "./api";

export async function getSubscriptions(token) {
  const response = await api.get("/subscriptions/memberships",{
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}