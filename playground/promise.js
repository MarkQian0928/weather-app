var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('it works');
    },2500);
});

somePromise.then((message)=>{
    console.log(message);
})