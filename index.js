// constant variables


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

//this should ultimately show the gift page, upon being clicked from the list of names.
// function displayGiftList(giftPic) {
//     // const span = document.createElement('span')
//     // giftBar.append(span)
//     // span.textContent = giftPic.name;

//     let giftImage = document.getElementById("mainGift");
//     giftImage.src = giftPic.picture;
//     // const giftDisplayCard = document.getElementById("test12")
//     // const giftCard = document.createElement('li')
//     // giftCard.append(li);
//     // console.log(giftDisplayCard);
//     giftImage.addEventListener("click", (e) => {

//         const itemGift = document.querySelector("#itemGift")
//         const nameGift = document.querySelector("#nameGift")
//         const priceGift = document.querySelector("#priceGift")
//         const pictureGift = document.querySelector("#pictureGift")
//         const linkGift = document.querySelector("#linkGift")
//         const commentGift = document.querySelector("#commentGift")

//         itemGift.innerText = item
//         nameGift.textContent = name
//         priceGift.textContent = giftPic.price
//         pictureGift.src = giftPic.image
//         linkGift.innerText = giftPic.link
//         commentGift.innerText = giftPic.comment
//     })
//     // let giftName = document.getElementById("giftGetters");
//     // giftName.textContent = giftPic.name;
// }

function nameList(giftArray) {
    let orderedNames = document.getElementById("giftGetters")
    orderedNames.innerHTML = ""

    giftArray.forEach(giftObject => {
        let nameItem = document.createElement('li')
        nameItem.textContent = giftObject.name
        orderedNames.append(nameItem)

        // console.log(giftObject)

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

