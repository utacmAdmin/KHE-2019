var db = require('../db/db.js')

const router = require('express').Router();

router.get('/employee', (req, res) => {
  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();
  let returnData = [];
  async function getEmployees() {
    const query = datastore.createQuery('Employee');
    const [employees] = await datastore.runQuery(query);

    for (const employee of employees) {
      const employeeKey = employee[datastore.KEY];
      let employeeData = {
        "id": employeeKey.id,
        "name": employee.Name,
        "lastwork": employee.Lastwork,
        "preferredtime": employee.Preferredtime,
        "day": employee.day
      };
      returnData.push(employeeData);
    }
  }
  async function main() {
    await getEmployees();
    return res.status(200).send(returnData)
  }
  main();
})

router.get('/employee/:id', (req, res) => {
  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();
  let returnData = [];
  async function getEmployees() {
    const query = datastore.createQuery('Employee');
    const [employees] = await datastore.runQuery(query);

    for (const employee of employees) {
      const employeeKey = employee[datastore.KEY];
      if (employeeKey.id == req.params.id) {
        let employeeData = {
          "id": employeeKey.id,
          "name": employee.Name,
          "lastwork": employee.Lastwork,
          "preferredtime": employee.Preferredtime,
          "day": employee.day
        };
        returnData.push(employeeData);
      }
    }
  }
  async function main() {
    await getEmployees();
    return res.status(200).send(returnData)
  }
  main();
})

router.post('/employee', (req, res) => {
  const newEmployee = {
    name: req.body.name,
    day: req.body.day,
    shift: req.body.shift,
    lastwork: req.body.lastwork
  }
  db.push(newEmployee);
  'use strict';

  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();

  async function createEmployeeShift() {
    // The kind for the new entity
    const kind = 'Employee';

    // The Cloud Datastore key for the new entity
    const taskKey = datastore.key([kind]);

    let preferredTime;
    if (newEmployee.shift == 0) { preferredTime = "Morning" }
    else if (newEmployee.shift == 1) { preferredTime = "Noon" }
    else if (newEmployee.shift == 2) { preferredTime = "Evening" }

    const query = datastore.createQuery('Employee');
    const [employees] = await datastore.runQuery(query);

    // Prepares the new entity
    const task = {
      key: taskKey,
      data: {
        Lastwork: newEmployee.lastwork,
        Name: newEmployee.name,
        Preferredtime: newEmployee.shift,
        day: newEmployee.day,
        sn: employees.length + 1
      }
    };

    // Saves the entity
    await datastore.save(task);
  }
  createEmployeeShift();
  return res.status(200).send({
    message: 'New Employee ' + newEmployee.name + ' with day ' + newEmployee.day + ' and shift ' + newEmployee.shift + 'added successfully.'
  })
});


router.put('/employee/:id', (req, res) => {
  const id = req.params.id;

  const employee = {
    name: req.body.name,
    day: req.body.day,
    Preferredtime: req.body.Preferredtime,
    Lastwork: req.body.Lastwork
  }

  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();
  const kind = 'Employee';

  const name = req.params.id;
  // The Cloud Datastore key for the new entity

  async function updateEmployee() {
    // TODO(developer): uncomment the following line and define a taskId
    // const taskId = 'task123';
    const transaction = datastore.transaction();
    const employeeKey = datastore.key(['Employee', 'id=' + req.params.id])

    console.log(employeeKey);
    try {
      await transaction.run();
      const employee = await transaction.get(employeeKey);
      console.log(employee);
      employee.Name = req.body.name;
      transaction.save({
        key: "id=" + employeeKey,
        data: {
          Name: req.body.name,
          Lastwork: req.body.LastWork,
          Preferredtime: req.body.Preferredtime
        }
      });
      await transaction.commit();
      console.log(`Employee id ${req.params.id} updated successfully.`);
    } catch (err) {
      transaction.rollback();
      throw err;
    }
  }
  async function main() {
    await updateEmployee();
    // [END datastore_update_entity]
    return res.status(200).send("Updated");
  }
  main();
});

router.delete('/employee/:id', (req, res) => {
  const employeeId = req.params.id;
  // [START datastore_delete_entity]
  const { Datastore } = require('@google-cloud/datastore');

  const datastore = new Datastore();

  async function deleteTask() {
    // TODO(developer): uncomment the following line and define a taskId
    // const taskId = 'task123';
    const employeeKey = datastore.key(['Employee', 4]);
    console.log(employeeKey);
    await datastore.delete(employeeKey);
    console.log(`Task ${employeeId} deleted successfully.`);
  }
  deleteTask().then(() => {
    return res.status(200).send(
      "Deleted")
  });
});
module.exports = router