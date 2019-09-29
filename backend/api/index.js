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
        "Id": employeeKey.id,
        "name": employee.Username,
        "schedule": {
          "monday": employee.Monday,
          "tuesday": employee.Tuesday,
          "wednesday": employee.Wednesday,
          "thursday": employee.Thursday,
          "friday": employee.Friday,
          "saturday": employee.Saturday,
          "sunday": employee.Sunday,
        }
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

// Algorithm API

router.get('/employeealgo', (req, res) => {
  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();
  let returnData = [];
  async function getEmployees() {
    const query = datastore.createQuery('Employee_Algo');
    const [employees] = await datastore.runQuery(query);

    for (const employee of employees) {
      const employeeKey = employee[datastore.KEY];
      let employeeData = {
        "Id": employeeKey.id,
        "name": employee.Username,
        "schedule": {
          "monday": employee.Monday,
          "tuesday": employee.Tuesday,
          "wednesday": employee.Wednesday,
          "thursday": employee.Thursday,
          "friday": employee.Friday,
          "saturday": employee.Saturday,
          "sunday": employee.Sunday,
        }
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

/* 
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
*/

router.post('/employee', (req, res) => {
  const newEmployee = {
    name: req.body.name,
    schedule: {
      monday: req.body.schedule.monday,
      tuesday: req.body.schedule.tuesday,
      wednesday: req.body.schedule.wednesday,
      thursday: req.body.schedule.thursday,
      friday: req.body.schedule.friday,
      saturday: req.body.schedule.saturday,
      sunday: req.body.schedule.sunday,
    }
  }

  console.log(newEmployee);
  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();

  async function createEmployeeShift() {
    // The kind for the new entity
    const kind = 'Employee';

    // The Cloud Datastore key for the new entity
    const employeeKey = datastore.key([kind]);


    const query = datastore.createQuery('Employee');
    const [employees] = await datastore.runQuery(query);

    // Prepares the new entity
    const employee = {
      key: employeeKey,
      data: {
        Username: newEmployee.name,
        Monday: newEmployee.schedule.monday,
        Tuesday: newEmployee.schedule.tuesday,
        Wednesday: newEmployee.schedule.wednesday,
        Thursday: newEmployee.schedule.thursday,
        Friday: newEmployee.schedule.friday,
        Saturday: newEmployee.schedule.saturday,
        Sunday: newEmployee.schedule.sunday
      }
    };

    // Saves the entity
    await datastore.save(employee);
  }
  createEmployeeShift();
  return res.status(200).send(
    "New Employee created")
});

//Algorithm api
router.post('/employeealgo', (req, res) => {
  const newEmployee = {
    name: req.body.name,
    schedule: {
      monday: req.body.schedule.monday,
      tuesday: req.body.schedule.tuesday,
      wednesday: req.body.schedule.wednesday,
      thursday: req.body.schedule.thursday,
      friday: req.body.schedule.friday,
      saturday: req.body.schedule.saturday,
      sunday: req.body.schedule.sunday,
    }
  }

  console.log(newEmployee);
  // [START datastore_quickstart]
  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();

  async function createEmployeeShift() {
    // The kind for the new entity
    const kind = 'Employee_Algo';

    // The Cloud Datastore key for the new entity
    const employeeKey = datastore.key([kind]);


    const query = datastore.createQuery('Employee_Algo');
    const [employees] = await datastore.runQuery(query);

    // Prepares the new entity
    const employee = {
      key: employeeKey,
      data: {
        Username: newEmployee.name,
        Monday: newEmployee.schedule.monday,
        Tuesday: newEmployee.schedule.tuesday,
        Wednesday: newEmployee.schedule.wednesday,
        Thursday: newEmployee.schedule.thursday,
        Friday: newEmployee.schedule.friday,
        Saturday: newEmployee.schedule.saturday,
        Sunday: newEmployee.schedule.sunday
      }
    };

    // Saves the entity
    await datastore.save(employee);
  }
  createEmployeeShift();
  return res.status(200).send(
    "New Employee created")
});

router.put('/employee/:id', (req, res) => {
  const employeeId = Number(req.params.id);


  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();

  // The Cloud Datastore key for the new entity
  updateEmployee();
  async function updateEmployee() {
    const transaction = datastore.transaction();
    const employeeKey = datastore.key(['Employee', employeeId])

    const newEmployee = {
      name: req.body.name,
      schedule: {
        monday: req.body.schedule.monday,
        tuesday: req.body.schedule.tuesday,
        wednesday: req.body.schedule.wednesday,
        thursday: req.body.schedule.thursday,
        friday: req.body.schedule.friday,
        saturday: req.body.schedule.saturday,
        sunday: req.body.schedule.sunday,
      }
    }

    await transaction.run();
    const employee = await transaction.get(employeeKey);
    console.log(employee);
    transaction.save({
      key: employeeKey,
      data: {
        Username: newEmployee.name,
        Monday: newEmployee.schedule.monday,
        Tuesday: newEmployee.schedule.tuesday,
        Wednesday: newEmployee.schedule.wednesday,
        Thursday: newEmployee.schedule.thursday,
        Friday: newEmployee.schedule.friday,
        Saturday: newEmployee.schedule.saturday,
        Sunday: newEmployee.schedule.sunday
      }
    });

    await transaction.commit();
    console.log(`Employee id ${req.params.id} updated successfully.`);

  }


  // [END datastore_update_entity]
  return res.status(200).send("Updated");

});

//Algorithm API
router.put('/employeealgo/:id', (req, res) => {
  const employeeId = Number(req.params.id);


  // Imports the Google Cloud client library
  const { Datastore } = require('@google-cloud/datastore');

  // Creates a client
  const datastore = new Datastore();

  // The Cloud Datastore key for the new entity
  updateEmployee();
  async function updateEmployee() {
    const transaction = datastore.transaction();
    const employeeKey = datastore.key(['Employee_Algo', employeeId])

    const newEmployee = {
      name: req.body.name,
      schedule: {
        monday: req.body.schedule.monday,
        tuesday: req.body.schedule.tuesday,
        wednesday: req.body.schedule.wednesday,
        thursday: req.body.schedule.thursday,
        friday: req.body.schedule.friday,
        saturday: req.body.schedule.saturday,
        sunday: req.body.schedule.sunday,
      }
    }

    await transaction.run();
    const employee = await transaction.get(employeeKey);
    console.log(employee);
    transaction.save({
      key: employeeKey,
      data: {
        Username: newEmployee.name,
        Monday: newEmployee.schedule.monday,
        Tuesday: newEmployee.schedule.tuesday,
        Wednesday: newEmployee.schedule.wednesday,
        Thursday: newEmployee.schedule.thursday,
        Friday: newEmployee.schedule.friday,
        Saturday: newEmployee.schedule.saturday,
        Sunday: newEmployee.schedule.sunday
      }
    });

    await transaction.commit();
    console.log(`Employee id ${req.params.id} updated successfully.`);

  }


  // [END datastore_update_entity]
  return res.status(200).send("Updated");

});
/*
router.delete('/employee/:id', (req, res) => {
  const employeeId = Number(req.params.id);
  // [START datastore_delete_entity]
  const { Datastore } = require('@google-cloud/datastore');

  const datastore = new Datastore();
  console.log(employeeId);
  deleteEmployee();
  async function deleteEmployee() {
    const employeeKey = datastore.key(['Employee', employeeId]);
    console.log(employeeKey);
    await datastore.delete(employeeKey);
    console.log(`Employee ${employeeId} deleted successfully.`);
  }

  // [END datastore_update_entity]
  return res.status(200).send("Deleted....");
});
*/
module.exports = router