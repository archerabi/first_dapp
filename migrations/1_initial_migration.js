var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network) {
  console.log("network:", network);
  // console.log("accounts:", accounts);
  deployer.deploy(Migrations);
};
