fetch('https://reqres.in/api/user')
.then(response => response.json())
.then(result => {
    console.log(result.data);
});