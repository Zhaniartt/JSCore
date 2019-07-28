function attachEvents() {
    let weatherCodes = {
      Sunny: '☀',
      'Partly sunny': '⛅',
      Overcast: '☁',
      Rain: '☂'
    };
    document.querySelector('#submit').addEventListener('click', catchTheWeather);
    document.querySelector('#forecast').style.display = 'block';
   
    function printError() {
        if(document.querySelector('.forecast-info')){
            document.querySelector('.forecast-info').remove();
        }
        if(document.querySelector('.forecasts')){
            document.querySelector('.forecasts').remove();
        }
      let divForecasts = document.createElement('span');
      divForecasts.setAttribute('class', 'forecasts');
      divForecasts.textContent = 'Error!';
      document.querySelector('#current').appendChild(divForecasts);
    }
   
    async function catchTheWeather() {
      let location = document.querySelector('#location').value;
      location = location.toLowerCase();
      if (
        location === 'london' ||
        location === 'new york' ||
        location === 'barcelona'
      ) {
          if(location === 'new york'){
              location = 'ny';
          }
        const response = await fetch(
          `https://judgetests.firebaseio.com/forecast/today/${location}.json`
        );
        const data = await response.json();
        let weatherType = data.forecast.condition;
        let currentLocation = data.name;
        let degreece = `${data.forecast.low}°/${data.forecast.high}°`;
        createCurrentCondition(weatherType, currentLocation, degreece);

        let responseForFutherWeather = await fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${location}.json`);
        let dataForNextDays = await responseForFutherWeather.json();
        createUpCommingCondition(dataForNextDays);
        
      } else {
        printError();
      }
    }
    function createCurrentCondition(weatherType, location, degreece) {
        if(document.querySelector('.forecasts')){
            document.querySelector('.forecasts').remove();
        }
      let divForecasts = document.createElement('span');
      divForecasts.setAttribute('class', 'forecasts');
      let spanConditionSymb = document.createElement('span');
      spanConditionSymb.setAttribute('class', 'condition symbol');
      spanConditionSymb.textContent = weatherCodes[weatherType];
      let spanCondition = document.createElement('span');
      spanCondition.setAttribute('class', 'condition');
   
      let span1 = document.createElement('span');
      let span2 = document.createElement('span');
      let span3 = document.createElement('span');
      span1.setAttribute('class', 'forecast-data');
      span2.setAttribute('class', 'forecast-data');
      span3.setAttribute('class', 'forecast-data');
      span1.textContent = location;
      span2.textContent = degreece;
      span3.textContent = weatherType;
      spanCondition.appendChild(span1);
      spanCondition.appendChild(span2);
      spanCondition.appendChild(span3);
      divForecasts.appendChild(spanConditionSymb);
      divForecasts.appendChild(spanCondition);
      document.querySelector('#current').appendChild(divForecasts);
    }
   
    function createUpCommingCondition(obj) {
        if(document.querySelector('.forecast-info')){
            document.querySelector('.forecast-info').remove();
        }
        let div = document.createElement('div');
        div.setAttribute('class','forecast-info');
        Object.values(obj)[0].forEach(x=>{
           let mainSpan = document.createElement('span');
           mainSpan.setAttribute('class','upcoming');
            let span1 = document.createElement('span');
            span1.setAttribute('class','symbol');
            span1.textContent = weatherCodes[x.condition];
            let span2 = document.createElement('span');
            span2.setAttribute('class','forecast-data');
            span2.textContent = `${x.low}°/${x.high}°`;
            let span3 = document.createElement('span');
            span3.setAttribute('class','forecast-data');
            span3.textContent = x.condition;
            mainSpan.appendChild(span1);
            mainSpan.appendChild(span2);
            mainSpan.appendChild(span3);
            div.appendChild(mainSpan);
        });
        document.querySelector('#upcoming').appendChild(div);
    }
  }
   
  attachEvents();