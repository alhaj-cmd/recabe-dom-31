document.getElementById('apply').addEventListener('click',function(){
const friends = document.getElementsByClassName('friends');
for(const friend of friends){
    console.log(friend)
    friend.style.backgroundColor = 'lightblue';
}
// console.log('click')

const friend =document.getElementById('third-friend');
friend.style.textAlign = 'center';


})
document.getElementById('btn-apply').addEventListener('click',function(){
    const friendList = document.getElementById('frined-list');
    const list = document.createElement('div');
    list.classList.add('friends')
    list.innerHTML =`
    <h3 class=friend-name>Friends</h3>
    <p>Frineds List</p>
    `
    friendList.appendChild(list);
})
