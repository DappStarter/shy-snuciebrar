require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict duck ensure traffic trap random pitch proof include argue metal gentle'; 
let testAccounts = [
"0x2952ed51ec25985ee469a48a391564029160383fe1270a66973d2907c300a9fb",
"0xd32f665647838f1243e9014c53dfa3906555fcd916cbfa05cc3ff73e03e73fe5",
"0x953d35181145031ea4ef9c7a67cafbd489b7e7e9a3894c9af959a4ded72beccd",
"0xf87e051513bd013f832b003fffc382024e11becb9680dc76b770d96d18d63d99",
"0x3420ac0185d021367843799b7a0c210080bc91a6d211962c894af33a236476c6",
"0x9abc67335a05c5b43740010976d9573fa26db280ead1d01e0bbcdc26d93cbd21",
"0x7394410f9ae20859743e9ee49202328b081cb522434e4f79e84507ed4b6c5eaf",
"0xc81b2493409bd9ba57104349aed4c7a4ad35e39cec0fef82eed00d90857dcdef",
"0x24a2967c06558895e248f489087e1e7e658605a7353c46c8c9474a2875474698",
"0xe21d06000e0bd161e207d5aeba4b06d1dcc9c67d64a69d961d98e13aedfa18ff"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

