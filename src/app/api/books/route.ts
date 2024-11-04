// src/app/api/items/route.ts

import { NextResponse } from 'next/server';

let books = [
    {
        id: 1,
        image: "https://www.booknet.co.il/Images/Site/Products/9781408855669.jpg",
        title: "Harry Potter and the Chamber of Secrets",
        price: 14.99
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/51Nf1eg79xL._SY466_.jpg",
        title: "1984",
        price: 19.99
    },
    {
        id: 3,
        image: "https://www.booknet.co.il/Images/Site/Products/org/9781435170513.jpg",
        title: "The Great Gatsby",
        price: 10.99
    },
    {
        id: 4,
        image: "https://www.steimatzky.co.il/pub/media/catalog/product/cache/054fd023ed4beb824f3143faa6fcc008/0/2/025230674-172526479838404.jpg",
        title: "Pride and Prejudice",
        price: 12.99
    },
    {
        id: 5,
        image: "https://digitaltakafut.com/wp-content/uploads/2024/08/PIC-39-scaled.jpg",
        title: "Cracking the Coding Interview",
        price: 15.50
    },
    {
        id: 6,
        image: "https://i.ebayimg.com/images/g/oyYAAOSw2gxYpPe0/s-l960.webp",
        title: "War and Peace",
        price: 20.99
    },
    {
        id: 7,
        image: "https://www.wizkids.co.il/cdn/shop/products/079ec6bb945abbda991f5855763920a1_x700.jpg?v=1514211007",
        title: "White Fang",
        price: 13.99
    },
    {
        id: 8,
        image: "https://www.hamigdalor.co.il/media/thumb/460x460/products/the-little-prince_CKM.jpg",
        title: "The Little Prince",
        price: 16.99
    },
    {
        id: 9,
        image: "https://www.booknet.co.il/Images/Site/Products/org/9780261103252.jpg",
        title: "The Lord of the Rings",
        price: 29.99
    },
    {
        id: 10,
        image: "https://i.ebayimg.com/images/g/T9kAAOSwWxNYulq9/s-l960.webp",
        title: "The Hobbit",
        price: 14.50
    }
];

// Handle GET requests
export async function GET() {
    return NextResponse.json(books);  // Sends the list of items as JSON
}

// Handle POST requests
export async function POST(request: Request) {
    const { image, title, price } = await request.json();  // Read data from the request body
    const newItem = { id: Date.now(), image, title, price };  // Create a new item with a unique ID
    books.push(newItem);  // Add the new item to the list
    return NextResponse.json(newItem, { status: 201 });  // Send back the new item with a "Created" status
}
