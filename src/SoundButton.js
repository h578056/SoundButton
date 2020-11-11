import React, {useState, useEffect} from 'react';
import './soundButton.css';
import click from'./sounds/click.mp3';
import btlSound from'./sounds/dramatic-battle-scene-sound-effect.mp3';
import elmSound from'./sounds/electronic-music-trance-synth-loop-110-bpm.mp3';
import harpSound from'./sounds/harp-glissando-sound-effect.mp3';
import hyena from'./sounds/hyena-laugh.mp3';
import ls from'./sounds/light-switch-sound-effect.mp3';
import laugh from'./sounds/male-laugh-horror-sound-effect.mp3';
import spaceship from'./sounds/spaceship-door-sound-effect.mp3';
import sg from'./sounds/shotgun-reloading-sound.mp3';
import rain from'./sounds/rain-falling-sound-effect.mp3';
import action from'./sounds/dramatic-action-intro-music.mp3';
import useSound from 'use-sound';


const soundUrl = [btlSound,harpSound,elmSound,click, hyena, ls, laugh, spaceship, sg, rain, action];
const animateButton = function(e) {

    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  
  const bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
};
const SoundButton = (e) =>{
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * soundUrl.length)) 
  useEffect(() => {
    setRandomNumber(Number(Math.floor(Math.random() * soundUrl.length))); 
  }, [randomNumber]);
  const [playbackRate, setPlaybackRate] = React.useState(0.75);
  const [play] = useSound(soundUrl[randomNumber], {
    playbackRate,
    volume: 1,
  });
  const handleClick = (e) => {
    setRandomNumber(Number(Math.floor(Math.random() * soundUrl.length)))
    setPlaybackRate(playbackRate + 0.1);
    play();
  };
    return (
      <div>
        <button onClick={()=>handleClick(e)} className="bubbly-button">Click me!</button>
      </div>
    );
}
export default SoundButton;