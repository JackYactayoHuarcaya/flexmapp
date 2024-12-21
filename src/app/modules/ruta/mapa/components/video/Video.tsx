import { motion } from "framer-motion";
import { SetStateAction } from "react";
import audioEfecto from "../../../../../components/audio/fast-simple-chop-5-6270.mp3";

const playAudio = () => {
  const audio = new Audio();
  audio.src = audioEfecto;
  audio.play();
};

type typeVideo = {
  video: string;
  setTutorialVideo: React.Dispatch<SetStateAction<boolean>>;
  tutorialVideo: boolean;
};

const Video = ({ video, setTutorialVideo }: typeVideo) => {
  const url = "https://www.youtube.com/embed/";
  return (
    <motion.div
      key={"video-data"}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      onClick={() => {
        setTutorialVideo(false);
        playAudio();
      }}
      className="w-full absolute bg-[rgba(0,0,0,0.75)] top-0 min-h-screen opa flex justify-center items-center"
    >
      <iframe
        allowFullScreen
        width={760}
        height={440}
        className="w-[760px] h-[440px] min-w-[300px]"
        src={url + video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </motion.div>
  );
};
export default Video;
