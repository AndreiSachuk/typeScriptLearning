function srtip(x: string | number) {
    if (typeof x === 'number')
        return x.toFixed(2)
    return x.trim()
}

class MyResponse{
    headder = 'response header'
    result = 'responnse result'
}

class MyError{
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError){
    if (res instanceof  MyResponse){
        return{
            info: res.headder + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

//=============
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType){
    //.......
}

setAlertType('success')
setAlertType('danger')
//setAlertType('def')





