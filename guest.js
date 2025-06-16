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
    btn.addEventListener("click", deleteGuest)
    attend.textContent='attending'
    attend.addEventListener("click",attendingGuest)
    p.textContent = `${guest}`

    btn.textContent = 'delete'
    p.appendChild(btn)
    p.appendChild(attend)
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
    if (e.target.textContent === 'attending') {
        e.target.textContent = 'notAttending';
    } else {
        e.target.textContent = 'attending';
    }
}

