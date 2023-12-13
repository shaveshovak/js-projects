// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
    categories: ["man", "physicist"]
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
    categories: ["man", "mathematician"]
  },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
    categories: ["woman", "physicist"]
  },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
    categories: ["woman", "physicist"]
  },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
    categories: ["woman", "physicist"]
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
    categories: ["woman", "inventor"]
  }
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler

const inventorsBornBetween1500And1600 = inventors.filter(inventor => {
  return inventor.year >= 1500 && inventor.year < 1600;
});

console.log(inventorsBornBetween1500And1600);

// Explanation: This code filters the inventors array to include only those who were born between 1500 and 1600. The resulting array will contain the inventors Galileo Galilei and Johannes Kepler.

// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton

const mathematicians = inventors.filter(inventor => {
  return inventor.categories && inventor.categories.includes("mathematician");
});

console.log(mathematicians);

// Explanation: This code filters the inventors array to include only those who have the "mathematician" category. The resulting array will contain only Isaac Newton.

// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein

const physicistMen = inventors.filter(inventor => {
  return (
    inventor.categories &&
    inventor.categories.includes("physicist") &&
    inventor.categories.includes("man")
  );
});

console.log(physicistMen);

// Explanation: This code filters the inventors array to include only those who have both the "physicist" and "man" categories. The resulting array will contain only Albert Einstein.

// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]

const inventorNames = inventors.map(inventor => {4
  return `${inventor.first} ${inventor.last}`;
});

console.log(inventorNames);

// Explanation: This code creates a new array (inventorNames) by mapping over the inventors array and combining the "first" and "last" names for each inventor. The resulting array will contain the full names of all the inventors.

// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]

const inventorEmails = inventors.map(inventor => {
  const firstNameLowercase = inventor.first.toLowerCase();
  const birthYear = inventor.year;
  return `${firstNameLowercase}${birthYear}@inventor.com`;
});

console.log(inventorEmails);

// Explanation: This code creates a new array (inventorEmails) by mapping over the inventors array and constructing email addresses based on the specified format. The resulting array will contain the email addresses for each inventor.

// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"

const sortedInventorsByBirthdate = inventors.sort((a, b) => a.year - b.year);

console.log(sortedInventorsByBirthdate);

// Explanation: This code sorts the inventors array in ascending order based on the birth year. The resulting array will contain the inventors ordered from the youngest to the oldest.

// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?

const totalYearsLived = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYearsLived);

// Explanation: This code uses the reduce method to iterate over the inventors array, accumulating the total years lived by each inventor. The result (totalYearsLived) will give you the combined total of all the years lived by the inventors.

// Array.prototype.sort()
// 8. Sort the inventors by years lived

const sortedInventorsByLifespan = inventors.sort((a, b) => {
  const lifespanA = a.passed - a.year;
  const lifespanB = b.passed - b.year;
  return lifespanB - lifespanA;
});

console.log(sortedInventorsByLifespan);

// Explanation: This code calculates the lifespan (years lived) for each inventor and then sorts the array in descending order based on the calculated lifespan. The resulting array will contain the inventors ordered from the longest to the shortest lifespan.

// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone"
];

const boulevardsWithDe = boulevardsInParis.filter(boulevard => boulevard.includes('de'));

console.log(boulevardsWithDe);

// Explanation: This code filters the boulevardsInParis array to include only those boulevards that contain the substring 'de'. The resulting array will contain the list of boulevards meeting this criteria.

// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank"
];

const sortedPeople = people.sort((a, b) => {
  const lastNameA = a.split(', ')[0];
  const lastNameB = b.split(', ')[0];
  return lastNameA.localeCompare(lastNameB);
});

console.log(sortedPeople);

// Explanation: This code splits each person's name into an array, extracts the last name, and then uses localeCompare to perform a case-sensitive alphabetical sort. The resulting array will contain the people sorted alphabetically by last name.

// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "skateboard"
];

const vehicleCounts = data.reduce((acc, vehicle) => {
  if (acc[vehicle]) {
    acc[vehicle]++;
  } else {
    acc[vehicle] = 1;
  }
  return acc;
}, {});

console.log(vehicleCounts);

// This code initializes an empty object (acc) and then iterates over the data array. For each vehicle, it increments the count in the object or adds a new entry if the vehicle is encountered for the first time. The resulting object (vehicleCounts) will show the count of each type of vehicle in the data array.

// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  { name: "Lily", year: 2009 },
  { name: "Leah", year: 2011 },
  { name: "Liv", year: 2000 },
  { name: "Lydia", year: 2015 }
];

const isAtLeastOnePerson18OrOlder = family.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});

console.log(isAtLeastOnePerson18OrOlder);

// This code uses the some method to iterate over the family array. It checks if the difference between the current year and each person's birth year is greater than or equal to 18. The result (isAtLeastOnePerson18OrOlder) will be true if at least one person is 18 years old or older, and false otherwise.

// Array.prototype.every
// 13. Do all names of the family members start with the letter L?

const allNamesStartWithL = family.every(person => {
  return person.name.charAt(0).toLowerCase() === 'l';
});

console.log(allNamesStartWithL);

// This code uses the every method to iterate over the family array and checks if the first character of each person's name (converted to lowercase) is 'l'. The result (allNamesStartWithL) will be true if all names start with 'L', and false otherwise.