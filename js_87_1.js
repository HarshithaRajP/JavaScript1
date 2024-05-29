
    
    // btn.addEventListener('click',function(e){
    //     alert('Hello World1')
    // })
    // btn.addEventListener('click',function(e){
    //     alert('Hello World2')
    // })

    // let x = function(e){
    //     alert("Hello World1")
    // }
    // let y= function(e){
    //     alert("Hello World2")
    // }
    // btn.addEventListener('click',x)
    // btn.addEventListener('click',y)

    // let a = prompt("enter a number");

    // if(a==2) {
    //     btn.removeEventListener('click',x)
    // }

    document.addEventListener("click",function click(){
        console.log("clicked")

        let conf = confirm("are you sure?")
        console.log(conf)
    })
 
