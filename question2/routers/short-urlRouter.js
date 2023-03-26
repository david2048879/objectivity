const express = require('express')
const NewShotURController = require('../controllers/short-urlController')

const router = express.Router()

router.post('/', NewShotURController.createNewShortUrl)
router.get('/:shortUrl', NewShotURController.getOriginalUR)