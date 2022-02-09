import { FC } from "react";

import "../css/components/projectPlan.css";

interface ProjectPlanProps {
  story: string;
  characterDesignPaths: string[];
  originalPicturePaths: string[];
  voicePath: string;
  sound_effect_path: string;
}

const ProjectPlan: FC<ProjectPlanProps> = ({
  story,
  characterDesignPaths,
  originalPicturePaths,
  voicePath,
  sound_effect_path,
}) => {
  let isPlaying = false;
  const voice = new Audio(voicePath);
  voice.volume = 0.1;
  const SE = new Audio(sound_effect_path);
  SE.volume = 0.1;

  const switchAudio = (audio: HTMLAudioElement) => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
  };

  return (
    <section className="plan__wrap">
      <h2 className="plan__heading">Story</h2>
      <p className="plan__story">{story}</p>
      <h2 className="plan__heading">Character Design</h2>
      {characterDesignPaths.map((path) => (
        <img
          key={path}
          src={path}
          alt="character design"
          className="plan__image"
        ></img>
      ))}
      <h2 className="plan__heading">Original Picture</h2>
      {originalPicturePaths.map((path) => (
        <img
          key={path}
          src={path}
          alt="character design"
          className="plan__image"
        ></img>
      ))}
      <h2 className="plan__heading">Voice</h2>
      <div className="plan__wrap--playIcon" onClick={() => switchAudio(voice)}>
        <img src="/play.svg" alt="voice" className="plan__icon--audio" />
      </div>
      <h2 className="plan__heading">Sound Effect</h2>
      <div className="plan__wrap--playIcon" onClick={() => switchAudio(SE)}>
        <img src="/play.svg" alt="sound effect" className="plan__icon--audio" />
      </div>
    </section>
  );
};

export default ProjectPlan;
