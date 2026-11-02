// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/website/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Current and past research directions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/website/books/the_godfather/";
            },},{id: "news-started-as-a-postdoctoral-researcher-at-lawrence-berkeley-national-laboratory",
          title: 'Started as a Postdoctoral Researcher at Lawrence Berkeley National Laboratory.',
          description: "",
          section: "News",},{id: "news-our-paper-hydrodiffusion-is-published-in-water-resources-research",
          title: 'Our paper HydroDiffusion is published in Water Resources Research!',
          description: "",
          section: "News",},{id: "news-i-will-present-hydrodiffusion-at-agu26",
          title: 'I will present HydroDiffusion at AGU26.',
          description: "",
          section: "News",},{id: "projects-deep-learning-for-streamflow-simulation-and-forecasting",
          title: 'Deep learning for streamflow simulation and forecasting',
          description: "State-space models and diffusion-based generative models for streamflow simulation and probabilistic forecasting.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/1_streamflow_forecasting/";
            },},{id: "projects-physics-aware-neural-networks-for-hydrology",
          title: 'Physics-aware neural networks for hydrology',
          description: "Embedding mass conservation into neural networks to study how physical constraints shape performance, generalization, and learned representations.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/2_physics_aware_networks/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/website/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/website/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%68%77%61%6E%67@%69%63%73%69.%62%65%72%6B%65%6C%65%79.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=MkTGi1QAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yihanwang08", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yhwang08", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
