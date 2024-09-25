// 使用foreach實作 -> 代替for迴圈最直觀的方式，比較容易記得

// ary: number array
function sum1(ary) {
	// TODO: sum all elements in ary
  var total = 0;
  ary.forEach(function(element){ //使用js中內建的forEach來走過每個元素並相加
    total += element;
  });
  return total;
}

// 另外也可以用reduce來實作
// 優點是語法簡潔，但比較複雜
// total(accumulator)->currentValue的加總；element(currentValue)->ary的element：0(預設值) ->從1開始加總
function sum2(ary) {
  return ary.reduce((total, element) => total + element, 0)
}
console.log("使用forEach實作");
console.log(sum1([1, 5, 3, 2])); // 11
console.log("使用reduce實作");
console.log(sum2([1, 5, 3, 2])); // 11

