const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Institute = require('../../models/Institute');

const { ADMIN, INSTITUTE } = require('../../constants/roles');

router.get('/', authorization, (req, res) => {
  if (req.user.role === INSTITUTE)
    return res.status(401).send({ message: 'Access denied.' });

  Institute.find({})
    .then(institutes => res.status(200).send(institutes))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  if (req.user.role === INSTITUTE)
    return res.status(401).send({ message: 'Access denied.' });

  Institute.findById(req.params.id)
    .then(institute => res.status(200).send(institute))
    .catch(error => res.status(400).send({ message: error.message }));
});

router.delete('/:id', authorization, (req, res) => {
  if (req.user.role !== ADMIN)
    return res.status(401).send({ message: 'Access denied.' });

  Institute.deleteOne({ _id: req.params.id })
    .then(success => res.status(200).send(success.deletedCount?.toString()))
    .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
