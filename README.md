# Collegia

An AI-powered college application profile analysis platform that helps students evaluate their academic profile, extracurriculars, and overall fit for universities across the United States.

Live Demo: [https://jgao511.github.io/Collegia/](https://jgao511.github.io/Collegia/)

---

# Overview

College Profile AI is a browser-based application designed to help students better understand how their academic background, coursework, extracurricular involvement, and intended major align with different universities.

The platform combines:

* Structured applicant profile analysis
* School-specific admissions factor weighting
* Major-aware fit evaluation
* Local AI-generated recommendations using WebLLM
* School knowledge profiles and rankings context
* Deterministic fallback reporting when local AI is unavailable

Unlike many college admissions tools, the app is designed to focus on fit, preparation, and profile context rather than claiming to predict admissions outcomes.

---

# Features

## AI-Powered Profile Reports

Generate school-specific college fit reports using:

* GPA
* SAT/ACT scores
* Course rigor
* AP/IB/Honors/Dual Enrollment coursework
* Intended major
* Extracurricular activities
* Awards
* Contextual admissions factors

Reports include:

* Student Profile summary
* School Fit Summary
* Academic Fit analysis
* Major Fit analysis
* Activities & Impact evaluation
* Additional Considerations
* Suggested Next Steps

---

## Local AI with WebLLM

The project runs AI directly in the browser using:

* `@mlc-ai/web-llm`

Benefits:

* No paid API required
* Runs locally on supported devices
* Faster iteration during development
* More privacy-friendly

The app includes:

* Prompt-size protection
* Compact context generation
* Deterministic fallback reports
* Context-window safeguards
* WebGPU support detection

Default model:

* `Llama-3.2-1B-Instruct-q4f32_1-MLC`

---

# School-Aware Analysis

Each school profile can include:

* Admissions factor importance ratings
* SAT/ACT ranges
* Testing policy
* Strongest majors
* Institutional personality
* Applicant-fit signals
* Rankings data
* School-specific guidance

The system evaluates applicant fit differently depending on:

* Intended major
* School priorities
* Public vs private institution
* In-state vs out-of-state context
* School-specific admissions emphasis

---

# Major-Aware Recommendations

The app uses different evaluation logic depending on the intended major category.

Supported categories currently include:

* Engineering & Computer Science
* Business & Social Science
* Life Sciences & Health
* Humanities, Arts & Media

Examples:

* Engineering applicants receive guidance focused on technical depth, coding, research, robotics, hardware, and STEM rigor.
* Economics applicants receive guidance focused on quantitative reasoning, economics coursework, leadership, entrepreneurship, finance, and analytical thinking.
* Biology/pre-med applicants receive guidance focused on lab science preparation, research, healthcare exposure, and scientific rigor.

---

# Advanced Coursework Tracking

The application supports structured course tracking for:

* AP courses
* IB courses
* Honors courses
* Dual Enrollment courses
* Custom advanced courses

Users can:

* Add courses from searchable dropdown selectors
* Remove courses using chip-style UI interactions
* Add custom courses if not listed

The platform automatically:

* Calculates course counts
* Detects major-relevant coursework
* Suggests additional coursework that may strengthen major fit

---

# Rankings Context

The app supports optional rankings context from sources such as:

* U.S. News & World Report
* Niche
* QS Rankings
* Times Higher Education

Rankings are used only as:

* Program reputation context
* Resource/context indicators
* Competitiveness indicators

The app does NOT use rankings as admissions predictions.

---

# Deterministic Fallback Reports

If the local AI model:

* Fails
* Exceeds context limits
* Produces malformed output
* Is unavailable
* Cannot run due to hardware limitations

The application automatically generates a structured deterministic report instead.

This ensures:

* Stable user experience
* No blank AI reports
* Reduced runtime failures
* Better browser compatibility

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion

## AI

* WebLLM
* WebGPU
* Local LLM inference

## Data & Logic

* Structured school profile database
* Major-category mapping system
* Admissions factor weighting
* Prompt optimization and context trimming

---

# Current Focus Areas

The project is currently focused on:

* Improving local AI reliability
* Reducing hallucinations
* Improving school-specific recommendations
* Better major-aware analysis
* Cleaner UI/UX
* Structured report rendering
* Optimizing WebLLM context usage
* Expanding school database coverage

---

# Important Disclaimer

This platform does not provide exact admissions probabilities.

The generated reports should not be interpreted as guarantees of admission or rejection.

Admissions factor ratings, rankings, and school profile information should always be verified against:

* Official admissions websites
* Current Common Data Sets (CDS)
* Official ranking sources

---

# Future Plans

Potential future features include:

* Expanded school database
* Resume and activities parser
* Essay feedback system
* Application list balancing tools
* Scholarship matching
* Timeline planning
* Saved applicant profiles
* Exportable PDF reports
* Multi-school comparison view
* More advanced local AI models

---

# Running Locally

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

---

# Deployment

The project is currently deployed using GitHub Pages.

Live site:
[https://jgao511.github.io/Collegia/](https://jgao511.github.io/Collegia/)

---

# Project Philosophy

This project is designed to help students think critically about:

* Academic preparation
* Major alignment
* Institutional fit
* Coursework rigor
* Extracurricular impact
* Application positioning

The goal is not to replace admissions counselors or predict outcomes, but to provide a structured and thoughtful way for students to evaluate and strengthen their application profile.

---

# License

This project is currently under active development.

License information can be added here in the future.
