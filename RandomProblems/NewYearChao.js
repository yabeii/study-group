// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumBribes(q) {
  let len = q.length;
  let operations = 0;
  let tooChaotic = false;

  for (let index = len - 1; index >= 0; index--) {
      let aI = q[index];
      let i = index + 1;    // 1 <= i <= n

      if (aI !== i) {
        if (i !== q[index - 1] && i !== q[index - 2]) {
          tooChaotic = true;
          break;
        } else if (i === q[index - 1]) {
          operations++;
          [q[index], q[index - 1]] = [q[index - 1], q[index]];
        } else {    // i === 2 bribes away
          operations += 2;
          q[index - 2] = q[index - 1];  // move Ai-1 to Ai-2
          q[index - 1] = q[index];      // move Ai to Ai-1
          q[index] = i;                 // set current place to be what it should really be

        }
      }

  }

  if (tooChaotic) {
      console.log("Too chaotic");
  } else {
      console.log(operations);
  }

}