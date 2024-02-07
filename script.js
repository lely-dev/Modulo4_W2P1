

function getData(search){

    fetch('https://api.pexels.com/v1/search?query='+search, {
    headers: {Authorization: "5jjBwLdRZXfr4Y4Gs1XN288HnhqJXP1fH0TzQrQqkHhW9BEnFZ2hmMhy"}
    })
    .then((response) => response.json())
    .then((json) => showImg(json))
    .catch((err) => console.log("Error detected: ", err) );

}

let imput = document.getElementById("imput_search");

function showImg(json){
    
    let titleContainer = document.getElementById("title_search");
    let imgContainer = document.getElementById("container_picture");
    // titleContainer.innerHTML = "";
    imgContainer.innerHTML = "";

    titleContainer.innerHTML = imput.value;
    console.log(titleContainer);

    json.photos.forEach(element => {

        let imgFind = element.src.medium;
        // imgContainer.innerHTML += '<div class="col-6 col-md-4 img-fluid" id="img_to_show"  style="width: 18rem;"><img src="'+imgFind+'" alt="img" class="card-img"></div>'
        imgContainer.innerHTML += '<div class="col-md-3"><div class="card"><div class="card-img"><img src="'+imgFind+'" class="img-fluid"></div><div class="card-img-overlay">Slide 1</div></div></div>'
    });
}



// getData("cane");

let searchBtn = document.getElementById("btn_search");

searchBtn.addEventListener("click", () =>{
    
    getData(imput.value);

});




