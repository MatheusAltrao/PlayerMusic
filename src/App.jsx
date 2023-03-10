import '../src/styles/global.css'
import Card from './components/Card'
import Header from './components/Header'
import Title from './components/Title'

import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiVitess } from 'react-icons/si'

import img1 from './assets/images/lofi.png'
import img2 from './assets/images/forest.png'
import img3 from './assets/images/fireplace.png'
import img4 from './assets/images/rain.png'
import img5 from './assets/images/beach.png'
import img6 from './assets/images/office.png'
import img7 from './assets/images/coffee.png'
import img8 from './assets/images/metro.png'
import img9 from './assets/images/city.png'

import lofi1 from './assets/songs/lofi1.mp3'
import lofi2 from './assets/songs/lofi2.mp3'
import lofi3 from './assets/songs/lofi3.mp3'
import lofi4 from './assets/songs/lofi4.mp3'
import lofi5 from './assets/songs/lofi5.mp3'
import lofi6 from './assets/songs/lofi6.mp3'
import lofi7 from './assets/songs/lofi7.mp3'
import lofi8 from './assets/songs/lofi8.mp3'

function App() {





  return (
    <div className="px-2  ">
      <Header />

      <main className='max-w-[1000px] mx-auto  flex flex-col items-center justify-center h-full py-8 ' >

        <Title />

        <div className='flex items-center justify-center gap-8 flex-wrap'>

          <Card image={img1} imageAlt="lofi" music={lofi1} />
          <Card image={img2} imageAlt="forest" music={lofi2} />
          <Card image={img3} imageAlt="fireplace" music={lofi3} />
          <Card image={img4} imageAlt="rain" music={lofi4} />
          <Card image={img5} imageAlt="beach" music={lofi5} />
          <Card image={img6} imageAlt="office" music={lofi6} />
          <Card image={img7} imageAlt="coffee" music={lofi7} />
          <Card image={img8} imageAlt="metro" music={lofi8} />


        </div>



      </main>

      <footer>
        <div className='flex items-center justify-center gap-2 my-8' >

          <h2>Build with</h2>

          <div className='flex items-center text-[22px] text-purple-500 gap-1' >
            <FaReact />
            <SiTailwindcss />
            <SiVitess size={18} />
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
