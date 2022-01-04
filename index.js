// constant variables


document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/gifts")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            giftList = data
            console.log(giftList)
            giftList.forEach(displayGiftList);
        })
})

//this should ultimately show the gift page, upon being clicked from the list of names.
function displayGiftList(giftPic) {

    // const span = document.createElement('span')
    // giftBar.append(span)

    // span.textContent = giftPic.name;

    const { item, name, price, picture, link, comment } = giftPic

    let giftImage = document.getElementById("mainGift");
    giftImage.src = giftPic.picture;

    let giftName = document.getElementById("giftGetters");
    giftName.textContent = giftPic.name;
}
