const projectData = [
  {
    slug: 'storyflow',
    title: 'StoryFlow',
    lede: 'An AI-powered application that does the heavy lifting of product planning — generating ideas, stories, and concrete tasks from a short problem statement.',
    description: `StoryFlow is an AI-powered application that does a large share of the work for you from very limited input. You describe the problem in a paragraph; the model then generates a full product plan: a Product Requirements Document (PRD), objectives, user stories with acceptance criteria, Gherkin scenarios, engineering tasks, and MVP scope. That output includes new ideas you may not have thought of, gaps you might have missed, and concrete tasks a team can implement. You start from a drafted, cross-linked plan instead of a blank page, then edit what the AI produced. Guest and OAuth login accounts allow you to save your work. Use cases may include scoping an MVP, generating a backlog, uncovering missing requirements, and keeping product decisions in one place instead of scattered docs.`,
    demoLink: 'https://storyflow-gamma.vercel.app/',
    githubLink: 'https://github.com/RobWiggins/AI-Product-Requirements-and-Planning-Generator',
    sourceCodeSide: 'front',
    tech: [
      'React',
      'Redux',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Zod',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Claude Opus API',
      'Jest, Enzyme, Chai, Mocha (testing)',
      'Google OAuth',
      'GitHub OAuth',
    ],
    screenshotFiles: [
      {
        name: 'storyflow-desktop-1440w-compose.png',
        alt: 'StoryFlow compose page where you describe a product problem and draft a plan',
        sources: [
          { file: 'storyflow-desktop-1440w-compose.png', width: 1440 },
          { file: 'storyflow-mobile-390w-compose.png', width: 390 },
        ],
      },
      {
        name: 'storyflow-desktop-1440w-saved-plans.png',
        alt: 'StoryFlow home with a saved PupMatch plan after drafting',
        sources: [
          { file: 'storyflow-desktop-1440w-saved-plans.png', width: 1440 },
          { file: 'storyflow-mobile-390w-saved-plans.png', width: 390 },
        ],
      },
      {
        name: 'storyflow-desktop-1440w-overview.png',
        alt: 'StoryFlow plan overview showing the PupMatch PRD, epics, and brief',
        sources: [
          { file: 'storyflow-desktop-1440w-overview.png', width: 1440 },
          { file: 'storyflow-1024w-overview.png', width: 1024 },
          { file: 'storyflow-mobile-390w-dashboard.png', width: 390 },
        ],
      },
      {
        name: 'storyflow-desktop-1440w-epic-stories.png',
        alt: 'StoryFlow epic with user stories listed for Discovery and Matching',
        sources: [
          { file: 'storyflow-desktop-1440w-epic-stories.png', width: 1440 },
          { file: 'storyflow-1024w-epic-stories.png', width: 1024 },
          { file: 'storyflow-mobile-390w-epics.png', width: 390 },
        ],
      },
      {
        name: 'storyflow-desktop-1440w-story-gherkin.png',
        alt: 'Open StoryFlow user story with acceptance criteria and a Gherkin scenario',
        sources: [
          { file: 'storyflow-desktop-1440w-story-gherkin.png', width: 1440 },
          { file: 'storyflow-mobile-390w-stories.png', width: 390 },
        ],
      },
    ],
  },
  {
    slug: 'stay-informed',
    title: 'Stay Informed',
    lede: 'Look up representatives, donors, and recent news coverage from a U.S. address.',
    description: `The Stay Informed web application enables United States residents to identify 
    their congressmen based on their address. Users can identify who their biggest donors are, how to contact them, 
    and track their representatives' latest mentions in the news. Use cases may include researching incumbent candidates, 
    uncovering representative-specific financial incentives that may influence policy, and monitoring recent actions 
    to verify they are representing your interests.`,
    demoLink: 'https://stayinformed.now.sh',
    githubLink: 'https://github.com/RobWiggins/stay-informed-api',
    sourceCodeSide: 'back',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'HTML',
      'CSS',
      'Geocodio API',
      'Who Bought My Rep API',
      'United States Images Github API',
      'NewsAPI.org',
      'Jest, Enzyme, Chai, Mocha (testing)',
    ],
    screenshotFiles: [
      {
        mobileName: 'SI_register_mobile_373w.jpg',
        mobileWidth: '373w',
        name: 'SI_landing.jpg',
        alt: 'Stay Informed landing page with a welcome message',
      },
      {
        mobileName: 'SI_dashboardrep_mobile_373w.jpg',
        mobileWidth: '373w',
        name: 'SI_dashboard_reps.jpg',
        alt:
          'Stay Informed Dashboard page, holding representatives and district information',
      },
      {
        mobileName: 'SI_dashboardnews_372w.jpg',
        mobileWidth: '372w',
        name: 'SI_dashboard_news.jpg',
        alt:
          'News portion of dashboard that holds articles that mention your district representatives',
      },
      {
        mobileName: 'SI_search_mobile_372w.jpg',
        mobileWidth: '372w',
        name: 'SI_mobile_shots.jpg',
        alt: 'mobile responsive screenshots',
      },
      {
        mobileName: 'SI_contributions_mobile_372w.jpg',
        mobileWidth: '372w',
        name: 'SI_organization_contribs.jpg',
        alt: 'Highest organizational money contributions within a bar chart',
      },
    ],
  },
  {
    slug: 'spaced-repetition',
    title: 'Spaced Repetition',
    lede: 'Learn French vocabulary with a spaced-repetition engine that surfaces missed words more often.',
    description: `The Spaced Repetition web app utilizes the spaced repetition learning system to aid learning words in French. 
    It displays words in French and asks you to recall the translation of the corresponding word in English. The words that you 
    miss more frequently are shown more frequently. Upon mastery of each word, each word will 
    get asked progressively less often. The home dashboard shows your language, words to learn, and score for each word.`,
    demoLink: 'https://spacedrepetitionlearn.now.sh',
    githubLink: 'https://github.com/RobertWiggins/spaced-repetition-api',
    sourceCodeSide: 'back',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'HTML',
      'CSS',
      'Cypress, Chai, Mocha (testing)',
    ],
    screenshotFiles: [
      {
        mobileName: 'spaced-repetition-smaller-width-register-account.png',
        mobileWidth: '974w',
        name: 'spaced-repetition-register-account.png',
        alt: 'Spaced Repetition register account page',
      },
      {
        mobileName: 'spaced-repetition-smaller-width-dashboard.png',
        mobileWidth: '836w',
        name: 'spaced-repetition-dashboard.png',
        alt:
          'Dashboard page which holds your word list and score for each word',
      },
      {
        mobileName: 'spaced-repetition-smaller-width-question.png',
        mobileWidth: '930w',
        name: 'spaced-repetition-question.png',
        alt: 'Word translation question page',
      },
      {
        mobileName: 'spaced-repetition-smaller-width-correct.png',
        mobileWidth: '920w',
        name: 'spaced-repetition-correct.png',
        alt: 'Correct word translation answer feedback',
      },
      {
        mobileName: 'spaced-repetition-smaller-width-wrong.png',
        mobileWidth: '924w',
        name: 'spaced-repetition-wrong.png',
        alt: 'Incorrect word translation answer feedback',
      },
    ],
  },
  {
    slug: 'barometer',
    title: 'Barometer',
    lede: 'Measure the emotional tone of a topic on Twitter in real time using natural language processing.',
    description: `The Barometer web application enables users to quantitatively measure the general population’s 
    emotional view of events and subjects on Twitter in real-time. Through combining Twitter's tweet search API endpoint and IBM’s 
    natural language processing emotion endpoint, the results are aggregated into 6 defined emotional sentiment categories. 
    Use cases may include gathering research that will inform corporate messaging strategy, helping a consumer decide 
    whether to purchase a product, or indexing a user's feelings against other people's feelings.`,
    demoLink: 'https://barometerapp.now.sh',
    githubLink: 'https://github.com/RobertWiggins/barometer-server',
    sourceCodeSide: 'back',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'HTML',
      'CSS',
      'X API',
      'IBM Watson Natural Language Analysis API',
      'Jest, Enzyme, Chai, Mocha (testing)',
    ],
    screenshotFiles: [
      {
        mobileName: 'barometer-charts-smaller-width.png',
        mobileWidth: '1132w',
        name: 'barometer-history-query.png',
        alt:
          'Barometer results page with a highlighted past search term and updated tweet emotion charts',
      },
      {
        mobileName: 'barometer-smaller-width-query-posts.png',
        mobileWidth: '1104w',
        name: 'barometer-search-query.png',
        alt:
          'Barometer search results page showing a flower query, matched tweets, and emotion charts',
      },
    ],
  },
]

export default projectData
