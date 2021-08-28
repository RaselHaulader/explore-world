
const loadCountry = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(response => response.json())
        .then(data => setDisplay(data))
};
const setDisplay = country => {
    console.log(country)
    const container = document.getElementById('country-body');
    country.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('row', 'mb-3', 'border','border-1', 'p-2', 'rounded-3');
        div.innerHTML = `
    <div class="col-12 col-md-7 d-flex flex-column align-items-center">
        <h1 class="mb-4 country-name text-center">${country.name}</h1>
        <img width="200px" src="${country.flag}" alt="">
    </div>
    <div class="col-12 col-md-5">
        <p class="text-center">${country.altSpellings[1] ? country.altSpellings[1] : ''}</p>
        <p>Capital: ${country.capital}</p>
        <p>population: ${country.population}</p>
        <p>Area: ${country.area} sqrKm</p>
        <p>Region: ${country.region}</p>
        <p>Language: ${country.languages[0].name}</p>
        <p>Currency: ${country.currencies[0].name}</p>
    </div>
    `
        container.appendChild(div);
    });
};
loadCountry();
const searchCountry = () => {
    const inputValue = document.getElementById('input-field').value;
    const countries = document.querySelectorAll('.country-name');
    for (const country of countries) {
        country.parentNode.parentNode.style.display = 'flex'
        if (!country.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
            country.parentNode.parentNode.style.display = 'none';
        };
    };
}