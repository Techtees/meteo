
const buildQuery = (settings) => {
    const url = new URL(`https://api.open-meteo.com/v1/forecast`);

    Object.entries(settings).forEach(([key, value])=> {
        url.searchParams.append(key, value.toString());
    })

    return url;
}


export async function getAllWeatherData(settings = {}, { view, data}) {
    const url = buildQuery(settings).toString()

    const response = await fetch(`${url}&${view}=${data}`)

    return await response.json();
  }

 
