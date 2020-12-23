// let motherBoard = {
//     usbProtCount: 8,
//     chipset:'AMD X570',
//     socket: 'AM3/AM4',
// };

// let cpu = {
//     coreCount: 8,
//     cpuManufacturer:'AMD',
//     socket: 'AM',
// };

// let videoCard = {
//     videoCardModel: 'Nvidia GeForce GTX 1060',
//     videoMemory: 4096,
// };

// let ram = {
//     ramType: 'DD4',
//     ramVolume: 8194,
//     ramFrequency: 3200,
// };

// /* OBJECT ELEMENTS MERGE and USAGE via SPREAD METHOD */ 
// let computer = {
//     price: 100000,
//     ...motherBoard,
//     ...cpu,
//     ...videoCard,
//     ...ram
// };
//  console.log(computer);

//  /* OBJECT ELEMENTS MERGE and USAGE via OBJECT ASSIGN METHOD */ 

//  let computerWithAssign = Object.assign (
//      {
//          price:100000
//      },
//      motherBoard, cpu, videoCard, ram
//  );

//  console.log(computerWithAssign);

//  let computer = {
//         usbPortCount: 8,
//         chipset:'AMD X570',
//         socket: 'AM3/AM4',
//         coreCount: 8,
//         cpuManufacturer:'AMD',
//         socket: 'AM',  
//         videoCardModel: 'Nvidia GeForce GTX 1060',
//         videoMemory: 4096,
//         ramType: 'DD4',
//         ramVolume: 8194,
//         ramFrequency: 3200,
//         price: 100000
//  };

//  console.log(Object.keys(computer));
//  console.log(Object.values(computer));
//  console.log(Object.entries(computer));


 let computer = {
        usbPortCount: 8,
        chipset:'AMD X570',
        socket: 'AM3/AM4',
        coreCount: 8,
        cpuManufacturer:'AMD',
        socket: 'AM',  
        videoCardModel: 'Nvidia GeForce GTX 1060',
        videoMemory: 4096,
        ramType: 'DD4',
        ramVolume: 8194,
        ramFrequency: 3200,
        price: 100000
 };

 let values = Object.values(computer);

 let keys = Object.keys(computer);

 let entries = Object.entries(computer);

 for (let value of values) {
     console.log(values);
 }

 for (let key of keys) {
     console.log(`${key}: ${computer[key]}`);
 }

 for (let entry of entries){
     console.log(`${entry[0]} : ${entry[1]}`)
 }

 for (let [key, value] of entries) {
     console.log(`${key} : ${value}`);
 }