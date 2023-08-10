import {stripIndents} from 'common-tags';
import {Post} from '../../Post';
import {ExternalLink} from '../../../client/components/external-link';

export class Growtopia extends Post {
	public name = 'Growtopia Private Servers';
	public date = new Date('2023-08-11');
	public slug = 'growtopia';
	public keywords = ['growtopia', 'sundei', 'gtps'];
	public hidden = false;
	public excerpt = stripIndents`	
        Hi!
    `;

	public render(): JSX.Element {
		return (
			<>
                <h1>Growtopia Private Servers...</h1>

                <p>
                Growtopia's Private Servers – Among the most contentious realms within the Growtopia community. While their status remains unauthorized, their allure remains undeniable. 
                But why, you might ask?
                The answer lies in the enhanced enjoyment they offer. Within these private servers, a plethora of newfound abilities await exploration, 
                granting us the freedom to embody our desired personas. Yet, to truly comprehend their significance, let us embark on a journey tracing back to their inception.
                </p>

                <h3>The Start</h3>
                    
                <p>
                    Growtopia Private Servers emerged from the ingenuity of Growtopia enthusiasts, primarily initiated by those often referred to as "Growtopia Noobs." The rationale behind their inception remains enigmatic, shrouded in uncertainty. Nevertheless, the genesis of this phenomenon can be traced back to approximately 2017 or 2018, when the first server came into being.
                    In its nascent form, this inaugural server lacked the distinctive features that have now become synonymous with the concept. At that juncture, the entire Growtopia player base found themselves entangled in a web of controversy surrounding these unorthodox servers. The catalyst for their proliferation, however, stemmed from the prominence of Growtopia Noobs within the community. This renown translated into an influx of both players and developers who were spurred to embark on the journey of coding their private servers.
                    Of notable significance, Growtopia Noobs generously shared the server's source code on GitHub. This altruistic act not only allowed interested individuals to access and download the code but also encouraged them to refine and enhance it according to their individual preferences. Consequently, an array of servers sprouted forth, each garnering substantial attention from the gaming community.
                </p>

                <h3>Scamming? Hacking?</h3>

                <p>
                Naturally, a subset of individuals embarked on a path of unauthorized access within the domain of GTPS (Growtopia Private Servers). 
                These individuals devised what we term "database loggers," tools that surreptitiously recorded vital player information, encompassing IP addresses, usernames, passwords, and more. Presently, in GTPS communities, these logging techniques are commonly referred to as "wuplogs." 
                Notably, a Lithuanian figure named Almantas Vorobjovas (known as Sebia) stands out, as he initiated GTPS development to cater to his personal gains. 
                While I once considered him a friend, our connection has waned over time.
                Another Lithuanian actor, Vytenis Kalačiovas (also known as vyte), surfaced with similar aspirations for personal gain. 
                Regrettably, his endeavors involved duping numerous individuals through scams and even delving into hacking exploits. 
                Curiously, his GTPS achieved a prominent status within GTPS history. Concurrently, the landscape saw the emergence of additional servers, 
                one of note being the Enigma Private Server, overseen by a seasoned hacker by the name of TimeCold, who had established a reputation as a proficient coder.
                </p>

                <hr />
                <h3>Me at GTPS's</h3>
                <p>
                    My involvement with Growtopia Private Servers spans a considerable duration. 
                    It was within this realm that my coding odyssey took its initial steps, allowing me to forge numerous friendships while concurrently navigating through a series of challenges. 
                    At present, I've firmly entrenched myself within the "Crystal PS" project, an endeavor that boasts a vibrant community of likeminded friends. I hold a firm conviction that this undertaking is destined for success, 
                    akin to the achievements witnessed with other prominent servers, such as the rapidly burgeoning "Creative PS," a standout in the annals of Growtopia Private Server history.
                    My sojourn in the domain of private servers aligns with the genesis of Growtopia Noobs' venture into this sphere. 
                    Over time, I've immersed myself in countless private servers, each contributing to my growth and expertise. 
                    Presently, I proudly shoulder the role of a moderator within GTPS4, while concurrently assuming ownership of the evolving Crystal PS, a project to which I'm also dedicating my coding skills and prowess.
                </p>
                <h3>My special thanks in this journey</h3>
                <p>
                My heartfelt gratitude extends to a multitude of individuals whose unwavering support has been a cornerstone of my journey. A special mention goes out to Time (Play), TheFinland, Mic, fast, TRE, Sweez, and my esteemed colleagues. Their steadfast encouragement and invaluable assistance have undoubtedly played an integral role in shaping my current path. In their absence, I find it hard to imagine the trajectory my endeavors might have taken. This blog, which I am currently composing, may not even have come to fruition. While I regrettably omitted acknowledgment of several commendable servers, I am confident that they are rightfully recognized in their present prominence or have left an indelible mark despite the passage of time.
                </p>
                <p>
                    Thank you all and see you in the next blog
                    ~ sundei
                </p>
            </>
		);
	}
}