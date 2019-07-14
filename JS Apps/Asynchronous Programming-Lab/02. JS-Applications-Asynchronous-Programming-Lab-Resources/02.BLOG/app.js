function attachEvents() {
    let url =  `https://baas.kinvey.com/appdata/kid_BkSk0DIbr/`
    const username = 'Peter'
    const password = 'p'
    const BASE_64 = btoa(username + ":" + password);
     const AUTH = {'Authorization': `Basic ` + BASE_64};
    const SELECT = document.querySelector('#posts');
    const TITLE = document.querySelector('#post-title');
    const BODY = document.querySelector('#post-body');
    const COMMENTS = document.querySelector('#post-comments');
      document.querySelector('#btnLoadPosts').addEventListener('click',loadPosts);
      document.querySelector('#btnViewPost').addEventListener('click',viewPosts);
      function loadPosts(){
          fetch(url+'posts',
          {method:'GET',
          headers:AUTH
        }).then(res=>  res.json()).then(data=> {
            data.forEach(x=> {
                let option = document.createElement('option');
                option.value = x._id;
                option.textContent = x.title;
                option.setAttribute('body',x.body);
                SELECT.appendChild(option);
            })
        });
      }
      function viewPosts(){
        BODY.innerHTML = ''
        COMMENTS.innerHTML = ''
          let value = SELECT.options[SELECT.selectedIndex].textContent;
          let info =  SELECT.options[SELECT.selectedIndex];
          TITLE.textContent = value;
          BODY.textContent = info.getAttribute('body');

          fetch(url+'comments',{
              method:'GET',
              headers:AUTH
          }).then(res => res.json()).then(data=>{
                let infoData = data.filter(x=> x.postId === info.value);
                infoData.forEach(x=>{
                    let liElement = document.createElement('li');
                    liElement.setAttribute('id',x.postId);
                    liElement.textContent = x.text;
                    COMMENTS.appendChild(liElement)
                })
          })
      }
}

attachEvents();