import { useState, useCallback } from 'react';
import music from '../assets/others/theamMusic.mp4';
import playbtn from "../assets/icons/playbutton.svg"
import pousebtn from "../assets/icons/pousebutton.svg"

const Overlay = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    // const [volume, setVolume] = useState(0.1); // Default volume to 1 (max volume)

    const togglePlayPause = useCallback(() => {
        const player = document.getElementById('player');
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
        setIsPlaying(!isPlaying); // Toggle the play/pause state
    }, [isPlaying]);

    

    return (
        <div id="overlay">
            <audio id="player" loop src={music}></audio>
            <div className='flex items-center gap-3' >
                <button onClick={togglePlayPause}>
                    <img src={isPlaying ? `${pousebtn}` : `${playbtn}` } alt=" play"
                     className='h-[2rem] w-[2rem]'
                    />
                    {/* {isPlaying ? `{playbtn}` : `{pousebtn}`} */}
                </button>
                
            </div>
        </div>
    );
};

export default Overlay;
