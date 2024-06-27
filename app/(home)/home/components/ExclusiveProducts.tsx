import styles from "./ExclusiveProducts.module.css";
import Image from "next/image";
import Link from "next/link";

export const ExclusiveProducts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.imageContainer}>
                <Image 
                    unoptimized 
                    src={"https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png"} 
                    alt="Placeholder" 
                    width={200} 
                    height={200} 
                    className={styles.image}
                />
                <Image 
                    unoptimized 
                    src={"https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png"} 
                    alt="Placeholder" 
                    width={200} 
                    height={200} 
                    className={styles.image}
                />
                <Image 
                    unoptimized 
                    src={"https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png"} 
                    alt="Placeholder" 
                    width={200} 
                    height={200} 
                    className={styles.image}
                />
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.title}>Produtos exclusivos</p>
                    <p className={styles.subtitle}>Construimos uma jornada de experiência para tornar sua relação com o exercício físico ainda mais fácil e prazerosa, por meio de métodos de treinamentos que vão muit além de apenas emagrecer ou ganhar massa múscular, eles levam em considerações suas necessidades físicas, mentais e emocionais, tudo isso baseado em muita evidência científica.</p>
                    <Link href={"https://www.youtube.com"} className={styles.link}>Fazer meu mapeamento</Link>
                </div>
            </div>
        </div>
    )
}