const homeId = document.getElementById("homeId");
const aboutId = document.getElementById("aboutId");
const contactId = document.getElementById("contactId");
const destinationsPlace = document.getElementById("cardDestinations");
const searchButton = document.getElementById("searchButton");
const resetButton = document.getElementById("resetButton");

const searchApp = (searchWord) => {

    fetch("./travel_recommentation.json")
    .then(result => result.json())
    .then(data => {
        console.log(data)
        console.log(typeof data);
        console.log(Object.keys(data))
        let dataGenre = searchWord === "" ? Object.keys(data) : Object.keys(data).filter((genre)=> genre.includes(searchWord));
        console.log(data[dataGenre[0]])
        dataGenre.forEach(element => {

            data[element].forEach(ele => {

                console.log(ele)

                if(element === "countries"){

                    ele["cities"].forEach(ele2 => {

                        destinationsPlace.innerHTML += `
                        <div class="card" style="width: 18rem;">
                            <img src="${ele2.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${ele2.name}</h5>
                                <p class="card-text">${ele2.description}</p>
                                <a href="#" class="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    `
                    });             

                }else{
                
                destinationsPlace.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${ele.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${ele.name}</h5>
                            <p class="card-text">${ele.description}</p>
                            <a href="#" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                    `
                }
            })
                    
        });
    });
}

searchApp("")

homeId.addEventListener("click",()=>{


    document.getElementById("mainContent").style.display= "block"
    document.getElementById("contactContent").style.display= "none"
    document.getElementById("aboutUsContent").style.display= "none"

    console.log(document.getElementById("aboutUsContent").style.display)
})

aboutId.addEventListener("click",()=>{

    document.getElementById("mainContent").style.display= "none"
    document.getElementById("contactContent").style.display= "none"
    document.getElementById("aboutUsContent").style.display= "block"
    
})

contactId.addEventListener("click",()=>{

    document.getElementById("mainContent").style.display= "none"
    document.getElementById("contactContent").style.display= "block"
    document.getElementById("aboutUsContent").style.display= "none"
    
})

searchButton.addEventListener("click",()=>{

    destinationsPlace.innerHTML = ""
    let searchWord = document.getElementById("searchInput").value.toLowerCase();
    searchWord = searchWord.substring(0, searchWord.length - 3);
    console.log(searchWord)
    searchApp(searchWord)
})

resetButton.addEventListener("click",()=>{

    destinationsPlace.innerHTML = ""
    document.getElementById("searchInput").value = ""
    searchApp("")
})


