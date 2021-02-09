module.exports = {
    migrations_directory: './migrations',
    solc: {
        optimizer: {
            enabled: true,
            runs: 2000
        }
    },
    networks: {
        development: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*' // Match any network id
        },
        ropsten: {
            host: '127.0.0.1',
            port: 8545,
            network_id: 3
            //from: "0xa436b1f00c6746b1548d247849727e9989d775a0"
        }
    }
}

