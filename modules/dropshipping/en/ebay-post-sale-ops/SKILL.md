---
name: ebay-post-sale-ops
description: "Running eBay orders after the sale without losing the account: seller performance standards with their real qualifiers (cases are capped at a flat 2 whichever way the percentage falls; a defect only demotes you if it spans more than 4 buyers; late shipment alone never causes Below Standard in the US program), the CJ fulfilment loop and tracking discipline, buyer messaging, returns and Money Back Guarantee cases, feedback recovery, and supplier stock-out handling. Includes the salam obligation to bear risk until delivery and how refunds consume working capital. Trigger on: eBay order, fulfil order, tracking, late shipment, defect rate, seller standards, Below Standard, buyer message, return request, INAD, not as described, eBay case, Money Back Guarantee, negative feedback, refund, out of stock."
metadata:
  emoji: "🛡️"
  category: ecommerce
license: MIT
---

# eBay Post-Sale Operations — Protecting the Account

Listing mistakes cost impressions and are fixable tomorrow. Post-sale mistakes cost **account standing**,
which is slow to earn and slow to repair. For a new seller in a HiPO country the margin for error is
already narrower than average. This is the highest-stakes area of the operation.

## 1. The thresholds that decide everything

Verified against eBay's own
[seller performance standards](https://export.ebay.com/en/growth/seller-performance/global-seller-performance-standards)
page. **Read the qualifiers — they invert the naive reading of the percentages.**

| Metric | Below Standard trigger | Top Rated |
|---|---|---|
| **Cases closed without seller resolution** | More than **2 cases**, *or* 0.3% of transactions — **whichever is higher** | ≤ 2 (or 0.3%) |
| **Transaction defect rate** | Above 2% **and** only if the defects involve **more than 4 different buyers** | ≤ 0.5%, across ≤ 3 buyers |
| **Late shipment rate** | **On its own, does not cause Below Standard** in the US program | ≤ 5 late (or 3%) |

### What this actually means at your volume

**Cases are the binding constraint, and nothing else is close.** Because the allowance is
"2 cases *or* 0.3%, whichever is **higher**", at low volume the percentage is irrelevant and you are
governed by the flat number: **you get 2 cases; the 3rd puts you Below Standard.** That is your entire
budget for the evaluation period, regardless of how many orders you ship.

**The defect rate has more headroom than it appears.** A single cancellation on 10 sales is a 10% defect
rate on paper, but Below Standard also requires defects across **more than 4 different buyers**. One
defect cannot demote you. This does not make cancellations safe — they still block Top Rated and they
accumulate — but it means one early mistake is not fatal.

**Late shipment will not, by itself, make you Below Standard in the US program.** It still matters: it
blocks Top Rated and feeds Best Match placement, which is your only traffic source. Treat it as a
ranking problem, not an account-survival problem.

### Operating rule

**Never let a dispute become a case.** Not because defects are catastrophic — they are more forgiving
than they look — but because the case allowance is a flat **2**, and it is the one limit low volume
cannot dilute. Refund or accept the return during the *request* stage, every time, even at a loss on
that order. A $12 refund is cheaper than spending a third of your case budget.

### If you do go Below Standard

Consequences compound, and one of them hits your cash directly:

- Lower placement in Best Match — with no ads, this is the severe one
- Selling limits may be reduced
- Blocked from Promoted Listings
- **Funds held until tracking shows the item is moving** — tightens an already tight cash cycle
- Cannot deduct from a buyer's refund for an item returned used or damaged

Check your live figures at the [seller standards dashboard](https://sellerstandards.ebay.com/dashboard)
rather than relying on any table, including this one — evaluation windows differ by volume (3 or 12
months) and by regional program, and only your own dashboard shows which applies to you.

## 2. What counts as a defect

Only two things:

1. **Seller-cancelled transaction** — including cancelling because you ran out of stock.
2. **Case closed without seller resolution** — the buyer escalated and eBay decided against you.

Notably **not** defects: a neutral or negative feedback on its own, a return you accept and process, a
refund you issue directly. **So the escape route is always the same: resolve it yourself, before it
becomes a case.** A buyer you refunded quickly costs you money. A buyer who escalated to eBay costs you
the account.

## 3. Late shipment — a ranking problem you fully control

Counted late when tracking is not uploaded and validated within your stated handling time, or the
carrier scan shows delivery after the estimate. It will not make you Below Standard on its own in the
US program, but it blocks Top Rated and drags Best Match placement — and placement is your only source
of buyers.

- Set handling time you can honour on your **worst** day, not your best.
- Order from CJ the **same day** the order lands. Every hour spent is handling time consumed.
- Confirm CJ pushed a **real, scannable tracking number** back to eBay — a number that never scans
  counts as no tracking.
- Never mark shipped before it actually ships. False marking becomes a late shipment and a defect
  the moment the buyer notices.

## 4. The fulfilment loop

```
eBay order → verify buyer address → place with CJ same day → CJ ships from US warehouse
→ tracking syncs to eBay → monitor scan events → delivered → eBay releases payout to Payoneer
```

Check daily during an active order. Two failure points deserve attention: a tracking number that never
gets its first scan, and a shipment that stalls mid-transit. In both cases **message the buyer before
they message you** — a proactive note almost always prevents a case.

Remember the cash constraint: you pay CJ before eBay releases funds, so refunds come out of the same
working capital that funds new orders. Every refund reduces how many orders you can carry.

## 5. Buyer messages

Response speed is a ranking input and costs nothing.

- Answer within hours, always in English, always courteous.
- Answer the actual question first, then anything else.
- Never argue, never blame the carrier, never blame the supplier. The buyer has no relationship with CJ
  — from their side you are the seller and the obligation is yours. This is also exactly what salam
  requires.
- When something has genuinely gone wrong, lead with the remedy: "I'm sorry — I'm shipping a
  replacement today / refunding you in full now."
- Recurring questions mean the listing is unclear. Fix the listing rather than answering it forever.

## 6. Returns and cases

Two kinds, with very different economics:

| Type | Who pays return shipping | Counts against you |
|---|---|---|
| **Remorse** (changed mind, wrong size) | Buyer, if your policy says so | No |
| **INAD** (item not as described) | **You** | Yes, if it becomes a case |

INAD is the dangerous one, and it is usually **caused by the listing** — an overstated photo, a missing
specific, a vague size. Recurring INAD is a signal to fix the listing or drop the product, not to argue.

**Money Back Guarantee flow:** buyer opens a request → you have a window to respond → unresolved, the
buyer escalates to a case → eBay rules. **Never let it reach escalation.** Accept the return or refund
during the request stage. A case closed against you breaches the 0.30% threshold almost immediately at
low volume.

For a low-value item, refunding **without** requiring the return is often correct: return shipping from
the US can exceed the item's value, and you avoid the defect entirely.

## 7. Feedback

Negative feedback is not itself a defect, but it deters buyers, and at low feedback counts one negative
is a visible proportion of your profile.

- Resolve the underlying problem first, then politely ask the buyer to revise. eBay provides a feedback
  revision request; use it sparingly and never pressure.
- Never offer money for feedback removal — feedback manipulation is a suspendable offence.
- eBay removes feedback only in narrow cases (policy-violating content, buyer confirmed at fault,
  events outside your control). Do not build a strategy on removal.
- Best defence is volume of good transactions. Early on, over-deliver deliberately.

## 8. Supplier stock-out — do not cancel

If CJ goes out of stock after a sale, **cancelling is a defect**. Under salam it is also a breach: your
obligation to the buyer is independent of your supplier's performance, and the plan forbids
"subject to supplier availability" terms.

In order of preference:

1. Source the same item from another CJ warehouse or supplier, even at reduced or zero margin.
2. If genuinely impossible, contact the buyer, explain honestly, and **refund in full immediately** —
   ask them to accept the cancellation so it is buyer-initiated where the platform allows.
3. Prevention: keep CJ inventory sync active so stock-outs auto-end the listing before a sale happens.

## 9. Weekly review

Ten minutes in Seller Hub:

- Seller standards dashboard — the four metrics against thresholds
- Any open requests or cases — resolve today
- Tracking on every in-flight order — any without a first scan
- New feedback
- Listings auto-ended by CJ stock sync

## Related

- `modules/dropshipping/en/ebay-cj-jordan/SKILL.md` — fees, cash cycle, salam mapping
- `modules/dropshipping/en/ebay-listing-craft/SKILL.md` — most INAD originates in the listing
- `plans/ebay-cj-lean-launch-plan-20260816.md` — phase 6
