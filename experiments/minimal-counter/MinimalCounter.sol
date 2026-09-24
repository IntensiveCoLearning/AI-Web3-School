// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract MinimalCounter {
    uint256 public count;
    function getCount() public view returns (uint256) { return count; }
    function increment() public { count += 1; }
}
