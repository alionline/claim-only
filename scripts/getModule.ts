// Importing libraries
import { ThirdwebSDK } from '@3rdweb/sdk';
import { ethers } from 'ethers';

//Importing private key
require('dotenv').config()

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      // Your wallet private key
      process.env.PRIVATE_KEY as string,
      // RPC URL
      ethers.getDefaultProvider('https://rinkeby-light.eth.linkpool.io/')
    )
  );
  
  // Set variable for the bundle drop module contract address which can be found after creating a bundle drop module in the dashboard
  const bundleDropAddress = '0xE50C2360499A81bCe169721614076ed9B2FC0d39';
  
  // Initialize the bundle drop module with the contract address
  const bundleDrop = sdk.getBundleDropModule(bundleDropAddress);
  
  
  export default bundleDrop;