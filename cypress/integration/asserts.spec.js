it("Equality", () => {
  const a = 1;
  expect(a).equal(1);
  expect(a, "This number should be equal 1").equal(1);
});

it("Truthy", () => {
  const a = true;
   expect(a).equal(true);
});

it("Object Equality", () => {
  const obj = {
    a: 1,
    b: 2,
  };

  const otherObject = {
    a: 1,
    b: 2,
  };

  expect(obj).equal(obj);

  // Not equal,references are different
  // expect(obj).equal(otherObject);

  // Equal, because the deep equal gonna compare the values of object
  expect(obj).deep.equal(otherObject);

  // Equal, because the deep equal gonna compare the values of object
  expect(obj).eql(otherObject);

  // Must have the property a included in object
  expect(obj).include({ a: 1 });

  expect(obj).to.have.property("b", 2);
  expect({}).to.be.empty;
});

it("Arrays", () => {
  const arr = [1, 2, 3];
  expect(arr).have.members([1, 2, 3]);
  expect(arr).not.be.empty;
  expect([]).be.empty;
});

it("Types", () => {
  const num = 1;
  const string = "fernando";

  expect(num).to.be.a("number");
  expect(string).to.be.a("string");
  expect({}).to.be.a("object");
  expect([]).to.be.a("array");
});

it("String", () => {
  const string = "fernando";

  expect(string).to.be.equal("fernando");
  expect(string).to.match(/nando/i);
  expect(string).to.contain("fernand");
});

it("Numbers", () => {
  const a = 1;
  const b = 1.11;

  expect(a).to.be.equal(1);
  expect(a).to.be.above(0);
  expect(a).to.be.below(3);
  expect(b).to.be.closeTo(1.1, 0.1);
});
