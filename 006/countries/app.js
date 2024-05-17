
// model
const countries = [{
    title: 'iran',
    population: 85
},
{
    title: 'england',
    population: 13
}

];

// dom nodes
const root = document.getElementById("root")
const input = document.getElementById("newCountry")


// functions
function render(list) {
    // list = list.map(country => country.toUpperCase()).sort()
    root.innerHTML = "";
    for (const item of list) {
        const li = document.createElement("li")
        li.textContent = `${item.title} - ${item.population}m`;
        if(item.population > 50) {
            li.classList.add("red")
        }
        root.appendChild(li)
    }
}

function handleSearch() {
    const value = event.target.value;
    const filterList = countries.filter(country => country.title.startsWith(value))
    render(filterList)
}

function handleAdd() {
    countries.push({
        title: input.value.toUpperCase(),
        population: 100
    });
    render(countries);
    input.value = ""
}

function handleEnter() {
    if(event.code === "Enter")
        handleAdd();
}



// events
render(countries)


