interface Arr extends Array<{value?: number, height?: number, index?: number}> {};

export default {    

    bubbleSort: function (array: Arr = []) {
        let len = array.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if ( (j + 1 < len) && array[j].value > array[j + 1].value) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                }
            }
        }
        return array;
    },

    selectionSort: function (array: [] = []) {
        let n = array.length;
        
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(array[j] < array[min]) {
                    min=j; 
                }
             }
             if (min != i) {
                 // Swapping the elements
                 let tmp = array[i]; 
                 array[i] = array[min];
                 array[min] = tmp;      
            }
        }
        return array;
    },

    insertionSort: function (array: [] = []) {
        let n = array.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = array[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = current;
        }
        return array;
    },

    mergeSort: function (leftArray: [] = [], rightArray: [] = []) {
        let arr = []
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] < rightArray[0]) {
                arr.push(leftArray.shift())  
            } else {
                arr.push(rightArray.shift()) 
            }
        }
        
        return [ ...arr, ...leftArray, ...rightArray ]
    },

    quickSort: function(array: [] = []) {
        if (array.length <= 1) { 
            return array;
        } else {
    
            var left = [];
            var right = [];
            var newArray = [];
            var pivot = array.pop();
            var length = array.length;
    
            for (var i = 0; i < length; i++) {
                if (array[i] <= pivot) {
                    left.push(array[i]);
                } else {
                    right.push(array[i]);
                }
            }
    
            return newArray.concat(this.quickSort(left), pivot, this.quickSort(right));
        }
    }

}