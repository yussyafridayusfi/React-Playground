let createBlog = (title, body) => {

  if (!title) { // test
    throw new Error('A title is required')
  }


  if (!body) {
    throw new Error("A title is required");
  }

  return alert(`${title} - ${body}`);

}

createBlog("new","thiss")
