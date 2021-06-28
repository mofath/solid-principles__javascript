const HttpClient = require('./http-client');

const client = new HttpClient();

client.get(`https://httpstat.us/401`).then(data => {
    console.log(data);
})
