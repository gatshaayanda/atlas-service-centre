# ATLAS SERVICE CENTRE — Agent Operating Contract

## Product
Atlas Heavy & Light Duty Workshop T/A Atlas Service Centre is a real customer-facing workshop PWA for commercial transport operators, fleet managers, light truck operators and private vehicle owners.

Legal entity: Atlas Heavy & Light Duty Workshop T/A Atlas Service Centre
Address: Plot 14441, Unit 1, Kamushongo Road, Gaborone West Industrial, Gaborone, Botswana
Phone: +267 392 8833
Email: atlascentre@gmail.com
Hours: Monday-Friday 07:30-17:30; Saturday 08:00-13:00; Sunday closed.

This is a real small-business product, not a demo, generic SaaS, or template.

## Roles
- Product owner / final reviewer: user
- Technical navigator + implementation: ChatGPT through repository tooling
- GitHub is the source of truth
- Git Bash is the preferred local control layer
- Vercel is the deployment target

## STARTING A NEW PROJECT FROM A REFERENCE REPOSITORY
When the user says a new GitHub repository is empty and wants to use an existing project as its foundation:

1. Do NOT run `git status` inside the empty destination directory first. An empty directory is not a Git repository.
2. Confirm the destination GitHub repository exists and identify its default branch.
3. Inspect the proposed reference repository before cloning: AGENTS.md, package.json, architecture/routes, Firebase configuration, PWA/offline implementation, and relevant product-specific assets/data.
4. If the destination local directory is explicitly confirmed empty/new, clone the reference repository directly into that destination.
5. Immediately replace the cloned repository's `origin` with the destination GitHub repository.
6. Ensure the intended branch is checked out (normally `main`).
7. Verify remote, branch and working-tree state before making application changes.
8. STOP at START -> INSPECT. Do not begin customization until the cloned foundation has been inspected.
9. If the destination directory contains unexpected files, STOP. Inspect reality before deleting, cloning over, or resetting anything.

Preferred Git Bash pattern:

```bash
cd ~/Desktop/MyWebApps/10th\\ iteration && \
rm -rf <destination> && \
git clone <reference-repo-url>.git <destination> && \
cd <destination> && \
git remote remove origin && \
git remote add origin <destination-repo-url>.git && \
git branch -M main && \
echo "=== REMOTE ===" && git remote -v && \
echo "=== STATUS ===" && git status && \
echo "=== BRANCH ===" && git branch --show-current && \
code .
```

Do not prepend `git status` inside a known-empty destination directory.

## WORKFLOW
START -> INSPECT -> BUILD -> VERIFY -> CHECKPOINT -> CONTINUE/RECOVER.

Golden rule: **Unexpected result = STOP -> inspect reality -> then act.**

Before changing code:
- inspect the actual repository, not assumptions;
- inspect AGENTS.md;
- inspect Git branch/status/remotes and current commit;
- inspect package.json and application architecture;
- inspect Firebase configuration and environment-variable names;
- inspect PWA manifest/service worker/offline behavior;
- inspect relevant deployed state when needed;
- use current official documentation when framework/API behavior matters.

Make the smallest controlled change. Preserve working functionality. Do not remove existing functionality unless explicitly requested.

After meaningful changes:
- update AGENTS.md with durable project decisions;
- run typecheck/lint/build as applicable;
- review the actual diff;
- commit a meaningful checkpoint;
- push to the intended branch;
- report the commit/checkpoint and what is ready to test.

## PRODUCT MODEL
Customer/Fleet -> Service request or booking -> Job card -> Workshop status -> Testing -> Ready -> Complete.

Primary services:
- commercial truck repair
- light vehicle mechanical service
- auto-electrical repairs
- fleet engine overhauls
- preventive maintenance
- towing requests
- onsite auto-electrical requests
- routine service bookings

Target customers:
- logistics companies
- fleet managers
- light truck operators
- private vehicle owners
- Southern African transport operators where relevant.

## CUSTOMER EXPERIENCE
Mobile-first. Make these obvious:
- Book a service
- Request towing
- Request onsite auto-electrical assistance
- Routine service
- Fleet/service history
- Current job status
- Workshop contact details
- Opening hours
- Location
- Emergency/urgent human contact fallback

Do not invent prices, turnaround guarantees, testimonials, stock availability, payment confirmations, fleet contracts, or service guarantees unless supplied or implemented.

## JOB STATUS
The customer-facing job tracker should use the workshop workflow:
Diagnostics -> Spares Sourcing -> Repair -> Testing -> Ready.

A customer submission is not the same as workshop acceptance. Offline wording must never claim the workshop received an unsynchronized request.

## OFFLINE-FIRST PWA
Maintain:
- installable manifest
- service worker
- offline route/state
- cached public app shell
- appropriate Firestore persistent local cache where Firebase is used.

Never indiscriminately cache private Firebase responses or large media blobs in the service worker.

Offline states must be truthful:
- online confirmed: request/job data was sent successfully;
- offline queued/saved: data is only saved locally and has not yet been confirmed by the workshop;
- failed: request was not recorded and the human fallback must be shown.

## FIREBASE
Atlas has its own dedicated Firebase project:
- project ID: `atlas-service-centre`
- auth domain: `atlas-service-centre.firebaseapp.com`
- storage bucket: `atlas-service-centre.firebasestorage.app`

Never reuse BOEMO, Namane, Exquisite Waterproof Services, or another application's Firebase identifiers, collections, rules, storage paths or seed data.

Firebase web configuration is public client configuration. Runtime configuration belongs in `NEXT_PUBLIC_FIREBASE_*` environment variables. Never commit private server credentials or service-account keys.

Expected Atlas environment names:
`NEXT_PUBLIC_BASE_URL`
`NEXT_PUBLIC_FIREBASE_API_KEY`
`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
`NEXT_PUBLIC_FIREBASE_PROJECT_ID`
`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
`NEXT_PUBLIC_FIREBASE_APP_ID`
`NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

The supplied Atlas Firebase web configuration may be used to populate local/Vercel environment variables, but do not hard-code it into application source when the project architecture already uses environment variables.

## DATA / SECURITY
Use a dedicated Atlas Firestore model.

Customer-facing requests should be validated. Customers must not gain broad read/update/delete access to other customers' requests.

Admin/workshop access should be role-controlled. Do not hard-code an admin UID.

Preserve service/job snapshots where historical accuracy matters; do not rely on mutable current service names/prices to rewrite historical jobs.

Do not weaken Firestore or Storage rules to hide UI/configuration problems.

## ADMIN / WORKSHOP DASHBOARD
The admin surface is an operational workshop tool, not a generic CRM.

Core views:
- today's jobs/requests
- job details
- customer/fleet details
- job card
- mechanic/dispatch assignment where implemented
- status changes
- spares/notes
- testing/ready state
- towing/onsite assistance queue
- service history
- fleet maintenance intervals
- invoices/records where implemented.

## REFERENCE-REPOSITORY RULE
This project began from the BOEMO Joos Food Deals codebase to reuse proven technical patterns.

BOEMO code is a technical foundation only. Before retaining any BOEMO-specific behavior, determine whether it belongs to Atlas.

Must replace/remove BOEMO-specific:
- branding and copy
- food/menu/deal data
- BOEMO assets
- food ordering assumptions
- BOEMO phone/location/hours
- BOEMO Firebase identifiers
- BOEMO collections/rules/seed data
- BOEMO-specific customer/admin workflows.

Do not delete useful generic PWA/Firebase infrastructure merely because it originated in BOEMO.

## VISUAL DIRECTION
Industrial, trustworthy, mobile-first.

Primary direction:
- industrial navy #1B2A47
- warning amber/gold #E67E22 or #F39C12
- slate/dark or clean light surfaces
- Inter, Roboto or Montserrat where appropriate.

Visual evidence should focus on:
- heavy-duty trucks
- vehicle lifts
- diagnostics
- auto-electrical work
- engines/components
- real workshop environment.

Do not invent customer logos, trust badges, certifications, awards or testimonials.

## TECHNICAL BASELINE
Current foundation: Next.js 15, React 19, TypeScript, Firebase 11, PWA/service worker, Vercel Analytics/Speed Insights.

Keep dependencies controlled. Prefer the existing working stack unless a change is justified.

## BUILD DISCIPLINE
Before a meaningful checkpoint, run as applicable:
`npx tsc --noEmit`
`npm run lint`
`npm run build`

Do not run `npm audit fix --force` blindly.

## CHECKPOINT
Review the actual diff before committing.

Commit meaningful checkpoints, for example:
- `chore: establish Atlas project foundation`
- `feat: replace BOEMO storefront with Atlas service front door`
- `feat: add Atlas service request flow`
- `feat: add workshop job tracker`

Avoid unnecessary Vercel deployments while the foundation is still changing.

## CURRENT FIRST-PHASE OBJECTIVE
Convert the cloned BOEMO foundation into a truthful Atlas Service Centre foundation before adding advanced features.

First inspect:
1. AGENTS.md
2. package.json
3. src/app routes/pages
4. src/lib Firebase/data/auth code
5. firebase.json
6. firestore.rules and storage.rules
7. PWA manifest/service worker/offline implementation
8. public assets
9. all BOEMO-specific strings and Firebase references
10. local environment files and required environment variable names.

Then establish:
- Atlas identity/branding
- Atlas Firebase environment wiring
- Atlas public mobile front door
- service request/booking foundation
- truthful offline behavior
- workshop/admin foundation.

Do not build advanced fleet/job features until the foundation is verified.

## RECOVERY
If an implementation result differs from the expected result:
STOP -> inspect actual files/runtime/Git state -> identify the mismatch -> make the smallest corrective change -> verify again.

Never compensate for an unexpected result by blindly adding more code.
