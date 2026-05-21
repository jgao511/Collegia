# Collegia Data Sources

Collegia uses a conservative data model. Metrics should be verified periodically before they are treated as final or shown as authoritative.

## Public Federal Data

- **College Scorecard**: Public federal data for admissions ranges, average annual cost, completion, earnings, retention, and institution characteristics. Update at least annually.
- **IPEDS / NCES**: Public institutional data for enrollment, tuition, graduation, completions, admissions, and institution characteristics. Update at least annually.

These sources are generally objective or institution-reported, but definitions can change. Always check the most recent release notes.

## Institutional Sources

- **Common Data Set**: School-published admissions, enrollment, testing, aid, and factor-importance data. Update each admission cycle when the new CDS is published.
- **Official admissions and department pages**: Best source for testing policy, undergraduate schools/colleges, majors, program names, and application requirements. Verify before publishing school-specific claims.

## Rankings and Context

- **U.S. News & World Report**: Overall and program rankings. Rankings change yearly and should be manually verified. Use only as reputation/program context, not as admissions probability.
- **Niche**: Student-life, campus, safety, and qualitative context. Treat as subjective context, not authoritative academic data.
- **QS / Times Higher Education / Forbes**: Optional supplementary reputation context. Verify source year and methodology before use.

## Maintenance Notes

- Do not scrape ranking sites automatically unless the app is explicitly designed to comply with their terms.
- Do not let WebLLM invent school facts, rankings, program names, or admissions policies.
- If exact data is missing, omit it or show a clear “data not available” note.
- Suggested Schools should use deterministic scoring first; AI may only explain already-computed recommendation objects.
