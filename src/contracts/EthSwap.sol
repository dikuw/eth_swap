pragma solidity ^0.5.16;

import "./Token.sol";

contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    Token public token;

    constructor(Token _token) public {
        token = _token;
    }
}
