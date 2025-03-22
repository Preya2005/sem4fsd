setTimeout(() => {
    console.log("hello".toUpperCase())
}, 1000);
function fun() {
    const time=new Date().toLocaleTimeString({hour12:false})
    console.log(time)
}
fun()
setInterval(fun,1000)