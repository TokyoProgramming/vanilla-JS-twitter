const postForm = document.querySelector('.user-form');
const postArticle = document.getElementById('inputPost');
const postButton = document.getElementById('user-button');
const btn = document.getElementById('user-button');
const main = document.querySelector('.main');
const postCard = document.querySelector('.postCard');

let posts = [];
let userPostsArray = [];

// getRandomUser Picture
const getRandomUser = async () => {
  const usersRes = await fetch('https://randomuser.me/api/?results=10');
  const usersData = await usersRes.json();

  users = usersData.results;

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
      userPic: `${e.picture.large}`,
    });
  });

  return myArray;
};

// GetRandomPosts
const getRandomPosts = async () => {
  userInfo = await getRandomUser();
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await postsRes.json();

  //   get first 10 posts

  for (let i = 0; i < 10; i++) {
    posts.push(postsData[i]);
  }

  // Make userPosts Array

  for (let i = 0; i < 10; i++) {
    const id = userInfo[i].userId;
    const name = userInfo[i].name;
    const post = posts[i].body;
    const userPic = userInfo[i].userPic;

    userPostsArray.push({
      id,
      name,
      post,
      userPic,
    });
  }

  //   show userPots
  userPostsArray.forEach((e) => {
    // Create PostCardDiv
    const postCardDiv = document.createElement('div');
    postCardDiv.classList.add('post-card');
    // Add Image
    const postImage = document.createElement('img');
    postImage.src = `${e.userPic}`;
    postCardDiv.appendChild(postImage);
    // Create PostInfDiv
    const postInfDiv = document.createElement('div');
    postInfDiv.classList.add('post-inf');
    // create user-inf div
    const userInfDiv = document.createElement('div');
    userInfDiv.classList.add('user-inf');
    // create h3
    const postInfH3 = document.createElement('h3');
    postInfH3.classList.add('user-name');
    // h3 InnerText UserName
    postInfH3.innerText = `${e.name}`;
    // create h5
    const postInfH5 = document.createElement('h5');
    postInfH5.classList.add('user-id');
    // h5 InnerText UserID
    postInfH5.innerText = `${e.id}`;

    userInfDiv.appendChild(postInfH3);
    userInfDiv.appendChild(postInfH5);
    postInfDiv.appendChild(userInfDiv);

    // Create Post Div
    const postInfPostDiv = document.createElement('div');
    postInfPostDiv.classList.add('post');
    // Create Post P
    const postInfP = document.createElement('p');
    // post InnerText Post
    postInfP.innerText = `${e.post}`;
    // Append PostInfP to post Div
    postInfPostDiv.appendChild(postInfP);

    const postInfPostIconsDiv = document.createElement('div');
    postInfPostIconsDiv.classList.add('post-icons');
    postInfPostIconsDiv.innerHTML = `<i class="far fa-comment"></i>
	<i class="fas fa-redo-alt"></i>
	<i class="far fa-heart"></i>
	<i class="far fa-save"></i>`;

    postInfPostDiv.appendChild(postInfPostIconsDiv);

    postInfDiv.appendChild(postInfPostDiv);
    postCardDiv.appendChild(postInfDiv);

    postCard.appendChild(postCardDiv);
  });
};

// Post Article
const postBtn = (e) => {
  e.preventDefault();
  console.log(userPostsArray);

  const article = postArticle.value;

  postArticle.value = '';
  const id = 'sampleId';
  const name = 'sampleUserName';
  const post = article;
  const userPic = `https://randomuser.me/api/portraits/men/22.jpg`;

  //   Write HTML
  // Create PostCardDiv
  const postCardDiv = document.createElement('div');
  postCardDiv.classList.add('post-card');
  // Add Image
  const postImage = document.createElement('img');
  postImage.src = `${userPic}`;
  postCardDiv.appendChild(postImage);
  // Create PostInfDiv
  const postInfDiv = document.createElement('div');
  postInfDiv.classList.add('post-inf');
  // create user-inf div
  const userInfDiv = document.createElement('div');
  userInfDiv.classList.add('user-inf');
  // create h3
  const postInfH3 = document.createElement('h3');
  postInfH3.classList.add('user-name');
  // h3 InnerText UserName
  postInfH3.innerText = `${name}`;
  // create h5
  const postInfH5 = document.createElement('h5');
  postInfH5.classList.add('user-id');
  // h5 InnerText UserID
  postInfH5.innerText = `${id}`;

  userInfDiv.appendChild(postInfH3);
  userInfDiv.appendChild(postInfH5);
  postInfDiv.appendChild(userInfDiv);

  // Create Post Div
  const postInfPostDiv = document.createElement('div');
  postInfPostDiv.classList.add('post');
  // Create Post P
  const postInfP = document.createElement('p');
  // post InnerText Post
  postInfP.innerText = `${post}`;
  // Append PostInfP to post Div
  postInfPostDiv.appendChild(postInfP);

  const postInfPostIconsDiv = document.createElement('div');
  postInfPostIconsDiv.classList.add('post-icons');
  postInfPostIconsDiv.innerHTML = `<i class="far fa-comment"></i>
	 <i class="fas fa-redo-alt"></i>
	 <i class="far fa-heart"></i>
	 <i class="far fa-save"></i>`;

  postInfPostDiv.appendChild(postInfPostIconsDiv);

  postInfDiv.appendChild(postInfPostDiv);
  postCardDiv.appendChild(postInfDiv);

  postCard.prepend(postCardDiv);

  // END HTML

  (createdPost = {
    id,
    name,
    post,
    userPic,
  }),
    userPostsArray.unshift(createdPost);
  console.log(userPostsArray);
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
