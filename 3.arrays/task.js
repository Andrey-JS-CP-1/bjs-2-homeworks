function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filterGender = users.filter(user => user.gender === gender);
  let mapAge = filterGender.map(user => user.age);
  if (!users.length) {
    return 0;
  } else if (!filterGender.length) {
    return 0;
  } else return mapAge.reduce((sumAge, ageValue) => sumAge + ageValue, 0) / mapAge.length;
}