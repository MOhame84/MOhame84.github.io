/* ---------------------------------------------------------------------------
   Every piece of text on the site lives here.
   Replace anything written in [SQUARE BRACKETS] with your real information.
   --------------------------------------------------------------------------- */

export const profile = {
  name: 'Mohamed',
  fullName: 'Mohamed Elsayed Mohamed',
  role: 'Cybersecurity Student & Aspiring Cybersecurity Freelancer',
  location: 'Egypt',
  university: 'Helwan International Technological University',
  major: 'Cybersecurity',
  headline: 'Cybersecurity student building defensive skills in the lab, one system at a time.',
  intro:
    'I build practical skills in cybersecurity, networking, Python, security monitoring, and data-driven problem solving.',
}

export const contact = {
  email: '[ADD EMAIL]',
  github: '[ADD GITHUB URL]',
  linkedin: 'https://www.linkedin.com/in/mohamed-elasayd-b30bbb320',
  upwork: 'https://www.upwork.com/freelancers/~01132956c7f1bb613c?mp_source=share',
  freelancer: 'https://www.freelancer.com/u/Mohamed4782',
  mostaql: 'https://mostaql.com/u/Mohamed_294',
  location: 'Egypt',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'focus', label: 'Security focus' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'learning', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const heroFacts = [
  { label: 'Studying', value: 'Cybersecurity, Helwan International Technological University' },
  { label: 'Academic record', value: 'Excellent results across the first two years' },
  { label: 'Working with', value: 'Cisco Packet Tracer, Splunk, Wireshark, Python, TryHackMe' },
  { label: 'Based in', value: 'Egypt, available for remote junior work' },
]

export const about = {
  paragraphs: [
    'I am a cybersecurity student at Helwan International Technological University, and I came into the degree with a technical background from Applied Technology Schools. Most of what I know I learned by rebuilding it myself: setting up a network in a simulator until the routing finally behaves, reading logs until an odd pattern stands out, or rewriting a Python script until the results hold up.',
    'My strongest ground is networking and the defensive side of security, monitoring, log analysis, and understanding how common weaknesses appear before they become incidents. Alongside that I work in Python, which led me into data analysis and machine learning, and those projects taught me to be careful with evidence: measure the result, check it, and do not claim more than the data supports.',
    'I am early in my career and I say so plainly. What I offer now is careful work, clear documentation, steady communication in English and Arabic, and the habit of learning whatever the task needs.',
  ],
  traits: [
    'Hands-on lab practice',
    'Networking foundations',
    'Python programming',
    'Problem solving',
    'Attention to detail',
    'Continuous learning',
    'Clear written communication',
  ],
}

export const skillGroups = [
  {
    title: 'Cybersecurity',
    note: 'Defensive concepts practised in controlled environments.',
    items: [
      'Network Security',
      'Web Security Fundamentals',
      'Vulnerability Assessment',
      'Security Monitoring',
      'Log Analysis',
      'OSINT',
      'Security Research',
      'Cybersecurity Fundamentals',
    ],
  },
  {
    title: 'Networking',
    note: 'Configured and troubleshot in simulated topologies.',
    items: [
      'Cisco Networking',
      'IP Addressing',
      'VLAN',
      'DHCP',
      'STP',
      'Routing',
      'Network Troubleshooting',
      'Cisco Packet Tracer',
    ],
  },
  {
    title: 'Programming',
    note: 'Used for coursework, tooling and small applications.',
    items: ['Python', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Data & machine learning',
    note: 'Applied in end-to-end classification projects.',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Matplotlib',
      'Classification',
      'Logistic Regression',
      'Random Forest',
      'Data Preprocessing',
      'Model Evaluation',
    ],
  },
  {
    title: 'Tools & platforms',
    note: 'Learning platforms, lab environments and research tools.',
    items: [
      'Wireshark',
      'Splunk',
      'TryHackMe',
      'Hack The Box',
      'OWASP Juice Shop',
      'DVWA',
      'VulnHub',
      'Shodan',
      'Censys',
      'Streamlit',
      'GitHub',
    ],
  },
]

export const focusAreas = [
  {
    title: 'Security monitoring and log analysis',
    body: 'Reading events in Splunk, separating normal activity from the unusual, and following a signal until it either explains itself or deserves a closer look.',
  },
  {
    title: 'Network security',
    body: 'Segmentation with VLANs, addressing plans, routing behaviour and spanning tree, practised in Cisco Packet Tracer topologies I build and then deliberately break.',
  },
  {
    title: 'Web security fundamentals',
    body: 'Studying how common web weaknesses arise, and what a correct configuration looks like, using intentionally vulnerable training applications such as DVWA and OWASP Juice Shop.',
  },
  {
    title: 'OSINT and security research',
    body: 'Gathering publicly available information responsibly with tools like Shodan and Censys, and keeping up with how attacks and defences are actually changing.',
  },
]

export const projects = [
  {
    name: 'Machine learning classification project',
    kind: 'Python',
    summary:
      'An end-to-end classification workflow: cleaning and preparing the dataset, selecting features, training models, testing them on held-out data, and evaluating performance rather than assuming it.',
    stackLabel: 'Technologies',
    stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    link: '[ADD REPOSITORY LINK]',
  },
  {
    name: 'Machine learning Streamlit application',
    kind: 'Application',
    summary:
      'A Streamlit interface that lets someone interact with a trained model directly, enter inputs, see a prediction, and read the evaluation results behind it instead of taking the output on trust.',
    stackLabel: 'Technologies',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    link: '[ADD REPOSITORY LINK]',
  },
  {
    name: 'Cybersecurity laboratory practice',
    kind: 'Lab work',
    summary:
      'Ongoing hands-on learning inside controlled, legal training environments. The goal is understanding security concepts, how common weaknesses appear, and how a defender should think about them.',
    stackLabel: 'Platforms',
    stack: ['TryHackMe', 'Hack The Box', 'DVWA', 'OWASP Juice Shop', 'VulnHub'],
    link: '[ADD PROFILE OR WRITE-UP LINK]',
  },
  {
    name: 'Network configuration and security labs',
    kind: 'Networking',
    summary:
      'Simulated networks built from the addressing plan up: VLANs, DHCP, spanning tree, routing between segments, and structured troubleshooting when a link behaves in a way I did not expect.',
    stackLabel: 'Tools',
    stack: ['Cisco Packet Tracer'],
    link: '[ADD LINK OR REMOVE]',
  },
  {
    name: 'Security monitoring and log analysis',
    kind: 'Blue team',
    summary:
      'Exercises in reading security logs, spotting unusual activity, investigating what surrounds an event, and building the queries and dashboards that make a pattern visible.',
    stackLabel: 'Tools',
    stack: ['Splunk', 'Wireshark'],
    link: '[ADD LINK OR REMOVE]',
  },
]

export const services = {
  note: 'Junior-level work. I take on tasks that match what I have actually practised, agree the scope in writing first, and document what I did and what I found.',
  items: [
    {
      title: 'Basic website security review',
      body: 'A first-pass review of a small site for common misconfigurations, with findings written in plain language and ordered by what to fix first.',
    },
    {
      title: 'Security configuration review',
      body: 'Checking settings on systems and applications against documented good practice, and explaining the reasoning behind each recommendation.',
    },
    {
      title: 'Network configuration support',
      body: 'Help with addressing plans, VLAN design, DHCP and routing for small networks, including lab-tested configurations before they go live.',
    },
    {
      title: 'Basic security log analysis',
      body: 'Going through logs to summarise what happened, highlight unusual activity, and flag what deserves a closer look.',
    },
    {
      title: 'Splunk dashboards and queries',
      body: 'Writing searches and assembling dashboards so the information you care about is visible without digging for it.',
    },
    {
      title: 'OSINT research',
      body: 'Structured research using publicly available sources, delivered as a clear, sourced report.',
    },
    {
      title: 'Cybersecurity research support',
      body: 'Background research, summaries and reference material for a security topic, team or piece of writing.',
    },
    {
      title: 'Basic technical consulting',
      body: 'A conversation about a technical or security question, with an honest answer about what I can help with and what needs someone more experienced.',
    },
  ],
}

export const certifications = [
  { name: 'Google Cybersecurity Certificate', status: '[Completed / In Progress / Planned]' },
  { name: 'CompTIA Security+', status: '[Completed / In Progress / Planned]' },
  { name: '[Add certification name]', status: '[Completed / In Progress / Planned]' },
]

export const learningTracks = [
  'Security monitoring and SIEM practice in Splunk',
  'Cisco networking labs and troubleshooting scenarios',
  'Guided defensive rooms and write-ups on TryHackMe and Hack The Box',
  'Python for security automation and data analysis',
]

export const education = [
  {
    school: 'Helwan International Technological University',
    programme: 'Cybersecurity',
    period: 'Current',
    detail:
      'Excellent academic performance across the first two years, with coursework in networking, programming, security fundamentals and data analysis.',
  },
  {
    school: 'Applied Technology Schools',
    programme: 'Technical education',
    period: 'Before university',
    detail:
      'A practical, workshop-based technical education that became the foundation for my university work.',
  },
]

/** True while a field still holds a [PLACEHOLDER] instead of real information. */
export const isPlaceholder = (value) =>
  typeof value !== 'string' || value.trim().startsWith('[')
