pragma solidity ^0.4.6;

contract Splitter {
    
    address private alice;
    address private bob;
    address private carol;
    uint public balance = 0;
    
    function Splitter(address aliceAddress, address bobAddress, address carolAddress) {
        alice = aliceAddress;
        bob = bobAddress;
        carol = carolAddress;
    }
    
    function send(uint amount) public payable {
        if ( msg.sender == alice ) {
            uint split = amount / 2;
            bob.transfer(split);
            carol.transfer(amount - split);
        } else {
            balance += amount;
        }
    }
    
    function bobsBalance() constant returns (uint) {
        return bob.balance;
    }
    
    function carolsBalance() constant returns (uint) {
        return carol.balance;
    }
}