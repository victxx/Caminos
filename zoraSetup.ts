// zoraSetup.ts
import { zora } from 'viem/chains';
import { http, createPublicClient } from 'viem';
import { createCollectorClient } from '@zoralabs/protocol-sdk';

const publicClient = createPublicClient({
  chain: zora,
  transport: http(),
});

const collectorClient = createCollectorClient({ 
  chainId: zora.id, publicClient 
});

export { collectorClient, publicClient };
