import axios from 'axios'

export function SearchByName (name, getResponse) {
  let path = 'https://restcountries.eu/rest/v2/name/' + name + '?fields=name;capital;currencies;alpha3Code'
  axios.get(path).then(getResponse)
}
