// script.js

// Массив для хранения списка книг
let books = [];

// Функция для отображения списка книг
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Очищаем список

    // Добавляем каждую книгу в список
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        
        // Кнопка для удаления книги
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteBook(index);
        
        li.appendChild(deleteBtn);
        bookList.appendChild(li);
    });
}

// Функция для добавления новой книги
function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const author = authorInput.value;

    if (title && author) {
        // Добавляем новую книгу в массив
        books.push({ title, author });
        
        // Очищаем поля ввода
        titleInput.value = '';
        authorInput.value = '';
        
        // Обновляем список книг
        displayBooks();
    }
}

// Функция для удаления книги
function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// Добавляем обработчик событий на кнопку добавления книги
document.getElementById('addBookBtn').addEventListener('click', addBook);

// Начальная отрисовка списка книг (если массив не пустой)
displayBooks();