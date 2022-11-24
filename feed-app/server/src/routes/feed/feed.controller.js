const Post = require('../../models/Post.model');

async function getPosts(req, res) {
    try {
        res.status(200).json({
            posts: [
                {
                    _id: 1,
                    title: 'First Post',
                    content: 'It is my first post',
                    imageUrl: 'images/fifa.jpeg',
                    creator: {
                        name: 'Elon musk',
                    },
                    createdAt: new Date(),
                },
            ],
        });
    } catch (error) {
        console.log(error);
    }
}
async function createPost(req, res) {
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
        res.status(201).json({
            message: 'Post created Successfully',
            post,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        });
        console.log(error);
    }
}
module.exports = { getPosts, createPost };
