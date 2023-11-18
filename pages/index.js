import Head from "next/head";
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/img_profile-removedbg.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Erald's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-teal-500 text- to-cyan-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-cyan-600 font-medium dark:text-teal-400 md:text-6xl">
              Erald Policarpio
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Hello! Erald here, a passionate and driven student software developer dedicated to crafting
            innovative solutions and creating impactful digital experiences. My portfolio showcases a blend of 
            my academic learning and hands-on projects that reflect my commitment to the world of 
            technology.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:eraldjohnpolicarpio@gmail.com">
              <AiFillGoogleCircle />
              </a>
              <a href="https://your-google-link.com">
              <AiFillLinkedin />
              </a>
              <a href="https://www.facebook.com/Eraldplcrp/">
              <AiFillFacebook />
              </a>
              <a href="https://github.com/Erhesvara">
              <AiFillGithub />
              </a>
              
            </div>
            <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" className="transform translateY(-105%)" />
            </div>
          </div>

        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Explore a diverse range of projects I've worked on, each highlighting my skills in coding, 
            problem-solving, and creativity. From web applications to mobile development and more, my  
            projects demonstrate the proficiency in various programming languages and frameworks.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Discover my technical expertise in languages like 
              <span className="text-cyan-500"> Python</span>, 
              <span className="text-cyan-500"> JavaScript</span>,
              <span className="text-cyan-500"> Java</span>, and 
              <span className="text-cyan-500"> C++</span>, along 
              with familiarity in frameworks such as React, Node.js, and Django. Additionally, my experience 
              with databases, version control systems, and software development methodologies adds depth 
              to my skill set.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Learning Journey: Follow my growth as a developer through blog posts, reflections, and insights 
            gained during my learning process. I believe in continuous improvement, and this section 
            showcases my journey of overcoming challenges and embracing new technologies.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Programming Frameworks
              </h3>
              <p className="py-2">
              Entry Level in industry-standard frameworks such as React.js for dynamic web 
              applications, Node.js for scalable server-side development, and Django for robust and efficient 
              backend solutions.
              </p>
              <h4 className="py-4 text-teal-600">Other technologies:</h4>
              <p className="text-gray-800 py-1">Flask</p>
              <p className="text-gray-800 py-1">Django</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">FastAPI</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Programming Languages
              </h3>
              <p className="py-2">
              Skilled in a variety of programming languages including Python for versatility and 
              ease of use, JavaScript for dynamic and interactive web experiences, Java for reliable and scalable 
              applications, and C++ for efficient and performance-driven software solutions.
              </p>
              <h4 className="py-4 text-teal-600">Languages:</h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">Mathlab</p>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">CSS & HTML</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Integrated Development Environments (IDEs)</h3>
              <p className="py-2">
                Enviroments (IDEs) That I worked with:
              </p>
              <h4 className="py-4 text-teal-600">Tooldbox:</h4>
              <p className="text-gray-800 py-1">Clion</p>
              <p className="text-gray-800 py-1">Pycharm</p>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">IntelliJ</p>
              <p className="text-gray-800 py-1">Mathlab</p>
              <p className="text-gray-800 py-1">Octave</p>
              <p className="text-gray-800 py-1">Arduino IDE</p>
              <p className="text-gray-800 py-1">Eclipse</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Collaborations and Contributions:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Explore my involvement in collaborative projects, open-source contributions
            , or any group initiatives that highlight my teamwork, communication, and 
            and adaptability skills within a development environment.


            </p>
            <h3 className="text-3xl py-1 dark:text-white ">Team up</h3>  
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I am committed to delivering high-quality, scalable, and user-centric solutions. With a strong
            foundation in software development principles and a constant thirst for learning, I'm eager to 
            contribute my skills and passion to meaningful projects and teams.

            </p>
            <h3 className="text-3xl py-3 text-cyan-600 dark:text-teal-400 ">Projects</h3> 
            <a href="https://github.com/Erhesvara" style={{fontSize: '4rem'}}>
              <AiFillGithub/>
              </a>
          </div>
        </section>
      </main>
    </div>
  );
}