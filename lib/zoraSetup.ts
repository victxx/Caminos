import { ZDK, ZDKNetwork, ZDKChain } from '@zoralabs/zdk';

const zdkArgs = {
    networks: [
        {
            network: ZDKNetwork.Base,
            chain: ZDKChain.Mainnet,
        },
    ],
    apiKey: "hv5CvffbvGXdhuH0xDDpLQ",
};

const zdk = new ZDK(zdkArgs);

export { zdk };





