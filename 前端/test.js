var a = {};
var b = {
  key: "a",
};
var c = {
  key: 'c'
};
a[b] = '123'
a[c] = '456'
console.log(a[b])//456