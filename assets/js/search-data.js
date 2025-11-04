// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-fastmcp",
      
        title: "FastMCP",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/fastmcp/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-emory-wheel-sales-system-poc-aug-2019",
          title: 'Emory Wheel Sales System POC (Aug 2019)',
          description: "This is a POC video of the sales system designed for Emory Wheel (a student-run newspaper on Emory campus)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EmoryWheelSales/";
            },},{id: "projects-publication",
          title: 'Publication',
          description: "OLTP In Real Life A Large-scale Study of Database Behavior in Modern Online Retail",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Paper/";
            },},{id: "projects-ai-assisted-shopper",
          title: 'AI Assisted Shopper',
          description: "An AI-enabled shopping assistant. This program hosted on Google cloud platform generating images with items in the shopping cart.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_assisted_shopper/";
            },},{id: "projects-cmu-deep-reinforcement-learning-notes",
          title: 'CMU Deep Reinforcement Learning Notes',
          description: "Deep Reinforcement Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drl/";
            },},{id: "projects-cmu-intro-to-ml-notes",
          title: 'CMU Intro to ML Notes',
          description: "Machine Learning Basics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/intro_ml/";
            },},{id: "projects-maximum-entropy-inverse-reinforcement-learning",
          title: 'Maximum Entropy Inverse Reinforcement Learning',
          description: "Maximum Entropy Inverse Reinforcement Learning (MaxEnt IRL) implementation in Python.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/max_ent_irl/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
