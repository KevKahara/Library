/**
 * Have where to store the book objects i.e individual books - array 
 * Have a constructor to create multiple book instances
 * Each book should have a unique UUID 
 * Have a function that pushes each book instance to the Library(Array)
 * 
 */

const myLibrary = [];

function Book(title, author, pages, isRead) {

    if(!new.target) {
        throw Error('Please use the \"new\" keyword to call the constructor');
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.id = function() {
    return crypto.randomUUID();
}

function addBookToLibrary() {

}

const btn = document.querySelector('.add-btn');
const dialog = document.querySelector('.form-dialog');

btn.addEventListener('click', () => {
    dialog.showModal();
})