        let test = document.querySelector('.test');
        const form = document.querySelector('.form');
        let sear = document.getElementById('search');
        const min1 = document.querySelector('.min-degrees1');
        const min2 = document.querySelector('.min-degrees2');
        const min3 = document.querySelector('.min-degrees3');
        const min4 = document.querySelector('.min-degrees4');
        const min5 = document.querySelector('.min-degrees5');
        const titel = document.querySelector('.title');
        
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
            
            // test.remove();
            // test.innerHTML.className="1";
            // city.innerHTML.classList="";
        }
