import React from "react";
import styles from "./styles.module.css";

const healthcareData = [
  {
    title: "For Caregivers & Nurses",
    image: "Images/Benefit1.svg",
    points: [
      "Multi-layered system design supports various management models.",
      "Abnormal values are highlighted for quick case examination.",
      "Automatic abnormal alerts can be sent to patients based on pre-set parameters.",
      "Search filters and categorized lists help manage abnormal cases efficiently.",
      "Automatically generated health reports include professional data analysis, reducing processing time."
    ]
  },
  {
    title: "For Family Members",
    image: "Images/Benefit2.svg",
    points: [
      "Automatically maintains a comprehensive health log.",
      "Option to set up automated alerts for peace of mind."
    ]
  },
  {
    title: "For Patients",
    image: "Images/Benefit3.svg",
    points: [
      "Simple data upload and management process.",
      "Flexible time slots and diary functions enhance record-keeping.",
      "Clear, visual data analysis provides a better understanding of health trends.",
      "Strengthens physician-patient relationships through timely reports and abnormal alerts.",
      "Health records can be shared with trusted individuals for additional support."
    ]
  },
  {
    title: "For Physicians",
    image: "Images/Benefit4.svg",
    points: [
      "Instant access to real-time patient health data.",
      "Professionally formatted and easy-to-read management profiles.",
      "Multiple data display options allow for easy trend observation.",
      "Insight into medication adherence aids in making informed medical decisions.",
      "Enhances physician-patient relationships through regular, accessible health reports."
    ]
  }
];

const HealthcareInfo = () => {
  return (
    <div className={styles.container}>
      {healthcareData.map((item, index) => (
         <div key={index} className={styles.card}>
            
        <div  className={styles.image}>
        <img src={item.image} alt={item.title} />
        </div>
         <h3 className={styles.title}>{item.title}</h3>
         <ul className={styles.list}>
           {item.points.map((point, idx) => (
             <li key={idx}>{point}</li>
           ))}
         </ul>
       </div>
      ))}
    </div>
  );
};

export default HealthcareInfo;
