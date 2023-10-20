const { ethers, artifacts } = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy the "BOOK" contract
  const BOOK = await ethers.getContractFactory("BOOK");
  const book = await BOOK.deploy("MyBook", "BOOK");
  await book.deployed();
  console.log("NFT contract address", book.address);

  // Deploy the "BookMarketplace" contract (correct contract name)
  const Marketplace = await ethers.getContractFactory("BookMarketplace");
  const marketplace = await Marketplace.deploy(book.address);
  await marketplace.deployed();
  console.log("Marketplace contract address", marketplace.address);

  // Save contract data to frontend
  saveFrontendFiles(book, "BOOK");
  saveFrontendFiles(marketplace, "BookMarketplace"); // Use the correct contract name

  console.log("Deployment completed.");
}

function saveFrontendFiles(contract, name) {
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, null, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
