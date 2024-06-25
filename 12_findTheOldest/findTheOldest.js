function getAge(person) {
    let death = person.yearOfDeath;
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - person.yearOfBirth;
};

const findTheOldest = function(people) {
    return people.reduce((oldest, cur) => {
        return getAge(oldest) > getAge(cur) ? oldest : cur;
    });
};
// Do not edit below this line
module.exports = findTheOldest;
