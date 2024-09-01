const op = document.getElementById('output');
let arr = [1, 2, 3, 4];

// Initial promise that resolves after 3 seconds
new Promise((resolve) => {
  resolve(arr);
})
  .then((arr) => {
    return new Promise((resolve) => {
      let arr1 = arr.filter((item) => item % 2 === 0);
      setTimeout(() => {
        
        op.innerText = arr1.join(', ');
        resolve(arr1);
      }, 1000);
    });
  })
  .then((arr1) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let multipliedArr = arr1.map((item) => item * 2);
       
        op.innerText = multipliedArr.join(', ');
        resolve(multipliedArr);
      }, 2000);
    });
  });
  