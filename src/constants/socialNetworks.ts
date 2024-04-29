import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import type { SocialNetwork } from '../interfaces/socialNetwork';

export const socialNetworks: SocialNetwork[] = [
    {
        name: 'Facebook',
        icon: facebookIcon,
        url: 'https://www.facebook.com/',
    },
    {
        name: 'Linkedin',
        icon: linkedinIcon,
        url: 'https://linkedin.com/',
    },
    {
        name: 'Instagram',
        icon: instagramIcon,
        url: 'https://www.instagram.com/',
    },
];
