class bikes{
  count:number;
  High_bikes:string[];

  set_data(count:number,High_bikes:string[]):void{
     this.count=count;
      this.High_bikes=High_bikes;
  }

  display():void{
      console.log("High bikes : "+ this.High_bikes);
  }

  defect(name1:string | object):void{
      console.log("This bike is "+name1);
  }
}

let c1=new bikes();
let c2=new bikes();

c1.set_data(89,['Royal Enfield','Yamaha','RX100']);
c2.set_data(99,['FZ-S','Activa','Suzuki']);
c1.display();
c2.display();

//add
c1.High_bikes.push("Fascino");
c2.High_bikes.push("Jupiter");

c1.display();
c2.display();

//defect
let remove_name:string="Yamaha";
c1.defect(remove_name);

//update
for(let rem_name in c1.High_bikes){
  if(c1.High_bikes[rem_name] === remove_name){
      c1.High_bikes[rem_name]="Hero Honda";
      c1.display();
  }
}

//Delete
for(let delete_bike in c1.High_bikes)
{
  if(c1.High_bikes[delete_bike]==="RX100"){
      delete c1.High_bikes[delete_bike];
      c1.display();
  }
}

//Threshold
if(c2.count<100){
  c2.defect(c2.High_bikes);
}














// console.log("\t\t******Vasanth Bavan*********") 
// let MENU: any[] =[
//         {
//                 name:"chicken biryani",
//                 cost: 200
//         },
//         {
//                 name: "Fried Rice",
//                 cost: 100
//         }       
// ]
// console.log("MENU: ")
// console.log(MENU)
// console.log("ADD: ")
// MENU.push({name:"Egg parota",cost: 80})
// console.log(MENU)
// console.log("REMOVE: ")
// MENU.pop()
// console.log(MENU)

// console.log("THRESHOLD: [>150]")
// for(let i=0;i<MENU.length;i++)
// {
//         if(MENU[i].cost>150){
//                 console.log(MENU[i])
//         }
// }












































































// interface department {
//     modelNumber: string;
//     modelName: string;
//     count: string;
    
// }

// var chocolate: department = {
//     modelName: "mm",
//     modelNumber:"qq",
//     count:"22",
    
// }
// // console.log(chocolate.modelName);
// // console.log(chocolate.count)

// class juice implements department {
//     modelNumber: string;
//     modelName: string;
//     count: string;
//     constructor(modelNumber: string, modelName: string, count: string) {
//         this.modelNumber = modelNumber; 
//         this.modelName = modelName;
//         this.count = count;
//     }
//     brand: string = 'juice';
    
// }
// class biscult implements department{
//     modelNumber: string;
//     modelName: string;
//     count: string;
//     constructor(modelNumber: string, modelName: string, count: string) {
//         this.modelNumber = modelNumber; 
//         this.modelName = modelName;
//         this.count = count;
//     }
    
//     brand: string = 'biscult';
// }
// // var juice1 = {modelNumber:'1',modelName:'7up',count:'10'};

// var juice1 = new juice('1', '7up','20');

// var juice2 = new juice('2', 'sprit','21');

// var  biscult1 = new biscult('1','milk','23');
// var biscult2 = new biscult('2','hidenseek','13');
// var biscult3 = new biscult('3','5050','10');

// // const juice3 = { juice1, name: { modelnumber: '3',
// //  modelname:'bovonto',
// //   count:12} }
// // const juice4 = { available:'yes/no'}

// // const juice3withjuice4=Object.assign(juice3,juice4);

// // console.log(juice3);
//  delete biscult3['modelNumber'];
 
//  console.log("-----------------------");
 
 
 
// //  console.log(juice2);
// // var veg = {"mushrooms": 30, "peppers": 60, "meatballs": 1, "chicken": 
// // 2, "olives": 4}

            
// function getKey(juice1,juice2){
//   const arr = [],
//   obj = Object.keys(juice1);
//   for (var count in obj){
//     if(juice1[obj[count]] > 5){
//       arr.push(obj[count]);
//     }
//   }
//   return arr;
// }

//  var juice5 = [{brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"},
//  {brand:"juice", modelNumber:"3",modelName:"soda",count:"21"}];

//  const result = juice5.filter((obj) => {
//   return obj.count > '5';

// });

// console.log(result);

// //  var juice6 = {};

// // Object.assign(juice5, {brand:"juice", modelNumber:"2",modelName:"Sprit",count:"23"});
// // Object.assign(juice6,{brand:"juice", modelNumber:"3",modelName:"soda",count:"21"})

// // juice6   = juice5.filter(function(elem) {
 
// //   return !(elem.count >5 )});

 
 
 

// // console.log(juice1.getEngineInfo());
// console.log("Department dataset");

// console.log(juice1,juice2,biscult1,biscult2);
// console.log("--------------------------------");
// console.log("delete");

// console.log(biscult3);

// console.log("-----------------------");
// console.log("addional");

// console.log(juice5);
// console.log("-----------------------");
// console.log("threshold");

// console.log(getKey(juice1 ,juice2))

// console.log(result);

// console.log(juice2);
// console.log(biscult1);
// console.log(biscult2);
// console.log(juice3withjuice4);

// var biscult1 = new biscult('2', 'milk','12');
// console.log(biscult.getEngineInfo());
// console.log(biscult1);

// var obj: {name: string, age:number};
// obj = {name: "X", age: 1}
