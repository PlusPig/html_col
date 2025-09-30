var nums = [1, "aaaa", 0.9, "a"];
nums.push("aa");
console.log(nums);
console.log(Array.isArray(nums));
nums.pop();
nums.shift();//清除第一个元素
console.log(nums);
nums.unshift(11, 22, "ppoo");//在数组前面加元素
var str = "1,33,r,4r,4,r5t,5y6,666l67l,m5";
var c = [];
c = str.split(",");
c.concat(nums);
console.log(c);
console.log(c.reverse());
//同样有indexof

function cout(s) {
    console.log(s);
}
cout(c);

console.log(Math.max(c));
Math.floor();
Math.ceil();//分别是向上取整和向下取整
console.log(Math.random() * 100);



console.log(Date.now());