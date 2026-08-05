const URL ="https://jsonplaceholder.typicode.com/users";
// async function getdata() {
//     console.log("getting data.....")
//     let response = await fetch(URL);
//     console.log(response);
// }

const getdata = async()=>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    // console.log(response.status);
    let data = await response.json();
    console.log(data[0]);
}

// let response=fetch(URL);
// console.log(response);           //fetch api returns promise and await cant use without function thats why we did not do like this


