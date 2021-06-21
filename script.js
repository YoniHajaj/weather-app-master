        let city = document.querySelector('.city');
        const form = document.querySelector('.form');
        let sear = document.getElementById('search');
        let iconDay = document.querySelectorAll('.icon-day');
        const degrees = document.querySelectorAll('.min-degrees');
        const titel = document.querySelector('.title');
        const date = document.querySelectorAll('.date');
        const description = document.querySelectorAll('.description');
       


        
        let colo = 'red'
        sear.addEventListener("click",(params)=>{
            
                })
        
        function search(e) {
            e.preventDefault();
            const text = (this.querySelector('[name=search]')).value;
            let loc = getLocation(text);
            
            console.log(loc);
            (this.querySelector('[name=search]')).value = ""
        }
        
        form.addEventListener('submit',search)
        async function getLocation(params) {
            const response = await fetch(`http://localhost:3000/api/location/search/${params}`);
            const data = await response.json();
            // console.log(data);
            
            let i =0;
            data.forEach((key, value) => {
                let p = document.createElement('div');
                //p.href = key.woeid;
                p.classList.add( key.woeid);
                i++;
                city.appendChild(p);
                
                p.innerHTML = key.title;

                console.log(key);

            });
            console.log(data);
        }
        // let city = document.querySelector('.city');
        city.addEventListener("click",(params)=>{
                console.log(params.path[0].className);
               
               t(params.path[0].className);
                })
        
        async function t(e){
            const res = await fetch(`http://localhost:3000/api/location/${e}`);
            const d = await res.json();
            console.log(d);
            titel.innerHTML = d.parent.title;
            console.log(d.parent.title)


            
            // city.remove();
            city.innerHTML=" ";
            // city.innerHTML.classList="";

            for(let i = 0; i < iconDay.length ; i++){
                degrees[i].innerHTML = Math.floor(d.consolidated_weather[i].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[i].max_temp)+"°";
                date[i].innerHTML = d.consolidated_weather[i].applicable_date;
                iconDay[i].src = `https://www.metaweather.com/static/img/weather/png/${d.consolidated_weather[i].weather_state_abbr}.png`;
                description[i].innerHTML = d.consolidated_weather[i].weather_state_name;
            }
        }
