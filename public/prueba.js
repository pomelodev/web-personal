let button = document.getElementById("button");
button.addEventListener("click", ()=>{
    fetch('http://localhost:3000/prueba').then(response =>{
        if(response.ok){
            return response.json();
        }
        throw new Error("Request failed");
    }, networkError => console.log(networkError.message)
).then(jsonResponse=>{
    console.log(jsonResponse);
});
});