document.addEventListener("DOMContentLoaded", function () {
    fetch("/db.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)

        })
})