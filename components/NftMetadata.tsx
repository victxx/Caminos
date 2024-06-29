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
      // Aquí va tu lógica para obtener metadata usando la API de Zora
    };

    fetchMetadata();
  }, [contractAddress, tokenId]);

  if (!metadata) return <div>Loading...</div>;

  return (
    <div>
      {/* Renderiza los datos de metadata aquí */}
    </div>
  );
};

export default NftMetadata;

