require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note sister coconut install cash equal genius'; 
let testAccounts = [
"0x2294b57fde91a41bea349cb63a86a2e9fb2cc8d650f0061d82c0a44d5182345a",
"0xb3e69085adc995728115d7076446e7f448a4567364e0a572c1f95177b1661bfe",
"0x7ec717d3c75ec2af0d717e6014d3dfe459fd941f591e76b7c1383c411830df81",
"0x7044fe7b0f670210a356446e109ba0d706d0bcb0a348e6652ac90c1bc7beafcb",
"0x9337e817f73d87b79bc4779aaf03fec824882eb11145177e8b23beb66fe32da1",
"0x5f29d7edddb16869f83ae7860a98037e3051fc95580495fb8c504e4668aea74c",
"0x8ca6db7ced5a895c6fd877a513e1c00b29f93ae799cb005b43503121c2d510a4",
"0xdb265cf6ca40a4f308421e52797b4975f22ff7fa767d8f7f77e2ccc764153407",
"0xb1ed3a09810243ddd2ad8910543086567a8ff98ea70ab534d36091828dafd628",
"0x4ef9499bc60a9d05af4ba1ada2fcb24cdfa79299e04097f521ef88d1739438e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
