// Function to find the K'th largest element
function kthLargest(arr, K) {

    // Min heap to store K largest elements
    let pq = [];

    // Iterate through the array elements
    arr.forEach((val) => {
    
        // Add current element to the min heap
        pq.push(val);
        pq.sort((a, b) => a - b);
        
        // If heap exceeds size K, remove smallest element
        if (pq.length > K) {
            pq.shift();
        }
    });

    // Return K'th largest element
    return pq[0];
}

const arr = [12, 3, 5, 7, 19];
const K = 2;
console.log(kthLargest(arr, K))
