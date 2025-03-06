import {stripIndents} from 'common-tags';
import {Post} from '../../Post';
import {ExternalLink} from '../../../client/components/external-link';
import eurokas from './eurokas.png';
import lugu from './track.png';

export class LifeUpdates extends Post {
    public name = 'Life Updates: Turning 18, Winning Competitions, and New Adventures';
    public date = new Date();
    public slug = 'life-updates';
    public keywords = ['life updates', 'IT', 'competitions', 'Eurovision', 'Alika', 'music', 'YouTube'];
    public hidden = false;
    public excerpt = stripIndents`
        A look into what I've been up to: finishing my first year at school, winning a vocational competition, creating content, and more!
    `;

    public render(): JSX.Element {
        return (
            <>
                <h1>Life Updates: Turning 18, Winning Competitions, and New Adventures</h1>

                <p>
                    Hey everyone! It’s been a while since my last update, and I have a lot to share. Life has been busy—balancing school, turning 18, 
                    and even winning a <b>vocational competition in my field (IT-systems specialist)</b>!
                </p>

                <h3>Academic & Personal Growth</h3>
                <p>
                    Since my last post, I’ve successfully completed my <b>first year of studies</b> with <b>A’s and B’s</b>. Not too bad, right?
                    I’ve also started learning <b>Finnish</b>, which has introduced me to a whole new world of music. It's been fun exploring Finnish artists 
                    and expanding my playlist beyond my usual favorites.
                </p>

                <h3>Creative Work & Achievements</h3>
                <Image src={eurokas.src} alt="Graphic design for 5MIINUST & Puuluup (Universal Music Estonia)" />
                <p>
                    I’ve been diving deeper into <b>graphic design</b>, working on projects like creating a design to 
                    encourage people to vote for <b>5MIINUST & Puuluup in Eurovision</b>. I also had the chance to <b>meet Alika</b> a few times and even attended 
                    some of her <b>music video shoots</b>. You can check out the final result <ExternalLink href="https://youtu.be/UtcT-619TPI">here</ExternalLink>!
                </p>
                
                <p>
                    On top of that, I’ve now <b>competed in vocational competitions for two years in a row</b>—and I actually <b>won this year</b>! 
                    It was a tough but rewarding experience, proving to myself that hard work really does pay off.
                </p>
                                
                <h3>New Ventures: YouTube & Music</h3>
                <p>
                    Another exciting step I’ve taken is <b>doing some videos in YouTube</b>! I’ve been experimenting with different editing styles, 
                    and I’d love for you to check them out.
                    <ExternalLink href="https://www.youtube.com/watch?v=yoyBcSl8Pnw">Video about Eesti Laul's Iceberg</ExternalLink>
                    <ExternalLink href="https://www.youtube.com/watch?v=QeG5_NrUGYQ">Some Counter-Strike editing montage</ExternalLink>

                </p>
                
                <p>
                    Perhaps the biggest milestone? <b>I released my first track on Spotify!</b> 
                    It’s an incredible feeling putting my own music out there, and I can’t wait to see where this journey leads.
                    <ExternalLink href="https://open.spotify.com/track/2fKXhfkEyCp8eIF30ai8MI">Beyond Favourites - Spotify</ExternalLink>
                </p>
                
                <Image src={lugu.src} alt="My first track on Spotify" />

                <h3>Gratitude & Reflections</h3>
                <p>
                    I want to take a moment to thank my <b>teachers</b>, who encouraged me to keep going, and my <b>friends</b>, who have motivated me 
                    to push through tough times. <b>Mental health is still a struggle for me</b>, but having a support system makes a big difference.
                </p>

                <p>
                    That’s all for now! Thanks for reading, and I hope to share more updates soon.
                </p>

                <p>
                    Until next time, 
                    <br/> <b>~ [Your Name / Blog Name]</b>
                </p>
            </>
        );
    }
}