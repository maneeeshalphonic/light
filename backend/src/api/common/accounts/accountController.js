/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

const express = require('express');

const router = express.Router();
const { adminGuard } = require('../auth/aclService');
const AccountService = require('./accountService');
const CustomErrorService = require('../../../utils/customErrorService');

const accountService = new AccountService();

router.get('/', adminGuard, (req, res) => {
  accountService
    .findcontacts()
    .then(users => res.send(users));
});

router.post('/', adminGuard, (req, res) => {
  console.log(req.body)
  accountService
    .addUser(req.body)
    .then(user => res.send(user))
    .catch(err => res.status(400).send({ error: err.message }));
});

router.get('/current', (req, res) => {
  accountService
    .findById(req.user.id)
    .then(user => res.send(user));
});

router.put('/current', (req, res) => {
  accountService
    .editCurrentUser(req.body, req.user.id)
    .then(user => res.send(user))
    .catch(error => {
      if (error instanceof CustomErrorService) {
        res.status(error.metadata && error.metadata.error.code)
          .send(error);
      }
    });
});

router.get('/:id', adminGuard, (req, res) => {
  accountService
    .findById(req.params.id)
    .then(user => res.send(user));
});

router.put('/:id', adminGuard, (req, res) => {
  accountService
    .editUser(req.body, req.params.id)
    .then(user => res.send(user))
    .catch(error => {
      if (error instanceof CustomErrorService) {
        res.status(error.metadata && error.metadata.error.code)
          .send(error);
      }
    });
});

router.delete('/:id', adminGuard, (req, res) => {
  accountService
    .deleteUser(req.params.id)
    .then(() => res.send({ id: req.params.id }));
});

module.exports = router;
