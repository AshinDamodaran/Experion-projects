const p = new Promise ((resolve, reject) => {
    // kick off some async work
    //..
    const name = 'JavaScript';
    resolve(name);

});
p.then(res=>console.log(res));