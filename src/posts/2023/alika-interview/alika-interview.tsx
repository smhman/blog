import {stripIndents} from 'common-tags';
import {Post} from '../../Post';
import {ExternalLink} from '../../../client/components/external-link';

export class Alika extends Post {
	public name = 'Alika \'s interview at Ringvaade';
	public date = new Date('2023-09-16');
	public slug = 'alika-interview';
	public keywords = ['alika', 'eurovision', 'ringvaade'];
	public hidden = false;
	public excerpt = stripIndents`	
    Heleri: What's the first thing, that comes in your mind, if you think back to Eurovision? The process etc...
    Alika: *Laughs* The first thing, that comes in my mind, is, how versatile that journey was. As I had.....
    `;

	public render(): JSX.Element {
		return (
			<>
                <h1>Alika's interview at Ringvaade</h1>

                <p>
                *some clip of Alika's Grand Final performance*
H(Heleri - Interviewer): What's the first thing, that comes in your mind, if you think back to Eurovision? The process etc...
A(Alika): *Laughs* The first thing, that comes in my mind, is, how versatile that journey was. As I had inflamed toe and I always wore pointed toe heels and always I had to wear them and be beautiful for 2 weeks in a row. In my opinion, the most beautiful memory at Eurovision was getting the jury results. And of course, I was second at some point. And finally, I was 5th place after jury results were given. And at the end, I was 8th.
H: Are you satisfied with 8th place, or is there something, that bothered you?
A: Honestly, I am very satisfied. Well, at first, the bookmakers didn't believe in me and it gave me mixed feelings. Sometimes, I was sad. Sometimes, I had a feeling, that "I will show you now". I still remember very clearly, that one day after I came back to Estonia... It was at the daytime, I went to Viru keskus (shopping centre in Tallinn), as I had to do some grocery shopping. I was going from shop to shop, I met a lot of different people, who went past me and said "It is proud to be Estonian". It was a pretty cool moment.
H: Do you have any Eurovision artists/background people you still talk to and you can say that you are a friend with them?
A: Well, I am friends with Piqued Jacks from San Marino. Well, they are actually from Firenze, which isn't that far away. We still chat occasionally. In future, I have a plan to go to Italy to meet them again. And have fun/hang etc...
H: Well, Alika, I don't know, have you met with that piano.
A: I always have been here, but I havent seen that before. (points at the cardboard label, which is on the piano) (reads the text on the cardboard label). 
*Heleri and Alika laugh*
H: Currently, it isn't self-playing. Well, it was your special thing. Does it remind you some stuff from stage, or is it shocking?
A: Of course, that piano has been from my first semi at Eesti Laul. I was very happy, as the piano arrived to Liverpool on right time and nothing happened with it. That was a relief. Fortunately, the most important thing was there and... well... it felt like home at Eurovision, when the piano was brought there and when I sat there.
*some laugh or smth*
H: Well, that label is a new thing here, as I understood. (Alika agrees) It says, that this piano went to Eurovision with Alika.
A: Yes.
H: But... 
A: But...
H: Alika hasn't contributed to that label. I understood, that we got the permission... I will give you marker. Maybe, you can put some signature there. I don't know, is it good. Nevermind...
A: Yeah, in my opinion, it is pretty good. They have thought of that.
(Alika proceeds to sign)
A: Atleast it came out just fine.
(Heleri agrees)
A: And here I will write my name, so people wont think, that it is some random person's signature.
H: Exactly, so no one will think, that someone had messed it up.
(Heleri and Alika laugh again)
A: That maybe someone put some stain there.
H: Well, now every Eurovision fan, who will arrive there, can see that with their own eyes.
A: Very beautiful. I have a very proud feeling.
H: How has your life been after Eurovision? It seems, that you had a pretty busy summer with huge performances etc...
A: Yeah, it was a pretty busy summer. Somehow it all went just bigger and busier with every month and week. Well, at the last 2 weeks of August, it was just like I had something every day or there was.. I dont know. Poland, Finland, whereever... Concerts. At 31st of August, I felt like aaaahhh... again... Well, honestly, there were 1st, 2nd and 3rd of September aswell... Then at 3rd of September, I felt like tuff tuff tuff... It was like kind of a full workload. Well, at the same time, when I would say to other person "ahh I am so tired, I went to radio to have some interview"... (laughs) What? That, that I personally still enjoy it. But, still... a human is a human, if person will be tired. Well, right now, I am trying to spend more time with my family. And then there's the album. At the 24th of November. It will release then. That is aswell a pretty surreal moment. I have dreamt and thought of it for my entire life... Thought of some names, wrote them down to diaries, when I was 9 years old. And finally, it will come out. 
H: Eesti Laul will come every year. I guess you're not going back there yet? You have this "snowball" rolling from last year.
A: Well, until now, some people still keep asking "This year as well?". I look at it and think, why do you have this question on your mind. I would really like to do that one more time. But maybe in 4-5 years, as this is a nice time to do it. If song and feeling is good. Well, if everything is good, then why not.

*Alika plays "Bridges" on piano*
                </p>
            </>
		);
	}
}