/**
 * Have where to store the book objects i.e individual books - array 
 * Have a constructor to create multiple book instances
 * Each book should have a unique UUID 
 * Have a function that pushes each book instance to the Library(Array)
 * Books have to be rendered dynamically with Javascript
 * 
*/
const userInput = document.querySelectorAll('#user-input');
const form = document.querySelector('.form-input');
const submitFormBtn = document.querySelector('.submit-btn');
const closeDialogBtn = document.querySelector('.close-btn');
const addBookbtn = document.querySelector('.add-btn');
const dialog = document.querySelector('.form-dialog');
const display = document.querySelector('.display');

const myLibrary = [];

function Book(title, author, pages, isRead) {

    if (!new.target) {
        throw Error('Please use the \"new\" keyword to call the constructor');
    }


    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
}


function addBookToLibrary(title, author, pages, isRead) {

    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);

}

addBookbtn.addEventListener('click', (event) => {
    dialog.showModal();
});

closeDialogBtn.addEventListener('click', (event) => {
    dialog.close();
});

form.addEventListener('click', (event) => {

    event.preventDefault();
    
    const title = document.querySelector('#title-input');
    const author = document.querySelector('#author-input');
    const pages = document.querySelector('#pages-input');
    const read = document.querySelector('#isRead-input');

    addBookToLibrary(title, author, pages, read);

});

submitFormBtn.addEventListener('click', () => {

    const div = document.createElement('div');
    const p = document.querySelector('p');


    div.classList = 'book-card';
    p.textContent = `Title: ${title}`;
    p.textContent = `Author: ${author}`;
    p.textContent = `Pages: ${pages}`;

    div.appendChild(p);

    display.appendChild(div);

    form.reset();
    dialog?.close();

});



/**
 * 
 *          LESSONS
 * 
 * Do not put an event listener in a function.
 * event.preventDefault() is used to prevent page reload or refresh when the submit button is pressed to delegate form submission to custom javascript.
 * The .value property is used to read Text from input fields.
 * dialog.showModal() is used to open a modal Box when triggered with an event.
 * dialog?.close() is used to close a modal box after the form is submitted.
 */