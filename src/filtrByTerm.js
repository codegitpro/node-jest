function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) {
    console.log("searchTerm cannot be empty");
    return false;
  }
  if (!inputArr.length) {
    console.log("inputArr cannot be empty");
    return false;
  }
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterByTerm;
