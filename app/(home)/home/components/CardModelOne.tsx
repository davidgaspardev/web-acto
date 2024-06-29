import { ModelOne } from "@/helpers/types";
import { cardModelOneData } from "@/helpers/data";
import styles from "./CardModelOne.module.css";
import Image from "next/image";
import Link from "next/link";

type CardModelOneTypes = {
    data: ModelOne
}

const CardOne = (props: CardModelOneTypes) => {
    const { id, imageUrl, imageAlt, title, subtitle, buttonLink, buttonText } = props.data;

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

export const CardModelOne = () => {
    return (
        <div className={styles.container}>
            {cardModelOneData.map((item, index) => <CardOne key={index} data={item} />)}
        </div>
    )
}