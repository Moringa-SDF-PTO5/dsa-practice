function solution(S) {
    // Initialize the map to store character positions
    const charPositionMap = new Map();

    // Iterate over each string with its index
    for (let index = 0; index < S.length; index++) {
        const string = S[index];
        
        // Iterate over each character in the string with its position
        for (let position = 0; position < string.length; position++) {
            const char = string[position];
            const key = `${char},${position}`;
            
            // Check if this character was previously observed at the same position
            if (charPositionMap.has(key)) {
                // If previously observed, return the indices of the two strings and the position
                return [charPositionMap.get(key), index, position];
            } else {
                // else, record this character and its position with the current string index
                charPositionMap.set(key, index);
            }
        }
    }
    
    // If no such pair found, return an empty list
    return [];
}

// Example usage
const S = ["adeabc", "adcbed", "avdcf"];
console.log(solution(S));  // Output: []
