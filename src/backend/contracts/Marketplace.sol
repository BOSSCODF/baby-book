// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BookMarketplace is ReentrancyGuard {
    IERC1155 public bookTokenContract;

    struct BookListing {
        address seller;
        uint256 tokenId;
        uint256 price;
        uint256 quantity;
    }

    mapping(uint256 => BookListing[]) public bookListings;

    constructor(address _bookTokenContract) {
        bookTokenContract = IERC1155(_bookTokenContract);
    }

    event BookListed(address indexed seller, uint256 indexed tokenId, uint256 price, uint256 quantity);
    event BookPurchased(address indexed buyer, address indexed seller, uint256 indexed tokenId, uint256 price, uint256 quantity);

    function listBookForSale(uint256 tokenId, uint256 price, uint256 quantity) public {
        require(bookTokenContract.balanceOf(msg.sender, tokenId) >= quantity, "You don't have enough books to list.");
        require(quantity > 0, "Quantity must be greater than 0");

        BookListing memory newListing = BookListing({
            seller: msg.sender,
            tokenId: tokenId,
            price: price,
            quantity: quantity
        });

        bookListings[tokenId].push(newListing);

        emit BookListed(msg.sender, tokenId, price, quantity);
    }

    function buyBook(uint256 tokenId, uint256 quantity) public payable nonReentrant {
        require(bookListings[tokenId].length > 0, "No listings available for this book.");
        require(quantity > 0, "Quantity must be greater than 0");

        BookListing storage listing = bookListings[tokenId][0];
        require(listing.quantity >= quantity, "Not enough books available in this listing");
        uint256 totalPrice = listing.price * quantity;
        require(msg.value >= totalPrice, "Insufficient funds sent");

        // Transfer books to the buyer
        bookTokenContract.safeTransferFrom(listing.seller, msg.sender, tokenId, quantity, "");


        // Transfer funds to the seller
        payable(listing.seller).transfer(totalPrice);

        // Update the listing's quantity
        listing.quantity -= quantity;

        // If the listing is sold out, it remains in the list without being removed
        emit BookPurchased(msg.sender, listing.seller, tokenId, listing.price, quantity);
    }
}

