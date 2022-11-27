const feedRouter = require('express').Router();
const { getPosts, createPost, getPost } = require('./feed.controller');

feedRouter.route('/posts').get(getPosts);
feedRouter.route('/post').post(createPost);
feedRouter.route('/post/:postId').get(getPost);

module.exports = feedRouter;
