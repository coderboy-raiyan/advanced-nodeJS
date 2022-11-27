const feedRouter = require('express').Router();
const { getPosts, createPost, getPost } = require('./feed.controller');
const uploader = require('../../lib/multer');

feedRouter.route('/posts').get(getPosts);
feedRouter.route('/post').post(uploader.single('image'), createPost);
feedRouter.route('/post/:postId').get(getPost);

module.exports = feedRouter;
