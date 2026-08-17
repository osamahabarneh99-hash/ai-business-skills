---
name: ebay-cj-jordan
description: "eBay dropshipping from Jordan to the US market via CJ Dropshipping, on a sub-$100 budget with no paid ads. Covers the HiPO category gate for high-risk countries, Terapeak-led product research on real sold data, eBay fee and cash-cycle math under new-seller payout holds, no-ad metrics (impressions, CTR, watchers, sell-through) that replace ROAS, quality control without buying samples, AI image limits under Shariah salam rules, and the wholesale-vs-arbitrage compliance line. Trigger on: eBay dropshipping, eBay listing, Terapeak, CJ Dropshipping, eBay fees, eBay seller account, sell-through rate, HiPO, eBay category restricted, salam eBay."
metadata:
  emoji: "⚖️"
  category: ecommerce
license: MIT
---

# eBay + CJ Dropshipping — Jordan to US

Operating knowledge for a specific, constrained situation. Every threshold here was verified against
primary sources; where something is unverified it says so.

## Fixed operator context

| | |
|---|---|
| Seller | Jordan-registered, selling to the US |
| Supplier | CJ Dropshipping, **US warehouses only** |
| Payout | Payoneer (Payoneer serves Jordan; free; 3–5 business days to verify) |
| Budget | Under $100 — this is **working capital**, not ad budget |
| Ads | **None.** eBay supplies buyer traffic; paid acquisition is out of scope |
| Compliance | Shariah, structured as **salam** |

## 1. The compliance line — get this wrong and the account dies

eBay **permits** dropshipping from a **wholesale supplier**, and **prohibits** buying from another
retailer or marketplace (Amazon, Walmart, AliExpress retail) and shipping to the buyer. Penalty for
retail arbitrage: listing removal, account restriction, permanent suspension.

**CJ Dropshipping is a wholesale supplier, so CJ → eBay is compliant.** Any advice recommending
"arbitrage" or "thrift/retail sourcing" as an eBay dropshipping strategy is wrong for this operator —
reject it.

## 2. The HiPO category gate — check before any other work

Jordan is on eBay's **HiPO covered-countries list** under the "categories that require additional
readiness" policy, effective **2026-07-13**.

- Sellers in covered countries **without established selling history** are blocked from certain categories.
- **eBay deliberately does not publish which categories.** You discover a block only by attempting to list.
- Removal is **automatic**: build selling history and good performance, and eBay lifts it on periodic review.
  There is no manual appeal to file.
- Non-restricted categories remain fully open.

**Therefore: always test category eligibility with an unpublished draft listing BEFORE investing in
product research depth, images, or copy.** If blocked, move to the next candidate. Never attempt to
circumvent a category block — that ends the account.

## 3. Product research — Terapeak, not ad-spy tools

**Terapeak is free with any eBay seller account** (`Seller Hub → Research → Product Research`). It gives
**3 years of actual sold-transaction data**, including the real accepted price on Best Offer listings,
which never appears in ordinary search.

Prefer it over paid ad-spy tools for this operator: ad-spy measures *advertising engagement*; Terapeak
measures *completed sales*. With no ad spend, completed-sale data is the relevant signal.

Screening thresholds:

| Criterion | Threshold | Why |
|---|---|---|
| Sold volume, trailing 90 days | Steady and repeating | A single seasonal spike is not demand |
| Target sale price | **$25–60** | Below this, eBay fees eat the margin; above this, a seller with no feedback struggles to convert |
| Weight | Under 500 g | Shipping cost and damage risk |
| Competition | Moderate | Avoid categories dominated by sellers with thousands of feedbacks |
| CJ **US** warehouse stock | Mandatory | See §4 |
| Defect risk | Low | Substitutes for the skipped sample, see §6 |

Free supporting sources: TikTok Creative Center, Meta Ad Library, Google Trends, AliExpress
Dropshipping Center.

**Do not import benchmark numbers from the open web.** Pull category baselines from Terapeak for the
operator's own category and compare against those.

## 4. Why the US warehouse is non-negotiable

China-origin shipping of 15–30 days collides with three constraints simultaneously: US buyer
expectations on eBay, eBay seller performance metrics (late delivery lowers ranking and triggers
restrictions), and the salam requirement of a specified delivery term. CJ's US warehouses deliver in
2–7 days and resolve all three at once.

## 5. Money — fees, margin, and the cash cycle

Representative unit economics at a $29.99 sale price:

| Line | Amount |
|---|---|
| Sale price | $29.99 |
| eBay final value fee (**category-dependent**, ~2.5–15.3% + per-order fee) | −$4.27 |
| **International fee — 1.30%** | −$0.39 |
| CJ product + shipping | −$10.00 |
| **Seller currency conversion — 3.0%** | −$0.90 |
| **Gross profit** | **≈ $14.43** |

**Two fees specific to a Jordan-registered seller, verified on eBay's
[international fees page](https://export.ebay.com/en/fees-regulations-policies/seller-fees/international-fees):**

- **International fee, 1.30%.** eBay classifies **Jordan under "Rest of APAC"**. The fee applies because
  the buyer's address is outside the seller's registered country — i.e. **on every US sale, always**. It
  is charged on the *total* amount of the sale: item price **plus handling, plus the shipping the buyer
  selects, plus sales tax**, so charging shipping separately raises it.
- **Seller currency conversion, 3.0%.** Listing in USD and paying out to a non-USD account triggers
  conversion. Only Malaysia and Israel get 2.5%; Latin America pays 3.5%; Jordan sits in the 3.0% band.

A volume discount cuts the international fee to 1.10% at $3,000+ monthly sales **and** Above Standard
seller level — irrelevant at launch, worth knowing later.

The final value fee percentage is **category-dependent** (roughly 2.5%–15.3% plus a per-order fee).
Confirm the rate for the exact category on eBay's US selling-fees page before trusting any margin
figure — do not carry the 13.25% placeholder above into a real decision.

Verify against the operator's real numbers with `margin_stack.py` from
`mardab96/ecommerce-claude-skills` once 10+ real orders exist.

**The cash cycle is the binding constraint.** eBay holds new-seller payouts (typically until delivery
confirmation, up to ~21 days). The sequence is:

```
buyer pays eBay → eBay holds → operator pays CJ out of pocket → CJ ships
→ delivery confirmed → eBay releases to Payoneer
```

At ~$10–12 cost of goods and under $100 of capital, the realistic ceiling is **5–8 concurrent orders**.
Never encourage listing volume beyond funded fulfilment capacity — selling more than can be fulfilled
destroys the account in its first weeks.

## 5b. Selling limits — the second ceiling on volume

Separate from working capital, eBay caps how much a new account may list.

- Every account has a **monthly selling limit** (a number of items and a dollar amount). Find it at
  `Seller Hub → Overview → Monthly limits`. eBay does not publish a universal starting figure; it is
  account-specific.
- **Both active and sold listings count** toward the monthly cap, and Good 'Til Cancelled listings count
  too — they will not renew once the cap is reached.
- **eBay may end listings created over the limit.** They can be relisted next month or after an increase.
- **Category limits apply separately** to a seller new to a given category.
- Increases are automatic on monthly review, driven by sales volume and feedback, and can also be
  requested from Seller Hub.
- Listing in the wrong category to dodge a category limit is **search manipulation** — a policy
  violation, not a workaround.

**Consequence:** an operator with plenty of spare time cannot convert it into listing volume. Volume is
capped three ways at once — working capital, monthly selling limits, and category limits. Surplus time
belongs in research depth, listing completeness and buyer response speed, all of which raise placement
without raising volume.

## 6. Quality control without buying a sample

This operator does not buy samples. The substitute is stronger than one purchased unit, because it
reads across hundreds:

1. **Mine competitor negative feedback** — eBay seller feedback is public. Find sellers of the same item
   and read their negative and neutral feedback. Buyers state defects literally: "arrived broken",
   "smaller than pictured", "stopped working after a week".
2. **AliExpress / Amazon reviews** for the same item — weight the 2–3 star reviews, which are the most
   detailed and honest.
3. **CJ supplier rating and fulfilment rate**, plus CJ's pre-shipment inspection service on early orders.
4. **Category selection** — avoid electronics, fragile goods, size-dependent apparel, anything with a
   service life.

Treat recurring quality complaints in competitor feedback as a **disqualifying screen** at research
time, not a risk to manage later.

## 7. Metrics — ROAS does not apply

With no ad spend, CPA/ROAS/BE-ROAS are meaningless. Use eBay's own signals:

| Signal | Reads as |
|---|---|
| Impressions | Is eBay surfacing the listing at all? Zero → title and keywords |
| Click-through | Shown but not clicked → main image or price |
| Watchers | Interest without purchase → price, shipping, or weak trust (low feedback) |
| **Sell-through rate** | The primary metric: sold ÷ listed |

Diagnostic chain: zero impressions → title. High impressions, low CTR → image or price. High CTR, no
sales → listing page or trust.

## 8. Salam structure mapped to eBay mechanics

For a qualified scholar to confirm — never present this as a settled ruling.

| Salam condition | eBay mechanism |
|---|---|
| Full price paid at the contract session | **Buy It Now with immediate payment.** **Exclude auctions** — the gap between winning and paying breaks this condition |
| Specified delivery term | Handling-time and delivery-estimate fields are mandatory on eBay |
| Seller bears risk until delivery | eBay Money Back Guarantee enforces this structurally |
| Price certain | Total including shipping shown before payment |
| Goods available at term | CJ inventory sync auto-ends the listing on stock-out |
| **Accurate description** | Governs images — see §9 |

eBay may suit salam *better* than a self-hosted store, because the platform enforces the two hardest
conditions by its own rules rather than by the seller's self-written policy.

**Open question:** the Hanafi minimum-deferment position (~1 month) versus a 2–7 day window. Unresolved;
requires a scholar.

## 9. AI image editing — the limit is truthfulness

Under salam, accurate description is a **validity condition**. An image is part of the description.
So a misleading image is not merely an eBay policy problem — it touches the validity of the contract
(ghish / tadlīs).

| Permitted — improving presentation | Prohibited — altering reality |
|---|---|
| Background removal, clean white background | Changing colour, material, or texture |
| Exposure/colour correction toward the **true** colour | Adding features the product lacks |
| Crop, resize, sharpen | Inflating relative size |
| Removing the supplier's watermark from CJ imagery | Scenes implying absent capabilities |
| Secondary images with **real** dimensions | Text or badges on the **main** image (eBay policy) |

**Decision rule:** "If the buyer held this in their hand, would they feel the image misled them?" If yes
or maybe — prohibited.

**Never use another eBay seller's images** — copyright and VeRO violation, penalty is account closure.
CJ imagery is licensed to its sellers; competitor imagery is not.

## 10. Failure modes specific to this setup

1. Auctions — breaks salam and burns margin.
2. China-origin shipping — lowers seller rating, triggers restrictions, violates the stated term.
3. Unedited CJ stock images — every competitor uses the identical photos.
4. Competing on lowest price with no feedback — win on clarity, trust, and response speed instead.
5. Slow message response — a direct eBay ranking factor, and free to fix.
6. Listing beyond funded capacity — see §5.
7. Attempting to bypass a category block — immediate account termination.

## Related

- `plans/ebay-cj-lean-launch-plan-20260816.md` — the phased execution plan
- `.agents/dropshipping-context.md` — current project state and decisions log
- `plans/shopify-dropshipping-shariah-launch-plan-20260802.md` — full Shariah framework (§1), Jordan constraints (§2)
