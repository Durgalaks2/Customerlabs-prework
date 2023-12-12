
// checkout 
document.addEventListener("DOMContentLoaded", function() {
    var placeOrderButton = document.querySelector(".btn-block");
    placeOrderButton.addEventListener("click", collectBillingDetails);
  });
  
  function collectBillingDetails() {
   
    var email = document.getElementById('c_email_address').value;
    var phone = document.getElementById('c_phone').value;
    var firstName = document.getElementById('c_fname').value;
    var lastName = document.getElementById('c_lname').value;
    var city = document.getElementById('c_city').value;
    var state = document.getElementById('c_state_country').value;
    var zip = document.getElementById('c_postal_zip').value;
  
  
    sendToCustomerLabs(email, phone, firstName, lastName, city, state, zip);
  }



  //cart
  	
if (window.location.pathname === '/cart.html') {
  
    var products = []; 
    var cartValue = 0; 
    
    
    var cartProducts = document.querySelectorAll('.cart-product');
    cartProducts.forEach(function(product) {
      var productName = product.querySelector('.product-title').innerText.trim();
      var productPrice = parseFloat(product.querySelector('.product-price').innerText.trim().replace('$', '')); // Assuming the price is in the format $xx.xx
      var productQuantity = parseInt(product.querySelector('.product-quantity').innerText.trim());
      var productTotal = productPrice * productQuantity;
      
     
      products.push({
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
        productTotal: productTotal
      });
      
      
      cartValue += productTotal;
    });
  
    
    var payload = {
      products: products,
      cartValue: cartValue
    };
  
   
    _cl.pageview('Cart Viewed', payload);
  }


//shop 
document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.add_to_cart_btn');
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        var productItem = button.closest('.product-item');
        var productName = productItem.querySelector('.product-title').innerText.trim();
        var productPrice = productItem.querySelector('.product-price').innerText.trim().replace('$', ''); 
  
        var payload = {
          productName: productName,
          productPrice: parseFloat(productPrice)
        };
        
        _cl.trackClick('Add to Cart', payload);
      });
    });
  });
  

  // place order


document.getElementById('placeOrder').addEventListener('click', function(event) {
  
    const products = []; 
  
    const orderTotal = document.getElementById('order_total').innerText; 
    
  
    window.location.href = '/thankyou.html';
  
   
    _cl.trackClick({
      event: 'Purchased',
      products: products,
      orderTotal: orderTotal
     
    });
  });
  
 
  document.addEventListener('DOMContentLoaded', function() {
     if(window.location.pathname === '/thankyou.html') {
       
     }
  });


  // Given data
var inputData = {
    event: "purchase",
    ecommerce: {
      transaction_id: "T_12345",
      value: 25.42,
      tax: 4.90,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          discount: 2.22,
          item_brand: "Google",
          item_category: "Apparel",
          item_variant: "green",
          price: 9.99,
          quantity: 1
        },
        {
          item_id: "SKU_12346",
          item_name: "Google Grey Women's Tee",
          item_category: "Apparel",
          discount: 3.33,
          item_brand: "Google",
          item_variant: "gray",
          price: 20.99,
          quantity: 1
        }
      ]
    }
  };
  
  // Transform data to CustomerLabs format
  var payload = {
    transaction_id: inputData.ecommerce.transaction_id,
    value: inputData.ecommerce.value,
    tax: inputData.ecommerce.tax,
    shipping: inputData.ecommerce.shipping,
    currency: inputData.ecommerce.currency,
    coupon: inputData.ecommerce.coupon,
    items: inputData.ecommerce.items.map(function(item) {
      return {
        item_id: item.item_id,
        item_name: item.item_name,
        discount: item.discount,
        item_brand: item.item_brand,
        item_category: item.item_category,
        item_variant: item.item_variant,
        price: item.price,
        quantity: item.quantity
      };
    })
  };
  
  _cl.track('purchase', payload);
  




  // check 
  (function () {   
      var cl = document.createElement('script');
       cl.type = 'text/javascript'; cl.async = true;  
          cl.src = 'customerlabs.js';   
            var s = document.getElementsByTagName('script')[0];
             s.parentNode.insertBefore(cl, s); })(); 

  