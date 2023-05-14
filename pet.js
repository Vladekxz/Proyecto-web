let valorM = false;

function fieldCheck(){

    var checkArray = [
        { id: "code", value: document.getElementById("code").value },
        { id: "price", value: document.getElementById("price").value },
        { id: "name", value: document.getElementById("name").value },
        { id: "desc", value: document.getElementById("desc").value },
        { id: "quantity", value: document.getElementById("quantity").value },
        { id: "supplier", value: document.getElementById("supplier").value }
    ];

    var cont = 0;

    for(var i = 0; i<checkArray.length;i++){
        if(checkArray[i].value == "" || checkArray[i].value == null){
            document.getElementById(checkArray[i].id).classList.add("is-invalid");
            valorM = false;
            alert("Hay campos sin completar");
            break;
        }
        else{
            document.getElementById(checkArray[i].id).classList.remove("is-invalid");
            cont ++; 
            console.log(cont);
            if(cont === 6){
                valorM = true;
                }   
            }
            
    }
    
}


function showModal() {
    var modalSuccess = document.getElementById("modalSuccess");
    if (valorM === true) {
      var modal = new bootstrap.Modal(modalSuccess);
      modal.show();
      valorM = false;
    } else {
      modalSuccess.classList.remove("modalSuccess");
    }
  }


function checkAgregar(){
    fieldCheck();
    showModal();
}

 function checkGeo(){
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position){
             var lat = position.coords.latitude;
             var lon = position.coords.longitude;
             apiGeo(lat,lon);
         });
     } else {
         alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
     }
 }

 function apiGeo(lat,lon){
     fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=f7e0f5d3c3baa8c75f675ca585940a1b&units=metric')
     .then(response => response.json())
     .then(data => {

        let grados = document.getElementById("weather");
         grados.innerHTML ="Temperatura: " + Math.floor(data.main.temp) +"°C";
     })
 }
 function switchMode(){
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    
 }

 function crearStorage(){
  let array = [];
  localStorage.setItem("myStorage", JSON.stringify(array));
}

function obtenerStorage(){
  return JSON.parse(localStorage.getItem("myStorage"));
}

function guardarStorage(array){
  localStorage.setItem("myStorage", JSON.stringify(array));
}

function addToCart(productName, price) {
  let cart = obtenerStorage();

  let existingItem = cart.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({name: productName, price: price, quantity: 1});
  }

  guardarStorage(cart);
  actualizarCartUI();
}

function removeFromCart(productName) {
  let cart = obtenerStorage();

  let itemIndex = cart.findIndex(item => item.name === productName);
  if (itemIndex !== -1) {
    let item = cart[itemIndex];
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      cart.splice(itemIndex, 1);
    }
    guardarStorage(cart);
    actualizarCartUI();
  }
}

function emptyCart() {
  guardarStorage([]);
  actualizarCartUI();
}

function actualizarCartUI() {
  let cart = obtenerStorage();
  let cartList = document.getElementById("cart");
  let total = 0;

  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let li = document.createElement("li");
    let removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.onclick = function() {
      removeFromCart(item.name);
    };
    li.textContent = item.name + " x" + item.quantity + " - $" + (item.price * item.quantity);
    li.appendChild(removeButton);
    cartList.appendChild(li);

    total += item.price * item.quantity;
  }

  let totalElement = document.getElementById("total");
  totalElement.textContent = total;
}

crearStorage();
actualizarCartUI();
