import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaRegCopy } from "react-icons/fa";

const Displaycode = () => {
  const codeString = `#include <stdio.h>

  // Function to swap two elements
  void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
  }
  
  // Partition function to place pivot element at its correct position
  int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // pivot element
    int i = (low - 1); // index of smaller element
  
    for (int j = low; j <= high - 1; j++) {
      // Check if current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++; // increment index of smaller element
        swap(&arr[i], &arr[j]);
      }
    }
    swap(&arr[i + 1], &arr[high]); // swap pivot with element at i+1
    return (i + 1);
  }
  
  /* Recursive function to implement quick sort */
  void quickSort(int arr[], int low, int high) {
    if (low < high) {
      // pi is partitioning index, arr[p] is now at right place
      int pi = partition(arr, low, high);
  
      // Recursively sort elements before and after partition
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  /* Function to print an array */
  void printArray(int arr[], int n) {
    for (int i = 0; i < n; ++i) {
      printf("%d ", arr[i]);
    }
    printf("\\n");
  }
  
  int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
  
    printf("Unsorted array: \\n");
    printArray(arr, n);
  
    quickSort(arr, 0, n - 1);
  
    printf("Sorted array: \\n");
    printArray(arr, n);
  
    return 0;
  }
  `;
  const handleCopy = () => {};

  return (
    <div className="p-3 flex justify-center items-center shadow-md w-full h-screen ">
        <div className="w-full md:w-3/4 border border-gray-500 rounded-md">
        <div className="flex justify-between border-b border-gray-500 bg-gray-300">
          <h1 className="p-1">code</h1>
          <FaRegCopy className="mx-1 mt-1 size-5 cursor-pointer" />
        </div>
        <SyntaxHighlighter
          className="h-[80vh] w-full"
          language="c"
          style={docco}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Displaycode;

//   <div className="border-b border-neutral-400 flex justify-between">
//     <h1>code</h1>
//     <h1>copy code</h1>
//   </div>
