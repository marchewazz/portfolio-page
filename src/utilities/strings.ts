import LocalizedStrings from 'react-localization';

const strings = new LocalizedStrings({
    en:{
      about: {
        header: "About me",
        englishCV: "English CV",
        polishCV: "Polish CV",
        paragraph1: "Paragraph",
        paragraph2: "Paragraph",
        paragraph3: "Paragraph",
        paragraph4: "Paragraph",
        paragraph5: "Paragraph",
        paragraph6: "Paragraph",
        skills: "Skills"
      }
    },
    pl: {
      about: {
        header: "O mnie",
        englishCV: "CV po angielsku",
        polishCV: "CV po polsku",
        paragraph1: "Paragraph",
        paragraph2: "Paragraph",
        paragraph3: "Paragraph",
        paragraph4: "Paragraph",
        paragraph5: "Paragraph",
        paragraph6: "Paragraph",
        skills: "Umiejętności"
      }
    }
});

export default strings