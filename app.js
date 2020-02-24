const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const PORT = process.env.PORT || 5000

const { User, Post, Comment } = require('./models')

app.use(express.json())

// const pgURL = 'postgres://hiekwpqymhmtnf:bee874cdf4dccc0a32fc39f95e6a17d89a53cd1111fc8fc8c6c435622afab490@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d6oef8qq1ssdrm'
// const sequelize = new Sequelize(pgURL)


app.post('/user', async (req, res) => {
    const user = new User(req.body)
    await user.save()
    res.send({ message: 'success', user })
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAndCountAll({
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title'],
                    offset: 0,
                    limit: 0,
                    right: true // RIGHT OUTER JOIN by passing the right
                }
            ],
            order: [
                ['id', 'ASC'], // here to order parent model USER
                [Post, 'id', 'DESC'] // this is how you can order nested models like POST ..
            ],
            attributes: ['id', 'name'],
            offset: 0, // skip 5
            limit: 5 // get me only 5
        })

        // const users = await User.findAndCountAll()

        res.json({ users })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.post('/post', async (req, res) => {
    const post = new Post({ title: 'new title', body: 'new body', views: 100, userId: 2 })
    await post.save()
    res.send({ message: 'success', post })
})

app.get('/posts', async (req, res) => {
    const posts = await Post.findAll({ include: [User, Comment], order: [['id', 'DESC']] })
    res.send({ posts })
})

app.post('/comment', async (req, res) => {
    try {
        const comment = new Comment(req.body)
        await comment.save()

        res.json(comment)
    } catch (e) {
        res.send({ e })
    }
})

app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment
            .findAll({
                include: [
                    { model: Post, attributes: ['id', 'title'] },
                    { model: User, attributes: ['id', 'name'] }
                ],
                attributes: ['id', 'comment']
            })
        res.json(comments)
    } catch (e) {
        res.send({ e })
    }
})

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})