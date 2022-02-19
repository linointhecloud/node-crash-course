const employee = {
  name: 'John',
  age: 30,
  salary: 5000
};

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employee = employee.find((employee) => employee.id === id) ?.name;

    if(employee) {
      resolve(employee);
    } else {
      reject(`Employee with id ${id} not found`);
    }
  });
};

const id = 1

getEmployee(id)
  .then((employee) => {
    console.log(`Employee with id ${id} is ${employee}`);
  })
  .catch((error) => {
    console.log(error);
  });
