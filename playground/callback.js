var getUser = (id, callback)=>{
    var user = {
        id: id,
        name: 'Mark'
    };

    setTimeout(()=>{
        callback(user);
    },3000);
    
};

getUser(31, (test)=>{
    console.log(test);
})
