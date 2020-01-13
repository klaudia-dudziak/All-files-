var countryUrl = 'https://restcountries.eu/rest/v1/name/';
var capitalUrl = 'https://restcountries.eu/rest/v2/capital/';
var countriesList = document.getElementById('countries');

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(countryUrl + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

document.getElementById('search').addEventListener('click', searchCountries);

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name + " - " + item.capital;
       
        countriesList.appendChild(liEl);
    });
  }