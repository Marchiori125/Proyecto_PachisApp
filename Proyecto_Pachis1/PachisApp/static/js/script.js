const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const productWrapper = document.querySelector('.product-wrapper')
const buttonProduct = document.querySelector('.btn-make-order')
const iconcloseProduct = document.querySelector('.icon-close-product')
const productSelect = document.getElementById('product-select');
const productOptions = document.querySelectorAll('.product-options');

registerLink.addEventListener('click',()=> 
{wrapper.classList.add('active')}
);

loginLink.addEventListener('click',()=> 
{wrapper.classList.remove('active')}
);

btnPopup.addEventListener('click',()=> 
{wrapper.classList.add('active-popup')}
);

iconClose.addEventListener('click',()=> 
{wrapper.classList.remove('active-popup')}
);

buttonProduct.addEventListener('click', ()=>{
    productWrapper.classList.add('active-order')
})

iconcloseProduct.addEventListener('click', ()=>{
    productWrapper.classList.remove('active-order')
})

productSelect.addEventListener('change', function() {
    for (let i = 0; i < productOptions.length; i++) {
        productOptions[i].style.display = 'none';
    }

    const selectedProduct = document.getElementById(`${productSelect.value}-options`);
    selectedProduct.style.display = 'block';
});