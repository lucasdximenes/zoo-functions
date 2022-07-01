# Welcome to the Zoo Functions project repository!

Here you will find a functions project that aims to create a zoo system.

<details>
<summary><strong>🧑‍💻 What was developed</strong></summary><br />

With `ES6` skills, `Higher Order Functions` and tests, the city hall has given you an important mission: organize the zoo's information! 🐘

I was responsible for developing functions that seek information about zoo animals such as: species and place of origin. In addition, I also looked for data on the people who collaborate with the maintenance and care of the zoo. 🧑‍🌾

The sequence of requirements for this project has been arranged in such a way as to provide the experience of understanding in practice how test-driven development helps ensure quality code. For this, tests were implemented for existing functions, realizing the use cases of your application and ensuring that it is working correctly! 🚀

<br />

</details>

# Guidelines

<details>
<summary><strong>‼ Before you start developing</strong></summary><br />

1. Clone the repository

   - Use the command: `git clone git@github.com:lucasdximenes/zoo-functions.git`

- Enter the repository folder you just cloned:

  - `cd zoo-functions`

2. Install dependencies

   - For this, use the following command: `npm install`

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

To run them locally in the project, run the commands below:

```bash
npm run lint
```

</details>

<details>
<summary><strong>🛠 Tests</strong></summary><br />

To have the tests run locally, make sure the node version on your machine is `16`:

```bash
node -v
```

If the version is different, you can use `nvm` to change the version with the following command:

```bash
nvm use 16
```

All project requirements will be tested **automatically** through `Jest`.
To test all functions in the terminal, just run the command below:

```bash
npm test
```

If you want to test only one function, run the command below:

```bash
npm test filename
```

For example:

```bash
npm test getSpeciesByIds
```

## Test Coverage

In this project you will need to implement tests for two functions already created: `handlerElephants` and `getOpeningHours`.

This coverage assesses the effectiveness of tests implemented according to requirements, determining whether they cover what was ordered or not.

⚠️ **Only the two requested functions will be tested and not the entire application!**

As you test the project, the percentage of total coverage will increase. For each test requirement, a percentage of coverage will be assessed.

To run and monitor the implementation of your test coverage, run the command below:

```bash
npm run test:coverage
```

When running the command you will get a result similar to this:

![Test Coverage](img/coverage.png)

In this project we will focus on covering _statements_ (ie the JavaScript statements). The percentage of coverage of the functions instructions will be evaluated, as highlighted in the figure below:

![Instruction Coverage](img/coverage_stmts.png)

In addition, the table will also show which rows are not yet covered by tests. That is, when there is no test case that executes that instruction.

Check with `npm test` that all test coverage items are passing correctly.

⚠️ **Attention**: beware of possible false positives!

When running the test coverage command, a `coverage` folder will be created, with an `index.html` file. This file presents a report of the coverage analysis. In this report it is possible to see which lines are **not** being covered by the tests.

⚠️ **Auto-evaluator does not necessarily evaluate your project in the order that the requirements appear in the readme. This is to make the evaluation process faster. So don't be scared if that happens, ok?**

</details>

<details>
<summary><strong>🏗 Project Structure</strong></summary><br />

In the root folder of the project, we have the folders `src`, `test`, `evaluator` and `data`.

The `src` folder is made up of files referring to each of the functions you will implement, the `data` folder contains the `zoo_data.js` file, which stores the data you will use to return information about the zoo.

This project also has some requirements for the implementation of tests. The `test` folder contains the files in which you will implement the unit tests corresponding to each function, the filename is the name of the target function plus the suffix `.test.js`.

**For example:** the `src/getOpeningHours.js` file will contain the implementation of the `getOpeningHours` function and the `test/getOpeningHours.test.js` file should contain the tests that you will develop related to it.

The `evaluator` folder contains the automated tests that will evaluate the your project; the contents of this folder must not be changed.

<details>
  <summary>
    The <code>zoo_data.js</code> file contains an <strong>object</strong> in the following format:
  </summary> <br />

```javascript
{
species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        }
      ],
    }
  ],
  employees: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, helloId],
      responsibleFor: [lionId, tigersId],
    }
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
}
```

<details>
  <summary>
  The <code>species</code> array holds information for each zoo species
  </summary> <br />

| Key            | Description                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`           | is the species identifier                                                                                                                                                                                                                                          |
| `name`         | is the species name, eg `lions`                                                                                                                                                                                                                                    |
| `popularity`   | is the popularity of that species                                                                                                                                                                                                                                  |
| `location`     | is the region where the animal species came from, it can have the following values: <br> - `NE`: northeast; <br> - `NW`: northwest; <br> - `SE`: southeast; <br> - `SW`: southwest.                                                                                |
| `availability` | is the availability of visitation of the animals of this species                                                                                                                                                                                                   |
| `residents`    | is the information of the animals of that species that reside in the zoo, where: <br> - `name`: is the name of the animal, for example `'Zena'`; <br> - `sex`: is the sex of the animal, for example: `'female'` (female); <br> - `age`: is the age of the animal. |

</details>

<details>
  <summary>
  The <code>employees</code> array is where the information for each collaborating person is
  </summary> <br />

| Key              | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `id`             | is this person's identifier                                 |
| `firstName`      | is that person's first name                                 |
| `lastName`       | is that person's last name                                  |
| `managers`       | are the `ids` of that person's leadership                   |
| `responsibleFor` | are the `ids` of the species this person is responsible for |

</details>

<details>
  <summary>
  The <code>hours</code> object stores information about the zoo's opening hours
  </summary> <br />

| Key                                                                                            | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Tuesday`<br> `Wednesday`<br> `Thursday`<br> `Friday`<br> `Saturday`<br> `Sunday`<br> `Monday` | are the days of the week: <br> - `open`: is the time that the zoo opens; <br> - `close`: it is the time that the zoo closes. |

</details>

<details>
  <summary>
    The <code>prices</code> object is responsible for storing information about the zoo entry value
  </summary> <br />

| Key      | Description                  |
| -------- | ---------------------------- |
| `adult`  | is the price for adults      |
| `senior` | is the price for the elderly |
| `child`  | is the price for children    |

</details>

</details>

<br />

⚠️ **Only the files indicated in the requirements must be changed, otherwise the tests may be compromised.**

All files strictly necessary to finish the project are already created, **not** being necessary to create other files.

</details>

---

# Requirements

## 1. Implement the `getSpeciesByIds` function

<details>
  <summary>
  Fetch the species of animals through a <code>id</code> and return an array containing all animals of that species.
  </summary> <br />

- Make the `getSpeciesByIds` function receive several parameters;

- Return an empty array if the function does not receive an `id`;

- Return the following information from the `data` file:

  - If the function receives only one `id`, return the species of the animal referring to this `id`;

  - If the function receives several `ids`, return all species referring to these `ids`.

**What will be tested:**

- If no parameters are received, it is necessary to return an empty array;

- When receiving as a parameter a single `id`, returns an array with the species referring to this `id`;

- When receiving more than one `id`, returns an array with the species referring to the `ids`.

</details>

---

## 2. Implement the `getAnimalsOlderThan` function

<details>
  <summary>
  When receiving a species and an age as a parameter, return if all the animals of that species have this age or are older.
  </summary> <br />

- Check that all animals of the species passed as a parameter have the minimum age:

  - Animals must be this age or older.

- Return a boolean value.

**What will be tested:**

- When passing the name of a species and an age, it tests if all the animals of this species have the specified minimum age.

</details>

---

## 3. Implement the `getEmployeeByName` function

<details>
  <summary>
    Search for contributors by their first or last name
  </summary> <br />

- Return an empty object if the function does not receive parameters;

- Return the information of the collaborating person if the parameter is equal to the name **or** equal to the last name in the following format:

```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }
```

**What will be tested:**

- Without parameters, it must return an empty object;

- When the first name of the collaborating person is informed, the object of the collaborating person must be returned;

- When the last name of the collaborating person is informed, the object of the collaborating person must be returned;

</details>

---

## 4. Implement the `getRelatedEmployees` function

<details>
  <summary>
    Check if a collaborating person is a manager and which people they lead
  </summary> <br />

Considering the good practice of breaking the code into smaller parts, the file will have two functions:

1.  `isManager` which will be responsible for checking if a collaborating person is a manager:

    - Return `true` if the `id` passed is a manager person;
    - Return `false` if the `id` passed is not a manager person.

2.  `getRelatedEmployees` which returns the people led by the management: - Use the `isManager` function to check if the person is a manager or not and do the following checks:

          - If the person is a manager, return an array containing the first and last names of the collaborating people managed by this person.

          Output example:

          ```javascript

          [ 'Burl Bethea', 'Hello Orloff', 'Emery Elser' ];

          ```

          - If the person is not a manager, trigger an error with the message: **'The id entered is not a manager collaborating person!'**.

          To throw the error, you will use the **Error** constructor function from the JavaScript standard library.

          Example:

          ```javascript

          throw new Error('The id entered is not a collaborating person manager!');

          ```

          You can read more about the [**Error** constructor function, at this link.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

    **What will be tested:**

- Returns `true` if the `id` passed is a manager person;

- Returns `false` if the `id` passed is not a manager person;

- If the `id` passed is the manager person, returns an array containing the name and surname of the collaborating people he is responsible for;

- If the `id` passed is **not** the manager person, it triggers an error with the message: `'The id entered is not a manager collaborating person!'`.

</details>

---

## 5. Implement the `countAnimals` function

<details>
  <summary>
    Count the amount of animal species residing in the zoo
  </summary> <br />

The `countAnimals` function is responsible for counting the number of animals residing in the zoo.

- Return the number of resident animals per species, if the function does not receive a parameter. The return must be an object whose name of each species is the key and the total number of animals (residents) of that species is the value. For example:

```javascript
  {
    lions: 4,
    // [...]
  }
```

- Return the amount of animals residing in the zoo of the passed species by parameter. For example:

  - when receiving the argument `{ specie: 'penguins' }`, it returns only the amount (number) of penguins residing in the zoo;

  - passing the argument `{ specie: 'giraffes', sex: 'female' }`, returns only the amount (number) of female giraffes residing in the zoo.

**What will be tested:**

- Without parameters, returns all species and the number of residents of each one;

- Taking as a parameter an object with the key `specie`, it returns the number of animals of that species;

- Taking as a parameter an object with the key `specie` and `sex`, it returns the number of animals of that species, in the selected sex.

</details>

---

## 6. Get at least 80% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement tests of the <code>handlerElephants</code> function to get at least 80% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `count`        | returns the amount of elephants                                                     |
| `names`        | returns an array listing the names of all elephants                                 |
| `averageAge`   | returns the average age of elephants                                                |
| `location`     | returns the location of elephants inside the Zoo                                    |
| `popularity`   | the popularity of elephants returns                                                 |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

> **Looking at the tip 👀:** Before starting to write the tests, read the `handlerElephants` function and try to understand it line by line

- Implement the tests in the files in the `test` folder that is at the root of the project;

- The `handlerElephants` function is already implemented, it is only necessary to create the tests;

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

**Cover will only check the highlighted features and not the entire application!**

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 80%

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

</details>

</details>

---

## 7. Get at least 90% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement tests of the <code>handlerElephants</code> function to get at least 90% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `count`        | returns the amount of elephants                                                     |
| `names`        | returns an array listing the names of all elephants                                 |
| `averageAge`   | returns the average age of elephants                                                |
| `location`     | returns the location of elephants inside the Zoo                                    |
| `popularity`   | the popularity of elephants returns                                                 |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are suggestions only, feel free to test whatever you feel is necessary as long as the feature coverage reaches at least 90%.

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

- For the `location` argument it must return the string `NW`;

- The `popularity` argument must return a number equal to or greater than 5;

- For the `availability` argument it must return an array of days of the week that does not contain `Monday`;

- Not passing arguments the function must return `undefined`;

</details>

</details>

---

## 8. Implement the `calculateEntry` function

<details>
  <summary>
    Calculate the <strong>total</strong> value of the zoo's visitor entry
  </summary> <br />

The value of zoo tickets is calculated from the age group, where:

- `child`: are people **under** 18 years old;

- `adult`: people aged **greater than or equal** to 18 years old **and less** than 50 years old;

- `senior`: are people aged **greater than or equal to** 50 years old.

Considering the good practice of breaking the code into smaller parts, the file will have two functions, called `countEntrants` and `calculateEntry`.

Both functions receive an array in the following format:

```javascript
const entrants = [
  { name: "Lara Carvalho", age: 5 },
  { name: "Frederico Moreira", age: 5 },
  { name: "Pedro Henrique Carvalho", age: 5 },
  { name: "Maria Costa", age: 18 },
  { name: "Núbia Souza", age: 18 },
  { name: "Carlos Nogueira", age: 50 },
];
```

1. `countEntrants` will be responsible for calculating the number of visitors by age group:

It takes an array and should return an **object**. For that:

- Perform the sum of the number of visitors by age group;

- Return an object in a format like this: `{ child: 3, adult: 2, senior: 1 }`.

2. `calculateEntry` will be responsible for summing the entry value of people in the zoo:

It takes an array and should return the **total** sum of the ticket values. For that:

- Return `0` if no parameter is passed or is an empty array;

- Use the `countEntrants` function to have the total number of people per age group;

- Perform the sum of the ticket values ​​by age group. Your return should look something like this: `187.94`.

> **Keep an eye on the tip 👀:** The amount to be charged for the age range is also included in the data file.

**Example using the `calculateEntry` function:**

```javascript
calculateEntry(entrants);
```

**Exit:**

```javascript
187.94;
```

**What will be tested:**

In the `countEntrants` function:

- When receiving an array of visitors, returns an object with the count.

In the `calculateEntry` function:

- Returns 0 if no arguments are passed;

- Returns 0 if an empty object is passed;

- When receiving an array of people with 3 children, 2 adults and 1 older person, it returns the correct value;

- When receiving an array with 1 adult person returns the correct value;

- When receiving an array with 1 older person returns the correct value;

- When receiving an array with 1 child returns the correct value;

- When receiving an array with 1 child and 1 older person returns the correct value.

</details>

---

## 9. Implement the `getSchedule` function

<details>
  <summary>
    Create a schedule with available visiting times for each animal species
  </summary> <br />

Animal schedule information should be made available in a query to people visiting the zoo, who may want access to the schedule for a week, a day or a specific animal.

- Return an array with the days of the week when an animal is available for visitation if the function parameter is an animal. For example: `[ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ]`;

- Return all available times for each day of the week if the function:

  - do not receive parameter;

  - the parameter passed to the function is not an animal or a day;

  For that:

  - Create an object and add every day of the week as a key;

  - The values ​​of each day of the week must be an object, having the keys `officeHour` and `exhibition`:

    - `officeHour` must contain the text with the time that the zoo opens and closes on that day of the week;

    - `exhibition` must have an array with the name of all the animals available for visitation on that day of the week.

<details>
  <summary>
    The return should look like this:
  </summary> <br />

```javascript
{
  Tuesday: { // Day of the week
    officeHour: 'Open from 8am until 6pm', // n
    exhibition: [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [ 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes' ],
  },
  // [...]
}
```

</details>

- Return the animals available on the day, if the function parameter is only one day of the week;

> **Keep an eye on the tip 👀:** Break the problem down into smaller roles so it's easier to manage the responsibility of each one.

**What will be tested:**

- If the name of an animal is passed, it must return an array with the days it will be on display;

- Without parameters, returns the times for each day and which animals will be available;

- With parameters that are neither an animal nor a day, returns the times for each day and which animals will be available;

- If a single day is passed, returns the times for that day and which animals will be available.

</details>

---

## 10. Implement the `getOldestFromFirstSpecies` function

<details>
  <summary>
    Find the oldest animal of a species that is managed by a collaborating person
  </summary> <br />

The function receives an `id` parameter referring to the collaborating person and from that `id`:

- Find the collaborating person who has the `id` passed by parameter;

- Find the **first** animal species that the collaborating person is responsible for;

- Find the oldest animal of that species;

- Return an array with the information of the oldest animal of that species.

**What will be tested:**

- Passing the id of a collaborating person, it finds the first species of animal managed by that person, and returns an array with the name, sex and age of the oldest animal of that species.

</details>

---

## 11. Implement the `getEmployeesCoverage` function

<details>
  <summary>
    Search for information about the collaborating person and which species they are responsible for
  </summary> <br />

The function will receive an object as a parameter that will determine its behavior, being:

- `name`: the first name **or** of the person to be searched;

- `id`: the id of the person to be searched for.

And it should return an object in the following format:

```javascript
{
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // person id
fullName: "Sharonda Spry", // full name: firstName + lastName
species: [ "otters", "frogs" ], // species the person is responsible for
locations: [ "SE", "SW" ], // An array containing all species locations
}
```

For that:

- Return the corresponding person information when receiving an object with the `name` property:

  - the `name` property can have the first or last name of the contributing person as a value, so make sure your code works both ways.

- Return the information of the corresponding person when receiving an object with the `id` property;

- Return an array with the information of **all** the collaborating people if the function does not receive a parameter;

- Throw an error if the `id` is invalid.

**Examples of using the `getEmployeesCoverage` function:**

  <details>
    <summary>
      If the parameter is an object with name and id, return the information of the collaborating person
    </summary> <br />

**PROHIBITED:**

```javascript
getEmployeesCoverage({ name: "Sharonda" }); // name takes the first name as a parameter or
getEmployeesCoverage({ name: "Spry" }); // name takes the last name as a parameter or
getEmployeesCoverage({ id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad" }); // receive an id as a parameter
```

**EXIT:**

```json
{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": ["otters", "frogs"],
  "locations": ["SE", "SW"]
}
```

</details>

  <details>
    <summary>
      If the function does not receive parameters, return an array with the information of <strong>all</strong> the collaborating people
    </summary> <br />

**PROHIBITED:**

```javascript
getEmployeesCoverage();
```

**EXIT:**

```javascript
[
  {
    id: "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
    fullName: "Nigel Nelson",
    species: ["lions", "tigers"],
    locations: ["NE", "NW"],
  },
  {
    id: "0e7b460e-acf4-4e17-bcb3-ee472265db83",
    fullName: "Burl Bethea",
    species: ["lions", "tigers", "bears", "penguins"],
    locations: ["NE", "NW", "NW", "SE"],
  },
  {
    id: "fdb2543b-5662-46a7-badc-93d960fdc0a8",
    fullName: "Hello Orloff",
    species: ["otters", "frogs", "snakes", "elephants"],
    locations: ["SE", "SW", "SW", "NW"],
  },
  // [...]
];
```

</details>

<details>
  <summary>
    If no person is found with first name, last name or id, throw an error
  </summary> <br />

If no person is found with the first name, last name or id, an error generated with the **Error** constructor function of the JavaScript standard library should be thrown with the message **"Invalid information"**. Example:

```javascript
throw new Error("Invalid information");
```

You can read more about the [**Error** constructor function, at this link.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

</details>

<br />

> **Keep an eye on the tip 👀:** Create functions that break tasks into smaller parts. For example, you can create a `getSpecies` function in charge only of fetching the name of the species that the person is responsible for.

**What will be tested:**

- If the options object has the `name` property, it returns only the corresponding person;

- The name property of the options object also works using the second name;

- If the options object has the `id` property, it returns only the corresponding person;

- Without parameters, returns a list with the coverage of all collaborating people;

- If there is no person with the specified `name` or `id`, an `error` will be thrown.

</details>

---

## 12. Get at least 85% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get at least 85% coverage
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

> **Looking at the tip 👀:** Before starting to write the tests, read the `getOpeningHours` function and try to understand it line by line.

- Implement the tests in the files in the `test` folder that is at the root of the project;

- The `getOpeningHours` function is already implemented, it is only necessary to create the tests;

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive;

**Cover will only check the highlighted features and not the entire application!**

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 85%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` you must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

</details>

</details>

---

## 13. Get at least 95% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get 95% coverage
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you think is necessary as long as the feature coverage reaches at least 95%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` you must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

- For the arguments `Thu` and `09:00-AM` should throw an exception with the message: `'The day must be valid. Example: Monday'`

- For the arguments `Friday` and `09:00-ZM` you should throw an exception with the message: `'The abbreviation must be \'AM\' or \'PM\''`;

- For the `Saturday` and `C9:00-AM` arguments should throw an exception with the message gem: `'The hour should represent a number'`;

- For the `Sunday` and `09:c0-AM` arguments you should throw an exception with the message: `'The minutes should represent a number'`;

</details>

</details>

---

## 14. Implement the `getAnimalMap` function

<details>
  <summary>
    Make the geographic mapping of the animals of each species and perform location filters, alphabetical name and sex.
  </summary> <br />

The `getAnimalMap` function is responsible for categorizing animals by location, in addition to filtering them by region, name and sex from a parameter. The structure of the function return is based on the species location:

```javascript
  {
    NE: [ /* data here */],
    NW: [/* data here */],
    SE: [/* data here */],
    SW: [/* data here */],
  }
```

The function parameters can be:

   <details>
     <summary>
      <code>includeNames: true</code>, which returns the names of animals in the following format:
     </summary> <br />

```javascript
  HUH: [
    { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
    { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
  ],
  // [...]
```

   </details>

<details>
  <summary>
    <code>sorted: true</code> which returns the names of animals in alphabetical order in the following format:
  </summary> <br />

```javascript
HUH: [
  { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
  { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
],
// [...]
```

</details>

<details>
  <summary>
    <code>sex: male</code> or <code>sex: female</code> returns the <strong>name</strong> of animals that are male or female in the following format:
  </summary><br />

```javascript
  HUH: [
    { lions: ['Zena', 'Dee'] },
    { giraffes: ['Gracia', 'Vicky'] },
  ],
  // [...]
```

⚠️ **Warning:** If the parameter is `{ sex: male }`, return only the name of male animals and if the parameter is `{ sex: female }`, return only the name of female animals.

</details>

<details>
  <summary>
  If the function does not receive a parameter, the animal species must be categorized by location and must return an object in the following format:
  </summary> <br />

```javascript
{
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
}
```

</details>

For that:

- Return the species of all animals categorized by location if the function:

  - do not receive parameter;

  - do not receive the `{includesName: true}` parameter and only receive the `{sex: female}` parameter;

  - do not receive the `{includesName: true}` parameter and only receive the `{sex: female, sorted: true}` parameter.

- Return the species and the name of the animals if the function only receives the parameter `{includesName: true}`;

- Return the species and the name of the animals in alphabetical order if the function receives the parameter `{includesName: true, sorted: true}`;

- Return the species and name of animals filtered by sex:

  - Return the species and the name of the female animals, if the function parameter is `{includesName: true, sex: female}`;

  - Return the species and the name of the male animals, if the function parameter is `{includesName: true, sex: male}`;

- Return the species and the name of the animals filtered by sex and alphabetical order:

  - Return the species and the name of the female animals in alphabetical order, if the function parameter is `{includesName: true, sex: female, sorted: true}`;

  - Return the species and name of male animals in alphabetical order, if the function parameter is `{includesName: true, sex: male, sorted: true}`;

> **Keep an eye on the tip 👀:** You don't need to differentiate the sex filters between `female` or `male`, just by `sex`.

**What will be tested:**

- No parameters, returns animals categorized by location;

- Without `includeNames` option specified, returns animals categorized by location;

- With the `includeNames: true` option specified, returns animal names;

- With `sorted: true` option specified, returns sorted animal names;

- With `sex: 'female'` or `sex: 'male'` specified, returns only male/female animal names;

- With the `sex: 'female'` or `sex: 'male'` option specified and the `sorted: true` option specified, return only male/female animal names with the animal names sorted;

</details>

## 15. Get 100% test coverage in the `handlerElephants` function

<details>
  <summary>
    Implement <code>handlerElephants</code> function tests to get 100% coverage
  </summary> <br />

This function returns information regarding the elephants as the argument passed:

| Argument       | Information                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `count`        | returns the amount of elephants                                                     |
| `names`        | returns an array listing the names of all                                           |
| elephants      |
| `averageAge`   | returns the average age of elephants                                                |
| `location`     | returns the location of elephants inside the Zoo                                    |
| `popularity`   | the popularity of elephants returns                                                 |
| `availability` | returns an array with the number of days when it is possible to visit the elephants |

- The function is case sensitive;

- Use the `npm test handlerElephants` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

<details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test whatever you feel is necessary as long as the function coverage reaches 100%.

- For the `count` argument must return the integer `4`;

- For the `names` argument it must return an array of names which has the name `Jefferson`;

- For the `averageAge` argument it should return a number close to `10.5`;

- For the `location` argument it must return the string `NW`;

- The `popularity` argument must return a number equal to or greater than 5;

- For the `availability` argument it must return an array of days of the week that does not contain `Monday`;

- Not passing arguments the function must return `undefined`;

- Passing an empty object as an argument (`{}`) must return the string `'Invalid parameter, a string is required'`;

- Passed a string that does not include a functionality, it must return `null`.

</details>
</details>

---

## 16. Get at least 100% test coverage in the `getOpeningHours` function

<details>
  <summary>
    Implement <code>getOpeningHours</code> function tests to get 100% coverage
  </summary> <br />

This function takes as arguments a day of the week and a time, and returns a message informing whether the zoo is open or not at that date and time.

- Use the `npm test getOpeningHours` command to check if your tests are passing;

- Use the `npm run test:coverage` command to test coverage;

- The name of the day of the week passed as an argument must be in English;

- The time must have the following formatting `'XX:XX-XM'`;

- The hours will be validated in the `'AM'` and `'PM'` nomenclature;

- The function is not case sensitive.

⚠️ **Warning:** do not change the structure already implemented in the test files, just add the tests inside the `describe` block.

  <details>
  <summary>
    💡 <strong>Tips of what you can try:</strong>
  </summary> <br />

⚠️ **Warning:** The topics below are just suggestions, feel free to test what you think is necessary as long as the function coverage reaches at least 100%.

- Test not passing arguments. It should return the object:

```javascript
{
Tuesday: { open: 8, close: 6 },
Wednesday: { open: 8, close: 6 },
Thursday: { open: 10, close: 8 },
Friday: { open: 10, close: 8 },
Saturday: { open: 8, close: 10 },
Sunday: { open: 8, close: 8 },
Monday: { open: 0, close: 0 },
}
```

- For the arguments `Monday` and `09:00-AM` you must return the string `'The zoo is closed'` (Since the Zoo is always closed on Monday);

- For the arguments `Tuesday` and `09:00-AM` must return the string `'The zoo is open'`;

- For the arguments `Wednesday` and `09:00-PM` must return the string `'The zoo is closed'`;

- For the arguments `Thu` and `09:00-AM` should throw an exception with the message: `'The day must be valid. Example: Monday'`

- For the arguments `Friday` and `09:00-ZM` you should throw an exception with the message: `'The abbreviation must be \'AM\' or \'PM\''`;

- For the arguments `Saturday` and `C9:00-AM` should throw an exception with the message: `'The hour should represent a number'`;

- For the `Sunday` and `09:c0-AM` arguments you should throw an exception with the message: `'The minutes should represent a number'`;

- For the `Monday` and `13:00-AM` arguments should throw an exception with the message: `'The hour must be between 0 and 12'`;

- For the `Tuesday` and `09:60-AM` arguments you should throw an exception with the message: `'The minutes must be between 0 and 59'`.

</details>

</details>
