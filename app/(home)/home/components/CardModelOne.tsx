import { ModelOne } from "@/helpers/types";
import { cardModelOneData } from "@/helpers/data";
import styles from "./CardModelOne.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardModelOneTypes = {
    data: ModelOne
}

interface IsMobile {
    forceMobile: boolean
}

const CardOne = (props: CardModelOneTypes) => {
    const { id, imageUrl, imageAlt, title, subtitle, buttonLink, buttonText, forceMobile } = props.data;

    return (
        <div id={id} className={styles.subContainer}>
            <Image
                unoptimized
                src={imageUrl}
                alt={imageAlt}
                width={300}
                height={300}
                className={styles.image}
            />

            <div className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
                <Link href={buttonLink} className={styles.link}>{buttonText}</Link>
            </div>
        </div>
    )
}

export const CardModelOne: React.FC<IsMobile> = ({ forceMobile }) => {
    const filteredData = cardModelOneData.filter(item => item.forceMobile === forceMobile)
    return (forceMobile === false) ? (
        <div className={styles.container}>
            {filteredData.map((item, index) => <CardOne key={index} data={item} />)}
        </div>
    ) : (
        <div className={styles.containerMobileForced}>
            {filteredData.map((item, index) => <CardOne key={index} data={item} />)}
        </div>
    )
}