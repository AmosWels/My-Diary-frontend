export const AUTHENTICATED = localStorage.getItem("token");

export const myHeaders = new Headers({
  Accept: "application/json",
  "Content-type": "application/json",
  Authorization: `Bearer ${AUTHENTICATED}`
});
export const headers=() =>{
  return {
    headers: { Authorization: `Bearer ${AUTHENTICATED}` }
  };
};
export const clearToken=() =>{
  localStorage.clear();
};
