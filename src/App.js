import './App.css';
import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Button from 'react-bootstrap/Button';
import play from './Function';

function App() {
  return (
    <div className="App">
      <CountdownCircleTimer
        isPlaying
        duration={15 * 60}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          return `${minutes}:${seconds}`
        }}
      </CountdownCircleTimer>
      <ol>
        <li>
          1
        </li>
        <li>
          2
        </li>
        <li>
          3
        </li>
        <li>
          4
        </li>
        <li>
          5
        </li>
      </ol>
      <button class="button-1" id='btn1' onclick={play}> 開始</button>
    </div>
  );
}

export default App;
