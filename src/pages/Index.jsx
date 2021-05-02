import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IntroBio, IntroSection, IntroPhoto, AboutSummery } from './styled/styled.common';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinIcon from '@iconify-icons/logos/linkedin-icon';
import instagramIcon from '@iconify-icons/logos/instagram-icon';
import facebookIcon from '@iconify-icons/logos/facebook';
import discordIcon from '@iconify-icons/logos/discord';
import meImg from '../images/me___pakshiiii-removebg-preview__cropped.png';
import SkillSection from '../components/Skills';
import { skills } from '../data/skills';

const HomePage = () => {
    return (
        <>
            <SEO title="React, MERN stack developer | Md Mahabub Alam (mahabubdev)"
                meta={[
                    {
                        name: 'position',
                        content: 'React | MERN stack developer'
                    },
                    {
                        name: 'author',
                        content: 'Md Mahabub Alam <mahabub10121013@gmail.com>'
                    },
                    {
                        name: 'og:title',
                        content: 'React, MERN stack developer'
                    },
                    {
                        name: 'og:description',
                        content: 'I am a passionate react, mern stack developer. I love JavaScript and React based web technologies.'
                    },
                ]}
            />

            <IntroSection>
                <IntroBio>
                    <blockquote>Hello! I am</blockquote>
                    <h1>Md Mahabub Alam</h1>
                    <h3>Frontend React Developer</h3>
                    <ul className="tags">
                        <li>developer</li>
                        <li>programmer</li>
                        <li>game lover</li>
                    </ul>

                    <ul className="social_links">
                        <li>
                            <Link target="_blank" to='//github.com/mahabubdev/'><Icon icon={githubIcon} /></Link>
                        </li>
                        <li>
                            <Link target="_blank" to='//linkedin.com/in/mahabub2000'><Icon icon={linkedinIcon} /></Link>
                        </li>
                        <li>
                            <Link target="_blank" to='//instagram.com/mahabub_74'><Icon icon={instagramIcon} /></Link>
                        </li>
                        <li>
                            <Link target="_blank" to='//facebook.com/mahabub6333'><Icon icon={facebookIcon} /></Link>
                        </li>
                        <li>
                            <Link target="_blank" to='//discord.gg/YYsP2s3HvJ'><Icon icon={discordIcon} /></Link>
                        </li>
                        
                        
                        
                    </ul>

                    <div className="btns">
                        <Link className="btn btn-pr" to='#'>get resume</Link>
                        <Link className="btn btn-out" to='/about'>about me</Link>
                    </div>
                </IntroBio>

                <IntroPhoto>
                    <img src={`https://avatars.githubusercontent.com/u/56954039?v=4`} alt="mahabubdev" />
                </IntroPhoto>
            </IntroSection>



            <AboutSummery>
                <div className="visual_side">
                    <div className="img_wrap">
                        <img alt="mahabubdev" src={meImg} />
                    </div>
                </div>

                <div className="content_side">
                    <h2>about me</h2>
                    <p>
                        I am a passionate React developer with MERN stack developments. Having skills in modern JavaScripts-based developments like web applications, and RESTful JSON APIs with ExpressJs and MongoDB. Also comfortable with React-Native/Expo, GraphQL/Apollo, etc.
                    </p>
                    <div>
                        <Link to="/about" className="btn btn-pr">learn more</Link>
                    </div>
                    
                </div>
            </AboutSummery>


            <SkillSection allSkills={skills} />
        </>
    );
};

export default HomePage;