document.addEventListener("DOMContentLoaded", () =>{});

const form = document.querySelector('form')
document.addEventListener("submit",(e)=>{
    e.preventDefault()
    addGuest(e.target.guest.value)
    form.reset()


})
let guestCounter=0
function addGuest(guest){
    guestCounter++
    const p = document.createElement("p")
    const btn = document.createElement("button")
    const attend= document.createElement("button")
    const edit=document.createElement("button")
    btn.addEventListener("click", deleteGuest)
    attend.addEventListener("click",attendingGuest)
    edit.addEventListener("click",editing)
    attend.textContent='Attending'

    p.textContent = `${guest}`
    edit.textContent="Edit"
    btn.textContent = 'Delete'
    p.appendChild(btn)
    p.appendChild(attend)
    p.appendChild(edit)
    // document.getElementById('guest_list').appendChild(p)


//    const maxGuestList = document.getElementById('guest_list');

   if(guestCounter<=10){
     document.getElementById('guest_list').appendChild(p)
   }
   else{
    alert("guest list full")
   }
    // if (maxGuestList.children.length >= 10) {
    // alert("Maximum of 10 guests allowed.");
    // return;
    // }

}
function deleteGuest(e){

    e.target.parentNode.remove()
}
function attendingGuest(e){
    if (e.target.textContent === 'Attending') {
        e.target.textContent = 'Not Attending';
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.textContent = 'Attending';
        e.target.style.backgroundColor = 'green';
    }
}
function editing(e){
    const p = e.target.parentNode;
    let textNode = null;
    for (let node of p.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            textNode = node;
            break;
        }
    }
    const currentName = textNode ? textNode.nodeValue.trim() : "";
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentName;
    p.insertBefore(input, textNode);

    if (textNode) {
        p.removeChild(textNode);
    }
    input.focus();

    input.addEventListener("blur", () => {
        const newName = input.value.trim();
        const newTextNode = document.createTextNode(newName ? newName : currentName);
        p.insertBefore(newTextNode, input);
        p.removeChild(input);
    });
}