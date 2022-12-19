// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return data;
// }

async function getUsersfromsql() {
  const res = await fetch(`http://localhost:5003/users`);
  const data = await res.json();
  return data;
}

async function getUser(userName, pass) {
  let user;

  return await getUsersfromsql().then((users) => {
    user = users.find(
      (user) =>
        user.userName == userName && pass == user.password
    );
    if (user) {
      console.log("secses");
      return user;
    } else alert("משתמש לא נמצא אנא נסה שוב");
  });
}

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   return data;
// }
async function getTodosfromsql() {
  const res = await fetch("http://localhost:5003/todos");
  const data = await res.json();
  return data;
}

function gettodo(userid) {
  let user;

  return  getTodosfromsql().then((users) => {
    user = users.filter((user) => user.userId === userid);
    if (user) {
      localStorage.setItem("todos", JSON.stringify(user));
      return user;
    } else {
      alert("דחילק");
    }
  });
}

// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// }

async function getPostsfromsql() {
  const res = await fetch("http://localhost:5003/posts");
  const data = await res.json();
  return data;
}

function getpost(userid) {
  let user;
  return getPostsfromsql().then((users) => {
    user = users.filter((user) => user.userID === userid);
    if (user) {
      return user;
    } else {
      alert("דחילק");
    }
  });
}



// async function getAlboms() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/albums");
//   const data = await res.json();
//   return data;
// }
async function getAlbomsfromsql() {
  const res = await fetch("http://localhost:5003/alboms");
  const data = await res.json();
  return data;
}

function getAlbom(userid) {
  let user;
  return getAlbomsfromsql().then((users) => {
    user = users.filter((user) => user.userID === userid);
    if (user) {
      // console.log(user);
      return user;
    } else {
      alert("דחילק");
    }
  });
}

// async function getPhotos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const data = await res.json();
//   return data;
// }

async function getPhotosfromsql() {
  const res = await fetch("http://localhost:5003/photos");
  const data = await res.json();
  return data;
}

function getPhoto(userid) {
  let user;
  return getPhotosfromsql().then((users) => {
    user = users.filter((user) => user.userID === userid);
    if (user) {
      // console.log(user);
      return user;
    } else {
      alert("דחילק");
    }
  });
}

export { getPhoto };
export { getAlbom };
export { getpost };
export { gettodo };
export default getUser;
