// Urutkan diameter kepala naga secara ascending
// Urutkan tinggi ksatria secara ascending
// Variabel untuk indeks ksatria
// Cari ksatria dengan tinggi yang cukup untuk memenggal kepala naga saat ini
// Jika tidak ada ksatria yang cukup untuk memenggal kepala naga saat ini
// Tambahkan tinggi ksatria yang memenggal kepala naga
// Pindah ke ksatria berikutnya untuk kepala naga berikutnya

function dragonOfLoowater(dragonHeads, knightsHeights) {
    dragonHeads.sort((a, b) => a - b); 
    knightsHeights.sort((a, b) => a - b); 
  
    let totalHeight = 0;
    let j = 0; 

    for (let i = 0; i < dragonHeads.length; i++) {
      while (j < knightsHeights.length && dragonHeads[i] > knightsHeights[j]) {
        j++;
      }
      if (j === knightsHeights.length) {
        return 'knight fall';
      }
      totalHeight += knightsHeights[j]; 
      j++; 
    }
    return totalHeight;
  }
  
  console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // Output: 11
  console.log(dragonOfLoowater([5, 10], [5])); // Output: 'knight fall'
  console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // Output: 'knight fall'
  console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // Output: 10