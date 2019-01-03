/**
 * Problem 1: calculate all these expenses to give us your end balance
 * 
 * Create a function that can take in an array of transactions and returns the balance
 * 
 * Positive numbers are deposits while negative numbers are expenses
 * 
 */

let transactions = [
  100,
  -123,
  3000,
  -300,
  -50,
  -57.5,
  -.12,
  -1700
];


// Write this function using a loop


// Write this function using recursion



/**
 * 
 *  GPA REFERENCE GUIDE
 * 
 *  A+ = 4
 *  A = 4
 *  A- = 3.7
 *  B+ = 3.3
 *  B = 3
 *  B- = 2.7
 *  C+ = 2.3
 *  C = 2
 *  C- = 1.7
 *  D+ = 1.3
 *  D = 1
 *  D- = 0.7
 *  F = 0
 * 
 *  */


/**
 * Problem 2: Create a function that gives returns an array of student objects with their gpa
 * 
 * Example (this example is not current in calculation):
 * -> computeGPA(students) => 
 *    [ 
 *       { name: 'Phillip', gpa: 3.2 }, 
 *       { name: 'Tram', gpa: 3.5 }, 
 *       { name: 'Kevin', gpa: 3.2 } 
 *    ]
 * 
 * Guiding questions: 
 *    Is the nature of this problem more repetition or complexity? 
 *    How would you solve that problem? What programming tool?
 * 
 * USE THE GPA REFERENCE GUIDE ABOVE FOR CALCULATING LETTER GRADE
 * 
 *  */ 



let students = [
  {
    name: 'Phillip',
    grades: [
      'A+',
      'B+',
      'B-',
      'D+'
    ]
  },
  {
    name: 'Tram',
    grades: [
      'A',
      'B',
      'B',
      'C+'
    ]
  },
  {
    name: 'Kevin',
    grades: [
      'A-',
      'B-',
      'B-',
      'B'
    ]
  }
];


/**
 * Problem 3: Take in the same student array and create a gpa average object with an array of students
 * 
 * Example:
 * computerGPAaverage(students) => 
 *    {
 *      students: [ 'Phillip', 'Tram', 'Kevin' ],
 *      avg: 3.7
 *    }
 * 
 * You may use your previous function in problem 2 to assist with your answer
 */

/**
 * Stretch goal: Solve problem 2 and 3 using recursion instead of a loop
 * Please attempt this
 */