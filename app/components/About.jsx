"use client";
import React, { useTransition, useState } from "react";
import styles from "../page.module.css"
import TabButton from "./TabButton";
import FadeIn from "./FadeIn";
import StaggerIn from "./StaggerIn";

const TAB_DATA = {
   skills: {
        id: "skills",
        content: (
            <>
                <div className={styles.skillBlocks}>
                        <StaggerIn>
                        {["Adobe Illustrator", "Adobe Photoshop", "HTML", "CSS", "JavaScript", "React"].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </StaggerIn>
                </div>
            </>
    )},
    experience: {
        id: "experience",
        content: (
            <>
                <div className={styles.educationBlocks}>
                    <dl>
                        <dt>North Idaho College</dt>
                        <dd>
                            <p>A.A.S Graphic and Web Design</p>
                            <p>2023 - Current</p>
                        </dd>
                    </dl>
                </div>
            </>
    )},
}

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className={styles.aboutSection} id="about">
            <div className={styles.aboutGrid}>
                <FadeIn>
                <div className={styles.imgHolder}>Image Placeholder</div>
                <div className={styles.aboutMe}>
                    <h2 style={{paddingBottom: "1rem", fontSize: 21}}>
                        Hey there I&lsquo;m Gracie
                    </h2>
                    <p>
                        Anim dolor proident ut ea velit aute. Do est fugiat esse culpa commodo reprehenderit quis adipisicing minim pariatur duis officia excepteur. Laborum ipsum nostrud ullamco Lorem dolore consequat pariatur commodo sunt non Lorem quis irure. In irure eiusmod anim sunt eu officia veniam incididunt quis ut magna enim et. Amet proident aute exercitation do nostrud non. Exercitation eu laboris id excepteur ut adipisicing.
                    </p>
                </div>
                </FadeIn>
                <div className={styles.infoTabs}>
                    <div className={styles.tabButton}>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>

                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                    </div>
                    
                        <div className={styles.tabData}>
                            {TAB_DATA[tab].content}
                        </div>
                </div>
            </div>
        </section>
    )
}

export default About