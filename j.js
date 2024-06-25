document.addEventListener('DOMContentLoaded', () => {

const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.querySelector('.total-price .price');
  

function updateTotalPrice() {
      let totalPrice = 0;
      cartItems.forEach(item => {
        if (item.parentNode) { 
          const price = parseFloat(item.dataset.price);
          const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
          totalPrice += price * quantity;
        }
      });
      totalPriceElement.textContent = totalPrice.toFixed(2);
}
  

cartItems.forEach(item => {
    const plusBtn = item.querySelector('.quantity-btn.plus');
    const minusBtn = item.querySelector('.quantity-btn.minus');
    const quantityElement = item.querySelector('.quantity');
    const deleteBtn = item.querySelector('.delete-btn');
    const likeBtn = item.querySelector('.like-btn');
      

plusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
});
  

minusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
    }
});
  
      
deleteBtn.addEventListener('click', () => {
    item.remove(); 
    updateTotalPrice();
});
  
      
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    });
});
  

updateTotalPrice();
});
  