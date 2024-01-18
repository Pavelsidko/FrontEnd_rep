export function getProducts() {
    const url = 'https://dummyjson.com/products/';
    return fetch(url).then((response) => response.json());
}

export function getCategories() {
    const url = 'https://dummyjson.com/products/categories';
    return fetch(url).then((response) => response.json());
}

export function fetchProductsByCategory(category) {
    const url = `https://dummyjson.com/products/category/${category}`;
    return fetch(url).then((response) => response.json());
}

export function fetchSearchByProducts(word) {
    const url = `https://dummyjson.com/products/search?q=${word}`;
    return fetch(url).then((response) => response.json());
}
