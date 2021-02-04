//console.log("Hola mundo")

function imCallbacl(data)
{
    console.log("Im the callback, is my turn")
    console.log(data)
}

function httpRequest(callbackTest)
{
    console.log("Im doing some operations.")
    console.log("Finishing")
    callbackTest(
        {
            "id": 21,
            "name": "Raúl González",
            "age": 28
        }
    )
}

httpRequest(imCallbacl)