const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  // URL from where we can extract the metadata for a HASHPunks
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5";

  // getContractFactory of the contract to deploy as new 
  const hashPunksContract = await ethers.getContractFactory("HASHPunks");

  // deploy the contract
  const deployedHashPunksContract = await hashPunksContract.deploy(metadataURL);

  await deployedHashPunksContract.deployed();

  // print the address of the deployed contract
  console.log("HASHPunks Contract Address:", deployedHashPunksContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

