const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const PORT = process.env.PORT || 5000

const Post = require('./models').Post
const User = require('./models').User

app.use(express.json())

app.post('/post', async (req, res) => {
    const post = new Post({title: 'new title', body: 'new body', views: 100, userId: 2})
    await post.save()
    res.send({message: 'success', post})
})

app.get('/posts', async (req, res) => {
    const posts = await  Post.findAll({include: User})
    res.send({posts})
})

app.post('/user', async (req, res) => {
    const user = new User({name: 'John Doe', age: 44})
    await user.save()
    res.send({message: 'success', user})
})

app.get('/users', async (req, res) => {
    try{
        const users = await  User.findAll({include: Post})
        res.send({users})
    }catch(e) {
        res.send({e})
    }
})

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})