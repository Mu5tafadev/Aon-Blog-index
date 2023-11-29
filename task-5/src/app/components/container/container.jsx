import styles from"./container.module.css";

export const Container=({children}) => {
    return <div className={styles.Container}>{children}</div>
};