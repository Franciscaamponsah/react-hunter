import Circle from '../assets/HalfCirclle.png'
import HalfCirclee from '../assets/HalfCirclee.png'
import HalfCircle from '../assets/HalfCircle.png'

const Subscribe = () => {
  return (
    <div className="h-[14.25rem] bg-gradient-to-r from-purple-600 to-violet-700 ">
      <div className='relative'>
      <img className='absolute top-[4.8rem] left-24' src={HalfCirclee} alt="circle" />
      <img className='absolute left-[38%]' src={Circle} alt="circle" />
      <img className='absolute top-[4.2rem] left-[91.4%]' src={HalfCircle} alt="circle" />
      </div>
      <div className=' mx-14'>
      <div className=''>
        <p>Subscribe to our daily newsletter</p>
        <p>Be the first to know about releases and industry news and insights.</p>
      </div>
      <div className=''>
        <button>adada</button>
        <button>adada</button>
      </div>
      </div>
    </div>
  )
}

export default Subscribe