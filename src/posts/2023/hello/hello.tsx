import {stripIndents} from 'common-tags';
import {Post} from '../../Post';
import {ExternalLink} from '../../../client/components/external-link';

export class Hello extends Post {
	public name = 'Hello, world';
	public date = new Date('2023-08-08');
	public slug = 'hello-world';
	public keywords = ['hello', 'sundei', 'eurovision', 'alika', 'käärijä', 'joker-out', 'friends'];
	public hidden = false;
	public excerpt = stripIndents`	
        Hi!
    `;

	public render(): JSX.Element {
		return (
			<>
                <h1>Hello, world!</h1>

                <p>
                    Allow me to introduce myself. I go by the name sundei, a 17-year-old student currently enrolled at Tartu Vocational College, where I am diligently working towards becoming an IT specialist.
                    My interests encompass a variety of activities, including gaming, following the <ExternalLink href="https://eurovision.tv">Eurovision Song Contest</ExternalLink>, playing the ukulele,
                    immersing myself in music, and cherishing moments of restful sleep. It's worth mentioning that I've been diagnosed with ADHD and anxiety,
                    factors that shape some aspects of my life.
                </p>

                <h3>Why I did this blog?</h3>

                <p>
                    I embarked on this blogging journey without a predefined destination or purpose in mind.
                    My motivation was simple: a desire to articulate and share the myriad thoughts swirling within me, all while circumventing the complexities that often
                    accompany face-to-face conversations. As I navigated through the virtual realm of blogging, I discovered an outlet where my unfiltered ideas
                    could be unleashed and given room to breathe, free from the constraints of real-life interactions.
                    This platform granted me the liberty to explore the vast landscape of my mind and articulate the musings that might have otherwise remained dormant.
                    While my blog lacks a specific aim, it stands as a testament to the power of expression, providing me with a sanctuary where I can unabashedly
                    lay bare the inner workings of my thoughts, fostering a unique form of introspective connection that transcends the boundaries of conventional communication.
                </p>

                <h3>My music taste</h3>

                <p>
                    I have a diverse range of music styles and favorite artists that I enjoy. At the moment, one of my favorite artists is <ExternalLink href="https://alikamilova.ee">Alika Milova</ExternalLink>.
                    She represented Estonia in Eurovision and secured an impressive 8th place. Another artist I like is <ExternalLink href="https://jokeroutband.com">Joker Out</ExternalLink>, a band that represented Slovenia in Eurovision 2023.
                    Additionally, I'm a fan of <ExternalLink href="https://instagram.com/paidatonriehuja">Käärijä</ExternalLink>, our neighboring artist from Finland, and I was really hoping for Finland to win Eurovision this year.
                    Here are some playlists I'm currently enjoying:
                    <ul>
                        <li><ExternalLink href="https://open.spotify.com/playlist/1LMNbk9NnmzHgheUaqo10B?si=932dd9310e4344cf">гэнгстащит - Playlist by Alika Milova</ExternalLink>: This playlist features fantastic old-school rap music.</li>
                        <li><ExternalLink href="https://open.spotify.com/playlist/2CwQnoCEqaooVF8PMIBcq7?si=e415dfb3f9794b40">Messed up music style - Playlist by sundei</ExternalLink>: A collection of my favorite songs with an eclectic mix of styles.</li>
                        <li><ExternalLink href="https://open.spotify.com/playlist/6DknRhS60ZMYLJqClGreW8?si=c458e92802624db1">SSF!! - Playlist by GV</ExternalLink>: A playlist dedicated to Joker Out's music.</li>
                        <li><ExternalLink href="https://open.spotify.com/playlist/1NaTLQR3u4d5AY02oMBtSO?si=38ce21aa8e3c44b3">rave🤙🏾 - Playlist by Alika Milova</ExternalLink>: Perfect for party vibes, including Russian party music.</li>
                    </ul>
                    My musical tastes are quite diverse, and these playlists capture just a portion of what I'm enjoying right now.
                </p>

                <hr />
                <h3>About this year</h3>
                <p>
                    I must admit that the year 2022/2023 was incredibly mentally exhausting for me.
                    I spent a lot of time vaping during that period, but I gradually started the process of quitting.
                    On a positive note, I managed to lose weight, which is a significant accomplishment.
                    Additionally, I completed a year of High School, an experience that stands out as one of the most challenging in my educational journey.
                    Despite the difficulties (and getting expelled), I did make a lot of new friends along the way.
                </p>
                <h3>My special thanks</h3>
                <p>
                I'm immensely grateful to a remarkable group including Kasvi, Steph, Marie, GV, aapeh, Suomi, and dear friends. 
                Their unwavering support and camaraderie have illuminated my path through challenges. 
                Their empathy and kindness, whether established early or later in the year, have profoundly impacted me.
                Through shared moments and their caring presence, they've shown the strength of human connection. 
                In a world often distant, their support demonstrates the potential for meaningful relationships to flourish.
                Their selflessness has turned difficulties into growth opportunities. To Kasvi, Steph, Marie, GV, aapeh, Suomi, and my steadfast friends, your impact is 
                immeasurable. Your unwavering support has been a source of strength, inspiration, and comfort, and for that, I am forever grateful.
                </p>
                <p>
                    Thank you all and see you in the next blog
                    ~ sundei
                </p>
            </>
		);
	}
}