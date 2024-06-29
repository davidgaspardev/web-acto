import styles from "./OurUnitys.module.css";
import Image from "next/image";
import Link from "next/link";

export const OurUnitys = () => {
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
                    <p className={styles.title}>Conheça nossas unidades</p>
                    <p className={styles.subtitle}>Encontre a unidade ideal para você mudar a sua vida</p>
                    <Link href={"https://www.youtube.com"} className={styles.link}>Saiba mais</Link>
                </div>
            </div>
        </div>
    )
}