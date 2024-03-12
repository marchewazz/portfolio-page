import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en:{
      about: {
        header: "About me",
        englishCV: "English CV",
        polishCV: "Polish CV",
        paragraphs: [
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph"
        ],
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
            title: "Title 1",
            screen: "https://picsum.photos/50"
          },
          {
            title: "Title 2",
            screen: "https://picsum.photos/50"
          },
          {
            title: "Title 3",
            screen: "https://picsum.photos/50"
          }
        ]
      }
    },
    pl: {
      about: {
        header: "O mnie",
        englishCV: "CV po angielsku",
        polishCV: "CV po polsku",
        paragraphs: [
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph",
          "Paragraph"
        ],
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
            title: "Title 1",
            screen: "https://picsum.photos/50"
          },
          {
            title: "Title 2",
            screen: "https://picsum.photos/50"
          },
          {
            title: "Title 3",
            screen: "https://picsum.photos/50"
          }
        ]
      }
    }
});

export default strings