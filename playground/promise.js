var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('it works');
        reject ('it does not work');
    },2500);
});

somePromise.then((message)=>{
    console.log(message);
},(err)=>{
    console.log(err);
})