import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react';
import './App.css';


const supportedChainIds = [1, 4, 137, 250, 43114, 80001];

const connectors = {
  injected: {},
  walletconnect: {},
  walletlink: {
    appName: "Claim NFT",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function App() {
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <div className="d-flex">
        <div className="nav">
          <ConnectWallet />
        </div>

        <div className="main">
          <iframe
            src="https://cloudflare-ipfs.com/ipfs/bafybeihz5jer6ad75ku3dh6mj4rlufrtiydv5mkoqurm55nv2uckmfiuya?contract=0xE50C2360499A81bCe169721614076ed9B2FC0d39&chainId=4&tokenId=0"
            width="600px"
            height="600px"
          />
        </div>
      </div>
    </ThirdwebProvider>
  );
}
export default App;

