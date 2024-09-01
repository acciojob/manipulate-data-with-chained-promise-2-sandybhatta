const op = document.getElementById('output');
let arr = [1, 2, 3, 4];

// Initial promise that resolves after 3 seconds
new Promise((resolve) => {

    resolve(arr);
})
  .then((arr) => {
    // Filter even numbers after the initial array is resolved
    return new Promise((resolve) => {
      let arr1 = arr.filter((item) => item % 2 === 0);
      setTimeout(() => {
        op.innerText = arr1.join(', '); // Display even numbers after 1 second
        resolve(arr1);
      }, 1000);
    });
  })
  .then((arr1) => {
    // Multiply the filtered even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        let multipliedArr = arr1.map((item) => item * 2);
        op.innerText = multipliedArr.join(', '); // Update output with multiplied numbers after 2 seconds
        resolve(multipliedArr);
      }, 2000);
    });
  })
  