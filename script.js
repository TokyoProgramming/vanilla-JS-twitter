const postForm = document.querySelector('.user-form');
const postArticle = document.getElementById('inputPost');
const postButton = document.getElementById('user-button');
const btn = document.getElementById('user-button');

let posts = [];

// Post Article
const postBtn = (e) => {
  e.preventDefault();
  const article = postArticle.value;

  posts.push(article);
};

// Change Btn to Active
const activeBtn = () => {
  postArticle.value.length !== 0
    ? btn.classList.add('active')
    : btn.classList.remove('active');
};

// Event Listener
postButton.addEventListener('click', postBtn);
postArticle.addEventListener('input', activeBtn);
