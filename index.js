submitData();

document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/gifts")
        .then(resp => resp.json())
        .then(data => {
            const giftList = data
            nameList(giftList)
        })
})

function nameList(giftArray) {

    giftArray.forEach(giftObject => {
        let orderedNames = document.getElementById("giftGetters")
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
    //grab the form
    const addAnotherGift = document.getElementById("submitForm")
    // get the event listener too 
    addAnotherGift.addEventListener('submit', (event) => {
        event.preventDefault();

        const newName = event.target["nameInput"].value
        const newItem = event.target["itemInput"].value
        const newPrice = event.target["priceInput"].value
        const newPicture = event.target["pictureInput"].value
        const newLink = event.target["linkInput"].value
        const newComment = event.target["commentInput"].value

        const newGift = {
            name: newName,
            item: newItem,
            price: newPrice,
            picture: newPicture,
            link: newLink,
            comment: newComment
        }

        renderGift(newGift);

        handleNewData();

        function handleNewData(submitData) {

            //grab the place to put the new data
            let additionalNames = document.getElementById("newGiftAdd")
            additionalNames.innerHTML = "" //empty the from to put it

        }
        fetch("http://localhost:3000/gifts", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(newGift)
        })
            .then(resp => resp.json())
            .then(newEntity => nameList(newEntity))
            .catch(error => console.error(error))

        event.target.reset()
    })
}

function renderGift(giftObject) {
    let nameItem = document.createElement('li')
    nameItem.textContent = giftObject.name
    let orderedNames = document.querySelector('#giftGetters')
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
}
