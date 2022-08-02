function Parent() {
  this.age = 18
}
function Child() {
  Parent.call(this)
  this.name = '张三'
}
Child.prototype = new Parent()
let o4 = new Child()
console.log(o4, o4.age)//Parent { age: 18, name: '张三' } 18