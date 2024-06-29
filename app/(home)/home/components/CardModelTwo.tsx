import { ModelTwo } from "@/helpers/types";
import { cardModelTwoData } from "@/helpers/data";
import styles from "./CardModelTwo.module.css";
import Image from "next/image";
import Link from "next/link";

type cardModelTwoTypes = {
    data: ModelTwo
}

const CardTwo = (props: cardModelTwoTypes) => {
    const { id, imageOneUrl, imageOneAlt, imageTwoUrl, imageTwoAlt, imageThreeUrl, imageThreeAlt, title, subtitle, buttonText, buttonLink } = props.data;

    return (
        <div id={id} className={styles.subContainer}>
            <div className={styles.imageContainer}>
                <Image
                    unoptimized
                    src={imageOneUrl}
                    alt={imageOneAlt}
                    width={200}
                    height={200}
                    className={styles.image}
                />
                <Image
                    unoptimized
                    src={imageTwoUrl}
                    alt={imageTwoAlt}
                    width={200}
                    height={200}
                    className={styles.image}
                />
                <Image
                    unoptimized
                    src={imageThreeUrl}
                    alt={imageThreeAlt}
                    width={200}
                    height={200}
                    className={styles.image}
                />
            </div>

            <div className={styles.textContainer}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
                <Link href={buttonLink} className={styles.link}>{buttonText}</Link>
            </div>
        </div>
    )
}

export const CardModelTwo = () => {
    return (
        <div className={styles.container}>
            {cardModelTwoData.map((item, index) => <CardTwo key={index} data={item}/>)}
        </div>
    )
}