//  async function weather(){
//     let delhiWeather = new Promise((resolve , reject) => {
//         setTimeout(() =>{
//             resolve("27 deg");
//         },3000 );
//     });
//     let bangaloreWeather = new Promise((resolve , reject) => {
//         setTimeout(() =>{
//             resolve("21 deg");
//         },4000 );
//     });

//     //  delhiWeather.then(alert)
//     // bangaloreWeather.then(alert)

//     let delhiW = await delhiWeather
//     let bangaloreW = await bangaloreWeather
//     return[delhiW , bangaloreW]
//  }

//   console.log("welcome to weather control room")
//   let a = weather()
//   console.log(a)

// ==========================================================================

async function weather(){
        let delhiWeather = new Promise((resolve , reject) => {
            setTimeout(() =>{
                resolve("27 deg");
            },3000 );
        });
        let bangaloreWeather = new Promise((resolve , reject) => {
            setTimeout(() =>{
                resolve("21 deg");
            },4000 );
        });
    
    console.log("Fetching Delhi Weather Please wait....?");
    let delhiW = await delhiWeather;
    // console.log("Fetched Delhi Weather:" + delhiW);

    console.log("Fetching Delhi Weather Please wait....?");
    let bangaloreW = await bangaloreWeather;
    // console.log("Fetched Bangalore Weather:" + bangaloreW);
     return [delhiW ,bangaloreW];
}

console.log("welcome to Weather control room");
let a =weather();
a.then((value) =>{
    console.log(value);
});