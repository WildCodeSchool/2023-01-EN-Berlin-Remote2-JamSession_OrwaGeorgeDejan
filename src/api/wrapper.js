/**
 * This adds a method called "random" to arrays in Javascript which
 * will choose a random elemnt fro the array and return it.
 */
// eslint-disable-next-line no-extend-native
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * A function we made that gives back a random name for either a cat
 * or a dog, cutest names are better.
 *
 * returns {string} : the cute dog/cat name
 */
export function getRandomName() {
  const names = [
    "Luna",
    "Charlie",
    "Lucy",
    "Cooper",
    "Daisy",
    "Milo",
    "Zoe",
    "Rocky",
    "Ashley",
    "Dylan",
    "Paws",
    "Blake",
    "Emerson",
    "Riley",
    "Blaze",
    "Evan",
    "Ryan",
    "Boots",
    "Jordan",
    "Sam",
  ];

  return names.random();
}

/**
 * A function that gives back a random number
 * @param {number} low  : the lower bound on the random number
 * @param {number} high : the higher bound on the random number
 */
function randomNumberBetween(low, high) {
  return Math.trunc(Math.random() * (high - low + 1) + low);
}

/**
 * Currently this function will give the URL of a cat placeholder using
 * random width and height to generate a different image (check kitten
 * holder API online)
 */
export function getRandomImageUrl() {
  const width = randomNumberBetween(200, 400),
        height = randomNumberBetween(200, 400);
  return `https://placekitten.com/${width}/${height}`;
}
