

//  async function getLatLong() {
//     const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     const responseData = await response.json();
//     console.log(responseData)

// }

// getLatLong() 

const buildQuery = (settings) => {
    const url = new URL(`https://api.open-meteo.com/v1/forecast`);

    Object.entries(settings).forEach(([key, value])=> {
        url.searchParams.append(key, value);
    })

    return url;
}



async function getAllWeatherData(settings, lat, long) {
    const url = buildQuery(settings)
    url.searchParams.append("latitude", lat)
    url.searchParams.append("longitude", long)

    // this.spinner.style.display = 'block';
    const response = await fetch(url.toString())

    const responseData = await response.json();

    return {
      responseData,
      
    };

  }

 
