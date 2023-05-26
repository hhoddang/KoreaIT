// alert(1);
//교재 236페이지 ~

function student(name){
    return{
        getName:function(){
            return name;
        },
        setName:function(newName){
            name = newName;
        } 

    }
}
var stu1 = student("심다영");
var stu2 = student("김호찬");
var stu3 = student("유정진");

console.log(stu1.getName());
console.log(stu3.getName());
stu1.setName("장영아");
console.log(stu1.getName());





// function closure(x) {
//   var counter = x;

//   return function () {
//     return ++counter;
//   };
// }

// var box = closure(1);
// var box2 = closure(1000);
// console.log(box());//2
// console.log(box2());//3
// console.log(box());//4
// console.log(box2());//4
// console.log(box());//4
// console.log(box2());//4