import type { SocialNetwork } from '@/interfaces/socialNetwork';

import { socialNetworks } from '../../constants/socialNetworks';
import { SocialIcon } from '../socialIcon/SocialIcon.component';

import styles from './socialLink.module.css';

export function SocialLinks() {
    return (
        <ul className={styles.links}>
            {socialNetworks.map((network: SocialNetwork) => (
                <li key={network.name}>
                    <SocialIcon name={network.name} icon={network.icon} url={network.url} />
                </li>
            ))}
        </ul>
    );
}
