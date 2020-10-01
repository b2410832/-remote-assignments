// 使用window.setTimeout()排程
function delayResult(n1, n2, delayTime, callback) {
    // your code here
    let answer = `${n1+n2}(${n1}+${n2})`;
    window.setTimeout(callback, delayTime, answer);
}

delayResult(4, 5, 3000, function(result) { 
    console.log(result);
}); // 3秒後顯示 9(4+5)

delayResult(-5, 10, 2000, function(result) { 
    window.alert(result);
}); // 2秒後跳出 5(-5+10)
