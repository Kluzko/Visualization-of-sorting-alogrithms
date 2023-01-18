# Sorting Algorithms Visualization

This project uses d3.js and TypeScript to create visualizations of the following sorting algorithms:

-   Bubble sort
-   Selection sort
-   Insertion sort
-   Merge sort
-   Quick sort
-   Radix sort
-   Bucket sort

# Website demonstartion

![](https://github.com/Kluzko/Visualization-of-sorting-alogrithms/blob/master/static/website-demonstration.gif)

You can visit the website here https://kluzko.github.io/Visualization-of-sorting-alogrithms

# In progress

-   first thing to change is make visualization more responsive so I can add bigger number of numbers (maybe 2500)
-   add slider to adjust animation speed ( now is as fast as possible )

# Run the project

If you want to run project localy on your computer these are the steps:

1. Clone the repository
2. Run `npm install` to install the necessary dependencies
3. Run `npm run dev` then visit http://localhost:5173/

# Usage

Select an algorithm from the dropdown menu and hit the "start" button to see the visualization in action.
You can also change the amount of data so far from 50 to 500 numbers.

# Speed comparsion on the website

> **Warning**
> This comparsion is only based on test on this website if you really want to test speed of this alogrithms you should delete `await delay()` witch is crucial for performance of vizualisation.
> For example with delay **Radix Sort** for **500 numbers** is **22.15s** but without this delay you get **0.75s** !
> So this is just to show you the speed comparison with these slowdowns.

Values are the average of 5 tests

|   **Algoritms**    | **50 numbers** | **100 numbers** | **250 numbers** | **500 numbers** |
| :----------------: | :------------: | :-------------: | :-------------: | :-------------: |
|  **Bubble Sort**   |    ≈ 9.34s     |    ≈ 40.24s     |    ≈ 198.56     |    ≈ 1310.26    |
| **Selection Sort** |    ≈ 0.76s     |     ≈ 1.55s     |     ≈ 3.88s     |     ≈ 7.81s     |
| **Insertion Sort** |    ≈ 0.76s     |     ≈ 1.54s     |     ≈ 3.89s     |     ≈ 7.81s     |
|   **Merge Sort**   |    ≈ 2.33s     |     ≈ 3.08s     |     ≈ 8.17s     |    ≈ 19.68s     |
|   **Quick Sort**   |    ≈ 1.66s     |     ≈ 2.54s     |     ≈ 7.57s     |    ≈ 14.45s     |
|   **Radix Sort**   |    ≈ 1.48s     |     ≈ 2.88s     |    ≈ 12.80s     |    ≈ 22.15s     |
|  **Bucket Sort**   |    ≈ 0.79s     |     ≈ 1.49s     |     ≈ 4.04s     |     ≈ 6.70s     |

> **Note**
> These values may vary depending on your computer it also depends on how sorted numbers you get.

But as you can see **Bubble Sort** is very inefficent alogrithm.

# See LEARN.md for more information

To gain a deeper understanding of the sorting algorithms implemented in this project, please refer to the ![LEARN.md](https://github.com/Kluzko/Visualization-of-sorting-alogrithms/blob/master/LEARN.md) file.

# Contributions

If you find any issue, please open an issue or pull request.
Also if you want to add any new algorithm or improve the existing algorithm please let me know.
