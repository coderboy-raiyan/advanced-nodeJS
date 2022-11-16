const feedRouter = require('express').Router();
const { getPosts, createPost } = require('./feed.controller');

feedRouter.route('/posts').get(getPosts);
feedRouter.route('/post').post(createPost);

module.exports = feedRouter;
