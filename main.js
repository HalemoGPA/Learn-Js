const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am the good promise");
  }, 3000);
});

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch("https://api.github.com/users/HalemoGPA/repos");
    console.log(await myData.json());
  } catch (reason) {
    console.log(reason);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
