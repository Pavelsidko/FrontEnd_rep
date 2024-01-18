import { getProducts, getCategories, fetchProductsByCategory, fetchSearchByProducts } from "./requests.js";

const list = document.querySelector('.js-list')
const products = document.querySelector('.js-products')
const select = document.querySelector('.js-select')
const search = document.querySelector('.js-search')


const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

getProducts().then((data) => {
    data.products.forEach((item) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
             <img class="product__img" src="${item.thumbnail}" alt="${item.title}">
             <div class="product__body">
                 <p class="product__price">${formatter.format(item.price)}</p>
                 <h2 class="product__title">${item.title}</h2>
                 <p class="product__descr">${item.description}</p>
                 <p class="product__brand">Brand: <span>${item.brand}</span></p>
                 <p class="product__category">Category: <span>${item.category}</span></p>
                 <div class="rating product__rating">
                    <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <p class="rating__value">${item.rating}</p>
                 </div>
             </div>
         `;
        products.append(productCard);
    });
});

getCategories().then(categories => {
    categories.forEach(category => {
        let option = document.createElement("option");
        option.text = category;
        option.value = category;
        select.add(option);
    });
});


search.addEventListener('input', function () {
    const query = this.value;
    if (query) {
        fetchSearchByProducts(query)
            .then(data => {
                console.log(data);
                if (Array.isArray(data.products)) {
                    products.innerHTML = '';

                    data.products.forEach(item => {
                        let productCard = document.createElement('div');
                        productCard.classList.add('product');
                        productCard.innerHTML = `
              <img class="product__img" src="${item.thumbnail}" alt="${item.title}">
              <div class="product__body">
               <p class="product__price">${formatter.format(item.price)}</p>
               <h2 class="product__title">${item.title}</h2>
               <p class="product__descr">${item.description}</p>
               <p class="product__brand">Brand: <span>${item.brand}</span></p>
               <p class="product__category">Category: <span>${item.category}</span></p>
               <div class="rating product__rating">
                  <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <p class="rating__value">${item.rating}</p>
               </div>
              </div>
              `;
                        products.append(productCard);
                    });
                }
                else {
                    console.log("not a array")
                }
            })
    }
})

select.addEventListener('input', function () {
    const category = this.value;
    if (category) {
        fetchProductsByCategory(category)
            .then(data => {
                console.log(data);
                if (Array.isArray(data.products)) {
                    products.innerHTML = '';

                    data.products.forEach(item => {
                        let productCard = document.createElement('div');
                        productCard.classList.add('product');
                        productCard.innerHTML = `
                    <img class="product__img" src="${item.thumbnail}" alt="${item.title}">
                    <div class="product__body">
                     <p class="product__price">${formatter.format(item.price)}</p>
                     <h2 class="product__title">${item.title}</h2>
                     <p class="product__descr">${item.description}</p>
                     <p class="product__brand">Brand: <span>${item.brand}</span></p>
                     <p class="product__category">Category: <span>${item.category}</span></p>
                     <div class="rating product__rating">
                        <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p class="rating__value">${item.rating}</p>
                     </div>
                    </div>
                    `;
                        products.append(productCard);
                    });
                }
                else {
                    console.log("not a array")
                }
            })
    }
});