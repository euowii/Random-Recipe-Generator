// document.querySelector(".round-button-circle").addEventListener("click",handleClick);
document.querySelector(".round-button-circle").addEventListener("click", test);
// document.querySelector(".round-button-circle").addEventListener("click", getInfo);

// function handleClick(){
//   alert("click");
// }
//
// const cars = ["Saab", "Volvo", "BMW"];

function test() {
  const cars = ["BMW", "Volvo", "Hello"];
  const random = Math.floor(Math.random() * 3)
  alert(cars[random]);
  }


// const api_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.863021%2C-117.788547&radius=250&type=restaurant&key=AIzaSyB_RsE8WgSzOI7YWEU0GvWpiA0TMTkmOvE#"
// async function getInfo(){
//   const response = await fetch(api_url);
//   const data = await response.json();
//   const list = [];
//   for (let i = 0; i <data.results.length; i++){
//     list.push(data.results[i].name);
//   }
//   const random = Math.floor(Math.random() * list.length)
//   alert(list[random]);
//   // alert(list[0]);
//   // alert("hello");
// }
