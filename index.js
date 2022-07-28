

const posts = [
  {
    name: "Roxanne",
    username: "roxxy1994",
    location: "Zundert, Netherlands",
    avatar: "images/avatars/avatar-1.jpg",
    post: "images/posts/post-1.jpg",
    comment: "Had a lot of fun at the museum today",
    likes: 64,
  },
  {
    name: "Tanya",
    username: "ty2000",
    location: "Ornans, France",
    avatar: "images/avatars/avatar-2.jpg",
    post: "images/posts/post-2.jpg",
    comment: "Beautiful sunset on the way home tonight",
    likes: 132,
  },
  {
    name: "Joseph",
    username: "jd1735",
    location: "Saint Petersburg, Russia",
    avatar: "images/avatars/avatar-3.jpg",
    post: "images/posts/post-3.jpg",
    comment: "Nights like these make me love this city.",
    likes: 152,
  },
  {
    name: "Josh",
    username: "frogman420",
    location: "Paris, France",
    avatar: "images/avatars/avatar-4.jpg",
    post: "images/posts/post-4.jpg",
    comment: "Finally made it out to Paris!",
    likes: 152,
  },
  {
    name: "Melanie",
    username: "melaniem24",
    location: "Munich, Germany",
    avatar: "images/avatars/avatar-5.jpg",
    post: "images/posts/post-5.jpg",
    comment: "Exploring the city today",
    likes: 224,
  },
];

//     name: "Melanie",
//     username: "melaniem24",
//     location: "Paris, France",
//     avatar: "images/avatars/avatar-3.jpg",
//     post: "images/posts/post-3.jpg",
//     comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
//     likes: 152,
//   },

const avatarEl = document.getElementById("postAvatar");
const nameEl = document.getElementById("postName")
const locationEl = document.getElementById("postLocation");
const imageEl = document.getElementById("postImage");
const usernameEl = document.getElementById("postUsername");
const captionEl = document.getElementById("postCaption");
const likesEl = document.getElementById("postLikeCount");


const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", ()=> {
    renderPost(posts.shift());
})


function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}


function renderPost(post) {
  avatarEl.src = post.avatar;
  nameEl.textContent = post.name;
  locationEl.textContent = post.location;
  imageEl.src = post.post;
  usernameEl.textContent = post.username;
  captionEl.textContent = post.comment;
  likesEl.textContent = `${post.likes} likes`;
}



renderPost(posts.shift());