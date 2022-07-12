require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")


const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    // solidity: "0.8.8",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4
        }
    },

    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }]
    },
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
    solhint: "^3.3.7",

    namedAccounts: {
        deployer: {
            default: 0
        },
        namedAccounts: {
            deployer: {
                default: 0
            }
        }
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY
    }
}
