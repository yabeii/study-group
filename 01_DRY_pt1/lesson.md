# DRY Principle & Fundamentals

Vocab: ***DRY***: Do-Not-Repeat-Yourself.

Traditionally programming is thought of as a vast collection of ideas and thus hard to reduce to a single idea. However, we're going to focus on the motivation of programming rather than what it exactly is. In that case, we can reduce programming to a single idea: ***make your life easier***.

Perhaps the closest thing that encapsulates that in idea in a programming principle is ***DRY***. Let's take a dive into the two main problems programming solve. 

The first is it solves the problem of repetitive calculation. Imagine back to a time when all accounting had to be done by hand, the challenge of this was that there was always an element of human error, rather than that the calculations themselves were difficult. This means that this process was ***(1) error-prone***. Computers are great at this because they are completely mechanical in nature, they do not deviate from the process they were given thus not error-prone (at least in the way we would traditionally think).

The second problem it solves is the problem of complex computation. Imagine calculating the space launch to the moon. There are many, many calculations that have to be done, many of which rely on different formulas and constants (special reserved numbers). Traditionally, this meant people would have to have some sort of reference manual to keep all important calculations together before doing other calculations by hand. We can see then that the nature of the problem is simply the ***(2) sheer complexity***. This means that in order to solve the problem you have to deal with organizing the large problem into smaller solvable problems. 

| Type                         | Repetition                                                   | Complex                                                    |
| ---------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **Main Issue**               | error-prone                                                  | sheer magnitude of complexity                              |
| **Computer Solution Method** | use a loop or recursion                                      | use helper functions                                       |
| **Abstract**                 | make your process more reliable such that you can eliminate the element of error (human error) | break down complex problems into testable smaller problems |

## Finishing Questions

* How does using a loop or recursion solve the error-prone nature of repetitive problems?
* Why are complex problems best solved by using helper functions?
* Can a problem be both complex and repetitive in regards to solving it?
* Are these definitions absolute or relative? Does a problem have to be 100% repetition-based or complex-based?