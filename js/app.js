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
                // const output = `
                // <div class="image">
                //     <img src="${}" alt="profile avatar"
                // </div>
                // `; 
                

            }
        });

    } else {
        // clear UI
        console.log('clear')
    }
});