import facebook from '../assets/facebook.png'
import binance from '../assets/Binance.png'
import google from '../assets/google.png'
import airbnb from '../assets/airbnb.png'
import netflix from '../assets/Netflix.png'

const TrustedCom = () => {
  return (
    <div className='space-y-3 bg-red-600'>
      <div className="flex justify-center items-center">
        <p className='text-[#333441]'>Trusted by:</p>
      </div>
      <div className="flex justify-center items-center space-x-10">
        <img src={facebook} />
        <img src={binance} />
        <img src={google} />
        <img src={airbnb} />
        <img src={netflix} />
      </div>
    </div>
  )
}

export default TrustedCom
