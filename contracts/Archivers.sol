// SPDX-License-Identifier: MIT
pragma solidity ^0.6.9;

contract Archivers {
    mapping(string => bool) public archivers;

    function addArchiver(string calldata twitterId) public {
        archivers[twitterId] = true;
    }

    function removeArchiver(string calldata twitterId) public {
        archivers[twitterId] = false;
    }

    function isArchiver(string calldata twitterId) public view returns (bool) {
        return archivers[twitterId];
    }
}
