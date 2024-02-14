const wrapper = document.querySelector("#card-wrapper");
const dark  = document.querySelector("#dark");
const fullModal  = document.querySelector("#full-modal");
const topelement = document.querySelector(".top-element");
const body = document.querySelector("body");

dark.addEventListener("click", ()=>{
    dark.classList.toggle("pl-[30px]");
    topelement.classList.toggle("bg-blue-900");
    body.classList.toggle("bg-blue-950");
    body.classList.toggle("text-white");
    fullModal.classList.toggle("bg-violet-950");
    let ok = true
    localStorage.setItem("dark", JSON.stringify(ok))
})

function deleteQil(element) {
    element.parentNode.removeChild(element);
}

document.addEventListener("DOMContentLoaded", ()=> {
    fetch("https://dummyapi.io/data/v1/post", {
        method: "GET",
        headers: {
            'content-type': "application/json",
            'app-id': "65ccbfadb0e06137825c6ec5",
        }
    })
    .then(response => response.json())
    .then(data =>{
        let dates = data.data;
        dates.forEach(date => {
            wrapper.innerHTML += `
            <div id="cards" class="w-[300px] overflow-hidden h-[350px] border-2 rounded-md">
                <div class="w-[300px] h-[200px] overflow-hidden rounded-md">
                    <img class="w-[300px] h-[300px]" src="${date.image}" alt="logo">
                </div>
                <p class="font-semibold pl-[10px] pt-[10px] font-sans text-[20px]">${date.text}</p>
                <p class="pl-[10px] pt-[5px] font-sans text-[15px] text-stone-600">${date.owner.firstName} ${date.owner.lastName}</p>
                <a class="pl-[10px] pt-[20px] text-blue-600" href="./patch.html?id=${date.id}">View Details</a>
                <button onclick="deleteQil(this.parentNode)" id="del" class="ml-[90px] w-[80px] h-[30px] rounded-md bg-blue-600 text-white">Delete</button>            </div>
            `
        })
    })
})