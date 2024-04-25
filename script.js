const userName = document.getElementById('username');
const buttons = document.getElementById('getDetaile');
const profile = document.getElementById('profile');
const repo = document.getElementById('repo');

buttons.addEventListener('click',async()=>{
    const username= userName.value;
    const API_URL = `https://api.github.com/users/${username}`;
    const res= await fetch(API_URL);
        const data = await res.json();
       // console.log(data); 
        getprofile(data);
        gatRepo(username);
});

function getprofile(data){
    profile.innerHTML = `
    <div class="card">
    <div class="card-img">
    <img src="${data.avatar_url}" alt="${data.name}">
    </div>
    <div class="card-body">
    <div class="card-title">${data.name}</div>
    <div class="Card-subHeading">${data.login}</div>
    <div class="card-text">
    <p>${data.bio}</p>
    <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </svg> ${data.followers} Followers . ${data.following} Following</p>
    <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
  </svg> ${data.location}</p>
    <button>
    <a href=${data.html_url} target="_Black"> Visit profile </a>
    </button>
    </div>
    </div>
    </div>
    `;
}

async function gatRepo(username){
//console.log(username);
const result = await fetch(`https://api.github.com/users/${username}/repos`);
const repositry = await result.json();
for(let i= 0;i< repositry.length;i++){
    repo.innerHTML += `
    <div class="card">
    <div class="card-body">
    <div class="card-title">${repositry[i].name}</div>
    <div class="Card-subHeading">${repositry[i].language}</div>
    <div class="card-text">
    <button>
    <a href=${repositry[i].html_url} target="_Black"> Visit repositry </a>
    </button>
    </div>
    <div>
    </div>
    `;
}
//console.log(repositry);
}
