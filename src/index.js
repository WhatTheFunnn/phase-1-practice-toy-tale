let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  getToys()
});

function getToys() {
  let toyList = "http://localhost:3000/toys"
  const body = document.querySelector('#toy-collection')

  fetch(toyList)
    .then(response => response.json())
    .then(toys => {
      toys.forEach(toy => {
        const div = document.createElement('div')
        div.className = "card"
        const h2 = document.createElement("h2")
        const img = document.createElement("IMG")
        img.className = "toy-avatar"
        const p = document.createElement("p")
        const btn = document.createElement("button")
        btn.className = "like-btn"
        btn.id = "toy_id"
        body.appendChild(div)
        div.appendChild(h2)
        div.appendChild(img)
        div.appendChild(p)
        div.appendChild(btn)
        h2.innerText = `${toy.name}`
        p.innerText = `${toy.likes} Likes`
        btn.innerText = "Like ❤️"
        img.src = `${toy.image}`

      })
    })
}


function newToy() {
  const data = document.getElementsByClassName("input-text")
  const name = data.name
  console.log(data.name)
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error', error)

    })
}
