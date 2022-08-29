
class Github {
    // construct api secrets
    // this isn't an ideal way - but hey...
    constructor() {
        this.CLIENTID = 'a487243b50dcc92b49ea';
        this.CLIENTSECRET = '34c32bd7c5326cd38d3f6a0da28c7fc6f0f32f5b';
    }

    // get user method makes req for given username
    // returns an object of not only profile, but also profile repos
    async getUser(user) {
        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.CLIENTID}&client_secret=${this.CLIENTSECRET}`);
        const userProfileData = await userProfile.json();

        return {
            profile: userProfileData
        }

        // const userRepos = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.CLIENTID}&client_secret=${this.CLIENTSECRET}`)
    } 
}
