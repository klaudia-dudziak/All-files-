// ///Fabryka telefonów
// function Phone(brand, price, color) {
//     this.brand = brand,
//     this.price = price,
//     this.color = color
// }

// Phone.prototype.printInfo = function() {
//     console.log("The phonr brand is " + this.brand + ", color is " + this.color + ", and price is " + this.price + "zł.")
// }

// var iPhone6S = new Phone("Apple", 2500, "black");
// var GalaxyS6 = new Phone("Samsung", 2000, "grey");
// var One = new Phone("OnePlus", 1500, "white");

// ////Self
// function Button(text){
//     this.text = text || 'Hello'
// }

// Button.prototype = {
//     create: function() {
//         var self = this;
//         this.element = document.createElement('button'); 
//         this.element.innerText = this.text;
//         this.element.addEventListener('click', function() {
//             alert(self.text);
//         });
//         document.body.appendChild(this.element);
//     }
// }

// var btn1 = new Button('Hello');
// var btn2 = new Button('Hello laydyz');

///Tabica KanBan

// var table = {
//     name: 'project',
//     element: <Node element></Node>
// }

// var column = {
//     id: 45678,
//     name: 'todo',
//     element: <Node element></Node>
// }

// var card = {
//     id: '5677ghh',
//     description: 'Create app',
//     color: 'green',
//     element: <Node element></Node>
// }

document.addEventListener('DOMContentLoaded', function() {

//Tworzenie id
function randomString() {
    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    var str = '';
    for (var i = 0; i < 10; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

//Pobieranie szablonu z HTML, parsowanie(zmienianie stringu na obiekt), renderowanie(przetwarzanie danych na wlasciwa forme)
function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');//decydujemy w jaki element zostanie opakowany szablon
  
    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);
  
    return element;
  }
  
  //kolumna
  function Column(name) {
    var self = this;
  
    this.id = randomString();
    this.name = name;
    this.element = generateTemplate('column-template', { name: this.name });
  

  this.element.querySelector('.column').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-delete')) {
      self.removeColumn();
    }
  
    if (event.target.classList.contains('add-card')) {
      self.addCard(new Card(prompt("Enter the name of the card")));
    }
  });
 }

Column.prototype = {
    addCard: function(card) {
      this.element.querySelector('ul').appendChild(card.element);
    },
    removeColumn: function() {
      this.element.parentNode.removeChild(this.element);
    }
};

function Card(description) {
    var self = this;
  
    this.id = randomString();
    this.description = description;
    this.element = generateTemplate('card-template', { description: this.description }, 'li');
  
    this.element.querySelector('.card').addEventListener('click', function (event) {
        event.stopPropagation();
      
        if (event.target.classList.contains('btn-delete')) {
          self.removeCard();
        }
      });

      Card.prototype = {
        removeCard: function() {
            this.element.parentNode.removeChild(this.element);
        }
    }
  }
    var board = {
        name: 'Kanban Board',
        addColumn: function(column) {
          this.element.appendChild(column.element);
          initSortable(column.id); //About this feature we will tell later
        },
        element: document.querySelector('#board .column-container')
    };


function initSortable(id) {
    var el = document.getElementById(id);
    var sortable = Sortable.create(el, {
      group: 'kanban',
      sort: true
    });
  }

  document.querySelector('#board .create-column').addEventListener('click', function() {
    var name = prompt('Enter a column name');
    var column = new Column(name);
    board.addColumn(column);
});


// CREATING COLUMNS
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATING CARDS
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);

});

