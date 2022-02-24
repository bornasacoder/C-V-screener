console.log("welcome to cv screener ");
// data is an array of objects which contains information about the candidates.
const data = [
    {
        name: 'Ashish singh',
        age: 20,
        city: 'kannauj',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/med/men/95.jpg'
    },
    {
        name: 'Avnish singh',
        age: 24,
        city: 'kannauj',
        language: 'javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/med/men/78.jpg'
    },

    {
        name: 'Bill gates',
        age: 20,
        city: 'washington dc',
        language: 'python',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/med/men/23.jpg'
    },

    {
        name: 'Arushi singh',
        age: 23,
        city: 'kanpur',
        language: 'CSS',
        framework: 'Bootstrap',
        image: 'https://randomuser.me/api/portraits/med/women/79.jpg'
    },
    {
        name: 'salena gomez',
        age: 20,
        city: 'france',
        language: 'html',
        framework: 'wordpress',
        image: 'https://randomuser.me/api/portraits/med/women/69.jpg'
    }
]
 // cv iterator
 function cviterator(profiles){
     let nextindex = 0;
     return{
         next: function(){
             return nextindex < profiles.length ? 
             {value: profiles[nextindex++], done: false} :
             {done: true}
         }
     };
 }
 const candidates = cviterator(data); 
  nextcv();
 // button listener for next button
 const next = document.getElementById('next');
 next.addEventListener('click',nextcv);
 function nextcv(){
 const currentcandidate = candidates.next().value;
 let image = document.getElementById('image');
 let profile = document.getElementById('profile');
 if(currentcandidate != undefined){
 image.innerHTML = `<img src='${currentcandidate.image}'>`;
 profile.innerHTML = `<ul class="list-group">
 <li class="list-group-item">Name: ${currentcandidate.name}</li>
 <li class="list-group-item">${currentcandidate.age} year old ago</li>
 <li class="list-group-item"> Lives in ${currentcandidate.city}</li>
 <li class="list-group-item">Primarily worked in ${currentcandidate.language}</li>
 <li class="list-group-item"> uses ${currentcandidate.framework}</li> 
</ul>`;
 }else{
     alert("you are all caught up");
     window.location.reload();
 }
}