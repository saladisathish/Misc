var m = ['bb','ab','a',4,9,15,1,19,3,'c'];
m.sort(function(a,b){
	if (a==b){
	return 0;
	}
	if(typeof a == typeof b) {
	return a < b ? -1 : 1;
	}
	return typeof a <typeof b ? -1 : 1;
});

for(i in m) {
	console.log(m[i]);
}