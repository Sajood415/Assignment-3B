require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
const PRIVATE_KEY = '';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
        url: "https://ropsten.infura.io/v3/615423578df74d4db7247a4a73bc41ab",
        accounts: [`0x${PRIVATE_KEY}`]
    }
}
};