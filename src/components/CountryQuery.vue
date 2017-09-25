<template>
    <div class="country-query">
        <h1>{{msg}}</h1>
        <form>
            <input v-model="query" placeholder="search">
        </form>
        <button v-on:click="search">Search</button>
        <ul id="v-for-object">
            <li v-for="value in countriesData">
                <ul>
                    <li>
                      {{value["name"]}}
                    </li>
                     <li>
                      {{value["capital"]}}
                    </li>
                    <li>
                      {{value["currencies"][0]["name"]}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</template>



<script>
import {SearchByName} from '@/api/CountryApi.js'

export default {
  name: 'CountryQuery',
  data () {
    return {
      msg: 'Welocome to Country Search',
      query: '',
      countriesData: []
    }
  },
  methods: {
    search: function () {
      SearchByName(this.query, this.fromResponse)
    },
    fromResponse: function (response) {
      this.countriesData = response['data']
      console.log(this.countriesData)
    }
  }
}
</script>