const { Router } = require('express');
const Bird = require('../models/Bird.js');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const bird = await Bird.getAll();
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', authenticate, async (req, res, next) => {
    try {
      const bird = await Bird.getBirdById(req.params.id);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })

  .post('/create', authenticate, async (req, res, next) => {
    try {
      const bird = await Bird.insert(req.body);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })
  .put('/update/:id', authenticate, async (req, res, next) => {
    try {
      const bird = await Bird.updateById(req.params.id, req.body);
      res.json(bird);
    } catch (e) {
      next(e);
    }
  })

  .delete('/delete/:id', authenticate, async (req, res, next) => {
    try {
      const bird = await Bird.deleteBird(req.params.id);
      res.json(bird);
    } catch (error) {
      next(e);
    }
  });
