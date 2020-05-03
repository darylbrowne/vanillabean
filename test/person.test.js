// person.test.js
const Person = require('./js/person');
test('Person constructs with a first and last name', () => {
  let testPerson = new Person('John', 'Doe')
  expect(testPerson).toEqual({firstName: 'John', lastName: 'Doe'});
});
test('fullName returns Person instance full name', () => {
  let testPerson = new Person('John', 'Doe')
  expect(testPerson.fullName()).toBe('John Doe');
});
