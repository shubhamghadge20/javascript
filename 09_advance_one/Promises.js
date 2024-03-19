//A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation, and its resulting value.
const promiesone = new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log('Async task is complete')
        resolve();
      },1000)
})

promiesone.then(function(){
    console.log("Promise consumed");
})

//another method of writing promises
 new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("Async task 2");
      },1000)
}).then(function(){
    console.log("Aysnc 2 resolved")
})

const promiesthree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shubh",email:"shubhamghadge20620@gmail.com"})
    },1000)
})

promiesthree.then(function(user){
    console.log(user)
})

//find out particular data for that promises

const promiesfour = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"satya" ,password:"1234"})
        }else{
            reject('ERROR: something went wrong')
        }
      },1000)
})

promiesfour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E:",error)
    }
}


getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))