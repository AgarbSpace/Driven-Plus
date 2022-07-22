import api from "./api";

export async function getSubscriptions(token) {
  const response = await api.get("/subscriptions/memberships",{
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getSubscriptionById(token, id) {
    const response = await api.get(`/subscriptions/memberships/${id}`,{
      headers: {
          Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }