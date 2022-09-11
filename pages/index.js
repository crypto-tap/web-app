import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MagnifyingGlass } from 'phosphor-react'
import payImage from '../assets/pay.png'
import transferImage from '../assets/transfer.png'
import receiveImage from '../assets/receive.png'

const valueOnAccount = 1601.07
export default function Home() {
  // const [percentageToInvest, setPercentageToInvest] = useState<number>(10)
  // const [walletAddress, setWalletAddress] = useState<string>('')
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [isConnected, setIsConnected] = useState<boolean>(false)
  // const [userName, setUserName] = useState<string>('')
  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')

  // function handleSubmit() {
  //   setIsConnected(true)
  // }

  // async function handleConnectWithMetamask() {
  //   try {
  //     const { ethereum } = window

  //     if (ethereum) {
  //       setIsLoading(true)
  //       const provider = new ethers.providers.Web3Provider(window.ethereum)

  //       await provider.send('eth_requestAccounts', [])

  //       const signer = await provider.getSigner()
  //       const address = await signer.getAddress()

  //       if (address) {
  //         setWalletAddress(address)
  //         setIsConnected(true)
  //         setIsLoading(false)
  //       }
  //     }
  //   } catch (error) {
  //     console.log('erro ao pegar address: ', error)
  //     setIsLoading(false)
  //   }
  // }

  return (
    <>
      <Head>
        <title>Tap Pay Admin</title>
        <meta name="description" content="Tap pay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen">
        <div className="max-w-md flex mx-auto my-24 max-h-[896px]">
          <div className="w-full h-full shadow-xl rounded-xl bg-gray100 px-16 py-16 text-gray500">
            <h1 className="font-logo text-3xl font-bold text-center">
              CryptoTap
            </h1>
            <div className="flex-col space-y-8 font-rob text-2xl">
              <section className="mt-12">
                <h1 className="font-soft text-2xl">Olá, Sabrina</h1>
                <div className="flex gap-x-8 mt-10">
                  <div className="flex-col items-center">
                    <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                      <Image
                        src={payImage}
                        alt="ícone de duas mãos segurando uma moeda"
                      />
                    </div>
                    <p className="font-medium text-[15px] text-center">Pagar</p>
                  </div>
                  <div className="flex-col items-center">
                    <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                      <Image src={receiveImage} alt="ícone de uma carteira" />
                    </div>
                    <p className="font-medium text-[15px] text-center">
                      Receber
                    </p>
                  </div>
                  <div className="flex-col items-center">
                    <div className="w-[72px] h-[72px] flex justify-center items-center rounded-full bg-gradient-to-b from-aquaForGradient to-aqua700 hover:scale-105 transition duration-500 cursor-pointer">
                      <Image
                        src={transferImage}
                        alt="ícone de duas moedas com setas em volta"
                      />
                    </div>
                    <p className="font-medium text-[15px] text-center">
                      Transferir
                    </p>
                  </div>
                </div>
              </section>
              <section className="font-medium text-2xl">
                <h1 className="font-thin">Saldo</h1>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-5 rounded-sm bg-aqua700">
                      {/* quadrado colorido */}
                    </div>
                    <span>R$ {valueOnAccount.toString()}</span>
                  </div>
                  <p className="text-green500 text-xs font-regular">
                    307,20 USD
                  </p>
                </div>
              </section>
              <section className="font-medium text-2xl">
                <h1 className="font-thin">Poupar</h1>
                <div className="mt-3">
                  <input
                    id="range"
                    // className="w-full h-5 bg-aqua700 rounded-md appearance-none"
                    type="range"
                    max={100}
                    min={10}
                    step={1}
                    value={30}
                    // onChange={(e) =>
                    //   setPercentageToInvest(Number(e.target.value))
                    // }
                  />
                  <div className="flex items-center justify-between font-thin text-sm">
                    <span>10%</span>
                    {/* <span className="text-lg text-aqua700">
                    {percentageToInvest}
                  </span> */}
                    <span>100%</span>
                  </div>
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <div className="flex items-start gap-x-2">
                    <div className="w-4 h-5 rounded-sm bg-aqua500 mt-px">
                      {/* quadrado colorido */}
                    </div>
                    <div className="flex-col leading-none">
                      <span>
                        R$ 160.00
                        {/* {(valueOnAccount * (percentageToInvest / 100)).toFixed(2)} */}
                      </span>
                      <p className="text-xs font-regular">30,70 USD</p>
                    </div>
                  </div>
                  <p className="text-green500 text-xs font-regular">8% a.a.</p>
                </div>
              </section>
              <section className="font-medium text-2xl">
                <h1 className="font-thin">Extrato</h1>
                <div className="mt-3 bg-gray300 flex items-center px-3 gap-2 w-full border border-transparent rounded-md hover:bg-gray400 transition duration-500 focus:border-aqua500 group">
                  <MagnifyingGlass size={24} />
                  <input
                    placeholder="Buscar"
                    className="placeholder:text-sm text-sm w-full py-2 rounded-md hover:bg-gray400 bg-gray300 focus:outline-none transition duration-500"
                    type="text"
                  />
                </div>
                <div className="mt-6 text-sm max-h-[160px] overflow-y-scroll scroll-m-24 flex-col space-y-4">
                  <div className="flex justify-between">
                    <span>Rendimento</span>
                    <div>
                      <strong className="text-gray500">R$1,07</strong>
                      <p className="text-xs text-gray400">0,20 USD</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Comunidade</span>
                    <div>
                      <strong className="text-gray500">R$0,10</strong>
                      <p className="text-xs text-gray400">0,02 USD</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>DAO</span>
                    <div>
                      <strong className="text-gray500">R$0,10</strong>
                      <p className="text-xs text-gray400">0,02 USD</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* <div className="w-full space-y-12">
              <h1 className="text-center font-bold text-logo text-3xl">
                Log in
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full rounded-md py-2 px-3 border-b border-transparent bg-gray-50 focus:outline-none focus:border-aqua500 transition duration-500"
                  />
                  <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md py-2 px-3 border-b border-transparent bg-gray-50 focus:outline-none focus:border-aqua500 transition duration-500"
                  />
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md bg-gray-50 py-2 px-3 border-b border-transparent focus:outline-none focus:border-aqua500 transition duration-500"
                  />
                </div>
                <div className="flex gap-x-4 mt-12">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex flex-1 justify-center bg-aqua500 disabled:bg-aqua700 py-3 px-6 h-12 text-center font-bold hover:bg-aqua700 transtion duration-500 rounded-md"
                  >
                    {isLoading ? (
                      <CircleNotch className="animate-spin h-full" width={32} />
                    ) : (
                      'Connect'
                    )}
                  </button>
                  <button
                    onClick={handleConnectWithMetamask}
                    disabled={isLoading}
                    className="w-12 h-12 rounded-md bg-aqua500 hover:scale-105 transtion duration-500"
                  >
                    <Image src={metamaskLogo} alt="logo da metamask" />
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
