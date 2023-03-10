
import { useState, useRef, React, useEffect } from 'react'


const Card = (props) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.08)
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audioPlayer = audioRef.current;
    audioPlayer.volume = 0.01

    isPlaying ? audioPlayer.pause() : audioPlayer.play()

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`card relative w-full max-w-[310px] h-[300px]  rounded-[20px] overflow-hidden z-[0] ${isPlaying ? 'shadoww' : 'shadow-none'} `} onClick={togglePlay} >


      <div className=' absolute px-2 z-10 bottom-4  w-full  ' >
        <audio loop ref={audioRef} src={props.music} className='hidden' />
      </div>
      <img className='object-cover rounded-[20px] cursor-pointer shadoww  ' src={props.image} alt={props.imageAlt} />
    </div>
  )
}

export default Card
