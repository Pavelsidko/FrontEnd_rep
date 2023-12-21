import { getProducts } from "./requests.js";

const list = document.querySelector('.js-list')

getProducts().then((data) => {
    data.products.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.title
        list.append(li)
    })
})
