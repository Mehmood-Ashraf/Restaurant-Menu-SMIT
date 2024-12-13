// Array contains menu items

const foodMenu = [
  {
    type: "lunch",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/chicken-korma_650x400_51475662188.webp",
    name: "Korma",
    price: 250,
  },
  {
    type: "lunch",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/biryani.jpg",
    name: "Biryani",
    price: 300,
  },
  {
    type: "shakes",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/banana-shake.jpg",
    name: "Banana Shake",
    price: 200,
  },
  {
    type: "breakfast",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/Halwapuri.jpg",
    name: "Halwapuri",
    price: 250,
  },
  {
    type: "shakes",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/Mango shake.jpg",
    name: "Mango Shake",
    price: 250,
  },
  {
    type: "lunch",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/nihari.jpg",
    name: "Nihari",
    price: 250,
  },
  {
    type: "breakfast",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/omellete.jpg",
    name: "Omellete",
    price: 150,
  },
  {
    type: "lunch",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, eaque!",
    img: "./Assets/paey.jpg",
    name: "Paey",
    price: 250,
  },
];

let menuCards = document.querySelector("#menuCards");

function items(category) {
    if (!category) {
    foodMenu.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="cardImage">
                                <img src="${element.img}" alt="biryani">
                            </div>
                            <div class="cardText">
                                <div class="menuName">  
                                    <h2>${element.name}</h2>
                                    <h5>${element.price}</h5>
                                </div>
                                <div class="menu-content">
                                    <p>${element.content}</p>
                                </div>
                            </div>`;

      menuCards.appendChild(card);
    });
  }else if (category === "BreakFast" || "Lunch" || "Shakes") {
    menuCards.innerHTML = "";
    category = category.toLowerCase();
    foodMenu
      .filter((element) => {
        return element.type == category;
      })
      .forEach((element) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="cardImage">
                                  <img src="${element.img}" alt="biryani">
                              </div>
                              <div class="cardText">
                                  <div class="menuName">  
                                      <h2>${element.name}</h2>
                                      <h5>${element.price}</h5>
                                  </div>
                                  <div class="menu-content">
                                      <p>${element.content}</p>
                                  </div>
                              </div>`;

        menuCards.appendChild(card);
      });
  }
}

items();


let inputField = document.querySelector("#input")
inputField.addEventListener('keydown', function(event){
  if(event.key === "Enter"){    
    search()
  }
})


let message = document.createElement("p")
message.classList.add('message')
message.innerHTML = `<p>Sorry! Item Not Found......</p>`


function search(){
  // let input = inputField.value.trim().toLowerCase();
  menuCards.innerHTML = ""
  
  let input = inputField.value.trim().toLowerCase();
  
  if(input.length === 0){
    menuCards.appendChild(message)
    return
  }
  

  let filteredItems = foodMenu.filter((element) => {
    return(element.name.toLowerCase() === input)
  })
  
  if(filteredItems.length === 0){
    menuCards.appendChild(message)
    return
  }else{
  
    filteredItems.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<div class="cardImage">
      <img src="${element.img}" alt="biryani">
      </div>
      <div class="cardText">
      <div class="menuName">  
      <h2>${element.name}</h2>
      <h5>${element.price}</h5>
      </div>
      <div class="menu-content">
      <p>${element.content}</p>
      </div>
      </div>`;
      
      menuCards.appendChild(card);
    })
  }
}