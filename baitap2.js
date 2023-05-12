let money = 10000
let count = 0
let year = 4
const byCar = (money) => {

    const promise = new Promise((resolve, reject) => {
        const calculatorMoney = setInterval(() =>{
            money = money + money *0.8
            count++
            if (year==count){
                if(money>1000000){
                    resolve([money,count])
                    clearInterval(calculatorMoney)
                }else {
                    let moneyOffer = 1000000-money

                    reject(`khong du tien , ban con thieu ${moneyOffer}` )
                    clearInterval(calculatorMoney)
                }
            }
        },1000)
    })
        promise.then((data)=>{
            console.log("du tien mua xe ")
            console.log(data)
            console.log(`Sau ${data[1]} moi du tien mua xe`)
        })
            .catch((error)=>{
                console.log(error)
            })
}
byCar(money)