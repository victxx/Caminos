// components/NftMetadata.tsx
import { FC, useEffect, useState } from 'react';

interface NftMetadataProps {
  contractAddress: string;
  tokenId: string;
}

const NftMetadata: FC<NftMetadataProps> = ({ contractAddress, tokenId }) => {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      
    };

    fetchMetadata();
  }, [contractAddress, tokenId]);

  if (!metadata) return <div>Loading...</div>;

  return (
    <div>
      {}
    </div>
  );
};

export default NftMetadata;

