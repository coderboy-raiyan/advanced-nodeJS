/* eslint-disable consistent-return */
const Post = require('../../models/Post.model');

async function getPosts(req, res, next) {
    try {
        const posts = await Post.find({});
        return res.status(200).json({
            posts,
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}
async function createPost(req, res, next) {
    const { title, content } = req.body;
    try {
        const post = await Post.create({
            title,
            content,
            imgUrl: 'images/duck.jpeg',
            creator: {
                name: 'Elon musk',
            },
        });
        console.log(post);
        return res.status(201).json({
            message: 'Post created Successfully',
            post,
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

async function getPost(req, res, next) {
    try {
        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(400).json({ message: 'No post found' });
        }
        return res.status(200).json({ message: 'Post fetched', post });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

module.exports = { getPosts, createPost, getPost };
