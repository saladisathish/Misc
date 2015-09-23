document.getElementById('print').innerHTML= "hello";
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Array.method('reduce',function(f,value){
	var i;
	for(i=0;i<this.length;i+=1){
	value=f(this[i],value);
	}
	return value;
});
var data=[3,7,1,7,2,9,0];
var add = function(a,b){
	return a+b;
};
var mul= function(a,b){
	return a*b;
};
var sum = data.reduce(add,0);
var product = data.reduce(mul,1);
data.total=function(){
	return this.reduce(add,0);
};
total = data.total();
document.getElementById('helo').innerHTML= "world";