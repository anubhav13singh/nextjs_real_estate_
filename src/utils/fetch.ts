import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'
const options = {
    headers: {
      'X-RapidAPI-Key': 'c37c643b3bmsh1281ecfdbf4d8eap14b846jsn57be09a46231',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  };
  
 
export const fetchApi = async(url:any) => {
    const {data} = await axios.get((url), options)
    return data;
}
  