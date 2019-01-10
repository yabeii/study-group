/**
 * Given this subway line
 * 
 * Central: 
 * 
 * Shepard's Bush <- 4 min -> Notting Hill Gate <- 6 min -> Bond Street <- 3 min -> Oxford Circus
 * 
 * 1. Create objects that represent the stations (Shepard's Bush, Notting Hill Gate, etc.)
 * 2. Create an object that represent the entire Central line
 * 3. Create a train object that can be at a station and only move appropriately between stations (no skipping stations)
 * 
 */

/**
 * Create a route time calculator that given an array of destinations in order
 * it will return you the amount of minutes that this trip will take.
 * 
 * Try to create a solution that takes O(n) time where n is the number of stations
 * 
 * ex.
 * calculate(["Shepard's Bush", "Oxford Circus", "Notting Hill Gate"]) => 21
 * 
 * Shepard's Bush -> Oxford Circus takes 13 min
 * Oxford Circus to Notting Hill Gate takes 9 min
 * Total Time: 21 min
 */