// let p= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Iam a promise and im fullfilled")
//     },5000)
    
// })

// ============================================================

// let p1 = new Promise((resolve,reject) =>{
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log("I am a promise and im fullfilled")
//         resolve(80)
//     },5000)
    
// })
// let p2 = new Promise((resolve,reject) =>{
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log("I am a promise and im rejected")
//         reject(new Error("im an error"))
//     },5000)
    
// })
// console.log(p1,p2)

// ================================================================================================

// let p3 = new Promise((resolve,reject) =>{
//         console.log("promise is pending")
//         setTimeout(() => {
//             console.log("I am a promise and im fullfilled")
//             resolve(80)
//         },5000)
        
//     })
//     let p4 = new Promise((resolve,reject) =>{
//         console.log("promise is pending")
//         setTimeout(() => {
//             console.log("I am a promise and im rejected")
//             reject(new Error("im an error"))
//         },5000)
        
//     });

//     p3.then((value) => {
//        console.log(value);
//     });
//     p4.catch((error) => {
//        console.log("some error found in p4");
    // });

    // ==============================================================================

    // Promise Chaining

    // let a = new Promise((resolve,reject) =>{
                
    //             setTimeout(() => {
    //                 console.log("resolve after 5 seconds")
    //                 resolve(100)
    //             },5000)
    //         })
    //         a.then((value) => {
    //             console.log(value)
    //             let b = new Promise((resolve,reject) => {
    //                 setTimeout(()=>{
    //                     resolve("promise 2 ")}, 3000)
    //                 })
    //                 return b
    //             }).then((value) => {
    //                 console.log("we are done")
    //                 return
    //             }).then(() => {
    //                 console.log("done")
    //             })
                
    // ===================================================================================

    // Loadscript Example

//       const loadScript = (src)=>{
//         return new Promise((resolve,reject)=>{
//       let script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src = src
//       document.body.appendChild(script)
//       script.onload = (script)=>{
//         resolve("script has been loaded")
//       }
//       script.onerror = ()=>{reject(0)}
//     })
// }
// let x= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// x.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry but we are aving problems loading this script")
// })
    // ======================================================================  
//       const loadScript = (src)=>{
//         return new Promise((resolve,reject)=>{
//       let script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src = src
//       document.body.appendChild(script)
//       script.onload = (script)=>{
//         resolve("script has been loaded")
//       }
//       script.onerror = ()=>{reject(0)}
//     })
// }
// let x= loadScript("https://cdn1.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// x.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry but we are having problems loading this script")
// })
      

// ==========================================================================

// promise API

// let a1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 1");
//     },1000)
// });
    
// let a2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 2");
//     },2000)
// });
    
// let a3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 3");
//     },5000)
// });

// a1.then((value)=>{
// console.log(value)
// }) ; 
// a2.then((value)=>{
// console.log(value)
// }) ; 

// a3.then((value)=>{
// console.log(value)
// }) ; 

// ===============================================================================

//   API methods

// 1.Promise.all

//   let promise_all = Promise.all([a1,a2,a3])
//   promise_all.then((value)=>{
//     console.log(value)
//   })

// ===============================================================================

// promise.allsettled
// it givves output with value and status of promises

// let a4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 1");
//     },5000)
// });
    
// let a5 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(new Error("Error"));
//     },10000)
// });
    
// let a6 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("value 3");
//     },14000)
// });
// let promise_all = Promise.allSettled([a4,a5,a6])
//   promise_all.then((value)=>{
//     console.log(value)
//   })

// ======================================================================

// 3.Promise race

// it gives an output which is resolved first including errors

// let a4 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("value 1");
//         },2000)
//     });
        
//     let a5 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             reject(new Error("Error"));
//         },3000)
//     });
        
//     let a6 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("value 3");
//         },5000)
//     });
//     let promise_all = Promise.race([a4,a5,a6])
//       promise_all.then((value)=>{
//         console.log(value)
//       })
//    ============================================================================

// 4. Promise.any

// it gives errors which is resolved first and ignore Errors


// let a4 = new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve("value 1");
//             },10000)
//         });
            
//         let a5 = new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 reject(new Error("Error"));
//                 // resolve("value 2");
//             },3000)
//         });
            
//         let a6 = new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 resolve("value 3");
//             },4000)
//         });
//         let promise_all = Promise.any([a4,a5,a6])
//           promise_all.then((value)=>{
//             console.log(value)
//           })


