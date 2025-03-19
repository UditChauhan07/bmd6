import React,{useState} from 'react'
import styles from '../VideoStudy/index.module.css'

const Index = () => {
    const [playing, setPlaying] = useState(null);
    const videos = [
        {
          title: "UNDERSTANDING CLINICAL STUDIES",
          thumbnail: "Images/studycard1.png",
          videoUrl: "video1.mp4",
        },
        {
          title: "BRUNO MD6 SETUP & USAGE GUIDE",
          thumbnail: "Images/studycard2.png",
          videoUrl: "video2.mp4",
        },
        {
          title: "PROVEN RESULTS THROUGH CLINICAL TRIALS",
          thumbnail: "Images/studycard3.png",
          videoUrl: "video3.mp4",
        },
        {
          title: "UNDERSTANDING CLINICAL STUDIES",
          thumbnail: "Images/studycard1.png",
          videoUrl: "video4.mp4",
        },
        {
          title: "BRUNO MD6 SETUP & USAGE GUIDE",
          thumbnail: "Images/studycard2.png",
          videoUrl: "video5.mp4",
        },
        {
          title: "PROVEN RESULTS THROUGH CLINICAL TRIALS",
          thumbnail: "Images/studycard3.png",
          videoUrl: "video6.mp4",
        },
      ];
  return (
    <div className={styles.gallery}>
    {videos.map((video, index) => (
      <div key={index} className={styles.card}>
        {playing === index ? (
          <video src={video.videoUrl} controls autoPlay className={styles.video} />
        ) : (
          <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
        )}
        <div className={styles.overlay}>
          <h3 className={styles.title}>{video.title}</h3>
          <button className={styles.playButton} onClick={() => setPlaying(index)}>
          <img src='svg/videoArrow.svg' alt=''/>
          </button>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Index
