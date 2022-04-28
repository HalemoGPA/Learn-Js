let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};
let obj2 = {
  prop2: 2,
  prop1: 5,
  meth2: function () {
    return this.prop2;
  },
};
let targetObject = {
  prop1: 7,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
finalObject.prop1 = 150;
finalObject.prop4 = 12;
console.log(finalObject);

let newObject = Object.assign({}, obj1, {
  prop5: 100,
  prop6: 6,
});
console.log(newObject);
