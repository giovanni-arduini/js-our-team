const cardContainerElement = document.getElementById("card-container");

function createCard(name, role, email, img) {
  const col = document.createElement("div");
  col.className = "col";
  const card = document.createElement("div");
  card.className = "card mb-3 bg-black text-light";

  const cardRow = document.createElement("div");
  cardRow.className = "row no-gutters";

  const cardImg = document.createElement("div");
  cardImg.className = "col-4";
  cardImg.innerHTML = `<img src="${img}" class="card-img-center" style="width: 100%" alt="..." />`;

  const cardColBody = document.createElement("div");
  cardColBody.classList = "card-body col-8";
  cardColBody.innerHTML = `
                  <h5 class="card-title member-name">${name}</h5>
                  <p class="card-text member-role">${role}</p>
                  <p class="card-text member-email text-info">
                    ${email}
                  </p>
                </div>`;

  cardContainerElement.appendChild(col);
  col.appendChild(card);
  card.appendChild(cardRow);
  cardRow.appendChild(cardImg);
  cardRow.appendChild(cardColBody);
}

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

function refreshTeamCards() {
  for (let i = 0; i < teamMembers.length; i++) {
    const currentMember = teamMembers[i];
    const { name, role, email, img } = currentMember;
    createCard(name, role, email, img);
  }
}

refreshTeamCards();
