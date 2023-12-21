export function getProducts() {
    const url = 'https://dummyjson.com/products/';
    return fetch(url).then((response) => response.json());
}
