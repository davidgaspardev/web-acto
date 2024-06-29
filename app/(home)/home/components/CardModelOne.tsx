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
    const { id, imageUrl, imageAlt, title, content, button } = props.data;
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
                    <p className={styles.subtitle}>{content}</p>
                    <Link href={button.link} className={styles.link}>{button.name}</Link>
                </div>
            </div>
        </div>
    )
}