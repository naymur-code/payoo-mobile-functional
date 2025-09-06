document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault()
    const number=12345678
    const pin=1234

    const mobileNumber=parseInt(document.getElementById('mobile-number').value)
    const pinNumber=parseInt(document.getElementById('pin').value)

    if(mobileNumber===number&& pinNumber===pin){
        window.location.href='../home.html'

    }
    else{
        alert('invalid!')
    }
    console.log(mobileNumber,pinNumber);
})