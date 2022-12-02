export function fetchUsers() {
  const rawAuth = localStorage.getItem("auth");
  if (rawAuth) {
    const auth = JSON.parse(rawAuth);

    return fetch("http://localhost:3000/users", {
      headers: {
        "Content-type": "application/json",
        "authorization": "Bearer " + auth.accessToken
      }
    }).then(r => r.json())
  }
  return Promise.resolve([])
}
