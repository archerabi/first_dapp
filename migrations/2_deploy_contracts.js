var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Splitter = artifacts.require("./Splitter.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(Splitter, "0x574d5786d76f8511665b05e53f52ccb41cff986e","0xd44793abfd28d631bdff672f1c7b0424d4f742c0","0x1e401d10a3212967bd155274f2d14852b0a2a862")
};
