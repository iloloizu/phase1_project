submitData();
const baseURL = "http://localhost:3000/gifts"

document.addEventListener("DOMContentLoaded", function () {
    fetch(baseURL)
        .then(resp => resp.json())
        .then(data => {
            const giftList = data
            nameList(giftList)
        })
})

// let purchaseGift = document.createElement('button')
// purchaseGift.innerText = 'Purchase'
// let realButton = document.getElementById('linkGift')
// realButton.append(purchaseGift)

function nameList(giftArray) {

    giftArray.forEach(giftObject => {
        let orderedNames = document.getElementById("giftGetters")
        let nameItem = document.createElement('li')
        nameItem.textContent = giftObject.name
        orderedNames.append(nameItem)

        //tried to get deleted Button for each person & their gift
        // const deleteButton = document.createElement('button').addEventListener("click", (event) => {
        //     const gone = event.target
        //     gone.innerHTML = ''
        // })
        // deleteButton.innerText = 'Delete'
        // orderedNames.append(deleteButton)

        //trying to create a purchase button for each item

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
            item: newItem,
            name: newName,
            price: newPrice,
            picture: newPicture,
            link: newLink,
            comment: newComment
        }

        renderGift(newGift);

        fetch("http://localhost:3000/gifts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGift),
        })
            .then((r) => r.json())
            .then((giftObj) => console.log(giftObj));


        // .catch(error => console.error(error))
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

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//testing

//Attempted randomizer to randomize the gift that was being displayed
// const randomizer = document.querySelector('button').addEventListener('click', (e) => {
//     console.log('hello')
//     fetch(baseURL)
//         .then(resp => resp.json())
//         .then(data => {
//             const randomInt = getRandomInt(9);
//             const character = data[randomInt];
//             displayCharacter(character);
//         })
// })

// document.querySelector('#finalsubmit').addEventListener('click', (e) => console.log('hello'))
