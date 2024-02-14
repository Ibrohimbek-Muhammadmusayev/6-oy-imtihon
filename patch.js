const petchGrid = document.querySelector(".post-grid");

const baseUrl = "https://dummyapi.io/data/v1/post";
const basekey = "65ccbfadb0e06137825c6ec5";

function apis() {
    const ids = new URLSearchParams(window.location.search);
    let openId = ids.get("id");
    fetch(baseUrl, {
        method: "GET",
        headers: {
            "app-id": basekey,
        }
    })
    .then(response => response.json())
    .then(data => {
        data.data.forEach(date => {
            if(date.id === openId) {
                console.log(date);
                petchGrid.innerHTML = `<div class="w-[700px] h-[100%] m-auto border-2 rounded-md">
                    <img class="w-[700px] h-[700px] p-[20px]" src="${date.image}" alt="images">
                    <div class="p-[20px] flex space-y">
                        <div>
                        <h1 class="font-semibold pl-[10px] pt-[10px] font-sans text-[30px]">${date.text}</h1>
                        <p class="pl-[10px] pt-[5px] font-sans text-[15px] text-stone-600">Published by ${date.owner.firstName} ${date.owner.lastName}</p>
                        <p class="pl-[10px] pt-[5px] font-sans text-[15px] text-stone-600"> ${date.publishDate}</p>
                        <p class="pl-[10px] pt-[5px] font-sans text-[15px] text-stone-600">likes: ${date.likes}</p>
                        <p class="pl-[10px] pt-[5px] font-sans text-[15px] text-stone-600">tags: ${date.tags[0]}</p>
                        </div>
                        <img class="w-[80px] h-[80px] rounded-full overflow-hidden" src="${date.owner.picture}" alt="logo">
                    </div>
                </div>
                `
            } 
        })
    })
}

apis();