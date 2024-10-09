const express = require('express');
const router = express.Router();
module.exports = router;

const employees = require('../employees');

router.get('/', (req, res) => {
  res.json(employees);
});

router.get('/random', (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`There is no employee with id ${id}.`);
  }
});

router.post('/', (req, res) => {
  const employee = req.body;
  if (employee) {
    const employeeExistsAlready = employees.find((e) => e.id === employee.id);
    if (!employeeExistsAlready) {
      employees.push(employee);
      res.status(201).json(employees);
    } else {
      res.status(400).send('This player already exists.');
    }
  } else {
    res.status(400).send(`This shit ain't workin': ${employee}`);
  }
});
