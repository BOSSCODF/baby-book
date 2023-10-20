const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BookMarketplace", function () {
  let bookToken;
  let bookMarketplace;
  let owner;
  let user;

  before(async function () {
    [owner, user] = await ethers.getSigners();

    const BookToken = await ethers.getContractFactory("BOOK");
    bookToken = await BookToken.deploy("Book Token", "BT");
    await bookToken.deployed();

    const BookMarketplace = await ethers.getContractFactory("BookMarketplace");
    bookMarketplace = await BookMarketplace.deploy(bookToken.address);
    await bookMarketplace.deployed();
  });

  it("should list a book for sale and buy it", async function () {
    const tokenId = 0;
    const price = 100;
    const quantity = 5;
    const buyerBalanceBefore = await bookToken.balanceOf(user.address, tokenId);

    await bookToken.mint(owner.address, tokenId, quantity, "0x");
    await bookToken.setApprovalForAll(bookMarketplace.address, true);

    await bookMarketplace
      .connect(owner)
      .listBookForSale(tokenId, price, quantity);
    await bookMarketplace
      .connect(user)
      .buyBook(tokenId, 3, { value: price * 3 });

    const sellerBalance = await bookToken.balanceOf(owner.address, tokenId);
    const buyerBalance = await bookToken.balanceOf(user.address, tokenId);

    expect(sellerBalance.toString()).to.equal((quantity - 3).toString());
    expect(buyerBalance.toString()).to.equal(
      buyerBalanceBefore.add(3).toString()
    );
  });
});
