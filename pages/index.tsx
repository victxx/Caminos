import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const QRScanner = dynamic(() => import('../components/QRScanner'), { ssr: false })
const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Home: NextPage = () => {
  return (
    <div>
      <h1>Caminos - Sellos Digitales del Camino de Santiago</h1>
      <QRScanner />
      <Map />
    </div>
  )
}

export default Home