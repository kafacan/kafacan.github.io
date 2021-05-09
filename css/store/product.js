function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
const productList = document.querySelector(".row");
 console.log(productList);

 function addProduct() {
    let newCard = document.createElement("div");
    let newCardBody = document.createElement("div");
    newCardBody.className = "card-body d-flex justify-content-center align-items-center";
    newCardBody.innerHTML += '<i class="fas fa-tshirt fa-3x"></i>'
    newCard.className = "card col-2";
    newCard.appendChild(newCardBody);
    newCard.innerHTML += '<ul class="list-group list-group-flush "><li class="list-group-item" id="expl" >Ben bir ürünüm</li><li class="list-group-item"  id="price">'+ random(100)+"$"+'</li></ul>'
    productList.appendChild(newCard)
 }
 function addButton(){
   let newButton = document.createElement("div");
   newButton.className = "align-self-center justify-content-center d-flex";
   newButton.innerHTML = '<button type="button" class="btn btn-lg">Load More</button>';
   productList.appendChild(newButton);
 }
 function addText() {
  let newText = document.createElement("div");
  newText.className = "align-self-center justify-content-center d-flex";
  newText.innerHTML = '<p>There is no more product show</p>';
  productList.appendChild(newText);
 }