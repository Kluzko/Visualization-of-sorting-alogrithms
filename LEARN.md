# Learn

Welcome to the Sorting Algorithms Visualization project! This project uses d3.js and TypeScript to create visualizations of the following sorting algorithms:

-   Bubble sort
-   Selection sort
-   Insertion sort
-   Merge sort
-   Quick sort
-   Radix sort
-   Bucket sort

To get started, you'll need to clone the repository and run `npm install` to install the necessary dependencies. Then, you can run `npm run dev` and visit http://localhost:5173/ to see the visualization in action.

# Using the website

The website allows you to select an algorithm from the dropdown menu and hit the `start` button to see the visualization in action. You can also change the amount of data to be sorted, from 50 to 500 numbers (maybe in future I will allow bigger numbers, now still testing).

# In progress

Currently, the website allows you to view the sorting algorithms in action, but the animation speed is as fast as possible. There is a work in progress to add a slider to adjust the animation speed.

# Understanding Sorting Algorithms

Sorting algorithms are used to arrange elements of an array in a specific order. There are many different sorting algorithms, each with its own strengths and weaknesses.

-   Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.

-   Selection sort is a simple sorting algorithm that divides the input list into two parts: the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire input list. The algorithm repeatedly selects the smallest element from the unsorted part and moves it to the end of the sorted part.

-   Insertion sort is a simple sorting algorithm that builds the final sorted list one item at a time. It iterates through an input list by consuming one input element per iteration, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.

-   Merge sort is a divide and conquer algorithm that divides an array into two sub-arrays, sorts the sub-arrays and then merge them back into a single sorted array.

-   Quick sort is a divide and conquer algorithm that selects a 'pivot' element from the array and partition the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

-   Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.

-   Bucket Sort is a sorting algorithm that divides the unsorted array elements into several groups called buckets. Each bucket is then sorted by using any of the suitable sorting algorithms or recursively applying the same bucket algorithm.

It's worth noting that the time and space complexity of sorting algorithms can vary greatly depending on the algorithm and the input. You can use the website to compare the performance of different sorting algorithms and get a better understanding of how they work.

# d3.js and Visualization

The d3.js (Data-Driven Documents) library is used in this project to create dynamic and interactive visualizations of the sorting algorithms. It allows us to bind data to the DOM (Document Object Model) and apply data-driven transformations to the visual elements. This makes it easy to create and update the visualization as the sorting algorithm is running.

### Using Delay

As you can see in the code, the sorting functions uses the `await delay(1)` line to introduce a delay between each iteration of the sorting algorithm. This delay is necessary to avoid performance issues.Now it is set to the 1 ms (fastes us possible) you can play with it.

# Resources

-   d3.js

    -   Official documentation: https://d3js.org/

-   Sorting algorithms:
    -   bubble sort: https://www.geeksforgeeks.org/bubble-sort/
    -   selection sort: https://www.geeksforgeeks.org/selection-sort/
    -   insertion sort: https://www.geeksforgeeks.org/insertion-sort/
    -   merge sort: https://www.geeksforgeeks.org/merge-sort/
    -   quick sort: https://www.geeksforgeeks.org/quick-sort/
    -   radix sort: https://www.programiz.com/dsa/bucket-sort

These resources were used to gain a better understanding of the sorting algorithms and how to implement them using d3.js.It's a good idea to review the documentation and examples provided by these resources to get a deeper understanding of the project and the techniques used.
