export const getProductsJewelry = async () => {

    // Fetch new data from the API
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Return the fetched data
};


export const getProductsBooks = async () => {

    // Fetch new data from the API
    const response = await fetch('http://localhost:8080/books');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Return the fetched data
};