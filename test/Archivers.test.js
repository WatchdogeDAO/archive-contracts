const Archivers = artifacts.require("Archivers");

contract("Archivers", accounts => {
  it("should return 'false' for an id that isn't an archiver.", async () => {
    const instance = await Archivers.deployed();
    const twitterId = web3.utils.fromAscii("1280985660443197441");
    const isArchiver = await instance.isArchiver.call(twitterId);
    assert.equal(isArchiver, false);
  });
  it("should add an archiver.", async () => {
    const instance = await Archivers.deployed();
    const twitterId = web3.utils.fromAscii("1280985660443197441");
    await instance.addArchiver(twitterId, { from: accounts[0] });

    const isArchiver = await instance.isArchiver.call(twitterId);
    assert.equal(isArchiver, true);
  });
  it("should remove an archiver.", async () => {
    const instance = await Archivers.deployed();
    const twitterId = web3.utils.fromAscii("1280985660443197441");
    await instance.addArchiver(twitterId, { from: accounts[0] });
    let isArchiver = await instance.isArchiver.call(twitterId);
    assert.equal(isArchiver, true);

    await instance.removeArchiver(twitterId, { from: accounts[0] });
    isArchiver = await instance.isArchiver.call(twitterId);
    assert.equal(isArchiver, false);
  });
});
