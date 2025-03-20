import React, { useState } from 'react'
import styles from '../VideoStudy/index.module.css'

const Index = () => {
    const [playing, setPlaying] = useState(null);
    const videos = [
        {
            title: "UNDERSTANDING CLINICAL STUDIES",
            subtitle: "Discover the latest clinical studies supporting the Bruno MD6. Learn how real-world data backs its accuracy and reliability.",
            thumbnail: "Images/studycard1.png",
            videoUrl: "Video/Tutorial01.mp4",
        },
        {
            title: "BRUNO MD6 SETUP & USAGE GUIDE",
            subtitle: "Learn how to set up and use the Bruno MD6 with clear, step-by-step instructions",
            thumbnail: "Images/studycard2.png",
            videoUrl: "Video/Tutorial02.mp4",

        },
        {
            title: "PROVEN RESULTS THROUGH CLINICAL TRIALS",
            subtitle: "Discover how clinical trials have confirmed the Bruno MD6’s accuracy and consistency. ",
            thumbnail: "Images/studycard3.png",
            videoUrl: "Video/Tutorial03.mp4",
        },
        {
            title: "UNDERSTANDING CLINICAL STUDIES",
            subtitle: "Discover the latest clinical studies supporting the Bruno MD6. Learn how real-world data backs its accuracy and reliability.",
            thumbnail: "Images/studycard1.png",
            videoUrl: "Video/Tutorial04.mp4",
        },
        {
            title: "BRUNO MD6 SETUP & USAGE GUIDE",
            subtitle: "Learn how to set up and use the Bruno MD6 with clear, step-by-step instructions",
            thumbnail: "Images/studycard2.png",
            videoUrl: "Video/Tutorial05.mp4",
        },
        {
            title: "PROVEN RESULTS THROUGH CLINICAL TRIALS",
            subtitle: "Discover how clinical trials have confirmed the Bruno MD6’s accuracy and consistency. ",
            thumbnail: "Images/studycard3.png",
            videoUrl: "Video/Tutorial05.mp4",
        },
      
     
    ];
    return (

        <div className={styles.gallery}>
            {videos.map((video, index) => (
                <div key={index} className={styles.card}>
                    {playing === index ? (
                        <video src={video.videoUrl} controls autoPlay className={styles.video}></video>
                    ) : (
                        <>
                            <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
                            <div className={styles.overlay}>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{video.title}</h3>
                                    <p className={styles.subtitle}>{video.subtitle}</p>
                                </div>
                                <button className={styles.playButton} onClick={() => setPlaying(index)}>
                                    <img src='svg/videoArrow.svg' alt='' />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}

        </div>

    )
}

export default Index
