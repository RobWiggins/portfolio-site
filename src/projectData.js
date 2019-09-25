const projectData = [
  {
    title: 'Stay Informed',
    description: `The Stay Informed web application enables United States residents to identify 
    their congressmen based on their address. Users can identify who their biggest donors are, how to contact them, 
    and track their representatives' latest mentions in the news. Use cases may include researching incumbent candidates, 
    uncovering representative-specific financial incentives that may influence policy, and monitoring recent actions 
    to verify they are representing your interests.`,
    demoLink: 'https://stayinformed.now.sh',
    githubLink: 'https://github.com/RobertWiggins/stay-informed-client',
    sourceCodeSide: 'front',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'HTML',
      'CSS',
      'Google Civic API',
      'ProPublica API',
      'OpenSecrets API',
      'United States Images Github',
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
        alt: 'mobile responsive screenshots' },
      {
        mobileName: 'SI_contributions_mobile_372w.jpg',
        mobileWidth: '372w',
        name: 'SI_organization_contribs.jpg',
        alt: 'Highest organizational money contributions within a bar chart',
      },
    ],
  },
  {
    title: 'Spaced Repetition',
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
        mobileName: 'SR_register_mobile.jpg',
        mobileWidth: '',
        name: 'SR_register_desktop.jpg',
        alt: 'Spaced Repetition register account page',
      },
      {
        mobileName: 'SR_dashboard_mobile_408w.jpg',
        mobileWidth: '',
        name: 'SR_dashboard_desktop.jpg',
        alt:
          'Dashboard page which holds your word list and score for each word',
      },
      { 
        mobileName: 'SR_learn_mobile_409w.jpg',
        mobileWidth: '',
        name: 'SR_learn_desktop.jpg', 
        alt: 'Word translation question page' 
      },
      { 
        mobileName: 'SR_answer_mobile_409w.jpg',
        mobileWidth: '',
        name: 'SR_answer_desktop.jpg', 
        alt: 'Word translation answer feedback' 
      },
    ],
  },
  {
    title: 'Barometer',
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
      'Twitter API',
      'IBM Watson Natural Language Analysis API',
      'Jest, Enzyme, Chai, Mocha (testing)',
    ],
    screenshotFiles: [
      {
        mobileName: 'barometer_emotions_mobile_406w.jpg',
        mobileWidth: '',
        name: 'barometer_full.png',
        alt:
          'Barometer home search page, housing a tweet keyword query, emotion charts, and 20 matched tweets',
      }
    ],
  },
]

export default projectData
