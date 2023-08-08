function solveSimpleEquations(a, b, c) {
    for (let x = 1; x <= 10000; x++) {
      for (let y = 1; y <= 10000; y++) {
        for (let z = 1; z <= 10000; z++) {
          if (x + y + z === a && x * y * z === b && x^2 + y^2 + z^2 === c) {
            return [x, y, z];
          }
        }
      }
    }
  
    return "No solution.";
  }

solveSimpleEquations(1, 2, 3)  // no solution
solveSimpleEquations(6, 6, 14) // 1 2 3