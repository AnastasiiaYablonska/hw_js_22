//Масиви та об'єкти:

// Створити масив, наповнити його 10 елементами будь-якого типу.
let array2 = [10, "hello", true, 3.14, null, undefined, false, { name: "Bob"}]

// Вивести кожен елемент в консоль
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log(array2[4]);
console.log(array2[5]);
console.log(array2[6]);
console.log(array2[7]);
console.log(array2[8]);
console.log(array2[9]);

// - Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "The Lord of the Rings",
    pageCount: 1178,
    genre: "Fantasy",
}
console.log(book1);

let book2 = {
    title: "The Diary of Anne Frank",
    pageCount: 336,
    genre: "Historical fiction",
}
let book3 = {
    title: "Harry Potter and the Sorcerer's Stone",
    pageCount: 265,
    genre: "Children's fantasy",
}

console.log(book2);
console.log(book3);

//Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

//----------------2.0----------------
// Book 4
let book4 = {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    pageCount: 493,
    genre: "Fantasy",
    authors: [
        { name: "J.R.R. Tolkien", age: 72 },
        { name: "Stanley Unwin", age: 46 }
    ]
};

// Book 5
let book5 = {
    title: "Pride and Prejudice",
    pageCount: 352,
    genre: "Romance",
    authors: [
        { name: "Jane Austen", age: 41 }
    ]
};

// Book 6
let book6 = {
    title: "Sherlock Holmes",
    pageCount: 224,
    genre: "Detective",
    authors: [
        { name: "Arthur Conan Doyle", age: 56 }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//-----------------------2.0-----------------------
let users = [
    { name: "Peter", username: "peter123", password: "qwerty123" },
    { name: "Elena", username: "olena2000", password: "ilovecats" },
    { name: "Ivan", username: "ivan_88", password: "football12" },
    { name: "Maria", username: "maria_99", password: "sunshine" },
    { name: "Sergey", username: "serhii77", password: "dragonborn" },
    { name: "Anna", username: "anna_2024", password: "password123" },
    { name: "Taras", username: "taras1980", password: "freedom" },
    { name: "Yulia", username: "yulia_2010", password: "ilovemusic" },
    { name: "Andriy", username: "andriy_65", password: "traveler" },
    { name: "Oksana", username: "oksana_2005", password: "happiness" }
];

        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});
        console.log( password: ${user.password});



