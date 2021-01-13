require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain hole idea drop supply secret'; 
let testAccounts = [
"0x6e1554d63fd634e31e8f14e649a606871ce4fe86ef5f02320e11a83863dda77c",
"0x54a662849a3a7df765aa78540c772af8f6aeda7923dedb3b11159135a5ece080",
"0xc7056d33e790b5af938f0b25527d5928fae92fe306b7f425dfabecbcd5bfbe4f",
"0x0457bd6b6b8cf4540fadfaac6182e7f123405cab79b7eb95d9cbffdc200477a7",
"0x3e761c3d5968cfb7ebb3c19f2e91383fae142210fb841e46d7e6ed3712a594c6",
"0xf29cf97d5a26cc80167e9d841f54027b90aacc088c37e0f6f02bc1c2a5e13c1d",
"0x559c20e8940c6b133010e68568f7c1555e22699bad866f392201d0793ded302f",
"0x2e9bc194b218d99b02551acd0073f1d726c182cc7e9cfec286d17e14f2c061c3",
"0x5f2d2180cef3b7f5daa30fe7b2e0195747f3c9f268267d0529b925fe0a7bafb0",
"0x9490cef0871ebed400c0db1188f456c4ca64f6989d7f43607db7b2206cbefa62"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
