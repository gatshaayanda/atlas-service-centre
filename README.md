# Atlas Service Centre

**Atlas Heavy & Light Duty Workshop T/A Atlas Service Centre**

Mobile-first workshop PWA for commercial transport operators, fleet managers, light truck operators and private vehicle owners in Botswana.

## Customer flow
Home → Service request → Workshop review → Diagnostics → Repair → Testing → Ready → Complete

Customers can submit a request without an account. An optional Firebase customer account keeps service history associated with them.

## Core services
- Auto Mechanical: engine overhauls, gearbox/differential repairs, brakes, suspension/steering and routine servicing.
- Auto Electrical: starter motors, alternators, rewiring and computerized diagnostics.
- Breakdown & Fleet: towing/recovery, onsite assistance, fleet maintenance and maintenance checks.

## Workshop
Plot 14441, Unit 1, Kamushongo Road, Gaborone West Industrial, Gaborone, Botswana.

+267 392 8833 · atlascentre@gmail.com

Hours: Mon–Fri 07:30–17:30 · Sat 08:00–13:00 · Sun closed.

## Operations
/admin is protected by Firebase Authentication plus admins/{uid} with role owner/staff.

## Development
npm install
npm run dev

Quality gates:
npx tsc --noEmit
npm run lint
npm run build

See AGENTS.md for the implementation contract.
