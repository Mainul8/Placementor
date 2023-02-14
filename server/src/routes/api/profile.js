const express = require('express');
const router = express.Router();
const authorization = require('../../middlewares/authorization');

const Admin = require('../../models/Admin');
const Company = require('../../models/Company');
const Institute = require('../../models/Institute');

const { ADMIN, COMPANY, INSTITUTE } = require('../../constants/roles');

router.get('/', authorization, (req, res) => {
  const { _id, role } = req.user;

  if (role === ADMIN)
    return Admin.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === COMPANY)
    return Company.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === INSTITUTE)
    return Institute.findById(_id)
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(200).send(user);
      })
      .catch(error => res.status(400).send({ message: error.message }));
});

router.get('/:id', authorization, (req, res) => {
  Institute.findById(req.params.id)
    .then(data => {
      const user = data.toObject();
      delete user.password;

      res.status(200).send(user);
    })
    .catch(error => res.status(400).send({ message: error.message }));
});

router.patch('/', authorization, (req, res) => {
  const { _id, role } = req.user;
  const {
    name,
    website,
    companyName,
    companyEmail,
    companyPhone,
    phone
  } = req.body;

  if (role === ADMIN)
    return Admin.updateOne({ _id }, { $set: { name, website } })
      .then(success => res.status(200).send(success.nModified.toString()))
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === COMPANY)
    return Company.updateOne(
      { _id },
      { $set: { name, website , companyName , companyEmail , companyPhone } }
    )
      .then(success => res.status(200).send(success.nModified?.toString()))
      .catch(error => res.status(400).send({ message: error.message }));

  if (role === INSTITUTE)
    return Institute.updateOne({ _id }, { $set: { name, website, phone } })
      .then(success => res.status(200).send(success.nModified?.toString()))
      .catch(error => res.status(400).send({ message: error.message }));
});

module.exports = router;
