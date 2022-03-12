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
        console.log(toy)
        var myToy = JSON.stringify(toy)
        const li = document.createElement('li')
        li.innerText = toy.name
        
        
        body.append(li)
      })
    })
}

[0].name