/////////////////////////Obj for Test ///////////////////////////////////////
let testObj = {
  a: 4,
  b: 11,
  c: {
    name: "David",
    secondName: "Geller",
    address: {
      street: "HaAtsmaut",
		building: 130,
      flor: [{ level: 3 }, { app: 14 }],
    },
  },
  d: [{ model: "Tesla" }, { year: 2021 }],
  login: null,
  password: undefined,
  userName: NaN,
  array: ["1", "2", "3", "4", "5", "6", "7", "8"],
};
console.log("TEST-OBJECT Before Deep-Clone: ", testObj);
testObj.c.address.flor.forEach((el) => {
  console.log("testObj.c.address.flor: ", el);
});
console.log("//////////////////////////////////");

//////////////////////DeepClone/////////////////////////////////////////
function deepClone(objIN) {
  let objOut = {};
  for (let key in objIN) {
    if (typeof objIN[key] !== "object" && !Array.isArray(objIN[key])) {
      objOut[key] = objIN[key];
    }
    if (typeof objIN[key] === "object" && !Array.isArray(objIN[key])) {
      objOut[key] = deepClone(objIN[key]);
    }
    if (Array.isArray(objIN[key])) {
      objOut[key] = [];
      objIN[key].forEach((el) => {
        if (typeof el === "object") {
          objOut[key].push(deepClone(el));
        } else {
          objOut[key].push(el);
        }
      });
    }
  }
  return objOut;
}

///////////Clone Obj//////////////////
let clone = deepClone(testObj);
console.log("Clone Obj: ", clone);
clone.c.address.flor.forEach((el) => {
  console.log("clone.c.address.flor: ", el);
});
console.log("////////////////////////////////");
//////////////////change cloneObj////////////
clone.a = 3453553;
clone.c.address.street = "AnotherStreet";
clone.d[0].model = "BMW";
clone.c.address.flor[0].level = 21;
clone.c.address.flor[1].app = 213;
console.log(
  "Clone Obj After Change: \n    expected:\na : 3453553 instead of a: 4 \n" +
    "address.street : 'AnotherStreet' instead of 'HaAtsmaut' \n" +
	"d[0].model : 'BMW' instead of 'Tesla'\n" +
	"address.flor[0].level : 21 instead of level: 3 \n" +
	"address.flor[1].app : 213 instead of app : 14 \n",
  clone
);
clone.c.address.flor.forEach((el) => {
  console.log("clone.c.address.flor: ", el);
});
console.log("//////////////////////////////////");
console.log("TEST-OBJECT after Deep-Clone: ", testObj);
testObj.c.address.flor.forEach((el) => {
  console.log("testObj.c.address.flor: ", el);
});
