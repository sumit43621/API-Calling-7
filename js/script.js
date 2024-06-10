var baseURL = 'https://fakerestapi.azurewebsites.net'

function fetch2(url,urlobject){
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();

        xhr.open(urlobject.method,url);
        xhr.send();

        xhr.onreadystatechange = function(){
            if( (this.readyState == 4) && (this.status == 200)){
                resolve(JSON.parse(this.responseText));
            }
            if(this.status != 200){
                reject('error')
            }
        }
    })
}

document.querySelector('button[data-my="my"]').addEventListener('click',function(){
    // alert('okkk');
    // toastr.success("Hello World");

    fetch2(baseURL + '/api/v1/Users' , {
        method:"GET",
    }).then((data)=> {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

    fetch(baseURL + '/api/v1/Users')
    .then(response => response.json())
    .then(data => {
        console.log('Success', data);
    }).catch();
})