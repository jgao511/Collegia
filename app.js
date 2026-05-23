const FACTOR_ORDER = [
  ["ACADEMIC", "Rigor of secondary school record"],
  ["ACADEMIC", "Class rank"],
  ["ACADEMIC", "Academic Grade Point Average (GPA)"],
  ["ACADEMIC", "Recommendations"],
  ["ACADEMIC", "Standardized test scores"],
  ["ACADEMIC", "Application essay"],
  ["NONACADEMIC", "Interview"],
  ["NONACADEMIC", "Extracurricular activities"],
  ["NONACADEMIC", "Talent/ability"],
  ["NONACADEMIC", "Character/personal qualities"],
  ["NONACADEMIC", "First generation"],
  ["NONACADEMIC", "Alumni/ae relation"],
  ["NONACADEMIC", "Geographical residence"],
  ["NONACADEMIC", "State residency"],
  ["NONACADEMIC", "Religious affiliation/commitment"],
  ["NONACADEMIC", "Volunteer work"],
  ["NONACADEMIC", "Work experience"],
  ["NONACADEMIC", "Level of applicant's interest"],
];

const ACTIVITY_GROUPS = {
  "Academic & Career": ["Academic", "Career-Oriented", "Internship", "Research", "Robotics", "Science/Math"],
  "Arts & Media": ["Art", "Dance", "Journalism/Publication", "Music: Instrumental", "Music: Vocal", "Theater/Drama", "Film/Video"],
  "Sports & Athletics": ["Athletics: Club", "Athletics: JV/Varsity"],
  "Community & Service": ["Community Service (Volunteer)", "Environmental", "Religious", "Social Justice"],
  "Clubs & Organizations": ["Cultural", "Debate/Speech", "Foreign Language", "Junior ROTC", "School Spirit", "Other Club/Activity"],
  "Special Interests & Leadership": ["Computer/Technology", "LGBT", "Student Government/Politics", "Family Responsibilities", "Entrepreneurship", "Paid Work"],
};

const AP_COURSES = [
  "AP 2-D Art and Design", "AP 3-D Art and Design", "AP African American Studies", "AP Art History", "AP Biology",
  "AP Calculus AB", "AP Calculus BC", "AP Chemistry", "AP Chinese Language and Culture", "AP Comparative Government and Politics",
  "AP Computer Science A", "AP Computer Science Principles", "AP Drawing", "AP English Language and Composition",
  "AP English Literature and Composition", "AP Environmental Science", "AP European History", "AP French Language and Culture",
  "AP German Language and Culture", "AP Human Geography", "AP Italian Language and Culture", "AP Japanese Language and Culture",
  "AP Latin", "AP Macroeconomics", "AP Microeconomics", "AP Music Theory", "AP Physics 1: Algebra-Based",
  "AP Physics 2: Algebra-Based", "AP Physics C: Electricity and Magnetism", "AP Physics C: Mechanics", "AP Precalculus",
  "AP Psychology", "AP Research", "AP Seminar", "AP Spanish Language and Culture", "AP Spanish Literature and Culture",
  "AP Statistics", "AP United States Government and Politics", "AP United States History", "AP World History: Modern"
];

const IB_COURSES = [
  "IB Biology", "IB Business Management", "IB Chemistry", "IB Classical Languages", "IB Computer Science", "IB Dance",
  "IB Design Technology", "IB Digital Society", "IB Economics", "IB Environmental Systems and Societies", "IB Film",
  "IB Geography", "IB Global Politics", "IB History", "IB Language A: Language and Literature", "IB Language A: Literature",
  "IB Language B", "IB Mathematics: Analysis and Approaches", "IB Mathematics: Applications and Interpretation", "IB Music",
  "IB Philosophy", "IB Physics", "IB Psychology", "IB Social and Cultural Anthropology", "IB Sports, Exercise and Health Science",
  "IB Theatre", "IB Visual Arts", "IB World Religions"
];

const MAJOR_OPTIONS = {
  engineeringCS: ["Electrical and Computer Engineering", "Computer Engineering", "Electrical Engineering", "Computer Science", "Software Engineering", "Mechanical Engineering", "Aerospace Engineering", "Civil Engineering", "Biomedical Engineering", "Chemical Engineering", "Industrial Engineering", "Data Science", "Artificial Intelligence", "Robotics"],
  businessSocialScience: ["Economics", "Business", "Finance", "Accounting", "Marketing", "Entrepreneurship", "Management", "Political Science", "Public Policy", "International Relations", "Government", "Sociology", "Psychology"],
  lifeSciencesHealth: ["Biology", "Biochemistry", "Neuroscience", "Pre-Med", "Public Health", "Nursing", "Biomedical Sciences", "Chemistry", "Environmental Science"],
  humanitiesArtsMedia: ["English", "History", "Philosophy", "Journalism", "Communications", "Film", "Media Studies", "Design", "Theater", "Music", "Fine Arts", "Architecture"],
  other: ["Education", "Mathematics", "Statistics", "Physics", "Undecided", "Other / Add custom major"]
};

const MAJOR_CATEGORY_LABELS = {
  engineeringCS: "Engineering & Computer Science",
  businessSocialScience: "Business & Social Science",
  lifeSciencesHealth: "Life Sciences & Health",
  humanitiesArtsMedia: "Humanities, Arts & Media",
  other: "Other"
};

const MAJOR_GUIDANCE = {
  engineeringCS: {
    displayLabel: "Engineering & Computer Science",
    fitLanguage: "technical depth, problem-solving, building, research, and applied STEM preparation",
    evidenceToLookFor: ["calculus", "physics", "computer science", "coding", "circuits", "electronics", "robotics", "hardware", "AI", "research", "internships", "competitions", "independent technical builds", "maker projects", "GitHub or portfolio"],
    relevantSchoolStrengthKeywords: ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Robotics", "AI", "Data Science"],
    activityFraming: "Show evidence of building, testing, coding, designing, researching, or solving technical problems.",
    recommendationIdeas: [
      "Build a small embedded systems, robotics, sensor, or data-logging project and document the design process.",
      "Publish a GitHub or portfolio page with code, circuit diagrams, testing notes, or engineering tradeoffs.",
      "Join or lead robotics, coding club, Science Olympiad, or engineering design competitions.",
      "Tutor math, physics, or programming, or complete a hardware repair, automation, or maker project."
    ]
  },
  businessSocialScience: {
    displayLabel: "Business & Social Science",
    fitLanguage: "quantitative reasoning, social science curiosity, business awareness, policy thinking, leadership, and analytical decision-making",
    evidenceToLookFor: ["statistics", "calculus", "economics coursework", "business coursework", "finance or investment experience", "entrepreneurship", "research", "data analysis", "debate", "model UN", "student government", "policy work", "leadership", "work experience"],
    relevantSchoolStrengthKeywords: ["Economics", "Business", "Finance", "Political Science", "Public Policy", "International Relations", "Government", "Data Science"],
    activityFraming: "Show evidence of analysis, leadership, markets, policy, entrepreneurship, research, or decision-making.",
    recommendationIdeas: [
      "Write an economics research brief or create a data analysis project using public datasets.",
      "Analyze local housing, inflation, transportation, labor, technology markets, productivity, or business operations data.",
      "Join or start an investment, economics, business, DECA, FBLA, debate, Model UN, or policy club.",
      "Build a small business, entrepreneurship project, financial literacy workshop, or policy memo."
    ]
  },
  lifeSciencesHealth: {
    displayLabel: "Life Sciences & Health",
    fitLanguage: "science preparation, research mindset, service, healthcare exposure, and interest in biological or human systems",
    evidenceToLookFor: ["biology", "chemistry", "physics", "statistics", "lab work", "research", "clinical volunteering", "shadowing", "public health", "science competitions", "healthcare service"],
    relevantSchoolStrengthKeywords: ["Biology", "Pre-Med", "Public Health", "Neuroscience", "Biomedical Engineering", "Health Sciences", "Nursing"],
    activityFraming: "Show evidence of scientific curiosity, research, service, healthcare exposure, or impact on people and communities.",
    recommendationIdeas: [
      "Volunteer consistently in a healthcare, community health, or public health setting.",
      "Join HOSA, Science Olympiad, biology club, or a public health initiative.",
      "Do a lab, science fair, biology, chemistry, or health education project and document methods/results.",
      "Connect service to public health, biology, patient education, or community health outcomes."
    ]
  },
  humanitiesArtsMedia: {
    displayLabel: "Humanities, Arts & Media",
    fitLanguage: "writing, creativity, interpretation, communication, portfolio evidence, and original voice",
    evidenceToLookFor: ["writing", "portfolio", "publications", "film projects", "performances", "journalism", "creative work", "research", "community arts", "design projects"],
    relevantSchoolStrengthKeywords: ["English", "History", "Film", "Media", "Journalism", "Communications", "Design", "Theater", "Music", "Fine Arts"],
    activityFraming: "Show evidence of original work, audience impact, communication, creativity, and sustained practice.",
    recommendationIdeas: [
      "Build a writing, design, journalism, film, music, or art portfolio.",
      "Publish articles, essays, videos, short films, podcasts, or creative work.",
      "Join newspaper, literary magazine, debate, theater, film club, or design club.",
      "Submit to competitions, festivals, publications, performances, or exhibitions."
    ]
  },
  other: {
    displayLabel: "Other",
    fitLanguage: "academic clarity, evidence of curiosity, and a coherent reason for the chosen path",
    evidenceToLookFor: ["advanced coursework", "projects", "research", "leadership", "writing", "community impact"],
    relevantSchoolStrengthKeywords: ["Research", "Interdisciplinary Studies", "Liberal Arts"],
    activityFraming: "Show evidence that connects interests, coursework, and activities into a clear academic direction.",
    recommendationIdeas: [
      "Add a focused project, paper, portfolio, or activity that clarifies the academic direction.",
      "Use essays to explain why this major path fits the student's current work and goals.",
      "Choose senior-year courses that make the intended direction easier to understand."
    ]
  }
};

const SHORT_REPORT_SYSTEM_PROMPT = `
You write concise college-fit reports from provided context only.
Do not invent facts, rankings, admissions stats, policies, or programs.
Do not dump raw data or repeat sections.
Use named undergraduate schools/programs only from selectedSchoolEnrichment.
Do not mention engineering/ECE advice unless majorCategory is engineeringCS.
For businessSocialScience majors, focus on economics, business, policy, data, leadership, research, and quantitative reasoning.
Omit empty optional sections.
Keep the report short and readable.
Use the requested section order.
The disclaimer must appear once at the end.
`;

const AI_SUMMARY_SYSTEM_PROMPT = `
You write short paragraph-style college-fit snapshots.
Use only the provided compact context.
Do not use section headings.
Do not copy the structured generated summary.
Do not output bullets unless absolutely necessary.
Write 1-2 concise paragraphs, 4-7 sentences total, then append the required disclaimer.
Synthesize the selected sections into natural advisor-style prose.
Mention the selected school, intended major, key school/program fit, academic/coursework issue, activity/impact issue, and 1-2 next steps when available.
Do not invent facts, rankings, admissions stats, programs, or policies.
Do not give engineering/ECE advice for non-engineering majors unless clearly reframed.
The AI Summary must feel different from the Generated Summary.
`;

const holisticFactors = {
  "Rigor of secondary school record": "Very Important",
  "Class rank": "Considered",
  "Academic Grade Point Average (GPA)": "Very Important",
  "Recommendations": "Important",
  "Standardized test scores": "Considered",
  "Application essay": "Important",
  "Interview": "Not Considered",
  "Extracurricular activities": "Important",
  "Talent/ability": "Considered",
  "Character/personal qualities": "Important",
  "First generation": "Considered",
  "Alumni/ae relation": "Considered",
  "Geographical residence": "Considered",
  "State residency": "Considered",
  "Religious affiliation/commitment": "Not Considered",
  "Volunteer work": "Considered",
  "Work experience": "Considered",
  "Level of applicant's interest": "Considered",
};

const publicFactors = {
  ...holisticFactors,
  "Recommendations": "Considered",
  "Application essay": "Considered",
  "Alumni/ae relation": "Not Considered",
  "State residency": "Important",
  "Level of applicant's interest": "Not Considered",
};

const ucFactors = {
  ...publicFactors,
  "Class rank": "Not Considered",
  "Recommendations": "Not Considered",
  "Standardized test scores": "Not Considered",
  "Application essay": "Very Important",
  "Extracurricular activities": "Important",
  "Talent/ability": "Important",
  "State residency": "Important",
};

const highlySelectiveFactors = {
  ...holisticFactors,
  "Class rank": "Not Considered",
  "Recommendations": "Very Important",
  "Standardized test scores": "Important",
  "Application essay": "Very Important",
  "Extracurricular activities": "Very Important",
  "Talent/ability": "Important",
  "Character/personal qualities": "Very Important",
  "Level of applicant's interest": "Not Considered",
};

const importanceMultipliers = {
  "Very Important": 1,
  "Important": 0.7,
  "Considered": 0.35,
  "Not Considered": 0,
};

// Common Data Set C7-style admissions factor ratings use these importance bands.
// UC campuses should also be interpreted through comprehensive review context:
// A-G GPA, course rigor, senior-year program quality, performance in context,
// special talents, and life circumstances.
// Adjust this object when the real school database grows. It is the bridge between
// profile inputs and each college's CDS admissions factor importance ratings.
const factorConfig = {
  rigor: { label: "Rigor of secondary school record", category: "academic", profileField: "courseRigor", baseWeight: 0.2 },
  classRank: { label: "Class rank", category: "academic", profileField: "classRank", baseWeight: 0.08 },
  gpa: { label: "Academic Grade Point Average (GPA)", category: "academic", profileField: "gpa", baseWeight: 0.22 },
  recommendations: { label: "Recommendations", category: "academic", profileField: "recommendations", baseWeight: 0.08 },
  testScores: { label: "Standardized test scores", category: "academic", profileField: "testScores", baseWeight: 0.12 },
  essay: { label: "Application essay", category: "academic", profileField: "essayStrength", baseWeight: 0.12 },
  interview: { label: "Interview", category: "nonacademic", profileField: "interviewStrength", baseWeight: 0.04 },
  extracurriculars: { label: "Extracurricular activities", category: "nonacademic", profileField: "extracurriculars", baseWeight: 0.1 },
  talentAbility: { label: "Talent/ability", category: "nonacademic", profileField: "talentAbility", baseWeight: 0.06 },
  characterPersonalQualities: { label: "Character/personal qualities", category: "nonacademic", profileField: "characterPersonalQualities", baseWeight: 0.08 },
  volunteerWork: { label: "Volunteer work", category: "nonacademic", profileField: "volunteerWork", baseWeight: 0.04 },
  workExperience: { label: "Work experience", category: "nonacademic", profileField: "workExperience", baseWeight: 0.04 },
  demonstratedInterest: { label: "Level of applicant's interest", category: "nonacademic", profileField: "demonstratedInterest", baseWeight: 0.03 },
  firstGeneration: { label: "First generation", category: "contextual", profileField: "firstGeneration", baseWeight: 0 },
  alumniRelation: { label: "Alumni/ae relation", category: "contextual", profileField: "alumniRelations", baseWeight: 0 },
  geographicalResidence: { label: "Geographical residence", category: "contextual", profileField: "geographicalResidence", baseWeight: 0 },
  stateResidency: { label: "State residency", category: "contextual", profileField: "stateResidency", baseWeight: 0 },
  religiousAffiliation: { label: "Religious affiliation/commitment", category: "contextual", profileField: "religiousAffiliation", baseWeight: 0 },
};

const WEBLLM_MODEL = "Llama-3.2-1B-Instruct-q4f32_1-MLC";
const REPORT_VERSION = "advisor-v6";
const DISCLAIMER_TEXT = "This tool does not provide exact admissions probabilities. This tool should not be read as saying a student will or will not be admitted. Admissions factor ratings, rankings, and school profile data come from the app’s school data and should be verified against the current Common Data Set, admissions site, and ranking source.";
const DEFAULT_SUMMARY_SECTIONS = {
  studentProfile: true,
  schoolFit: true,
  academicFit: true,
  majorFit: true,
  rankingsContext: false,
  activitiesImpact: true,
  additionalConsiderations: false,
  suggestedNextSteps: true,
};
const SUMMARY_SECTION_LABELS = {
  studentProfile: "Student Profile",
  schoolFit: "School Fit Summary",
  academicFit: "Academic Fit",
  majorFit: "Major Fit",
  rankingsContext: "Rankings Context",
  activitiesImpact: "Activities & Impact",
  additionalConsiderations: "Additional Considerations",
  suggestedNextSteps: "Suggested Next Steps",
};
const STORAGE_KEYS = {
  profile: "collegiaProfile",
  myList: "collegiaMyList",
  activities: "collegiaActivities",
  awards: "collegiaAwards",
  settings: "collegiaSettings",
  collegePreferences: "collegiaCollegePreferences",
  suggestedSchools: "collegiaSuggestedSchools",
  lastAnalyzeComparison: "collegiaLastAnalyzeComparison",
  lastReport: "collegiaLastReport",
  lastReportVersion: "collegiaLastReportVersion",
  reviewerSchool: "collegiaReviewerSchool",
  photos: "collegiaPhotos",
  photoVersion: "collegiaPhotoVersion",
};

const OLD_STORAGE_KEYS = {
  profile: "college-profile",
  list: "college-list",
  activities: "college-activities",
  awards: "college-awards",
  lastReport: "college-ai-report",
  lastReportVersion: "college-ai-report-version",
  reviewerSchool: "college-reviewer-school",
  photos: "college-photos",
  photoVersion: "college-photo-version",
};

const DEFAULT_COLLEGE_PREFERENCES = {
  preferredRegions: [],
  preferredStates: [],
  urbanSuburbanRural: [],
  publicPrivatePreference: "Any",
  schoolSizePreference: "Any",
  campusVibe: [],
  costSensitivity: "Medium",
  financialAidImportance: "Medium",
  distanceFromHomePreference: "Any",
  climatePreference: [],
  sportsImportance: "Low",
  campusSafetyImportance: "Medium",
  qualityOfLifeImportance: "Medium",
  rankingsImportance: "Low",
  majorStrengthImportance: "High",
  researchImportance: "Medium",
  internshipCoopImportance: "Medium",
  honorsProgramsImportance: "Medium",
  entrepreneurshipImportance: "Medium",
  studyAbroadImportance: "Low",
  diversityImportance: "Medium",
};

const PREFERENCE_OPTIONS = {
  preferredRegions: ["Northeast", "Mid-Atlantic", "South", "Midwest", "Southwest", "West Coast", "Pacific Northwest", "Any"],
  urbanSuburbanRural: ["Urban", "Suburban", "College town", "Rural", "Coastal", "Any"],
  campusVibe: ["Academic/intense", "Collaborative", "Pre-professional", "Creative", "Research-heavy", "Entrepreneurial", "School spirit/sports", "Service/community-focused", "Global/policy-focused", "Tech/startup-focused", "Arts/media-focused", "Any"],
  climatePreference: ["Warm", "Cold/snowy", "Mild", "Coastal", "No preference"],
};

const IMPORTANCE_LEVELS = ["Low", "Medium", "High"];

const HARD_FILTER_KEYS = [
  "preferredRegions",
  "preferredStates",
  "publicPrivatePreference",
  "myListStatus",
];

const SOFT_PREFERENCE_KEYS = [
  "urbanSuburbanRural",
  "schoolSizePreference",
  "campusVibe",
  "costSensitivity",
  "financialAidImportance",
  "distanceFromHomePreference",
  "climatePreference",
  "sportsImportance",
  "campusSafetyImportance",
  "qualityOfLifeImportance",
  "rankingsImportance",
  "majorStrengthImportance",
  "researchImportance",
  "internshipCoopImportance",
  "honorsProgramsImportance",
  "entrepreneurshipImportance",
  "studyAbroadImportance",
  "diversityImportance",
];

const NEARBY_STATES = {
  "New Hampshire": ["Massachusetts", "Maine", "Vermont", "New York", "Rhode Island", "Connecticut"],
  "Massachusetts": ["New Hampshire", "Rhode Island", "Connecticut", "Vermont", "New York", "Maine"],
  "New York": ["New Jersey", "Connecticut", "Massachusetts", "Pennsylvania", "Rhode Island", "Vermont"],
  "New Jersey": ["New York", "Pennsylvania", "Connecticut", "Delaware"],
  "Pennsylvania": ["New Jersey", "New York", "Delaware", "Maryland", "Ohio", "Virginia"],
  "California": ["Oregon", "Washington", "Arizona", "Nevada"],
  "Texas": ["Oklahoma", "Louisiana", "Arkansas", "New Mexico"],
  "Florida": ["Georgia", "Alabama", "South Carolina"],
  "Illinois": ["Wisconsin", "Indiana", "Michigan", "Ohio", "Iowa", "Missouri"],
  "Michigan": ["Ohio", "Indiana", "Illinois", "Wisconsin"],
  "Georgia": ["Florida", "South Carolina", "North Carolina", "Alabama", "Tennessee"],
  "North Carolina": ["Virginia", "South Carolina", "Georgia", "Tennessee"],
  "Virginia": ["North Carolina", "Maryland", "Pennsylvania", "District of Columbia", "West Virginia"],
};

const suggestedSchoolWeights = {
  majorFit: 0.30,
  academicFit: 0.18,
  hardFilterFit: 0.00,
  preferenceFit: 0.2,
  schoolEnvironmentFit: 0.1,
  costResidencyFit: 0.1,
  opportunitiesFit: 0.07,
  rankingsContextFit: 0.05,
};

const CAMPUS_IMAGES = [
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=80",
];

const PHOTO_VERSION = "campus-v9";

const USER_CAMPUS_PHOTOS = {
  ucla: "assets/campus/ucla.jpg",
  berkeley: "assets/campus/berkeley.webp",
  uci: "assets/campus/uci.jpg",
  usc: "assets/campus/usc.jpg",
};

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut", DC: "District of Columbia", DE: "Delaware", FL: "Florida", GA: "Georgia", HI: "Hawaii", IA: "Iowa", ID: "Idaho", IL: "Illinois", IN: "Indiana", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", MA: "Massachusetts", MD: "Maryland", ME: "Maine", MI: "Michigan", MN: "Minnesota", MO: "Missouri", MS: "Mississippi", MT: "Montana", NC: "North Carolina", ND: "North Dakota", NE: "Nebraska", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NV: "Nevada", NY: "New York", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VA: "Virginia", VT: "Vermont", WA: "Washington", WI: "Wisconsin", WV: "West Virginia", WY: "Wyoming"
};

const US_STATES = ["All", ...Object.values(STATE_NAMES)];

const COLLEGE_TRANSITIONS_CDS = {
  ucla: { year: "2024-25", url: "https://drive.google.com/file/d/1eMo8pBZjLcqhav3k6uXL1qPmFwLE12FZ/view?usp=sharing" },
  berkeley: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/1JDwDFzIG63m08ROsiNzrWcsbFfuLSgX6/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  ucsd: { year: "2024-25", url: "https://drive.google.com/file/d/1Be780xVVbU98euP4LPBud63QxodXxGd5/view?usp=sharing" },
  uci: { year: "2024-25", url: "https://drive.google.com/file/d/1E6CPsg5A5FC83Kl5AzRfhXifxSd5O2j9/view?usp=sharing" },
  ucsb: { year: "2024-25", url: "https://drive.google.com/file/d/1992WqPbdNyHeaw0-sqQTw9kLNVXGSm8c/view?usp=sharing" },
  ucdavis: { year: "2024-25", url: "https://drive.google.com/file/d/1xd_2g4L1SqR_csHIwhIpBMTyhY_2E71l/view?usp=sharing" },
  usc: { year: "2024-25", url: "https://drive.google.com/file/d/1TPSsXNRvdeFCI2Oeb4cYvx6A1uxl_EAP/view?usp=sharing" },
  stanford: { year: "2024-25", url: "https://drive.google.com/file/d/1fF9sgzkK3Upmn-DUzfsNKpZm9uEWXUVY/view?usp=sharing" },
  harvard: { year: "2024-25", url: "https://drive.google.com/file/d/1oj6wK7sDYZWs2iyHGKkGALfKdxhkRWYY/view?usp=sharing" },
  mit: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/1sHduG-Dfl3f5GJChbOh1ADti8MeI0THm/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  yale: { year: "2024-25", url: "https://drive.google.com/file/d/12eLoqgFEtiRqe8v8DX7UEu2rn1ZNmzsf/view?usp=sharing" },
  princeton: { year: "2024-25", url: "https://drive.google.com/file/d/1-Bd6UWP4t5siS6G-i4TCpsHD5I0ymgPK/view?usp=sharing" },
  columbia: { year: "2024-25", url: "https://drive.google.com/file/d/1rwmOmrBle2xnIB7bkqJyA2_YKpEVc_g8/view?usp=sharing" },
  nyu: { year: "2024-25", url: "https://drive.google.com/file/d/1WxzME_JwpWRKEFabR7KhIW2vuOh8q0Dy/view?usp=sharing" },
  cornell: { year: "2024-25", url: "https://drive.google.com/file/d/1Nf0ewDcnAshCu2HNkHNGTN45DNR3ZPo7/view?usp=sharing" },
  upenn: { year: "2024-25", url: "https://drive.google.com/file/d/1KPBFxXtdM6jbBCbjPldiwisgb2uMoR69/view?usp=sharing" },
  brown: { year: "2024-25", url: "https://drive.google.com/file/d/1_2XjGF3xL3MAzLbkAauPAeTmfTPFAyYX/view?usp=sharing" },
  dartmouth: { year: "2024-25", url: "https://drive.google.com/file/d/1-NJW__ec_WpOlJWK8r_wgTM_4YNUCjoZ/view?usp=sharing" },
  duke: { year: "2024-25", url: "https://drive.google.com/file/d/1GSANSJf5yJPlMSYCXYy_tImg1X4zUv-K/view?usp=sharing" },
  unc: { year: "2024-25", url: "https://drive.google.com/file/d/1Qgrv6eXLxN4sAnQHndYVNPgWshzBT22S/view?usp=sharing" },
  uva: { year: "2024-25", url: "https://drive.google.com/file/d/1_YeCKoq6qh9clB_COd1PsB7YmTQPhmFG/view?usp=sharing" },
  michigan: { year: "2024-25", url: "https://drive.google.com/file/d/15mEFGiO9bUNcPutjIkWnVE4l4tPLtXWk/view?usp=sharing" },
  wisconsin: { year: "2024-25", url: "https://drive.google.com/file/d/14UNcqVitOmVpukkpaj0kFv-4N4N_Df9v/view?usp=sharing" },
  uiuc: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/1ioTJ14fecoAinpYlR8FahbiHvOhDUTJ5/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  purdue: { year: "2024-25", url: "https://drive.google.com/file/d/1lfbKE3X0Htyuj-rSDRiF90bDw98vVOHL/view?usp=sharing" },
  osu: { year: "2023-24", url: "https://drive.google.com/file/d/1gpiIxLpQ5mee7c-k-8uIbOZ_Erl7Wsqm/view?usp=sharing" },
  pennstate: { year: "2023-24", url: "https://drive.google.com/file/d/1pT5c0hh2blQnTtRJt2aS0pNWbnqxStOY/view?usp=sharing" },
  uf: { year: "2024-25", url: "https://drive.google.com/file/d/1supON3TTW5qWMXI8yaUjQ3WtIYNhRBS3/view?usp=sharing" },
  fsu: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/17Isyj97KmpEnRJdjC4ZgrKWK5RxEGHe0/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  gatech: { year: "2024-25", url: "https://drive.google.com/file/d/1668MvHsgzA8Gajk61vYytKyneRuwY1UD/view?usp=sharing" },
  uga: { year: "2024-25", url: "https://drive.google.com/file/d/1a8JnGMIdJH7D5xQtpO7LTJ7ojak0rLDf/view?usp=sharing" },
  ut: { year: "2024-25", url: "https://drive.google.com/file/d/1IfM-WLguczkEG1sfDhg4OhihHeQkchY9/view?usp=sharing" },
  tamu: { year: "2024-25", url: "https://drive.google.com/file/d/1Rm3p55-BQv7auVzQmWeZqpA2Kxbtc7yF/view?usp=sharing" },
  uw: { year: "2024-25", url: "https://drive.google.com/file/d/1PyXz0wOoGw86bFaA37RKvhGboKIkyMtx/view?usp=sharing" },
  northeastern: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/1uTHhAIjtHoK4IM7YxVRbMeY75ZspPMFc/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  bu: { year: "2024-25", url: "https://drive.google.com/file/d/1fytFte6I1NTerPCk46RMBBsXE1qAgiAv/view?usp=sharing" },
  bc: { year: "2024-25", url: "https://drive.google.com/file/d/1Wz4J6SRfCTTibOEHavBLweEnYAxG_oJR/view?usp=sharing" },
  tufts: { year: "2024-25", url: "https://drive.google.com/file/d/1hEj-ItSJm3HogJxkfPJ94oeHWFAGYEjK/view?usp=sharing" },
  rice: { year: "2024-25", url: "https://drive.google.com/file/d/1qmogyW7ArtG9IezDZdZ9XK8qSx08mboV/view?usp=sharing" },
  vanderbilt: { year: "2024-25", url: "https://docs.google.com/spreadsheets/d/1eNGg4VpN47OW-Zl3EltQOEkVpx9PFhSx/edit?usp=sharing&ouid=103306663286933994404&rtpof=true&sd=true" },
  northwestern: { year: "2024-25", url: "https://drive.google.com/file/d/1w2QtvSXBK8cuV3r10E4g3-beRqP0lilk/view?usp=sharing" },
  uchicago: { year: "2024-25", url: "https://drive.google.com/file/d/1j8fjxHqSZR2Z2S2fTV1pzd3bmtBWGD75/view?usp=sharing" },
  notredame: { year: "2024-25", url: "https://drive.google.com/file/d/1UbEUcDYK0qBNm3g5JoyeGjrP1W1ITCIS/view?usp=sharing" },
  georgetown: { year: "2024-25", url: "https://drive.google.com/file/d/1msvBhqWzTph5m5dUBiyzH6ev4kwzYS03/view?usp=sharing" },
  jhu: { year: "2024-25", url: "https://drive.google.com/file/d/1493J-a9EGTyGekgy-NAohQ_LSEQ3jtDp/view?usp=sharing" },
  cmu: { year: "2024-25", url: "https://drive.google.com/file/d/1HnxkIUM-bg8caT8Yxw5xB2yQP6gdDsKG/view?usp=sharing" },
  emory: { year: "2024-25", url: "https://drive.google.com/file/d/19af3S6BGFGf-5vx_UuSEpO585T_9XWgc/view?usp=sharing" },
  tulane: { year: "2024-25", url: "https://drive.google.com/file/d/1eFKI8ONkOBUJHoYwP7kd2oONKvmq0noX/view?usp=sharing" },
  asu: { year: "2024-25", url: "https://drive.google.com/file/d/1MQ9KpAdeaF8NfcNMUjSFwbHlvh7NzmzF/view?usp=sharing" },
};

const WIKI_TITLES = {
  ucla: "University of California, Los Angeles",
  berkeley: "University of California, Berkeley",
  ucsd: "University of California, San Diego",
  uci: "University of California, Irvine",
  ucsb: "University of California, Santa Barbara",
  ucdavis: "University of California, Davis",
  usc: "University of Southern California",
  stanford: "Stanford University",
  harvard: "Harvard University",
  mit: "Massachusetts Institute of Technology",
  yale: "Yale University",
  princeton: "Princeton University",
  columbia: "Columbia University",
  nyu: "New York University",
  cornell: "Cornell University",
  upenn: "University of Pennsylvania",
  brown: "Brown University",
  dartmouth: "Dartmouth College",
  duke: "Duke University",
  unc: "University of North Carolina at Chapel Hill",
  uva: "University of Virginia",
  michigan: "University of Michigan",
  wisconsin: "University of Wisconsin–Madison",
  uiuc: "University of Illinois Urbana-Champaign",
  purdue: "Purdue University",
  osu: "Ohio State University",
  pennstate: "Pennsylvania State University",
  uf: "University of Florida",
  fsu: "Florida State University",
  gatech: "Georgia Tech",
  uga: "University of Georgia",
  ut: "University of Texas at Austin",
  tamu: "Texas A&M University",
  uw: "University of Washington",
  northeastern: "Northeastern University",
  bu: "Boston University",
  bc: "Boston College",
  tufts: "Tufts University",
  rice: "Rice University",
  vanderbilt: "Vanderbilt University",
  washu: "Washington University in St. Louis",
  northwestern: "Northwestern University",
  uchicago: "University of Chicago",
  notredame: "University of Notre Dame",
  georgetown: "Georgetown University",
  jhu: "Johns Hopkins University",
  cmu: "Carnegie Mellon University",
  emory: "Emory University",
  tulane: "Tulane University",
  asu: "Arizona State University",
};

const SCHOOL_DETAIL_DATA = {
  ucla: { act: "29-34", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "Urban, large campus in Westwood", sports: "NCAA Division I; Big Ten Conference" },
  berkeley: { act: "30-35", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "Urban/suburban flagship campus", sports: "NCAA Division I; ACC" },
  ucsd: { act: "28-34", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "Suburban coastal campus", sports: "NCAA Division I; Big West Conference" },
  uci: { act: "27-33", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "Suburban campus in Orange County", sports: "NCAA Division I; Big West Conference" },
  ucsb: { act: "28-34", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "Suburban/coastal campus", sports: "NCAA Division I; Big West Conference" },
  ucdavis: { act: "27-33", cycles: "UC application only; no ED/EA. Filing window usually Oct. 1-Nov. 30.", campus: "College-town campus", sports: "NCAA Division I; Big West Conference, Big Sky football" },
  usc: { act: "32-35", cycles: "Early Action and Regular Decision; some programs have earlier portfolio deadlines.", campus: "Urban Los Angeles campus", sports: "NCAA Division I; Big Ten Conference" },
  stanford: { act: "34-35", cycles: "Restrictive Early Action and Regular Decision.", campus: "Large suburban residential campus", sports: "NCAA Division I; ACC" },
  harvard: { act: "34-36", cycles: "Restrictive Early Action and Regular Decision.", campus: "Urban/suburban Cambridge campus", sports: "NCAA Division I; Ivy League" },
  mit: { act: "35-36", cycles: "Early Action and Regular Action.", campus: "Urban Cambridge riverfront campus", sports: "NCAA Division III; NEWMAC" },
  yale: { act: "33-35", cycles: "Single-Choice Early Action and Regular Decision.", campus: "Urban residential campus", sports: "NCAA Division I; Ivy League" },
  princeton: { act: "34-35", cycles: "Single-Choice Early Action and Regular Decision.", campus: "Suburban residential campus", sports: "NCAA Division I; Ivy League" },
  columbia: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Urban New York City campus", sports: "NCAA Division I; Ivy League" },
  nyu: { act: "33-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban campuses centered around Greenwich Village", sports: "NCAA Division III; UAA" },
  cornell: { act: "33-35", cycles: "Early Decision and Regular Decision.", campus: "Large college-town campus", sports: "NCAA Division I; Ivy League" },
  upenn: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Urban Philadelphia campus", sports: "NCAA Division I; Ivy League" },
  brown: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Urban residential campus", sports: "NCAA Division I; Ivy League" },
  dartmouth: { act: "33-35", cycles: "Early Decision and Regular Decision.", campus: "Rural college-town campus", sports: "NCAA Division I; Ivy League" },
  duke: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Suburban research campus", sports: "NCAA Division I; ACC" },
  unc: { act: "30-34", cycles: "Early Action and Regular Decision.", campus: "College-town flagship campus", sports: "NCAA Division I; ACC" },
  uva: { act: "32-35", cycles: "Early Decision, Early Action, and Regular Decision.", campus: "Suburban/college-town flagship campus", sports: "NCAA Division I; ACC" },
  michigan: { act: "31-35", cycles: "Early Action and Regular Decision.", campus: "College-town flagship campus", sports: "NCAA Division I; Big Ten Conference" },
  wisconsin: { act: "28-32", cycles: "Early Action and Regular Decision.", campus: "Urban/college-town lakeside campus", sports: "NCAA Division I; Big Ten Conference" },
  uiuc: { act: "29-34", cycles: "Early Action and Regular Decision.", campus: "College-town flagship campus", sports: "NCAA Division I; Big Ten Conference" },
  purdue: { act: "27-34", cycles: "Early Action and Regular Decision.", campus: "College-town campus", sports: "NCAA Division I; Big Ten Conference" },
  osu: { act: "29-34", cycles: "Early Action and Regular Decision.", campus: "Urban flagship campus", sports: "NCAA Division I; Big Ten Conference" },
  pennstate: { act: "26-32", cycles: "Early Action and Regular Decision/rolling notification.", campus: "Large college-town campus", sports: "NCAA Division I; Big Ten Conference" },
  uf: { act: "30-34", cycles: "Priority/early application and Regular Decision.", campus: "College-town flagship campus", sports: "NCAA Division I; SEC" },
  fsu: { act: "28-32", cycles: "Early Action for eligible applicants and Regular Decision.", campus: "Urban/college-town campus", sports: "NCAA Division I; ACC" },
  gatech: { act: "31-35", cycles: "Early Action and Regular Decision.", campus: "Urban Atlanta campus", sports: "NCAA Division I; ACC" },
  uga: { act: "28-33", cycles: "Early Action and Regular Decision.", campus: "College-town flagship campus", sports: "NCAA Division I; SEC" },
  ut: { act: "29-34", cycles: "Priority deadline and Regular Decision.", campus: "Urban flagship campus", sports: "NCAA Division I; SEC" },
  tamu: { act: "25-31", cycles: "Early Action for engineering and Regular Decision.", campus: "Large college-town campus", sports: "NCAA Division I; SEC" },
  uw: { act: "29-34", cycles: "Regular Decision; some programs have separate deadlines.", campus: "Urban Seattle campus", sports: "NCAA Division I; Big Ten Conference" },
  northeastern: { act: "33-35", cycles: "Early Decision I, Early Action, Early Decision II, and Regular Decision.", campus: "Urban Boston campus", sports: "NCAA Division I; CAA/Hockey East" },
  bu: { act: "32-34", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban Boston campus", sports: "NCAA Division I; Patriot League/Hockey East" },
  bc: { act: "33-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Suburban campus near Boston", sports: "NCAA Division I; ACC" },
  tufts: { act: "33-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Suburban campus near Boston", sports: "NCAA Division III; NESCAC" },
  rice: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Urban Houston campus", sports: "NCAA Division I; AAC" },
  vanderbilt: { act: "34-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban Nashville campus", sports: "NCAA Division I; SEC" },
  washu: { act: "33-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Suburban St. Louis campus", sports: "NCAA Division III; UAA" },
  northwestern: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Suburban lakefront campus near Chicago", sports: "NCAA Division I; Big Ten Conference" },
  uchicago: { act: "34-35", cycles: "Early Action, Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban Chicago campus", sports: "NCAA Division III; UAA" },
  notredame: { act: "33-35", cycles: "Restrictive Early Action and Regular Decision.", campus: "Suburban residential campus", sports: "NCAA Division I; ACC, independent football" },
  georgetown: { act: "32-35", cycles: "Early Action and Regular Decision.", campus: "Urban Washington, DC campus", sports: "NCAA Division I; Big East" },
  jhu: { act: "34-35", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban Baltimore campus", sports: "NCAA Division III; Centennial Conference, Big Ten lacrosse" },
  cmu: { act: "34-35", cycles: "Early Decision and Regular Decision.", campus: "Urban Pittsburgh campus", sports: "NCAA Division III; UAA" },
  emory: { act: "32-34", cycles: "Early Decision I, Early Decision II, and Regular Decision.", campus: "Suburban Atlanta campus", sports: "NCAA Division III; UAA" },
  tulane: { act: "31-34", cycles: "Early Action, Early Decision I, Early Decision II, and Regular Decision.", campus: "Urban New Orleans campus", sports: "NCAA Division I; AAC" },
  asu: { act: "22-29", cycles: "Rolling/priority admission pathways.", campus: "Large urban/suburban multi-campus university", sports: "NCAA Division I; Big 12 Conference" },
};

const SCHOOL_METRIC_CONTEXT = {
  ucla: { setting: "Urban", campusTags: ["large research university", "urban", "arts/media ecosystem", "pre-professional", "research-heavy"], locationAdvantages: ["Los Angeles creative industries", "Southern California internship access", "public research ecosystem"], climateTags: ["Warm", "Mild", "Coastal"], qualityOfLifeTags: ["Urban access", "Arts/media ecosystem"] },
  berkeley: { setting: "Urban", campusTags: ["large research university", "urban", "tech/startup ecosystem", "academic/intense", "public service", "research-heavy"], locationAdvantages: ["Bay Area innovation ecosystem", "public mission", "technology and policy networks"], climateTags: ["Mild", "Coastal"], qualityOfLifeTags: ["Urban access", "Tech/startup ecosystem"] },
  ucsd: { setting: "Coastal/suburban", campusTags: ["large research university", "coastal", "research-heavy", "STEM-focused", "collaborative"], locationAdvantages: ["San Diego biotech and research ecosystem", "coastal science context"], climateTags: ["Warm", "Mild", "Coastal"], qualityOfLifeTags: ["Water/coastal setting", "Research-heavy"] },
  uci: { setting: "Suburban", campusTags: ["large research university", "suburban", "pre-professional", "research-heavy", "Southern California"], locationAdvantages: ["Orange County industry access", "Southern California health and technology context"], climateTags: ["Warm", "Mild", "Coastal"], qualityOfLifeTags: ["Suburban setting", "Urban access"] },
  ucsb: { setting: "Coastal college town", campusTags: ["large research university", "coastal", "college town", "collaborative", "research-heavy"], locationAdvantages: ["coastal and environmental research context", "California public university network"], climateTags: ["Mild", "Coastal"], qualityOfLifeTags: ["Water/coastal setting", "College town"] },
  ucdavis: { setting: "College town", campusTags: ["large research university", "college town", "collaborative", "sustainability", "agriculture/life sciences"], locationAdvantages: ["Sacramento region access", "agriculture and sustainability ecosystem"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["College town", "Bike-centered campus"] },
  usc: { setting: "Urban", campusTags: ["urban", "pre-professional", "arts/media ecosystem", "entrepreneurial", "strong alumni network"], locationAdvantages: ["Los Angeles media and business ecosystem", "Southern California internship access"], climateTags: ["Warm", "Mild", "Coastal"], qualityOfLifeTags: ["Urban access", "Arts/media ecosystem"] },
  stanford: { setting: "Suburban", campusTags: ["suburban", "tech/startup ecosystem", "entrepreneurial", "research-heavy", "academic/intense"], locationAdvantages: ["Silicon Valley ecosystem", "innovation and entrepreneurship context"], climateTags: ["Mild"], qualityOfLifeTags: ["Tech/startup ecosystem", "Residential campus"] },
  harvard: { setting: "Urban/suburban", campusTags: ["urban", "research-heavy", "academic/intense", "global/policy-focused", "residential"], locationAdvantages: ["Boston/Cambridge academic ecosystem", "global research network"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Residential houses"] },
  mit: { setting: "Urban", campusTags: ["urban", "tech/startup ecosystem", "academic/intense", "maker culture", "research-heavy"], locationAdvantages: ["Cambridge/Boston innovation ecosystem", "technical research and startup access"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Tech/startup ecosystem"] },
  yale: { setting: "Urban", campusTags: ["urban", "residential", "arts/media ecosystem", "global/policy-focused", "academic/intense"], locationAdvantages: ["Northeast arts, policy, and research access", "residential college system"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Residential colleges", "Urban access"] },
  princeton: { setting: "Suburban", campusTags: ["suburban", "undergraduate-focused", "academic/intense", "research-heavy", "public service"], locationAdvantages: ["senior thesis culture", "New Jersey/Northeast access"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Residential campus", "Undergraduate focus"] },
  columbia: { setting: "Urban", campusTags: ["urban", "global/policy-focused", "research-heavy", "pre-professional", "arts/media ecosystem"], locationAdvantages: ["New York City access", "finance, media, policy, and research networks"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Core Curriculum"] },
  nyu: { setting: "Urban", campusTags: ["urban", "global", "arts/media ecosystem", "pre-professional", "entrepreneurial"], locationAdvantages: ["New York City finance, media, arts, and startup access", "global campus network"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Global network"] },
  cornell: { setting: "College town", campusTags: ["large research university", "college town", "research-heavy", "pre-professional", "collaborative"], locationAdvantages: ["Ithaca college-town environment", "broad college system"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Large research campus"] },
  upenn: { setting: "Urban", campusTags: ["urban", "pre-professional", "entrepreneurial", "research-heavy", "interdisciplinary"], locationAdvantages: ["Philadelphia urban access", "business, healthcare, and engineering ecosystem"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Pre-professional culture"] },
  brown: { setting: "Urban", campusTags: ["urban", "collaborative", "creative", "open curriculum", "research-heavy"], locationAdvantages: ["Providence arts and research access", "self-directed curriculum"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Open Curriculum"] },
  dartmouth: { setting: "Rural/college town", campusTags: ["small undergraduate focus", "rural", "college town", "collaborative", "outdoors"], locationAdvantages: ["close-knit campus", "outdoor and liberal arts environment"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Outdoor culture"] },
  duke: { setting: "Suburban", campusTags: ["suburban", "research-heavy", "strong school spirit", "pre-professional", "collaborative"], locationAdvantages: ["Research Triangle access", "health, policy, and entrepreneurship context"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["School spirit", "Research campus"] },
  unc: { setting: "College town", campusTags: ["large public research university", "college town", "public service", "strong school spirit", "collaborative"], locationAdvantages: ["Research Triangle access", "public health, journalism, and business context"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["College town", "School spirit"] },
  uva: { setting: "Suburban/college town", campusTags: ["large public research university", "college town", "public service", "pre-professional", "strong traditions"], locationAdvantages: ["Charlottesville college-town setting", "commerce, policy, and leadership context"], climateTags: ["Mild"], qualityOfLifeTags: ["College town", "Traditions"] },
  michigan: { setting: "College town", campusTags: ["large public research university", "college town", "strong school spirit", "research-heavy", "pre-professional"], locationAdvantages: ["Ann Arbor college-town ecosystem", "large research university resources"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Strong school spirit"] },
  wisconsin: { setting: "Urban/college town", campusTags: ["large public research university", "college town", "strong school spirit", "research-heavy", "lakeside"], locationAdvantages: ["Madison state capital access", "lakeside campus and public research context"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Water/coastal setting"] },
  uiuc: { setting: "College town", campusTags: ["large public research university", "college town", "STEM-focused", "research-heavy", "strong school spirit"], locationAdvantages: ["major engineering and computing ecosystem", "Big Ten research campus"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Large campus"] },
  purdue: { setting: "College town", campusTags: ["large public research university", "college town", "STEM-focused", "hands-on", "strong school spirit"], locationAdvantages: ["engineering, aviation, and technology culture", "practical innovation ecosystem"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "Engineering culture"] },
  osu: { setting: "Urban", campusTags: ["large public research university", "urban", "strong school spirit", "pre-professional", "research-heavy"], locationAdvantages: ["Columbus urban and industry access", "large-campus opportunities"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "School spirit"] },
  pennstate: { setting: "College town", campusTags: ["large public research university", "college town", "strong school spirit", "large alumni network", "pre-professional"], locationAdvantages: ["large alumni network", "broad public research resources"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["College town", "School spirit"] },
  uf: { setting: "College town", campusTags: ["large public research university", "college town", "strong school spirit", "honors", "research-heavy"], locationAdvantages: ["Florida public flagship context", "health, agriculture, and business ecosystem"], climateTags: ["Warm"], qualityOfLifeTags: ["College town", "School spirit"] },
  fsu: { setting: "Urban/college town", campusTags: ["large public research university", "urban", "college town", "arts/media ecosystem", "strong school spirit"], locationAdvantages: ["Tallahassee state capital context", "arts, criminology, and policy access"], climateTags: ["Warm"], qualityOfLifeTags: ["College town", "School spirit"] },
  gatech: { setting: "Urban", campusTags: ["urban", "STEM-focused", "tech/startup ecosystem", "research-heavy", "entrepreneurial"], locationAdvantages: ["Atlanta tech and startup ecosystem", "engineering and computing industry access"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["Urban access", "Tech/startup ecosystem"] },
  uga: { setting: "College town", campusTags: ["large public research university", "college town", "strong school spirit", "public service", "pre-professional"], locationAdvantages: ["Athens college-town environment", "state flagship opportunities"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["College town", "School spirit"] },
  ut: { setting: "Urban", campusTags: ["large public research university", "urban", "tech/startup ecosystem", "strong school spirit", "pre-professional"], locationAdvantages: ["Austin tech, policy, media, and startup ecosystem", "Texas economy access"], climateTags: ["Warm"], qualityOfLifeTags: ["Urban access", "Tech/startup ecosystem"] },
  tamu: { setting: "College town", campusTags: ["large public research university", "college town", "strong school spirit", "engineering culture", "service/leadership"], locationAdvantages: ["Texas engineering, agriculture, and energy context", "large alumni network"], climateTags: ["Warm"], qualityOfLifeTags: ["College town", "School spirit"] },
  uw: { setting: "Urban", campusTags: ["large public research university", "urban", "tech/startup ecosystem", "research-heavy", "coastal"], locationAdvantages: ["Seattle tech ecosystem", "public health, environment, and computing access"], climateTags: ["Mild", "Coastal"], qualityOfLifeTags: ["Urban access", "Water/coastal setting"] },
  northeastern: { setting: "Urban", campusTags: ["urban", "co-op/experiential learning", "pre-professional", "global", "career-focused"], locationAdvantages: ["Boston internship and co-op ecosystem", "global campus network"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Co-op/experiential learning"] },
  bu: { setting: "Urban", campusTags: ["urban", "pre-professional", "research-heavy", "global", "health/media ecosystem"], locationAdvantages: ["Boston health, communications, business, and research ecosystem"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Global city"] },
  bc: { setting: "Suburban/near urban", campusTags: ["suburban", "service/community-focused", "pre-professional", "residential", "Jesuit"], locationAdvantages: ["Boston-area access", "service, ethics, and management context"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Suburban setting", "Boston access"] },
  tufts: { setting: "Suburban/near urban", campusTags: ["suburban", "collaborative", "global/policy-focused", "civic engagement", "interdisciplinary"], locationAdvantages: ["Boston-area access", "global/civic and interdisciplinary ecosystem"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Suburban setting", "Boston access"] },
  rice: { setting: "Urban", campusTags: ["urban", "collaborative", "residential colleges", "research-heavy", "undergraduate-focused"], locationAdvantages: ["Houston medical and energy ecosystem", "close-knit residential college context"], climateTags: ["Warm"], qualityOfLifeTags: ["Residential colleges", "Urban access"] },
  vanderbilt: { setting: "Urban", campusTags: ["urban", "collaborative", "strong school spirit", "research-heavy", "pre-professional"], locationAdvantages: ["Nashville health, music, business, and education ecosystem"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["Urban access", "School spirit"] },
  washu: { setting: "Suburban/urban", campusTags: ["suburban", "collaborative", "research-heavy", "pre-professional", "residential"], locationAdvantages: ["St. Louis health, biomedical, and business context"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Residential campus", "Urban access"] },
  northwestern: { setting: "Suburban/near urban", campusTags: ["suburban", "arts/media ecosystem", "interdisciplinary", "research-heavy", "pre-professional"], locationAdvantages: ["Chicago media, business, policy, and arts access", "lakefront campus"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Water/coastal setting", "Chicago access"] },
  uchicago: { setting: "Urban", campusTags: ["urban", "academic/intense", "research-heavy", "intellectual", "core curriculum"], locationAdvantages: ["Chicago policy, economics, research, and cultural access"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Core Curriculum"] },
  notredame: { setting: "Suburban/college town", campusTags: ["suburban", "service/community-focused", "strong school spirit", "residential", "mission-driven"], locationAdvantages: ["Notre Dame alumni network", "service, ethics, and business context"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Residential campus", "School spirit"] },
  georgetown: { setting: "Urban", campusTags: ["urban", "global/policy-focused", "public service", "pre-professional", "Jesuit"], locationAdvantages: ["Washington, DC policy, diplomacy, government, and internship access"], climateTags: ["Mild"], qualityOfLifeTags: ["Urban access", "DC policy ecosystem"] },
  jhu: { setting: "Urban", campusTags: ["urban", "research-heavy", "health/medical ecosystem", "academic/intense", "pre-professional"], locationAdvantages: ["Baltimore medical and public health ecosystem", "early research access"], climateTags: ["Mild"], qualityOfLifeTags: ["Urban access", "Research-heavy"] },
  cmu: { setting: "Urban", campusTags: ["urban", "STEM-focused", "arts/media ecosystem", "tech/startup ecosystem", "project-based"], locationAdvantages: ["Pittsburgh tech, robotics, arts, and product ecosystem"], climateTags: ["Cold/snowy"], qualityOfLifeTags: ["Urban access", "Project-based culture"] },
  emory: { setting: "Suburban/urban", campusTags: ["suburban", "health/medical ecosystem", "research-heavy", "pre-professional", "service/community-focused"], locationAdvantages: ["Atlanta health, nonprofit, business, and public health context"], climateTags: ["Warm", "Mild"], qualityOfLifeTags: ["Atlanta access", "Health ecosystem"] },
  tulane: { setting: "Urban", campusTags: ["urban", "service/community-focused", "public health", "arts/culture ecosystem", "pre-professional"], locationAdvantages: ["New Orleans public health, culture, architecture, and service context"], climateTags: ["Warm"], qualityOfLifeTags: ["Urban access", "Arts/culture ecosystem"] },
  asu: { setting: "Urban/suburban", campusTags: ["large public research university", "urban", "innovation", "entrepreneurial", "honors", "career-focused"], locationAdvantages: ["Phoenix/Tempe growth, sustainability, entrepreneurship, and design ecosystem"], climateTags: ["Warm"], qualityOfLifeTags: ["Urban access", "Innovation ecosystem"] },
};

// Rankings change yearly. U.S. News rankings should be rechecked annually and
// used only as reputation/context signals, never as admissions predictions.
const US_NEWS_2026_NATIONAL_UNIVERSITIES = {
  "Princeton University": { rank: 1, displayText: "#1 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Massachusetts Institute of Technology": { rank: 2, displayText: "#2 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Harvard University": { rank: 3, displayText: "#3 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Stanford University": { rank: 4, displayText: "#4 National Universities", verified: true, verificationNote: "Tied at #4. Verified from published 2026 U.S. News top-50 transcription." },
  "Yale University": { rank: 4, displayText: "#4 National Universities", verified: true, verificationNote: "Tied at #4. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Chicago": { rank: 6, displayText: "#6 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Duke University": { rank: 7, displayText: "#7 National Universities", verified: true, verificationNote: "Tied at #7. Verified from published 2026 U.S. News top-50 transcription." },
  "Johns Hopkins University": { rank: 7, displayText: "#7 National Universities", verified: true, verificationNote: "Tied at #7. Verified from published 2026 U.S. News top-50 transcription." },
  "Northwestern University": { rank: 7, displayText: "#7 National Universities", verified: true, verificationNote: "Tied at #7. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Pennsylvania": { rank: 7, displayText: "#7 National Universities", verified: true, verificationNote: "Tied at #7. Verified from published 2026 U.S. News top-50 transcription." },
  "Cornell University": { rank: 12, displayText: "#12 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Brown University": { rank: 13, displayText: "#13 National Universities", verified: true, verificationNote: "Tied at #13. Verified from published 2026 U.S. News top-50 transcription." },
  "Dartmouth College": { rank: 13, displayText: "#13 National Universities", verified: true, verificationNote: "Tied at #13. Verified from published 2026 U.S. News top-50 transcription." },
  "Columbia University": { rank: 15, displayText: "#15 National Universities", verified: true, verificationNote: "Tied at #15. Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, Berkeley": { rank: 15, displayText: "#15 National Universities", verified: true, verificationNote: "Tied at #15. Verified from published 2026 U.S. News top-50 transcription." },
  "Rice University": { rank: 17, displayText: "#17 National Universities", verified: true, verificationNote: "Tied at #17. Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, Los Angeles": { rank: 17, displayText: "#17 National Universities", verified: true, verificationNote: "Tied at #17. Verified from published 2026 U.S. News top-50 transcription." },
  "Vanderbilt University": { rank: 17, displayText: "#17 National Universities", verified: true, verificationNote: "Tied at #17. Verified from published 2026 U.S. News top-50 transcription." },
  "Carnegie Mellon University": { rank: 20, displayText: "#20 National Universities", verified: true, verificationNote: "Tied at #20. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Michigan": { rank: 20, displayText: "#20 National Universities", verified: true, verificationNote: "Tied at #20. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Notre Dame": { rank: 20, displayText: "#20 National Universities", verified: true, verificationNote: "Tied at #20. Verified from published 2026 U.S. News top-50 transcription." },
  "Washington University in St. Louis": { rank: 20, displayText: "#20 National Universities", verified: true, verificationNote: "Tied at #20. Verified from published 2026 U.S. News top-50 transcription." },
  "Emory University": { rank: 24, displayText: "#24 National Universities", verified: true, verificationNote: "Tied at #24. Verified from published 2026 U.S. News top-50 transcription." },
  "Georgetown University": { rank: 24, displayText: "#24 National Universities", verified: true, verificationNote: "Tied at #24. Verified from published 2026 U.S. News top-50 transcription." },
  "University of North Carolina at Chapel Hill": { rank: 26, displayText: "#26 National Universities", verified: true, verificationNote: "Tied at #26. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Virginia": { rank: 26, displayText: "#26 National Universities", verified: true, verificationNote: "Tied at #26. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Southern California": { rank: 28, displayText: "#28 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, San Diego": { rank: 29, displayText: "#29 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "University of Florida": { rank: 30, displayText: "#30 National Universities", verified: true, verificationNote: "Tied at #30. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Texas at Austin": { rank: 30, displayText: "#30 National Universities", verified: true, verificationNote: "Tied at #30. Verified from published 2026 U.S. News top-50 transcription and Texas reporting." },
  "Georgia Institute of Technology": { rank: 32, displayText: "#32 National Universities", verified: true, verificationNote: "Tied at #32. Verified from published 2026 U.S. News top-50 transcription." },
  "New York University": { rank: 32, displayText: "#32 National Universities", verified: true, verificationNote: "Tied at #32. Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, Davis": { rank: 32, displayText: "#32 National Universities", verified: true, verificationNote: "Tied at #32. Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, Irvine": { rank: 32, displayText: "#32 National Universities", verified: true, verificationNote: "Tied at #32. Verified from published 2026 U.S. News top-50 transcription." },
  "Boston College": { rank: 36, displayText: "#36 National Universities", verified: true, verificationNote: "Tied at #36. Verified from published 2026 U.S. News top-50 transcription and BC news." },
  "Tufts University": { rank: 36, displayText: "#36 National Universities", verified: true, verificationNote: "Tied at #36. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Illinois Urbana-Champaign": { rank: 36, displayText: "#36 National Universities", verified: true, verificationNote: "Tied at #36. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Wisconsin-Madison": { rank: 36, displayText: "#36 National Universities", verified: true, verificationNote: "Tied at #36. Verified from published 2026 U.S. News top-50 transcription." },
  "University of California, Santa Barbara": { rank: 40, displayText: "#40 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "The Ohio State University": { rank: 41, displayText: "#41 National Universities", verified: true, verificationNote: "Verified from published 2026 U.S. News top-50 transcription." },
  "Boston University": { rank: 42, displayText: "#42 National Universities", verified: true, verificationNote: "Tied at #42. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Washington": { rank: 42, displayText: "#42 National Universities", verified: true, verificationNote: "Tied at #42. Verified from published 2026 U.S. News top-50 transcription." },
  "Northeastern University": { rank: 46, displayText: "#46 National Universities", verified: true, verificationNote: "Tied at #46. Verified from published 2026 U.S. News top-50 transcription." },
  "Purdue University": { rank: 46, displayText: "#46 National Universities", verified: true, verificationNote: "Tied at #46. Verified from published 2026 U.S. News top-50 transcription." },
  "University of Georgia": { rank: 46, displayText: "#46 National Universities", verified: true, verificationNote: "Tied at #46. Verified from published 2026 U.S. News top-50 transcription." },
  "Penn State University": { rank: null, displayText: "", verified: false, verificationNote: "Needs manual verification for U.S. News 2026 National Universities rank. Leave blank until verified." },
  "Florida State University": { rank: 51, displayText: "#51 National Universities", verified: false, verificationNote: "Commonly reported as tied at #51 for 2026, but mark unverified unless verified directly against U.S. News or official FSU materials. FSU official materials verify #21 Top Public Schools." },
  "Texas A&M University": { rank: 51, displayText: "#51 National Universities", verified: true, verificationNote: "Verified from Texas reporting on U.S. News 2026 rankings." },
  "Tulane University": { rank: 69, displayText: "#69 National Universities", verified: true, verificationNote: "Verified from Tulane Hullabaloo report on U.S. News 2026 National Universities." },
  "Arizona State University": { rank: 117, displayText: "#117 National Universities", verified: true, verificationNote: "Verified from Axios Phoenix report on U.S. News 2026 rankings. Also #1 Most Innovative Schools." },
};

const ENGINEERING_RANKING_MAJORS = ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Aerospace Engineering", "Civil Engineering", "Biomedical Engineering", "Chemical Engineering", "Computer Science", "Data Science"];
const CS_RANKING_MAJORS = ["Computer Science", "Computer Engineering", "Data Science", "Artificial Intelligence", "Software Engineering"];
const ECE_RANKING_MAJORS = ["Electrical Engineering", "Computer Engineering", "Electrical and Computer Engineering"];
const BUSINESS_RANKING_MAJORS = ["Business", "Economics", "Finance", "Accounting", "Marketing", "Entrepreneurship", "Management"];
const HEALTH_RANKING_MAJORS = ["Pre-Med", "Biology", "Public Health", "Biomedical Sciences", "Neuroscience", "Health Sciences"];
const ARTS_MEDIA_RANKING_MAJORS = ["Film", "Media Studies", "Communications", "Journalism", "Design", "Theater", "Music", "Fine Arts", "Arts"];

function usNewsEngRank(rank, displayText = `#${rank} Best Undergraduate Engineering Programs`, relevantMajors = ENGINEERING_RANKING_MAJORS, note = "Verified from published U.S. News 2025 undergraduate engineering ranking transcription.", sourceYear = "2025") {
  return { source: "U.S. News & World Report", sourceYear, category: "Best Undergraduate Engineering Programs", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function usNewsSpecialRank(category, rank, displayText, relevantMajors, note) {
  return { source: "U.S. News & World Report", sourceYear: "2026", category, rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function theCsRank(rank, displayText = `#${rank} U.S. Computer Science`, relevantMajors = CS_RANKING_MAJORS, note = "Verified from Times Higher Education 2026 U.S. Computer Science ranking.") {
  return { source: "Times Higher Education", sourceYear: "2026", category: "U.S. Computer Science", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function theEngRank(rank, displayText, relevantMajors, note) {
  return { source: "Times Higher Education", sourceYear: "2026", category: "U.S. Engineering", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function theBusinessRank(rank, displayText = `#${rank} U.S. Business Schools`, relevantMajors = BUSINESS_RANKING_MAJORS, note = "Verified from Times Higher Education 2026 U.S. Business Schools ranking.") {
  return { source: "Times Higher Education", sourceYear: "2026", category: "U.S. Business Schools", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function pqBusinessRank(rank, displayText = `#${rank} Best Undergraduate Business Schools`, relevantMajors = BUSINESS_RANKING_MAJORS, note = "Verified from Poets&Quants 2026 Best Undergraduate Business Schools ranking.") {
  return { source: "Poets&Quants", sourceYear: "2026", category: "Best Undergraduate Business Schools", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function usNewsBusinessRank(rank, displayText = `#${rank} Undergraduate Business`, relevantMajors = BUSINESS_RANKING_MAJORS, note = "Verified from Poets&Quants report on U.S. News 2026 undergraduate business rankings.") {
  return { source: "U.S. News & World Report", sourceYear: "2026", category: "Undergraduate Business", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function theMedicineRank(rank, displayText = `#${rank} U.S. Medicine`, relevantMajors = HEALTH_RANKING_MAJORS, note = "Verified from Times Higher Education 2026 U.S. Medicine ranking.") {
  return { source: "Times Higher Education", sourceYear: "2026", category: "U.S. Medicine", rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function healthRank(source, category, rank, displayText, relevantMajors, note, sourceYear = "2026", verified = true) {
  return { source, sourceYear, category, rank, displayText, relevantMajors, verified, verificationNote: note };
}

function artsMediaRank(category, rank, displayText, relevantMajors = ARTS_MEDIA_RANKING_MAJORS, note) {
  return { source: "Niche", sourceYear: "2026", category, rank, displayText, relevantMajors, verified: true, verificationNote: note };
}

function campusLifeRank(source, category, rank, displayText, note) {
  return { source, sourceYear: "2026", category, rank, displayText, verified: true, verificationNote: note };
}

// Engineering/CS rankings change yearly and should be rechecked. Use these
// only as program-strength context, never as admissions predictions.
const ENGINEERING_CS_RANKINGS = {
  "Massachusetts Institute of Technology": { majorSpecific: [usNewsEngRank(1, "#1 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Aerospace Engineering", "Computer Science", "Artificial Intelligence", "Robotics"]), theCsRank(1)] },
  "Stanford University": { majorSpecific: [usNewsEngRank(2, "#2 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Computer Science", "Artificial Intelligence", "Robotics"]), theCsRank(3)] },
  "University of California, Berkeley": { majorSpecific: [usNewsEngRank(3, "#3 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Computer Science", "Data Science", "Artificial Intelligence"]), theCsRank(7)] },
  "Georgia Institute of Technology": { majorSpecific: [
    usNewsEngRank(3, "#3 Undergraduate Engineering", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Chemical Engineering", "Civil Engineering", "Industrial Engineering"], "Verified from official Georgia Tech College of Engineering facts/rankings page.", "2026"),
    usNewsSpecialRank("Electrical Engineering", 3, "#3 Electrical Engineering", ["Electrical Engineering", "Electrical and Computer Engineering"], "Verified from official Georgia Tech College of Engineering facts/rankings page."),
    usNewsSpecialRank("Computer Engineering", 6, "#6 Computer Engineering", ["Computer Engineering", "Electrical and Computer Engineering"], "Verified from official Georgia Tech College of Engineering facts/rankings page."),
    theCsRank(14),
  ] },
  "University of Illinois Urbana-Champaign": { majorSpecific: [
    usNewsEngRank(5, "#5 Undergraduate Engineering", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Civil Engineering", "Computer Science", "Data Science"], "Verified from official UIUC Grainger College of Engineering facts/rankings page.", "2026"),
    usNewsSpecialRank("Computer Science", 7, "#7 Computer Science", ["Computer Science", "Software Engineering", "Artificial Intelligence", "Data Science"], "Verified from official UIUC Grainger College of Engineering facts/rankings page."),
    usNewsSpecialRank("Computer Engineering", 5, "#5 Computer Engineering", ECE_RANKING_MAJORS, "Verified from official UIUC Grainger College of Engineering facts/rankings page."),
    usNewsSpecialRank("Electrical Engineering", 5, "#5 Electrical Engineering", ECE_RANKING_MAJORS, "Verified from official UIUC Grainger College of Engineering facts/rankings page."),
    theCsRank(10),
  ] },
  "University of Michigan": { majorSpecific: [usNewsEngRank(5, "#5 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Computer Science", "Data Science", "Robotics"]), theCsRank(17)] },
  "Carnegie Mellon University": { majorSpecific: [usNewsEngRank(8, "#8 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Computer Science", "Artificial Intelligence", "Robotics", "Software Engineering"]), theCsRank(4)] },
  "Purdue University": { majorSpecific: [usNewsEngRank(8, "#8 Best Undergraduate Engineering Programs", ["Engineering", "Aerospace Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering", "Computer Science"]), theCsRank(22)] },
  "Cornell University": { majorSpecific: [usNewsEngRank(10, "#10 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering"]), theCsRank(8)] },
  "University of Texas at Austin": { majorSpecific: [usNewsEngRank(10, "#10 Best Undergraduate Engineering Programs", ["Engineering", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Computer Science", "Data Science"]), theCsRank(16)] },
  "Princeton University": { majorSpecific: [usNewsEngRank(12, "#12 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering"]), theCsRank(2)] },
  "Johns Hopkins University": { majorSpecific: [usNewsEngRank(13, "#13 Best Undergraduate Engineering Programs", ["Engineering", "Biomedical Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering"]), theCsRank(18)] },
  "University of Wisconsin-Madison": { majorSpecific: [usNewsEngRank(13, "#13 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Data Science"]), theCsRank(24)] },
  "Northwestern University": { majorSpecific: [usNewsEngRank(16, "#16 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering"]), theCsRank(32)] },
  "Texas A&M University": { majorSpecific: [usNewsEngRank(16, "#16 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Aerospace Engineering"]), theCsRank(34, "#34 U.S. Computer Science", ["Computer Science", "Computer Engineering", "Software Engineering", "Data Science"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of California, Los Angeles": { majorSpecific: [usNewsEngRank(16, "#16 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering", "Data Science"]), theCsRank(9)] },
  "Columbia University": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Data Science"]), theCsRank(12)] },
  "Duke University": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Biomedical Engineering", "Electrical Engineering", "Computer Engineering", "Computer Science"]), theCsRank(27)] },
  "The Ohio State University": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering"]), theCsRank(45, "#45 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Penn State University": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering"]), theCsRank(40, "#40 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Rice University": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Mechanical Engineering"]), theCsRank(34, "#34 U.S. Computer Science", CS_RANKING_MAJORS, "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of California, San Diego": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Bioengineering", "Data Science"]), theCsRank(19)] },
  "University of Washington": { majorSpecific: [usNewsEngRank(20, "#20 Best Undergraduate Engineering Programs", ["Engineering", "Computer Science", "Electrical Engineering", "Computer Engineering", "Informatics", "Data Science"]), theCsRank(11, "#11 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence", "Software Engineering", "Informatics"])] },
  "Harvard University": { majorSpecific: [theCsRank(5, "#5 U.S. Computer Science", ["Computer Science", "Data Science", "Applied Mathematics", "Artificial Intelligence"]), theEngRank(1, "#1 U.S. Engineering", ["Engineering", "Applied Sciences", "Computer Science", "Data Science"], "Verified from Times Higher Education 2026 U.S. Engineering ranking. Note this is THE subject ranking, not U.S. News undergraduate engineering.")] },
  "Yale University": { majorSpecific: [theCsRank(13, "#13 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence"])] },
  "New York University": { majorSpecific: [theCsRank(15)] },
  "University of Pennsylvania": { majorSpecific: [theCsRank(20, "#20 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence", "Engineering"])] },
  "University of Chicago": { majorSpecific: [theCsRank(21, "#21 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence", "Mathematics"])] },
  "University of Southern California": { majorSpecific: [theCsRank(23, "#23 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence", "Software Engineering", "Engineering"])] },
  "University of California, Santa Barbara": { majorSpecific: [theCsRank(26, "#26 U.S. Computer Science", ["Computer Science", "Data Science", "Engineering"])] },
  "Brown University": { majorSpecific: [theCsRank(29, "#29 U.S. Computer Science", ["Computer Science", "Data Science", "Artificial Intelligence"])] },
  "University of California, Irvine": { majorSpecific: [theCsRank(30, "#30 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"])] },
  "Northeastern University": { majorSpecific: [theCsRank(33)] },
  "Boston University": { majorSpecific: [theCsRank(34, "#34 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of California, Davis": { majorSpecific: [theCsRank(34, "#34 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of North Carolina at Chapel Hill": { majorSpecific: [theCsRank(34, "#34 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of Notre Dame": { majorSpecific: [theCsRank(40, "#40 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of Virginia": { majorSpecific: [theCsRank(40, "#40 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Arizona State University": { majorSpecific: [theCsRank(45, "#45 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering", "Artificial Intelligence"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of Florida": { majorSpecific: [theCsRank(45, "#45 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Vanderbilt University": { majorSpecific: [theCsRank(45, "#45 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Dartmouth College": { majorSpecific: [theCsRank(56, "#56 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Washington University in St. Louis": { majorSpecific: [theCsRank(56, "#56 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "University of Georgia": { majorSpecific: [theCsRank(64, "#64 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Florida State University": { majorSpecific: [theCsRank(104, "#104 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Tufts University": { majorSpecific: [theCsRank(104, "#104 U.S. Computer Science", ["Computer Science", "Data Science", "Software Engineering"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
  "Georgetown University": { majorSpecific: [theCsRank(112, "#112 U.S. Computer Science", ["Computer Science", "Data Science", "Technology Policy"], "Verified from Times Higher Education 2026 U.S. Computer Science ranking; tied band in THE table.")] },
};

// Business/Economics rankings change yearly and should be rechecked. Use
// these only as program-strength context, never as admissions predictions.
const BUSINESS_ECONOMICS_RANKINGS = {
  "Massachusetts Institute of Technology": { majorSpecific: [
    theBusinessRank(1, "#1 U.S. Business Schools", ["Business", "Economics", "Finance", "Management", "Entrepreneurship", "Data Science", "Operations"]),
    usNewsBusinessRank(1, "#1 Undergraduate Business", ["Business", "Management", "Analytics", "Operations", "Entrepreneurship"], "Verified from Poets&Quants report on U.S. News 2026 undergraduate business rankings; MIT tied with Wharton at #1."),
  ] },
  "University of Pennsylvania": { majorSpecific: [
    theBusinessRank(6, "#6 U.S. Business Schools", ["Business", "Economics", "Finance", "Accounting", "Marketing", "Management", "Entrepreneurship"]),
    pqBusinessRank(1, "#1 Best Undergraduate Business Schools", ["Business", "Finance", "Accounting", "Marketing", "Management", "Entrepreneurship", "Economics"]),
    usNewsBusinessRank(1, "#1 Undergraduate Business", ["Business", "Finance", "Accounting", "Marketing", "Management", "Real Estate", "Economics"], "Verified from Poets&Quants report on U.S. News 2026 undergraduate business rankings; Wharton tied with MIT at #1."),
  ] },
  "Stanford University": { majorSpecific: [theBusinessRank(2, "#2 U.S. Business Schools", ["Business", "Economics", "Entrepreneurship", "Management", "Finance", "Data Science"])] },
  "University of California, Berkeley": { majorSpecific: [theBusinessRank(3, "#3 U.S. Business Schools", ["Business", "Economics", "Finance", "Entrepreneurship", "Data Science", "Management"])] },
  "Harvard University": { majorSpecific: [theBusinessRank(4, "#4 U.S. Business Schools", ["Economics", "Business", "Finance", "Public Policy", "Management", "Entrepreneurship"])] },
  "University of Chicago": { majorSpecific: [theBusinessRank(5, "#5 U.S. Business Schools", ["Economics", "Business", "Finance", "Public Policy", "Data Science"])] },
  "Yale University": { majorSpecific: [theBusinessRank(7, "#7 U.S. Business Schools", ["Economics", "Business", "Political Science", "Public Policy", "Global Affairs"])] },
  "Columbia University": { majorSpecific: [theBusinessRank(8, "#8 U.S. Business Schools", ["Economics", "Business", "Finance", "Political Science", "Data Science"])] },
  "Cornell University": { majorSpecific: [
    theBusinessRank(9, "#9 U.S. Business Schools", ["Business", "Economics", "Finance", "Applied Economics", "Management", "Hotel Administration"]),
    pqBusinessRank(3, "#3 Best Undergraduate Business Schools", ["Business", "Economics", "Applied Economics", "Management", "Finance"]),
  ] },
  "Northwestern University": { majorSpecific: [theBusinessRank(10, "#10 U.S. Business Schools", ["Economics", "Business", "Finance", "Communication", "Management"])] },
  "New York University": { majorSpecific: [
    theBusinessRank(11, "#11 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Entrepreneurship", "Data Science"]),
    pqBusinessRank(6, "#6 Best Undergraduate Business Schools", ["Business", "Finance", "Marketing", "Economics", "Entrepreneurship"]),
  ] },
  "Duke University": { majorSpecific: [theBusinessRank(12, "#12 U.S. Business Schools", ["Economics", "Business", "Public Policy", "Finance", "Entrepreneurship"])] },
  "University of California, Los Angeles": { majorSpecific: [theBusinessRank(13, "#13 U.S. Business Schools", ["Economics", "Business", "Political Science", "Finance", "Entrepreneurship"])] },
  "University of Michigan": { majorSpecific: [
    theBusinessRank(14, "#14 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Management", "Data Science"]),
    pqBusinessRank(4, "#4 Best Undergraduate Business Schools", ["Business", "Economics", "Finance", "Marketing", "Management", "Data Science"]),
  ] },
  "Carnegie Mellon University": { majorSpecific: [theBusinessRank(15, "#15 U.S. Business Schools", ["Business", "Economics", "Analytics", "Finance", "Operations", "Data Science"])] },
  "University of Washington": { majorSpecific: [theBusinessRank(17, "#17 U.S. Business Schools", ["Business", "Economics", "Finance", "Entrepreneurship", "Data Science"])] },
  "University of California, San Diego": { majorSpecific: [theBusinessRank(18, "#18 U.S. Business Schools", ["Economics", "Business", "Data Science", "Management", "Finance"])] },
  "Boston University": { majorSpecific: [theBusinessRank(19, "#19 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "International Relations"])] },
  "University of Southern California": { majorSpecific: [
    theBusinessRank(20, "#20 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Entrepreneurship", "Accounting"], "Verified from Times Higher Education 2026 U.S. Business Schools ranking; tied at #20."),
    pqBusinessRank(5, "#5 Best Undergraduate Business Schools", ["Business", "Finance", "Marketing", "Accounting", "Entrepreneurship"]),
  ] },
  "University of Texas at Austin": { majorSpecific: [theBusinessRank(22, "#22 U.S. Business Schools", ["Business", "Economics", "Finance", "Accounting", "Marketing", "Entrepreneurship"])] },
  "Dartmouth College": { majorSpecific: [theBusinessRank(23, "#23 U.S. Business Schools", ["Economics", "Business", "Finance", "Government"])] },
  "University of Wisconsin-Madison": { majorSpecific: [theBusinessRank(24, "#24 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Data Science"])] },
  "University of California, Davis": { majorSpecific: [theBusinessRank(25, "#25 U.S. Business Schools", ["Economics", "Business", "Agricultural Economics", "Environmental Economics", "Management"])] },
  "Texas A&M University": { majorSpecific: [theBusinessRank(26, "#26 U.S. Business Schools", ["Business", "Economics", "Finance", "Management", "Supply Chain", "Agribusiness"])] },
  "University of Illinois Urbana-Champaign": { majorSpecific: [theBusinessRank(27, "#27 U.S. Business Schools", ["Business", "Economics", "Finance", "Accounting", "Data Science", "Analytics"])] },
  "University of Virginia": { majorSpecific: [
    theBusinessRank(28, "#28 U.S. Business Schools", ["Business", "Commerce", "Economics", "Finance", "Public Policy"]),
    pqBusinessRank(2, "#2 Best Undergraduate Business Schools", ["Business", "Commerce", "Finance", "Management", "Marketing"]),
  ] },
  "Johns Hopkins University": { majorSpecific: [theBusinessRank(29, "#29 U.S. Business Schools", ["Economics", "Business", "Public Health Policy", "International Studies", "Data Science"])] },
  "Arizona State University": { majorSpecific: [theBusinessRank(31, "#31 U.S. Business Schools", ["Business", "Economics", "Entrepreneurship", "Finance", "Marketing", "Analytics"])] },
  "Purdue University": { majorSpecific: [theBusinessRank(32, "#32 U.S. Business Schools", ["Business", "Economics", "Management", "Operations", "Supply Chain", "Analytics"])] },
  "University of Florida": { majorSpecific: [theBusinessRank(35, "#35 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Accounting"], "Verified from Times Higher Education 2026 U.S. Business Schools ranking; tied at #35.")] },
  "University of North Carolina at Chapel Hill": { majorSpecific: [
    theBusinessRank(35, "#35 U.S. Business Schools", ["Business", "Economics", "Finance", "Public Policy", "Management"], "Verified from Times Higher Education 2026 U.S. Business Schools ranking; tied at #35."),
    pqBusinessRank(8, "#8 Best Undergraduate Business Schools", ["Business", "Finance", "Management", "Marketing", "Economics"]),
  ] },
  "Penn State University": { majorSpecific: [theBusinessRank(37, "#37 U.S. Business Schools", ["Business", "Economics", "Finance", "Supply Chain", "Management"])] },
  "Boston College": { majorSpecific: [theBusinessRank(38, "#38 U.S. Business Schools", ["Business", "Economics", "Finance", "Management", "Accounting"], "Verified from Times Higher Education 2026 U.S. Business Schools ranking; tied at #38.")] },
  "Georgetown University": { majorSpecific: [pqBusinessRank(7, "#7 Best Undergraduate Business Schools", ["Business", "Finance", "International Business", "Economics", "Management"])] },
  "University of Notre Dame": { majorSpecific: [pqBusinessRank(9, "#9 Best Undergraduate Business Schools", ["Business", "Finance", "Accounting", "Marketing", "Management"])] },
  "Emory University": { majorSpecific: [pqBusinessRank(10, "#10 Best Undergraduate Business Schools", ["Business", "Finance", "Accounting", "Marketing", "Management", "Economics"])] },
  "Florida State University": { majorSpecific: [theBusinessRank(62, "#62 U.S. Business Schools", ["Business", "Economics", "Finance", "Marketing", "Management"], "Verified from Times Higher Education 2026 U.S. Business Schools ranking; tied band in THE table.")] },
};

// Health/Life Sciences rankings change yearly and should be rechecked. Use
// these only as program-strength context, never as admissions predictions.
const HEALTH_LIFE_SCIENCES_RANKINGS = {
  "Harvard University": { majorSpecific: [
    theMedicineRank(1),
    healthRank("Times Higher Education", "World Life Sciences", 1, "#1 World Life Sciences", ["Biology", "Biochemistry", "Neuroscience", "Pre-Med", "Life Sciences"], "Verified from Times Higher Education 2026 Life Sciences ranking highlights."),
    healthRank("Niche", "Best Colleges for Biology", 1, "#1 Best Colleges for Biology", ["Biology", "Pre-Med", "Biochemistry", "Neuroscience"], "Verified from Niche 2026 Best Colleges for Biology listing."),
  ] },
  "Johns Hopkins University": { majorSpecific: [
    theMedicineRank(2, "#2 U.S. Medicine", ["Pre-Med", "Public Health", "Biology", "Neuroscience", "Biomedical Engineering", "Health Sciences"], "Verified from Times Higher Education 2026 U.S. Medicine ranking; tied at #2."),
    healthRank("U.S. News & World Report", "Graduate Nursing Master's", 1, "#1 Graduate Nursing Master's", ["Nursing", "Health Sciences", "Public Health"], "Verified from secondary report on U.S. News 2026 graduate nursing rankings."),
  ] },
  "Stanford University": { majorSpecific: [
    theMedicineRank(2, "#2 U.S. Medicine", ["Pre-Med", "Biology", "Human Biology", "Biomedical Sciences", "Neuroscience", "Public Health"], "Verified from Times Higher Education 2026 U.S. Medicine ranking; tied at #2."),
    healthRank("Niche", "Best Colleges for Biology", 2, "#2 Best Colleges for Biology", ["Biology", "Pre-Med", "Human Biology", "Neuroscience"], "Verified from Niche 2026 Best Colleges for Biology listing."),
  ] },
  "Yale University": { majorSpecific: [theMedicineRank(4, "#4 U.S. Medicine", ["Pre-Med", "Biology", "Neuroscience", "Public Health", "Health Sciences"])] },
  "University of California, Berkeley": { majorSpecific: [theMedicineRank(5, "#5 U.S. Medicine", ["Pre-Med", "Biology", "Public Health", "Molecular Biology", "Biochemistry", "Health Sciences"])] },
  "Massachusetts Institute of Technology": { majorSpecific: [healthRank("QS", "Biological Sciences", 2, "#2 Biological Sciences", ["Biology", "Biochemistry", "Biological Engineering", "Pre-Med", "Biomedical Sciences"], "Verified from QS 2026 Biological Sciences ranking snippet.")] },
  "University of Pennsylvania": { majorSpecific: [healthRank("Niche", "Best Colleges for Biology", 3, "#3 Best Colleges for Biology", ["Biology", "Pre-Med", "Biochemistry", "Neuroscience", "Health Sciences"], "Verified from Niche 2026 Best Colleges for Biology listing.")] },
  "Brown University": { majorSpecific: [healthRank("Niche", "Best Colleges for Biology", 4, "#4 Best Colleges for Biology", ["Biology", "Pre-Med", "Public Health", "Neuroscience", "Biochemistry"], "Verified from Niche 2026 Best Colleges for Biology listing.")] },
  "Duke University": { majorSpecific: [
    healthRank("Niche", "Best Colleges for Biology", 5, "#5 Best Colleges for Biology", ["Biology", "Pre-Med", "Neuroscience", "Public Health", "Biomedical Engineering"], "Verified from Niche 2026 Best Colleges for Biology listing."),
    healthRank("U.S. News & World Report", "Bachelor of Science in Nursing Programs", 1, "#1 BSN Programs", ["Nursing", "Health Sciences", "Pre-Health"], "Verified from official Duke University School of Nursing rankings page."),
  ] },
  "Emory University": { majorSpecific: [
    healthRank("U.S. News & World Report", "Undergraduate Nursing", 2, "#2 Undergraduate Nursing", ["Nursing", "Health Sciences", "Pre-Health", "Public Health"], "Verified from secondary nursing source citing U.S. News undergraduate nursing rank."),
    healthRank("U.S. News & World Report", "Graduate Nursing Master's", 2, "#2 Graduate Nursing Master's", ["Nursing", "Health Sciences", "Public Health"], "Verified from secondary report on U.S. News 2026 graduate nursing rankings."),
  ] },
  "University of California, Davis": { majorSpecific: [healthRank("U.S. News & World Report", "Biological Sciences Graduate Programs", 21, "#21 Biological Sciences Graduate Programs", ["Biology", "Biochemistry", "Life Sciences", "Pre-Veterinary", "Animal Science"], "Verified from UC Davis College of Biological Sciences news release. Graduate ranking used as research-strength context, not undergraduate admissions evidence.")] },
  "University of California, Los Angeles": { majorSpecific: [healthRank("Niche", "Biology / Pre-Health Context", null, "Strong life sciences and pre-health context", ["Biology", "Pre-Med", "Neuroscience", "Public Health", "Health Sciences"], "Exact 2026 biology/life-science rank not entered. Use qualitative school-enrichment context unless verified later.", "2026", false)] },
  "University of California, San Diego": { majorSpecific: [healthRank("School Data", "Biology / Bioengineering Context", null, "Strong biology, bioengineering, and research context", ["Biology", "Bioengineering", "Pre-Med", "Neuroscience", "Public Health"], "Exact rank not entered. Use as qualitative context only until verified.", "2026", false)] },
  "Washington University in St. Louis": { majorSpecific: [healthRank("School Data", "Pre-Med / Biology Context", null, "Strong pre-med, biology, biomedical engineering, and health research context", ["Biology", "Pre-Med", "Biomedical Engineering", "Neuroscience", "Health Sciences"], "Exact rank not entered. Use as qualitative context only until verified.", "2026", false)] },
  "Rice University": { majorSpecific: [healthRank("School Data", "Pre-Med / Biosciences Context", null, "Strong biosciences, pre-med, and Houston medical ecosystem context", ["Biology", "Pre-Med", "Biosciences", "Biomedical Engineering", "Health Sciences"], "Exact rank not entered. Use as qualitative context only until verified.", "2026", false)] },
};

const STUDENT_LIFE_NOTE = "Verified from Niche 2026 Colleges with the Best Student Life listing.";
const SOCIAL_SCENE_NOTE = "Verified from Business Insider report on Niche 2026 party-school rankings. Use only as campus/social context, not academic quality.";

// Arts/media and campus-life rankings change yearly and should be rechecked.
// Campus-life rankings are preference/context signals, not academic rankings.
const ARTS_MEDIA_CAMPUS_LIFE_RANKINGS = {
  "University of Southern California": {
    majorSpecific: [artsMediaRank("Best Colleges for Design", 3, "#3 Best Colleges for Design", ["Design", "Media Studies", "Film", "Communications", "Architecture", "Arts"], "Verified from Niche 2026 Best Colleges for Design listing.")],
    campusLife: [campusLifeRank("Niche", "Best Student Life", 1, "#1 Colleges with the Best Student Life", STUDENT_LIFE_NOTE), campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 4, "#4 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)],
  },
  "University of Georgia": { campusLife: [campusLifeRank("Niche", "Best Student Life", 2, "#2 Colleges with the Best Student Life", STUDENT_LIFE_NOTE), campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 8, "#8 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
  "University of California, Los Angeles": {
    majorSpecific: [
      artsMediaRank("Best Colleges for Film and Photography", 12, "#12 Best Colleges for Film and Photography", ["Film", "Media Studies", "Photography", "Communications", "Arts"], "Verified from Niche 2026 Best Colleges for Film and Photography listing."),
      artsMediaRank("Best Campus", 1, "#1 Best Campus", ["Arts", "Media", "Design", "Film", "Communications"], "Verified from SFGATE report on Niche 2026 rankings noting UCLA #1 for best campus."),
    ],
    campusLife: [campusLifeRank("Niche", "Best Student Life", 3, "#3 Colleges with the Best Student Life", STUDENT_LIFE_NOTE), campusLifeRank("Niche", "Best Campus", 1, "#1 Best Campus", "Verified from SFGATE report on Niche 2026 rankings noting UCLA #1 for best campus.")],
  },
  "University of Michigan": { campusLife: [campusLifeRank("Niche", "Best Student Life", 4, "#4 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)] },
  "Vanderbilt University": { campusLife: [campusLifeRank("Niche", "Best Student Life", 5, "#5 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)] },
  "Yale University": { campusLife: [campusLifeRank("Niche", "Best Student Life", 6, "#6 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)] },
  "Florida State University": { campusLife: [campusLifeRank("Niche", "Best Student Life", 7, "#7 Colleges with the Best Student Life", STUDENT_LIFE_NOTE), campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 2, "#2 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
  "University of California, Santa Barbara": { campusLife: [campusLifeRank("Niche", "Best Student Life", 20, "#20 Colleges with the Best Student Life", STUDENT_LIFE_NOTE), campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 1, "#1 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
  "Massachusetts Institute of Technology": { campusLife: [campusLifeRank("Niche", "Best Student Life", 21, "#21 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)] },
  "Rice University": { campusLife: [campusLifeRank("Niche", "Best Student Life", 22, "#22 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)] },
  "Washington University in St. Louis": {
    majorSpecific: [artsMediaRank("Best Colleges for Film and Photography", 11, "#11 Best Colleges for Film and Photography", ["Film", "Photography", "Media Studies", "Arts"], "Verified from Niche 2026 Best Colleges for Film and Photography listing."), artsMediaRank("Best Colleges for Design", 2, "#2 Best Colleges for Design", ["Design", "Art", "Architecture", "Media Studies"], "Verified from Niche 2026 Best Colleges for Design listing.")],
    campusLife: [campusLifeRank("Niche", "Best Student Life", 24, "#24 Colleges with the Best Student Life", STUDENT_LIFE_NOTE)],
  },
  "Emory University": { majorSpecific: [artsMediaRank("Best Colleges for Film and Photography", 13, "#13 Best Colleges for Film and Photography", ["Film", "Photography", "Media Studies", "Creative Writing", "Arts"], "Verified from Niche 2026 Best Colleges for Film and Photography listing.")] },
  "Carnegie Mellon University": { majorSpecific: [artsMediaRank("Best Colleges for Design", 1, "#1 Best Colleges for Design", ["Design", "Art", "Human-Computer Interaction", "Media Arts", "Architecture"], "Verified from Niche 2026 Best Colleges for Design listing."), artsMediaRank("Best Colleges for Film and Photography", 14, "#14 Best Colleges for Film and Photography", ["Film", "Photography", "Media Arts", "Design", "Arts"], "Verified from Niche 2026 Best Colleges for Film and Photography listing.")] },
  "Northwestern University": { majorSpecific: [artsMediaRank("Best Colleges for Communications", 3, "#3 Best Colleges for Communications", ["Communications", "Journalism", "Media Studies", "Radio/TV/Film", "Theater"], "Verified from Niche 2026 Best Colleges for Communications listing.")] },
  "Tulane University": { campusLife: [campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 3, "#3 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
  "University of Wisconsin-Madison": { campusLife: [campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 5, "#5 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
  "University of Illinois Urbana-Champaign": { campusLife: [campusLifeRank("Niche / Business Insider", "Party Schools / Social Scene", 10, "#10 Party Schools / Social Scene", SOCIAL_SCENE_NOTE)] },
};

const schools = [
  s("ucla", "University of California, Los Angeles", "Los Angeles, CA", "Public", "West", 33700, 9, "1290-1520", 1290, "UC", "A high-demand public research university with a broad liberal arts core, film and arts strengths, elite health sciences, and a deeply urban campus culture.", "https://www.ucla.edu", "https://admission.ucla.edu", "https://apb.ucla.edu/campus-statistics/common-data-set", "UCLA campus"),
  s("berkeley", "University of California, Berkeley", "Berkeley, CA", "Public", "West", 33000, 11, "1310-1530", 1310, "UC", "A flagship public research university known for engineering, computer science, social sciences, activism, and intense academic breadth across the Bay Area.", "https://www.berkeley.edu", "https://admissions.berkeley.edu", "https://opa.berkeley.edu/campus-data/common-data-set", "UC Berkeley campus"),
  s("ucsd", "University of California, San Diego", "La Jolla, CA", "Public", "West", 34000, 25, "1270-1480", 1270, "UC", "A STEM-forward coastal research university with standout biology, engineering, oceanography, data science, and a residential college system.", "https://ucsd.edu", "https://admissions.ucsd.edu", "https://ir.ucsd.edu/stats/undergrad/common-data-set.html", "UC San Diego Geisel Library"),
  s("uci", "University of California, Irvine", "Irvine, CA", "Public", "West", 29000, 29, "1230-1460", 1230, "UC", "A large public research university with strong biological sciences, computer science, public health, and access to Orange County internships.", "https://uci.edu", "https://admissions.uci.edu", "https://datahub.oapir.uci.edu/Data-Hub/Undergraduate-Admissions-Dashboard.php", "University of California Irvine campus"),
  s("ucsb", "University of California, Santa Barbara", "Santa Barbara, CA", "Public", "West", 24000, 28, "1260-1480", 1260, "UC", "A coastal public research university with strengths in physics, environmental studies, engineering, creative studies, and collaborative campus life.", "https://www.ucsb.edu", "https://admissions.sa.ucsb.edu", "https://bap.ucsb.edu/institutional-research/common-data-set", "UC Santa Barbara campus"),
  s("ucdavis", "University of California, Davis", "Davis, CA", "Public", "West", 32000, 37, "1210-1450", 1210, "UC", "A major public research university with nationally known agriculture, veterinary medicine, biological sciences, environmental science, and a bike-centered college town.", "https://www.ucdavis.edu", "https://www.ucdavis.edu/admissions", "https://aggiedata.ucdavis.edu/common-data-set", "UC Davis campus"),
  s("usc", "University of Southern California", "Los Angeles, CA", "Private", "West", 21000, 10, "1450-1540", 1450, "Highly Selective", "A private research university with strong professional schools, cinematic arts, business, engineering, and a large alumni network in Los Angeles.", "https://www.usc.edu", "https://admission.usc.edu", "https://oir.usc.edu/common-data-set/", "University of Southern California campus"),
  s("stanford", "Stanford University", "Stanford, CA", "Private", "West", 8000, 4, "1500-1570", 1500, "Highly Selective", "A highly selective research university closely tied to Silicon Valley, with exceptional engineering, entrepreneurship, humanities, and interdisciplinary research.", "https://www.stanford.edu", "https://admission.stanford.edu", "https://ucomm.stanford.edu/cds/", "Stanford University campus"),
  s("harvard", "Harvard University", "Cambridge, MA", "Private", "Northeast", 7900, 3, "1490-1580", 1490, "Highly Selective", "The oldest U.S. college, Harvard combines liberal arts undergraduate education with vast research resources, residential houses, and global academic reach.", "https://www.harvard.edu", "https://college.harvard.edu/admissions", "https://oir.harvard.edu/common-data-set", "Harvard University campus"),
  s("mit", "Massachusetts Institute of Technology", "Cambridge, MA", "Private", "Northeast", 4600, 4, "1520-1580", 1520, "Highly Selective", "A science, engineering, architecture, and economics powerhouse where maker culture, research labs, and problem solving shape the undergraduate experience.", "https://www.mit.edu", "https://mitadmissions.org", "https://ir.mit.edu/cds", "MIT campus"),
  s("yale", "Yale University", "New Haven, CT", "Private", "Northeast", 6600, 4, "1480-1560", 1480, "Highly Selective", "A residential liberal arts college inside a major research university, known for humanities, arts, political life, sciences, and close advising.", "https://www.yale.edu", "https://admissions.yale.edu", "https://oir.yale.edu/common-data-set", "Yale University campus"),
  s("princeton", "Princeton University", "Princeton, NJ", "Private", "Northeast", 5600, 4, "1500-1580", 1500, "Highly Selective", "A deeply undergraduate-focused research university with senior thesis work, strong financial aid, engineering, public policy, and humanities excellence.", "https://www.princeton.edu", "https://admission.princeton.edu", "https://ira.princeton.edu/common-data-set", "Princeton University campus"),
  s("columbia", "Columbia University", "New York, NY", "Private", "Northeast", 9000, 4, "1490-1560", 1490, "Highly Selective", "An urban Ivy League university centered on the Core Curriculum, research, journalism, engineering, and access to New York City.", "https://www.columbia.edu", "https://undergrad.admissions.columbia.edu", "https://opir.columbia.edu/content/common-data-set", "Columbia University campus"),
  s("nyu", "New York University", "New York, NY", "Private", "Northeast", 29000, 8, "1450-1570", 1450, "Holistic", "A global urban university with strong arts, business, social science, media, public service, and international campus options.", "https://www.nyu.edu", "https://www.nyu.edu/admissions/undergraduate-admissions.html", "https://www.nyu.edu/about/news-publications/budgeting-and-planning/institutional-research/common-data-set.html", "New York University campus"),
  s("cornell", "Cornell University", "Ithaca, NY", "Private", "Northeast", 16000, 8, "1450-1560", 1450, "Highly Selective", "A large Ivy League university with private and public colleges, spanning engineering, agriculture, hotel administration, labor, arts, and sciences.", "https://www.cornell.edu", "https://admissions.cornell.edu", "https://irp.dpb.cornell.edu/university-factbook/common-data-set", "Cornell University campus"),
  s("upenn", "University of Pennsylvania", "Philadelphia, PA", "Private", "Northeast", 10000, 6, "1500-1570", 1500, "Highly Selective", "An Ivy League research university known for Wharton, interdisciplinary programs, nursing, engineering, civic engagement, and a compact urban campus.", "https://www.upenn.edu", "https://admissions.upenn.edu", "https://ira.upenn.edu/common-data-set", "University of Pennsylvania campus"),
  s("brown", "Brown University", "Providence, RI", "Private", "Northeast", 7600, 5, "1500-1570", 1500, "Highly Selective", "A flexible liberal arts research university known for the Open Curriculum, creative students, public health, computer science, and collaborative learning.", "https://www.brown.edu", "https://admission.brown.edu", "https://oir.brown.edu/institutional-data/common-data-set", "Brown University campus"),
  s("dartmouth", "Dartmouth College", "Hanover, NH", "Private", "Northeast", 4500, 6, "1480-1560", 1480, "Highly Selective", "A small Ivy League research college with close faculty access, outdoor culture, undergraduate focus, and flexible D-Plan terms.", "https://home.dartmouth.edu", "https://admissions.dartmouth.edu", "https://www.dartmouth.edu/oir/data-reporting/common-data-set/", "Dartmouth College campus"),
  s("duke", "Duke University", "Durham, NC", "Private", "South", 6600, 6, "1490-1570", 1490, "Highly Selective", "A selective research university with strong biomedical, public policy, engineering, economics, humanities, and school-spirit traditions.", "https://duke.edu", "https://admissions.duke.edu", "https://finance.provost.duke.edu/institutional-research/common-data-set/", "Duke University campus"),
  s("unc", "University of North Carolina at Chapel Hill", "Chapel Hill, NC", "Public", "South", 21000, 17, "1350-1530", 1350, "Public", "A historic public flagship with strong public health, journalism, business, liberal arts, research, and an energetic college-town feel.", "https://www.unc.edu", "https://admissions.unc.edu", "https://oira.unc.edu/reports/common-data-set/", "UNC Chapel Hill campus"),
  s("uva", "University of Virginia", "Charlottesville, VA", "Public", "South", 18000, 17, "1400-1540", 1400, "Public", "A public flagship known for liberal arts, commerce, leadership, architecture, traditions, and a strong residential undergraduate experience.", "https://www.virginia.edu", "https://admission.virginia.edu", "https://ira.virginia.edu/university-data-home/common-data-set", "University of Virginia campus"),
  s("michigan", "University of Michigan", "Ann Arbor, MI", "Public", "Midwest", 33000, 18, "1370-1530", 1370, "Public", "A large public research university with elite engineering, business, social sciences, arts, medicine, and one of the country's strongest college towns.", "https://umich.edu", "https://admissions.umich.edu", "https://obp.umich.edu/campus-statistics/common-data-set/", "University of Michigan campus"),
  s("wisconsin", "University of Wisconsin-Madison", "Madison, WI", "Public", "Midwest", 37000, 43, "1370-1500", 1370, "Public", "A major public research university on a lakeside campus with strong sciences, engineering, business, journalism, agriculture, and public affairs.", "https://www.wisc.edu", "https://admissions.wisc.edu", "https://data.wisc.edu/common-data-set/", "University of Wisconsin Madison campus"),
  s("uiuc", "University of Illinois Urbana-Champaign", "Champaign, IL", "Public", "Midwest", 35000, 45, "1340-1530", 1340, "Public", "A Big Ten public research university especially known for engineering, computer science, business, agriculture, and a large residential campus.", "https://illinois.edu", "https://www.admissions.illinois.edu", "https://www.dmi.illinois.edu/stuenr/cds/", "University of Illinois Urbana Champaign campus"),
  s("purdue", "Purdue University", "West Lafayette, IN", "Public", "Midwest", 39000, 50, "1210-1450", 1210, "Public", "A public research university with renowned engineering, aviation, computer science, agriculture, business, and practical innovation culture.", "https://www.purdue.edu", "https://www.admissions.purdue.edu", "https://www.purdue.edu/idata/data-tools-resources/common-data-set.php", "Purdue University campus"),
  s("osu", "The Ohio State University", "Columbus, OH", "Public", "Midwest", 47000, 53, "1360-1500", 1360, "Public", "A large public flagship with wide academic options, strong research, honors programs, athletics, business, engineering, and urban access.", "https://www.osu.edu", "https://undergrad.osu.edu", "https://oaa.osu.edu/common-data-set", "Ohio State University campus"),
  s("pennstate", "Penn State University", "University Park, PA", "Public", "Northeast", 42000, 55, "1220-1410", 1220, "Public", "A large public research university with engineering, business, communications, agriculture, information sciences, and a broad alumni network.", "https://www.psu.edu", "https://admissions.psu.edu", "https://datadigest.psu.edu/common-data-set/", "Penn State University Park campus"),
  s("uf", "University of Florida", "Gainesville, FL", "Public", "South", 34000, 24, "1350-1490", 1350, "Public", "A fast-rising public flagship with strong STEM, business, agriculture, health, honors, and a spirited Gainesville campus.", "https://www.ufl.edu", "https://admissions.ufl.edu", "https://ir.aa.ufl.edu/facts/common-data-set/", "University of Florida campus"),
  s("fsu", "Florida State University", "Tallahassee, FL", "Public", "South", 33000, 25, "1280-1440", 1280, "Public", "A public research university known for arts, sciences, business, criminology, music, film, and a strong honors community.", "https://www.fsu.edu", "https://admissions.fsu.edu", "https://ir.fsu.edu/common-data-set", "Florida State University campus"),
  s("gatech", "Georgia Institute of Technology", "Atlanta, GA", "Public", "South", 19000, 16, "1390-1540", 1390, "Public", "A public technology institute with elite engineering, computing, business analytics, design, and strong Atlanta industry connections.", "https://www.gatech.edu", "https://admission.gatech.edu", "https://irp.gatech.edu/common-data-set", "Georgia Tech campus"),
  s("uga", "University of Georgia", "Athens, GA", "Public", "South", 31000, 37, "1270-1470", 1270, "Public", "A public flagship with strong journalism, business, public affairs, agriculture, honors, and a classic college-town atmosphere.", "https://www.uga.edu", "https://www.admissions.uga.edu", "https://oir.uga.edu/common-data-set/", "University of Georgia campus"),
  s("ut", "University of Texas at Austin", "Austin, TX", "Public", "South", 41000, 31, "1230-1500", 1230, "Public", "A major public flagship with standout engineering, business, computer science, communications, public affairs, and access to Austin's tech scene.", "https://www.utexas.edu", "https://admissions.utexas.edu", "https://reports.utexas.edu/common-data-set", "University of Texas at Austin campus"),
  s("tamu", "Texas A&M University", "College Station, TX", "Public", "South", 59000, 63, "1160-1390", 1160, "Public", "A large public research university with engineering, agriculture, business, corps traditions, school spirit, and a deep alumni network.", "https://www.tamu.edu", "https://admissions.tamu.edu", "https://dars.tamu.edu/Data-and-Reports/Common-Data-Set", "Texas A&M University campus"),
  s("uw", "University of Washington", "Seattle, WA", "Public", "West", 37000, 43, "1320-1500", 1320, "Public", "A public research university with exceptional computer science, engineering, life sciences, public health, and Seattle-based opportunities.", "https://www.washington.edu", "https://admit.washington.edu", "https://www.washington.edu/opb/uw-data/external-reporting/common-data-set/", "University of Washington campus"),
  s("northeastern", "Northeastern University", "Boston, MA", "Private", "Northeast", 21000, 6, "1460-1530", 1460, "Holistic", "A private university built around co-op education, professional preparation, global campuses, computing, business, health, and urban Boston access.", "https://www.northeastern.edu", "https://admissions.northeastern.edu", "https://provost.northeastern.edu/uds/common-data-set/", "Northeastern University campus"),
  s("bu", "Boston University", "Boston, MA", "Private", "Northeast", 19000, 11, "1430-1530", 1430, "Holistic", "A large private research university with strong communications, business, health, arts, engineering, and a highly urban campus.", "https://www.bu.edu", "https://www.bu.edu/admissions", "https://www.bu.edu/oir/cds/", "Boston University campus"),
  s("bc", "Boston College", "Chestnut Hill, MA", "Private", "Northeast", 9800, 15, "1430-1530", 1430, "Holistic", "A Jesuit research university with strong liberal arts, business, education, nursing, service traditions, and a suburban Boston campus.", "https://www.bc.edu", "https://www.bc.edu/bc-web/admission.html", "https://www.bc.edu/bc-web/offices/irp/common-data-set.html", "Boston College campus"),
  s("tufts", "Tufts University", "Medford, MA", "Private", "Northeast", 6800, 10, "1460-1540", 1460, "Holistic", "A medium-sized research university with international relations, civic engagement, engineering, arts, and an undergraduate-centered culture near Boston.", "https://www.tufts.edu", "https://admissions.tufts.edu", "https://provost.tufts.edu/institutionalresearch/common-data-set/", "Tufts University campus"),
  s("rice", "Rice University", "Houston, TX", "Private", "South", 4600, 8, "1490-1570", 1490, "Highly Selective", "A selective research university with residential colleges, strong engineering, natural sciences, architecture, music, and close faculty access.", "https://www.rice.edu", "https://admission.rice.edu", "https://oir.rice.edu/common-data-set", "Rice University campus"),
  s("vanderbilt", "Vanderbilt University", "Nashville, TN", "Private", "South", 7200, 6, "1500-1560", 1500, "Highly Selective", "A selective research university with strong education, economics, music, engineering, medicine-adjacent research, and an energetic Nashville setting.", "https://www.vanderbilt.edu", "https://admissions.vanderbilt.edu", "https://www.vanderbilt.edu/dsa/common-data-set/", "Vanderbilt University campus"),
  s("washu", "Washington University in St. Louis", "St. Louis, MO", "Private", "Midwest", 8500, 12, "1500-1570", 1500, "Highly Selective", "A selective research university known for pre-med, architecture, business, arts and sciences, collaborative academics, and a residential campus.", "https://wustl.edu", "https://admissions.wustl.edu", "https://data.wustl.edu/common-data-set/", "Washington University in St Louis campus"),
  s("northwestern", "Northwestern University", "Evanston, IL", "Private", "Midwest", 8800, 7, "1490-1570", 1490, "Highly Selective", "A selective research university with strong journalism, theater, engineering, economics, music, and quarter-system flexibility near Chicago.", "https://www.northwestern.edu", "https://admissions.northwestern.edu", "https://www.northwestern.edu/provost/about/ir/data-books/common-data-set/", "Northwestern University campus"),
  s("uchicago", "University of Chicago", "Chicago, IL", "Private", "Midwest", 7600, 5, "1510-1570", 1510, "Highly Selective", "A rigorous research university known for economics, mathematics, humanities, social theory, the Core, and intense intellectual culture.", "https://www.uchicago.edu", "https://collegeadmissions.uchicago.edu", "https://data.uchicago.edu/common-data-set/", "University of Chicago campus"),
  s("notredame", "University of Notre Dame", "Notre Dame, IN", "Private", "Midwest", 8900, 11, "1450-1530", 1450, "Holistic", "A Catholic research university known for business, engineering, liberal arts, architecture, service, residential life, and strong alumni identity.", "https://www.nd.edu", "https://admissions.nd.edu", "https://ospir.nd.edu/institutional-research-data/common-data-set/", "University of Notre Dame campus"),
  s("georgetown", "Georgetown University", "Washington, DC", "Private", "South", 7900, 12, "1410-1550", 1410, "Holistic", "A Jesuit university with major strengths in international affairs, politics, business, languages, public service, and Washington, DC access.", "https://www.georgetown.edu", "https://uadmissions.georgetown.edu", "https://oir.georgetown.edu/common-data-set/", "Georgetown University campus"),
  s("jhu", "Johns Hopkins University", "Baltimore, MD", "Private", "South", 6200, 7, "1510-1570", 1510, "Highly Selective", "A research-intensive university known for biomedical sciences, public health, engineering, international studies, writing, and early research access.", "https://www.jhu.edu", "https://apply.jhu.edu", "https://oir.jhu.edu/common-data-set/", "Johns Hopkins University campus"),
  s("cmu", "Carnegie Mellon University", "Pittsburgh, PA", "Private", "Northeast", 7600, 11, "1500-1570", 1500, "Highly Selective", "A technology, arts, and research university with elite computer science, engineering, drama, design, business, and interdisciplinary programs.", "https://www.cmu.edu", "https://admission.enrollment.cmu.edu", "https://www.cmu.edu/ira/CDS/", "Carnegie Mellon University campus"),
  s("emory", "Emory University", "Atlanta, GA", "Private", "South", 7700, 11, "1430-1540", 1430, "Holistic", "A selective research university with strong pre-health, business, public health, liberal arts, and access to Atlanta health and nonprofit networks.", "https://www.emory.edu", "https://apply.emory.edu", "https://provost.emory.edu/planning-administration/data/common-data-set.html", "Emory University campus"),
  s("tulane", "Tulane University", "New Orleans, LA", "Private", "South", 7900, 13, "1400-1500", 1400, "Holistic", "A New Orleans research university known for public health, business, architecture, social innovation, service, and a distinctive campus culture.", "https://tulane.edu", "https://admission.tulane.edu", "https://oair.tulane.edu/common-data-set", "Tulane University campus"),
  s("asu", "Arizona State University", "Tempe, AZ", "Public", "West", 65000, 90, "1120-1360", 1120, "Public", "A large public research university known for scale, innovation, Barrett Honors College, business, engineering, sustainability, and flexible pathways.", "https://www.asu.edu", "https://admission.asu.edu", "https://uoia.asu.edu/reports/common-data-set", "Arizona State University campus"),
];

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function loadWithMigration(newKey, oldKey, fallback) {
  const current = localStorage.getItem(newKey);
  if (current !== null) return readJson(newKey, fallback);
  const old = localStorage.getItem(oldKey);
  if (old !== null) {
    try {
      localStorage.setItem(newKey, old);
      return JSON.parse(old);
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function normalizeStoredMyList(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") {
        const school = schools.find((schoolItem) => schoolItem.id === item || schoolItem.name === item);
        return school ? { schoolName: school.name, addedAt: new Date().toISOString() } : null;
      }
      if (item?.schoolName) return { schoolName: item.schoolName, addedAt: item.addedAt || new Date().toISOString() };
      return null;
    })
    .filter(Boolean)
    .filter((item, index, arr) => arr.findIndex((other) => other.schoolName === item.schoolName) === index);
}

function loadMyList() {
  return normalizeStoredMyList(loadWithMigration(STORAGE_KEYS.myList, OLD_STORAGE_KEYS.list, []));
}

function saveMyList(myList) {
  localStorage.setItem(STORAGE_KEYS.myList, JSON.stringify(normalizeStoredMyList(myList)));
}

function loadProfile() {
  return loadWithMigration(STORAGE_KEYS.profile, OLD_STORAGE_KEYS.profile, {});
}

function saveProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile || {}));
}

function loadSettings() {
  return readJson(STORAGE_KEYS.settings, {});
}

function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings || {}));
}

function loadCollegePreferences() {
  return normalizeCollegePreferences(readJson(STORAGE_KEYS.collegePreferences, {}));
}

function saveCollegePreferences(preferences) {
  localStorage.setItem(STORAGE_KEYS.collegePreferences, JSON.stringify(normalizeCollegePreferences(preferences)));
}

function normalizeCollegePreferences(preferences = {}) {
  const normalized = { ...DEFAULT_COLLEGE_PREFERENCES, ...(preferences || {}) };
  delete normalized.notes;
  delete normalized.strictLocationFilters;
  if (normalized.distanceFromHomePreference === "Specific region") normalized.distanceFromHomePreference = "Any";
  return normalized;
}

function loadSuggestedSchools() {
  return readJson(STORAGE_KEYS.suggestedSchools, []);
}

function saveSuggestedSchools(suggestions) {
  localStorage.setItem(STORAGE_KEYS.suggestedSchools, JSON.stringify(suggestions || []));
}

function normalizeComparison(value = {}) {
  const schoolA = schools.find((school) => school.id === value.schoolA || school.name === value.schoolA)?.id || "";
  const schoolB = schools.find((school) => school.id === value.schoolB || school.name === value.schoolB)?.id || "";
  return {
    schoolA,
    schoolB,
    modalOpen: Boolean(value.modalOpen && schoolA && schoolB && schoolA !== schoolB),
    showRecommendation: Boolean(value.showRecommendation && schoolA && schoolB && schoolA !== schoolB),
  };
}

function loadLastComparison() {
  const normalized = normalizeComparison(readJson(STORAGE_KEYS.lastAnalyzeComparison, {}));
  return { ...normalized, modalOpen: false, showRecommendation: false };
}

function saveLastComparison(comparison) {
  const normalized = normalizeComparison(comparison);
  localStorage.setItem(STORAGE_KEYS.lastAnalyzeComparison, JSON.stringify({ schoolA: normalized.schoolA, schoolB: normalized.schoolB }));
}

function clearSavedData() {
  Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
}

const state = {
  tab: "browse",
  selected: null,
  myList: loadMyList(),
  profile: loadProfile(),
  activities: loadWithMigration(STORAGE_KEYS.activities, OLD_STORAGE_KEYS.activities, []),
  awards: loadWithMigration(STORAGE_KEYS.awards, OLD_STORAGE_KEYS.awards, []),
  settings: loadSettings(),
  photos: localStorage.getItem(STORAGE_KEYS.photoVersion) === PHOTO_VERSION ? readJson(STORAGE_KEYS.photos, {}) : (localStorage.getItem(OLD_STORAGE_KEYS.photoVersion) === PHOTO_VERSION ? readJson(OLD_STORAGE_KEYS.photos, {}) : {}),
  filters: { search: "", state: "All", type: "All", region: "All", size: "All", satMin: "400", satMax: "1600", actMin: "1", actMax: "36", acceptance: "100", sort: "Default" },
  reviewerSchool: localStorage.getItem(STORAGE_KEYS.reviewerSchool) || localStorage.getItem(OLD_STORAGE_KEYS.reviewerSchool) || "",
  aiReport: localStorage.getItem(STORAGE_KEYS.lastReportVersion) === REPORT_VERSION ? localStorage.getItem(STORAGE_KEYS.lastReport) || "" : "",
  generatedSummary: "",
  collegePreferences: loadCollegePreferences(),
  suggestedSchools: loadSuggestedSchools(),
  comparison: loadLastComparison(),
  selectedSummarySections: { ...DEFAULT_SUMMARY_SECTIONS, ...(loadSettings().selectedSummarySections || {}) },
  aiSummaryStatus: "",
  aiStatus: "",
  aiProgress: 0,
  aiUsedFallback: false,
  savedAt: "",
};

let renderTimer = null;

const webLLMService = {
  engine: null,
  loading: false,
  error: "",
  isWebGPUSupported() {
    return Boolean(navigator.gpu);
  },
  getSupportMessage() {
    if (!this.isWebGPUSupported()) return "WebGPU is not supported in this browser. Use Chrome or Edge with WebGPU enabled to run the local AI reviewer.";
    if (this.error) return this.error;
    if (this.engine) return "Local WebLLM model is loaded in this browser.";
    return "WebGPU is available. The model will download and load locally the first time you generate a report.";
  },
  async loadModel() {
    if (!this.isWebGPUSupported()) throw new Error("WebGPU is not supported in this browser. Local AI generation cannot run here.");
    if (this.engine) return this.engine;
    if (this.loading) throw new Error("The local model is already loading. Please wait a moment.");
    this.loading = true;
    this.error = "";
    state.aiStatus = "Loading local WebLLM model. The first run can take a few minutes.";
    state.aiProgress = 0.02;
    render();
    try {
      const webllm = await import("https://esm.run/@mlc-ai/web-llm");
      this.engine = await webllm.CreateMLCEngine(WEBLLM_MODEL, {
        initProgressCallback: (progress) => {
          state.aiProgress = progress.progress || state.aiProgress;
          state.aiStatus = progress.text || "Loading local model...";
          render();
        },
      });
      state.aiStatus = "Local model loaded. Writing report...";
      state.aiProgress = 1;
      render();
      return this.engine;
    } catch (error) {
      this.error = `Local AI model could not load: ${error.message}`;
      state.aiStatus = this.error;
      state.aiProgress = 0;
      render();
      throw error;
    } finally {
      this.loading = false;
    }
  },
  async generateProfileRecommendation(profileData, scoringResults, schoolProfile) {
    const reportContext = buildCompactReportContext(profileData, schoolProfile, scoringResults);
    return safeGenerateLocalAIReport(reportContext);
  },
  async webLLMGenerate(systemPrompt, userPrompt, reportContext) {
    const engine = await this.loadModel();
    const response = await engine.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.35,
      max_tokens: 1200,
    });
    const output = cleanGeneratedReport(response.choices?.[0]?.message?.content || "", reportContext);
    if (validateGeneratedReport(output, reportContext)) return output;
    state.aiUsedFallback = true;
    return generateDeterministicReport(reportContext);
  },
};

async function generateProfileRecommendation(profileData, scoringResults, schoolProfile) {
  return webLLMService.generateProfileRecommendation(profileData, scoringResults, schoolProfile);
}

async function safeGenerateLocalAIReport(reportContext) {
  state.aiUsedFallback = false;
  const compactContext = trimReportContextForModel(reportContext, 1200);
  const userPrompt = `Write a polished college-fit report using this context.

Required sections:
Student Profile
School Fit Summary
Academic Fit
Major Fit
Rankings Context if rankingsContext.include is true
Activities & Impact
Additional Considerations if contextualNotes is not empty
Suggested Next Steps
Disclaimer

Context:
${JSON.stringify(compactContext)}`;
  const estimatedTokens = estimatePromptTokens(SHORT_REPORT_SYSTEM_PROMPT + userPrompt);
  if (!webLLMService.isWebGPUSupported() || estimatedTokens > 3200) {
    state.aiUsedFallback = true;
    return generateDeterministicReport(compactContext);
  }
  try {
    const report = await webLLMService.webLLMGenerate(SHORT_REPORT_SYSTEM_PROMPT, userPrompt, compactContext);
    return report?.trim() ? report : generateDeterministicReport(compactContext);
  } catch (error) {
    state.aiUsedFallback = true;
    return generateDeterministicReport(compactContext);
  }
}

async function safeGenerateAISummary(reportContext, selectedSections) {
  state.aiUsedFallback = false;
  const compactContext = trimReportContextForModel(buildSelectedReportContext(reportContext, selectedSections), 900);
  const generatedSummary = generateStructuredSummary(reportContext, selectedSections);
  const fallback = generateConciseAISummaryFallback(reportContext, selectedSections);
  const userPrompt = `Write a paragraph-style AI Summary from this compact context.
Respect selectedSections, but do not use their headings.
Do not mirror the Generated Summary structure or wording.
Write 1-2 short paragraphs, 4-7 sentences total, then the required disclaimer line.

Context:
${JSON.stringify(compactContext)}`;
  const estimatedTokens = estimatePromptTokens(AI_SUMMARY_SYSTEM_PROMPT + userPrompt);
  if (!webLLMService.isWebGPUSupported() || estimatedTokens > 2600) {
    state.aiUsedFallback = true;
    return fallback;
  }
  try {
    const engine = await webLLMService.loadModel();
    state.aiStatus = "Condensing profile fit...";
    state.aiProgress = Math.max(state.aiProgress || 0, 0.35);
    render();
    const response = await engine.chat.completions.create({
      messages: [
        { role: "system", content: AI_SUMMARY_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.25,
      max_tokens: 420,
    });
    const rawOutput = response.choices?.[0]?.message?.content || "";
    if (looksLikeStructuredSummary(rawOutput) || /Structured summary from selected sections/i.test(rawOutput)) {
      state.aiUsedFallback = true;
      return fallback;
    }
    const output = cleanAISummaryOutput(rawOutput);
    const bodyOnly = output.replace(/Disclaimer:[\s\S]*$/i, "").trim();
    if (bodyOnly.length < 80 || isTooSimilarToGeneratedSummary(output, generatedSummary)) {
      state.aiUsedFallback = true;
      return fallback;
    }
    return output;
  } catch {
    state.aiUsedFallback = true;
    return fallback;
  }
}

function estimatePromptTokens(text) {
  return Math.ceil(String(text || "").length / 4);
}

function truncateText(value, maxLength = 500) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function truncateArray(items, maxItems = 5) {
  if (!Array.isArray(items)) return [];
  return items.slice(0, maxItems);
}

function buildWebLLMPrompt(profileData, scoringResults, schoolProfile = getSchoolProfile(scoringResults.schoolName)) {
  const reportContext = trimReportContextForModel(buildCompactReportContext(profileData, schoolProfile, scoringResults), 1200);
  return `
Write a polished college-fit report using this compact context.

Required sections:
Student Profile
School Fit Summary
Academic Fit
Major Fit
Rankings Context if rankingsContext.include is true
Activities & Impact
Additional Considerations if contextualNotes is not empty
Suggested Next Steps
Disclaimer

Context:
${JSON.stringify(reportContext, null, 2)}
`;
}

function makeUsNewsOverallRanking(schoolName) {
  const item = US_NEWS_2026_NATIONAL_UNIVERSITIES[schoolName];
  if (!item) return null;
  return {
    source: "U.S. News & World Report",
    sourceYear: "2026",
    category: "National Universities",
    rank: item.rank,
    displayText: item.displayText || "",
    url: "",
    verified: Boolean(item.verified && item.rank !== null && item.displayText),
    verificationNote: item.verificationNote || "",
  };
}

function makeEngineeringCsRankings(schoolName) {
  return (ENGINEERING_CS_RANKINGS[schoolName]?.majorSpecific || []).map((item) => ({ ...item }));
}

function makeBusinessEconomicsRankings(schoolName) {
  return (BUSINESS_ECONOMICS_RANKINGS[schoolName]?.majorSpecific || []).map((item) => ({ ...item }));
}

function makeHealthLifeSciencesRankings(schoolName) {
  return (HEALTH_LIFE_SCIENCES_RANKINGS[schoolName]?.majorSpecific || []).map((item) => ({ ...item }));
}

function makeArtsMediaRankings(schoolName) {
  return (ARTS_MEDIA_CAMPUS_LIFE_RANKINGS[schoolName]?.majorSpecific || []).map((item) => ({ ...item }));
}

function makeCampusLifeRankings(schoolName) {
  return (ARTS_MEDIA_CAMPUS_LIFE_RANKINGS[schoolName]?.campusLife || []).map((item) => ({ ...item }));
}

function rankingKey(item) {
  return [item.source, item.sourceYear, item.category].map((part) => normalizeText(part)).join("|");
}

function mergeRankingArrays(existing = [], incoming = []) {
  const byKey = new Map();
  existing.forEach((item) => byKey.set(rankingKey(item), item));
  incoming.forEach((item) => {
    const key = rankingKey(item);
    const current = byKey.get(key);
    if (!current || item.verified === true || current.verified !== true) byKey.set(key, item);
  });
  return [...byKey.values()];
}

function s(id, name, location, type, region, size, acceptance, satRange, satLow, profile, blurb, website, admissions, cds, query) {
  const factors = profile === "UC" ? ucFactors : profile === "Public" ? publicFactors : profile === "Highly Selective" ? highlySelectiveFactors : holisticFactors;
  const imageIndex = Math.abs([...id].reduce((total, char) => total + char.charCodeAt(0), 0)) % CAMPUS_IMAGES.length;
  const repositoryCds = COLLEGE_TRANSITIONS_CDS[id];
  const detail = SCHOOL_DETAIL_DATA[id] || {};
  const metricContext = SCHOOL_METRIC_CONTEXT[id] || {};
  const verifiedNationalRanking = makeUsNewsOverallRanking(name);
  const stateName = STATE_NAMES[location.split(", ").at(-1)] || location.split(", ").at(-1);
  return {
    id,
    name,
    location,
    state: stateName,
    type,
    region,
    size,
    acceptance,
    satRange,
    satLow,
    actLow: parseRange(detail.act || "")[0] || 1,
    satMiddle50: satRange,
    satMedian: satMidpoint(satRange),
    actMiddle50: detail.act || "See CDS",
    actMedian: satMidpoint(detail.act || ""),
    gpaAverage: detail.gpaAverage || "",
    gpaMiddle50: detail.gpaMiddle50 || "",
    testingPolicy: factors["Standardized test scores"] === "Not Considered" ? (profile === "UC" ? "Blind" : "Not Considered") : "Unknown",
    blurb,
    website,
    admissions,
    cds,
    repositoryCds,
    image: CAMPUS_IMAGES[imageIndex],
    banner: CAMPUS_IMAGES[(imageIndex + 1) % CAMPUS_IMAGES.length].replace("w=1100", "w=1800"),
    factors,
    admissionsFactors: factors,
    cdsYear: repositoryCds ? `Latest CDS ${repositoryCds.year}` : "Latest public CDS/admissions pages linked for verification",
    sources: [
      { label: "Official site", url: website },
      { label: "Admissions", url: admissions },
      { label: "Common Data Set / institutional data", url: cds },
      repositoryCds ? { label: `Latest CDS (${repositoryCds.year})`, url: repositoryCds.url } : null,
    ].filter(Boolean),
    actRange: detail.act || "See CDS",
    photoUrl: website,
    applicationCycles: detail.cycles || "See admissions site for current deadlines and plans.",
    campus: detail.campus || `${region} campus setting`,
    sports: detail.sports || "See athletics site for division and conference details.",
    // Metric placeholders are intentionally conservative. Verify/update annual
    // values from College Scorecard/IPEDS, official CDS files, and manually
    // checked rankings sources before relying on them as final data.
    schoolMetrics: {
      rankings: {
        sourceYear: "2026",
        overall: [
          verifiedNationalRanking || { source: "U.S. News & World Report", sourceYear: "2026", category: "National Universities", rank: null, displayText: "", url: "", verified: false, verificationNote: "Needs manual verification." },
        ],
        majorSpecific: mergeRankingArrays([
          { source: "U.S. News & World Report", category: "Undergraduate Engineering", rank: null, displayText: "", relevantMajors: ["engineeringCS"], url: "", verified: false },
          { source: "U.S. News & World Report", category: "Computer Science", rank: null, displayText: "", relevantMajors: ["engineeringCS"], url: "", verified: false },
          { source: "U.S. News & World Report", category: "Business", rank: null, displayText: "", relevantMajors: ["businessSocialScience"], url: "", verified: false },
        ], [
          ...makeEngineeringCsRankings(name),
          ...makeBusinessEconomicsRankings(name),
          ...makeHealthLifeSciencesRankings(name),
          ...makeArtsMediaRankings(name),
        ]),
        campusLife: mergeRankingArrays([
          { source: "Niche", category: "Campus", rank: null, grade: "", displayText: "", url: "", verified: false },
          { source: "Niche", category: "Safety", rank: null, grade: "", displayText: "", url: "", verified: false },
          { source: "Niche", category: "Student Life", rank: null, grade: "", displayText: "", url: "", verified: false },
        ], makeCampusLifeRankings(name)),
      },
      outcomes: {
        graduationRate: null,
        retentionRate: null,
        medianEarnings: null,
        averageAnnualCost: null,
        acceptanceRate: acceptance,
        satMiddle50: satRange,
        actMiddle50: detail.act || null,
        source: "College Scorecard / IPEDS",
        verified: false,
      },
      campus: {
        enrollmentSize: size,
        setting: metricContext.setting || detail.campus || "",
        city: location.split(", ")[0],
        state: stateName,
        region,
        publicPrivate: type,
        sportsConference: detail.sports || "",
        climateTags: dedupeStrings([...(metricContext.climateTags || []), ...inferClimateTags(location, region, detail.campus || "")]),
        safetyContext: "",
        qualityOfLifeTags: dedupeStrings([...(metricContext.qualityOfLifeTags || []), ...inferQualityOfLifeTags(location, region, detail.campus || "")]),
        campusTags: metricContext.campusTags || [],
        locationAdvantages: metricContext.locationAdvantages || [],
      },
    },
    schoolEnrichment: emptySchoolEnrichment(),
  };
}

function save() {
  saveMyList(state.myList);
  saveProfile(state.profile);
  localStorage.setItem(STORAGE_KEYS.activities, JSON.stringify(state.activities));
  localStorage.setItem(STORAGE_KEYS.awards, JSON.stringify(state.awards));
  localStorage.setItem(STORAGE_KEYS.photos, JSON.stringify(state.photos));
  localStorage.setItem(STORAGE_KEYS.photoVersion, PHOTO_VERSION);
  localStorage.setItem(STORAGE_KEYS.reviewerSchool, state.reviewerSchool || "");
  localStorage.setItem(STORAGE_KEYS.lastReport, state.aiReport || "");
  localStorage.setItem(STORAGE_KEYS.lastReportVersion, REPORT_VERSION);
  saveCollegePreferences(state.collegePreferences);
  saveSuggestedSchools(state.suggestedSchools);
  saveLastComparison(state.comparison);
  state.settings.selectedSummarySections = state.selectedSummarySections;
  saveSettings(state.settings);
  state.savedAt = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand"><img class="brand-logo" src="assets/collegia-logo.png" alt="Collegia logo" /><span>Collegia</span></div>
        <nav class="tabs">
          ${tabButton("browse", "Browse Schools")}
          ${tabButton("profile", "My Profile")}
          ${tabButton("suggested", "Suggested Schools")}
          ${tabButton("compare", "Compare Schools")}
          ${tabButton("list", "My List")}
          ${tabButton("reviewer", "Profile Reviewer")}
        </nav>
        <div class="save-status">
          <span>Saved locally${state.savedAt ? ` at ${state.savedAt}` : ""}</span>
          <button class="btn ghost" data-clear-saved>Clear saved data</button>
        </div>
      </header>
      <main class="main">${renderTab()}</main>
      <div class="modal ${state.selected ? "open" : ""}" onclick="closeOnBackdrop(event)">
        ${state.selected ? renderDetail(schools.find((school) => school.id === state.selected)) : ""}
      </div>
    </div>
  `;
  bindEvents();
  hydrateCampusImages();
}

function tabButton(id, label) {
  return `<button class="tab ${state.tab === id ? "active" : ""}" data-tab="${id}">${label}</button>`;
}

function renderTab() {
  if (state.tab === "list") return renderMyList();
  if (state.tab === "profile") return renderProfile();
  if (state.tab === "suggested") return renderSuggestedSchools();
  if (state.tab === "compare") return renderCompareSchools();
  if (state.tab === "reviewer") return renderReviewer();
  return renderBrowse();
}

function renderBrowse() {
  const filtered = schools.filter((school) => {
    const query = state.filters.search.toLowerCase();
    const matchesSearch = !query || school.name.toLowerCase().includes(query);
    const matchesState = state.filters.state === "All" || school.state === state.filters.state;
    const matchesType = state.filters.type === "All" || school.type === state.filters.type;
    const matchesRegion = state.filters.region === "All" || school.region === state.filters.region;
    const matchesSize = state.filters.size === "All" || (
      state.filters.size === "Small" ? school.size < 8000 :
      state.filters.size === "Medium" ? school.size >= 8000 && school.size < 20000 :
      school.size >= 20000
    );
    const matchesSat = school.satLow >= Number(state.filters.satMin) - 80 && school.satLow <= Number(state.filters.satMax);
    const matchesAct = school.actLow >= Number(state.filters.actMin) - 2 && school.actLow <= Number(state.filters.actMax);
    const matchesAcceptance = school.acceptance <= Number(state.filters.acceptance);
    return matchesSearch && matchesState && matchesType && matchesRegion && matchesSize && matchesSat && matchesAct && matchesAcceptance;
  }).sort(sortSchools);

  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">US colleges</div>
        <h1>Build a smarter college list from evidence, not vibes.</h1>
        <p>Browse 50 high-interest U.S. schools, save targets, inspect admissions context, and keep your Common App-style profile organized in one place.</p>
      </div>
      <aside class="snapshot">
        <div class="notice">Admissions data changes frequently. Each detailed school page includes official admissions and Common Data Set links for verification.</div>
      </aside>
    </section>
    <section class="browse-layout">
      <aside class="panel filter-sidebar">
        <div>
          <h2>Search</h2>
          <div class="result-count">${filtered.length} schools shown</div>
        </div>
        ${field("School", `<input data-filter="search" value="${escapeHtml(state.filters.search)}" placeholder="Search by school name" />`)}
        ${field("State", select("state", US_STATES, state.filters.state))}
        ${field("Public/private", select("type", ["All", "Public", "Private"], state.filters.type))}
        ${field("Location", select("region", ["All", "Northeast", "South", "Midwest", "West"], state.filters.region))}
        ${field("Undergrad size", select("size", ["All", "Small", "Medium", "Large"], state.filters.size))}
        ${dualRangeField("SAT range", "satMin", "satMax", 400, 1600, 10)}
        ${dualRangeField("ACT range", "actMin", "actMax", 1, 36, 1)}
        ${rangeField("Max acceptance rate", "acceptance", 1, 100, 1, "%")}
        ${field("Sort by", select("sort", ["Default", "Acceptance: low to high", "Acceptance: high to low", "Size: small to large", "Size: large to small", "SAT: high to low"], state.filters.sort))}
      </aside>
      <section class="school-grid">
        ${filtered.map(renderSchoolCard).join("") || `<div class="empty">No schools match those filters yet.</div>`}
      </section>
    </section>
  `;
}

function renderSchoolCard(school) {
  const saved = isSchoolSaved(school);
  return `
    <article class="school-card" data-card-open="${school.id}" tabindex="0" role="button" aria-label="Open ${school.name} details">
      <img class="school-image" data-school-image="${school.id}" src="${campusImage(school)}" alt="${school.name} campus" loading="lazy" />
      <div class="school-body">
        <div class="school-title">
          <div><h3>${school.name}</h3><div class="muted">${school.location}</div></div>
          <span class="chip">${school.type}</span>
        </div>
        <div class="stats">
          <div class="stat"><b>${school.acceptance}%</b><span>Acceptance</span></div>
          <div class="stat"><b>${school.satRange}</b><span>Middle 50% SAT</span></div>
          <div class="stat"><b>${school.actRange}</b><span>Middle 50% ACT</span></div>
          <div class="stat"><b>${formatSize(school.size)}</b><span>Undergrads</span></div>
        </div>
        <div class="actions">
          <button class="btn primary" data-open="${school.id}">Details</button>
          <button class="btn ${saved ? "ghost" : ""}" data-save="${school.id}">${saved ? "In My List" : "Add to My List"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderMyList() {
  const savedSchools = getSavedSchools();
  return `
    <section class="hero compact-hero">
      <div class="hero-copy">
        <div class="eyebrow">My List</div>
        <h1>Your saved college list.</h1>
        <p>Review, compare, and remove the schools you have saved.</p>
      </div>
      <aside class="snapshot">
        <div class="notice">Saved locally on this device.</div>
      </aside>
    </section>
    <section class="school-grid list-grid">
      ${savedSchools.map((school) => `
        <article class="school-card" data-card-open="${school.id}" tabindex="0" role="button" aria-label="Open ${school.name} details">
          <img class="school-image" data-school-image="${school.id}" src="${campusImage(school)}" alt="${school.name} campus" loading="lazy" />
          <div class="school-body">
            <div class="school-title">
              <div><h3>${school.name}</h3><div class="muted">${school.location}</div></div>
              <span class="chip">${school.type}</span>
            </div>
            <p class="muted">${school.blurb}</p>
            <div class="actions">
              <button class="btn primary" data-open="${school.id}">Details</button>
              <button class="btn" data-review-school="${school.id}">Review</button>
              <button class="btn" data-compare-school="${school.id}">Compare</button>
              <button class="btn ghost" data-save="${school.id}">Remove</button>
            </div>
          </div>
        </article>
      `).join("") || `<div class="empty">No schools saved yet. Add schools from Browse Schools.</div>`}
    </section>
  `;
}

function renderCompareSchools() {
  const firstSchool = schools.find((school) => school.id === state.comparison.schoolA);
  const secondSchool = schools.find((school) => school.id === state.comparison.schoolB);
  const sameSchool = firstSchool && secondSchool && firstSchool.id === secondSchool.id;
  const ready = firstSchool && secondSchool && !sameSchool;
  return `
    <section class="hero compact-hero">
      <div class="hero-copy">
        <div class="eyebrow">Compare Schools</div>
        <h1>Compare Schools</h1>
        <p>Choose two schools to compare your profile fit.</p>
      </div>
    </section>

    <section class="compare-page-layout">
      <section class="panel compare-picker-panel">
        <div class="compare-controls">
          ${field("School 1", schoolCompareSelect("schoolA", state.comparison.schoolA))}
          ${field("School 2", schoolCompareSelect("schoolB", state.comparison.schoolB))}
        </div>
        ${ready ? `<p class="selected-compare-line">Selected: ${escapeHtml(firstSchool.name)} vs ${escapeHtml(secondSchool.name)}</p>` : ""}
        ${sameSchool ? `<div class="notice subtle">Choose two different schools to compare.</div>` : ""}
        <div class="actions compare-analyze-actions">
          <button class="btn primary" data-analyze-comparison type="button" ${ready ? "" : "disabled"}>Analyze Fit</button>
        </div>
      </section>

      ${ready && state.comparison.showRecommendation ? renderComparisonRecommendation(firstSchool, secondSchool) : ""}
    </section>
  `;
}

function schoolCompareSelect(key, selectedId) {
  const savedIds = new Set(getSavedSchools().map((school) => school.id));
  return `
    <select data-compare-select="${key}">
      <option value="">Choose school...</option>
      ${schools.map((school) => `<option value="${school.id}" ${school.id === selectedId ? "selected" : ""}>${escapeHtml(school.name)}${savedIds.has(school.id) ? " (Saved)" : ""}</option>`).join("")}
    </select>
  `;
}

function renderComparisonRecommendation(firstSchool, secondSchool) {
  return `<article class="comparison-recommendation"><h3>Profile-Aware Recommendation</h3><p>${escapeHtml(cleanComparisonRecommendationText(generateShortComparisonRecommendation(firstSchool, secondSchool, getProfileData(), state.collegePreferences)))}</p></article>`;
}

function cleanComparisonRecommendationText(text) {
  return cleanComparisonLine(text)
    .replace(/for this the intended major profile/gi, "for the current profile")
    .replace(/That does not mean the school is a bad option, but this report has less evidence of program-specific fit from the current school data\./gi, "Program-specific data is more limited in current Collegia data.")
    .replace(/business\/entrepreneurship ecosystem, Economics, or Entrepreneurship/gi, "business/entrepreneurship ecosystem")
    .replace(/business\/entrepreneurship ecosystem, Economics/gi, "business/entrepreneurship ecosystem");
}

function renderSuggestedSchools() {
  const profileData = getProfileData();
  const preferences = state.collegePreferences;
  const suggestionState = normalizeSuggestionState(state.suggestedSchools);
  const snapshot = buildSuggestedProfileSnapshot(profileData);
  return `
    <section class="hero compact-hero">
      <div class="hero-copy">
        <div class="eyebrow">Suggested Schools</div>
        <h1>Find colleges that fit your profile and preferences.</h1>
        <p>Collegia ranks schools from the current 50-school database using your academic profile, intended major, preferences, and available school context.</p>
      </div>
      <aside class="snapshot">
        <div class="notice">Suggestions are fit signals, not admissions predictions.</div>
      </aside>
    </section>

    <section class="suggested-layout">
      <section class="panel suggested-panel">
        <div class="section-head no-pad"><div><h2>Profile Snapshot</h2><p class="muted">Using the information already entered in My Profile.</p></div></div>
        <div class="snapshot-chips">${snapshot.length ? snapshot.map((item) => `<span class="profile-snapshot-chip">${escapeHtml(item)}</span>`).join("") : `<div class="empty">Add an intended major and academic details in My Profile for better recommendations.</div>`}</div>
      </section>

      <section class="panel suggested-panel">
        <div class="section-head no-pad"><div><h2>Your Preferences</h2><p class="muted">Suggested Schools uses the preferences saved in My Profile.</p></div></div>
        <div class="snapshot-chips">${renderPreferenceSummaryChips(preferences)}</div>
        <div class="actions suggested-actions">
          <button class="btn" data-edit-preferences type="button">Edit in My Profile</button>
          <button class="btn primary" data-generate-suggestions type="button">Generate Suggestions</button>
        </div>
      </section>

      <section class="panel suggested-panel">
        <div class="section-head no-pad"><div><h2>Suggestions Results</h2><p class="muted">Ranked deterministically from the current 50-school list.</p></div></div>
        ${!profileData.intendedMajor ? `<div class="notice subtle">Add an intended major in My Profile for better recommendations.</div>` : ""}
        ${renderSuggestionResults(suggestionState)}
      </section>
    </section>
  `;
}

function normalizeSuggestionState(value) {
  if (Array.isArray(value)) {
    return { withinFilters: value, outsideFilters: [], partialMatches: [], emptyMessage: "", generated: value.length > 0 };
  }
  return {
    withinFilters: Array.isArray(value?.withinFilters) ? value.withinFilters : [],
    outsideFilters: Array.isArray(value?.outsideFilters) ? value.outsideFilters : [],
    partialMatches: Array.isArray(value?.partialMatches) ? value.partialMatches : [],
    emptyMessage: value?.emptyMessage || "",
    generated: Boolean(value?.generated),
  };
}

function renderSuggestionResults(suggestionState) {
  if (!suggestionState.generated) return `<div class="empty">No suggestions generated yet. Adjust preferences, then click Generate Suggestions.</div>`;
  const sections = [];
  if (suggestionState.withinFilters.length) {
    sections.push(`<div class="suggestion-section"><h3>Recommended within your filters</h3><div class="suggestion-grid">${suggestionState.withinFilters.map(renderSuggestedSchoolCard).join("")}</div></div>`);
  } else {
    sections.push(`<div class="empty">${escapeHtml(suggestionState.emptyMessage || "No schools match your selected hard filters. Try expanding your region, state, or public/private preference.")}</div>`);
  }
  if (suggestionState.outsideFilters.length) {
    sections.push(`<div class="suggestion-section outside-filter-section"><h3>Outside your filters, but strong fit</h3><p class="muted">These are separated from the main results because they miss at least one strict filter.</p><div class="suggestion-grid">${suggestionState.outsideFilters.map(renderSuggestedSchoolCard).join("")}</div></div>`);
  }
  if (suggestionState.partialMatches.length) {
    sections.push(`<details class="suggestion-section partial-section"><summary>Partial or weak matches</summary><div class="suggestion-grid">${suggestionState.partialMatches.map(renderSuggestedSchoolCard).join("")}</div></details>`);
  }
  return sections.join("");
}

function renderSuggestedSchoolCard(suggestion) {
  const school = schools.find((item) => item.name === suggestion.schoolName);
  if (!school) return "";
  const saved = isSchoolSaved(school);
  return `
    <article class="suggestion-card">
      <div class="suggestion-head">
        <div>
          <h3>${escapeHtml(school.name)}</h3>
          <p class="muted">${escapeHtml(school.location)} · ${escapeHtml(school.type)} · ${escapeHtml(school.region)}</p>
        </div>
        <div class="match-badge"><strong>${Math.round(suggestion.matchScore)}</strong><span>${escapeHtml(suggestion.matchLevel)}</span></div>
      </div>
      <div class="tag-row">${(suggestion.categoryTags || []).slice(0, 5).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
      ${suggestion.majorFitNote ? `<p>${escapeHtml(suggestion.majorFitNote)}</p>` : ""}
      ${suggestion.academicRangeNote ? `<p class="muted">${escapeHtml(suggestion.academicRangeNote)}</p>` : ""}
      ${suggestion.preferenceFitNote ? `<p class="muted">${escapeHtml(suggestion.preferenceFitNote)}</p>` : ""}
      ${suggestion.relevantPrograms?.length ? `<p class="muted">Relevant school context: ${escapeHtml(formatList(suggestion.relevantPrograms.slice(0, 3)))}.</p>` : ""}
      ${suggestion.relevantRankings?.length ? `<p class="muted">Ranking context: ${escapeHtml(formatList(suggestion.relevantRankings.slice(0, 2)))}.</p>` : ""}
      ${suggestion.fitReasons?.length ? `<div class="suggestion-list"><h4>Why it fits</h4>${suggestion.fitReasons.slice(0, 4).map((reason) => `<p>${escapeHtml(reason)}</p>`).join("")}</div>` : ""}
      ${suggestion.tradeoffs?.length ? `<div class="suggestion-list caution"><h4>Tradeoffs</h4>${suggestion.tradeoffs.slice(0, 2).map((tradeoff) => `<p>${escapeHtml(tradeoff)}</p>`).join("")}</div>` : ""}
      ${suggestion.dataNotes?.length ? `<p class="muted">${escapeHtml(suggestion.dataNotes[0])}</p>` : ""}
      <div class="actions">
        <button class="btn primary" data-open="${school.id}">Details</button>
        <button class="btn ${saved ? "ghost" : ""}" data-save="${school.id}">${saved ? "In My List" : "Add to My List"}</button>
      </div>
    </article>
  `;
}

function buildSuggestedProfileSnapshot(profileData) {
  const parts = [];
  if (profileData.intendedMajor) {
    const category = getMajorCategory(profileData.intendedMajor);
    parts.push(`${profileData.intendedMajor} applicant`);
    if (category) parts.push(MAJOR_CATEGORY_LABELS[category] || "Other major area");
  }
  if (profileData.gpa) parts.push(`GPA ${profileData.gpa}`);
  if (profileData.sat) parts.push(`SAT ${profileData.sat}`);
  else if (profileData.act) parts.push(`ACT ${profileData.act}`);
  if (profileData.classRank) parts.push(`Class rank ${profileData.classRank}`);
  if (profileData.stateResidency) parts.push(`${profileData.stateResidency} resident`);
  const rigor = evaluateCourseRigor(profileData, profileData.intendedMajor);
  if (rigor.summary) parts.push(rigor.summary);
  const courseSummary = buildMajorRelevantCourseSummary(profileData, profileData.intendedMajor);
  if (courseSummary.listedRelevantCourses?.length) parts.push(`Major courses: ${formatList(courseSummary.listedRelevantCourses.slice(0, 3))}`);
  const activities = (profileData.activities || []).slice(0, 2).map((item) => item.title).filter(Boolean);
  if (activities.length) parts.push(`Activities: ${formatList(activities)}`);
  const awards = (profileData.awards || []).slice(0, 2).map((item) => item.title).filter(Boolean);
  if (awards.length) parts.push(`Awards: ${formatList(awards)}`);
  return parts;
}

function renderPreferenceSummaryChips(preferences = state.collegePreferences) {
  const normalized = normalizeCollegePreferences(preferences);
  const chips = [];
  const addList = (label, values) => {
    const list = normalizeAnyArray(values).filter((value) => value && value !== "Any" && value !== "No preference");
    if (list.length) chips.push(`${label}: ${formatList(list.slice(0, 3))}`);
  };
  const addChoice = (label, value, neutral = ["Any", "Medium", "No preference"]) => {
    if (value && !neutral.includes(value)) chips.push(`${label}: ${value}`);
  };
  addList("Regions", normalized.preferredRegions);
  addList("States", normalized.preferredStates);
  addChoice("Public/private", normalized.publicPrivatePreference, ["Any"]);
  addList("Setting", normalized.urbanSuburbanRural);
  addChoice("Size", normalized.schoolSizePreference, ["Any"]);
  addList("Climate", normalized.climatePreference);
  addList("Vibe", normalized.campusVibe);
  addChoice("Cost", normalized.costSensitivity);
  addChoice("Financial aid", normalized.financialAidImportance);
  addChoice("Distance", normalized.distanceFromHomePreference, ["Any", "No preference"]);
  addChoice("Sports", normalized.sportsImportance);
  addChoice("Safety", normalized.campusSafetyImportance);
  addChoice("Quality of life", normalized.qualityOfLifeImportance);
  addChoice("Rankings", normalized.rankingsImportance);
  addChoice("Major strength", normalized.majorStrengthImportance);
  addChoice("Research", normalized.researchImportance);
  addChoice("Internships/co-op", normalized.internshipCoopImportance);
  addChoice("Honors", normalized.honorsProgramsImportance);
  addChoice("Entrepreneurship", normalized.entrepreneurshipImportance);
  addChoice("Study abroad", normalized.studyAbroadImportance);
  addChoice("Diversity", normalized.diversityImportance);
  if (!chips.length) return `<span class="profile-snapshot-chip">No preferences set yet</span>`;
  return chips.slice(0, 10).map((chip) => `<span class="profile-snapshot-chip">${escapeHtml(chip)}</span>`).join("");
}

function renderCollegePreferencesCard() {
  const preferences = state.collegePreferences;
  return `
    <section class="panel profile-section-card profile-card-full" id="college-preferences">
      <div class="section-head"><div><h2>College Preferences</h2><p class="muted">Used by Suggested Schools and Compare Schools.</p></div></div>
      <div class="preference-grid profile-preference-grid">
        ${preferenceChipGroup("Preferred regions", "preferredRegions", PREFERENCE_OPTIONS.preferredRegions)}
        ${preferenceChipGroup("Campus setting", "urbanSuburbanRural", PREFERENCE_OPTIONS.urbanSuburbanRural)}
        ${preferenceChipGroup("Campus vibe", "campusVibe", PREFERENCE_OPTIONS.campusVibe)}
        ${preferenceChipGroup("Climate", "climatePreference", PREFERENCE_OPTIONS.climatePreference)}
        ${field("Preferred states", `<select data-preference-state><option value="">Add a state</option>${US_STATES.filter((item) => item !== "All").map((stateName) => `<option>${stateName}</option>`).join("")}</select><div class="mini-chip-row">${(preferences.preferredStates || []).map((stateName) => `<button class="mini-chip active" data-remove-pref-state="${escapeHtml(stateName)}" type="button">${escapeHtml(stateName)} &times;</button>`).join("")}</div>`)}
        ${preferenceSelect("Public/private", "publicPrivatePreference", ["Any", "Public", "Private"])}
        ${preferenceSelect("School size", "schoolSizePreference", ["Any", "Small", "Medium", "Large"])}
        ${preferenceSelect("Cost sensitivity", "costSensitivity", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Financial aid importance", "financialAidImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Distance from home", "distanceFromHomePreference", ["Any", "Close to home", "Driving distance", "Far from home", "Out of state", "No preference"])}
        ${preferenceSelect("Sports / school spirit", "sportsImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Campus safety", "campusSafetyImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Quality of life", "qualityOfLifeImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Rankings importance", "rankingsImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Major strength", "majorStrengthImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Research", "researchImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Internship / co-op", "internshipCoopImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Honors programs", "honorsProgramsImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Entrepreneurship", "entrepreneurshipImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Study abroad", "studyAbroadImportance", IMPORTANCE_LEVELS)}
        ${preferenceSelect("Diversity", "diversityImportance", IMPORTANCE_LEVELS)}
      </div>
    </section>
  `;
}

function preferenceChipGroup(label, key, options) {
  const selected = state.collegePreferences[key] || [];
  return `
    <div class="field preference-chip-field">
      <span>${label}</span>
      <div class="mini-chip-row">
        ${options.map((option) => {
          const active = selected.includes(option);
          return `<button class="mini-chip ${active ? "active" : ""}" data-pref-array="${key}" data-pref-value="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>`;
        }).join("")}
      </div>
    </div>
  `;
}

function preferenceSelect(label, key, options) {
  return field(label, `<select data-preference="${key}">${options.map((option) => `<option value="${escapeHtml(option)}" ${option === state.collegePreferences[key] ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`);
}

function buildCompactSchoolComparison(profileData, collegePreferences, schoolOne, schoolTwo) {
  const full = buildSchoolComparison(profileData, collegePreferences, schoolOne, schoolTwo);
  const firstSchool = compactComparisonSchool(full.schoolA, schoolOne);
  const secondSchool = compactComparisonSchool(full.schoolB, schoolTwo);
  return {
    firstSchool,
    secondSchool,
    schoolA: firstSchool,
    schoolB: secondSchool,
    firstSummary: buildComparisonSummaryCard(firstSchool),
    secondSummary: buildComparisonSummaryCard(secondSchool),
    comparisonSummary: full.comparisonSummary,
  };
}

function compactComparisonSchool(item, school) {
  const programs = getCompactProgramEvidence(item, 3);
  const rankings = (item.specificEvidence.relevantMajorRankings || []).slice(0, 2);
  const majorFitLabel = item.scoreBreakdown.majorFit >= 85 ? "Strong major fit" : item.scoreBreakdown.majorFit >= 65 ? "Moderate major fit" : "Limited major fit";
  const preferenceFitLabel = item.scoreBreakdown.preferenceFit >= 80 ? "Strong preference fit" : item.scoreBreakdown.preferenceFit >= 60 ? "Moderate preference fit" : "Limited preference fit";
  const preferenceItems = item.preferenceMatches.filter((line) => !/appears relevant|current app data/i.test(line)).slice(0, 2);
  const campus = school.schoolMetrics?.campus || {};
  return {
    ...item,
    school,
    locationLine: `${school.location} - ${school.type} - ${school.schoolMetrics?.campus?.setting || school.region}`,
    topChips: dedupeStrings([
      item.saved ? "Saved" : "",
      getRankingDisplayText({ schoolMetrics: school.schoolMetrics }),
      majorFitLabel,
    ]).filter(Boolean).slice(0, 3),
    majorFitLabel,
    preferenceFitLabel,
    keyPrograms: programs,
    keyRankings: rankings,
    keyOpportunities: dedupeStrings([
      ...item.specificEvidence.relevantSignaturePrograms,
      ...item.specificEvidence.relevantExperientialOpportunities,
      ...item.specificEvidence.relevantLocationAdvantages,
    ].map(cleanSpecificEvidenceName).filter(Boolean)).slice(0, 3),
    campusTags: dedupeStrings([...(campus.campusTags || []), ...(campus.qualityOfLifeTags || [])]).slice(0, 3),
    climateTags: (campus.climateTags || []).slice(0, 3),
    setting: campus.setting || school.campus || "",
    sizeCategory: school.size < 8000 ? "Small" : school.size < 20000 ? "Medium" : "Large",
    overallRanking: getRankingDisplayText({ schoolMetrics: school.schoolMetrics }),
    costResidencyNote: buildCompactCostResidencyNote(item, school),
    quickOverview: [
      `${school.region} - ${school.type}`,
      `${school.size < 8000 ? "Small" : school.size < 20000 ? "Medium" : "Large"} undergraduate size`,
      school.schoolMetrics?.campus?.setting || school.campus || "",
    ],
    academicSnapshot: [
      school.satRange && school.satRange !== "See CDS" ? `SAT: ${school.satRange}` : "",
      school.actRange && school.actRange !== "See CDS" ? `ACT: ${school.actRange}` : "",
      Number.isFinite(school.acceptance) ? `Acceptance context: ${school.acceptance}%` : "",
    ],
    programFit: [
      majorFitLabel,
      programs.length ? `Relevant: ${formatList(programs)}` : "Program-specific data is limited in Collegia.",
      rankings.length ? `Verified context: ${formatList(rankings)}` : "",
    ],
    preferenceFit: [
      ...(preferenceItems.length ? preferenceItems.map(cleanComparisonLine) : []),
      (school.schoolMetrics?.campus?.climateTags || []).length ? `Climate: ${formatList(school.schoolMetrics.campus.climateTags.slice(0, 2))}` : "",
      (school.schoolMetrics?.campus?.campusTags || []).length ? `Campus: ${formatList(school.schoolMetrics.campus.campusTags.slice(0, 2))}` : "",
    ].slice(0, 3),
    tradeoffs: item.tradeoffs
      .map(cleanComparisonLine)
      .filter((line, index, arr) => arr.findIndex((other) => normalizeText(other) === normalizeText(line)) === index)
      .slice(0, 3),
  };
}

function buildComparisonSummaryCard(item) {
  return {
    majorFitLabel: item.majorFitLabel,
    preferenceFitLabel: item.preferenceFitLabel,
    matchScore: item.suggestedScore,
    keyPrograms: item.keyPrograms,
    keyRankings: item.keyRankings,
    tradeoffs: item.tradeoffs.slice(0, 2),
  };
}

function buildCompactCostResidencyNote(item, school) {
  const costLine = [...(item.preferenceMatches || []), ...(item.tradeoffs || [])].find((line) => /cost|residency|in-state|out-of-state|private/i.test(line));
  if (costLine) return cleanComparisonLine(costLine);
  if (school.type === "Private") return "Private school cost should be reviewed.";
  return "Public cost depends on residency and aid.";
}

function cleanComparisonLine(line) {
  return String(line || "")
    .replace(/\bis does not\b/gi, "does not")
    .replace(/\bis has\b/gi, "has")
    .replace(/\s+/g, " ")
    .trim();
}

function getCompactProgramEvidence(item, limit = 3) {
  return dedupeStrings([
    ...item.specificEvidence.relevantUndergraduateSchools,
    ...item.specificEvidence.relevantSignaturePrograms,
    ...item.specificEvidence.relevantExperientialOpportunities,
  ].map(cleanSpecificEvidenceName).filter(Boolean)).slice(0, limit);
}

function cleanSpecificEvidenceName(name) {
  const text = String(name || "");
  if (/^Business\/entrepreneurship ecosystem/i.test(text)) return "business/entrepreneurship ecosystem";
  if (/^Harvard College concentrations/i.test(text)) return "Harvard College";
  return text
    .replace(/Business\/entrepreneurship ecosystem through campus programs,?\s*/i, "business/entrepreneurship ecosystem")
    .replace(/,?\s+or\s+(Economics|Business|Entrepreneurship|Computer Science|Engineering|Biology|Film|Media|Communications)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildSchoolComparison(profileData, collegePreferences, schoolA, schoolB) {
  const preferences = normalizeCollegePreferences(collegePreferences);
  const weights = adjustedSuggestedWeights(preferences);
  const a = buildSingleSchoolComparison(profileData, preferences, schoolA, weights);
  const b = buildSingleSchoolComparison(profileData, preferences, schoolB, weights);
  return {
    schoolA: a,
    schoolB: b,
    comparisonSummary: buildComparisonSummary(a, b),
  };
}

function buildSingleSchoolComparison(profileData, preferences, school, weights) {
  const schoolProfile = getSchoolProfile(school.name);
  const majorCategory = getMajorCategory(profileData.intendedMajor);
  const enrichment = getRelevantSchoolEnrichment(schoolProfile, profileData.intendedMajor, majorCategory);
  const majorAlignment = getMajorSchoolFitAlignment(profileData.intendedMajor, majorCategory, schoolProfile);
  const academic = calculateAcademicRangeFit(profileData, school);
  const preference = calculatePreferenceFit(preferences, school, profileData);
  const environment = calculateEnvironmentFit(preferences, school);
  const cost = calculateCostResidencyFit(profileData, preferences, school);
  const suggestion = scoreSuggestedSchool(profileData, preferences, school, weights);
  const campus = school.schoolMetrics?.campus || {};
  const majorRankings = getRelevantMajorRankings({ ...schoolProfile, schoolMetrics: school.schoolMetrics }, profileData.intendedMajor, majorCategory);
  const overallRanking = getVerifiedOverallRanking({ ...schoolProfile, schoolMetrics: school.schoolMetrics });
  const campusRankings = getRelevantCampusLifeRankings({ ...schoolProfile, schoolMetrics: school.schoolMetrics }, preferences);
  const relevantRankings = [...majorRankings, overallRanking, ...campusRankings].filter(Boolean).slice(0, 4);
  const profileConnections = buildComparisonProfileConnections(profileData, majorCategory, school.name);
  const relevantUndergraduateSchools = (enrichment.relevantUndergraduateSchools || []).map((item) => item.name).filter(Boolean);
  const relevantSignaturePrograms = (enrichment.relevantSignaturePrograms || []).map((item) => item.name).filter(Boolean);
  const relevantExperientialOpportunities = (enrichment.relevantExperientialOpportunities || []).map((item) => item.name).filter(Boolean);
  const relevantLocationAdvantages = (enrichment.relevantLocationAdvantages || []).map((item) => item.description || item.name).filter(Boolean);
  return {
    name: school.name,
    schoolId: school.id,
    saved: isSchoolSaved(school),
    suggestedScore: findSuggestedScore(school.name) || suggestion.matchScore,
    basicInfo: [
      `${school.location} · ${school.region}`,
      `${school.type} · ${campus.setting || school.campus || "Setting not available"}`,
      `${school.size < 8000 ? "Small" : school.size < 20000 ? "Medium" : "Large"} undergraduate size`,
      schoolProfile.institutionalPersonality || school.blurb,
    ],
    academicContext: [
      overallRanking ? formatRankingItemDisplay(overallRanking) : "",
      school.satRange && school.satRange !== "See CDS" ? `SAT middle 50%: ${school.satRange}` : "SAT range not available in current school data.",
      school.actRange && school.actRange !== "See CDS" ? `ACT middle 50%: ${school.actRange}` : "",
      Number.isFinite(school.acceptance) ? `Acceptance rate context: ${school.acceptance}%` : "",
      school.testingPolicy ? `Testing policy: ${school.testingPolicy}` : "",
      academic.note,
    ],
    majorFit: [
      majorAlignment.majorFitSummary,
      majorAlignment.matchedStrengths.length ? `Relevant listed strengths: ${formatList(majorAlignment.matchedStrengths.slice(0, 4))}.` : "",
      profileConnections.length ? `Profile connection: ${profileConnections[0]}` : "",
    ],
    campusFit: [
      campus.setting || school.campus || "",
      (campus.climateTags || []).length ? `Climate: ${formatList(campus.climateTags.slice(0, 3))}.` : "",
      (campus.campusTags || []).length ? `Campus tags: ${formatList(campus.campusTags.slice(0, 4))}.` : "",
      (campus.qualityOfLifeTags || []).length ? `Quality-of-life tags: ${formatList(campus.qualityOfLifeTags.slice(0, 3))}.` : "",
    ],
    rankings: relevantRankings.map(formatRankingItemDisplay).filter(Boolean),
    opportunities: dedupeStrings([
      ...relevantExperientialOpportunities,
      ...relevantLocationAdvantages,
      enrichment.majorSpecificAdvice || "",
    ]).slice(0, 5),
    preferenceMatches: dedupeStrings([...preference.reasons, ...environment.reasons, ...cost.reasons]).slice(0, 5),
    tradeoffs: dedupeStrings([...suggestion.tradeoffs, ...preference.tradeoffs, ...environment.tradeoffs, ...cost.tradeoffs]).slice(0, 5),
    dataNotes: dedupeStrings([
      ...(suggestion.dataNotes || []),
      !majorRankings.length ? "No verified major-specific ranking available for this major in current Collegia data." : "",
    ]).filter(Boolean).slice(0, 3),
    scoreBreakdown: suggestion.scoreBreakdown,
    specificEvidence: {
      relevantUndergraduateSchools,
      relevantSignaturePrograms,
      relevantExperientialOpportunities,
      relevantRankings: relevantRankings.map(formatRankingItemDisplay).filter(Boolean),
      relevantMajorRankings: majorRankings.map(formatRankingItemDisplay).filter(Boolean),
      relevantLocationAdvantages,
      relevantMajorAdvice: enrichment.majorSpecificAdvice || "",
      profileConnections,
    },
  };
}

function buildComparisonProfileConnections(profileData, majorCategory, schoolName) {
  const connections = [];
  const courseSummary = buildMajorRelevantCourseSummary(profileData, profileData.intendedMajor);
  if (courseSummary.listedRelevantCourses?.length) connections.push(`${formatList(courseSummary.listedRelevantCourses.slice(0, 3))} can support ${profileData.intendedMajor || "the intended major"} fit.`);
  const activityText = getActivityText(profileData);
  if (majorCategory === "engineeringCS" && /robot|coding|program|hardware|circuit|engineering|research/.test(activityText)) connections.push(`Technical activities can connect to engineering design, computing, research, or maker culture at ${schoolName}.`);
  if (majorCategory === "businessSocialScience" && /robot|intern|business|finance|data|lead|policy|debate/.test(activityText)) connections.push(`Activities can be framed through economics, business, operations, data, policy, or decision-making at ${schoolName}.`);
  if (majorCategory === "lifeSciencesHealth" && /health|bio|research|volunteer|hospital|science|service/.test(activityText)) connections.push(`Science, service, or research activity can support health/life-science fit at ${schoolName}.`);
  if (majorCategory === "humanitiesArtsMedia" && /film|media|write|art|design|music|theater|journal/.test(activityText)) connections.push(`Creative or communication work can support portfolio/audience fit at ${schoolName}.`);
  if (profileData.gpa || profileData.sat || profileData.act) connections.push(`Academic profile includes ${[profileData.gpa && `GPA ${profileData.gpa}`, profileData.sat && `SAT ${profileData.sat}`, profileData.act && `ACT ${profileData.act}`].filter(Boolean).join(", ")}.`);
  return dedupeStrings(connections).slice(0, 4);
}

function findSuggestedScore(schoolName) {
  const suggestionState = normalizeSuggestionState(state.suggestedSchools);
  return [...suggestionState.withinFilters, ...suggestionState.outsideFilters, ...suggestionState.partialMatches].find((item) => item.schoolName === schoolName)?.matchScore || null;
}

function buildComparisonSummary(a, b) {
  const compare = (key, delta = 5) => {
    const aScore = a.scoreBreakdown?.[key];
    const bScore = b.scoreBreakdown?.[key];
    if (!Number.isFinite(aScore) || !Number.isFinite(bScore)) return "unknown";
    if (Math.abs(aScore - bScore) < delta) return "tie";
    return aScore > bScore ? "schoolA" : "schoolB";
  };
  const programA = a.specificEvidence.relevantUndergraduateSchools.length + a.specificEvidence.relevantSignaturePrograms.length + a.specificEvidence.relevantExperientialOpportunities.length + (a.specificEvidence.relevantMajorRankings || []).length;
  const programB = b.specificEvidence.relevantUndergraduateSchools.length + b.specificEvidence.relevantSignaturePrograms.length + b.specificEvidence.relevantExperientialOpportunities.length + (b.specificEvidence.relevantMajorRankings || []).length;
  const betterProgramSpecificFit = Math.abs(programA - programB) <= 1 ? "tie" : programA > programB ? "schoolA" : "schoolB";
  const overallDiff = (a.scoreBreakdown?.finalScore || 0) - (b.scoreBreakdown?.finalScore || 0);
  return {
    betterAcademicFit: compare("academicFit"),
    betterMajorFit: compare("majorFit"),
    betterPreferenceFit: compare("preferenceFit"),
    betterCostResidencyFit: compare("costResidencyFit"),
    betterProgramSpecificFit,
    overallLeaning: Math.abs(overallDiff) < 4 ? "tie" : overallDiff > 0 ? "schoolA" : "schoolB",
    specificProgramReasons: dedupeStrings([evidenceSentence(a), evidenceSentence(b)]).filter(Boolean),
    profileSpecificReasons: dedupeStrings([...a.specificEvidence.profileConnections, ...b.specificEvidence.profileConnections]).slice(0, 4),
    tradeoffs: dedupeStrings([...a.tradeoffs.slice(0, 2), ...b.tradeoffs.slice(0, 2)]).slice(0, 4),
    dataLimitations: dedupeStrings([...a.dataNotes, ...b.dataNotes]).slice(0, 3),
  };
}

function evidenceSentence(item) {
  const names = getCompactProgramEvidence(item, 3);
  if (names.length) return `${item.name}: ${formatList(names)}.`;
  if (item.specificEvidence.relevantMajorRankings?.length) return `${item.name}: ${formatList(item.specificEvidence.relevantMajorRankings.slice(0, 2))}.`;
  return "";
}

function getComparisonProfileLabel(profileData) {
  return profileData.intendedMajor ? `${profileData.intendedMajor} profile` : "current profile";
}

function cleanComparisonTradeoff(line) {
  return cleanComparisonLine(line)
    .replace(/^the intended major is not one of the strongest programs currently listed in the app's school profile for ([^.]+)\./i, "An intended major is not selected, so program-specific comparison is limited for $1.")
    .replace(/\.?\s*That does not mean the school is a bad option, but this report has less evidence of program-specific fit from the current school data\.?/gi, ". Program-specific data is more limited in current Collegia data.")
    .replace(/^Main tradeoff:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function generateComparisonRecommendation(comparisonData, profileData, preferences) {
  const { schoolA, schoolB, comparisonSummary } = comparisonData;
  const leaning = comparisonSummary.overallLeaning;
  const programLean = comparisonSummary.betterProgramSpecificFit;
  const winner = leaning === "schoolA" ? schoolA : leaning === "schoolB" ? schoolB : programLean === "schoolA" ? schoolA : programLean === "schoolB" ? schoolB : null;
  const other = winner?.schoolId === schoolA.schoolId ? schoolB : winner?.schoolId === schoolB.schoolId ? schoolA : null;
  const profileLabel = getComparisonProfileLabel(profileData);
  const opening = leaning === "tie" && winner
    ? `This comparison is close overall for the ${profileLabel}, with ${winner.name} showing a stronger program-specific edge in current Collegia data.`
    : winner
    ? `${winner.name} looks like the stronger fit for the ${profileLabel} based on current Collegia data.`
    : `This comparison looks close for the ${profileLabel} based on current Collegia data.`;
  const evidence = winner ? buildWinnerEvidenceSentence(winner, other, profileData) : buildTieEvidenceSentence(schoolA, schoolB);
  const profileReason = comparisonSummary.profileSpecificReasons[0] || "";
  const usefulTradeoff = comparisonSummary.tradeoffs.find((item) => !/course rigor details are limited/i.test(item)) || comparisonSummary.tradeoffs[0];
  const tradeoff = usefulTradeoff ? `Main tradeoff: ${cleanComparisonTradeoff(usefulTradeoff)}` : `The main tradeoff is preference fit, cost, and campus environment; verify each school against what matters most before deciding.`;
  const limitation = comparisonSummary.dataLimitations[0] ? `This comparison is limited by available app data: ${comparisonSummary.dataLimitations[0]}` : "";
  return [opening, evidence, profileReason, tradeoff, limitation, `Disclaimer: ${DISCLAIMER_TEXT}`].filter(Boolean).join(" ");
}

function generateShortComparisonRecommendation(firstSchool, secondSchool, profileData, preferences) {
  const comparisonData = buildCompactSchoolComparison(profileData, preferences, firstSchool, secondSchool);
  const { schoolA, schoolB, comparisonSummary } = comparisonData;
  const programLean = comparisonSummary.betterProgramSpecificFit;
  const scoreLean = comparisonSummary.overallLeaning;
  const winner = scoreLean === "schoolA" ? schoolA : scoreLean === "schoolB" ? schoolB : programLean === "schoolA" ? schoolA : programLean === "schoolB" ? schoolB : null;
  const other = winner?.schoolId === schoolA.schoolId ? schoolB : winner?.schoolId === schoolB.schoolId ? schoolA : null;
  const profileLabel = getComparisonProfileLabel(profileData);
  const opener = winner
    ? `${winner.name} looks like the stronger fit for the ${profileLabel} based on current Collegia data.`
    : `This comparison looks close for the ${profileLabel} based on current Collegia data.`;
  const evidence = winner ? buildWinnerEvidenceSentence(winner, other, profileData) : buildTieEvidenceSentence(schoolA, schoolB);
  const tradeoff = cleanComparisonTradeoff((winner?.tradeoffs || comparisonSummary.tradeoffs || []).find((item) => !/course rigor details/i.test(item)) || comparisonSummary.tradeoffs?.[0] || "The deciding factor may be cost, location, and campus environment.");
  return `${opener} ${evidence} Main tradeoff: ${tradeoff} Disclaimer: ${DISCLAIMER_TEXT}`;
}

function buildWinnerEvidenceSentence(winner, other, profileData) {
  const programs = getCompactProgramEvidence(winner, 3);
  const rankings = (winner.specificEvidence.relevantMajorRankings || []).slice(0, 2);
  if (programs.length && rankings.length) return `${winner.name} has more specific evidence for ${profileData.intendedMajor || "the major"}, including ${formatList(programs)} and verified context such as ${formatList(rankings)}; rankings are program-strength context, not admissions probability.`;
  if (programs.length) return `${winner.name} has more specific program evidence for ${profileData.intendedMajor || "the major"}, including ${formatList(programs)}${other ? `, compared with less specific current data for ${other.name}` : ""}.`;
  if (rankings.length) return `${winner.name} has stronger verified ranking context for this major area, including ${formatList(rankings)}, but rankings should not be treated as admissions probability.`;
  return `${winner.name} scores better across the current major, academic, preference, and cost/residency signals in Collegia.`;
}

function buildTieEvidenceSentence(schoolA, schoolB) {
  const aEvidence = evidenceSentence(schoolA);
  const bEvidence = evidenceSentence(schoolB);
  if (aEvidence || bEvidence) return `Both schools have useful evidence: ${[aEvidence, bEvidence].filter(Boolean).join(" ")}`;
  return `Neither school has a decisive advantage from the current program-specific data, so preference fit and cost may drive the decision.`;
}

function generateSuggestedSchools(profileData, collegePreferences, schoolList) {
  const preferences = { ...DEFAULT_COLLEGE_PREFERENCES, ...(collegePreferences || {}) };
  const weights = adjustedSuggestedWeights(preferences);
  const scored = schoolList.map((school) => scoreSuggestedSchool(profileData, preferences, school, weights));
  const withinAll = scored.filter((suggestion) => suggestion.hardFilterMatch !== false)
    .sort((a, b) => b.matchScore - a.matchScore);
  const withinFilters = withinAll.filter((suggestion) => suggestion.matchScore >= 50).slice(0, 10);
  const partialMatches = withinAll.filter((suggestion) => suggestion.matchScore < 50).slice(0, 6);
  const outsideFilters = withinAll.length > 0 && withinFilters.length < 3
    ? getOutsideFilterStrongFits(profileData, preferences, schoolList, scored.filter((suggestion) => suggestion.hardFilterMatch === false), weights)
    : [];
  return {
    withinFilters,
    outsideFilters,
    partialMatches,
    emptyMessage: withinAll.length ? "" : "No schools match your selected hard filters. Try expanding your region, state, or public/private preference.",
    generated: true,
  };
}

function adjustedSuggestedWeights(preferences) {
  const weights = { ...suggestedSchoolWeights };
  if (preferences.rankingsImportance === "High") weights.rankingsContextFit += 0.06;
  if (preferences.costSensitivity === "High") weights.costResidencyFit += 0.07;
  if (preferences.majorStrengthImportance === "High") weights.majorFit += 0.08;
  if (preferences.internshipCoopImportance === "High") weights.opportunitiesFit += 0.06;
  if (preferences.researchImportance === "High" || preferences.entrepreneurshipImportance === "High" || preferences.honorsProgramsImportance === "High") weights.opportunitiesFit += 0.03;
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  return Object.fromEntries(Object.entries(weights).map(([key, value]) => [key, value / total]));
}

function getMatchLevel(score) {
  if (score >= 85) return "Strong Match";
  if (score >= 70) return "Good Match";
  if (score >= 50) return "Partial Match";
  if (score >= 30) return "Weak Match";
  return "Poor Fit";
}

function analyzeHardFilters(school, preferences) {
  const missed = [];
  const matched = [];
  const preferredRegions = normalizeAnyArray(preferences.preferredRegions);
  const states = normalizeAnyArray(preferences.preferredStates);
  if (preferredRegions.length) {
    if (preferredRegions.some((region) => schoolMatchesPreferredRegion(school, region))) matched.push("Selected region");
    else missed.push(`outside your selected ${formatList(preferredRegions)} region preference`);
  }
  if (states.length) {
    if (states.includes(school.state)) matched.push("Selected state");
    else missed.push(`outside your selected ${formatList(states)} state preference`);
  }
  if (preferences.publicPrivatePreference && preferences.publicPrivatePreference !== "Any") {
    if (school.type === preferences.publicPrivatePreference) matched.push(`${preferences.publicPrivatePreference} school`);
    else missed.push(`does not match your ${preferences.publicPrivatePreference.toLowerCase()} school filter`);
  }
  return { passes: missed.length === 0, matched, missed, tradeoffs: missed.map((item) => `${school.name} is ${item}.`) };
}

function getOutsideFilterStrongFits(profileData, preferences, schoolList, excludedSuggestions, weights) {
  return excludedSuggestions
    .filter((suggestion) => {
      const breakdown = suggestion.scoreBreakdown || {};
      const hasTopProgramContext = (suggestion.relevantRankings || []).some((item) => /#1|#2|#3|#4|#5/.test(item));
      return suggestion.scoreBeforeHardFilterPenalty >= 76 &&
        (breakdown.majorFit >= 85 || (breakdown.academicFit >= 85 && breakdown.majorFit >= 75) || hasTopProgramContext);
    })
    .sort((a, b) => b.scoreBeforeHardFilterPenalty - a.scoreBeforeHardFilterPenalty)
    .slice(0, 2)
    .map((suggestion) => ({
      ...suggestion,
      matchScore: Math.min(suggestion.matchScore, 84),
      matchLevel: "Strong Fit Outside Filters",
      tradeoffs: dedupeStrings([
        ...(suggestion.hardFilterMisses || []).map((miss) => `Strong fit, but ${miss}.`),
        ...(suggestion.tradeoffs || []).filter((tradeoff) => !(suggestion.hardFilterMisses || []).some((miss) => normalizeText(tradeoff).includes(normalizeText(miss)))),
      ]).slice(0, 4),
    }));
}

function scoreSuggestedSchool(profileData, preferences, school, weights) {
  const schoolProfile = getSchoolProfile(school.name);
  const campusMetrics = school.schoolMetrics?.campus || {};
  const majorCategory = getMajorCategory(profileData.intendedMajor);
  const enrichment = getRelevantSchoolEnrichment(schoolProfile, profileData.intendedMajor, majorCategory);
  const majorAlignment = getMajorSchoolFitAlignment(profileData.intendedMajor, majorCategory, schoolProfile);
  const academic = calculateAcademicRangeFit(profileData, school);
  const preference = calculatePreferenceFit(preferences, school, profileData);
  const environment = calculateEnvironmentFit(preferences, school);
  const cost = calculateCostResidencyFit(profileData, preferences, school);
  const hardFilters = analyzeHardFilters(school, preferences);
  const overallRanking = getVerifiedOverallRanking({ ...schoolProfile, schoolMetrics: school.schoolMetrics });
  const majorRankings = getRelevantMajorRankings({ ...schoolProfile, schoolMetrics: school.schoolMetrics }, profileData.intendedMajor, majorCategory);
  const campusLifeRankings = getRelevantCampusLifeRankings({ ...schoolProfile, schoolMetrics: school.schoolMetrics }, preferences);
  const rankings = [
    ...majorRankings,
    ...campusLifeRankings,
    overallRanking,
    ...getRelevantRankings(schoolProfile, profileData.intendedMajor).filter((item) => item.displayText && item.verified === true),
  ].filter(Boolean).slice(0, 3);
  const opportunities = calculateOpportunitiesFit(preferences, school, schoolProfile, enrichment);
  const rankingsScore = rankings.length ? ((["engineeringCS", "businessSocialScience", "lifeSciencesHealth", "humanitiesArtsMedia"].includes(majorCategory)) && majorRankings.length ? 86 : campusLifeRankings.length ? 76 : preferences.rankingsImportance === "High" ? 82 : 70) : 48;
  const majorScore = majorAlignment.alignmentLevel === "strong" ? 90 : majorAlignment.alignmentLevel === "partial" ? 72 : majorAlignment.alignmentLevel === "limited" ? 42 : 55;
  const softMissCount = [preference, environment, cost, opportunities].reduce((total, item) => total + (item.tradeoffs || []).length, 0);
  const softPenalty = softMissCount >= 5 ? 12 : softMissCount >= 3 ? 7 : softMissCount >= 2 ? 3 : 0;
  let rawScore =
    majorScore * weights.majorFit +
    academic.score * weights.academicFit +
    preference.score * weights.preferenceFit +
    environment.score * weights.schoolEnvironmentFit +
    cost.score * weights.costResidencyFit +
    rankingsScore * weights.rankingsContextFit +
    opportunities.score * weights.opportunitiesFit;
  let matchScore = clampScore(rawScore - softPenalty);
  const capsApplied = [];
  if (majorScore < 25 && matchScore > 45) { matchScore = 45; capsApplied.push("Major fit below 25 capped score at 45."); }
  else if (majorScore < 40 && matchScore > 55) { matchScore = 55; capsApplied.push("Major fit below 40 capped score at 55."); }
  if (academic.score < 35 && school.acceptance <= 15 && matchScore > 60) { matchScore = 60; capsApplied.push("Academic fit below 35 at a highly selective school capped score at 60."); }
  const relevantPrograms = dedupeStrings([
    ...(enrichment.relevantUndergraduateSchools || []).map((item) => item.name),
    ...(enrichment.relevantSignaturePrograms || []).map((item) => item.name),
    ...(enrichment.relevantExperientialOpportunities || []).map((item) => item.name),
  ]).slice(0, 5);
  const categoryTags = dedupeStrings([
    school.region,
    school.type,
    school.size < 8000 ? "Small" : school.size < 20000 ? "Medium" : "Large",
    ...majorAlignment.matchedStrengths.slice(0, 3),
    ...(campusMetrics.campusTags || []).slice(0, 4),
    ...preference.tags,
  ]).slice(0, 7);
  const fitReasons = dedupeStrings([
    hardFilters.passes ? "" : `Outside strict filters: ${formatList(hardFilters.missed)}.`,
    majorAlignment.majorFitSummary,
    campusContextReason(school),
    ...academic.reasons,
    ...preference.reasons,
    ...environment.reasons,
    ...cost.reasons,
    ...opportunities.reasons,
  ]).filter(Boolean).slice(0, 5);
  const tradeoffs = dedupeStrings([
    ...hardFilters.tradeoffs,
    majorAlignment.missingOrWeakFitNote,
    ...academic.tradeoffs,
    ...preference.tradeoffs,
    ...cost.tradeoffs,
    ...opportunities.tradeoffs,
    ...capsApplied,
  ]).filter(Boolean).slice(0, 3);
  const dataNotes = [];
  if (!school.satRange || school.satRange === "See CDS") dataNotes.push("Some academic range data is missing, so the academic match is less specific.");
  return {
    schoolName: school.name,
    matchScore,
    scoreBeforeHardFilterPenalty: clampScore(rawScore),
    matchLevel: getMatchLevel(matchScore),
    hardFilterMatch: hardFilters.passes,
    hardFilterMisses: hardFilters.missed,
    fitReasons,
    tradeoffs,
    dataNotes,
    categoryTags,
    relevantRankings: rankings.map(formatRankingItemDisplay).filter(Boolean),
    relevantPrograms,
    academicRangeNote: academic.note,
    majorFitNote: majorAlignment.majorFitSummary,
    preferenceFitNote: preference.note,
    scoreBreakdown: {
      majorFit: majorScore,
      academicFit: academic.score,
      preferenceFit: preference.score,
      schoolEnvironmentFit: environment.score,
      costResidencyFit: cost.score,
      rankingsContextFit: rankingsScore,
      opportunitiesFit: opportunities.score,
      penalties: softPenalty,
      capsApplied,
      finalScore: matchScore,
    },
    addToMyListAvailable: true,
  };
}

function calculateAcademicRangeFit(profileData, schoolData) {
  const policy = schoolData.testingPolicy || "Unknown";
  const sat = compareSATToSchool(profileData.sat, schoolData.satMiddle50 || schoolData.satRange);
  const act = compareACTToSchool(profileData.act, schoolData.actMiddle50 || schoolData.actRange);
  const rigor = evaluateCourseRigor(profileData, profileData.intendedMajor);
  const reasons = [];
  const tradeoffs = [];
  let score = 55;
  if (/Blind|Not Considered/i.test(policy)) {
    reasons.push("Testing should not drive this school-specific academic read because the app data marks test scores as not considered.");
    score += profileData.gpa ? 10 : 0;
  } else {
    const best = sat.status !== "missing" ? sat : act;
    if (best.status === "above") { score += 25; reasons.push(best.note); }
    else if (best.status === "within") { score += 15; reasons.push(best.note); }
    else if (best.status === "below") { score -= 8; tradeoffs.push(best.note); }
  }
  if (profileData.gpa) {
    const gpa = Number(profileData.gpa);
    if (gpa >= 3.8) { score += 10; reasons.push(`A ${profileData.gpa} GPA is a strong baseline academic signal.`); }
    else if (gpa >= 3.4) score += 4;
  } else {
    tradeoffs.push("GPA is missing, so the academic range fit is less specific.");
  }
  if (profileData.classRank) reasons.push(`Class rank/context is listed as ${profileData.classRank}.`);
  if (rigor.score >= 75) reasons.push(`Course rigor appears strong: ${rigor.summary.replace(/\.$/, "")}.`);
  else tradeoffs.push("Course rigor details are limited; adding AP/IB/Honors/Dual Enrollment courses would improve the recommendation.");
  return {
    score: clampScore(score),
    reasons,
    tradeoffs,
    note: reasons.find((item) => /SAT|ACT|test/i.test(item)) || `Academic fit uses GPA, rigor, rank, and available testing ranges without estimating admissions probability.`,
  };
}

function calculatePreferenceFit(preferences, school, profileData = {}) {
  const reasons = [];
  const tradeoffs = [];
  const tags = [];
  let score = 55;
  const size = school.size < 8000 ? "Small" : school.size < 20000 ? "Medium" : "Large";
  if (preferences.schoolSizePreference && preferences.schoolSizePreference !== "Any") {
    if (size === preferences.schoolSizePreference) { score += 10; reasons.push(`Its ${size.toLowerCase()} undergraduate size matches the preference.`); }
    else { score -= 12; tradeoffs.push(`Its ${size.toLowerCase()} undergraduate size may not match the selected size preference.`); }
  }
  const distance = calculateDistancePreferenceMatch(school, preferences, profileData);
  score += distance.delta;
  reasons.push(...distance.reasons);
  tradeoffs.push(...distance.tradeoffs);
  if (distance.tag) tags.push(distance.tag);
  return { score: clampScore(score), reasons, tradeoffs, tags, note: reasons[0] || "Preference fit is based on selected school size and distance preferences." };
}

function calculateDistancePreferenceMatch(school, preferences, profileData = {}) {
  const choice = preferences.distanceFromHomePreference || "Any";
  if (!choice || choice === "Any" || choice === "No preference") return { delta: 0, reasons: [], tradeoffs: [], tag: "" };
  const homeState = inferProfileState(profileData);
  if (!homeState) {
    return {
      delta: 0,
      reasons: [],
      tradeoffs: ["Add your location in My Profile to use distance-based suggestions."],
      tag: "",
    };
  }
  const sameState = normalizeText(homeState) === normalizeText(school.state);
  const homeRegion = inferRegionFromState(homeState);
  const sameRegion = homeRegion && school.region === homeRegion;
  const nearby = sameState || sameRegion || NEARBY_STATES[homeState]?.includes(school.state);
  if (choice === "Close to home") {
    if (sameState || nearby) return { delta: 10, reasons: [`${school.name} appears close to home based on state/region approximation.`], tradeoffs: [], tag: "Distance fit" };
    return { delta: -12, reasons: [], tradeoffs: [`${school.name} may not match the close-to-home preference based on state/region approximation.`], tag: "" };
  }
  if (choice === "Driving distance") {
    if (nearby) return { delta: 8, reasons: [`${school.name} appears within driving-distance logic based on nearby state/region approximation.`], tradeoffs: [], tag: "Distance fit" };
    return { delta: -10, reasons: [], tradeoffs: [`${school.name} may be outside a practical driving-distance preference; exact distance data is not available.`], tag: "" };
  }
  if (choice === "Far from home") {
    if (!sameRegion) return { delta: 8, reasons: [`${school.name} matches the far-from-home preference by being outside the home region.`], tradeoffs: [], tag: "Distance fit" };
    return { delta: -8, reasons: [], tradeoffs: [`${school.name} is in the home region, so it may not match the far-from-home preference.`], tag: "" };
  }
  if (choice === "Out of state") {
    if (!sameState) return { delta: 8, reasons: [`${school.name} matches the out-of-state preference.`], tradeoffs: [], tag: "Distance fit" };
    return { delta: -10, reasons: [], tradeoffs: [`${school.name} is in the student's home state, so it does not match the out-of-state preference.`], tag: "" };
  }
  return { delta: 0, reasons: [], tradeoffs: [], tag: "" };
}

function inferProfileState(profileData = {}) {
  if (profileData.stateResidency) return profileData.stateResidency;
  const location = String(profileData.location || "");
  const parts = location.split(",").map((part) => part.trim()).filter(Boolean);
  const tail = parts.at(-1) || "";
  if (US_STATES.includes(tail)) return tail;
  const stateFromAbbrev = STATE_NAMES[tail.toUpperCase()];
  if (stateFromAbbrev) return stateFromAbbrev;
  return US_STATES.find((stateName) => normalizeText(location).includes(normalizeText(stateName))) || "";
}

function inferRegionFromState(stateName) {
  const sampleSchool = schools.find((school) => normalizeText(school.state) === normalizeText(stateName));
  if (sampleSchool) return sampleSchool.region;
  if (["Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania"].includes(stateName)) return "Northeast";
  if (["California", "Washington", "Oregon"].includes(stateName)) return "West";
  if (["Illinois", "Michigan", "Wisconsin", "Indiana", "Ohio"].includes(stateName)) return "Midwest";
  if (["Texas", "Florida", "Georgia", "North Carolina", "Virginia", "Tennessee", "Louisiana"].includes(stateName)) return "South";
  return "";
}

function calculateEnvironmentFit(preferences, school) {
  const reasons = [];
  const tradeoffs = [];
  let score = 55;
  const campusMetrics = school.schoolMetrics?.campus || {};
  const campusTags = campusMetrics.campusTags || [];
  const settingPrefs = normalizeAnyArray(preferences.urbanSuburbanRural);
  const settingText = `${campusMetrics.setting || ""} ${school.campus || ""} ${school.blurb || ""} ${campusTags.join(" ")}`.toLowerCase();
  if (settingPrefs.length) {
    const matched = settingPrefs.some((pref) => {
      const key = pref.toLowerCase();
      return settingText.includes(key) || settingText.includes(key.replace("college town", "college-town"));
    });
    if (matched) { score += 16; reasons.push("Campus setting appears to match the selected setting preferences."); }
    else { score -= 16; tradeoffs.push("Campus setting may not match the selected setting preferences."); }
  }
  const vibeMatches = matchVibePreferences(preferences.campusVibe || [], school);
  const selectedVibes = normalizeAnyArray(preferences.campusVibe);
  score += Math.min(20, vibeMatches.length * 5);
  reasons.push(...vibeMatches.slice(0, 3).map((tag) => `${school.name} has a ${tag.toLowerCase()} signal in the current app data.`));
  if (selectedVibes.length && !vibeMatches.length) {
    score -= 10;
    tradeoffs.push("The selected campus vibe is not strongly visible in the current school data.");
  }
  const climatePrefs = normalizeAnyArray(preferences.climatePreference);
  const climateTags = campusMetrics.climateTags || inferClimateTags(school.location, school.region, school.campus);
  if (climatePrefs.length && climatePrefs.some((pref) => climateTags.includes(pref))) {
    score += 7;
    reasons.push("Climate tags appear to match the selected preference.");
  } else if (climatePrefs.length) {
    score -= 8;
    tradeoffs.push(`Climate does not clearly match the selected ${formatList(climatePrefs)} preference.`);
  }
  if (preferences.sportsImportance === "High" && /NCAA Division I|Big Ten|SEC|ACC|Big 12|Ivy League/i.test(school.sports || "")) {
    score += 6;
    reasons.push("Sports/school-spirit context appears relevant from the app data.");
  }
  if (preferences.campusSafetyImportance === "High") {
    if (campusMetrics.safetyContext) {
      score += 5;
      reasons.push(`Campus safety context is listed as: ${campusMetrics.safetyContext}.`);
    } else {
      tradeoffs.push("Campus safety importance is high, but verified safety context is limited in the current app data.");
    }
  }
  if (preferences.qualityOfLifeImportance === "High" && (campusMetrics.qualityOfLifeTags || []).length) {
    score += 5;
    reasons.push(`Quality-of-life context includes ${formatList((campusMetrics.qualityOfLifeTags || []).slice(0, 2))}.`);
  }
  return { score: clampScore(score), reasons, tradeoffs };
}

function calculateRegionMatch(school, preferences) {
  const selected = normalizeAnyArray(preferences.preferredRegions);
  const matched = selected.filter((region) => schoolMatchesPreferredRegion(school, region));
  const missed = selected.filter((region) => !schoolMatchesPreferredRegion(school, region));
  return { score: selected.length ? (matched.length ? 100 : 0) : 60, matched, missed, tradeoffs: missed.map((region) => `Outside selected ${region} region.`) };
}

function calculateSettingMatch(school, preferences) {
  const selected = normalizeAnyArray(preferences.urbanSuburbanRural);
  const campus = school.schoolMetrics?.campus || {};
  const text = `${campus.setting || ""} ${school.campus || ""} ${(campus.campusTags || []).join(" ")}`.toLowerCase();
  const matched = selected.filter((pref) => text.includes(pref.toLowerCase()) || text.includes(pref.toLowerCase().replace("college town", "college-town")));
  const missed = selected.filter((pref) => !matched.includes(pref));
  return { score: selected.length ? (matched.length ? 88 : 35) : 60, matched, missed, tradeoffs: missed.map((pref) => `Does not clearly match ${pref.toLowerCase()} setting preference.`) };
}

function calculateClimateMatch(school, preferences) {
  const selected = normalizeAnyArray(preferences.climatePreference);
  const campus = school.schoolMetrics?.campus || {};
  const tags = campus.climateTags || inferClimateTags(school.location, school.region, school.campus);
  const matched = selected.filter((pref) => tags.includes(pref));
  const missed = selected.filter((pref) => !tags.includes(pref));
  return { score: selected.length ? (matched.length ? 85 : 40) : 60, matched, missed, tradeoffs: missed.map((pref) => `Does not clearly match ${pref.toLowerCase()} climate preference.`) };
}

function calculateCampusVibeMatch(school, preferences) {
  const selected = normalizeAnyArray(preferences.campusVibe);
  const matched = matchVibePreferences(selected, school);
  const missed = selected.filter((pref) => !matched.includes(pref));
  return { score: selected.length ? (matched.length ? 70 + Math.min(20, matched.length * 5) : 35) : 60, matched, missed, tradeoffs: missed.map((pref) => `${pref} is not strongly visible in the current school data.`) };
}

function calculateCostResidencyMatch(school, preferences, profileData) {
  const fit = calculateCostResidencyFit(profileData, preferences, school);
  return { score: fit.score, matched: fit.reasons, missed: [], tradeoffs: fit.tradeoffs };
}

function calculateOpportunitiesMatch(school, preferences, profileData) {
  const schoolProfile = getSchoolProfile(school.name);
  const enrichment = getRelevantSchoolEnrichment(schoolProfile, profileData.intendedMajor, getMajorCategory(profileData.intendedMajor));
  const fit = calculateOpportunitiesFit(preferences, school, schoolProfile, enrichment);
  return { score: fit.score, matched: fit.reasons, missed: [], tradeoffs: fit.tradeoffs };
}

function calculateCostResidencyFit(profileData, preferences, school) {
  const reasons = [];
  const tradeoffs = [];
  let score = 60;
  const sensitivity = preferences.costSensitivity || "Medium";
  const inState = profileData.stateResidency && school.state && normalizeText(profileData.stateResidency) === normalizeText(school.state);
  if (school.type === "Public" && inState) {
    score += sensitivity === "High" ? 24 : 14;
    reasons.push("This is an in-state public option, so cost/residency context may be more favorable.");
  } else if (school.type === "Public" && profileData.stateResidency && !inState) {
    if (sensitivity === "High") score -= 18;
    tradeoffs.push(`As an out-of-state public university for a ${profileData.stateResidency} resident, cost and selectivity may need extra attention.`);
  } else if (school.type === "Private" && sensitivity === "High") {
    score -= 4;
    tradeoffs.push("Private college cost will depend heavily on net price and financial aid; verify with each school's calculator.");
  }
  if (preferences.financialAidImportance === "High") {
    tradeoffs.push("Financial aid importance is high, but net price data is not yet verified in the app for this school.");
  }
  return { score: clampScore(score), reasons, tradeoffs };
}

function calculateOpportunitiesFit(preferences, school, schoolProfile, enrichment) {
  const reasons = [];
  const tradeoffs = [];
  let score = 55;
  const campusMetrics = school.schoolMetrics?.campus || {};
  const text = `${school.blurb} ${schoolProfile.institutionalPersonality || ""} ${(campusMetrics.campusTags || []).join(" ")} ${(campusMetrics.locationAdvantages || []).join(" ")} ${JSON.stringify(enrichment)}`.toLowerCase();
  const checks = [
    [preferences.researchImportance, /research|lab|assistantship|science|medical|public health/, "research opportunities"],
    [preferences.internshipCoopImportance, /co-op|internship|urban|industry|network|city|seattle|boston|atlanta|new york|los angeles|dc|silicon valley/, "internship, co-op, or location-based opportunities"],
    [preferences.honorsProgramsImportance, /honors|barrett|residential college/, "honors or residential academic pathways"],
    [preferences.entrepreneurshipImportance, /entrepreneur|startup|innovation|create-x|business|venture/, "entrepreneurship or innovation context"],
    [preferences.studyAbroadImportance, /global|international|study abroad/, "global or international context"],
    [preferences.diversityImportance, /urban|public mission|community|global|large/, "broad community or diversity context"],
  ];
  checks.forEach(([importance, regex, label]) => {
    if (importance !== "High") return;
    if (regex.test(text)) {
      score += 8;
      reasons.push(`The app data includes ${label}.`);
    } else {
      tradeoffs.push(`${label[0].toUpperCase()}${label.slice(1)} are not strongly documented in the current app data.`);
    }
  });
  return { score: clampScore(score), reasons, tradeoffs };
}

function campusContextReason(school) {
  const campus = school.schoolMetrics?.campus || {};
  const pieces = dedupeStrings([...(campus.campusTags || []), ...(campus.locationAdvantages || [])]).slice(0, 3);
  if (!pieces.length) return "";
  return `${school.name} also offers context such as ${formatList(pieces)}.`;
}

function renderDetail(school) {
  const saved = isSchoolSaved(school);
  const sections = [
    ["snapshot", "Snapshot"],
    ["testing", "Testing"],
    ["factors", "Factors"],
    ["applications", "Applications"],
    ["campus", "Campus"],
    ["athletics", "Athletics"],
    ["sources", "Sources"],
  ];
  return `
    <article class="modal-content">
      <div class="detail-hero" data-school-banner="${school.id}" style="background-image: linear-gradient(0deg, rgba(8,17,20,.76), rgba(8,17,20,.16)), url('${campusImage(school, true)}')">
        <div class="detail-hero-inner">
          <button class="btn" data-close style="margin-bottom:16px">Close</button>
          <button class="btn ${saved ? "ghost" : "primary"}" data-save="${school.id}" style="margin-bottom:16px">${saved ? "Remove from My List" : "Add to My List"}</button>
          <h2>${school.name}</h2>
          <p>${school.location} &middot; ${school.type} &middot; ${formatSize(school.size)} undergraduates</p>
          <div class="detail-jump">${sections.map(([id, label]) => `<button class="btn ghost" data-jump="${id}">${label}</button>`).join("")}</div>
        </div>
      </div>
      <div class="detail-shell">
        <aside class="detail-nav panel">
          ${sections.map(([id, label]) => `<button class="detail-nav-link" data-jump="${id}">${label}</button>`).join("")}
        </aside>
        <div class="detail-main">
          <div class="stats">
            <div class="stat"><b>${school.acceptance}%</b><span>Acceptance rate</span></div>
            <div class="stat"><b>${school.satRange}</b><span>Middle 50% SAT</span></div>
            <div class="stat"><b>${school.region}</b><span>Region</span></div>
          </div>
          <section class="panel detail-panel detail-section" id="section-snapshot">
            <h3>School Snapshot</h3>
            <p class="muted">${school.blurb}</p>
            <div class="stats">
              <div class="stat"><b>${school.acceptance}%</b><span>Acceptance</span></div>
              <div class="stat"><b>${school.satRange}</b><span>SAT 25th-75th</span></div>
              <div class="stat"><b>${satMidpoint(school.satRange)}</b><span>SAT midpoint</span></div>
              <div class="stat"><b>${school.actRange}</b><span>ACT 25th-75th</span></div>
              <div class="stat"><b>${formatSize(school.size)}</b><span>Undergrads</span></div>
              <div class="stat"><b>${school.type}</b><span>Control</span></div>
            </div>
          </section>
          <section class="panel detail-panel detail-section" id="section-testing">
            <h3>Testing</h3>
            <p class="muted">Middle 50% testing ranges from the current dataset seed. This view is designed to be replaced directly from each school-specific CDS once we parse the documents.</p>
            <div class="score-chart">
              ${scoreBar("SAT", school.satRange, 400, 1600)}
              ${scoreBar("ACT", school.actRange, 1, 36)}
            </div>
          </section>
          <section class="panel detail-panel detail-section" id="section-factors">
          <h3>Admissions Factors</h3>
          <p class="muted">Expandable Common Data Set factor groups. UC campuses are shown test-blind; public flagships emphasize residency where reported.</p>
          ${renderFactorDetails(school, "ACADEMIC", "Academic Factors", true)}
          ${renderFactorDetails(school, "NONACADEMIC", "Nonacademic Factors", false)}
        </section>
          <section class="panel detail-panel detail-section" id="section-applications">
            <h3>Application Cycles</h3>
            <p class="muted">${school.applicationCycles}</p>
            <div class="chips">${applicationPlanChips(school.applicationCycles).map((plan) => `<span class="chip">${plan}</span>`).join("")}</div>
          </section>
          <section class="panel detail-panel detail-section" id="section-campus">
            <h3>Campus</h3>
            <p class="muted">${school.campus}. ${school.name} enrolls about ${formatSize(school.size)} undergraduates and is located in ${school.location}. Use this section to compare setting, scale, and day-to-day environment as CDS details are added.</p>
          </section>
          <section class="panel detail-panel detail-section" id="section-athletics">
            <h3>Athletics</h3>
            <div class="athletics-line">
              <img src="${athleticsLogo(school.sports)}" alt="" />
              <p class="muted">${school.sports}. This is useful for students weighing school spirit, varsity sports culture, conference travel, and campus event life.</p>
            </div>
          </section>
          <section class="panel detail-panel detail-section" id="section-sources">
            <h3>Sources</h3>
            <div class="source-list">${[...school.sources, { label: "Photos", url: school.photoUrl }].map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer" data-external-link>${source.label}</a>`).join("")}</div>
          </section>
        </div>
      </div>
    </article>
  `;
}

function renderFactorDetails(school, category, title, open) {
  return `
    <details class="factor-group" ${open ? "open" : ""}>
      <summary>${title}</summary>
      <table class="factor-table">
        <thead><tr><th>Factor</th><th>Importance</th></tr></thead>
        <tbody>
          ${FACTOR_ORDER.filter(([group]) => group === category).map(([, factor]) => {
            const value = school.factors[factor] || "Not Considered";
            return `<tr><td>${factor}</td><td class="importance ${importanceClass(value)}">${value}</td></tr>`;
          }).join("")}
        </tbody>
      </table>
    </details>
  `;
}

function scoreBar(label, range, min, max) {
  const [low, high] = parseRange(range);
  if (!low || !high) return `<div class="score-row"><strong>${label}</strong><span>${range}</span></div>`;
  const start = ((low - min) / (max - min)) * 100;
  const width = ((high - low) / (max - min)) * 100;
  return `
    <div class="score-row">
      <div class="score-label"><strong>${label}</strong><span>${range}</span></div>
      <div class="score-track"><span style="left:${start}%;width:${width}%"></span></div>
      <div class="score-scale"><span>${min}</span><span>${max}</span></div>
    </div>
  `;
}

function setActiveDetailSection(id) {
  document.querySelectorAll(".detail-nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.jump === id);
  });
}

function normalizeRangeInput(input) {
  const peerKey = input.dataset.rangePeer;
  if (!peerKey) return;
  const peerValue = Number(state.filters[peerKey]);
  const current = Number(input.value);
  if (input.dataset.rangeMin && current > peerValue) input.value = String(peerValue);
  if (input.dataset.rangeMax && current < peerValue) input.value = String(peerValue);
}

function updateDualRangeVisual(input) {
  const wrapper = input.closest(".dual-range");
  if (!wrapper) return;
  const inputs = [...wrapper.querySelectorAll("input[type='range']")];
  const min = Number(inputs[0].min);
  const max = Number(inputs[0].max);
  const values = inputs.map((item) => Number(item.value)).sort((a, b) => a - b);
  const left = ((values[0] - min) / (max - min)) * 100;
  const width = ((values[1] - values[0]) / (max - min)) * 100;
  wrapper.style.setProperty("--range-left", `${left}%`);
  wrapper.style.setProperty("--range-width", `${width}%`);
}

function parseRange(range) {
  return range.match(/\d+/g)?.map(Number) || [];
}

function applicationPlanChips(cycles) {
  const plans = [];
  if (/Restrictive|Single-Choice/i.test(cycles)) plans.push("REA/SCEA");
  if (/Early Decision I/i.test(cycles)) plans.push("ED I");
  else if (/Early Decision/i.test(cycles)) plans.push("ED");
  if (/Early Decision II/i.test(cycles)) plans.push("ED II");
  if (/Early Action/i.test(cycles)) plans.push("EA");
  if (/Regular/i.test(cycles)) plans.push("RD");
  if (/Rolling/i.test(cycles)) plans.push("Rolling");
  if (/UC application/i.test(cycles)) plans.push("UC App");
  return plans.length ? plans : ["See admissions site"];
}

function schoolLogo(school) {
  return `https://www.google.com/s2/favicons?domain=${new URL(school.website).hostname}&sz=256`;
}

function athleticsLogo(sports) {
  const lower = sports.toLowerCase();
  const domain =
    lower.includes("big ten") ? "bigten.org" :
    lower.includes("acc") ? "theacc.com" :
    lower.includes("ivy") ? "ivyleague.com" :
    lower.includes("sec") ? "secsports.com" :
    lower.includes("big 12") ? "big12sports.com" :
    lower.includes("big west") ? "bigwest.org" :
    lower.includes("big east") ? "bigeast.com" :
    lower.includes("uaa") ? "uaasports.info" :
    lower.includes("nescac") ? "nescac.com" :
    lower.includes("patriot") ? "patriotleague.org" :
    lower.includes("hockey east") ? "hockeyeastonline.com" :
    lower.includes("aac") ? "theamerican.org" :
    lower.includes("centennial") ? "centennial.org" :
    lower.includes("newmac") ? "newmacsports.com" :
    lower.includes("caa") ? "caasports.com" :
    "ncaa.org";
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

function renderProfile() {
  return `
    <section class="profile-layout">
      <div class="profile-grid">
        <section class="panel profile-section-card">
          <div class="section-head"><div><h2>Basic Information</h2></div></div>
          <div class="form-content compact-grid">
            ${profileInput("Name", "name", "Avery Student")}
            ${profileInput("Location", "location", "Queens, New York")}
            ${profileInput("Graduation year", "gradYear", "2027", "number")}
            ${profileSelect("State residency", "stateResidency", ["", ...US_STATES.filter((item) => item !== "All")])}
            ${profileSelect("First-generation status", "firstGeneration", ["", "No", "Yes", "Prefer not to say"])}
          </div>
          ${renderAlumniRelationsForm()}
        </section>

        <section class="panel profile-section-card">
          <div class="section-head"><div><h2>Academic Profile</h2></div></div>
          <div class="form-content compact-grid">
            ${profileInput("GPA", "gpa", "3.85")}
            ${profileInput("SAT", "sat", "1450", "number")}
            ${profileInput("ACT", "act", "33", "number")}
            ${profileInput("Class rank", "classRank", "Top 10% or 12/350", "text")}
            ${profileInput("Class size", "classSize", "350", "number")}
            ${profileTextarea("Testing notes", "testingNotes", "Optional context about testing plans or score reporting")}
          </div>
        </section>

        <section class="panel profile-section-card">
          <div class="section-head"><div><h2>Intended Major</h2><p class="muted">Search, select, or add a custom major.</p></div></div>
          <div class="form-content">
            ${majorSelector()}
          </div>
        </section>

        ${renderCollegePreferencesCard()}

        <section class="panel profile-section-card profile-card-full">
          <div class="section-head"><div><h2>Coursework & Rigor</h2><p class="muted">Add AP, IB, Honors, Dual Enrollment, and custom advanced coursework.</p></div></div>
          <div class="form-content profile-course-grid">
            ${courseChipInput("AP courses", "apCourses", AP_COURSES, "Search or add AP course")}
            ${courseChipInput("IB courses", "ibCourses", IB_COURSES, "Search or add IB course")}
            ${courseChipInput("Honors courses", "honorsCourses", [], "Add honors course")}
            ${courseChipInput("Dual Enrollment courses", "dualEnrollmentCourses", [], "Add dual enrollment course")}
            ${courseChipInput("Custom advanced courses", "customAdvancedCourses", [], "Add advanced or major-related course")}
            ${profileTextarea("Senior-year courses", "seniorYearCourses", "AP Physics C, AP Statistics, Multivariable Calculus")}
          </div>
        </section>

        <section class="panel profile-section-card profile-card-full">
          <div class="section-head"><div><h2>Activities & Experience</h2><p class="muted">Add activities, work, and service with enough detail to show evidence.</p></div></div>
          <div class="form-content profile-experience-grid">
            <form class="activity-form-grid" id="activity-form">
              ${field("Category", activitySelect())}
              ${field("Activity name / role", `<input name="title" required placeholder="Robotics team captain" />`)}
              ${field("Description / impact", `<textarea name="description" rows="4" required placeholder="What did you do, lead, create, improve, measure, or change?"></textarea>`)}
              <div class="form-action-row"><button class="btn primary" ${state.activities.length >= 10 ? "disabled" : ""}>Add Activity</button></div>
            </form>
          </div>
          <div class="profile-list-wrap">
            <div class="entry-list">${state.activities.map((a, i) => `<div class="entry"><h4>${escapeHtml(a.title)}</h4><p>${escapeHtml(a.category || "")}</p><p>${escapeHtml(a.description || "")}</p><button class="btn" data-remove-activity="${i}">Remove</button></div>`).join("") || `<div class="empty">No activities yet.</div>`}</div>
          </div>
        </section>

        <section class="panel profile-section-card profile-card-full">
          <div class="section-head"><div><h2>Awards</h2><p class="muted">Add honors, awards, recognitions, or distinctions.</p></div></div>
          <form class="form-content entry-form-grid" id="award-form">
            ${field("Award", `<input name="title" required placeholder="National Merit Commended Student" />`)}
            ${field("Level", select("level", ["School", "Regional", "State", "National", "International"], "School", true))}
            <button class="btn primary" ${state.awards.length >= 5 ? "disabled" : ""}>Add Award</button>
          </form>
          <div class="profile-list-wrap">
            <div class="entry-list">${state.awards.map((a, i) => `<div class="entry"><h4>${escapeHtml(a.title)}</h4><p>${escapeHtml(a.level || "")}</p><button class="btn" data-remove-award="${i}">Remove</button></div>`).join("") || `<div class="empty">No awards yet.</div>`}</div>
          </div>
        </section>

      </div>
    </section>
  `;
}

function renderProfilePreview() {
  return `
    <section class="panel profile-card">
      <h2>${state.profile.name || "Your Profile"}</h2>
      <p class="muted">${[state.profile.location, state.profile.gradYear && `Class of ${state.profile.gradYear}`].filter(Boolean).join(" &middot; ") || "Add your basics to personalize the app."}</p>
      <div class="stats">
        <div class="stat"><b>${state.profile.gpa || "-"}</b><span>GPA</span></div>
        <div class="stat"><b>${state.profile.sat || "-"}</b><span>SAT</span></div>
        <div class="stat"><b>${state.profile.act || "-"}</b><span>ACT</span></div>
        <div class="stat"><b>${state.profile.classRank || "-"}</b><span>Class rank</span></div>
        <div class="stat"><b>${state.profile.intendedMajor || "-"}</b><span>Major</span></div>
        <div class="stat"><b>${state.profile.stateResidency || "-"}</b><span>Residency</span></div>
      </div>
    </section>
    <section class="panel profile-card">
      <h3>Activities</h3>
      <div class="entry-list">${state.activities.map((a, i) => `<div class="entry"><h4>${a.title}</h4><p>${a.category}</p><p>${a.description}</p><button class="btn" data-remove-activity="${i}">Remove</button></div>`).join("") || `<div class="empty">No activities yet.</div>`}</div>
    </section>
    <section class="panel profile-card">
      <h3>Awards</h3>
      <div class="entry-list">${state.awards.map((a, i) => `<div class="entry"><h4>${a.title}</h4><p>${a.level}</p><button class="btn" data-remove-award="${i}">Remove</button></div>`).join("") || `<div class="empty">No awards yet.</div>`}</div>
    </section>
    <section class="panel profile-card">
      <h3>Alumni Relations</h3>
      <div class="entry-list">${getAlumniRelationsFromProfile(state.profile).map((relation, i) => `<div class="entry"><h4>${escapeHtml(relation.institutionName)}</h4><p>${escapeHtml(relation.relationshipType)}</p><button class="btn" data-remove-alumni="${i}">Remove</button></div>`).join("") || `<div class="empty">No alumni relation.</div>`}</div>
    </section>
  `;
}

function renderAlumniRelationsForm() {
  const relations = getAlumniRelationsFromProfile(state.profile);
  return `
    <div class="alumni-box">
      <div class="alumni-head">
        <h3>No alumni relation</h3>
        <p class="muted">${relations.length ? `${relations.length} alumni relation${relations.length === 1 ? "" : "s"} listed.` : "Add one only when it applies to a specific institution."}</p>
        <button class="btn" data-clear-alumni type="button">No alumni relation</button>
      </div>
      <form class="form-content compact-grid" id="alumni-form">
        ${field("Institution", `<input name="institutionName" placeholder="University of Michigan or UMich" />`)}
        ${field("Relationship type", select("relationshipType", ["Parent", "Grandparent", "Sibling", "Aunt/Uncle", "Cousin", "Other relative", "Other"], "Parent", true))}
        <button class="btn primary">Add alumni relation</button>
      </form>
    </div>
  `;
}

function renderReviewer() {
  const school = getReviewerSchool();
  const profileData = getProfileData();
  const schoolProfile = getSchoolProfile(school.name);
  const scoringResults = scoreApplicantForSchool(profileData, school);
  const reportContext = buildCompactReportContext(profileData, schoolProfile, scoringResults);
  const importanceSlices = getImportanceSlices(scoringResults);
  const savedSchools = getSavedSchools();
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Profile reviewer</div>
        <h1>Turn your application pieces into a clearer story.</h1>
        <p>Get a short, major-aware review based on your saved schools, activities, awards, and each college's admissions priorities.</p>
      </div>
    </section>
    <section class="panel profile-card reviewer-panel">
      <div class="section-head no-pad">
        <div>
          <h2>School Focus</h2>
          <p class="muted">Choose from your saved schools.</p>
        </div>
      </div>
      <div class="reviewer-controls">
        ${field("Review school", savedSchools.length ? `<select data-reviewer-school>${savedSchools.map((item) => `<option value="${item.id}" ${item.id === school.id ? "selected" : ""}>${item.name}</option>`).join("")}</select>` : `<div class="empty">Save schools from Browse Schools to review them here.</div>`)}
      </div>
      <div class="reviewer-split">
        <div class="importance-chart">
          <div>
            <h3>What This School Emphasizes</h3>
            <p class="muted">Based on this school's listed admissions factors.</p>
          </div>
          <div class="pie" style="${pieStyle(importanceSlices)}" aria-label="Admissions factor weighting pie chart"></div>
          <div class="legend">${importanceSlices.map((slice) => `<span class="legend-item" data-pie-slice tabindex="0"><i style="background:${slice.color}"></i>${slice.label}<em>${formatNumber(slice.value)} pts · ${slice.percentLabel}</em><b class="slice-tooltip">${slice.label} — ${formatNumber(slice.value)} pts — ${slice.percentLabel}</b></span>`).join("")}</div>
        </div>
        <div class="reviewer-workspace">
          <section class="summary-selector-card">
            <div class="section-head no-pad">
              <div>
                <h3>Choose sections to include</h3>
                <p class="muted">Disclaimer is always included automatically.</p>
              </div>
              <div class="summary-selector-actions">
                <button class="btn ghost" data-select-all-sections type="button">Select all</button>
                <button class="btn ghost" data-clear-optional-sections type="button">Clear optional</button>
              </div>
            </div>
            <div class="summary-section-grid">
              ${Object.entries(SUMMARY_SECTION_LABELS).map(([key, label]) => `
                <label class="summary-toggle">
                  <input type="checkbox" data-summary-section="${key}" ${state.selectedSummarySections[key] ? "checked" : ""} />
                  <span>${label}</span>
                </label>
              `).join("")}
            </div>
            <button class="btn primary" data-generate-summary type="button">Generate Summary</button>
          </section>
          <section class="summary-output-card">
            <div class="section-head no-pad"><div><h3>Generated Summary</h3><p class="muted">Section-based summary from your choices.</p></div></div>
            <div class="ai-report">${state.generatedSummary ? markdownToHtml(state.generatedSummary) : `<div class="empty">Choose sections, then generate a summary.</div>`}</div>
          </section>
          <section class="summary-output-card ai-summary-card">
            <div class="section-head no-pad"><div><h3>AI Summary</h3><p class="muted">Concise local AI version of the selected sections.</p></div></div>
            <div class="ai-actions">
              <button class="btn primary" data-generate-ai-summary ${savedSchools.length ? "" : "disabled"} type="button">Generate AI Summary</button>
              <div class="ai-loading ${state.aiSummaryStatus ? "active" : ""}"><span style="width:${Math.round((state.aiProgress || 0) * 100)}%"></span></div>
            </div>
            ${state.aiSummaryStatus ? `<div class="ai-working"><span></span><span></span><span></span> ${escapeHtml(state.aiSummaryStatus)}</div>` : state.aiStatus ? `<p class="muted">${escapeHtml(state.aiStatus)}</p>` : ""}
            <div class="ai-report ai-summary-output">${state.aiReport ? markdownToHtml(state.aiReport) : `<div class="empty">No AI summary generated yet.</div>`}</div>
          </section>
        </div>
      </div>
      <details class="factor-group">
        <summary>More info</summary>
        <div class="reviewer-split more-info-grid">
        <div>
          <h3>Factor Breakdown</h3>
          <div class="factor-breakdown">
            ${scoringResults.factorBreakdown.map((item) => `
              <article class="factor-row">
                <div><strong>${item.factor}</strong><span>${item.note}</span></div>
                <div><b>${item.importance}</b><span>${item.weightedImpact}% impact</span></div>
              </article>
            `).join("")}
          </div>
        </div>
        <div>
          <h3>Rule-Based Guidance</h3>
          ${guidanceList("Strengths", scoringResults.strengths)}
          ${guidanceList("Areas to improve", scoringResults.weaknesses)}
          ${guidanceList("Recommended improvements", scoringResults.recommendedImprovements)}
          ${guidanceList("Contextual notes", scoringResults.contextualNotes)}
        </div>
      </div>
      </details>
    </section>
  `;
}

function guidanceList(title, items) {
  return `<div class="guidance-list"><h4>${title}</h4>${items.map((item) => `<p>${escapeHtml(item)}</p>`).join("") || `<p class="muted">No major notes yet.</p>`}</div>`;
}

function getSavedSchools() {
  return state.myList.map((item) => schools.find((school) => school.name === item.schoolName)).filter(Boolean);
}

function isSchoolSaved(school) {
  return Boolean(school && state.myList.some((item) => item.schoolName === school.name));
}

function toggleMyList(school) {
  if (!school) return;
  if (isSchoolSaved(school)) {
    state.myList = state.myList.filter((item) => item.schoolName !== school.name);
    if (state.reviewerSchool === school.id) state.reviewerSchool = "";
  } else {
    state.myList = [...state.myList, { schoolName: school.name, addedAt: new Date().toISOString() }];
  }
}

function getReviewerSchool() {
  const saved = getSavedSchools();
  const selected = saved.find((school) => school.id === state.reviewerSchool) || saved[0] || schools[0];
  state.reviewerSchool = selected.id;
  return selected;
}

function getProfileData() {
  const alumniRelations = getAlumniRelationsFromProfile(state.profile);
  const apCourses = getCourseArray("apCourses");
  const ibCourses = getCourseArray("ibCourses");
  const honorsCourses = getCourseArray("honorsCourses");
  const dualEnrollmentCourses = getCourseArray("dualEnrollmentCourses");
  const customAdvancedCourses = getCourseArray("customAdvancedCourses");
  return {
    ...state.profile,
    graduationYear: state.profile.gradYear,
    majorCategory: getMajorCategory(state.profile.intendedMajor),
    apCourses,
    ibCourses,
    honorsCourses,
    dualEnrollmentCourses,
    customAdvancedCourses,
    apCourseCount: apCourses.length || Number(state.profile.apCourseCount || 0),
    ibCourseCount: ibCourses.length || Number(state.profile.ibCourseCount || 0),
    honorsCourseCount: honorsCourses.length || Number(state.profile.honorsCourseCount || 0),
    dualEnrollmentCourseCount: dualEnrollmentCourses.length || Number(state.profile.dualEnrollmentCourseCount || 0),
    alumniRelations,
    activities: state.activities,
    awards: state.awards,
  };
}

function getCourseArray(key) {
  const value = state.profile[key];
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === "string" && value.trim()) return splitCourseList(value);
  return [];
}

function getAlumniRelationsFromProfile(profile = {}) {
  const listed = Array.isArray(profile.alumniRelations) ? profile.alumniRelations : [];
  const migrated = !listed.length && profile.alumniRelation && !/^none$/i.test(profile.alumniRelation)
    ? [{ institutionName: "", relationshipType: profile.alumniRelation }]
    : [];
  return [...listed, ...migrated]
    .map((relation) => ({
      institutionName: String(relation.institutionName || "").trim(),
      relationshipType: String(relation.relationshipType || "").trim(),
    }))
    .filter((relation) => relation.institutionName);
}

function getSchoolProfile(schoolName) {
  const knowledge = window.schoolKnowledgeBase || {};
  const direct = knowledge[schoolName];
  if (direct) return normalizeSchoolProfile(direct, schoolName);
  const aliasMatch = Object.values(knowledge).find((profile) => profile.aliases?.some((alias) => alias.toLowerCase() === String(schoolName).toLowerCase()));
  if (aliasMatch) return normalizeSchoolProfile(aliasMatch, schoolName);
  const school = schools.find((item) => item.name === schoolName);
  return normalizeSchoolProfile({
    aliases: [],
    type: school?.type ? `${school.type} college or university` : "College or university",
    region: school?.region || "Unknown",
    setting: school?.campus || "Setting not available",
    strongestMajors: inferMajorsFromBlurb(school?.blurb || ""),
    applicantFitSignals: ["Academic readiness", "Major alignment", "Activities with evidence of impact", "Clear writing and personal context"],
    institutionalPersonality: school?.blurb || "School-specific knowledge base data is not available yet.",
    fitNotes: "Use the applicant profile and available admissions factor ratings. School knowledge base data is limited, so avoid detailed claims not present in the app.",
    missing: true,
  }, schoolName);
}

function normalizeSchoolProfile(profile, schoolName) {
  const school = schools.find((item) => item.name === schoolName) || schools.find((item) => profile.aliases?.includes(item.name));
  const actRange = school?.actRange || "See CDS";
  return {
    schoolName,
    ...profile,
    satMiddle50: profile.satMiddle50 || school?.satRange || "",
    satMedian: profile.satMedian || satMidpoint(school?.satRange || ""),
    actMiddle50: profile.actMiddle50 || actRange,
    actMedian: profile.actMedian || satMidpoint(actRange),
    gpaAverage: profile.gpaAverage || "",
    gpaMiddle50: profile.gpaMiddle50 || "",
    testingPolicy: profile.testingPolicy || inferTestingPolicy(school),
    admissionsFactors: profile.admissionsFactors || school?.factors || {},
    rankings: profile.rankings || emptyRankings(),
    schoolMetrics: profile.schoolMetrics || school?.schoolMetrics || null,
    schoolEnrichment: profile.schoolEnrichment || school?.schoolEnrichment || emptySchoolEnrichment(),
  };
}

function emptySchoolEnrichment() {
  return {
    undergraduateSchools: [],
    signaturePrograms: [],
    experientialOpportunities: [],
    studentOrganizationsOrCommonPathways: [],
    locationAdvantages: [],
    majorSpecificAdvice: {
      engineeringCS: "",
      businessSocialScience: "",
      lifeSciencesHealth: "",
      humanitiesArtsMedia: "",
      other: "",
    },
    specificRecommendationIdeas: {
      engineeringCS: [],
      businessSocialScience: [],
      lifeSciencesHealth: [],
      humanitiesArtsMedia: [],
      other: [],
    },
    reportPhrases: {
      schoolFit: [],
      majorFit: [],
      activitiesImpact: [],
      suggestedNextSteps: [],
    },
    verification: {
      sourcesToCheck: [],
      lastVerified: "",
      notes: "Verify against official university pages before relying on these details.",
    },
  };
}

function buildReportContext(profileData, scoringResults, schoolProfile) {
  const majorRelevantCourseSummary = buildMajorRelevantCourseSummary(profileData, profileData.intendedMajor);
  const matchingRelations = getMatchingAlumniRelations(profileData, scoringResults.schoolName, schoolProfile.aliases || []);
  const majorCategory = getMajorCategory(profileData.intendedMajor);
  return {
    studentSummary: {
      name: profileData.name || "",
      location: profileData.location || "",
      graduationYear: profileData.gradYear || profileData.graduationYear || "",
      intendedMajor: profileData.intendedMajor || "",
      majorCategory,
      gpa: profileData.gpa || "",
      sat: profileData.sat || "",
      act: profileData.act || "",
      classRank: profileData.classRank || "",
      courseRigorSummary: scoringResults.courseRigor?.summary || "",
      majorRelevantCourseSummary,
      alumniRelationsSummary: {
        hasAny: getAlumniRelationsFromProfile(profileData).length > 0,
        matchingSelectedSchool: matchingRelations.length > 0,
        matchingRelations: matchingRelations.map((relation) => ({
          institutionName: relation.institutionName,
          relationshipType: relation.relationshipType,
        })),
      },
    },
    majorGuidance: MAJOR_GUIDANCE[majorCategory] || MAJOR_GUIDANCE.other,
    contextualNotes: scoringResults.contextualNotes || [],
  };
}

function buildCompactReportContext(profileData, schoolProfile, scoringResults) {
  const majorCategory = getMajorCategory(profileData.intendedMajor);
  const majorGuidance = MAJOR_GUIDANCE[majorCategory] || MAJOR_GUIDANCE.other;
  const courseSummary = scoringResults.majorRelevantCourseSummary || buildMajorRelevantCourseSummary(profileData, profileData.intendedMajor);
  const schoolName = scoringResults.schoolName || schoolProfile.schoolName;
  const alignment = getMajorSchoolFitAlignment(profileData.intendedMajor, majorCategory, schoolProfile);
  const enrichment = getRelevantSchoolEnrichment(schoolProfile, profileData.intendedMajor, majorCategory);
  return {
    student: {
      name: profileData.name || "Student",
      location: profileData.location || "",
      graduationYear: profileData.gradYear || profileData.graduationYear || "",
      intendedMajor: profileData.intendedMajor || "",
      majorCategory,
      majorCategoryLabel: majorGuidance.displayLabel,
      gpa: profileData.gpa || "",
      sat: profileData.sat || "",
      act: profileData.act || "",
      classRank: profileData.classRank || "",
      courseRigor: scoringResults.courseRigor?.summary || "",
      majorRelevantCourses: courseSummary.summaryText,
      activitiesSummary: profileActivitySnapshot(profileData),
    },
    school: {
      name: schoolName,
      type: schoolProfile.type || "",
      region: schoolProfile.region || "",
      personality: truncateText(schoolProfile.institutionalPersonality || "", 280),
      strongestMajors: truncateArray(schoolProfile.strongestMajors || [], 6),
      relevantStrengths: alignment.matchedStrengths,
      admissionsFactors: compactAdmissionsFactors(schoolProfile.admissionsFactors || {}),
      testingPolicy: scoringResults.schoolData?.testingPolicy || "Unknown",
      satMiddle50: scoringResults.schoolData?.satMiddle50 || "",
      actMiddle50: scoringResults.schoolData?.actMiddle50 || "",
    },
    majorGuidance: {
      displayLabel: majorGuidance.displayLabel,
      fitLanguage: majorGuidance.fitLanguage,
      evidenceToLookFor: majorGuidance.evidenceToLookFor.slice(0, 8),
      activityFraming: majorGuidance.activityFraming,
      recommendationIdeas: truncateArray(majorGuidance.recommendationIdeas, 3),
    },
    majorSchoolFit: alignment,
    selectedSchoolEnrichment: enrichment,
    schoolEnrichment: enrichment,
    academicNotes: [
      scoringResults.testingGuidance?.note,
      `Course rigor: ${scoringResults.courseRigor?.summary || "not fully entered"}`,
    ].filter(Boolean).map((note) => truncateText(note, 220)),
    majorFitNotes: generateMajorFitNotes(profileData, schoolProfile).map((note) => truncateText(note, 260)).slice(0, 3),
    rankingsContext: {
      include: Boolean(scoringResults.relevantRankings?.length),
      rankings: (scoringResults.relevantRankings || []).slice(0, 3).map((ranking) => ({
        text: ranking.displayText,
        source: ranking.source,
        year: schoolProfile.rankings?.sourceYear || "",
      })),
    },
    contextualNotes: (scoringResults.contextualNotes || []).filter(Boolean).slice(0, 4),
    suggestedNextSteps: dedupeStrings((scoringResults.recommendedImprovements || []).concat(generateMajorSpecificNextSteps(profileData, schoolProfile, courseSummary, enrichment))).slice(0, 5),
  };
}

function compactAdmissionsFactors(factors) {
  const keep = ["Rigor of secondary school record", "Class rank", "Academic Grade Point Average (GPA)", "Standardized test scores", "Extracurricular activities", "Alumni/ae relation", "State residency"];
  return keep.reduce((result, key) => {
    if (factors[key]) result[key] = factors[key];
    return result;
  }, {});
}

function getMajorSchoolFitAlignment(intendedMajor, majorCategory, schoolProfile) {
  const guidance = MAJOR_GUIDANCE[majorCategory] || MAJOR_GUIDANCE.other;
  const strongestMajors = schoolProfile.strongestMajors || [];
  const matchedStrengths = strongestMajors.filter((strength) => strengthMatchesMajorCategory(strength, guidance));
  const major = intendedMajor || "the intended major";
  const schoolName = schoolProfile.schoolName || "this college";
  const hasProfile = strongestMajors.length > 0;
  const directMajorMatch = strongestMajors.some((strength) => normalizeText(strength).includes(normalizeText(major)) || normalizeText(major).includes(normalizeText(strength)));
  const alignmentLevel = !hasProfile ? "unknown" : directMajorMatch || matchedStrengths.length >= 3 ? "strong" : matchedStrengths.length ? "partial" : "limited";
  const missingOrWeakFitNote = alignmentLevel === "limited"
    ? `${major} is not one of the strongest programs currently listed in the app's school profile for ${schoolName}. That does not mean the school is a bad option, but this report has less evidence of program-specific fit from the current school data.`
    : alignmentLevel === "unknown"
      ? `The app does not yet have enough major-strength data to judge program-specific fit for ${schoolName}.`
      : "";
  const majorFitSummary = alignmentLevel === "strong"
    ? `${major} connects directly with ${schoolName}'s listed strengths in ${formatList(matchedStrengths.slice(0, 4))}.`
    : alignmentLevel === "partial"
      ? `${major} has a partial connection to ${schoolName}'s listed strengths through ${formatList(matchedStrengths.slice(0, 3))}.`
      : missingOrWeakFitNote;
  return { alignmentLevel, matchedStrengths: matchedStrengths.slice(0, 5), missingOrWeakFitNote, majorFitSummary };
}

function strengthMatchesMajorCategory(strength, guidance) {
  const strengthKey = normalizeText(strength);
  return (guidance.relevantSchoolStrengthKeywords || []).some((keyword) => {
    const key = normalizeText(keyword);
    return strengthKey.includes(key) || key.includes(strengthKey);
  });
}

function getRelevantUndergraduateSchools(schoolProfile, intendedMajor, majorCategory) {
  const enrichment = schoolProfile.schoolEnrichment || emptySchoolEnrichment();
  return rankRelevantEnrichmentItems(enrichment.undergraduateSchools || [], intendedMajor, majorCategory).slice(0, 3);
}

function getRelevantSignaturePrograms(schoolProfile, intendedMajor, majorCategory) {
  const enrichment = schoolProfile.schoolEnrichment || emptySchoolEnrichment();
  const programs = []
    .concat(enrichment.signaturePrograms || [])
    .concat(enrichment.experientialOpportunities || [])
    .concat(enrichment.studentOrganizationsOrCommonPathways || []);
  return rankRelevantEnrichmentItems(programs, intendedMajor, majorCategory).slice(0, 4);
}

function rankRelevantEnrichmentItems(items, intendedMajor, majorCategory) {
  return (items || [])
    .map((item) => ({ item, score: scoreEnrichmentItem(item, intendedMajor, majorCategory) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => ({
      name: entry.item.name || entry.item.description || "",
      category: entry.item.category || "",
      description: truncateText(entry.item.description || entry.item.notes || "", 160),
      useInReportWhen: truncateText(entry.item.useInReportWhen || "", 160),
    }))
    .filter((item) => item.name);
}

function scoreEnrichmentItem(item, intendedMajor, majorCategory) {
  const guidance = MAJOR_GUIDANCE[majorCategory] || MAJOR_GUIDANCE.other;
  const rawText = normalizeText([item.name, item.category, item.description, item.notes].filter(Boolean).join(" "));
  const tagText = normalizeText((item.relevantMajors || []).join(" "));
  const text = `${rawText} ${tagText}`.trim();
  const major = normalizeText(intendedMajor);
  let score = 0;
  if (major && text.includes(major)) score += 10;
  (guidance.relevantSchoolStrengthKeywords || []).forEach((keyword) => {
    const key = normalizeText(keyword);
    if (key && (rawText.includes(key) || key.includes(rawText))) score += 4;
  });
  (guidance.evidenceToLookFor || []).slice(0, 8).forEach((keyword) => {
    const key = normalizeText(keyword);
    if (key && rawText.includes(key)) score += 1;
  });
  if (majorCategory === "businessSocialScience" && /business|economics|policy|government|international|information|data|management|commerce|finance|entrepreneur|arts and sciences|letters and science|literature science|liberal arts|social sciences/i.test(rawText)) score += 4;
  if (majorCategory === "engineeringCS" && /engineering|computing|computer science|technology|robotics|ai|design|startup|data|create x|entrepreneur/i.test(rawText)) score += 4;
  if (majorCategory === "lifeSciencesHealth" && /biology|health|medical|nursing|neuro|public health|science|chemistry/i.test(rawText)) score += 4;
  if (majorCategory === "humanitiesArtsMedia" && /arts|media|film|journalism|communication|music|theater|design|architecture|writing/i.test(rawText)) score += 4;
  return score;
}

function getRelevantSchoolEnrichment(schoolProfile, intendedMajor, majorCategory) {
  const enrichment = schoolProfile.schoolEnrichment || emptySchoolEnrichment();
  const relevantUndergraduateSchools = getRelevantUndergraduateSchools(schoolProfile, intendedMajor, majorCategory);
  const relevantPrograms = getRelevantSignaturePrograms(schoolProfile, intendedMajor, majorCategory);
  const relevantSignaturePrograms = relevantPrograms.filter((item) => item.category !== "Experiential opportunity" && item.category !== "Common pathway").slice(0, 3);
  const relevantExperientialOpportunities = relevantPrograms.filter((item) => item.category === "Experiential opportunity").slice(0, 2);
  const relevantStudentPathways = relevantPrograms.filter((item) => item.category === "Common pathway").slice(0, 2);
  const relevantLocationAdvantages = rankRelevantEnrichmentItems(enrichment.locationAdvantages || [], intendedMajor, majorCategory).slice(0, 1);
  const total = relevantUndergraduateSchools.length + relevantSignaturePrograms.length + relevantExperientialOpportunities.length + relevantStudentPathways.length + relevantLocationAdvantages.length;
  if (!total && !enrichment.majorSpecificAdvice?.[majorCategory] && !enrichment.specificRecommendationIdeas?.[majorCategory]?.length) return {};
  return {
    relevantUndergraduateSchools,
    relevantSignaturePrograms,
    relevantExperientialOpportunities,
    relevantStudentPathways,
    relevantLocationAdvantages,
    majorSpecificAdvice: enrichment.majorSpecificAdvice?.[majorCategory] || "",
    specificRecommendationIdeas: truncateArray(enrichment.specificRecommendationIdeas?.[majorCategory] || [], 4),
    reportPhrases: {
      schoolFit: truncateArray(enrichment.reportPhrases?.schoolFit || [], 2),
      majorFit: truncateArray(enrichment.reportPhrases?.majorFit || [], 2),
      activitiesImpact: truncateArray(enrichment.reportPhrases?.activitiesImpact || [], 2),
      suggestedNextSteps: truncateArray(enrichment.reportPhrases?.suggestedNextSteps || [], 2),
    },
  };
}

function trimReportContextForModel(reportContext, maxTokens) {
  const compact = JSON.parse(JSON.stringify(reportContext || {}));
  while (estimatePromptTokens(JSON.stringify(compact)) > maxTokens) {
    if (compact.suggestedNextSteps?.length > 3) compact.suggestedNextSteps.pop();
    else if (compact.majorFitNotes?.length > 2) compact.majorFitNotes.pop();
    else if (compact.contextualNotes?.length > 2) compact.contextualNotes.pop();
    else if (compact.selectedSchoolEnrichment?.relevantSignaturePrograms?.length > 2) compact.selectedSchoolEnrichment.relevantSignaturePrograms.pop();
    else if (compact.selectedSchoolEnrichment?.relevantUndergraduateSchools?.length > 2) compact.selectedSchoolEnrichment.relevantUndergraduateSchools.pop();
    else if (compact.selectedSchoolEnrichment?.specificRecommendationIdeas?.length > 2) compact.selectedSchoolEnrichment.specificRecommendationIdeas.pop();
    else if (compact.majorGuidance?.recommendationIdeas?.length > 2) compact.majorGuidance.recommendationIdeas.pop();
    else if (compact.majorGuidance?.evidenceToLookFor?.length > 5) compact.majorGuidance.evidenceToLookFor.pop();
    else if (compact.school?.strongestMajors?.length > 4) compact.school.strongestMajors.pop();
    else {
      compact.school.personality = truncateText(compact.school.personality || "", 160);
      break;
    }
  }
  return compact;
}

function generateDeterministicReport(reportContext) {
  const ctx = reportContext;
  const rankings = ctx.rankingsContext?.include ? reportSectionText("Rankings Context", ctx.rankingsContext.rankings.map((ranking) => `- ${ranking.text} (${ranking.source}${ranking.year ? `, ${ranking.year}` : ""}) gives reputation and resource context only; it should not be read as changing admissions odds.`).join("\n")) : "";
  const additional = ctx.contextualNotes?.length ? reportSectionText("Additional Considerations", ctx.contextualNotes.map((note) => `- ${note}`).join("\n")) : "";
  const alignment = ctx.majorSchoolFit || {};
  const relevantStrengths = alignment.matchedStrengths?.length ? alignment.matchedStrengths : ctx.school.relevantStrengths || [];
  const majorCourseText = String(ctx.student.majorRelevantCourses || "not yet listed")
    .replace(/^Major-relevant courses?:\s*/i, "")
    .replace(/^Major-relevant courses?\s+include\s+/i, "Includes ")
    .replace(/^Major-relevant coursework\s*/i, "Coursework ");
  const personality = ctx.school.personality || "a school with limited profile data in the app";
  const schoolFitStrengthText = relevantStrengths.length
    ? `relevant listed strengths in ${formatList(relevantStrengths.slice(0, 4))}`
    : `the school's broader profile: ${formatList((ctx.school.strongestMajors || []).slice(0, 4))}`;
  const namedProgramSentence = buildNamedProgramFitSentence(ctx);
  const majorFitBody = [
    namedProgramSentence,
    alignment.majorFitSummary,
    alignment.missingOrWeakFitNote,
    ctx.selectedSchoolEnrichment?.majorSpecificAdvice,
    ctx.majorFitNotes?.find((note) => !note.includes(alignment.majorFitSummary || "")),
  ].filter(Boolean).join(" ");
  const activitiesAdvice = ctx.selectedSchoolEnrichment?.specificRecommendationIdeas?.length
    ? `Useful school-specific examples include ${formatList(ctx.selectedSchoolEnrichment.specificRecommendationIdeas.slice(0, 3))}.`
    : "";
  return [
    reportSectionText("Student Profile", [
      `- ${[ctx.student.name, ctx.student.location, ctx.student.graduationYear && `Class of ${ctx.student.graduationYear}`].filter(Boolean).join(", ")}`,
      `- Intended major: ${ctx.student.intendedMajor || "Not listed"}`,
      `- ${[`GPA: ${ctx.student.gpa || "not listed"}`, ctx.student.sat && `SAT: ${ctx.student.sat}`, ctx.student.act && `ACT: ${ctx.student.act}`, ctx.student.classRank && `class rank: ${ctx.student.classRank}`].filter(Boolean).join("; ")}`,
      `- Course rigor: ${ctx.student.courseRigor || "not fully entered"}`,
      `- Major-relevant courses: ${majorCourseText}`,
      `- ${ctx.student.activitiesSummary || "Activities and awards are not listed yet."}`,
    ].join("\n")),
    reportSectionText("School Fit Summary", `${ctx.school.name}: ${personality.replace(/\.$/, "")}. ${namedProgramSentence ? `${namedProgramSentence} ` : ""}For a ${ctx.student.intendedMajor || "prospective"} applicant, the fit is strongest when the application connects ${ctx.majorGuidance.fitLanguage} with ${schoolFitStrengthText}.`),
    reportSectionText("Academic Fit", `The academic profile should be read through the factors this school considers. ${ctx.academicNotes.join(" ")} GPA, rank, rigor, and testing are useful signals only to the extent they are included in the school-specific factor data.`),
    reportSectionText("Major Fit", majorFitBody),
    rankings,
    reportSectionText("Activities & Impact", `${ctx.majorGuidance.activityFraming} ${activitiesAdvice} ${ctx.student.activitiesSummary || ""} The most useful activity descriptions should give concrete evidence: what was improved, measured, led, analyzed, built, organized, published, taught, or changed.`),
    additional,
    reportSectionText("Suggested Next Steps", (ctx.suggestedNextSteps || []).map((step) => `- ${step}`).join("\n")),
    reportSectionText("Disclaimer", DISCLAIMER_TEXT),
  ].filter(Boolean).join("\n\n");
}

function generateStructuredSummary(reportContext, selectedSections = DEFAULT_SUMMARY_SECTIONS) {
  const sections = getSummarySectionBodies(reportContext);
  const output = Object.entries(SUMMARY_SECTION_LABELS)
    .filter(([key]) => selectedSections[key])
    .map(([key, title]) => {
      const body = sections[key];
      if (!body || (Array.isArray(body) && !body.length)) return "";
      return reportSectionText(title, Array.isArray(body) ? body.map((item) => `- ${item}`).join("\n") : body);
    })
    .filter(Boolean)
    .join("\n\n");
  return appendDisclaimerOnce(output);
}

function generateConciseAISummaryFallback(reportContext, selectedSections = DEFAULT_SUMMARY_SECTIONS) {
  const ctx = reportContext;
  const sentences = [];
  const nextSteps = (ctx.suggestedNextSteps || []).slice(0, 2);
  const namedProgramSentence = selectedSections.schoolFit || selectedSections.majorFit ? buildNamedProgramFitSentence(ctx) : "";
  const academicIssue = selectedSections.academicFit
    ? (ctx.student.majorRelevantCourses || ctx.student.courseRigor || ctx.academicNotes?.[0] || "")
    : "";
  const activityIssue = selectedSections.activitiesImpact
    ? [ctx.majorGuidance?.activityFraming, ctx.selectedSchoolEnrichment?.specificRecommendationIdeas?.length ? `Useful examples include ${formatList(ctx.selectedSchoolEnrichment.specificRecommendationIdeas.slice(0, 2))}.` : ""].filter(Boolean).join(" ")
    : "";

  if (selectedSections.studentProfile || selectedSections.schoolFit || selectedSections.majorFit) {
    sentences.push(`Based on the current profile, this student is interested in ${ctx.student.intendedMajor || "an intended major"} at ${ctx.school.name}`);
    sentences.push(namedProgramSentence || `${ctx.school.name}'s fit should be read through the school data currently available in Collegia`);
  }
  if (academicIssue) {
    sentences.push(`The academic picture would be clearer with stronger course detail, especially ${stripReportPrefix(academicIssue)}`);
  }
  if (activityIssue) {
    sentences.push(`For activities and impact, the application should make the evidence concrete: ${stripReportPrefix(activityIssue)}`);
  }
  if (selectedSections.suggestedNextSteps && nextSteps.length) {
    sentences.push(`The most useful next steps are to ${nextSteps.map((step) => simplifyAISummaryNextStep(step)).join(" and to ")}`);
  }
  if (selectedSections.rankingsContext && ctx.rankingsContext?.include) {
    sentences.push("Any rankings in the app should be treated as reputation and resource context, not as admissions odds");
  }
  if (selectedSections.additionalConsiderations && ctx.contextualNotes?.length) {
    sentences.push(ctx.contextualNotes[0]);
  }

  const cleanSentences = sentences
    .filter(Boolean)
    .map((sentence) => stripReportPrefix(sentence).replace(/[.!?]+$/g, "").trim())
    .filter(Boolean)
    .slice(0, 6)
    .map((sentence) => `${sentence}.`);
  const midpoint = Math.min(3, cleanSentences.length);
  const paragraphOne = cleanSentences.slice(0, midpoint).join(" ");
  const paragraphTwo = cleanSentences.slice(midpoint).join(" ");
  return appendAISummaryDisclaimer([paragraphOne, paragraphTwo].filter(Boolean).join("\n\n"));
}

function getSummarySectionBodies(ctx, concise = false) {
  const namedProgramSentence = buildNamedProgramFitSentence(ctx);
  const rankings = ctx.rankingsContext?.include ? ctx.rankingsContext.rankings.map((ranking) => `${ranking.text} (${ranking.source}${ranking.year ? `, ${ranking.year}` : ""}) is reputation/resource context only, not an admissions-chance signal.`) : [];
  const activitiesAdvice = ctx.selectedSchoolEnrichment?.specificRecommendationIdeas?.length
    ? `Useful examples include ${formatList(ctx.selectedSchoolEnrichment.specificRecommendationIdeas.slice(0, concise ? 2 : 3))}.`
    : "";
  const majorFit = [
    namedProgramSentence,
    ctx.majorSchoolFit?.majorFitSummary,
    ctx.selectedSchoolEnrichment?.majorSpecificAdvice,
    concise ? "" : ctx.majorFitNotes?.find((note) => !note.includes(ctx.majorSchoolFit?.majorFitSummary || "")),
  ].filter(Boolean).join(" ");
  return {
    studentProfile: [
      `${[ctx.student.name, ctx.student.location, ctx.student.graduationYear && `Class of ${ctx.student.graduationYear}`].filter(Boolean).join(", ") || "Student profile details are limited."}`,
      `Intended major: ${ctx.student.intendedMajor || "Not listed"}`,
      [`GPA: ${ctx.student.gpa || "not listed"}`, ctx.student.sat && `SAT: ${ctx.student.sat}`, ctx.student.act && `ACT: ${ctx.student.act}`, ctx.student.classRank && `class rank: ${ctx.student.classRank}`].filter(Boolean).join("; "),
      `Course rigor: ${ctx.student.courseRigor || "not fully entered"}`,
    ].filter(Boolean),
    schoolFit: `${ctx.school.name}: ${(ctx.school.personality || "School profile data is limited.").replace(/\.$/, "")}. ${namedProgramSentence || ""}`.trim(),
    academicFit: `Academic fit should be read through this school's factor data. ${ctx.academicNotes?.join(" ") || "Add GPA, course rigor, rank, and test context for a stronger read."}`,
    majorFit,
    rankingsContext: rankings,
    activitiesImpact: `${ctx.majorGuidance.activityFraming} ${activitiesAdvice} ${ctx.student.activitiesSummary || ""}`.trim(),
    additionalConsiderations: ctx.contextualNotes || [],
    suggestedNextSteps: ctx.suggestedNextSteps || [],
  };
}

function buildSelectedReportContext(reportContext, selectedSections) {
  const ctx = JSON.parse(JSON.stringify(reportContext || {}));
  ctx.selectedSections = Object.entries(selectedSections || DEFAULT_SUMMARY_SECTIONS)
    .filter(([, enabled]) => enabled)
    .map(([key]) => SUMMARY_SECTION_LABELS[key]);
  if (!selectedSections.rankingsContext) ctx.rankingsContext = { include: false, rankings: [] };
  if (!selectedSections.additionalConsiderations) ctx.contextualNotes = [];
  if (!selectedSections.suggestedNextSteps) ctx.suggestedNextSteps = [];
  return ctx;
}

function cleanSelectedSummaryOutput(text, selectedSections) {
  let output = String(text || "").replace(/\*\*/g, "").trim();
  const allowedTitles = Object.entries(SUMMARY_SECTION_LABELS)
    .filter(([key]) => selectedSections[key])
    .map(([, title]) => title)
    .concat("Disclaimer");
  output = output.split(/\n(?=# )/g)
    .filter((section) => {
      const title = section.match(/^#\s+(.+)$/m)?.[1]?.trim();
      return !title || allowedTitles.includes(title);
    })
    .join("\n\n");
  return appendDisclaimerOnce(output);
}

function cleanAISummaryOutput(text) {
  let output = String(text || "")
    .replace(/\*\*/g, "")
    .replace(/^#+\s+.*$/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/Structured summary from selected sections\.?/gi, "")
    .replace(/Student Profile|School Fit Summary|Academic Fit|Major Fit|Rankings Context|Activities & Impact|Additional Considerations|Suggested Next Steps/gi, "")
    .trim();
  return appendAISummaryDisclaimer(output);
}

function looksLikeStructuredSummary(text) {
  const sectionHeaders = ["Student Profile", "School Fit Summary", "Academic Fit", "Major Fit", "Activities & Impact", "Suggested Next Steps"];
  const value = String(text || "");
  const count = sectionHeaders.filter((header) => new RegExp(`(^|\\n)#?\\s*${escapeRegExp(header)}\\b`, "i").test(value)).length;
  return count >= 3 || /^\s*#?\s*Student Profile\b/i.test(value);
}

function isTooSimilarToGeneratedSummary(aiText, generatedText) {
  const ai = String(aiText || "");
  const generated = String(generatedText || "");
  if (!ai || !generated) return false;
  if (looksLikeStructuredSummary(ai)) return true;
  if (/Structured summary from selected sections/i.test(ai)) return true;
  const aiSentences = ai.replace(/Disclaimer:[\s\S]*$/i, "").split(/[.!?]+/).map((sentence) => normalizeText(sentence)).filter((sentence) => sentence.length > 20);
  const generatedSentences = new Set(generated.split(/[.!?]+/).map((sentence) => normalizeText(sentence)).filter(Boolean));
  const repeated = aiSentences.filter((sentence) => generatedSentences.has(sentence)).length;
  if (repeated >= 2) return true;
  return ai.length > generated.length * 0.85 && looksLikeStructuredSummary(generated);
}

function appendDisclaimerOnce(text) {
  const body = String(text || "")
    .replace(/# Disclaimer[\s\S]*$/i, "")
    .replace(new RegExp(escapeRegExp(DISCLAIMER_TEXT), "g"), "")
    .trim();
  return `${body}\n\n# Disclaimer\n${DISCLAIMER_TEXT}`.trim();
}

function appendAISummaryDisclaimer(text) {
  const body = String(text || "")
    .replace(/# Disclaimer[\s\S]*$/i, "")
    .replace(/Disclaimer:\s*This tool does not provide exact admissions probabilities[\s\S]*$/i, "")
    .replace(new RegExp(escapeRegExp(DISCLAIMER_TEXT), "g"), "")
    .trim();
  return `${body}\n\nDisclaimer: ${DISCLAIMER_TEXT}`.trim();
}

function stripReportPrefix(value) {
  return String(value || "")
    .replace(/^[-\s]+/, "")
    .replace(/^Major-relevant courses?:\s*/i, "")
    .replace(/^Major-relevant courses?\s+include\s+/i, "")
    .replace(/^Major-relevant coursework\s*/i, "")
    .trim();
}

function simplifyAISummaryNextStep(step) {
  const text = stripReportPrefix(step).replace(/\.$/, "");
  if (/Rigor of secondary school record/i.test(text)) return "clarify course rigor with course names, grades, projects, papers, or exam context";
  if (/Activity entries/i.test(text)) return "add measurable activity outcomes such as team size, systems improved, hours, projects, or results";
  if (/Add or clarify major-related coursework/i.test(text)) return text.replace(/^Add or clarify/i, "add or clarify");
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function reportSectionText(title, body) {
  return `# ${title}\n${body}`;
}

function buildNamedProgramFitSentence(ctx) {
  const enrichment = ctx.selectedSchoolEnrichment || ctx.schoolEnrichment || {};
  const schoolNames = (enrichment.relevantUndergraduateSchools || []).map((item) => item.name).filter(Boolean);
  const programNames = []
    .concat(enrichment.relevantSignaturePrograms || [])
    .concat(enrichment.relevantExperientialOpportunities || [])
    .concat(enrichment.relevantStudentPathways || [])
    .map((item) => item.name)
    .filter(Boolean);
  const names = dedupeStrings([...schoolNames, ...programNames]).slice(0, 5);
  if (!names.length) return "";
  const major = ctx.student?.intendedMajor || "This major";
  return `${major} connects most directly with ${formatList(names)} in the app's school data.`;
}

function buildMajorRelevantCourseSummary(profileData, intendedMajor) {
  const listedCourses = splitCourseList([
    ...(profileData.apCourses || []),
    ...(profileData.ibCourses || []),
    ...(profileData.honorsCourses || []),
    ...(profileData.dualEnrollmentCourses || []),
    ...(profileData.customAdvancedCourses || []),
    profileData.courseList,
    profileData.seniorYearCourses,
    profileData.majorRelatedCourses,
  ].join(", "));
  const suggestions = getMajorCourseSuggestions(intendedMajor);
  const listedRelevantCourses = listedCourses.filter((course) => suggestions.some((suggestion) => courseMatchesSuggestion(course, suggestion))).slice(0, 5);
  const missingSuggestedCourses = suggestions
    .filter((suggestion) => !listedCourses.some((course) => courseMatchesSuggestion(course, suggestion)))
    .slice(0, listedRelevantCourses.length >= 4 ? 3 : 5);
  const majorLabel = intendedMajor || "the intended major";
  const listedText = formatList(listedRelevantCourses);
  const missingText = formatList(missingSuggestedCourses);
  let summaryText = "";
  if (listedRelevantCourses.length >= 4) {
    summaryText = `Major-relevant coursework is already clear through ${listedText}.`;
  } else if (listedRelevantCourses.length) {
    summaryText = `Major-relevant courses include ${listedText}${missingSuggestedCourses.length ? `; adding ${missingText} would make the ${majorLabel} fit clearer` : "."}`;
  } else {
    summaryText = `Major-relevant coursework is not yet listed${missingSuggestedCourses.length ? `; adding ${missingText} would help clarify preparation for ${majorLabel}` : "."}`;
  }
  if (!/[.!?]$/.test(summaryText)) summaryText += ".";
  return { listedRelevantCourses, missingSuggestedCourses, summaryText };
}

function courseMatchesSuggestion(course, suggestion) {
  const courseKey = normalizeText(course);
  const suggestionKey = normalizeText(suggestion);
  if (!courseKey || !suggestionKey) return false;
  if (courseKey.includes(suggestionKey) || suggestionKey.includes(courseKey)) return true;
  const variants = suggestion.split(/\/| or /i).map(normalizeText).filter(Boolean);
  return variants.some((variant) => courseKey.includes(variant) || variant.includes(courseKey));
}

function getMajorCourseSuggestions(intendedMajor) {
  const major = String(intendedMajor || "").toLowerCase();
  if (/\b(engineering|ece|electrical|computer|cs|robotics|data|ai|artificial intelligence|hardware)\b/.test(major)) {
    return ["AP Calculus AB/BC", "Multivariable Calculus", "AP Physics C", "AP Computer Science A", "AP Computer Science Principles", "IB Mathematics", "IB Physics", "IB Computer Science", "Engineering", "Robotics", "Circuits", "Electronics", "CAD", "Programming", "dual enrollment STEM courses"];
  }
  if (/economics|business|finance|accounting|entrepreneur|marketing|social science|political|policy|government/.test(major)) {
    return ["AP Microeconomics", "AP Macroeconomics", "IB Economics", "AP Statistics", "AP Calculus AB/BC", "Multivariable Calculus", "Business", "Finance", "Accounting", "Entrepreneurship", "Political Science", "Government", "Data Analysis", "college-level economics/business coursework"];
  }
  if (/biology|pre-med|medicine|health|biomedical|nursing|public health/.test(major)) {
    return ["AP Biology", "AP Chemistry", "AP Physics", "AP Statistics", "IB Biology", "IB Chemistry", "IB Physics", "Anatomy", "Physiology", "Public Health", "college-level science courses"];
  }
  if (/humanities|english|writing|film|media|art|design|music|theater|journalism|communication/.test(major)) {
    return ["AP English Language", "AP English Literature", "AP Art History", "AP Seminar", "AP Research", "AP Music Theory", "IB Film", "IB Theatre", "IB Visual Arts", "Journalism", "Creative Writing", "Media", "Design", "Art courses"];
  }
  return ["advanced coursework related to the intended major", "research or project-based coursework", "college-level coursework", "statistics or data analysis", "senior-year courses connected to the major"];
}

function splitCourseList(text) {
  return String(text || "")
    .split(/[,;\n]+/)
    .map((course) => course.trim())
    .filter(Boolean)
    .filter((course, index, arr) => arr.findIndex((item) => normalizeText(item) === normalizeText(course)) === index);
}

function formatList(items) {
  const clean = items.filter(Boolean);
  if (!clean.length) return "";
  if (clean.length === 1) return clean[0];
  if (clean.length === 2) return `${clean[0]} and ${clean[1]}`;
  return `${clean.slice(0, -1).join(", ")}, or ${clean.at(-1)}`;
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}

function normalizeSchoolNameForMatch(value) {
  return normalizeText(value)
    .replace(/\buniversity\b/g, "")
    .replace(/\bcollege\b/g, "")
    .replace(/\bat\b/g, "")
    .replace(/\bann arbor\b/g, "")
    .replace(/\bthe\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getMatchingAlumniRelations(profileData, selectedSchoolName, schoolAliases = []) {
  const selectedNames = [selectedSchoolName, ...schoolAliases].filter(Boolean);
  const selectedKeys = new Set(selectedNames.flatMap((name) => [normalizeText(name), normalizeSchoolNameForMatch(name)]));
  return getAlumniRelationsFromProfile(profileData).filter((relation) => {
    const institution = relation.institutionName;
    if (!institution) return false;
    const relationKeys = [normalizeText(institution), normalizeSchoolNameForMatch(institution)];
    return relationKeys.some((key) => selectedKeys.has(key));
  });
}

function emptyRankings() {
  return {
    sourceYear: "",
    lastUpdated: "",
    // Ranking data changes each year. Insert only manually verified ranking values and source URLs here.
    sources: [],
  };
}

function inferTestingPolicy(school) {
  if (!school) return "Unknown";
  if (school.factors?.["Standardized test scores"] === "Not Considered") return school.id?.startsWith("uc") ? "Blind" : "Not Considered";
  return "Unknown";
}

function inferMajorsFromBlurb(blurb) {
  const candidates = ["Engineering", "Computer Science", "Business", "Economics", "Biology", "Political Science", "Psychology", "Public Health", "Film", "Arts", "Data Science", "Pre-Med/Life Sciences"];
  const lower = blurb.toLowerCase();
  const matched = candidates.filter((major) => lower.includes(major.toLowerCase().split("/")[0]));
  return matched.length ? matched : ["Liberal Arts", "Research", "Interdisciplinary Studies"];
}

function getMajorCategory(intendedMajor) {
  const major = String(intendedMajor || "").trim().toLowerCase();
  for (const [category, majors] of Object.entries(MAJOR_OPTIONS)) {
    if (majors.some((option) => option.toLowerCase() === major)) return category;
  }
  if (/engineering|computer|software|data|ai|robotics|electrical|mechanical|aerospace|civil|chemical|industrial/.test(major)) return "engineeringCS";
  if (/economics|business|finance|accounting|marketing|entrepreneur|management|political|policy|international|government|sociology|psychology/.test(major)) return "businessSocialScience";
  if (/biology|biochemistry|neuroscience|pre-med|medicine|health|nursing|biomedical|chemistry|environmental/.test(major)) return "lifeSciencesHealth";
  if (/english|history|philosophy|journalism|communication|film|media|design|theater|music|art|architecture/.test(major)) return "humanitiesArtsMedia";
  return "other";
}

function scoreApplicantForSchool(profileData, school) {
  const schoolProfile = getSchoolProfile(school.name);
  return calculateSchoolSpecificFit(profileData, school.factors, { ...schoolProfile, schoolName: school.name, school });
}

function calculateSchoolSpecificFit(profileData, schoolAdmissionsFactors, schoolProfile) {
  const school = schoolProfile.school || schools.find((item) => item.name === schoolProfile.schoolName) || getReviewerSchool();
  // Later this can be replaced by a real school database record that includes
  // major strength, location, selectivity, admissions factor importance ratings,
  // tuition, residency policies, school size, campus setting, and public/private status.
  const factorBreakdown = [];
  const contextualNotes = [];
  let totalWeighted = 0;
  let totalPossible = 0;
  let academicWeighted = 0;
  let academicPossible = 0;
  let nonacademicWeighted = 0;
  let nonacademicPossible = 0;
  const matchingAlumniRelations = getMatchingAlumniRelations(profileData, school.name, schoolProfile.aliases || []);

  Object.values(factorConfig).forEach((factor) => {
    const importance = schoolAdmissionsFactors?.[factor.label] || "Not Considered";
    const multiplier = importanceMultipliers[importance] ?? 0;
    const applicantScore = getApplicantFactorScore(factor.profileField, profileData, school);
    const possible = factor.baseWeight * multiplier;
    const weightedImpact = possible ? applicantScore * possible : 0;

    if (factor.category === "contextual") {
      const note = contextualNote(factor.label, importance, profileData[factor.profileField], school, {
        matchingAlumniRelations,
        profileData,
      });
      if (note) contextualNotes.push(note);
      return;
    }

    if (possible > 0) {
      totalWeighted += weightedImpact;
      totalPossible += possible;
      if (factor.category === "academic") {
        academicWeighted += weightedImpact;
        academicPossible += possible;
      } else {
        nonacademicWeighted += weightedImpact;
        nonacademicPossible += possible;
      }
    }

    factorBreakdown.push({
      factor: factor.label,
      importance,
      applicantScore: Math.round(applicantScore),
      weightedImpact: Math.round(weightedImpact),
      note: factorNote(factor.label, importance, applicantScore, school),
    });
  });

  const schoolSpecificFitScore = Math.round(totalPossible ? totalWeighted / totalPossible : 0);
  const academicFitScore = Math.round(academicPossible ? academicWeighted / academicPossible : 0);
  const nonacademicFitScore = Math.round(nonacademicPossible ? nonacademicWeighted / nonacademicPossible : 0);
  const schoolData = {
    schoolName: school.name,
    satMiddle50: schoolProfile.satMiddle50 || school.satRange,
    satMedian: schoolProfile.satMedian || satMidpoint(school.satRange),
    actMiddle50: schoolProfile.actMiddle50 || school.actRange,
    actMedian: schoolProfile.actMedian || satMidpoint(school.actRange),
    gpaAverage: schoolProfile.gpaAverage || "",
    gpaMiddle50: schoolProfile.gpaMiddle50 || "",
    testingPolicy: schoolProfile.testingPolicy || inferTestingPolicy(school),
  };
  const courseRigor = evaluateCourseRigor(profileData, profileData.intendedMajor);
  const majorRelevantCourseSummary = buildMajorRelevantCourseSummary(profileData, profileData.intendedMajor);
  const testingGuidance = getTestingGuidance(profileData, schoolData, schoolAdmissionsFactors);
  const majorFitNotes = generateMajorFitNotes(profileData, schoolProfile);
  const majorFitScore = scoreMajorFit(profileData, schoolProfile);
  const institutionalFitNotes = generateInstitutionalFitNotes(profileData, schoolProfile);
  const institutionalFitScore = scoreInstitutionalFit(profileData, schoolProfile);
  const relevantRankings = [
    ...getRelevantMajorRankings(schoolProfile, profileData.intendedMajor, getMajorCategory(profileData.intendedMajor)),
    ...getRelevantRankings(schoolProfile, profileData.intendedMajor),
  ].filter((item, index, arr) => item.displayText && item.verified === true && arr.findIndex((other) => rankingKey(other) === rankingKey(item)) === index).slice(0, 4);
  const considered = factorBreakdown.filter((factor) => factor.importance !== "Not Considered");
  const strengths = considered.filter((factor) => factor.applicantScore >= 78).slice(0, 5).map((factor) => `${factor.factor} appears well supported and matters here because the school lists it as ${factor.importance}.`);
  const weaknesses = considered.filter((factor) => factor.applicantScore < 58).slice(0, 5).map((factor) => `${factor.factor} needs clearer applicant evidence because this school lists it as ${factor.importance}.`);
  const recommendedImprovements = generateSpecificImprovementSuggestions(profileData, { factorBreakdown: considered }, schoolProfile);

  const result = {
    schoolName: school.name,
    schoolSpecificFitScore,
    academicFitScore,
    nonacademicFitScore,
    majorFitScore,
    institutionalFitScore,
    schoolData,
    courseRigor,
    majorRelevantCourseSummary,
    testingGuidance,
    relevantRankings,
    factorBreakdown,
    majorFitNotes,
    institutionalFitNotes,
    strengths,
    weaknesses,
    recommendedImprovements,
    schoolListGuidance: [],
    contextualNotes,
    cautionNotes: [
      "This tool does not provide exact admissions probabilities.",
      "This tool should not be read as saying a student will or will not be admitted.",
      "Admissions factor ratings come from the app's school data and should be verified against the current CDS and admissions site.",
    ],
  };
  result.reportContext = buildReportContext(profileData, result, schoolProfile);
  return result;
}

function getImportanceSlices(scoringResults) {
  const colors = {
    Academic: "#0f766e",
    Activities: "#b68a00",
    Personal: "#475569",
    Context: "#8b5cf6",
  };
  const groups = scoringResults.factorBreakdown.reduce((totals, item) => {
    const label = /Extracurricular|Talent|Volunteer|Work/.test(item.factor) ? "Activities" :
      /Character|essay|Recommendations|Interview/i.test(item.factor) ? "Personal" :
      "Academic";
    totals[label] = (totals[label] || 0) + Math.max(0, item.weightedImpact || 0);
    return totals;
  }, {});
  groups.Context = scoringResults.contextualNotes.length * 3;
  const total = Object.values(groups).reduce((sum, value) => sum + value, 0) || 1;
  return Object.entries(groups).filter(([, value]) => value > 0).map(([label, value]) => ({
    label,
    value,
    percent: (value / total) * 100,
    percentLabel: formatPercent((value / total) * 100),
    color: colors[label] || "#64748b",
  }));
}

function pieStyle(slices) {
  let cursor = 0;
  const stops = slices.map((slice) => {
    const start = cursor;
    cursor += slice.percent;
    return `${slice.color} ${start}% ${cursor}%`;
  });
  return `background: conic-gradient(${stops.join(", ")});`;
}

function generateMajorFitNotes(profileData, schoolProfile) {
  const major = String(profileData.intendedMajor || "").trim();
  if (!major) return ["Intended major is missing, so major-fit analysis is limited."];
  const category = getMajorCategory(major);
  const guidance = MAJOR_GUIDANCE[category] || MAJOR_GUIDANCE.other;
  const alignment = getMajorSchoolFitAlignment(major, category, schoolProfile);
  const base = alignment.majorFitSummary;
  const evidence = getConcreteMajorEvidenceSentence(category, major);
  const activityBridge = category === "businessSocialScience" && /robotics|engineering|technical|coding|hardware|operations/i.test(getActivityText(profileData))
    ? "Technical activities can still help if framed through operations, technology markets, productivity, business strategy, innovation, or data-driven decision-making rather than as an engineering-only story."
    : guidance.activityFraming;
  return [base, evidence, activityBridge];
}

function getRelevantSchoolStrengths(schoolProfile, guidance) {
  const strengths = schoolProfile.strongestMajors || [];
  const keywords = guidance.relevantSchoolStrengthKeywords || [];
  const matched = strengths.filter((strength) => keywords.some((keyword) => strength.toLowerCase().includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(strength.toLowerCase())));
  return matched;
}

function getConcreteMajorEvidenceSentence(category, major) {
  if (category === "businessSocialScience") {
    return `${major} fit is strongest when the profile shows quantitative reasoning, statistics, economics or business coursework, research, entrepreneurship, finance, policy, data analysis, or analytical decision-making.`;
  }
  if (category === "engineeringCS") {
    return "Strong evidence for this major would include calculus, physics, computer science, coding, circuits, electronics, robotics, research, competitions, independent technical builds, or a GitHub/portfolio.";
  }
  if (category === "lifeSciencesHealth") {
    return "Strong evidence for this major would include biology, chemistry, lab or research work, public health exposure, healthcare service, science competitions, or sustained community health work.";
  }
  if (category === "humanitiesArtsMedia") {
    return "Strong evidence for this major would include a writing, journalism, film, design, performance, music, or art portfolio plus publication, audience, performance, exhibition, or competition evidence.";
  }
  return `Strong evidence for ${major || "this major"} should include coursework, projects, writing, research, or activities that make the academic direction concrete.`;
}

function generateInstitutionalFitNotes(profileData, schoolProfile) {
  const activityText = getActivityText(profileData);
  const matchedSignals = (schoolProfile.applicantFitSignals || []).filter((signal) => activityText.includes(signal.split(" ")[0].toLowerCase()));
  return [
    schoolProfile.institutionalPersonality || "Institutional personality data is limited.",
    matchedSignals.length ? `Current activities appear to connect with: ${matchedSignals.slice(0, 3).join(", ")}.` : "Add clearer activity evidence that matches this school's applicant-fit signals.",
  ];
}

function generateSpecificImprovementSuggestions(profileData, scoringResults, schoolProfile) {
  const major = profileData.intendedMajor || "the intended major";
  const category = getMajorCategory(major);
  const guidance = MAJOR_GUIDANCE[category] || MAJOR_GUIDANCE.other;
  const courseSummary = buildMajorRelevantCourseSummary(profileData, major);
  const factors = scoringResults.factorBreakdown || [];
  const improvements = [];
  const weakAcademic = factors.find((factor) => /GPA|Rigor|Class rank|test/i.test(factor.factor) && factor.importance !== "Not Considered" && factor.applicantScore < 70);
  const weakActivities = factors.find((factor) => /Extracurricular|Talent|Volunteer|Work|Character/i.test(factor.factor) && factor.importance !== "Not Considered" && factor.applicantScore < 70);
  if (weakAcademic) improvements.push(`${weakAcademic.factor} needs clearer evidence for this school because it is listed as ${weakAcademic.importance}; add course names, grades, projects, papers, or exam context tied to ${major}.`);
  if (weakActivities) improvements.push("Activity entries would be stronger with numbers and outcomes: team size led, systems improved, hours contributed, projects completed, articles published, workshops run, or results achieved.");
  if (courseSummary.missingSuggestedCourses.length) improvements.push(`Add or clarify major-related coursework such as ${formatList(courseSummary.missingSuggestedCourses.slice(0, 4))}.`);
  improvements.push(...truncateArray(guidance.recommendationIdeas, 2));
  improvements.push(`Use essays or activity descriptions to connect ${major} with a specific academic or campus reason from this school profile, not just general interest.`);
  return improvements.slice(0, 4);
}

function generateMajorSpecificNextSteps(profileData, schoolProfile, courseSummary, enrichment = {}) {
  const category = getMajorCategory(profileData.intendedMajor);
  const guidance = MAJOR_GUIDANCE[category] || MAJOR_GUIDANCE.other;
  const steps = [];
  steps.push(...truncateArray(enrichment.specificRecommendationIdeas || [], 2));
  steps.push(...truncateArray(guidance.recommendationIdeas, 2));
  if (category === "businessSocialScience" && /robotics|engineering|technical|coding|operations/i.test(getActivityText(profileData))) {
    steps.push("Frame technical or operations activities through markets, productivity, business strategy, innovation, or data-driven decision-making.");
  }
  steps.push(`Use essays to connect ${profileData.intendedMajor || "the intended major"} with a specific academic environment or undergraduate opportunity at this school.`);
  return steps;
}

function compareSATToSchool(profileSAT, schoolSATRange) {
  const sat = Number(profileSAT || 0);
  const [low, high] = parseRange(schoolSATRange || "");
  if (!sat || !low || !high) return { status: "missing", note: "SAT comparison is limited because either the student score or school range is missing." };
  if (sat > high) return { status: "above", note: `Your ${sat} SAT is above the reported middle 50% range of ${low}-${high}, so it may be a strong testing signal if this school considers scores.` };
  if (sat >= low && sat <= high) return { status: "within", note: `Your ${sat} SAT is within the reported middle 50% range of ${low}-${high}, so it appears academically competitive for testing if scores are considered.` };
  return { status: "below", note: `Your ${sat} SAT is below the reported middle 50% range of ${low}-${high}; if the school is test-optional, consider whether submitting helps the application.` };
}

function compareACTToSchool(profileACT, schoolACTRange) {
  const act = Number(profileACT || 0);
  const [low, high] = parseRange(schoolACTRange || "");
  if (!act || !low || !high) return { status: "missing", note: "ACT comparison is limited because either the student score or school range is missing." };
  if (act > high) return { status: "above", note: `Your ${act} ACT is above the reported middle 50% range of ${low}-${high}, so it may be a strong testing signal if this school considers scores.` };
  if (act >= low && act <= high) return { status: "within", note: `Your ${act} ACT is within the reported middle 50% range of ${low}-${high}, so it appears academically competitive for testing if scores are considered.` };
  return { status: "below", note: `Your ${act} ACT is below the reported middle 50% range of ${low}-${high}; if the school is test-optional, consider whether submitting helps the application.` };
}

function evaluateCourseRigor(profileData, intendedMajor) {
  const ap = (profileData.apCourses || []).length || Number(profileData.apCourseCount || 0);
  const honors = (profileData.honorsCourses || []).length || Number(profileData.honorsCourseCount || 0);
  const ib = (profileData.ibCourses || []).length || Number(profileData.ibCourseCount || 0);
  const dual = (profileData.dualEnrollmentCourses || []).length || Number(profileData.dualEnrollmentCourseCount || 0);
  const courses = [
    ...(profileData.apCourses || []),
    ...(profileData.ibCourses || []),
    ...(profileData.honorsCourses || []),
    ...(profileData.dualEnrollmentCourses || []),
    ...(profileData.customAdvancedCourses || []),
    profileData.seniorYearCourses,
    profileData.courseList,
    profileData.majorRelatedCourses,
  ].join(" ").toLowerCase();
  const advancedTotal = ap + honors * 0.6 + ib + dual;
  const category = getMajorCategory(intendedMajor);
  const majorKeywords = (MAJOR_GUIDANCE[category] || MAJOR_GUIDANCE.other).evidenceToLookFor.slice(0, 8);
  const majorMatches = majorKeywords.filter((keyword) => courses.includes(keyword)).length;
  const score = clampScore(45 + Math.min(35, advancedTotal * 4) + Math.min(20, majorMatches * 6));
  const summary = advancedTotal
    ? `${ap} AP, ${honors} Honors, ${ib} IB, and ${dual} dual enrollment courses are listed.`
    : "Advanced course counts are not fully entered yet.";
  const majorNote = majorMatches
    ? `Major-related coursework appears to include ${majorKeywords.filter((keyword) => courses.includes(keyword)).slice(0, 4).join(", ")}.`
    : "Major-related coursework should be clarified, especially advanced courses connected to the intended major.";
  return { score, summary, majorNote, courseList: profileData.courseList || "", seniorYearCourses: profileData.seniorYearCourses || "", majorRelatedCourses: profileData.majorRelatedCourses || "" };
}

function getTestingGuidance(profileData, schoolData, admissionsFactors = {}) {
  const policy = schoolData.testingPolicy || "Unknown";
  if (policy === "Blind" || policy === "Not Considered" || admissionsFactors["Standardized test scores"] === "Not Considered") {
    return { policy, note: "This school does not appear to consider standardized test scores in the school-specific evaluation, so SAT/ACT should not affect this fit analysis." };
  }
  const sat = compareSATToSchool(profileData.sat, schoolData.satMiddle50);
  const act = compareACTToSchool(profileData.act, schoolData.actMiddle50);
  const best = sat.status === "above" || sat.status === "within" ? sat : act.status === "above" || act.status === "within" ? act : sat.status !== "missing" ? sat : act;
  const optionalNote = policy === "Optional" ? " Because this school is test-optional in the app data, submit only if the score strengthens the academic picture." : "";
  return { policy, sat, act, note: `${best.note}${optionalNote}` };
}

function getRelevantRankings(schoolProfile, intendedMajor) {
  const sources = schoolProfile.rankings?.sources || [];
  if (!sources.length) return [];
  const major = String(intendedMajor || "").toLowerCase();
  const priorities = /\b(engineering|ece|electrical|computer|cs|data|ai)\b/.test(major) ? ["Undergraduate Engineering", "Electrical Engineering", "Computer Engineering", "Computer Science", "Artificial Intelligence", "Data Science", "National Universities"] :
    /business|finance|marketing|entrepreneur/.test(major) ? ["Undergraduate Business", "Finance", "Entrepreneurship", "Marketing", "National Universities"] :
    /biology|pre-med|medicine|health|biomedical/.test(major) ? ["Biology", "Biomedical Engineering", "Public Health", "National Universities", "Research"] :
    /political|policy|international|government/.test(major) ? ["Political Science", "Public Policy", "International Relations", "National Universities"] :
    /film|art|design|theater|music|communication/.test(major) ? ["Film", "Performing Arts", "Design", "Fine Arts", "Communications"] :
    ["National Universities"];
  return sources
    .filter((item) => item.displayText)
    .map((item) => {
      const index = priorities.findIndex((priority) => item.category?.toLowerCase().includes(priority.toLowerCase()));
      return { ...item, relevance: index === -1 ? 99 : index };
    })
    .sort((a, b) => a.relevance - b.relevance)
    .slice(0, 4);
}

function getRelevantMajorRankings(schoolProfile, intendedMajor, majorCategory = getMajorCategory(intendedMajor)) {
  const rankings = schoolProfile?.schoolMetrics?.rankings?.majorSpecific || [];
  const major = normalizeText(intendedMajor);
  const isCsMajor = /computer science|software|data|artificial intelligence|ai/.test(major);
  const isEceMajor = /electrical|computer engineering|ece/.test(major);
  const isBusinessMajor = /business|economics|finance|accounting|marketing|management|entrepreneurship|commerce|operations|analytics|supply chain|agribusiness/.test(major);
  const isPolicyEconomicsMajor = /political science|public policy|international relations|government|global affairs|international studies/.test(major);
  const isHealthMajor = /biology|pre-med|pre med|medicine|medical|public health|nursing|neuroscience|biochemistry|health sciences|biomedical sciences|biomedical engineering|bioengineering|life sciences|pre-veterinary|pre veterinary|animal science|biosciences/.test(major);
  const isArtsMediaMajor = /film|media|communications|journalism|design|theater|theatre|music|fine arts|art|arts|architecture|photography|creative writing|radio|tv|television/.test(major);
  const effectiveMajorCategory = majorCategory === "other" || !majorCategory
    ? isArtsMediaMajor ? "humanitiesArtsMedia" : isHealthMajor ? "lifeSciencesHealth" : (isBusinessMajor || isPolicyEconomicsMajor) ? "businessSocialScience" : "other"
    : majorCategory;
  if (effectiveMajorCategory !== "engineeringCS" && effectiveMajorCategory !== "businessSocialScience" && effectiveMajorCategory !== "lifeSciencesHealth" && effectiveMajorCategory !== "humanitiesArtsMedia" && !isBusinessMajor && !isPolicyEconomicsMajor && !isHealthMajor && !isArtsMediaMajor) return [];
  return rankings
    .filter((item) => item.verified === true && item.rank !== null && item.displayText)
    .filter((item) => {
      const relevant = (item.relevantMajors || []).map(normalizeText);
      const category = normalizeText(item.category);
      const isBusinessRanking = /business|finance|accounting|marketing|management|entrepreneurship/.test(category) || relevant.some((entry) => /business|economics|finance|accounting|marketing|management|entrepreneurship|commerce|operations|analytics|supply chain|agribusiness/.test(entry));
      const isEngineeringRanking = /engineering|computer science|electrical|computer engineering|u\.s\. engineering/.test(category) || relevant.some((entry) => /engineering|computer science|software|data science|artificial intelligence|robotics|informatics/.test(entry));
      const isHealthRanking = /medicine|life sciences|biological sciences|biology|nursing|health|pre-health|pre-med|biosciences/.test(category) || relevant.some((entry) => /biology|biochemistry|pre-med|pre med|medicine|public health|nursing|neuroscience|health sciences|biomedical|bioengineering|life sciences|pre-veterinary|animal science|biosciences/.test(entry));
      const isHealthCategoryRanking = /medicine|life sciences|biological sciences|biology|nursing|health|pre-health|pre-med|biosciences/.test(category);
      const isArtsMediaRanking = /film|photography|design|communications|media|campus/.test(category) || relevant.some((entry) => /film|photography|media|communications|journalism|design|\barts?\b|architecture|theater|theatre|music|creative writing|radio|tv|television/.test(entry));
      if (effectiveMajorCategory === "engineeringCS" && isBusinessRanking) return false;
      if (effectiveMajorCategory === "businessSocialScience" && isEngineeringRanking && !isBusinessRanking) return false;
      if (effectiveMajorCategory === "lifeSciencesHealth" && isEngineeringRanking && !isHealthCategoryRanking) return false;
      if (effectiveMajorCategory === "lifeSciencesHealth" && isBusinessRanking && !isHealthRanking) return false;
      if (effectiveMajorCategory === "humanitiesArtsMedia" && (isEngineeringRanking || isBusinessRanking || isHealthRanking) && !isArtsMediaRanking) return false;
      if (effectiveMajorCategory !== "lifeSciencesHealth" && isHealthRanking && !isBusinessRanking && !isEngineeringRanking) return false;
      if (effectiveMajorCategory !== "humanitiesArtsMedia" && isArtsMediaRanking && !isBusinessRanking && !isEngineeringRanking && !isHealthRanking) return false;
      if (!relevant.length) return true;
      if (relevant.some((entry) => major && (entry.includes(major) || major.includes(entry)))) return true;
      const relevantText = relevant.join(" ");
      if (effectiveMajorCategory === "engineeringCS") {
        if (isCsMajor && /computer science|data science|artificial intelligence|software engineering|computer engineering/.test(relevantText)) return true;
        if (isEceMajor && /electrical engineering|computer engineering|electrical and computer engineering/.test(relevantText)) return true;
        return /engineering/.test(major) && relevant.some((entry) => /engineering/.test(entry));
      }
      if (effectiveMajorCategory === "businessSocialScience") {
        if (isBusinessMajor && /business|economics|finance|accounting|marketing|management|entrepreneurship|commerce|operations|analytics|supply chain|agribusiness/.test(relevantText)) return true;
        if (isPolicyEconomicsMajor && /economics|political science|public policy|international relations|government|global affairs|international studies|business|finance/.test(relevantText)) return true;
      }
      if (effectiveMajorCategory === "lifeSciencesHealth") {
        if (isHealthMajor && /biology|biochemistry|pre-med|pre med|medicine|public health|nursing|neuroscience|health sciences|biomedical|bioengineering|life sciences|pre-veterinary|animal science|biosciences/.test(relevantText)) return true;
      }
      if (effectiveMajorCategory === "humanitiesArtsMedia") {
        if (isArtsMediaMajor && /film|photography|media|communications|journalism|design|\barts?\b|architecture|theater|theatre|music|creative writing|radio|tv|television/.test(relevantText)) return true;
      }
      return false;
    })
    .map((item) => {
      const category = normalizeText(item.category);
      const priority = isEceMajor && /electrical|computer engineering/.test(category) ? 0 :
        isCsMajor && /computer science/.test(category) ? 0 :
        isBusinessMajor && /undergraduate business|best undergraduate business/.test(category) ? 0 :
        (isBusinessMajor || isPolicyEconomicsMajor) && /business schools/.test(category) ? 1 :
        isHealthMajor && /medicine|biology|biological sciences|life sciences|nursing/.test(category) ? 0 :
        isArtsMediaMajor && /design|film|photography|communications/.test(category) ? 0 :
        /undergraduate engineering|best undergraduate engineering/.test(category) ? 1 :
        /computer science/.test(category) ? 2 : 3;
      return { ...item, relevance: priority };
    })
    .sort((a, b) => a.relevance - b.relevance || a.rank - b.rank)
    .slice(0, 3);
}

function getRelevantCampusLifeRankings(schoolProfile, collegePreferences = {}) {
  const rankings = schoolProfile?.schoolMetrics?.rankings?.campusLife || [];
  const vibes = normalizeAnyArray(collegePreferences.campusVibe).map(normalizeText).join(" ");
  const settings = normalizeAnyArray(collegePreferences.urbanSuburbanRural).map(normalizeText).join(" ");
  const wantsCampusLife = collegePreferences.qualityOfLifeImportance === "High" ||
    collegePreferences.sportsImportance === "High" ||
    /school spirit|sports|collaborative|social|campus|student life/.test(vibes) ||
    /college town|urban|coastal/.test(settings);
  if (!wantsCampusLife) return [];
  return rankings
    .filter((item) => item.verified === true && item.rank !== null && item.displayText)
    .map((item) => {
      const category = normalizeText(item.category);
      const priority = /student life/.test(category) ? 0 :
        /campus/.test(category) ? 1 :
        /party|social scene/.test(category) ? 2 : 3;
      return { ...item, relevance: priority };
    })
    .sort((a, b) => a.relevance - b.relevance || a.rank - b.rank)
    .slice(0, 2);
}

function getVerifiedOverallRanking(schoolProfile) {
  const overall = schoolProfile?.schoolMetrics?.rankings?.overall || [];
  const verifiedMetric = overall.find((item) => item.source === "U.S. News & World Report" && item.category === "National Universities" && item.verified === true && item.rank !== null && item.displayText);
  if (verifiedMetric) return verifiedMetric;
  const legacy = schoolProfile?.rankings?.sources || [];
  return legacy.find((item) => item.source === "U.S. News & World Report" && item.category === "National Universities" && item.verified === true && item.rank !== null && item.displayText) || null;
}

function getRankingDisplayText(schoolProfile) {
  const ranking = getVerifiedOverallRanking(schoolProfile);
  return formatRankingItemDisplay(ranking);
}

function formatRankingItemDisplay(ranking) {
  if (!ranking) return "";
  return `${ranking.displayText} (${ranking.source}${ranking.sourceYear ? `, ${ranking.sourceYear}` : ""})`;
}

function scoreMajorFit(profileData, schoolProfile) {
  const notes = generateMajorFitNotes(profileData, schoolProfile);
  const direct = /connects most directly/i.test(notes[0]) ? 78 : 58;
  const category = getMajorCategory(profileData.intendedMajor);
  const keywords = (MAJOR_GUIDANCE[category] || MAJOR_GUIDANCE.other).evidenceToLookFor;
  const evidence = activityKeywordSignal(profileData.activities, keywords) || extracurricularSignal(profileData);
  return clampScore((direct * 0.55) + (evidence * 0.45));
}

function scoreInstitutionalFit(profileData, schoolProfile) {
  const activityText = getActivityText(profileData);
  const signals = schoolProfile.applicantFitSignals || [];
  const matches = signals.filter((signal) => signal.toLowerCase().split(/\W+/).some((word) => word.length > 5 && activityText.includes(word))).length;
  return clampScore(55 + matches * 10 + Math.min(state.activities.length, 5) * 3);
}

function isEngineeringMajor(major) {
  return getMajorCategory(major) === "engineeringCS";
}

function getActivityText(profileData) {
  return [
    profileData.intendedMajor,
    ...(profileData.activities || []).map((activity) => `${activity.category} ${activity.title} ${activity.description}`),
    ...(profileData.awards || []).map((award) => `${award.title} ${award.level}`),
  ].join(" ").toLowerCase();
}

function profileActivitySnapshot(profileData) {
  const activities = (profileData.activities || []).slice(0, 3).map((activity) => activity.title).filter(Boolean);
  const awards = (profileData.awards || []).slice(0, 2).map((award) => award.title).filter(Boolean);
  const pieces = [...activities, ...awards];
  return pieces.length ? `Activities include ${formatList(pieces)}.` : "Activities and awards are not listed yet.";
}

function renderBriefRuleReport(scoringResults) {
  const profileData = getProfileData();
  const major = profileData.intendedMajor || "your intended major";
  const schoolProfile = getSchoolProfile(scoringResults.schoolName);
  const rankings = getRelevantRankings(schoolProfile, major);
  const courseSummary = scoringResults.majorRelevantCourseSummary || buildMajorRelevantCourseSummary(profileData, major);
  const academic = [
    profileData.gpa ? `GPA: ${profileData.gpa}` : null,
    profileData.sat ? `SAT: ${profileData.sat}` : null,
    profileData.act ? `ACT: ${profileData.act}` : null,
    profileData.classRank ? `Class rank: ${profileData.classRank}` : null,
  ].filter(Boolean);
  const additional = scoringResults.contextualNotes.filter((note) => /First-generation|Alumni|State residency|Religious|Geographical/.test(note)).slice(0, 3);
  return `
    <article class="report-card">
      ${reportSection("Student Profile", [
        `${profileData.name || "Student"}${profileData.location ? `, ${profileData.location}` : ""}${profileData.gradYear ? `, Class of ${profileData.gradYear}` : ""}`,
        `Intended major: ${major}`,
        academic.join("; ") || "Add GPA, testing, and class rank for a clearer academic read.",
        `Course rigor: ${scoringResults.courseRigor.summary}`,
        `Major-relevant courses: ${courseSummary.summaryText.replace(/^Major-relevant courses?:\s*/i, "").replace(/^Major-relevant coursework\s*/i, "Coursework ")}`,
        profileActivitySnapshot(profileData),
      ], true)}
      ${reportSection("School Fit Summary", `${scoringResults.schoolName} is especially strong in ${(schoolProfile.strongestMajors || []).slice(0, 5).join(", ")}. ${schoolProfile.institutionalPersonality || ""} For a ${major} applicant, the fit is strongest when the applicant's evidence matches what the school emphasizes, not when the school is simply highly selective or well known.`)}
      ${reportSection("Academic Fit", `The academic profile should be read through the factors this school considers: GPA, class rank, rigor, and testing only matter when listed in the school data. ${scoringResults.testingGuidance.note} Course rigor appears ${scoringResults.courseRigor.score >= 75 ? "strong overall" : "still worth clarifying"} based on the advanced course counts entered.`)}
      ${reportSection("Major Fit", `${scoringResults.majorFitNotes.join(" ")} Strong programs can mean stronger reputation and resources, but also a more competitive applicant pool.`)}
      ${rankings.length ? reportSection("Rankings Context", rankings.slice(0, 3).map((ranking) => `${ranking.displayText} (${ranking.source}, ${schoolProfile.rankings.sourceYear || "year not set"}). Use this as reputation/resource context, not an admissions-chance signal.`), true) : ""}
      ${reportSection("Activities & Impact", `For this school, activities should show more than participation. ${isEngineeringMajor(major) ? "For an ECE/engineering applicant, robotics, circuits, coding, hardware, AI, research, competitions, or independent builds would make the profile feel more aligned." : "The most useful evidence would show depth, leadership, initiative, service, creativity, or measurable impact connected to the intended major."}`)}
      ${reportSection("Additional Considerations", additional.length ? additional : ["Contextual factors should be used as context only, not as automatic advantages or disadvantages."], true)}
      ${reportSection("Suggested Next Steps", dedupeStrings(scoringResults.recommendedImprovements.concat([
        !courseSummary.listedRelevantCourses.length ? `Add major-related coursework or project evidence tied to ${major}.` : "",
        "Use essays to connect personal story, academic interests, and school fit without repeating the activity list.",
      ]).filter(Boolean)).slice(0, 5), true)}
      ${reportSection("Disclaimer", DISCLAIMER_TEXT)}
    </article>
  `;
}

function reportSection(title, content, bullets = false) {
  const body = Array.isArray(content)
    ? bullets ? `<ul>${content.filter(Boolean).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : content.map((item) => `<p>${escapeHtml(item)}</p>`).join("")
    : `<p>${escapeHtml(content)}</p>`;
  return `<section class="report-section"><h3>${title}</h3>${body}</section>`;
}

function buildSpecificStrengths(scoringResults, schoolProfile) {
  return scoringResults.strengths.map((strength) => {
    if (/GPA/i.test(strength)) return `Your GPA may strengthen the application because this school weighs academic performance heavily; it will be more convincing when paired with ${schoolProfile.strongestMajors?.slice(0, 2).join(" or ")}-aligned coursework or projects.`;
    if (/Extracurricular/i.test(strength)) return `Your activities appear useful because this school values impact beyond class; make sure the entries show leadership, measurable contribution, and fit with ${state.profile.intendedMajor || "your major"}.`;
    return strength;
  });
}

function recommendedSchoolsForMajor(scoringResults) {
  const major = String(state.profile.intendedMajor || "").toLowerCase();
  const saved = getSavedSchools();
  if (!saved.length) return [];
  const majorWords = major.split(/[^a-z]+/).filter((word) => word.length > 3);
  return saved
    .map((school) => {
      const text = `${school.name} ${school.blurb}`.toLowerCase();
      const majorMatch = majorWords.some((word) => text.includes(word)) ? 12 : 0;
      return { school, score: scoreApplicantForSchool(getProfileData(), school).schoolSpecificFitScore + majorMatch };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.school);
}

function getApplicantFactorScore(field, profileData, school) {
  const value = profileData[field];
  if (field === "gpa") return clampScore((Number(profileData.gpa || 0) / 4) * 100);
  if (field === "testScores") return testScoreSignal(profileData, school);
  if (field === "extracurriculars") return extracurricularSignal(profileData);
  if (["courseRigor", "recommendations", "essayStrength", "interviewStrength", "demonstratedInterest"].includes(field)) return 60;
  if (["talentAbility", "characterPersonalQualities"].includes(field)) return Math.max(60, extracurricularSignal(profileData) - 5);
  if (field === "volunteerWork") return Math.max(choiceSignal(value), activityKeywordSignal(profileData.activities, ["volunteer", "service", "community", "nonprofit"]));
  if (field === "workExperience") return Math.max(choiceSignal(value), activityKeywordSignal(profileData.activities, ["work", "job", "intern", "paid", "family responsibilities"]));
  if (field === "classRank") return rankSignal(value);
  return choiceSignal(value);
}

function choiceSignal(value) {
  const text = String(value || "").toLowerCase();
  if (!text) return 45;
  if (/exceptional|major|most rigorous|very strong|top 1|national|international/.test(text)) return 95;
  if (/distinctive|strong|consistent|top 5|top 10/.test(text)) return 82;
  if (/solid|moderate|some|basic|top 25/.test(text)) return 65;
  if (/developing|draft|light|low|none yet|not started/.test(text)) return 42;
  if (/not offered|not applicable|prefer not/.test(text)) return 50;
  return 60;
}

function rankSignal(value) {
  const text = String(value || "").toLowerCase();
  const fraction = text.match(/(\d+)\s*\/\s*(\d+)/);
  if (fraction) {
    const rank = Number(fraction[1]);
    const total = Number(fraction[2]);
    if (rank && total) return clampScore(100 - (rank / total) * 180);
  }
  const number = Number(text.match(/\d+/)?.[0] || 0);
  if (/top/.test(text) && number) {
    if (number <= 5) return 92;
    if (number <= 10) return 84;
    if (number <= 25) return 68;
  }
  return choiceSignal(value);
}

function testScoreSignal(profileData, school) {
  const [satLow, satHigh] = parseRange(school.satRange);
  const [actLow, actHigh] = parseRange(school.actRange);
  const sat = Number(profileData.sat || 0);
  const act = Number(profileData.act || 0);
  const satScore = sat && satLow && satHigh ? normalizeBetween(sat, satLow - 120, satHigh + 60) : 0;
  const actScore = act && actLow && actHigh ? normalizeBetween(act, actLow - 3, actHigh + 1) : 0;
  return Math.max(satScore, actScore, sat || act ? 45 : 40);
}

function extracurricularSignal(profileData) {
  const countScore = Math.min(85, (profileData.activities?.length || 0) * 8 + 20);
  const leadershipText = (profileData.activities || []).map((activity) => `${activity.title} ${activity.description}`).join(" ").toLowerCase();
  const leadershipBonus = /(captain|president|founder|lead|leader|created|built|organized|published|research|intern)/.test(leadershipText) ? 12 : 0;
  return clampScore(countScore + leadershipBonus);
}

function activityKeywordSignal(activities, keywords) {
  const text = (activities || []).map((activity) => `${activity.category} ${activity.title} ${activity.description}`).join(" ").toLowerCase();
  return keywords.some((keyword) => text.includes(keyword)) ? 76 : 45;
}

function normalizeBetween(value, low, high) {
  return clampScore(((value - low) / (high - low)) * 100);
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value || 0)));
}

function factorNote(label, importance, applicantScore, school) {
  if (importance === "Not Considered") return `${school.name} does not appear to consider this factor, so it is ignored in the score.`;
  if (applicantScore >= 78) return `This may strengthen your application at this school because it is listed as ${importance}.`;
  if (applicantScore < 58) return `This could matter more at this college because it is listed as ${importance}; add clearer evidence if possible.`;
  return `This factor is included because ${school.name} lists it as ${importance}.`;
}

function contextualNote(label, importance, value, school, context = {}) {
  if (label === "Alumni/ae relation") {
    const matching = context.matchingAlumniRelations || [];
    if (!matching.length) return "";
    if (importance === "Not Considered") return `A listed alumni relation matches ${school.name}, but alumni/ae relation is marked as Not Considered in the school data, so it should not affect this review.`;
    return `A listed alumni relation matches ${school.name}, and alumni/ae relation is marked as ${importance} in the school data. This may provide context, but it should not be treated as a guarantee or a substitute for academic and personal fit.`;
  }
  if (label === "First generation" && importance !== "Not Considered" && context.profileData?.firstGeneration === "Yes") return `First-generation status is listed as ${importance} at this school, so it may provide helpful context for the applicant's educational background.`;
  if (label === "State residency" && importance !== "Not Considered" && context.profileData?.stateResidency) return `State residency is ${context.profileData.stateResidency}; because this school lists state residency as ${importance}, public-university tuition or in-state review context may matter. This should not be treated as a guarantee.`;
  if (label === "Geographical residence" && importance !== "Not Considered" && value) return `Geographical residence is listed as ${importance}, but it should not be treated as a guaranteed advantage.`;
  if (label === "Religious affiliation/commitment" && importance === "Not Considered" && value) return `Religious affiliation/commitment is listed as Not Considered at this school and should not affect this recommendation.`;
  if (importance === "Not Considered") return "";
  return `${label} is listed as ${importance}. This factor may provide context, but it should not be treated as a guarantee.`;
}

function buildImprovementNotes(factors, school) {
  const priorities = factors
    .filter((factor) => factor.importance === "Very Important" || factor.importance === "Important")
    .sort((a, b) => a.applicantScore - b.applicantScore)
    .slice(0, 4);
  if (!priorities.length) return [`Verify ${school.name}'s current CDS and admissions pages before drawing conclusions.`];
  return priorities.map((factor) => `Improve ${factor.factor.toLowerCase()} evidence because ${school.name} marks it as ${factor.importance}.`);
}

function markdownToHtml(markdown) {
  const cleaned = escapeHtml(markdown).replace(/\*\*/g, "");
  const parts = cleaned.split(/\n(?=# )/g).filter(Boolean);
  if (parts.length > 1) {
    return parts.map((part) => {
      const [headingLine, ...lines] = part.trim().split("\n");
      const heading = headingLine.replace(/^#\s*/, "");
      const body = lines.map((line) => line.trim()).filter(Boolean).map((line) => {
        if (/^- /.test(line)) return `<li>${line.replace(/^- /, "")}</li>`;
        return `<p>${line}</p>`;
      }).join("");
      const withLists = body.replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>");
      return `<section class="report-section"><h3>${heading}</h3>${withLists}</section>`;
    }).join("");
  }
  return cleaned
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h3>$1</h3>")
    .replace(/^# (.*)$/gm, "<h3>$1</h3>")
    .replace(/^\d+\. (.*)$/gm, "<p>$1</p>")
    .replace(/^- (.*)$/gm, "<ul><li>$1</li></ul>")
    .replace(/\n{2,}/g, "<br>");
}

function cleanGeneratedReport(text, scoringResults, schoolProfile) {
  const reportContext = scoringResults?.student ? scoringResults : buildCompactReportContext(getProfileData(), schoolProfile || getSchoolProfile(scoringResults?.schoolName), scoringResults || scoreApplicantForSchool(getProfileData(), getReviewerSchool()));
  let output = String(text || "")
    .replace(/\*\*/g, "")
    .replace(/Intented Major/gi, "Intended Major")
    .replace(/This school may be a reach, target, or likely option depending on the full applicant pool\.?/gi, "")
    .replace(/Use this score as a fit signal, not as an admissions probability\.?/gi, "")
    .replace(/this school's emphasis on ([^.]+) is a weakness/gi, "the applicant should clarify evidence for $1")
    .replace(/the school's emphasis on ([^.]+) is a weakness/gi, "the applicant should clarify evidence for $1");
  if (!reportContext.rankingsContext?.include) {
    output = output.replace(/# Rankings Context[\s\S]*?(?=\n# |$)/i, "");
  }
  output = ensureReportSections(output);
  output = dedupeStrings(output.split("\n")).join("\n");
  output = output.replace(/# Disclaimer[\s\S]*$/i, "").trim();
  return `${output}\n\n# Disclaimer\n${DISCLAIMER_TEXT}`;
}

function validateGeneratedReport(output, reportContext) {
  const text = String(output || "");
  if (!text.trim()) return false;
  if (/context window|School Knowledge Base Profile|Limited information available|State Residency:/i.test(text)) return false;
  if ((text.match(/# Disclaimer/gi) || []).length > 1) return false;
  const category = reportContext.student?.majorCategory;
  if (category !== "engineeringCS" && /For engineering\/ECE|Electrical Engineering and Computer Sciences/i.test(text)) return false;
  if (category === "businessSocialScience" && /\b(circuits|hardware|embedded systems|PCB)\b/i.test(text) && !/operations|markets|productivity|business|innovation|data-driven|secondary context/i.test(text)) return false;
  if (/^#\s+\w+[\s\S]*?\n\s*(?=\n#|$)/gm.test(text) && [...text.matchAll(/^#\s+(.+)\n\s*(?=\n#|$)/gm)].length) return false;
  const headings = [...text.matchAll(/^#\s+(.+)$/gm)].map((match) => match[1].trim().toLowerCase());
  return headings.length === new Set(headings).size;
}

function ensureReportSections(text) {
  const required = ["Student Profile", "School Fit Summary", "Academic Fit", "Major Fit", "Activities & Impact", "Additional Considerations", "Suggested Next Steps"];
  let output = text.trim();
  required.forEach((heading) => {
    if (!new RegExp(`# ${heading}\\b`, "i").test(output)) output += `\n\n# ${heading}\nLimited information available.`;
  });
  return output;
}

function dedupeStrings(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = String(item).trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function profileInput(label, key, placeholder, type = "text") {
  return field(label, `<input data-profile="${key}" value="${escapeHtml(state.profile[key] || "")}" type="${type}" placeholder="${placeholder}" />`);
}

function profileTextarea(label, key, placeholder) {
  return field(label, `<textarea data-profile="${key}" rows="3" placeholder="${escapeHtml(placeholder)}">${escapeHtml(state.profile[key] || "")}</textarea>`);
}

function profileSelect(label, key, options) {
  return field(label, `<select data-profile="${key}">${options.map((option) => `<option value="${escapeHtml(option)}" ${option === (state.profile[key] || "") ? "selected" : ""}>${escapeHtml(option || "Select")}</option>`).join("")}</select>`);
}

function courseChipInput(label, key, options, placeholder) {
  const selected = getCourseArray(key);
  const listId = `${key}-options`;
  return `
    <div class="chip-field">
      <div class="chip-label"><span>${label}</span><small>${selected.length} selected</small></div>
      <div class="chip-list">${selected.map((course) => `<button class="chip" data-remove-course="${key}" data-course="${escapeHtml(course)}" type="button">${escapeHtml(course)} <span aria-hidden="true">x</span></button>`).join("") || `<span class="muted">None added yet.</span>`}</div>
      <div class="chip-add">
        <input data-course-input="${key}" list="${listId}" placeholder="${escapeHtml(placeholder)}" />
        <button class="btn" data-add-course="${key}" type="button">Add</button>
      </div>
      <datalist id="${listId}">${options.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("")}</datalist>
    </div>
  `;
}

function majorSelector() {
  const major = state.profile.intendedMajor || "";
  const listId = "major-options";
  return `
    <div class="field major-field">
      <span>Intended major</span>
      <div class="chip-list">${major ? `<button class="chip" data-clear-major type="button">${escapeHtml(major)} <span aria-hidden="true">x</span></button>` : `<span class="muted">No major selected.</span>`}</div>
      <div class="chip-add">
        <input data-major-input list="${listId}" value="${escapeHtml(major)}" placeholder="Search or add custom major" />
        <button class="btn" data-set-major type="button">Set major</button>
      </div>
      <datalist id="${listId}">${Object.entries(MAJOR_OPTIONS).map(([group, majors]) => majors.map((option) => `<option value="${escapeHtml(option)}" label="${escapeHtml(MAJOR_CATEGORY_LABELS[group] || "Other")}"></option>`).join("")).join("")}</datalist>
    </div>
  `;
}

function field(label, control) {
  return `<label class="field"><span>${label}</span>${control}</label>`;
}

function rangeField(label, key, min, max, step, suffix = "") {
  return field(label, `
    <div class="range-field">
      <input data-filter="${key}" value="${escapeHtml(state.filters[key])}" type="range" min="${min}" max="${max}" step="${step}" />
      <strong>${state.filters[key]}${suffix}</strong>
    </div>
  `);
}

function dualRangeField(label, minKey, maxKey, min, max, step) {
  const low = Number(state.filters[minKey]);
  const high = Number(state.filters[maxKey]);
  const left = ((low - min) / (max - min)) * 100;
  const width = ((high - low) / (max - min)) * 100;
  return field(label, `
    <div class="dual-range" style="--range-left:${left}%;--range-width:${width}%">
      <div class="dual-values"><strong data-range-value="${minKey}">${low}</strong><span>to</span><strong data-range-value="${maxKey}">${high}</strong></div>
      <div class="dual-track">
        <input data-filter="${minKey}" data-range-min="${minKey}" data-range-peer="${maxKey}" value="${low}" type="range" min="${min}" max="${max}" step="${step}" aria-label="${label} minimum" />
        <input data-filter="${maxKey}" data-range-max="${maxKey}" data-range-peer="${minKey}" value="${high}" type="range" min="${min}" max="${max}" step="${step}" aria-label="${label} maximum" />
      </div>
    </div>
  `);
}

function select(name, options, selected, formName = false) {
  const attr = formName ? `name="${name}"` : `data-filter="${name}"`;
  return `<select ${attr}>${options.map((option) => `<option ${option === selected ? "selected" : ""}>${option}</option>`).join("")}</select>`;
}

function sortSchools(a, b) {
  switch (state.filters.sort) {
    case "Acceptance: low to high": return a.acceptance - b.acceptance;
    case "Acceptance: high to low": return b.acceptance - a.acceptance;
    case "Size: small to large": return a.size - b.size;
    case "Size: large to small": return b.size - a.size;
    case "SAT: high to low": return b.satLow - a.satLow;
    default: return 0;
  }
}

function normalizeAnyArray(items) {
  return (Array.isArray(items) ? items : []).filter((item) => item && item !== "Any" && item !== "No preference");
}

function schoolMatchesPreferredRegion(school, preferredRegion) {
  const region = String(preferredRegion || "");
  if (region === school.region) return true;
  if (region === "West Coast") return ["California", "Washington", "Oregon"].includes(school.state);
  if (region === "Pacific Northwest") return ["Washington", "Oregon"].includes(school.state);
  if (region === "Mid-Atlantic") return ["New York", "New Jersey", "Pennsylvania", "Maryland", "District of Columbia", "Delaware", "Virginia"].includes(school.state);
  if (region === "Southwest") return ["Arizona", "Texas", "New Mexico", "Nevada"].includes(school.state);
  return false;
}

function inferClimateTags(location, region, campus = "") {
  const text = `${location} ${region} ${campus}`.toLowerCase();
  const tags = [];
  if (/california|florida|georgia|texas|arizona|louisiana|southern|los angeles|new orleans|houston|austin|tempe|gainesville|tallahassee|atlanta|durham|chapel hill|charlottesville|nashville/.test(text)) tags.push("Warm");
  if (/massachusetts|new hampshire|vermont|new york|michigan|wisconsin|illinois|indiana|ohio|pennsylvania|connecticut|rhode island|midwest|northeast|snow|boston|chicago|ithaca|madison|ann arbor|hanover|pittsburgh|south bend/.test(text)) tags.push("Cold/snowy");
  if (/california|bay area|stanford|berkeley|irvine|san diego|santa barbara|seattle|washington|virginia|north carolina|tennessee/.test(text)) tags.push("Mild");
  if (/coastal|beach|ocean|la jolla|santa barbara|los angeles|seattle|boston|new york/.test(text)) tags.push("Coastal");
  return dedupeStrings(tags);
}

function inferQualityOfLifeTags(location, region, campus = "") {
  const text = `${location} ${region} ${campus}`.toLowerCase();
  return dedupeStrings([
    /college-town|hanover|ithaca|ann arbor|madison|chapel hill|charlottesville|athens|west lafayette|college station|davis/.test(text) ? "College town" : "",
    /urban|new york|boston|chicago|los angeles|atlanta|philadelphia|dc|seattle|austin|pittsburgh|baltimore/.test(text) ? "Urban access" : "",
    /coastal|lakeside|riverfront|beach|la jolla|santa barbara|seattle/.test(text) ? "Water/coastal setting" : "",
  ]);
}

function matchVibePreferences(vibes, school) {
  const selected = normalizeAnyArray(vibes);
  if (!selected.length) return [];
  const campus = school.schoolMetrics?.campus || {};
  const text = `${school.name} ${school.blurb} ${school.campus} ${school.sports} ${(campus.campusTags || []).join(" ")} ${(campus.qualityOfLifeTags || []).join(" ")} ${(campus.locationAdvantages || []).join(" ")}`.toLowerCase();
  const patterns = {
    "Academic/intense": /rigorous|intense|selective|academic|ivy|technology institute|mit|uchicago|princeton/,
    "Collaborative": /collaborative|residential|community|college-town|liberal arts|close faculty/,
    "Pre-professional": /business|engineering|nursing|communications|professional|co-op|internship|career/,
    "Creative": /arts|film|music|theater|design|creative|media|architecture/,
    "Research-heavy": /research|lab|medical|science|public health|biomedical/,
    "Entrepreneurial": /entrepreneur|startup|innovation|business|silicon valley|tech scene|create-x/,
    "School spirit/sports": /NCAA Division I|Big Ten|SEC|ACC|Big 12|school spirit|traditions/i,
    "Service/community-focused": /service|public mission|community|jesuit|civic|social innovation/,
    "Global/policy-focused": /global|international|policy|government|foreign service|dc|public affairs/,
    "Tech/startup-focused": /technology|computing|computer science|engineering|startup|tech|silicon valley|seattle/,
    "Arts/media-focused": /arts|media|film|journalism|communications|music|theater/,
  };
  return selected.filter((vibe) => patterns[vibe]?.test(text));
}

function activitySelect() {
  return `<select name="category">${Object.entries(ACTIVITY_GROUPS).map(([group, items]) => `<optgroup label="${group}">${items.map((item) => `<option>${item}</option>`).join("")}</optgroup>`).join("")}</select>`;
}

function bindEvents() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tab = button.dataset.tab;
      window.scrollTo({ top: 0, behavior: "smooth" });
      render();
    });
  });

  document.querySelector("[data-clear-saved]")?.addEventListener("click", () => {
    if (!window.confirm("Clear saved Collegia data from this browser? This cannot be undone.")) return;
    clearSavedData();
    state.myList = [];
    state.profile = {};
    state.activities = [];
    state.awards = [];
    state.aiReport = "";
    state.generatedSummary = "";
    state.aiSummaryStatus = "";
    state.collegePreferences = { ...DEFAULT_COLLEGE_PREFERENCES };
    state.suggestedSchools = [];
    state.selectedSummarySections = { ...DEFAULT_SUMMARY_SECTIONS };
    state.reviewerSchool = "";
    state.savedAt = "";
    render();
  });

  document.querySelectorAll("[data-filter]").forEach((input) => {
    input.addEventListener("input", () => {
      normalizeRangeInput(input);
      state.filters[input.dataset.filter] = input.value;
      const value = document.querySelector(`[data-range-value="${input.dataset.filter}"]`);
      if (value) value.textContent = input.value;
      updateDualRangeVisual(input);
      window.clearTimeout(renderTimer);
      renderTimer = window.setTimeout(render, 180);
    });
  });

  document.querySelectorAll("[data-profile]").forEach((input) => {
    input.addEventListener("input", () => {
      state.profile[input.dataset.profile] = input.value;
      state.aiReport = "";
      state.generatedSummary = "";
      save();
    });
    input.addEventListener("change", () => {
      state.profile[input.dataset.profile] = input.value;
      state.aiReport = "";
      state.generatedSummary = "";
      save();
      render();
    });
  });

  document.querySelectorAll("[data-add-course]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.addCourse;
    const input = document.querySelector(`[data-course-input="${key}"]`);
    const value = String(input?.value || "").trim();
    if (!value) return;
    const current = getCourseArray(key);
    if (!current.some((course) => normalizeText(course) === normalizeText(value))) {
      state.profile[key] = [...current, value];
      state.aiReport = "";
      state.generatedSummary = "";
      save();
    }
    render();
  }));

  document.querySelectorAll("[data-course-input]").forEach((input) => input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    document.querySelector(`[data-add-course="${input.dataset.courseInput}"]`)?.click();
  }));

  document.querySelectorAll("[data-remove-course]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.removeCourse;
    const course = button.dataset.course;
    state.profile[key] = getCourseArray(key).filter((item) => item !== course);
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  }));

  document.querySelector("[data-set-major]")?.addEventListener("click", () => {
    const value = String(document.querySelector("[data-major-input]")?.value || "").trim();
    if (!value) return;
    state.profile.intendedMajor = value;
    state.profile.majorCategory = getMajorCategory(value);
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelector("[data-major-input]")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    document.querySelector("[data-set-major]")?.click();
  });

  document.querySelector("[data-major-input]")?.addEventListener("change", (event) => {
    const value = String(event.currentTarget.value || "").trim();
    state.profile.intendedMajor = value;
    state.profile.majorCategory = getMajorCategory(value);
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelector("[data-clear-major]")?.addEventListener("click", () => {
    state.profile.intendedMajor = "";
    state.profile.majorCategory = "";
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelectorAll("[data-preference]").forEach((input) => {
    input.addEventListener("input", () => {
      state.collegePreferences[input.dataset.preference] = input.value;
      save();
    });
    input.addEventListener("change", () => {
      state.collegePreferences[input.dataset.preference] = input.value;
      save();
      render();
    });
  });

  document.querySelectorAll("[data-pref-array]").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.prefArray;
    const value = button.dataset.prefValue;
    const current = Array.isArray(state.collegePreferences[key]) ? state.collegePreferences[key] : [];
    const isAny = value === "Any" || value === "No preference";
    if (isAny) {
      state.collegePreferences[key] = current.includes(value) ? [] : [value];
    } else {
      const withoutAny = current.filter((item) => item !== "Any" && item !== "No preference");
      state.collegePreferences[key] = withoutAny.includes(value) ? withoutAny.filter((item) => item !== value) : [...withoutAny, value];
    }
    save();
    render();
  }));

  document.querySelector("[data-preference-state]")?.addEventListener("change", (event) => {
    const value = event.currentTarget.value;
    if (!value) return;
    const current = state.collegePreferences.preferredStates || [];
    if (!current.includes(value)) state.collegePreferences.preferredStates = [...current, value];
    save();
    render();
  });

  document.querySelectorAll("[data-remove-pref-state]").forEach((button) => button.addEventListener("click", () => {
    state.collegePreferences.preferredStates = (state.collegePreferences.preferredStates || []).filter((item) => item !== button.dataset.removePrefState);
    save();
    render();
  }));

  document.querySelector("[data-clear-suggestion-preferences]")?.addEventListener("click", () => {
    state.collegePreferences = { ...DEFAULT_COLLEGE_PREFERENCES };
    state.suggestedSchools = [];
    save();
    render();
  });

  document.querySelector("[data-generate-suggestions]")?.addEventListener("click", () => {
    state.suggestedSchools = generateSuggestedSchools(getProfileData(), state.collegePreferences, schools);
    save();
    render();
  });

  document.querySelector("[data-edit-preferences]")?.addEventListener("click", () => {
    state.tab = "profile";
    save();
    render();
    setTimeout(() => document.querySelector("#college-preferences")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  });

  document.querySelector("[data-reviewer-school]")?.addEventListener("change", (event) => {
    state.reviewerSchool = event.currentTarget.value;
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelectorAll("[data-summary-section]").forEach((input) => {
    input.addEventListener("change", () => {
      state.selectedSummarySections[input.dataset.summarySection] = input.checked;
      state.generatedSummary = "";
      state.aiReport = "";
      save();
      render();
    });
  });

  document.querySelector("[data-select-all-sections]")?.addEventListener("click", () => {
    state.selectedSummarySections = Object.fromEntries(Object.keys(SUMMARY_SECTION_LABELS).map((key) => [key, true]));
    state.generatedSummary = "";
    state.aiReport = "";
    save();
    render();
  });

  document.querySelector("[data-clear-optional-sections]")?.addEventListener("click", () => {
    state.selectedSummarySections = { ...DEFAULT_SUMMARY_SECTIONS };
    state.generatedSummary = "";
    state.aiReport = "";
    save();
    render();
  });

  document.querySelector("[data-generate-summary]")?.addEventListener("click", () => {
    const school = getReviewerSchool();
    const profileData = getProfileData();
    const scoringResults = scoreApplicantForSchool(profileData, school);
    const reportContext = buildCompactReportContext(profileData, getSchoolProfile(school.name), scoringResults);
    state.generatedSummary = generateStructuredSummary(reportContext, state.selectedSummarySections);
    save();
    render();
  });

  document.querySelector("[data-generate-ai-summary]")?.addEventListener("click", async () => {
    const school = getReviewerSchool();
    const profileData = getProfileData();
    const scoringResults = scoreApplicantForSchool(profileData, school);
    const reportContext = buildCompactReportContext(profileData, getSchoolProfile(school.name), scoringResults);
    state.aiReport = "";
    state.aiSummaryStatus = "Generating AI summary...";
    state.aiStatus = "Reviewing selected sections...";
    state.aiProgress = webLLMService.engine ? 0.35 : 0.03;
    render();
    try {
      state.aiReport = await safeGenerateAISummary(reportContext, state.selectedSummarySections);
      state.aiSummaryStatus = "";
      state.aiStatus = state.aiUsedFallback ? "Concise fallback AI summary generated." : "";
      state.aiProgress = 1;
      save();
      render();
    } catch (error) {
      state.aiReport = generateConciseAISummaryFallback(reportContext, state.selectedSummarySections);
      state.aiSummaryStatus = "";
      state.aiStatus = `AI summary fallback used: ${error.message}`;
      state.aiProgress = 0;
      save();
      render();
    }
  });

  document.querySelector("[data-generate-report]")?.addEventListener("click", async () => {
    const school = getReviewerSchool();
    const profileData = getProfileData();
    const scoringResults = scoreApplicantForSchool(profileData, school);
    state.aiReport = "";
    state.aiStatus = "Preparing school-specific scoring results...";
    state.aiProgress = 0;
    render();
    try {
      const report = await generateProfileRecommendation(profileData, scoringResults, getSchoolProfile(school.name));
      state.aiReport = report;
      state.aiStatus = state.aiUsedFallback ? "Deterministic fallback report generated in this browser." : "Report generated locally in this browser.";
      state.aiProgress = 1;
      save();
      render();
    } catch (error) {
      if (!webLLMService.isWebGPUSupported()) {
        state.aiStatus = "WebGPU is not supported in this browser. The rule-based score is still available, but local AI generation needs a WebGPU-capable browser.";
      } else {
        state.aiStatus = `Could not generate local AI report: ${error.message}`;
      }
      state.aiProgress = 0;
      render();
    }
  });

  document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => {
    state.selected = button.dataset.open;
    render();
  }));

  document.querySelectorAll("[data-card-open]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) return;
      state.selected = card.dataset.cardOpen;
      render();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      state.selected = card.dataset.cardOpen;
      render();
    });
  });

  document.querySelectorAll("[data-save]").forEach((button) => button.addEventListener("click", () => {
    toggleMyList(schools.find((school) => school.id === button.dataset.save));
    save();
    render();
  }));

  document.querySelectorAll("[data-review-school]").forEach((button) => button.addEventListener("click", () => {
    state.reviewerSchool = button.dataset.reviewSchool;
    state.tab = "reviewer";
    save();
    render();
  }));

  document.querySelectorAll("[data-compare-select]").forEach((selectEl) => {
    selectEl.addEventListener("change", () => {
      state.comparison[selectEl.dataset.compareSelect] = selectEl.value;
      state.comparison.showRecommendation = false;
      save();
      render();
    });
  });

  document.querySelectorAll("[data-compare-school]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.compareSchool;
    state.comparison.schoolA = id;
    if (state.comparison.schoolB === id) state.comparison.schoolB = "";
    state.comparison.showRecommendation = false;
    state.tab = "compare";
    save();
    render();
  }));

  document.querySelector("[data-analyze-comparison]")?.addEventListener("click", () => {
    if (!state.comparison.schoolA || !state.comparison.schoolB || state.comparison.schoolA === state.comparison.schoolB) return;
    state.comparison.showRecommendation = true;
    save();
    render();
  });

  document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => {
    state.selected = null;
    render();
  }));

  document.querySelectorAll("[data-external-link]").forEach((link) => link.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const opened = window.open(link.href, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = link.href;
  }));

  document.querySelectorAll("[data-jump]").forEach((button) => button.addEventListener("click", () => {
    const target = document.querySelector(`#section-${button.dataset.jump}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveDetailSection(button.dataset.jump);
  }));

  document.querySelector(".modal-content")?.addEventListener("scroll", (event) => {
    const sections = [...event.currentTarget.querySelectorAll(".detail-section")];
    const active = sections.find((section) => section.getBoundingClientRect().top >= 80) || sections.at(-1);
    if (active) setActiveDetailSection(active.id.replace("section-", ""));
  });

  document.querySelector("#activity-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.activities.length >= 10) return;
    const form = new FormData(event.currentTarget);
    state.activities.push({ category: form.get("category"), title: form.get("title"), description: form.get("description") });
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelector("#award-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.awards.length >= 5) return;
    const form = new FormData(event.currentTarget);
    state.awards.push({ title: form.get("title"), level: form.get("level") });
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelector("#alumni-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const relation = {
      institutionName: String(form.get("institutionName") || "").trim(),
      relationshipType: String(form.get("relationshipType") || "").trim(),
    };
    if (!relation.institutionName) return;
    state.profile.alumniRelations = [...getAlumniRelationsFromProfile(state.profile), relation];
    state.profile.alumniRelation = "";
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.querySelectorAll("[data-remove-activity]").forEach((button) => button.addEventListener("click", () => {
    state.activities.splice(Number(button.dataset.removeActivity), 1);
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  }));

  document.querySelectorAll("[data-remove-award]").forEach((button) => button.addEventListener("click", () => {
    state.awards.splice(Number(button.dataset.removeAward), 1);
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  }));

  document.querySelectorAll("[data-remove-alumni]").forEach((button) => button.addEventListener("click", () => {
    state.profile.alumniRelations = getAlumniRelationsFromProfile(state.profile).filter((_, index) => index !== Number(button.dataset.removeAlumni));
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  }));

  document.querySelector("[data-clear-alumni]")?.addEventListener("click", () => {
    state.profile.alumniRelations = [];
    state.profile.alumniRelation = "";
    state.aiReport = "";
    state.generatedSummary = "";
    save();
    render();
  });

  document.onkeydown = (event) => {
    if (event.key !== "Escape") return;
    if (state.selected) {
      state.selected = null;
      render();
    }
  };

}

function closeOnBackdrop(event) {
  if (event.target.classList.contains("modal")) {
    state.selected = null;
    render();
  }
}

async function hydrateCampusImages() {
  const visibleIds = [...document.querySelectorAll("[data-school-image], [data-school-banner]")]
    .map((element) => element.dataset.schoolImage || element.dataset.schoolBanner);
  if (!Object.keys(state.photos).length) {
    try {
      const [fallbackResponse, officialResponse] = await Promise.all([
        fetch("campus-images.json"),
        fetch("official-campus-images.json"),
      ]);
      const fallbackPhotos = fallbackResponse.ok ? await fallbackResponse.json() : {};
      const officialPhotos = officialResponse.ok ? await officialResponse.json() : {};
      state.photos = { ...officialPhotos, ...fallbackPhotos, ...USER_CAMPUS_PHOTOS };
      localStorage.setItem(STORAGE_KEYS.photos, JSON.stringify(state.photos));
      localStorage.setItem(STORAGE_KEYS.photoVersion, PHOTO_VERSION);
    } catch (error) {
      console.warn("Could not load local campus photo map", error);
    }
  }
  [...new Set(visibleIds)].forEach(applyCampusImage);
}

async function fetchCampusImage(id) {
  const title = WIKI_TITLES[id];
  if (!title) return;
  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(title)}`, {
      headers: { "Api-User-Agent": "CollegiaPrototype/1.0 (local student college search app)" },
    });
    if (!response.ok) return;
    const data = await response.json();
    const items = data.items || [];
    const preferred = items.find((item) => {
      const src = item.original?.source || item.thumbnail?.source || "";
      const name = `${item.title || ""} ${src}`.toLowerCase();
      const isImage = item.type === "image" && src;
      const isCampus = /(campus|hall|library|quad|building|tower|gate|chapel|courtyard|lawn|center|college|university)/.test(name);
      const isEmblem = /(logo|seal|emblem|wordmark|athletic|mascot|icon|svg)/.test(name);
      return isImage && isCampus && !isEmblem;
    }) || items.find((item) => {
      const src = item.original?.source || item.thumbnail?.source || "";
      const name = `${item.title || ""} ${src}`.toLowerCase();
      return item.type === "image" && src && !/(logo|seal|emblem|wordmark|athletic|mascot|icon|svg)/.test(name);
    });
    const image = preferred?.original?.source || preferred?.thumbnail?.source;
    if (!image) return;
    state.photos[id] = image;
    localStorage.setItem(STORAGE_KEYS.photos, JSON.stringify(state.photos));
    localStorage.setItem(STORAGE_KEYS.photoVersion, PHOTO_VERSION);
    document.querySelectorAll(`[data-school-image="${id}"]`).forEach((img) => {
      img.src = image;
    });
    document.querySelectorAll(`[data-school-banner="${id}"]`).forEach((banner) => {
      banner.style.backgroundImage = `linear-gradient(0deg, rgba(8,17,20,.76), rgba(8,17,20,.16)), url('${image}')`;
    });
  } catch (error) {
    console.warn(`Could not load campus image for ${id}`, error);
  }
}

function applyCampusImage(id) {
  const image = USER_CAMPUS_PHOTOS[id] || state.photos[id];
  if (!image) return;
  document.querySelectorAll(`[data-school-image="${id}"]`).forEach((img) => {
    img.src = image;
  });
  document.querySelectorAll(`[data-school-banner="${id}"]`).forEach((banner) => {
    banner.style.backgroundImage = `linear-gradient(0deg, rgba(8,17,20,.76), rgba(8,17,20,.16)), url('${image}')`;
  });
}

function campusImage(school, large = false) {
  const image = USER_CAMPUS_PHOTOS[school.id] || state.photos[school.id] || school.image;
  return large ? image.replace(/\/\d+px-/i, "/1400px-") : image;
}

function satMidpoint(range) {
  const parts = range.match(/\d+/g)?.map(Number) || [];
  if (parts.length < 2) return "See CDS";
  return Math.round((parts[0] + parts[1]) / 2).toString();
}

function formatSize(size) {
  return `${Math.round(size / 100) / 10}k`;
}

function importanceClass(value) {
  if (value === "Very Important") return "very";
  if (value === "Important") return "important";
  if (value === "Considered") return "considered";
  return "not";
}

function formatNumber(value) {
  const number = Number(value || 0);
  return Number.isInteger(number) ? String(number) : number.toFixed(1).replace(/\.0$/, "");
}

function formatPercent(value) {
  const number = Number(value || 0);
  return `${number >= 10 ? Math.round(number) : number.toFixed(1).replace(/\.0$/, "")}%`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

render();
