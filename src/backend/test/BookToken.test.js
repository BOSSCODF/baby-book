const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BookToken", function () {
  let bookToken;
  let owner;
  let user;

  before(async function () {
    [owner, user] = await ethers.getSigners();

    const BookToken = await ethers.getContractFactory("BOOK");
    bookToken = await BookToken.deploy("Book Token", "BT");
    await bookToken.deployed();
  });

  it("should mint tokens", async function () {
    const tokenId = 0;
    const amount = 10;
    const userAddress = user.address;

    await bookToken.mint(userAddress, tokenId, amount, "0x");
    const balance = await bookToken.balanceOf(userAddress, tokenId);
    expect(balance.toNumber()).to.equal(amount);
  });
});
