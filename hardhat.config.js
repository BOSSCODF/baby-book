require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  networks: {
    fuji: {
      url: "https://twilight-smart-cherry.avalanche-testnet.quiknode.pro/da70b72580766ba6b117bf1aba15f8f16c5367b3/ext/bc/C/rpc/",
      accounts: [
        "0xc8b1843a14e31778b1ce09f969c478e96418b71df35dba81547e0879cd5c72a6",
      ],
      chainId: 43113,
    },
  },
};
