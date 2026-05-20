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

const US_STATES = [
  "All", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
];

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

const state = {
  tab: "browse",
  selected: null,
  list: JSON.parse(localStorage.getItem("college-list") || "[]"),
  profile: JSON.parse(localStorage.getItem("college-profile") || "{}"),
  activities: JSON.parse(localStorage.getItem("college-activities") || "[]"),
  awards: JSON.parse(localStorage.getItem("college-awards") || "[]"),
  photos: JSON.parse(localStorage.getItem("college-photo-version") === PHOTO_VERSION ? localStorage.getItem("college-photos") || "{}" : "{}"),
  filters: { search: "", state: "All", type: "All", region: "All", size: "All", satMin: "400", satMax: "1600", actMin: "1", actMax: "36", acceptance: "100", sort: "Default" },
};

let renderTimer = null;

function s(id, name, location, type, region, size, acceptance, satRange, satLow, profile, blurb, website, admissions, cds, query) {
  const factors = profile === "UC" ? ucFactors : profile === "Public" ? publicFactors : profile === "Highly Selective" ? highlySelectiveFactors : holisticFactors;
  const imageIndex = Math.abs([...id].reduce((total, char) => total + char.charCodeAt(0), 0)) % CAMPUS_IMAGES.length;
  const repositoryCds = COLLEGE_TRANSITIONS_CDS[id];
  const detail = SCHOOL_DETAIL_DATA[id] || {};
  return {
    id,
    name,
    location,
    state: location.split(", ").at(-1),
    type,
    region,
    size,
    acceptance,
    satRange,
    satLow,
    actLow: parseRange(detail.act || "")[0] || 1,
    blurb,
    website,
    admissions,
    cds,
    repositoryCds,
    image: CAMPUS_IMAGES[imageIndex],
    banner: CAMPUS_IMAGES[(imageIndex + 1) % CAMPUS_IMAGES.length].replace("w=1100", "w=1800"),
    factors,
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
  };
}

function save() {
  localStorage.setItem("college-list", JSON.stringify(state.list));
  localStorage.setItem("college-profile", JSON.stringify(state.profile));
  localStorage.setItem("college-activities", JSON.stringify(state.activities));
  localStorage.setItem("college-awards", JSON.stringify(state.awards));
  localStorage.setItem("college-photos", JSON.stringify(state.photos));
  localStorage.setItem("college-photo-version", PHOTO_VERSION);
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand"><div class="brand-mark">C</div><span>College Compass</span></div>
        <nav class="tabs">
          ${tabButton("browse", "Browse Schools")}
          ${tabButton("profile", "My Profile")}
          ${tabButton("compare", "Compare Fit")}
          ${tabButton("reviewer", "Profile Reviewer")}
        </nav>
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
  if (state.tab === "profile") return renderProfile();
  if (state.tab === "compare") return renderCompare();
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
  const saved = state.list.includes(school.id);
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
          <button class="btn ${saved ? "ghost" : ""}" data-save="${school.id}">${saved ? "Saved" : "Add to List"}</button>
        </div>
      </div>
    </article>
  `;
}

function renderDetail(school) {
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
          <h2>${school.name}</h2>
          <p>${school.location} · ${school.type} · ${formatSize(school.size)} undergraduates</p>
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
    <section class="layout-2">
      <div class="form-stack">
        <section class="panel">
          <div class="section-head"><div><h2>Student Info</h2><p class="muted">Core profile details for list-building and review.</p></div></div>
          <div class="form-content compact-grid">
            ${profileInput("Name", "name", "Avery Student")}
            ${profileInput("Location", "location", "Queens, NY")}
            ${profileInput("Graduation year", "gradYear", "2027", "number")}
            ${profileInput("GPA", "gpa", "3.85")}
            ${profileInput("SAT", "sat", "1450", "number")}
            ${profileInput("ACT", "act", "33", "number")}
          </div>
        </section>
        <section class="panel">
          <div class="section-head"><div><h2>Activities</h2><p class="muted">${state.activities.length}/10 Common App slots used.</p></div></div>
          <form class="form-content" id="activity-form">
            ${field("Category", activitySelect())}
            ${field("Role / organization", `<input name="title" required placeholder="Robotics team captain" />`)}
            ${field("Description", `<textarea name="description" rows="3" required placeholder="What did you do, lead, create, or improve?"></textarea>`)}
            <button class="btn primary" ${state.activities.length >= 10 ? "disabled" : ""}>Add Activity</button>
          </form>
        </section>
        <section class="panel">
          <div class="section-head"><div><h2>Awards</h2><p class="muted">${state.awards.length}/5 Common App slots used.</p></div></div>
          <form class="form-content" id="award-form">
            ${field("Award", `<input name="title" required placeholder="National Merit Commended Student" />`)}
            ${field("Level", select("level", ["School", "Regional", "State", "National", "International"], "School", true))}
            <button class="btn primary" ${state.awards.length >= 5 ? "disabled" : ""}>Add Award</button>
          </form>
        </section>
      </div>
      <aside class="profile-preview">
        ${renderProfilePreview()}
      </aside>
    </section>
  `;
}

function renderProfilePreview() {
  return `
    <section class="panel profile-card">
      <h2>${state.profile.name || "Your Profile"}</h2>
      <p class="muted">${[state.profile.location, state.profile.gradYear && `Class of ${state.profile.gradYear}`].filter(Boolean).join(" · ") || "Add your basics to personalize the app."}</p>
      <div class="stats">
        <div class="stat"><b>${state.profile.gpa || "-"}</b><span>GPA</span></div>
        <div class="stat"><b>${state.profile.sat || "-"}</b><span>SAT</span></div>
        <div class="stat"><b>${state.profile.act || "-"}</b><span>ACT</span></div>
      </div>
      <p class="muted">Profile completion</p>
      <div class="meter"><span style="width:${profileScore()}%"></span></div>
    </section>
    <section class="panel profile-card">
      <h3>Activities</h3>
      <div class="entry-list">${state.activities.map((a, i) => `<div class="entry"><h4>${a.title}</h4><p>${a.category}</p><p>${a.description}</p><button class="btn" data-remove-activity="${i}">Remove</button></div>`).join("") || `<div class="empty">No activities yet.</div>`}</div>
    </section>
    <section class="panel profile-card">
      <h3>Awards</h3>
      <div class="entry-list">${state.awards.map((a, i) => `<div class="entry"><h4>${a.title}</h4><p>${a.level}</p><button class="btn" data-remove-award="${i}">Remove</button></div>`).join("") || `<div class="empty">No awards yet.</div>`}</div>
    </section>
  `;
}

function renderCompare() {
  const saved = state.list.map((id) => schools.find((school) => school.id === id)).filter(Boolean);
  const sat = Number(state.profile.sat || 0);
  return `
    <section class="panel profile-card">
      <h2>Compare Fit</h2>
      <p class="muted">A first-pass academic comparison using your saved list, SAT score, selectivity, and profile completeness. This is guidance, not a decision engine.</p>
    </section>
    <section class="school-grid">
      ${saved.map((school) => {
        const distance = sat ? sat - school.satLow : 0;
        const band = !sat ? "Add SAT for comparison" : distance >= 80 ? "Likely in range" : distance >= -80 ? "Near range" : "Reach on testing";
        return `<article class="panel review-card"><h3>${school.name}</h3><p class="muted">${school.location}</p><div class="stats"><div class="stat"><b>${school.satRange}</b><span>School SAT</span></div><div class="stat"><b>${state.profile.sat || "-"}</b><span>Your SAT</span></div><div class="stat"><b>${band}</b><span>Signal</span></div></div><button class="btn primary" data-open="${school.id}">Open Details</button></article>`;
      }).join("") || `<div class="empty">Save schools from Browse Schools to compare them here.</div>`}
    </section>
  `;
}

function renderReviewer() {
  const tips = reviewerTips();
  return `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Profile reviewer</div>
        <h1>Turn your application pieces into a clearer story.</h1>
        <p>This prototype reviewer uses structured rules based on Common App limits and common admissions priorities. A true AI reviewer can plug into this tab next.</p>
      </div>
      <aside class="snapshot">
        <div class="snapshot-row"><span>Completion</span><strong>${profileScore()}%</strong></div>
        <div class="snapshot-row"><span>Activities</span><strong>${state.activities.length}/10</strong></div>
        <div class="snapshot-row"><span>Awards</span><strong>${state.awards.length}/5</strong></div>
      </aside>
    </section>
    <section class="review-grid">
      ${tips.map((tip) => `<article class="panel review-card"><span class="chip">${tip.type}</span><h3>${tip.title}</h3><p class="muted">${tip.body}</p></article>`).join("")}
    </section>
  `;
}

function reviewerTips() {
  const tips = [];
  if (!state.profile.gpa) tips.push({ type: "Academics", title: "Add academic context", body: "GPA, course rigor, and senior-year schedule are usually the backbone of an admissions review." });
  if (!state.profile.sat && !state.profile.act) tips.push({ type: "Testing", title: "Record testing status", body: "Add SAT or ACT scores, or mark a test-optional strategy later so comparisons are more useful." });
  if (state.activities.length < 4) tips.push({ type: "Activities", title: "Show depth beyond class", body: "Add roles, time commitment, leadership, impact, and outcomes. Strong entries read like evidence, not just membership." });
  if (state.awards.length === 0) tips.push({ type: "Awards", title: "Capture recognition", body: "Awards can include academic honors, art placements, science fairs, debate results, service recognition, or school-level distinctions." });
  if (tips.length === 0) tips.push({ type: "Next pass", title: "Sharpen the story", body: "Your basics are in. The next upgrade is making activities measurable and connecting your interests to each school." });
  return tips;
}

function profileInput(label, key, placeholder, type = "text") {
  return field(label, `<input data-profile="${key}" value="${escapeHtml(state.profile[key] || "")}" type="${type}" placeholder="${placeholder}" />`);
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
    input.addEventListener("change", () => {
      state.profile[input.dataset.profile] = input.value;
      save();
      render();
    });
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
    const id = button.dataset.save;
    state.list = state.list.includes(id) ? state.list.filter((saved) => saved !== id) : [...state.list, id];
    save();
    render();
  }));

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
    save();
    render();
  });

  document.querySelector("#award-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.awards.length >= 5) return;
    const form = new FormData(event.currentTarget);
    state.awards.push({ title: form.get("title"), level: form.get("level") });
    save();
    render();
  });

  document.querySelectorAll("[data-remove-activity]").forEach((button) => button.addEventListener("click", () => {
    state.activities.splice(Number(button.dataset.removeActivity), 1);
    save();
    render();
  }));

  document.querySelectorAll("[data-remove-award]").forEach((button) => button.addEventListener("click", () => {
    state.awards.splice(Number(button.dataset.removeAward), 1);
    save();
    render();
  }));

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
      localStorage.setItem("college-photos", JSON.stringify(state.photos));
      localStorage.setItem("college-photo-version", PHOTO_VERSION);
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
      headers: { "Api-User-Agent": "CollegeCompassPrototype/1.0 (local student college search app)" },
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
    localStorage.setItem("college-photos", JSON.stringify(state.photos));
    localStorage.setItem("college-photo-version", PHOTO_VERSION);
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

function profileScore() {
  const basics = ["name", "location", "gradYear", "gpa", "sat", "act"].filter((key) => state.profile[key]).length;
  return Math.min(100, Math.round((basics / 6) * 45 + Math.min(state.activities.length, 10) * 4 + Math.min(state.awards.length, 5) * 3));
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

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

render();
