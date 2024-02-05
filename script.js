function getNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      setTimeout(() => {
        resolve("success, this is more thank 10");
      }, 3000);
    } else {
      setTimeout(() => {
        reject("error, this is less than 10");
      }, 3000);
    }
  });
}

// getNumber(5)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function getName(name) {
  return new Promise((resolve, reject) => {
    if (name.length > 3) {
      setTimeout(() => {
        resolve("success, this name length is more than 10");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("error, this  name length  is less than 10");
      }, 5000);
    }
  });
}

// getName("surya")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.all([getNumber(5), getName("surya")])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

let x = 10;
setInterval(() => {
  console.log("success, this is more thank 10");
}, 3000);
