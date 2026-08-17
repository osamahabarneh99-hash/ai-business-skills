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
| Shopify | **Deferred.** Not viable under $100 (see §1b). Remains the target once a real ad budget exists. |
| **Primary channel** | **eBay** — confirmed 2026-08-16. Chosen over Shopify on budget grounds, see §1b. |
| Compliance frame | Shariah — structured as a **salam** contract |
| Budget posture | Lean. Paid tools are rejected by default; free alternatives required. |

## 1b. Operator readiness (intake 2026-08-16 — settled, do not re-ask)

| | |
|---|---|
| Assets owned | **Nothing.** Corrected 2026-08-16 — Payoneer does not exist either. All three accounts (Payoneer, eBay, CJ) are created from scratch in Phase 0 of the active plan. |
| Risk capital | **Under $100 total.** Note this is now *working capital*, not ad budget: eBay holds new-seller payouts, so CJ orders must be funded out of pocket first. Realistic ceiling ~5-8 concurrent orders. |
| Time | 7–15 h/week realistic (not 15–30). |
| Experience | **Has never sold online.** First venture. Explain mechanics; assume no prior knowledge. |
| Samples | **Will not buy product samples.** User decision 2026-08-16. Quality control runs on competitor negative-feedback mining instead — see the plan's Phase 5. |
| Images | Produced with AI tools. Hard limit: enhancement of presentation is allowed, alteration of the product's true appearance is not — under salam, description accuracy is a validity condition, so a misleading image touches contract validity, not just eBay policy. |

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

## 4b. Verification ledger — what is confirmed and what is NOT

Treat anything in the right column as an assumption. Do not repeat it to the user as fact, and do not
let a financial or strategic decision rest on it without checking first.

**Verified at primary source (eBay's own pages, 2026-08-16)**

- Jordan is on eBay's seller-registration country list — registration is possible.
- Jordan is on the HiPO covered-country list, effective 2026-07-13; restricted categories are
  deliberately unpublished.
- Seller standards: cases capped at a flat **2** ("2 or 0.3%, whichever is higher"); defect rate demotes
  only above 2% **and** across **more than 4 buyers**; late shipment alone never causes Below Standard
  in the US program.
- **International fee 1.30%** — Jordan is listed under "Rest of APAC". Applies to every US sale, charged
  on the total including shipping and tax.
- **Seller currency conversion 3.0%** for Jordan's band.
- Regulatory operating fee does **not** apply to ebay.com listings.

**NOT verified — flagged, still open**

| Claim | Status |
|---|---|
| **Can a Jordan seller actually receive eBay payouts, and is Payoneer offered?** | **THE blocking unknown.** Gate 0 of the plan. Only the live registration flow answers it. |
| Final value fee percentage | Category-dependent, ~2.5–15.3% + per-order fee. The 13.25% in the worked example is a **placeholder**. Confirm for the actual category. |
| Per-order fee amount | Unconfirmed. |
| New-seller payout hold duration (~21 days used) | Directionally right, exact terms unconfirmed. |
| ~250 free listings/month | Unconfirmed. |
| CJ US-warehouse delivery 2–7 days | Supplier's own claim, not independently checked. |
| Terapeak's 3-year data depth | Secondary sources only. |
| Evaluation window (3 vs 12 months, 400-transaction rule) | Removed as a stated fact. Only the seller's own dashboard is authoritative. |
| Best Offer breaking payment-at-contract under salam | My inference, not a ruling. For a scholar. |

**Standing instruction:** when one of these gets confirmed, move it up, cite where, and date it.

## 5. Decisions log

| Date | Decision |
|---|---|
| 2026-08-02 | Launch plan written: Shopify + CJ + Payoneer, salam structure. |
| 2026-08-16 | TrendTrack rejected — no budget. Replaced with Terapeak-led free stack (§3). |
| 2026-08-16 | eBay confirmed policy-compliant via CJ, but deferred pending the §4 addendum. |
| 2026-08-16 | Verified from eBay's own pages: Jordan is a registerable seller country, and Payoneer serves Jordan. **But Jordan is on eBay's HiPO covered list (effective 2026-07-13): new sellers without history are blocked from an UNPUBLISHED set of categories, discoverable only by attempting a listing.** Plan resequenced — category-eligibility test now precedes all production work. |
| 2026-08-16 | **Fee audit found a material omission.** All margin math rested on an unverified `13.25% + $0.30`. eBay's international-fees page lists **Jordan under "Rest of APAC"**, carrying an **international fee of 1.30% on every US sale** — charged on the total including shipping and tax — which was entirely absent, and a **currency conversion charge of 3.0%**, not the 2% assumed. Corrected across the skill, the Arabic plan and the illustrated PDF: gross per order moves from $15.12 to **$14.43**. The FVF percentage is category-dependent and is now labelled a placeholder. Conclusion vs Shopify is unchanged. |
| 2026-08-16 | Skill coverage audited against the plan's six phases. Two gaps filled: `ebay-listing-craft` (Cassini placement — item specifics are the dominant lever and were entirely uncovered) and `ebay-post-sale-ops` (seller standards, returns, cases — where accounts actually die). **Thresholds were then verified against eBay's own page and three claims in the first draft were wrong.** Corrected: cases closed without seller resolution are capped at a flat **2** ("2 or 0.3%, whichever is *higher*"), so at low volume the flat number governs and it is the only truly binding limit; the defect rate demotes you only if defects span **more than 4 different buyers**, so one early cancellation cannot demote you; and **late shipment alone never causes Below Standard in the US program** — it is a Top Rated and Best Match issue. Operating rule stands but for a better reason: never let a dispute reach case stage, because the case budget is 2 and low volume cannot dilute it. Deliberately NOT built: account setup (one-time), ads (no budget), scaling (premature). |
| 2026-08-16 | Ported `trend-research-guide.md` from `dnh33/webshop-ux-expert` into `modules/dropshipping/en/product-research-ebay-cj/SKILL.md`. Not a translation — three of its assumptions fail here (paid ads create demand; social engagement is the primary signal; enter trends early), and it had **no margin dimension at all**. Re-weighted the 0-100 score around Terapeak completed-sales data and margin-after-fees, added four hard rejects, and **inverted the trend-lifecycle advice**: with no ad budget you harvest existing search demand, so emerging trends are the riskier stage and peak is the safest. |
| 2026-08-16 | The five nexscope eBay skills were rejected at install for missing YAML frontmatter. Frontmatter was added and they installed, then **all five were deleted with the user's consent** — they are 35-line capability lists with no method, and `ebay-product-research` recommends *arbitrage* sourcing, the exact practice eBay bans for dropshipping. A hollow skill that auto-triggers on eBay questions displaces correct reasoning, so it is worse than none. Replaced by one real skill: `modules/dropshipping/en/ebay-cj-jordan/SKILL.md` (195 lines), installed at `~/.claude/skills/ebay-cj-jordan/`. **Do not reinstall the nexscope eBay skills.** |
| 2026-08-16 | User decisions: no product samples; images produced with AI within Shariah/eBay limits; all three accounts to be created and linked. Plan v2 written. |
| 2026-08-16 | **eBay-first confirmed by user.** Lean plan written: `plans/ebay-cj-lean-launch-plan-20260816.md` — 8–10 weeks, $0 until the sample, gated on Jordan payout eligibility. |
| 2026-08-16 | Readiness intake: Payoneer only, <$100 risk capital, 7–15 h/week, zero selling experience. Shopify + paid ads ruled out as non-viable at this budget; **eBay-first recommended, reversing the earlier Shopify-first call.** Pending user confirmation. |
| 2026-08-16 | Skill packages evaluated. Adopted: `mardab96/ecommerce-claude-skills` (margin/BE-ROAS scripts), plus `cross-border-ecommerce`, `dropshipping-product-research`, `shopify-dropshipping` from `nexscope-ai/eCommerce-Skills`. **Rejected: the 5 eBay skills in nexscope — 35-line stubs, no frontmatter, no methodology.** |

## 6. Open — needs the user's answer

1. ~~Shopify-first vs eBay~~ — **resolved 2026-08-16: eBay first.** The live blocker is now the Gate 0 payout-eligibility check in the lean plan; nothing else starts until it passes.
2. Hanafi deferment question (§2) — has a scholar been consulted?
3. No product selected yet. Phase 2 of the lean plan (Terapeak → 10 candidates → 3 → 1) has not been run.

## 7. Where things live

```
plans/ebay-cj-lean-launch-plan-20260816.md                    ACTIVE plan (AR) — follow this one
plans/shopify-dropshipping-shariah-launch-plan-20260802.md   original funded plan (EN) — reference
plans/…-AR-20260802.html / .pdf                              Arabic versions
modules/dropshipping/en/29-dropshipping-mastery-global/      12-chapter playbook
modules/dropshipping/workflows/en/dropshipping-launch-global.md   30-day execution plan
skills/en/references/dropshipping-tools-global.md            tool stack + pricing tiers
```
