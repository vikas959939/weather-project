import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Weather = () => {

    const [data, setdata] = useState({});
    const [inputCity, setinputCity] = useState("");
    const [favData, setfavData] = useState([]);

    const apiKey = "f36186c6c898120433b70b9dc1cb1042"
    const getWeatherDetails = (cityName)=>{
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`
        axios.get(URL).then((res)=>{
            console.log(res.data)

            setdata(res.data)
        }).catch((err) => {
            console.log("err", err)
          })
    }

    const changeInput = (e) =>{
        setinputCity(e.target.value)
    }

    const search=()=>{
        getWeatherDetails(inputCity)
        
    }

    const favorite =()=>{

        if(!inputCity){

        }else{
            setfavData([...favData, inputCity])
        }
       
    }
    

  return (
    <div className='col-12'>
        <div className='weather_img'>

            <h1 className='text-white mb-5'>Weather App</h1>
            <div className='row'>
                <div className='col'>
                </div>

                <div className='col'>
                    <div className='d-grid gap-2  m-4 mt-5'>
                        <input type="text" onChange={changeInput} value={inputCity} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        <button className='btn btn-primary' onClick={search}>Search</button>
                        <button className='btn btn-warning' onClick={favorite}>Add to favorite</button>
                    </div>
                </div>

                <div className='col'>
                </div>
            </div>  
        </div>

        


        <div className='container'>

        <div className='row'>
        <div className='col'>
        </div>

        <div className='col mt-5'>
        <div class="card" style={{width:'18rem'}}>
        <img src="images/weather2.jpeg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <h5 class="card-title">Temp: {(data?.main?.temp - 271).toFixed(2)}</h5>
          
          <a  class="btn btn-primary">Go somewhere</a>
          
        </div>
      </div>
        </div>

        <div className='col'>

        <div className='container'>
            <div className='row'>
            {favData.map((ele, i)=>{
                return(
                    <div className='col favorite' key={i}>
                        <button className='btn btn-primary'>{ele}</button>
                        <br/>
                    </div>
                )
            })} 
                
            </div>
        </div>
        </div>
    </div>
        </div>
        
    </div>
  )
}

export default Weather