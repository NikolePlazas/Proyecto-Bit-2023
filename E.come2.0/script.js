$(document).ready(function() {
    var productList = [
      {
        name: 'Producto 1',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 1.',
        price: 10.00
      },
      {
        name: 'Producto 2',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 2.',
        price: 20.00
      },
      {
        name: 'Producto 3',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 3.',
        price: 30.00
      },
      {
        name: 'Producto 4',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 4.',
        price: 40.00
      },
      {
        name: 'Producto 5',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 5.',
        price: 50.00
      },
      {
        name: 'Producto 6',
        image: 'https://via.placeholder.com/350x150',
        description: 'Descripción del producto 6.',
        price: 60.00
      }
    ];
    var cart = [];
    
    // Mostrar productos en la página
    for (var i = 0; i < productList.length; i++) {
      var product = productList[i];
      var productHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img class="card-img-top" src="${product.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">$${product.price.toFixed(2)}</p>
              <a href="#" class="btn btn-primary add-to-cart" data-name="${product.name}" data-price="${product.price}">Agregar al carrito</a>
            </div>
          </div>
        </div>
      `;
      $('#product-list').append(productHTML);
    }
    
    // Agregar productos al carrito
    $('.add-to-cart').click(function(event) {
      event.preventDefault();
      var name = $(this).data('name');
      var price = Number($(this).data('price'));
      cart.push({ name: name, price: price });
      console.log(cart);
    });
    
    // Mostrar cantidad de productos en el carrito
    $('.cart-link').click(function(event) {
      event.preventDefault();
      var cartCount = cart.length;
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].price;
      }
      alert(`Productos en el carrito: ${cartCount}\nTotal: $${total.toFixed(2)}`);
    });
  });
  