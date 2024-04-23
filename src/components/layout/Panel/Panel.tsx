
import { ReactNode } from 'react'
import styles from './Panel.module.css'

interface IPanel {
    children: ReactNode
}

export function Panel({children}: IPanel) {
    return <div className={styles.panel}>
        <div>Sidebar</div>
        <main className={styles.content}>{children}</main>
    </div>
}