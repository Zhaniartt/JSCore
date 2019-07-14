function loadRepos() {
    const baseurl = 'https://api.github.com';
    const username = document.querySelector('#username').value;
    fetch(`${baseurl}/users/${username}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((repo) => {
            let liItem = document.createElement('li');
            let aItem = document.createElement('a');
            aItem.href = repo.html_url;
            aItem.textContent = repo.full_name;
            liItem.appendChild(aItem);
            document.querySelector('#repos').appendChild(liItem)
        });
      });
  };