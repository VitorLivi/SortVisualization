import sortHelpers from '../helpers/sort_helpers'
import ConfigurationConstants from '../constants/configuration_constants'

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