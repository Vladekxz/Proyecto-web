document.addEventListener('DOMContentLoaded', function() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  var agregarCarritoButtons = document.getElementsByClassName('agregar-carrito');

  Array.prototype.forEach.call(agregarCarritoButtons, function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var sku = this.getAttribute('data-sku');
      cartItems.push(sku);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
  });

 
});








