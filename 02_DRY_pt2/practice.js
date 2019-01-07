/**
 * Problem 1: Filtering products
 * 
 * Build a function that if given the array of products I can search and filter based on a few options given
 * 
 * EX:
 * 
 * search(products, 'price', 'ascending') =>
 * 
 * [
 *  {
 *    name: 'plastic wayfarer',
 *    price: 30.99,
 *    sku: 1234323
 *  },
 *  
 *  {
 *    name: 'red wayfarer',
 *    price: 45.99,
 *    sku: 1234322
 *  },
 *  {
 *    name: 'green wayfarer',
 *    price: 50,
 *    sku: 1234321
 *  },
 *  {
 *    name: 'red aviator',
 *    price: 120.99,
 *    sku: 1234324
 *  }
 * ]
 * 
 * search(products, 'sku', 'ascending') =>
 * 
 * [
 *   {
 *     name: 'green wayfarer',
 *     price: 50,
 *     sku: 1234321
 *   },
 *   {
 *     name: 'red wayfarer',
 *     price: 45.99,
 *     sku: 1234322
 *   },
 *   {
 *     name: 'plastic wayfarer',
 *     price: 30.99,
 *     sku: 1234323
 *   },
 *   {
 *     name: 'red aviator',
 *     price: 120.99,
 *     sku: 1234324
 *   },
 * ]
 * 
 * search(products, 'name', 'ascending', 'wayfarer') => 
 * [
 *    {
 *      name: 'green wayfarer',
 *      price: 50,
 *      sku: 1234321
 *    },
 *    {
 *      name: 'plastic wayfarer',
 *      price: 30.99,
 *      sku: 1234323
 *    }
 *    {
 *      name: 'red wayfarer',
 *      price: 45.99,
 *      sku: 1234322
 *    }
 * ]
 * 
 * search(products, 'name', 'descending', 'red') => 
 * [
 *   {
 *     name: 'red wayfarer',
 *     price: 45.99,
 *     sku: 1234322
 *   },
 *   {
 *     name: 'red aviator',
 *     price: 120.99,
 *     sku: 1234324
 *   }
 * ]
 * 
 * 
 *    Your function should allow three options in the second parameter:
 *    - name, price, sku
 *    the third parameter should allow two options
 *    - ascending, descending (for 'name' this refers to alphabetical order)
 *    the fourth parameter is optional and is a keyword or number to filter by regarding the second parameter
 *    
 */

let products = [
  {
    name: 'green wayfarer',
    price: 50,
    sku: 1234321
  },
  {
    name: 'red wayfarer',
    price: 45.99,
    sku: 1234322
  },
  {
    name: 'plastic wayfarer',
    price: 30.99,
    sku: 1234323
  },
  {
    name: 'red aviator',
    price: 120.99,
    sku: 1234324
  },
]


/**
 * Guiding questions:
 *  - How can you use separation of concerns to approach a large problem like this?
 *  - How many functions should you expect to have roughly before you even begin solving this problem?
 */