import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en:{
      about: {
        header: "About me",
        englishCV: "English CV",
        polishCV: "Polish CV",
        paragraphs: [
          `I('ve) been self-made from the dribble" - that quote from one of Nipsey Hussle's song could well describe my coding experience.`,
          `I have had a contact with computers since my very, very young age. People in my family have been always asking me for help if they bought a new phone or their printer isn't working. Also, they were saying that I gonna be a computer guy in the future. `,
          `Once I decided becoming a developer is my carrer path I look for nothing but opportunities to grow. I believe self-taught is the best way to learn because you fail over and over again but at the end you figure out what you need. Thanks to this approach I was able to gain my first commercial experience which I consider my biggest achievement so far.`,
          `In fact, getting something done is one of the best feeling, however, it's always very short feeling because as a competetive person I always seek for a next goal. Apart from my competetive nature I am communicative, ambitious, willing to learn and ready for every challenge.`,
          `This competetive nature might be taken from my other big passion which is sport. Other than that I read books and listen to podcasts while walking.`,
          `If you're interested in collaborating or discussing any topic further, please don't hesitate to reach out via LinkedIn or email. I look forward to connecting with you! :D`
        ],
        readMore: "Read more",
        readLess: "Read less",
        skills: "Skills"
      },
      experience: {
        header: "Experience",
        jobs: [
          {
            company: "CODERHINO",
            position: "Junior Front-end Developer",
            time: "Jun 2023 - obecnie",
            description: "Description"
          },
          {
            company: "CODERHINO",
            position: "Intern Front-end Developer",
            time: "Mar 2023 - Jun 2023",
            description: "Description"
          },
          {
            company: "CODERHINO",
            position: "Trainee",
            time: "May 2022 - May 2022",
            description: "Description"
          },
        ]
      },
      projects: {
        header: "Projects",
        projects: [
          {
            title: "CODERHINO company page",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "Next.js", "SCSS"
            ],
            links: [
              {
                title: "Demo",
                link: "https://coderhino.cc"
              }
            ]
          },
          {
            title: "Video rental app",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "React", "Tailwind", "SCSS", "Express.js with socket.io", "MongoDB"
            ],
            links: [
              {
                title: "Demo",
                link: "https://video-rental.onrender.com"
              },
              {
                title: "Source - frontend",
                link: "https://github.com/marchewazz/video-rental-react"
              },
              {
                title: "Source - backend",
                link: "https://github.com/marchewazz/video-rental-server"
              },
            ]
          },
          {
            title: "This website",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "React", "Tailwind", "SCSS"
            ],
            links: [
              {
                title: "Source",
                link: "https://github.com/marchewazz/portfolio-page"
              },
            ]
          }
        ],
        showLinks: "Show links",
        hide: "Hide"
      },
      education: {
        header: "Education",
        school: "Technical School number 1, Gliwice",
        profil: "Programmer technician",
        time: "Sep 2019 - Apr 2024"
      }
    },
    pl: {
      about: {
        header: "O mnie",
        englishCV: "CV po angielsku",
        polishCV: "CV po polsku",
        paragraphs: [
          `I('ve) been self-made from the dribble" - ten cytat z jednej z piosenek Nipseya Hussle'a dobrze opisuje moje dotychczasowe doświadczenie z programowaniem.`,
          `Od małego miałem kontakt z komputerami. Osoby z mojej rodziny często pytały mnie o pomoc z nowym telefonem lub z niedziałającą drukarką. Poza tym mówili często, że zostanę "komputerowcem" w przyszłości.`,
          `Gdy zdecydowałem się zostać developerem patrzę tylko na możliwości rozwoju. Uważam, że "self-taught" to najlepsza droga, raz po raz nie udaje ci się ale koniec końców dochodzisz do rozwiązania. Dzięki temu mogłem zdobyć pierwsze doświadczenie komercyjne co uważam za swój największych sukces dotychczas.`,
          `Dokończenie czegoś to jedno z najlepszych uczuć, choć nie trwa długo, jako osoba ambitna zawsze patrzę na kolejne cele przede mną. Poza tym jestem komunikatywny, chętny do nauki i gotowy na następne wyzwania.`,
          `Moja dusza rywalizacji wzięła się z innej mojej pasji, sportu. Poza tym czytam książki i spaceruję słuchając podcastów.`,
          `Jeśli jesteś zainteresowany/a współpracą lub omówieniem jakiegokolwiek innego tematu, odezwij się w wiadomości prywatnej lub mailu. Do usłyszenia :D`
        ],
        readMore: "Czytaj więcej",
        readLess: "Czytaj mniej",
        skills: "Umiejętności"
      },
      experience: {
        header: "Doświadczenie",
        jobs: [
          {
            company: "CODERHINO",
            position: "Junior Front-end Developer",
            time: "cze 2023 - obecnie",
            description: "Description"
          },
          {
            company: "CODERHINO",
            position: "Stażysta Front-end Developer",
            time: "mar 2023 - cze 2023",
            description: "Description"
          },
          {
            company: "CODERHINO",
            position: "Praktykant",
            time: "maj 2022 - maj 2022",
            description: "Description"
          },
        ]
      },
      projects: {
        header: "Projekty",
        projects: [
          {
            title: "Strona firmowa CODERHINO ",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "Next.js", "SCSS"
            ],
            links: [
              {
                title: "Demo",
                link: "https://coderhino.cc"
              }
            ]
          },
          {
            title: "Aplikacja do wypożyczania wideo",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "React", "Tailwind", "SCSS", "Express.js with socket.io", "MongoDB"
            ],
            links: [
              {
                title: "Demo",
                link: "https://video-rental.onrender.com"
              },
              {
                title: "Kod - frontend",
                link: "https://github.com/marchewazz/video-rental-react"
              },
              {
                title: "Kod - backend",
                link: "https://github.com/marchewazz/video-rental-server"
              },
            ]
          },
          {
            title: "Strona na której jesteś",
            screen: "https://picsum.photos/1200/1300",
            technologies: [
              "React", "Tailwind", "SCSS"
            ],
            links: [
              {
                title: "Kod",
                link: "https://github.com/marchewazz/portfolio-page"
              },
            ]
          }
        ],
        showLinks: "Pokaż linki",
        hide: "Ukryj"
      },
      education: {
        header: "Edukacja",
        school: "Technikum nr 1, Gliwice",
        profil: "Technik programista",
        time: "wrz 2019 - kwi 2024"
      }
    }
});

export default strings