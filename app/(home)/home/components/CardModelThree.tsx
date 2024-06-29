import { ModelThree } from "@/helpers/types";
import { cardModelThreeData } from "@/helpers/data";
import styles from "./CardModelThree.module.css";
import Image from "next/image";
import Link from "next/link";

type CardModelThreeTypes = {
    data: ModelThree
}

const CardThree = (props: CardModelThreeTypes) => {
    const { id, imageUrl, imageAlt, title, subtitle, buttonText, buttonLink, stamps } = props.data;
    return (
        <div id={id} className={styles.subContainer}>
            <div className={styles.imageAndTextsContainer}>
                <Image
                    unoptimized
                    src={imageUrl}
                    alt={imageAlt}
                    width={200}
                    height={200}
                    className={styles.image}
                />

                <div className={styles.textContainer}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>

            <div className={styles.stampsContainer}>
                {stamps.map((item, index) => (
                    <Image
                        key={index}
                        unoptimized
                        src={item.stampUrl}
                        alt={item.stampAlt}
                        width={50}
                        height={50}
                        className={styles.stamps}
                    />
                ))}
            </div>

            <Link href={buttonLink} className={styles.link}>{buttonText}</Link>
        </div>
    )
}

export const CardModelThree = () => {
    return (
        <div className={styles.container}>
            {cardModelThreeData.map((item, index) => <CardThree key={index} data={item}/>)}
        </div>
    )
}