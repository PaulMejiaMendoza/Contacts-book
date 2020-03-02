// Array.sort() //sirve para ordenar arrays
const contacts = getContacts().sort((prev, next) =>  prev.name > next.name); //si el prev.name es mayor que el next.name nos da el resultado del array ordenado alfabeticamente

const contactList = document.getElementsByClassName('contact__list')[0]; //este es el <ul> que esta en el DOM
const cardName = document.getElementsByClassName('cardname')[0];



// con el bucle for pintamos los contactos en la lista
contacts.forEach((contact, index) => {       //vamos a recorrer nuestros contactos
    const name = `${contact.name} ${contact.surname}`;
    const domContact = createContact(name, index);

    contactList.appendChild(domContact);// DOM <li>nombre</li>
});

//vamos a crear un evento click a nuestra lista de contactos
contactList.addEventListener('click', e => {
  if (e.target.dataset.index) {
    cardName.appendChild(createBox(contacts[e.target.dataset.index]));

    return cardName
  }
})

//con esta funcion creamos los elementos del dom para mostrar la letra grande, el nombre y la categoria.
function createBox(contactInfo){
  const box = document.createElement('div');
  const boxLetter = document.createElement('div')
  const boxTitles = document.createElement('div');
  const firstTitle = document.createElement('h1');
  const secondTitle = document.createElement('h2');




  const boxLetterText = document.createTextNode(contactInfo.name[0]);
  boxLetter.appendChild(boxLetterText); //agregamos al div 'box__letter' la primera letra del nombre

  const firstTitleText = document.createTextNode(`${contactInfo.name} ${contactInfo.surname}`);
  firstTitle.appendChild(firstTitleText);  //agregamos al div 'box__titles--h1' el nombre y apellido `${contact.name} ${contact.surname}`

  const secondTitleText = document.createTextNode(contactInfo.group);
  secondTitle.appendChild(secondTitleText); //agregamos al div 'box__titles--h2' el grupo

  box.setAttribute('class', 'box');
  boxLetter.setAttribute('class', 'box__letter');
  boxTitles.setAttribute('class','box__titles'); //con setAttribute le estamos agregando al elemento la clase 'box__titles'en este caso
  firstTitle.setAttribute('class','box__titles--h1');
  secondTitle.setAttribute('class', 'box__titles--h2');



  box.appendChild(boxLetter);
  box.appendChild(boxTitles);
  boxTitles.appendChild(firstTitle);
  boxTitles.appendChild(secondTitle);

  return box
};


// funcion para crear un contacto con una lista desordenada------------------------
function createContact(name, index) {
    const contact = document.createElement('li'); //creamos la lista para pintar el array con el nombre y apellido
    const contactName = document.createTextNode(name);  //aqui vamos a crear el texto con lo que recibamos de name
    contact.dataset.index = index; //añadimos un identificador data.index a cada elemento del array para poder agarrarlos luego y poder disparar el evento click
    contact.appendChild(contactName);

    return contact;
};





function getContacts() { 
    return [
    {
      "name": "Piedad",
      "surname": "Dunfee",
      "email": "piedad.dunfee@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Elsie",
      "surname": "Calvery",
      "email": "elsie.calvery@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Rodger",
      "surname": "Pye",
      "email": "rodger.pye@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Mohammad",
      "surname": "Pye",
      "email": "mohammad.pacheo@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Emmie",
      "surname": "Derryberry",
      "email": "emmie.derryberry@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Lino",
      "surname": "Kottwitz",
      "email": "lino.kottwitz@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Brittney",
      "surname": "Ruddock",
      "email": "brittney.ruddock@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Jaimie",
      "surname": "Human",
      "email": "jaimie.human@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Darleen",
      "surname": "Kesten",
      "email": "darleen.kesten@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Georgie",
      "surname": "Hannold",
      "email": "georgie.hannold@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Doreatha",
      "surname": "Wheeler",
      "email": "doreatha.wheeler@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Christie",
      "surname": "Solum",
      "email": "christie.solum@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Carlita",
      "surname": "Whitmire",
      "email": "carlita.whitmire@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Luciana",
      "surname": "Jobe",
      "email": "luciana.jobe@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Sade",
      "surname": "Selig",
      "email": "sade.selig@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Devon",
      "surname": "Goodridge",
      "email": "devon.goodridge@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Bruna",
      "surname": "Starkes",
      "email": "bruna.starkes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Glynis",
      "surname": "Hudnall",
      "email": "glynis.hudnall@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Anissa",
      "surname": "Leggett",
      "email": "anissa.leggett@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "familia"
    },
    {
      "name": "Moshe",
      "surname": "Moxley",
      "email": "moshe.moxley@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shannon",
      "surname": "Olivieri",
      "email": "shannon.olivieri@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Janel",
      "surname": "Vandever",
      "email": "janel.vandever@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "favoritos"
    },
    {
      "name": "Tashia",
      "surname": "Fontes",
      "email": "tashia.fontes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Merrilee",
      "surname": "Lynde",
      "email": "merrilee.lynde@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Coral",
      "surname": "Eastin",
      "email": "coral.eastin@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Shandi",
      "surname": "Hunsaker",
      "email": "shandi.hunsaker@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    },
    {
      "name": "Wilburn",
      "surname": "Meyer",
      "email": "wilburn.meyer@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Quintin",
      "surname": "Schrom",
      "email": "quintin.schrom@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Claribel",
      "surname": "Sipes",
      "email": "claribel.sipes@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "trabajo"
    },
    {
      "name": "Nevada",
      "surname": "Chappelle",
      "email": "nevada.chappelle@domain.com",
      "country": "españa",
      "phone": "607 123 456",
      "group": "amigos"
    }
  ]};

  