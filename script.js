let inputName = document.querySelector("#inputName")
let inputSurname = document.querySelector("#inputSurname")
let selectItem = document.querySelector("#selectItem")
let addButton = document.querySelector("#addButton")
let deleteItem = document.querySelector("#delete")
let data =
 [
  { name: "Fuad", surname: "Süleymanlı", id: 0,  isHere: 1 },
  { name: "Cavid", surname: "Ağayev", id: 1, isHere: 2 },
  { name: "Mehran", surname: "Kəbirtəlai", id: 2, isHere: 0 },
  { name: "Kamal", surname: "Musayev", id: 3, isHere: 0 },
  { name: "Kənan", surname: "Həsənzadə", id: 4, isHere: 1 },
  { name: "Zalı", surname: "Nəcəfov", id: 5, isHere: 2 },
  { name: "Aygül", surname: "Abbaszadə", id: 6, isHere: 2 },
  { name: "Bənövşə", surname: "Məhərrəmova", id: 7, isHere: 1 },
  { name: "Tərlan", surname: "Zeynalov", id: 8, isHere: 0 },
];

let mainData = [];
if(!localStorage.getItem("users")){
  localStorage.setItem("users", JSON.stringify(data))
}
else{
  mainData = JSON.parse(localStorage.getItem("users"))
}
let tBody = document.querySelector("tbody")
console.log(deleteItem)
addButton.addEventListener("click", addItem)
function addItem(){
  tBody.innerHTML = ""
  let newObject = {
    name: "",
    surname: "",
    isHere: ""
  }
  mainData.unshift(newObject)
    newObject.name = inputName.value
    newObject.surname =  inputSurname.value
    newObject.isHere = selectItem.value
    tableItem()
console.log(mainData)
}
function userDelete(e){
  e.parentElement.parentElement.remove()
  }



 function tableItem(){
  for (let i=0; i<mainData.length; i++){
    let statuses = "" 
    if(mainData[i].isHere === 0){
      statuses = "Yoxdur"
    }else if(mainData[i].isHere === 1){
      statuses = "Yoldadir"
    }else{
      statuses = "Buradadir"
    }
    if(mainData[i].isHere===0){
      color = "red"
    }else if(mainData[i].isHere===1){
      color = "yellow"
    }else{
      color = "green"
    }
    tBody.innerHTML +=
    `<tr>
    <td>${mainData[i].name}</td>
    <td>${mainData[i].surname}</td>
    <td><span class="round ${color}"></span>${statuses}</td>
    <td><svg onclick="userDelete(this)" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2307_937)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8622 4.60893H0.132812V3.27246H26.8622V4.60893Z" fill="#DE5462"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.80859 3.50435L4.1407 3.39648L5.97037 25.9922H20.7214L22.8565 3.54301L24.1869 3.66955L21.9368 27.3286H4.73775L2.80859 3.50435Z" fill="#DE5462"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8242 23.3194V7.28174H14.1607V23.3194H12.8242Z" fill="#DE5462"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.81641 23.3194V7.28174H10.1529V23.3194H8.81641Z" fill="#DE5462"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8359 23.3194V7.28174H18.1724V23.3194H16.8359Z" fill="#DE5462"/>
        <path d="M11.4961 0.599609H15.5055V1.93608H11.4961V0.599609Z" fill="#DE5462"/>
        </g>
        <defs>
        <clipPath id="clip0_2307_937">
        <rect width="26.7294" height="26.7294" fill="white" transform="translate(0.132812 0.599609)"/>
        </clipPath>
        </defs>
        </svg></td></td>
  </tr>`
}}
tableItem();