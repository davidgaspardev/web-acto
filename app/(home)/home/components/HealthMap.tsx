import styles from "./HealthMap.module.css";
import Image from "next/image";
import Link from "next/link";

export const HealthMap = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <Image 
                    unoptimized 
                    src={"https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png"} 
                    alt="Placeholder" 
                    width={300} 
                    height={300} 
                    className={styles.image}
                />

                <div className={styles.textContainer}>
                    <p className={styles.title}> Mapeamento de saúde</p>
                    <p className={styles.subtitle}>Muito além de treinos para emagrecimento e massa muscular. O Acton é capaz de mapear sua saúde levando em coonsideração não somente sua saúde física como também sua saúde mental, emocional e social.</p>
                    <Link href={"https://www.youtube.com"} className={styles.link}>Saiba mais</Link>
                </div>
            </div>
        </div>
    )
}