

class UI {
    constructor() {
        this.body = document.querySelector('.output');
    }
    
    display = (data) => {
        const output = `
            <div class="profile">
                <div class="image">
                    <img src="${data.avatar_url}" alt="profile avatar">
                </div>
                <div class="text">
                    <span class="username">USERNAME: ${data.login}</span>
                    <span class="name">NAME: ${data.name}</span>
                    <span class="bio">BIO: ${data.bio}</span>
                    <div class="stats">
                        <span class="followers">FOLLOWERS: <span class="number">${data.followers}</span></span>
                        <span class="following">FOLLOWING: <span class="number"${data.following}</span></span>
                    </div>
                </div>
            </div>
                `;
        
        // populate the ui
        setTimeout(() => {
            this.body.innerHTML += output;
        }, 1000);
    }
}