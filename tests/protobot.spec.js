const Protobot = require('../protobot.js')

describe(Protobot, () => {

  protobot = new Protobot

  test("App has list of items", () => {
    expect(protobot.itemsList).toBeTruthy();
  });

  test("cup is default item", () => {
    expect(protobot.item).toBe("cup");
  });

  test("for an astronaut is default constraint", () => {
    expect(protobot.constraint).toBe("for an astronaut");
  });

  test(":setItem changed Item", () => {
    protobot.setItem()
    expect(protobot.item).not.toBe("cup");
  })

  test(":setConstraint changed constraint", () => {
    protobot.setConstraint()
    expect(protobot.constraint).not.toBe("for an astronaut");
  })

  test(":setBreif", () => {
    protobot.setItem()
    protobot.setConstraint()
    protobot.setBreif()
  })

});
