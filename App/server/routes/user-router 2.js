const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')
const MovieCtrl = require('../controllers/movie-ctrl')
const ArticleCtrl = require('../controllers/article-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:email', UserCtrl.getUserbyEmail)
router.get('/user/:id', UserCtrl.getUserbyEmail)
router.get('/users', UserCtrl.getUsers)


router.post('/movie', MovieCtrl.createMovie)
router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)

router.post('/article', ArticleCtrl.createArticle)
router.put('/article/:id', ArticleCtrl.updateArticle)
router.delete('/article/:id', ArticleCtrl.deleteArticle)
router.get('/article/:id', ArticleCtrl.getArticleById)
router.get('/articles', ArticleCtrl.getArticles)

module.exports = router