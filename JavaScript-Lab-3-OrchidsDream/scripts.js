let submissions = [
  {
    name: "Jane",
    score: 95,
    date: 2020 - 01 - 24,
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: 2018 - 05 - 14,
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: 2019 - 07 - 05,
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: 2020 - 04 - 22,
    passed: true,
  },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: true,
  };
  if (newSubmission.score >= 60) {
    newSubmission.passed = true;
  } else {
    newSubmission.passed = false;
  }
  array.push(newSubmission);
}

addSubmission (submissions, "Derek", 85, "2022-02-23");
addSubmission (submissions, "Donovan", 92, "2022-02-23");

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
  console.log(submissions);
}

function deleteSubmissionByName(array, name) {
  let findIndex = array.findIndex(function (student) {
    return student.name === name;
  });
  array.splice(findIndex, 1);
  console.log(submissions);
}
deleteSubmissionByName(submissions, "Jill");

function editSubmission(array, index, score) {
  array[index].score = score;
  if (score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
  console.log(submissions);
}
editSubmission(submissions, 3, 15);

function findSubmissionByName (array, name) {
    let findName = array.find(function(student){
        return student.name === name;
    })
    console.log(findName)
}
findSubmissionByName (submissions, "Joe")

function findLowestScore (array) {
    let lowestScore = 100;
    array.forEach(function (student){
        if (student.score < lowestScore) {
            lowestScore = student.score;
        }
            
    })
    return(lowestScore);
}
console.log(findLowestScore(submissions));

function findAverageScore (array) {
    let averageScore = 0;
    for (let student of array) {
        let currentNum = student.score;
        averageScore += currentNum;
    }
    averageScore = averageScore / array.length;
    return averageScore;
}
console.log(findAverageScore(submissions))

function filterPassing(array) {
    const passingGrade = array.filter(function (people) {
        return people.score >= 60;
    });
    console.log(passingGrade);
}

filterPassing(submissions);

function filter90AndAbove(array) {
    const passingGrade = array.filter(function (people) {
        return people.score >= 90;
    });
    console.log(passingGrade);
}
filter90AndAbove(submissions);
