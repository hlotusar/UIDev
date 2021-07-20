const { response } = require("express")

function checkAge(age)
{
    return new Promise((resolve, reject)=>{
        if(age>=18)
        {
            resolve(age)
        }
        else{
            reject('invalid age')
        }
    })
}

checkAge(12)
.then((response)=>{
    console.log('your age is valid : '+response)
})
.catch((err)=>{
    console.log(err)
})