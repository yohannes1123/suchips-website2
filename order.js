document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("place-order-btn").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default form submission behavior
    var shippingForm = document.querySelector(".shipping-info form"); // get the shipping form element
    var paymentForm = document.querySelector(".payment-info form"); // get the payment form element
    if (shippingForm.checkValidity() && paymentForm.checkValidity()) { // check if both forms are valid
      alert("Successful order!");
      location.reload();
    } else {
      alert("Please fill in all required fields!");
    }
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
      sidebar.style.left = '-250px';
  } else {
      sidebar.style.left = '0px';
  }
}