const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=0eb3b8d032f3ea20b30cc99ff8d3c2ce&query=27.6094,75.1398'

request({ url: url},(error, response)=>{
   const data =JSON.parse(response.body)
   console.log(data.current)
})