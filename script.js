const postForm = document.querySelector('.user-form');
const postArticle = document.getElementById('inputPost');
const postButton = document.getElementById('user-button');
const btn = document.getElementById('user-button');

let posts = [];

// getRandomUser Picture
const getRandomUser = async () => {
  const usersRes = await fetch('https://randomuser.me/api/?results=10');
  const usersData = await usersRes.json();

  users = usersData.results;
  users.forEach((e) => {
    // console.log(e.login.username);
    const usersId = e.login.uuid;
    const splitId = usersId.split('-');
    // console.log(splitId[0]);
    const str1 = '@';
    const str2 = str1.concat(splitId[0]);
    console.log(str2);
    console.log(e.login.username);

    // Create Json objects
    let users = [];
  });
};

// GetRandomPosts
const getRandomPosts = async () => {
  getRandomUser();
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await postsRes.json();

  //   get first 10 posts
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(postsData[i]);
  }
  console.log(posts);

  // Make userPosts Array
};

// Post Article
const postBtn = (e) => {
  e.preventDefault();
  const article = postArticle.value;

  posts.push(article);
  console.log(article);
  postArticle.value = '';
};

// Change Btn to Active
const activeBtn = () => {
  postArticle.value.length !== 0
    ? btn.classList.add('active')
    : btn.classList.remove('active');
};

// Event Listener
// document.addEventListener('DOMContentLoaded', getRandomUser);
document.addEventListener('DOMContentLoaded', getRandomPosts);

postButton.addEventListener('click', postBtn);
postArticle.addEventListener('input', activeBtn);
