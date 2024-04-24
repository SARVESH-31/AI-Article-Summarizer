import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo"
        className='w-28 object-contain'/>
        <button
          type="button"
          onClick={() =>window.open('') }
          className='black_btn'>Apoorv, Sarvesh, Tanya
        </button>
      </nav>

<h1 className='head_text'>Intelligent Article Summarizer with <br className='max-md:hidden'/>
<span className='orange_gradient'>Rapid API</span></h1>

<h2 className='desc'>
Our website hosts an innovative AI-driven application, utilizing OpenAI technology, designed to streamline the process of summarizing extensive articles. Employing advanced artificial intelligence techniques, this tool swiftly and effortlessly condenses lengthy articles for users. By employing a range of machine learning models, this web application efficiently identifies crucial concepts and significant sentences within the content.</h2>

    </header>
    
  )
}

export default Hero