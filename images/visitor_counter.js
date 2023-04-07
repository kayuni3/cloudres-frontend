const url =
  "https://visitcountapi.azurewebsites.net/api/CosmosTrigger1?";
const data = { URL: "www.kayuni.dev" };

const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});
const body = await response.json();
console.log("Success:", JSON.stringify(response));
