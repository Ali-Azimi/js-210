


const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.addEventListener("load", getData);
request.send();



function getData() {
    const data = JSON.parse(request.responseText);
    render(data);
}




function render(list) {
    const template = list.map(post => {
        return `<div class="post">
                    <span>post id: ${post.id}</span>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>`
    }).join("");

    document.getElementById("root").innerHTML = template;
}
