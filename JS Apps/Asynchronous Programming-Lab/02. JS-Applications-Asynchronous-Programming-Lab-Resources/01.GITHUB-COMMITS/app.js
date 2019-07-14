function loadCommits() {
    // Try it with Fetch API
   let username = document.querySelector('#username').value;
   let repos = document.querySelector('#repo').value;
   let url = `https://api.github.com/repos/${username}/${repos}/commits`
   fetch(url)
            .then(res =>{
                if(res.ok) {
                    return res.json();
                  } else {
                    let li = document.createElement('li');
                    li.textContent = `Error: ${res.status} ${res.statusText}`
                    document.querySelector('#commits').appendChild(li);
                    throw Error(`Request rejected with status ${response.status}`);
                  }
                })
            .then(data=> {
                document.querySelector('#commits').innerHTML = '';
                let githubData = Object.values(data);
                githubData.forEach(x=> {
                    let temp = x.commit;
                    let li = document.createElement('li');
                    li.textContent = `${temp.author.name}: ${temp.message}`;
                    document.querySelector('#commits').appendChild(li);
                });
            })
            .catch(err=> console.error(err));
            
}