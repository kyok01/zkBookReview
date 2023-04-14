pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintNFT is ERC721, Ownable {
    constructor() ERC721("MintNFT", "MintNFT") {}

    function mint(address to, uint256 tokenId) public onlyOwner {
      _mint(to, tokenId);
    }

    function transfer(address to, uint256 tokenId) public {
      safeTransferFrom(msg.sender, to, tokenId, "");
    }
}

// NFT address is 0xF80D6de6B421a007c2eE3C29AD85e3eA41bfcA65
