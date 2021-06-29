const fetch = require('node-fetch');

class HttpClient {
    get(url) {
        return fetch(url)
            .then((res) => res.json())
    };
}

module.exports = {
    HttpClient,
}