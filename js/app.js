// grap input box
const searchInput = document.querySelector('input');
// instatiate github class
const github = new Github();

// on every keystroke
searchInput.addEventListener('keyup', (e) => {
    // grab text in the search box
    const searchText = e.target.value;
    // make a request if the search box is not empty
    if (searchText !== '') {
        github.getUser(searchText)
        .then(data => {
            // check response message before acting
            if (data.profile.message === 'Not Found') {
                console.log('user not found...');
            } else {
                
                console.log(data.profile)
                const output = `
                <div class="image">
                    <img src="${data.avatar_url}" alt="profile avatar"
                </div>
                <div class="text">
                    <span class="username">USERNAME: ${data.login}</span>
                    <span class="name">NAME: ${data.name}</span>
                    <span class="bio">BIO: ${data.bio}</span>
                    <div class="stats">
                        <span class="followers">FOLLOWERS: <span class="number">${data.followers}</span></span>
                        <span class="following">FOLLOWING: <span class="number">${data.following}</span></span>
                    </div>
                </div>
                `; 
                

            }
        });

    } else {
        // clear UI
        console.log('clear')
    }
});