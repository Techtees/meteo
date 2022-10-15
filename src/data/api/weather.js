
const buildQuery = (settings) => {
    const url = new URL(`https://api.open-meteo.com/v1/forecast`);

    Object.entries(settings).forEach(([key, value])=> {
        url.searchParams.append(key, value);
    })

    return url;
}


export async function getAllWeatherData(settings = {}, lat, long) {
    const url = buildQuery(settings)
    url.searchParams.append("latitude", lat)
    url.searchParams.append("longitude", long)

    // this.spinner.style.display = 'block';
    
    console.log(url.toString())
    const response = await fetch(url.toString())

    const responseData = await response.json();

    return {
      responseData,
      
    };

  }

 
