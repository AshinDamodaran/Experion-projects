function doThisLongRunningTask(callback){
    //A long Task
    setTimeout(() => {
        const name = 'JavaScript';
        callback(name);
    },500);
    
}

function ShowResult(res){
    console.log(res);
}
doThisLongRunningTask(ShowResult);
console.log('I am done');