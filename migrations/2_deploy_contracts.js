const Archivers = artifacts.require("Archivers");

module.exports = function (deployer) {
  deployer.deploy(Archivers);
};
