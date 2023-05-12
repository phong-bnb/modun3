const myBirthday=(isKayler)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (!isKayler){
                console.log('hap bi birth day ')
                resolve(2)
            }else {
                reject(new Error("heloo con don li "))
            }
        },2000)
    })
}
myBirthday(false)
.then((result)=>{
    console.log(`i love ${result} cakes`)

})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('vui ve')
})