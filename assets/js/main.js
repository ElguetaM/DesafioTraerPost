let getPosts = async function () {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    let datos = await respuesta.json();

    let result = document.getElementById("post-data");
    datos.forEach(function (dato) {
      let li = document.createElement("li");
      li.innerHTML = `
      <b>${dato.title}</b> <br>
      ${dato.body}`;
      result.appendChild(li);
    });
    getPosts(datos);
  } catch (error) {
    console.log(error);
  }
};
