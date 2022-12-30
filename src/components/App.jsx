import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Empty from "./Empty";
import Footer from "./Footer";

const Audio = ({ url }) => {
  if (!url) {
    return;
  }
  return (
    <div className="mt-5 h-8">
      <audio src={url} controls className="h-full"></audio>
    </div>
  );
};

const App = () => {
  const [media, setMedia] = useState([]);
  const audio = media;
  console.log(audio);
  console.log(media);
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    audio.push({ url: url });
    setMedia(audio);
    console.log(audio);
    console.log(media);
    // const audio = document.createElement("audio");
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild();
  };

  const Records = () => {
    return media.map((item, index) => <Audio {...item} key={index} />);
  };

  return (
    <div className="w-80 md:w-[400px] h-full">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold pb-5">Voice Recorder</h1>
        <div className="w-full h-2/3 bg-purple-900 rounded-xl flex flex-col items-center pt-5">
          <AudioRecorder
            onRecordingComplete={(blob) => addAudioElement(blob)}
            recorderControls={recorderControls}
          />
          {media.length > 0 ? <Records /> : <Empty />}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
