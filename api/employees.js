const express = require('express');
const router = express.Router();
module.exports = router;

const employees = require('../employees');

router.get('/', (req, res) => {
  res.json(employees);
});

router.get('/employees', (req, res) => {
  res.json(employees);
});

router.get('/employees/random', (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

router.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});
