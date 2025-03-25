import React, { useState } from 'react';
import styles from '../Relible/index.module.css';

const Index = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const handlePlayClick = (video) => {
        setPlayingVideo(video);
    };

    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainTitle}> <h1><b>Real Stories, </b>Real Results</h1></div>
            <div className={styles.section}>
                <div className={styles.Part1}>
                    <h2>See What People Love About BrunoMD6!</h2>
                    {/* <span><img src='svg/MD6-01.svg' alt=''/></span> */}
                </div>
                <div className={styles.Part2}>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            {playingVideo === 'video1' ? (
                                <video controls autoPlay className={styles.video}>
                                    <source src='Video/Darci.mp4' type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <>
                                    <img src="Images/card1.png" alt="Speedy Results" className={styles.image} onClick={() => handlePlayClick('video1')} />
                                    <div className={styles.playButton} onClick={() => handlePlayClick('video1')}>
                                        <img src='svg/videoBtn.svg' alt=''/>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Speedy Results</h3>
                            <p className={styles.text}>
                                It is a relief for me to have a machine that is right there at my fingertips. I don’t have to go to the lab, in 5 seconds the results are there. It’s fast.
                            </p>
                            <div className={styles.footer}>
                                <span><img src='svg/Darcisvg.svg' alt='Darcisvg'/></span>
                                <span className={styles.name}>Darci</span>
                                <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imageContainer}>
                            {playingVideo === 'video2' ? (
                                <video controls autoPlay className={styles.video}>
                                    <source src='Video/Darrin.mp4' type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <>
                                    <img src="Images/card2.png" alt="Take Control" className={styles.image} onClick={() => handlePlayClick('video2')} />
                                    <div className={styles.playButton} onClick={() => handlePlayClick('video2')}>
                                        <img src='svg/videoBtn.svg' alt=''/>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Take Control</h3>
                            <p className={styles.text}>
                                I am so excited to let everyone know that with the Bruno, it is so awesome and so on track that you can take control of your life.
                            </p>
                            <div className={styles.footer}>
                                <span><img src='svg/Darrinsvg.svg' alt='Darrinsvg'/></span>
                                <span className={styles.name}>Darrin</span>
                                <a href="#" className={styles.learnMore}>Learn More <span><img src='svg/morearrow.svg'/></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
