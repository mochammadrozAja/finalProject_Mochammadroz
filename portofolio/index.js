var numbers = [];

let i = 1;
while (i <= 9) {
  numbers.push(i);
  i++;
}

let konten_el = document.getElementById("konten-holder");

numbers.forEach(num => {
  konten_el.innerHTML += `
    <div class="card col-md-3">
      <div class="card">
        <img src="./images/port${num}.jpg" class="card-img-top" alt="port${num}">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `
})


function show_website() {
  let filtered_nums = numbers.filter(num => num % 2 !== 0);

  konten_el.innerHTML = "";

  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
    <div class="card col-md-3">
      <div class="card">
        <img src="./images/port${num}.jpg" class="card-img-top" alt="port${num}">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `
  })
}

function show_logos() {
  let filtered_nums = numbers.filter(num => num % 2 == 0);

  konten_el.innerHTML = "";

  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
    <div class="card col-md-3">
      <div class="card">
        <img src="./images/port${num}.jpg" class="card-img-top" alt="port${num}">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `
  })
}

function show_all() {
  let filtered_nums = numbers.filter(num => num !== 0);

  konten_el.innerHTML = "";

  filtered_nums.forEach(num => {
    konten_el.innerHTML += `
    <div class="card col-md-3">
      <div class="card">
        <img src="./images/port${num}.jpg" class="card-img-top" alt="port${num}">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    `
  })
}
