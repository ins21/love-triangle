/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let sum = 0;
  let s1, s2, s3;

  for (let i = 0; i < preferences.length; i++) {
    s1 = preferences[i];
    s2 = preferences[s1 - 1];
    s3 = preferences[s2 - 1];
    if (i + 1 === s3) sum++;
  }

  return Math.trunc(sum / 3);
};
