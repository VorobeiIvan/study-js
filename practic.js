// function removeFirstTwo(list) {
//   return list;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// const [a, b, ...arr] = sourceWithoutFirstTwo;
// console.log(arr);
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Змініть код лише під цим рядком
  const { success, failure, skipped } = result;
  const failureItems = [];
  for (let i = 0; i < failure.length; i++) {
    failureItems.push(`<li class="text-warning">${failure[i]}</li>`);
  }
  // Змініть код лише над цим рядком

  return console.log(failureItems);
}

const failuresList = makeList(result.failure);
