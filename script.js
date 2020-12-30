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

    const str1 = '@';
    const str2 = str1.concat(splitId[0]);
    // console.log(str2);
    // console.log(e.login.username);

    // Create Json objects
    myArray = [];
    users.forEach((e) => {
      const usersId = e.login.uuid;
      const splitId = usersId.split('-');

      const str1 = '@';
      const str2 = str1.concat(splitId[0]);
      myArray.push({
        userId: `${str2}`,
        name: `${e.login.username}`,
      });
    });
  });
  //   console.log(myArray);
  return myArray;
};

// GetRandomPosts
const getRandomPosts = async () => {
  userInfo = await getRandomUser();
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await postsRes.json();

  //   get first 10 posts
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(postsData[i]);
  }

  // Make userPosts Array
  //   console.log(userInfo);

  //   console.log(posts);
  let arr3 = [];

  for (let i = 0; i < 10; i++) {
    const id = userInfo[i].userId;
    const name = userInfo[i].name;
    const title = posts[i].title;

    arr3.push({
      id,
      name,
      title,
    });
  }
  console.log(arr3);
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
