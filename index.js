document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/gifts")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            const giftList = data
            // console.log(giftList)
            // giftList.forEach(displayGiftList);
            nameList(giftList)
        })
})

function nameList(giftArray) {
    let orderedNames = document.getElementById("giftGetters")
    orderedNames.innerHTML = ""

    giftArray.forEach(giftObject => {
        let nameItem = document.createElement('li')
        nameItem.textContent = giftObject.name
        orderedNames.append(nameItem)

        nameItem.addEventListener('click', (e) => {
            const { item, name, price, picture, link, comment } = giftObject

            const itemGift = document.querySelector("#itemGift")
            const nameGift = document.querySelector("#nameGift")
            const priceGift = document.querySelector("#priceGift")
            const pictureGift = document.querySelector("#mainGift")
            const linkGift = document.querySelector("#linkGift")
            const commentGift = document.querySelector("#commentGift")

            itemGift.innerText = giftObject.item
            nameGift.textContent = giftObject.name
            priceGift.textContent = giftObject.price
            pictureGift.src = giftObject.picture
            linkGift.href = giftObject.link
            commentGift.textContent = giftObject.comment
        })
    })
}

function submitData() {
    document.querySelector('#submitForm').addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();

        const idkTest = document.querySelector("#comment").event.target.value;

        let output = document.querySelector("newGiftAdd")

        idkTest.textContent = output

        console.log(event)
    })
}

submitData();

function testagain() {

    const helpME = document.querySelector('#submitForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const giftData = {
            name: event.target.nameInput.value,
            item: event.target.artistInput.value,
            price: event.target.durationInput.value,
            picture: event.target.youtubeLinkInput.value,
            link: event.target.nameInput.value,
            comment: event.target.nameInput.value,
        }
        nameList(giftData)
            .then((savedSong) => {
                renderSong(savedSong);
                event.target.reset();
            })
    })
}