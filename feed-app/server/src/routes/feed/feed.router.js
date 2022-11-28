const feedRouter = require('express').Router();
const { getPosts, createPost, getPost, updatePost } = require('./feed.controller');
const uploader = require('../../lib/multer');

feedRouter.route('/posts').get(getPosts);
feedRouter.route('/post').post(uploader.single('image'), createPost);
feedRouter.route('/post/:postId').get(getPost).put(uploader.single('image'), updatePost);

module.exports = feedRouter;
