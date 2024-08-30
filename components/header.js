import Link from 'next/link'
import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <nav className={styles.header}>
                <Link href={'/'} className={styles.nav_logo}>
                    <Image src='/logo.jpg' width={64} height={64}></Image>
                    <span>portfolio</span>
                </Link>
                <div className={styles.navmenu}>
                    <ul className={styles.navlist}>
                        <li><link href='/'>Home</link></li>
                        <li><link href='/about=me'>Projects</link></li>
                        <li><link href='/404'>Contact</link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}