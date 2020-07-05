function bubbleSort(arr) {
	/*
		Two for loops
		compare the current index with the other index
		if less than the next index then
	*/
	// [-2,7,9,1,2]
	// [7,-2,9,1,2]
	for (let i=0; i<arr.length; i++) {
		for (let j=i+1; j<arr.length; j++) {
			let current = arr[j]
			let prev = arr[i]
			if (arr[i] < arr[j]) {
				arr[i] = current
				arr[j] = prev
			}
		}
	}

	return arr
}

console.log(bubbleSort([-2,-7,-9,-1,-2]))