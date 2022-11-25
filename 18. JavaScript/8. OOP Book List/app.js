// UI Elements
const message = document.querySelector(".message");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("author");
const bookISBN = document.getElementById("isbn");
const btnSubmit = document.querySelector(".btn");
const bookList = document.getElementById("book-list");

// Calling load all event listeners
loadAllEventListeners();

// Load All Event Listeners
function loadAllEventListeners() {
  // btnSubmit Event listener
  btnSubmit.addEventListener("click", submitBook);
  // deleteBook Event listener
  bookList.addEventListener("click", deleteBook);
}

// Submit Book Event Listener
function submitBook() {
  if (bookTitle.value != "" && bookAuthor.value != "" && bookISBN.value != "") {
    addBook();
    displayMessage(2);
  } else {
    // User input is not accurate
    displayMessage(1);
  }
}

// deleteBook Event Listener
function deleteBook(e) {
  if (e.target.classList.contains("delete-item")) {
    displayMessage(3);
    e.target.parentElement.parentElement.remove();
  }
}

// Add book inside table
function addBook() {
  // Create TR element
  const trBook = document.createElement("tr");
  // Adding data inside element
  trBook.innerHTML = `<td>${bookTitle.value}</td> 
  <td>${bookAuthor.value}</td> 
  <td>${bookISBN.value}</td> 
  <td class="delete-item">
    <a href="#" class="delete-item">x</a>
  </td>`;
  // Appending child
  bookList.appendChild(trBook);
  // Reset input fields
  resetValues();
}

// Function to display message to user
function displayMessage(state) {
  if (state === 1) {
    // Input Error
    message.style.display = "block";
    message.style.background = "red";
    message.textContent = "Please check your input";
    message.style.color = "white";
  }

  if (state === 2) {
    // New Book Added
    message.style.display = "block";
    message.style.background = "green";
    message.textContent = "New Book Added Successfully";
    message.style.color = "white";
  }

  if (state === 3) {
    // Book Deleted
    message.style.display = "block";
    message.style.background = "red";
    message.textContent = "Book Deleted Successfully";
    message.style.color = "white";
  }

  // For hiding Message after 3 seconds
  setTimeout(hideMessage, 3000);
}

// Function to hide message
function hideMessage() {
  message.style.display = "none";
}

// Function to reset input fields
function resetValues() {
  bookTitle.value = bookAuthor.value = bookISBN.value = "";
}
