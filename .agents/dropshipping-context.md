# Dropshipping Context — Osama (Jordan → US)

> **For the AI assistant reading this at session start.**
> This file is the durable memory of this project. It is committed to git, so it is present
> in every new session automatically — the user should never have to re-explain the plan.
>
> **Your obligations:**
> 1. Read this file before asking the user anything about the project.
> 2. The full plan lives at `plans/shopify-dropshipping-shariah-launch-plan-20260802.md`
>    (59KB, with Arabic HTML + PDF versions beside it). Read it before giving any strategic advice.
> 3. **Update this file whenever a decision is made, reversed, or a fact changes.** Add the date.
>    A stale context file is worse than none. Commit the update.
> 4. The user writes in Arabic. Reply in Arabic unless asked otherwise.

Last updated: 2026-08-16 (readiness intake completed)

---

## 1. The situation (settled — do not re-ask)

| | |
|---|---|
| Seller location | Jordan |
| Target market | United States |
| Supplier | CJ Dropshipping, US warehouses (wholesale supplier — this classification matters, see §4) |
| Payouts | Payoneer — **Shopify Payments is not available to Jordan-registered sellers** |
| Primary channel | Shopify |
| Second channel | eBay — under evaluation, **not started**, see §4 |
| Compliance frame | Shariah — structured as a **salam** contract |
| Budget posture | Lean. Paid tools are rejected by default; free alternatives required. |

## 1b. Operator readiness (intake 2026-08-16 — settled, do not re-ask)

| | |
|---|---|
| Assets owned | **Payoneer only.** No Shopify store, no eBay seller account, no CJ account yet. |
| Risk capital | **Under $100 total** — money that can be lost entirely without harm. |
| Time | 7–15 h/week realistic (not 15–30). |
| Experience | **Has never sold online.** First venture. Explain mechanics; assume no prior knowledge. |

**What this invalidates.** The written plan (`plans/…`) assumes a $300–500 ad-test budget and 2–4 h/day.
Neither holds. At under $100, Shopify Basic ($39/mo, recurring) plus domain plus a sample consumes the
entire budget before any traffic is bought — and the plan's own kill/scale rules need $300–500 to
produce a statistically meaningful signal. **Shopify + paid ads is not viable at this budget.** Do not
propose it. The 30-day timeline stretches to roughly 8–10 weeks at 7–15 h/week.

**What this implies.** The binding constraint is the *cost of traffic*, not readiness. eBay supplies
buyer traffic at no ad cost, has no fixed monthly fee (~250 free listings/mo; ~13% final value fee on
sale only), and unlocks Terapeak free. It trades money for time — the correct trade when time is the
abundant resource. This **reverses** the earlier "Shopify-first" recommendation, which assumed a
funded launch.

## 2. Shariah constraints (hard design constraints, not preferences)

From plan §1. These are structural — they shape the store build, not just the marketing copy.

- **Salam structure**: full price captured at checkout. **No COD, no deposits, no BNPL/installments** of any kind. Disable installment options in the gateway.
- **The seller bears risk until delivery.** Lost/damaged/undelivered orders are reshipped or fully refunded at store expense. Never use "not responsible for carrier delays" boilerplate. This is also what answers the strongest scholarly objection to salam-framed dropshipping.
- **Delivery window must be stated concretely** on product page, cart, and confirmation. Islamweb accepted a 7–25 day window as sufficient specification; the plan uses 5–10 business days from US warehouses.
- **Goods described generically**, never "this specific unit in CJ warehouse X".
- **Only list SKUs with live CJ US-warehouse stock**; out-of-stock must auto-unpublish.
- **Parallel procurement is independent**: if CJ fails, the store still owes delivery or a full refund. Never write "subject to supplier availability" in customer terms.
- **Product exclusion filter** (plan §1.3): no alcohol-related, gambling, adult, pork/ingestibles, riba products, idols/talismans, counterfeits. Musical instruments flagged as differed-upon.
- **Honest marketing is a validity condition**, not a nicety: no fake countdowns, fake compare-at prices, fake reviews, or exaggerated medical claims.

**Open fiqh question:** Hanafi fiqh may require a ~1-month minimum deferment for salam; the 5–10 day window relies on the non-Hanafi/contemporary position. Plan §1.2 flags this. Needs a scholar the user trusts. Fallback structures if rejected: wakāla (agency) or juʿāla — not abandoning the business.

## 3. Tooling reality (verified 2026-08-16)

**Connected and working:** Shopify MCP (full store ops + GraphQL Admin API) · Firecrawl (incl. `firecrawl_monitor_create` for competitor price watching) · Composio · Canva · Notion · GitHub.

**Missing, with no workaround:**
- **eBay seller API — does not exist in any available toolkit.** Composio has only `countdown_api` (read-only eBay *data*, unconnected). Listing creation, order management, buyer messaging = manual or browser-driven. `ebay.com` is also egress-blocked from this environment.
- **CJ Dropshipping — no MCP.** CJ Open API exists publicly; user reportedly has access. Would need a custom integration, or rely on the CJ app inside Shopify.
- **Meta Ads write operations are blocked in this environment** (`CREATE_AD`, `CREATE_AD_SET`, `CREATE_AD_CREATIVE`, `UPDATE_AD_CREATIVE`) even after connecting. Reads work. Campaign launch stays manual.

**Product research stack — all free (TrendTrack was rejected, no budget):**
- **eBay Terapeak** — free with any eBay seller account. 3 years of *actual sold* data incl. real Best Offer accepted prices. `Seller Hub → Research → Product Research`. Best single source we have.
- TikTok Creative Center · Meta Ad Library · Google Trends · AliExpress Dropshipping Center.
- Own pipeline: Firecrawl + `crawl4ai` + `agent-reach`.

## 4. eBay — what is known before starting

- **Policy is favourable.** eBay permits dropshipping from a **wholesale supplier**, and prohibits buying from another retailer/marketplace (Amazon, Walmart) to ship to the buyer. CJ is a wholesale supplier, so **CJ → eBay is policy-compliant**. Penalty for arbitrage: listing removal, restriction, permanent suspension.
- **CJ has a native, official eBay integration** — connect the eBay store inside the CJ dashboard for listing, real-time inventory sync, automated order processing, and tracking pushback. This substantially narrows the automation gap noted in §3: the missing piece is an MCP for *the assistant*, not automation for *the operator*.
- **UNVERIFIED AND BLOCKING: can a Jordan-registered seller receive eBay payouts?** eBay Managed Payments is now the only payout route (PayPal is retired) and pays to a bank account or Payoneer, but the eBay–Payoneer partnership is limited to specific countries and Jordan's status could not be confirmed from public sources. **Verify this in an actual eBay registration flow before any other eBay work.** If Jordan is unsupported, the eBay route collapses and the channel decision must be reopened.
- **eBay may fit salam *better* than a self-hosted store** (for the scholar to confirm, not the assistant): fixed-price Buy It Now with immediate payment required satisfies "full price at the contract session" — **auctions must be excluded**, since they break payment-at-contract; eBay's mandatory handling-time and delivery-estimate fields satisfy the delivery-specification condition; and eBay's Money Back Guarantee structurally forces the seller to bear risk until delivery rather than relying on self-written terms.
- **The existing plan does not cover eBay at all.** It is Shopify + CJ only. Adding eBay needs a written addendum covering: eBay fee structure, Jordan-based seller account requirements, and — critically — **how eBay delivery timelines interact with the salam deferment condition**. Write that addendum *before* creating the first listing.

## 5. Decisions log

| Date | Decision |
|---|---|
| 2026-08-02 | Launch plan written: Shopify + CJ + Payoneer, salam structure. |
| 2026-08-16 | TrendTrack rejected — no budget. Replaced with Terapeak-led free stack (§3). |
| 2026-08-16 | eBay confirmed policy-compliant via CJ, but deferred pending the §4 addendum. |
| 2026-08-16 | Readiness intake: Payoneer only, <$100 risk capital, 7–15 h/week, zero selling experience. Shopify + paid ads ruled out as non-viable at this budget; **eBay-first recommended, reversing the earlier Shopify-first call.** Pending user confirmation. |
| 2026-08-16 | Skill packages evaluated. Adopted: `mardab96/ecommerce-claude-skills` (margin/BE-ROAS scripts), plus `cross-border-ecommerce`, `dropshipping-product-research`, `shopify-dropshipping` from `nexscope-ai/eCommerce-Skills`. **Rejected: the 5 eBay skills in nexscope — 35-line stubs, no frontmatter, no methodology.** |

## 6. Open — needs the user's answer

1. **Shopify-first, or Shopify + eBay together?** This is the branch point; everything downstream depends on it. Shopify is ready today; eBay is fully manual until an integration exists.
2. Hanafi deferment question (§2) — has a scholar been consulted?
3. No product selected yet. Week 1 of the 30-day plan (product research → shortlist of 10 → top 3 → 1) has not been run.

## 7. Where things live

```
plans/shopify-dropshipping-shariah-launch-plan-20260802.md   full plan (EN)
plans/…-AR-20260802.html / .pdf                              Arabic versions
modules/dropshipping/en/29-dropshipping-mastery-global/      12-chapter playbook
modules/dropshipping/workflows/en/dropshipping-launch-global.md   30-day execution plan
skills/en/references/dropshipping-tools-global.md            tool stack + pricing tiers
```
