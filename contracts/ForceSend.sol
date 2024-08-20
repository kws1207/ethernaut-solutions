// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ForceSend {
    address payable recipient;

    constructor(address payable _recipient) {
      recipient = _recipient;
    }

    fallback() external payable {
      selfdestruct(recipient);
    }
}
