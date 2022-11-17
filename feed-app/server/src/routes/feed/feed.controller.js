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
        res.status(201).json({
            message: 'Post created Successfully',
            post: {
                _id: new Date().toISOString(),
                title,
                content,
            },
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getPosts, createPost };
