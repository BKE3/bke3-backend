const { Router } = require('express');
const Bird = require('../models/Bird.js');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const bird = await Bird.getAll();
      res.json(bird);
    } catch (e) {
      next(e);
    }
  });
