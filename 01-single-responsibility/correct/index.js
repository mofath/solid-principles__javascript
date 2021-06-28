const HttpClient = require('./http-client');

const client = new HttpClient();

client.get(`https://jsonplaceholder.typicode.com/posts`).then(data => {
    console.log(data);
})
