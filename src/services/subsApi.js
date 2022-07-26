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

export async function postSubs(token, body){
  const response = await api.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body ,{
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export async function cancelSubs(token) {
  await api.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",{
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
}