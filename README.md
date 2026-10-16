# Affordable + Trustworthy Fashion India

A research-first fashion discovery platform for affordable women's clothing in India.

**Product principle:** affordable does not mean untrustworthy. Help shoppers compare products with clear evidence, honest caveats and transparent commercial disclosures.

## Current prototype
- Responsive research workspace dashboard.
- Manual product URL intake.
- Browser-session queue (not yet saved to a database).
- Trust rules prioritizing evidence, transparency and human review.

It does not currently scrape retailer pages, verify prices/reviews, provide affiliate links or publish content automatically.

## Run locally
Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Next milestones
1. Define the product record and evidence schema.
2. Add persistent storage (Supabase/PostgreSQL) after agreeing the data model.
3. Create product review and comparison screens.
4. Add compliant data intake (approved APIs, affiliate feeds or manual review).
5. Add affiliate disclosures and human approval before publishing.

## Trust rules
- Store source URL and checked date for each price or product claim.
- Never invent ratings, review counts, sales volume, bestseller status or trend claims.
- Mark missing information as unknown instead of guessing.
- Treat any scoring formula as a hypothesis until tested against outcomes.
- Disclose affiliate relationships clearly.
- Respect retailer terms and approved affiliate-program requirements.
