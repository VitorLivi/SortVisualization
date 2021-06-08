import sortHelpers from '../helpers/sort_helpers'
import { sortType } from '../constants/configuration_constants'

export default {
    getArrayBySortType: {
        [sortType.BUBBLE_SORT]: {
            array: sortHelpers.bubbleSort()
        },
        [sortType.SELECTION_SORT]: {
            array: sortHelpers.selectionSort()
        },
        [sortType.INSERTION_SORT]: {
            array: sortHelpers.insertionSort()
        },
        [sortType.MERGE_SORT]: {
            array: sortHelpers.mergeSort()
        },
        [sortType.QUICK_SORT]: {
            array: sortHelpers.quickSort()
        },
        [sortType.RANDOM_QUICK_SORT]: {
            array: sortHelpers.bubbleSort()
        },
        [sortType.COUNTING_SORT]: {
            array: sortHelpers.bubbleSort()
        },
        [sortType.RADIX_SORT]: {
            array: sortHelpers.bubbleSort()
        }
    }
}