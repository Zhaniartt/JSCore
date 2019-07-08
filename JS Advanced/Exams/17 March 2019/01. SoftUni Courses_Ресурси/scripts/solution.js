function solve() {
   let allCourses = Array.from(document.querySelectorAll('.courseBody ul li input'));
   let educationForm = Array.from(document.querySelectorAll('#educationForm input'));
   educationForm.forEach(x=> x.addEventListener('click',(e)=>{return e}));
   allCourses.forEach(x=> x.addEventListener('click',(e)=> {return e}));
   let singButton = document.querySelector('button');
   singButton.addEventListener('click',getInfo);
   function getInfo(){
      let coursesChecked = allCourses.filter(x=> x.checked === true);
      let education = educationForm.filter(x=> x.checked === true);
      let store = [];
      for(course of coursesChecked){
         store.push(course.name)
      }
      store.push(education[0].value);
      //calculate The Sum
      let sum = 0;
      let softUniForms = {
         'js-advanced':180,
         'js-fundamentals':170,
         'js-applications':190,
         'js-web':490
      };
      if(store.includes('js-advanced') && store.includes('js-fundamentals')){
        softUniForms['js-advanced'] -= 18;
      }
     
         for(let s of store){
            if(softUniForms.hasOwnProperty(s)){
               sum += softUniForms[s];
            }
         }
         if(store.includes('js-advanced') && store.includes('js-fundamentals') && store.includes('js-applications')){
            sum -= sum * 0.06;
         }
         if(store.includes('js-advanced') && store.includes('js-fundamentals') && store.includes('js-applications') && store.includes('js-web')){
            store.push('HTML and CSS');
         }
         if(store.includes('online')){
            Object.keys(softUniForms).map(function(key, index) {
               softUniForms[key]  -= softUniForms[key] * 0.06;
             });
         }
         
         let myCourses = document.querySelector('#myCourses div ul');
       for(let s of store){
          let li = document.createElement('li');
          if(s === 'js-fundamentals'){
             li.textContent = 'JS-Fundamentals';
          }
          if(s === 'js-advanced'){
            li.textContent = 'JS-Advanced';
         } if(s === 'js-applications'){
            li.textContent = 'JS-Applications';
         } if(s === 'js-web'){
            li.textContent = 'JS-Web';
         }
         if(s === 'HTML and CSS'){
            li.textContent = 'HTML and CSS';
         }
         myCourses.appendChild(li);
       }  
       let totalCost = document.querySelector('.courseFoot p');
      sum = Math.floor(sum).toFixed(2);
      totalCost.textContent = `Cost: ${sum} BGN`;
   }
}

solve();