const url =
  "https:/myazurefunctionapp.azurewebsites.net/api/functionname/";
const data = { URL: "this-blog-post-URL" };

const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
});
const body = await response.json();
console.log("Success:", JSON.stringify(response));
