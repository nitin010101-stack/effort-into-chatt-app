require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_amoy: {
      url: process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
    }
  },
};