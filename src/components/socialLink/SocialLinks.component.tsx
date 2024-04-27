import { socialNetworks } from '../../constants/socialNetworks';

import styles from './socialLink.module.css';

function SocialLinks() {
    return (
        <ul className={styles.links}>
            {socialNetworks.map((network) => (
                <li key={network.name}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                        <img src={network.icon} alt={network.name} className={styles.icon} />
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SocialLinks;
