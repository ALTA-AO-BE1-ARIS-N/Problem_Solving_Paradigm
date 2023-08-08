// Buat sebuah array untuk menyimpan biaya minimum pada setiap batu
// Biaya untuk mencapai Batu 2 dari Batu 1
// Biaya minimum untuk mencapai Batu i

function frog(stones) {
    const n = stones.length;
    if (n === 2) return Math.abs(stones[0] - stones[1]);
    const dp = new Array(n).fill(0);
    dp[1] = Math.abs(stones[1] - stones[0]);
    for (let i = 2; i < n; i++) {
      dp[i] = Math.min(
        dp[i - 1] + Math.abs(stones[i] - stones[i - 1]),
        dp[i - 2] + Math.abs(stones[i] - stones[i - 2])
      );
    }
  
    return dp[n - 1];
  }

console.log(frog([10, 30, 40, 20])) // 30
console.log(frog([30, 10, 60, 10, 60, 50])) // 40
