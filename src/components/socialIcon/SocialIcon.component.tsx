import type { SocialNetwork } from '@/interfaces';

import styles from './socialIcon.module.css';

export function SocialIcon({ name, icon, url }: SocialNetwork) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={name} className={styles.icon} />
        </a>
    );
}
