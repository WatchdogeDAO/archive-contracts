// SPDX-License-Identifier: MIT
pragma solidity ^0.6.9;

contract Archivers {
    mapping(bytes32 => bool) public archivers;

    function addArchiver(bytes32 twitterId) external {
        archivers[twitterId] = true;
    }

    function removeArchiver(bytes32 twitterId) external {
        archivers[twitterId] = false;
    }

    function isArchiver(bytes32 twitterId) external view returns (bool) {
        return archivers[twitterId];
    }
}
