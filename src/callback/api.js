const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = "https://dragon-ball-api.herokuapp.com/api"

function fetchApi(url, calback)
{
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function (event) {
        if (req.readyState === 4) {
            if (req.status == 200) {
                calback(null, JSON.parse(req.responseText))
            } else {
                const error = new Error(`URL Invalida ${url}`)
                return calback(error, null)
            }
        }
    }

    req.send()
}

fetchApi(`${API}/character`, function (error1, data1) {
    if (error1) {
        return console.error(error1)
    }

    fetchApi(`${API}/character/${data1[1].name}`, function (error2, data2) {
        if (error2) {
            return console.error(error2)
        }

        fetchApi(`${API}/planet/${data2.originPLanet}`, function (error3, data3){
            if (error3) {
                return console.error(error3)
            }
            console.log(data2.name)
            console.log(data3.name)
        })
    })
})