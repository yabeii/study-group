// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps


function checkMagazine(magazine, note) {
  let magCount = {}; 
  let noteCount = {};

  note.forEach(word => {
    if (noteCount[word] === undefined) {
      noteCount[word] = 1;
    } else {
      noteCount[word] += 1;
    }
  });

  magazine.forEach(word => {
    if (magCount[word] === undefined) {
      magCount[word] = 1;
    } else {
      magCount[word] += 1;
    }
  });

  for (let key in noteCount) {

    if (magCount[key] === undefined || magCount[key] < noteCount[key]) {
      console.log("No");
      return;
    } 
  }

  console.log("Yes");
  
}

checkMagazine(
  ["apgo", "clm", "w", "lxkvg", "mwz", "elo", "bg", "elo", "lxkvg", "elo", "apgo", "apgo", "w", "elo", "bg"],
  ["elo", "lxkvg", "bg", "mwz", "clm", "w"]
);


// Big O time: O(n + m + n) which is O(2n + m) which is the same as O(n + m)
// n: number of words in notes
// m: number of words in magazine

// space complexity:
// O(n + m)
// obj will grow to size of n if possible



// c++ solution for using one dictionary
// time complexity: O(m + n) space complexity: O(m) no more double dictionary
// 
// bool ransom_note(vector<string> magazine, vector<string> ransom) {
//   unordered_map<string, int> words;
//   for (auto &it: magazine)
//       words[it]++;
//   for (auto &it: ransom) {
//       if (words[it]>0)
//           words[it]--;
//       else
//           return false;
//   }
//   return true;
// }