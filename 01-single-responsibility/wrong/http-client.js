const fetch = require('node-fetch');

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
                    if (response.status == 401) {
                        console.log(`You are not authorized to view this content`);
                    } else if (response.status == 500) {
                        console.log('Internal server error');
                    }
                    else if (response.status == 404) {
                        console.log('Internal server error');
                    }
                    else {
                        console.log('Unkown error');
                    }
                }
            })
    }
}


module.exports = HttpClient;