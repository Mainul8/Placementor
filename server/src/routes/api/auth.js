const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Admin = require('../../models/Admin');
const Company = require('../../models/Company');
const Institute = require('../../models/Institute');

const { ADMIN, COMPANY, INSTITUTE } = require('../../constants/roles');
const { validateSignUp, validateLogIn } = require('../../validation');

router.post('/signup/:role', async (req, res) => {
  const { role } = req.params;
  const { name, website, email, password } = req.body;

  const { error } = validateSignUp(req.body);
  if (error) return res.status(400).send({ message: error.message });

  const isEmailExistInAdmins = await Admin.findOne({ email });
  const isEmailExistInCompanies = await Company.findOne({ email });
  const isEmailExistInInstitutes = await Institute.findOne({ email });

  if (isEmailExistInAdmins || isEmailExistInCompanies || isEmailExistInInstitutes)
    return res.status(400).send({
      message: 'The email address is already in use by another account.'
    });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  if (role === COMPANY) {
    const company = new Company({
      name,
      website,
      email,
      password: hash
    });

    const token = jwt.sign({ _id: company._id, role }, process.env.JWT_SECRET);

    company
      .save()
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(201).send({ user, token });
      })
      .catch(error => res.status(400).send({ message: error.message }));
  } else if (role === INSTITUTE) {
    const institute = new Institute({
      name,
      website,
      email: email,
      password: hash
    });

    const token = jwt.sign({ _id: institute._id, role }, process.env.JWT_SECRET);

    institute
      .save()
      .then(data => {
        const user = data.toObject();
        delete user.password;

        res.status(201).send({ user, token });
      })
      .catch(error => res.status(400).send({ message: error.message }));
  }
});

router.post('/login/:role', async (req, res) => {
  const { role } = req.params;
  const { email, password } = req.body;

  const { error } = validateLogIn(req.body);
  if (error) return res.status(400).send({ message: error.message });

  if (role === ADMIN) {
    const user = await Admin.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET);

    const userData = user.toObject();
    delete userData.password;

    res.status(200).send({ user: userData, token });
  } else if (role === COMPANY) {
    const user = await Company.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET);

    const userData = user.toObject();
    delete userData.password;

    res.status(200).send({ user: userData, token });
  } else if (role === INSTITUTE) {
    const user = await Institute.findOne({ email });

    if (!user)
      return res.status(400).send({
        message: 'There is no user record corresponding to this identifier.'
      });

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(400).send({ message: 'The password is invalid.' });

    const token = jwt.sign({ _id: user._id, role }, process.env.JWT_SECRET);

    const userData = user.toObject();
    delete userData.password;

    res.status(200).send({ user: userData, token });
  }
});

module.exports = router;
