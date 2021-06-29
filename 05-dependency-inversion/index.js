const Container = require('bottlejs');
const { HttpClient } = require('./http-client');
const { PostManager } = require('./post-manager');

const container = new Container();

container.service('HttpClient', HttpClient);
container.service('PostManager', PostManager, 'HttpClient');

const postManager = container.container.PostManager;

postManager.getPosts().then((posts) => {
    console.log(posts);
});

