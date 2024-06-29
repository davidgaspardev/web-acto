import { ModelOne } from "@/helpers/types";
import { cardModelOneData } from "@/helpers/data";
import styles from "./CardModelOne.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardOneProps = {
    data: ModelOne
    forceMobile?: boolean
}

export default function CardOne(props: CardOneProps) {
    const { id, imageUrl, imageAlt, title, subtitle, buttonLink, buttonText } = props.data;
    const { forceMobile } = props

    return (
        <div id={id} style={{
            maxWidth: forceMobile ? "430px" : "100%"
        }} className={styles.cardOneContainer}>
            <div>
                <div className={styles.cardOneImg}>
                    <Image
                        unoptimized
                        src={imageUrl}
                        alt={imageAlt}
                        width={0}
                        height={0}
                    />
                </div>

                <div className={styles.cardOneContent}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <Link href={buttonLink} className={styles.link}>{buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

// export const CardModelOne: React.FC<IsMobile> = ({ forceMobile }) => {
//     const filteredData = cardModelOneData.filter(item => item.forceMobile === forceMobile)
//     return (forceMobile === false) ? (
//         <div className={styles.container}>
//             {filteredData.map((item, index) => <CardOne key={index} data={item} />)}
//         </div>
//     ) : (
//         <div className={styles.containerMobileForced}>
//             {filteredData.map((item, index) => <CardOne key={index} data={item} />)}
//         </div>
//     )
// }