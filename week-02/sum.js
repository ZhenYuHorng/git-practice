//請以 JavaScript 的 array 函式完成 sum 函式，也就是程式碼中不可以出現 for, while 等迴圈程式

// ary: number array
function sum(ary) {
	// TODO: sum all elements in ary
    var total = 0;
	ary.forEach(function(element){ //使用js中內建的forEach來走過每個元素並相加
		total += element;
	});
	return total;
}

console.log(sum([1, 5, 3, 2])); // 11