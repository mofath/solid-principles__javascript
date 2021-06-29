class PostManager {
    constructor(http) {
        this.http = http;
    };

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    };

    getComments() {
        return this.http.get('https://jsonplaceholder.typicode.com/comments')
    }

};

module.exports = {
    PostManager
}