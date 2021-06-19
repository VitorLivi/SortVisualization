import sortHelpers from '../helpers/SortHelpers'
import ConfigurationConstants from '../constants/ConfigurationConstants'

const { sortTypes } = ConfigurationConstants; 

export default {
    sortTypeMapper: {
        [sortTypes.BUBBLE_SORT]: {
            function: sortHelpers.bubbleSort,
            name: "Bubble Sort"
        },
        [sortTypes.SELECTION_SORT]: {
            function: sortHelpers.selectionSort,
            name: "Selection Sort"
        },
        [sortTypes.INSERTION_SORT]: {
            function: sortHelpers.insertionSort,
            name: "Insertion Sort"
        },
        [sortTypes.MERGE_SORT]: {
            function: sortHelpers.mergeSort,
            name: "Merge Sort"
        },
        [sortTypes.QUICK_SORT]: {
            function: sortHelpers.quickSort,
            name: "Quick Sort"
        },
        [sortTypes.RANDOM_QUICK_SORT]: {
            function: sortHelpers.bubbleSort,
            name: "Random Quick Sort"
        },
        [sortTypes.COUNTING_SORT]: {
            function: sortHelpers.bubbleSort,
            name: "Counting Sort"
        },
        [sortTypes.RADIX_SORT]: {
            function: sortHelpers.bubbleSort,
            name: "Radix Sort"
        }
    }
}