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

const userInput = document.querySelectorAll('#user-input');
const form = document.querySelector('.form-input');
const submissionBtn = document.querySelector('.submit-btn');
const openDialogbtn = document.querySelector('.add-btn');
const dialog = document.querySelector('.form-dialog');
const display = document.querySelector('.display');

function addBookToLibrary(title, author, pages, isRead) {

    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);

}

form.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const pages = document.getElementById('pages-input').value;
    const isRead = document.getElementById('isRead-input').value;

    addBookToLibrary(title, author, pages, isRead);

    form.reset();
    dialog?.close();

});
openDialogbtn.addEventListener('click', () => {
    dialog.showModal();
});


/**
 * 
 *          LESSONS
 * 
 * Do not put an event listener in a function.
 * event.preventDefault() is used to prevent page reload or refresh when the submit button is pressed to delegate form submission to custom javascript.
 * The .value property is used to read Text from input fields.
 * dialog.showModal() is used to open a modal Box when triggered with an event.
 * 
 */