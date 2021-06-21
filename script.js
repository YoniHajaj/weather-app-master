        let test = document.querySelector('.test');
        const form = document.querySelector('.form');
        let sear = document.getElementById('search');
        const min1 = document.querySelector('.min-degrees1');
        const min2 = document.querySelector('.min-degrees2');
        const min3 = document.querySelector('.min-degrees3');
        const min4 = document.querySelector('.min-degrees4');
        const min5 = document.querySelector('.min-degrees5');
        const titel = document.querySelector('.title');
        const date1 = document.querySelector('.date1');
        const date2 = document.querySelector('.date2');
        const date3 = document.querySelector('.date3');
        const date4 = document.querySelector('.date4');
        const date5 = document.querySelector('.date5');
        const description1 = document.querySelector('.description1');
        const description2 = document.querySelector('.description2');
        const description3 = document.querySelector('.description3');
        const description4 = document.querySelector('.description4');
        const description5 = document.querySelector('.description5');


        
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
                test.appendChild(p);
                
                p.innerHTML = key.title;

                console.log(key);

            });
            console.log(data);
        }
        let city = document.querySelector('.city');
        test.addEventListener("click",(params)=>{
                console.log(params.path[0].className);
               
               t(params.path[0].className);
                })
        
        async function t(e){
            const res = await fetch(`http://localhost:3000/api/location/${e}`);
            const d = await res.json();
            console.log(d);
            titel.innerHTML = d.parent.title;
            console.log(d.parent.title)

            min1.innerHTML = Math.floor(d.consolidated_weather[0].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[0].max_temp)+"°";
            min2.innerHTML = Math.floor(d.consolidated_weather[1].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[1].max_temp)+"°";
            min3.innerHTML = Math.floor(d.consolidated_weather[2].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[2].max_temp)+"°";
            min4.innerHTML = Math.floor(d.consolidated_weather[3].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[3].max_temp)+"°";
            min5.innerHTML = Math.floor(d.consolidated_weather[4].min_temp)+"°" +  "-" + Math.floor(d.consolidated_weather[4].max_temp)+"°";
            date1.innerHTML = d.consolidated_weather[0].applicable_date;
            date2.innerHTML = d.consolidated_weather[1].applicable_date;
            date3.innerHTML = d.consolidated_weather[2].applicable_date;
            date4.innerHTML = d.consolidated_weather[3].applicable_date;
            date5.innerHTML = d.consolidated_weather[4].applicable_date;
            description1.innerHTML = d.consolidated_weather[0].weather_state_name;
            description2.innerHTML = d.consolidated_weather[1].weather_state_name;
            description3.innerHTML = d.consolidated_weather[2].weather_state_name;
            description4.innerHTML = d.consolidated_weather[3].weather_state_name;
            description5.innerHTML = d.consolidated_weather[4].weather_state_name;
            // test.remove();
            // test.innerHTML.className="1";
            // city.innerHTML.classList="";
        }
