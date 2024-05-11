import type { FC } from 'react';

import type { SocialNetwork } from '@/interfaces';

import styles from './socialIcon.module.css';

export const SocialIcon: FC<SocialNetwork> = ({ name, icon, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={name} className={styles.icon} />
    </a>
);
