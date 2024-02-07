

function getData(search){

    fetch('https://api.pexels.com/v1/search?query='+search, {
    headers: {Authorization: "5jjBwLdRZXfr4Y4Gs1XN288HnhqJXP1fH0TzQrQqkHhW9BEnFZ2hmMhy"}
    })
    .then((response) => response.json())
    .then((json) => showImg(json))
    .catch((err) => console.log("Error detected: ", err) );

}


function showImg(json){
 
    let imgContainer = document.getElementById("container_picture");
    imgContainer.innerHTML = "";

    json.photos.forEach(element => {

        let imgFind = element.src.medium;
        // imgContainer.innerHTML += '<div class="card d-flex col-md-3"><img src="'+imgFind+'" class="card-img" alt="..."><div class="card-img-overlay"><h5 class="card-title">Card title</h5></div></div>'
        imgContainer.innerHTML += '<div class="col-6 col-md-4" id="img_to_show"><img src="'+imgFind+'" alt="img" class="card-img"></div>'
    });
}


// getData("cane");


// let dogBtn = document.getElementById("btn_dog");
// let catBtn = document.getElementById("btn_cat");
let searchBtn = document.getElementById("btn_search");

// dogBtn.addEventListener("click", () =>{
//     getData("dog");
// });

// catBtn.addEventListener("click", () =>{
//     getData("cat");
// });

searchBtn.addEventListener("click", () =>{
    let imput = document.getElementById("imput_search");
    getData(imput.value);

});




