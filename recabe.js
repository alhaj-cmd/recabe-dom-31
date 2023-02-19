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

