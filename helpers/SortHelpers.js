import sharedHelpers from './SharedHelpers'

const { sleep, updateBarStyle } = sharedHelpers;

export default {
    async bubbleSort (array, velocity)  {

        let len = array.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if ( (j + 1 < len) && array[j].value > array[j + 1].value) {

                    const current =  document.getElementById("bar" + j)
                    const next = document.getElementById("bar" + (j + 1))

                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;

                    current.style.order = j + 1;
                    next.style.order = j;

                    let tmpId = current.id
                    current.id = next.id
                    next.id = tmpId

                    const tempColor = {
                        current: current.style.backgroundColor,
                        next: next.style.backgroundColor
                    }

                    updateBarStyle("before", current, next, velocity, tempColor);

                    await sleep(velocity * 1000)

                    updateBarStyle("after", current, next, velocity, tempColor);
                }
            }
        }

        const elements = document.getElementById("bar").children

        for (var i = 0; i < elements.length; i++) {
            elements[i].id = "bar"+ i;
        }

        return array;
    },

    selectionSort: function (array, velocity) {
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

    insertionSort: function (array, velocity) {
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

    mergeSort: function (leftArray, rightArray) {
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

    quickSort: function(array, velocity) {
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