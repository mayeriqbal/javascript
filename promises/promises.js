function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("fatch data successfully");
      } else {
        reject("error");
      }
    }, 3000);
  });
}

fetchData().then(() => {}).catch(() => {});
