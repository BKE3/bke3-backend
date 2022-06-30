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
  })
  .get('/:id', async (req, res, next) => {
    try {
      const bird = await Bird.getBirdById(req.params.id);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })

  .post('/create', async (req, res, next) => {

    try {
      const bird = await Bird.insert(req.body);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })
  .put('/update/:id', async (req, res, next) => {
    try {
      const bird = await Bird.updateById(req.params.id, req.body);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  });
