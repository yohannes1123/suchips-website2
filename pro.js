var totalPrice = 0;

var buttons = document.querySelectorAll('.products__button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    var quantityInput = this.parentElement.querySelector('.quantity-selector input');
    var quantity = parseInt(quantityInput.value);

    var price = parseFloat(this.getAttribute('data-price'));

    var productTotalPrice = quantity * price;

    totalPrice += productTotalPrice;

    console.log("Total Price: $" + productTotalPrice);

    var totalPriceBox = document.querySelector('.total-price');
    totalPriceBox.innerText = `Total Price: $${totalPrice}`;
  });
});

var checkoutButton = document.getElementById("myButton");
checkoutButton.addEventListener("click", function() {
  if (totalPrice > 0) {
    localStorage.setItem("totalPrice", totalPrice);
    window.location.href = 'order.html';
  } else {
    alert("Please select some products before Ordering!");
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
  } else {
      sidebar.style.left = '0px';
  }
}