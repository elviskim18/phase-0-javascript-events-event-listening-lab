function beNotified() {
    alert("I'm still the man!");
}

function addingEventListener() {
    const input = document.getElementById("input")
    input.addEventListener('click', beNotified);

}

