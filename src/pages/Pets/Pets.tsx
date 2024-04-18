import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import styles from "./Pets.module.css"
import { Card } from "../../components/common/Card/Card";
import { Skeleton } from "../../components/common/Skeleton"

export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                <main className={styles.list}>
                    <Skeleton count={5} containerClassName={styles.skeleton} />
                    <Card href='/pets/1' text='nina' thumb='' />
                </main>
            </div>
        </Grid>
    )
}