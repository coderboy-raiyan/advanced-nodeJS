/* eslint-disable no-underscore-dangle */
const path = require('path');
const fs = require('fs');
const Post = require('../../models/Post.model');

async function getPosts(req, res, next) {
    try {
        const currentPage = req.query.page || 1;
        const perPage = 2;

        const totalItems = await Post.find().countDocuments();
        const posts = await Post.find()
            .skip((currentPage - 1) * perPage)
            .limit(perPage);

        return res.status(200).json({
            posts,
            totalItems,
        });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}
async function createPost(req, res, next) {
    if (!req.file) {
        return res.status(422).json({ message: 'No image provided' });
    }

    const { title, content } = req.body;
    try {
        const post = await Post.create({
            title,
            content,
            imgUrl: `images/${req.file.filename}`,
            creator: {
                name: 'Elon musk',
            },
        });

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

async function updatePost(req, res, next) {
    try {
        const { postId } = req.params;
        const { title, content } = req.body;

        let imageUrl;
        if (req.file) {
            imageUrl = `images/${req.file.filename}`;
        }

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Could not find post' });
        }

        post.title = title;
        post.content = content;
        if (req.file) {
            clearImage(post.imgUrl);
            post.imgUrl = imageUrl;
        }

        const result = await post.save();

        res.status(200).json({ message: 'Post Updated', post: result });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

async function deletePost(req, res, next) {
    try {
        const { postId } = req.params;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        clearImage(post.imgUrl);

        const deletedPost = await Post.findByIdAndRemove(post._id);

        return res.status(200).json({ message: 'Post has been deleted', deletedPost });
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}

function clearImage(filePath) {
    if (filePath) {
        filePath = path.join(__dirname, '..', '..', filePath);
        fs.unlink(filePath, (err) => console.log(err));
    }
}

module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
};
