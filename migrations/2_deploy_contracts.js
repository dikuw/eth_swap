const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = function(deployer) {
  //  deploy Token
  deployer.deploy(Token);

  //  deploy EthSwap
  deployer.deploy(EthSwap);
};
