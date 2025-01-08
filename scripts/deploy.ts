import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  /////factory deploy
  const bidi = await ethers.getContractFactory("Bidify");
  const token = await bidi.deploy();

  /////token deploy
  // const bidi = await ethers.getContractFactory("BidifyToken");
  // const token = await bidi.deploy("StandardBidifyToken", "SBT");

  console.log("Contract address:", await token.getAddress());

  // const tx = await token.transferOwnership("0x24D1162C385a8f4ac84D29269CB7aB0Ca21A7586")
  // await tx.wait();
  // const owner = await token.owner();
  // console.log("Contract owner:", owner);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
