const fetch = require('node-fetch');
const ErrorHandler = require('./error-handler');

class HttpClient {
    get(url) {
        return fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    ErrorHandler.handle(response);
                }
            })
    }
}


module.exports = HttpClient;