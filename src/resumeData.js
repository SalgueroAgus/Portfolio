let resumeData = {
  logo: "./images/Logo.png",
  avatar: "./images/AvatarCircle.png",
  name: "Agustin",
  surname: "Salguero",
  jobTitle: "Fullstack Web Developer",
  cvLink:
    "https://drive.google.com/file/d/1HpmoYPy0LbRvLTUZHWlAGNTYMqWBpStO/view?usp=sharing",
  socialLinks: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/salgueroagustin/",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/SalgueroAgus",
      icon: "fab fa-github",
    }
  ],

  projects: [
    {
      modalLink: "#projectModal1",
      projectCover: "./images/projects/Project1.png",
      captionHeading: "Landing page",
      captionSub: "Html + vanilla scss landing page",
    },
    {
      modalLink: "#projectModal2",
      projectCover: "./images/projects/Project2.png",
      captionHeading: "Giphy",
      captionSub: "Gif searching webpage, vanilla JS",
    },
    {
      modalLink: "#projectModal3",
      projectCover: "./images/projects/Project3.png",
      captionHeading: "Delilah Resto",
      captionSub: "NodeJS project",
    },
    {
      modalLink: "#projectModal4",
      projectCover: "./images/projects/Project4.png",
      captionHeading: "Portfolio",
      captionSub: "ReactJS project",
    },
  ],

  projectModals: [
    {
      modalId: "projectModal1",
      projectTitle: "Landing page",
      projectDetails:
        "Simple landing page using HTML + SCSS using spotify embeded styles.",
      projectImg: "./images/projects/Project1.png",
      code: "https://github.com/SalgueroAgus/proyecto-1",
      liveDemo: "http://salgueroagustinproyecto1.atwebpages.com/",
    },
    {
      modalId: "projectModal2",
      projectTitle: "Giphy",
      projectDetails:
        "Created using Giphy API, vanilla JS, SCSS. Dark mode compatible, you can also create new gifs via webcam, enjoy!",
      projectImg: "./images/projects/Project2.png",
      code: "https://github.com/SalgueroAgus/proyecto-2",
      liveDemo: "https://salgueroagustin.000webhostapp.com/",
    },
    {
      modalId: "projectModal3",
      projectTitle: "Delilah Resto",
      projectDetails:
        "Backend Only using NodeJS, MySQL and Express. Online ordering system for a restaurant. REST API that allows users to register, cancel, modify and obtain information about a data structure that a customer could consume.",
      projectImg: "./images/projects/Project3.png",
      code: "https://github.com/SalgueroAgus/Delilah-resto",
      liveDemo: "Coming SOON",
    },
    {
      modalId: "projectModal4",
      projectTitle: "Portfolio",
      projectDetails:
        "Created using ReactJS",
      projectImg: "./images/projects/Project4.png",
      code: "https://github.com/SalgueroAgus/Portfolio",
      liveDemo: "https://salgueroagus.github.io/Portfolio/",
    },
  ],
};

export default resumeData;
