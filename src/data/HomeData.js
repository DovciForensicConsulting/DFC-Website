// src/data/HomeData.js

import { FaBookReader, FaPeopleArrows, FaSortAmountUpAlt } from "react-icons/fa";
import { FaMagnifyingGlass, FaPeopleRobbery } from "react-icons/fa6";
import { GiInjustice } from "react-icons/gi";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { RiSpeakFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";

export const VideoHeroBanner = {
    Title: "Dovci Forensic Consulting",
    Body: "Expert Forensic Services",
    CTA_Button_Title: "Contact Us",
    CTA_Button_Link: "/contact",
    VideoSrc: 'https://media.istockphoto.com/id/1283034261/video/medical-research-scientist-conducts-dna-experiments-under-a-digital-microscope-in-a.mp4?s=mp4-640x640-is&k=20&c=MSDrN7riCwWdLHwUID6YwTMH5htbYNnqRmRn9CEyUHA='
}

export const WhyChooseUs = {
  Title: "Why Partner With Us?",
  Reasons: [
    {
      Title: "Experience",
      Text: "Our service is backed by nearly 40 years of acquired experience gained from casework in an accredited forensic laboratory, investigating hundreds of crime scenes, attending hundreds of autopsies, and consulting on many criminal cases"
    },
    {
      Title: "Knowledge",
      Text: "Our expertise results not only from experience, but from diverse and in depth training. Our training was recieved from college institutions, a basic police academy, institutional training and in-service schools, external forensic courses and seminars and personal technical pursuits"
    },
    {
      Title: "Competence",
      Text: "The service we offer is essential to your success. No attorney wants to provide ineffectual counsel. Our firm provides critical insights and opinions resulting from years of expert analysis and service to both prosecutors and defense attorneys. Partnering with DFC will allow you to have the confidence that stems from real knowledge and facts which allows you to provide the best defense for your client"
    },
    {
      Title: "Flexible",
      Text: "Our expert will work with indigent defense funding from state or court public defender agencies. We also collaborate with contracted defense and civil attorneys."
    }
  ],
  CTA_Title: "Contact Us",
  CTA_Link: "/contact",
};

export const DoForYou = {
  Title: "What can we do for you?",
  Text: "If you are like most criminal defense attorneys, you start a case with a massive discovery file. You screen it well enough to decide that you need help to put the case in perspective. That’s where we come in. We have the experience and knowledge to help you do just that. Here is what we can do for you.",
  WeDos: [
    {
      Title: "Review",
      Text: "We review crime scene investigations to identify potentially exculpatory evidence that may be crucial to an effective defense for your client.",
      Icon: FaBookReader
    },
    {
      Title: "Explain",
      Text: "We will tell you in understandable terms what investigators, forensic scientists and pathologists are saying in their reports.",
      Icon: RiSpeakFill
    },
    {
      Title: "Evaluate",
      Text: "We evaluate the forensic processes utilized by police agencies to investigate crime scenes and determine areas requiring further investigation.",
      Icon: HiDocumentMagnifyingGlass
    },
    {
      Title: "Examine",
      Text: "We examine physical evidence that may be probative and relevant to the defense of your client.",
      Icon: FaMagnifyingGlass
    },
    {
      Title: "Reconstruct",
      Text: "We reconstruct shooting scenes and determine critical factors such as shooter and victim positioning and movements, bullet trajectories, and blood spatter patterns.",
      Icon: FaPeopleRobbery
    },
    {
      Title: "Improve",
      Text: "We analyze police generated 3D scene laser scans, scene security audio-video evidence and produce enhanced renderings and images.",
      Icon: FaSortAmountUpAlt
    },
    {
      Title: "Write",
      Text: "We write analytical reports documenting forensic analytical findings and how they were obtained.",
      Icon: TfiWrite
    },
    {
      Title: "Testify",
      Text: "We provide expert witness testimony about the observations, findings and opinions we include in our reports.",
      Icon: GiInjustice
    },
    {
      Title: "Demonstrate",
      Text: "We produce technical and scientific illustrations as well as accurate 3D renderings and videos of crime scene theories and reconstructions.",
      Icon: FaPeopleArrows
    }
  ]
}


export const Experience = {
  Title: "Experience You Can Trust",
  Experiences: [
    {
      Years: "200+",
      Description: "Crime Scene Investigations"
    },
    {
      Years: "200+",
      Description: "Forensic Autopsy Assists"
    },
    {
        Years: "25 Years",
        Description: "Forensic Scientist Experience in an ASCLD/LAB ISO 17025 Accredited Laboratory System"
    },
    {
        Years: "25 Years",
        Description: "Certified Police Officer with Regular Training in Use of Force, Firearms Proficiency, and Defense Tactics"
    },
    {
        Years: "2 Years",
        Description: "AMBDI Nationally Certified Medical Legal Death Investigator."
    },
    {
      Years: "12 Years",
      Description: "Independent Forensic Consultant Contracting with Retained Criminal Defense Attorneys, Public Defenders, and Civil Attorneys"
    },
    {
      Years: "33 Years",
      Description: "Court Qualified Expertise in Firearms and Toolmarks, Shooting Scene Reconstruction, Crime Scene Processing, Bloodstain Pattern Analysis, Footwear and Tire Impression Analysis"
    },
    {
      Years: "33 Years",
      Description: "Forensic Scientist and Medical Illustrator"
    },
    {
      Years: "33 Years",
      Description: "Crime Scene Processor and Photographer"
    },
    
    
  ]
}


export const WhatWeDo = {
  Title: "Our Capabilities",
  Text: `Specializing in the analysis, reconstruction, and visualization of physical evidence in criminal and civil cases. 

  We integrate peer-reviewed forensic methodologies with advanced computational modeling and photorealistic 3D animation to produce court-admissible exhibits that clarify complex scientific findings for judges and juries.

  Our work is grounded in chain-of-custody integrity, ISO 17025 standards, and defensible scientific principles—ensuring every conclusion withstands rigorous cross-examination.`,
  CTA1_Title: "Contact Us",
  CTA1_Link: "/contact",
  CTA2_Title: "View Services",
  CTA2_Link: "/services",
  List: [
    "Firearms & Toolmarks Examination",
    "Bullet Trajectory Analysis",
    "3D Crime Scene Reconstruction",
    "Courtroom Animations & Diagrams",
    "Forensic Microscopy",
    "Shooting Incident Reconstruction",
    "Chain of Custody Documentation",
    "Expert Witness Testimony",
    "ISO 17025 Accredited Methods",
    "Digital Evidence Imaging",
    "Bloodstain Pattern Documentation",
    "Rapid Case Turnaround",
  ],
};