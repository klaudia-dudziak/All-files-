const input = document.querySelector('input');
const ull = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(items => items.textContent.toLowerCase().includes(searchText))
    ull.textContent = "";
    tasks.forEach(items => ull.appendChild(items));
   }
   
   input.addEventListener('input', searchTask)


// // FILTER (I PRZYPOMNIENIE MAP)

// // Filter
// const arr = [34, 219, 109, 2934, 12, 10, 29];

// const oddNumbers = arr.filter(number => number % 2);
// const evenNumbers = arr.filter(number => !(number % 2));
// const numbersBiggerThen100 = arr.filter(number => number > 100);

// // Map
// const double = arr.map(number => number * 2);
// const people = arr.map(number => number + " osób");

// //forEach

// arr.forEach((number, index) => arr[index] = number * 2)

