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
    screenshotFileNames: [
      'SI_landing.jpg',
      'SI_dashboard_reps.jpg',
      'SI_dashboard_news.jpg',
      'SI_mobile_shots.jpg',
      'SI_organization_contribs.jpg',
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
    screenshotFileNames: ['barometer_full.png', 'barometer_mobile_iphone8.png'],
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
    screenshotFileNames: [
      'SR_register.jpg',
      'SR_dashboard.jpg',
      'SR_apprende_word.jpg',
      'SR_answer_result.jpg',
    ],
  },
]

export default projectData
