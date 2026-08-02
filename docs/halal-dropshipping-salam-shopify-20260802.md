# استراتيجية الدروبشيبينغ الحلال على Shopify — نموذج بيع السَّلَم

> **التاريخ:** 2026-08-02 · **الحالة:** خطة إطلاق جاهزة للتنفيذ
> **السياق:** الانتقال من البيع على منصات الطرف الثالث (بعد تعليق حساب eBay نهائياً) إلى متجر Shopify مستقل، بهيكلة متوافقة مع الشريعة، وبداية شبه مجانية، واستلام الأرباح عبر **Payoneer**.
> **مكمّلات هذا الملف في المستودع:** `docs/dropshipping-guide.md` (دليل 8 فصول)، `modules/dropshipping/workflows/en/dropshipping-launch-global.md` (خطة 30 يوماً)، `skills/en/references/dropshipping-tools-global.md` (مقارنة الموردين والأدوات).

---

## Executive Summary (English)

**Goal:** Rebuild an e-commerce business on an owned Shopify store (after a permanent eBay suspension) using a **Shariah-compliant dropshipping structure**, with a near-zero starting budget and Payoneer as the payout rail.

**Key decisions (research-backed):**

1. **Shariah structure:** Classic dropshipping ("sell what you don't own") is problematic per the hadith *"do not sell what is not with you."* Three compliant structures exist: **(a) Salam-style forward sale** (full prepayment + precisely described goods + stated delivery date + seller bears risk until delivery), **(b) Wakala** (agent for the supplier for a known fee), and **(c) Ju'ala** (reward contract — keep everything above the supplier's floor price), the structure recommended by Mufti Faraz Adam (Amanah Advisors). The store will implement Salam-style checkout mechanics *plus* a written supplier agreement, with a clear note to validate the final setup with a qualified scholar.
2. **Target region: GCC (Saudi Arabia first, UAE second).** GCC e-commerce passed **$50B in 2026** growing 20–25%/yr; Saudi market alone is **$31.3B (CAGR ~12%)**. Meta CPMs average **~$8.40 in GCC vs $15–25+ in the US**, competition is lower than US/EU, Arabic is a native advantage, and no VAT/nexus complexity like the EU.
3. **Supplier: CJ Dropshipping** (free plan, native Shopify app, UAE warehouse — a documented Dubai case cut delivery from 22 to 6 days, COD support via Aramex/SMSA) with **AliExpress/DSers** as a free validation fallback.
4. **Payments:** 2Checkout (Verifone) → **Payoneer payout integration** (documented by Payoneer), plus PayPal, and **COD via Aramex/SMSA** (COD is still 25–40% of GCC transactions).
5. **Near-zero start:** Shopify 3-day free trial + **3 months × $1/mo**, free Dawn theme, CJ free plan, organic-first marketing (TikTok/Reels/Shorts) instead of paid ads. **Cash needed for month 1: ≈ $10–30.**
6. **Winning-product criteria** were compiled from YouTube (Ac Hampton's 5-point criteria, The Ecom King's free methods, Nathan Nazareth 2026), Facebook Ad Library methodology, and Instagram influencer-tracking methods — then applied to 7 candidate products. **Top pick: an "Islamic lifestyle" niche store (smart tasbih + portable padded prayer mat + Quran speaker lamp)** — culturally native to the GCC, lightweight, brandable, and inherently halal.

---

## 1) الإطار الشرعي: كيف نجعل الدروبشيبينغ حلالاً

### 1.1 أين المشكلة في الدروبشيبينغ التقليدي؟

النموذج التقليدي: تعرض منتجاً لا تملكه، والعميل يدفع لك، ثم تشتريه من المورد الذي يشحنه مباشرة. الإشكالان الشرعيان:

1. **بيع ما لا تملك:** لقوله ﷺ: «**لا تَبِعْ ما ليس عندك**» — البائع لا يملك السلعة لحظة البيع ([Islam Q&A #334744](https://islamqa.info/en/answers/334744)).
2. **الغرر:** عدم اليقين في التسليم والمواصفات والمدة.

### 1.2 ثلاث هيكلات متوافقة مع الشريعة

| الهيكلة | الفكرة | شروطها العملية |
|---------|--------|----------------|
| **أ. بيع السَّلَم** (طلب المستخدم الأساسي) | بيع موصوف في الذمة بثمن معجَّل | 1) العميل يدفع **كامل الثمن** عند الطلب (وهذا ما يحدث فعلاً في الدفع الإلكتروني المسبق) 2) وصف المنتج وصفاً نافياً للجهالة (مواصفات، لون، مقاس، صور مطابقة) 3) **أجل تسليم معلوم** معلَن في صفحة المنتج (مثلاً: "التسليم خلال 5–8 أيام عمل") 4) السلعة مثلية موصوفة لا معيَّنة |
| **ب. الوكالة (Wakala)** | أنت وكيل بأجر معلوم عن المورد، تبيع ما **يملكه هو** | اتفاق مكتوب مع المورد أنك تسوّق وتبيع باسمه مقابل عمولة/هامش معلوم — أجازه [Islam Q&A](https://islamqa.info/en/answers/334744) صراحةً ("halal if you act as an agent in return for a fee") |
| **ج. الجُعالة (Ju'ala)** | المورد "جاعل" يعرض: من باع سلعتي فوق سعر الأرضية فله ما زاد | لا تتطلب عقد عمل ولا أجراً ثابتاً؛ التعويض مرتبط بتحقيق النتيجة. وهي الهيكلة التي رجّحها المفتي فرض آدم وسليمان محمد علي (رئيس المنتجات في بنك مزن الإسلامي) في ورقة [Amanah Advisors](https://amanahadvisors.com/dropshipping-the-halal-and-shariah-compliant-way/) لأنها الأنسب لواقع الدروبشيبينغ دون تكلّف |

### 1.3 تنبيه مهم حول السَّلَم تحديداً

ورقة Amanah Advisors تلفت إلى نقطة دقيقة: بعض الفقهاء يشترط في السَّلَم والاستصناع أن **يقبض البائع السلعة (ولو قبضاً حكمياً) قبل تسليمها للعميل**، وأن يتحمل **ضمانها ومخاطرها** حتى التسليم. لذلك، لتقوية الجانب الشرعي في متجرك:

- **تحمَّل المخاطر فعلياً:** سياسة استرجاع/تعويض تجعل الضرر قبل وصول المنتج على حسابك أنت لا العميل (وهذا أيضاً يرفع ثقة العميل ويخفض chargebacks).
- **اجمع بين الهيكلات:** آلية دفع مسبق كامل + وصف دقيق + أجل معلوم (شروط السَّلَم) **مع** اتفاقية مكتوبة مع المورد (وكالة أو جُعالة).
- **بديل أحوط:** "اشترِ ثم بِع" — عند الطلب، نفّذ الشراء من المورد أولاً (تنتقل السلعة إلى ذمتك/ضمانك) ثم أكّد البيع للعميل؛ CJ Dropshipping يتيح الدفع للمورد قبل تأكيد الشحن.

> ⚠️ **إخلاء مسؤولية شرعي:** هذا عرض للآراء الفقهية المنشورة ([Islam Q&A](https://islamqa.info/en/answers/334744)، [Amanah Advisors](https://amanahadvisors.com/dropshipping-the-halal-and-shariah-compliant-way/)، [IlmFeed](https://ilmfeed.com/dropshipping-permissible-islam/)) وليس فتوى. اعرض الهيكلة النهائية لمتجرك (نموذج العقد + صفحة الشروط) على عالم/هيئة شرعية قبل الإطلاق.

### 1.4 ضوابط المنتجات

- لا منتجات محرمة أو مشبوهة (كحوليات، تماثيل، رموز موسيقية/دينية مخالفة، منتجات خادعة).
- لا صور نساء غير محتشمة في الإعلانات (مهم أيضاً لسياسات الإعلان في الخليج).
- صدق العرض: صور حقيقية للمنتج، مدة شحن حقيقية، لا "تخفيضات وهمية" (من أسباب الحظر في المنصات أيضاً — انظر §2).

---

## 2) دروس تعليق حساب eBay → لماذا Shopify + checklist الامتثال

حساب eBay المعلَّق نهائياً درسٌ في **مخاطر البناء على أرض غيرك**. المنصات تعلّق الحسابات خوارزمياً لأسباب لا تُفصح عنها غالباً: بطء الشحن/تتبع مفقود، نسبة نزاعات، تشابه مع حسابات محظورة، بيع علامات تجارية، أو مجرد ارتباط IP/جهاز.

**Shopify يملّكك المتجر والعملاء**، لكن الخطر ينتقل إلى **بوابة الدفع** (وهي أيضاً تعلّق الحسابات). checklist لتجنب تكرار السيناريو:

- [ ] مدد شحن **حقيقية ومعلنة** في صفحة المنتج والـcheckout (وهذا نفسه شرط "الأجل المعلوم" في السَّلَم — الالتزام الشرعي هنا يحميك تجارياً)
- [ ] تتبّع (tracking) لكل طلب يُرفع تلقائياً للبوابة (2Checkout/PayPal تطلبه عند النزاعات)
- [ ] لا منتجات علامات تجارية أو نسخ مقلدة إطلاقاً
- [ ] نسبة chargeback أقل من 1% — ردّ الأموال بسرعة عند الشك بدل النزاع
- [ ] بريد خدمة عملاء باسم النطاق يرد خلال 24 ساعة + صفحة سياسات كاملة (Refund/Shipping/Privacy/Terms)
- [ ] لا تستخدم نفس بيانات/بطاقات حساب eBay المحظور في إنشاء حسابات مدفوعات جديدة إن كان الحظر مرتبطاً بنزاعات مالية
- [ ] ابدأ بحجم صغير ونمِّ تدريجياً — القفزات المفاجئة في حجم المبيعات تثير مراجعات البوابات

---

## 3) اختيار السوق: التوصية — الخليج (السعودية أولاً، الإمارات ثانياً)

### 3.1 المقارنة

| المعيار | الخليج (SA/AE) | أمريكا الشمالية | أوروبا |
|---------|----------------|------------------|--------|
| حجم السوق والنمو | +$50B في 2026، نمو 20–25% سنوياً؛ السعودية وحدها $31.3B بنمو ~12% ([Virto](https://virtocommerce.com/blog/ecommerce-in-middle-east-gcc)، [Mordor](https://www.mordorintelligence.com/industry-reports/saudi-arabia-ecommerce-market)) | الأكبر عالمياً لكن شبه مشبع | كبير لكن مجزأ لغوياً |
| تكلفة الإعلان | Meta CPM ~ $8.4 وسطياً؛ CPC تجارة إلكترونية SA $0.8–3.2 ([23HubLab](https://23hublab.com/meta-ads-benchmarks-across-gcc-markets/)، [LogicWorks](https://logicworks.ae/blog/what-is-google-ads-cost-per-click-in-uae-and-gcc-2026/)) | CPM $15–25+ | متوسطة–عالية |
| المنافسة في الدروبشيبينغ | متوسطة — أقل بكثير من أمريكا | الأشد عالمياً | متوسطة–عالية |
| ميزتك التنافسية | **العربية لغتك الأم** — copy وUGC ومحتوى organic أصيل يصعب على المنافس الأجنبي تقليده | لا ميزة | لا ميزة |
| التعقيد الضريبي/القانوني | بسيط نسبياً للبائع عن بُعد | Sales tax حسب الولاية | VAT/OSS معقد |
| الدفع | دفع إلكتروني متنامٍ + **COD لا يزال 25–40%** ([swftbox](https://www.swftbox.com/swftblogger/uae-ecommerce-reality-2026)) — قناة إضافية لا تعتمد على بوابة أجنبية | بطاقات فقط عملياً | بطاقات + محافظ |
| القوة الشرائية | من الأعلى عالمياً؛ تقبّل أسعار $30–80 | عالية | متوسطة |

### 3.2 الحكم

**ابدأ بالسعودية** (أكبر سوق، أرخص نقرة، جمهور شاب يشتري من TikTok/Snapchat)، **ثم وسّع للإمارات والكويت** من نفس المتجر (Shopify Markets يدعم تعدد الدول). تجنّب أمريكا في البداية: منافسة قصوى، CPM مضاعف، ولا ميزة لغوية — وهي خطوة توسّع لاحقة بعد إثبات النموذج، لا نقطة بداية بميزانية شبه صفرية.

> ملاحظة موسمية: CPM الخليج يقفز في رمضان إلى $14–18+ — خطط الإطلاق التجريبي خارج المواسم، واستثمر المواسم بعد إثبات المنتج.

---

## 4) المورد الموصى به

### 4.1 القرار: CJ Dropshipping (أساسي) + AliExpress/DSers (تحقق أولي)

استناداً إلى مرجع الأدوات في هذا المستودع (`skills/en/references/dropshipping-tools-global.md`) وبحث 2026:

| | CJ Dropshipping | لماذا يناسبنا |
|---|---|---|
| التكلفة | **مجاني** — لا اشتراك شهري، تدفع لكل طلب فقط | متوافق مع البداية شبه المجانية |
| Shopify | تطبيق رسمي مجاني، مزامنة طلبات تلقائية | تكامل أصلي |
| الخليج | مستودعات عالمية + خدمة للإمارات/السعودية؛ حالة موثقة: بائع في دبي خفّض التسليم من 22 يوماً إلى **6 أيام** وخفّض الاسترجاعات 40% ([EasyApps guide](https://easyappsecom.com/guides/selling-on-shopify-uae)) | مدة تسليم قصيرة = شرط "الأجل المعلوم" قابل للالتزام به |
| COD | يدعم الشحن مع مشغلي COD في الخليج (Aramex، SMSA) | يفتح شريحة 25–40% من المشترين |
| خدمات | Sourcing مجاني لأي منتج، تغليف باسم علامتك، تصوير/فيديو للمنتج | يدعم بناء براند لاحقاً |
| الدفع للمورد | يقبل الدفع بالبطاقة/PayPal | يمكن تمويله من Payoneer card |

**AliExpress + DSers** (مجاني حتى 3 متاجر): استخدمه فقط للتحقق من منتج قبل نقله إلى CJ — لا تعتمد شحنه البطيء (15–30 يوماً) لطلبات حقيقية في الخليج لأنه يكسر وعد التسليم المعلن.

### 4.2 خطة التكامل (يوم واحد)

1. أنشئ حساب CJ مجاني → ثبّت تطبيق CJ من Shopify App Store.
2. لكل منتج مرشح: اطلب **تسعيرة sourcing** من CJ (زر Source) واطلب صراحةً خيار الشحن الأسرع للسعودية/الإمارات مع مدته.
3. استورد المنتج → عدّل العنوان/الوصف بالعربية → حدد مدة التسليم في صفحة المنتج (شرط السَّلَم).
4. اطلب من CJ عيّنة للمنتج الفائز قبل التوسع (جودة + صدق العرض).

---

## 5) حل الدفع حول Payoneer

Payoneer **لا يعالج مدفوعات checkout مباشرة** — هو حساب استلام. البنية الموصى بها:

```
العميل يدفع في المتجر
   ├── بطاقات: 2Checkout (Verifone) ──→ سحب مباشر إلى Payoneer  ✅ التكامل موثق
   ├── PayPal Checkout ──→ سحب إلى Payoneer (حسب بلد الحساب)
   └── COD (الخليج): Aramex / SMSA يحصّلون نقداً ──→ تحويل بنكي/Payoneer
```

خطوات التنفيذ:

1. **2Checkout/Verifone**: سجّل حساب بائع → في Shopify: Settings → Payments → اختر 2Checkout كبوابة بطاقات → في لوحة 2Checkout: Payment Profiles → اربط حساب Payoneer ([دليل Payoneer الرسمي](https://www.payoneer.com/resources/general-payments/shopify-payouts-withdrawal/)، [2Checkout-Shopify](https://www.2checkout.com/online-shopping-carts/shopify.html)). يدعم 100+ عملة و200+ دولة.
2. **PayPal** كخيار ثانٍ (المشترون الخليجيون يستخدمونه، ويرفع التحويل).
3. **COD**: فعّل "Cash on Delivery" في Shopify Payments settings كطريقة يدوية، واربط الشحن عبر مشغل يدعم تحصيل COD في السعودية (SMSA، Aramex) — يحوّلون المتحصلات دورياً. ابدأ به بعد أول 10 طلبات مدفوعة مسبقاً (COD يرفع نسبة رفض الاستلام، فلا تبدأ به وحده).
4. احتياط: [Payoneer Checkout](https://www.payoneer.com/checkout/shopify-integration/) نفسه أصبح يقدم تكامل checkout لمتاجر Shopify في أسواق مختارة — تحقق من توفره لبلد تسجيلك؛ إن توفر فهو يختصر الوسيط.

> **مبدأ توزيع المخاطر (درس eBay):** فعّل بوابتين على الأقل + COD، بحيث لا يوقف تعليقُ حسابٍ واحد تدفقَك النقدي كلياً.

---

## 6) خطة البداية شبه المجانية

### 6.1 جدول التكاليف — الشهر الأول

| البند | الخيار المجاني/الأرخص | التكلفة |
|-------|----------------------|---------|
| Shopify | تجربة 3 أيام مجانية ثم **3 أشهر × $1** ([التفاصيل](https://www.demandsage.com/shopify-pricing/)) | $1 |
| الثيم | Dawn (رسمي مجاني، سريع، يدعم RTL بالتخصيص) | $0 |
| المورد | CJ Dropshipping خطة مجانية | $0 |
| الدومين | `.store` بعروض ~$1 السنة الأولى، أو `.com` (~$10) | $1–10 |
| تطبيقات | CJ (مجاني) + Shopify Email (مجاني حتى 10K رسالة/شهر) + Judge.me للمراجعات (خطة مجانية) | $0 |
| التسويق | **Organic فقط** (§6.2) — لا إعلانات مدفوعة في الشهر الأول | $0 |
| عيّنة المنتج الفائز | منتج واحد + شحن | ~$10–20 |
| **الإجمالي** | | **≈ $12–31** |

بعد إثبات أول مبيعات organic: أعد استثمار الأرباح في إعلانات TikTok/Snapchat/Meta بميزانية $5–10/يوم (راجع فصل الإعلانات في `docs/dropshipping-guide.md`).

### 6.2 التسويق العضوي (بديل ميزانية الإعلانات $300–500)

1. **TikTok + Instagram Reels + YouTube Shorts** بالعربية: 1–2 فيديو يومياً للمنتج (unboxing، قبل/بعد، 3 استخدامات لا تعرفها...). الخوارزميات تدفع المحتوى الجديد مجاناً، والسوق الخليجي من الأعلى عالمياً في استهلاك TikTok.
2. **صيغة الفيديو الرابح** (من تحليل المحتوى في §7): hook خلال أول ثانيتين → المشكلة → المنتج يحلها → إثبات → CTA.
3. أعد استخدام أفضل 3 فيديوهات كإعلانات مدفوعة لاحقاً (تكون قد أثبتت نفسها مجاناً).
4. حساب Instagram/TikTok باسم المتجر منذ اليوم الأول = أصل تملكه يخفف الاعتماد على أي منصة.

---

## 7) معايير المنتج الرابح — خلاصة البحث في YouTube وInstagram وFacebook

### 7.1 المصادر التي بُني عليها الـchecklist

- **YouTube:** [Ac Hampton — معايير 5 نقاط وطريقتا بحث](https://www.youtube.com/watch?v=SuiWZsBuJZQ) (67K مشاهدة)؛ [Nathan Nazareth — How to Find Winning Products in 2026](https://www.youtube.com/watch?v=J8mcGzOThrc)؛ [The Ecom King — طرق مجانية 100%](https://www.youtube.com/watch?v=Sr68b5BfCGY)؛ [بحث منتجات بدون أدوات مدفوعة](https://www.youtube.com/watch?v=vVeSjZa0yWg).
- **Facebook:** منهجية [Ad Library](https://www.sellthetrend.com/blog/dominate-facebook-winning-product-research-with-these-methods) — فلترة الإعلانات النشطة، ومؤشر "إعلان يعمل منذ أسابيع = مربح"، وقراءة التعليقات؛ كلمات بحث عملية من [r/dropship](https://www.reddit.com/r/dropship/comments/1harzy5/product_research_methods_fb_products/): "Shop Now"، "50% Off"، "Free Shipping".
- **Instagram:** [تتبع المؤثرين في الـniche](https://winninghunter.com/blog/11-ways-to-find-winning-products-for-dropshipping-in-2024) — مراقبة Reels/Stories للمنتجات المروَّجة وقياس التفاعل.
- **مراجع مكتوبة:** [Do Dropshipping — معايير المنتج الرابح](https://dodropshipping.com/what-is-a-winning-dropshipping-product/)؛ [Droppery — صيغة الاختيار 2026](https://droppery.io/the-best-dropshipping-products-for-2026-a-proven-selection-formula-with-winning-niches/)؛ [USAdrop](https://usadrop.com/how-to-find-a-winning-product/)؛ [AutoDS](https://www.autods.com/blog/product-finding/winning-products-dropshipping/).

### 7.2 الـChecklist الموحد (12 معياراً)

| # | المعيار | العتبة |
|---|---------|--------|
| 1 | يحل مشكلة واضحة **أو** يملك wow factor بصري | إلزامي (أحدهما) |
| 2 | هامش | سعر البيع ≥ 3× التكلفة الكلية؛ صافي 30–50% بعد الشحن والرسوم |
| 3 | نقطة السعر | بيع بين $25–80 (تحت ذلك لا هامش، فوقه يصعب الشراء الاندفاعي) |
| 4 | الوزن والهشاشة | < 500غ، غير قابل للكسر (شحن أرخص، إرجاع أقل) |
| 5 | جاذبية الفيديو | يمكن إظهار قيمته في 3 ثوانٍ من مقطع رأسي |
| 6 | الندرة المحلية | غير متوفر بسهولة في المتاجر الكبرى المحلية |
| 7 | الجمهور | واسع، أو niche شغوف بولاء عالٍ |
| 8 | إشارة السوق | إعلانات نشطة عليه في Ad Library منذ 2–4+ أسابيع (دليل ربحية) لكن ليس بعشرات المعلنين (تشبّع) |
| 9 | الاتجاه | Google Trends صاعد أو مستقر — لا هابط |
| 10 | معدل الإرجاع المتوقع | بسيط الاستخدام، بلا مقاسات معقدة، تباين توقعات منخفض |
| 11 | التوافق الشرعي والثقافي | حلال قطعاً + ملائم لذوق السوق الخليجي |
| 12 | قابلية المحتوى العضوي | يمكن صنع 10+ أفكار فيديو UGC حوله (لأن تسويقنا organic-first) |

### 7.3 سير عمل البحث الأسبوعي (مجاني بالكامل)

1. **Facebook Ad Library** (30 دقيقة): فلتر السعودية/الإمارات → كلمات "تسوق الآن"، "خصم 50%"، "توصيل مجاني" → احفظ كل إعلان نشط منذ 2+ أسبوع.
2. **TikTok** (20 دقيقة): ابحث #tiktokmademebuyit #منتجات_عجيبة #امازون_فايندز واحفظ ما يتكرر.
3. **Instagram** (10 دقائق): تابع 10 حسابات "gadgets/منتجات" خليجية وراقب أعلى Reels تفاعلاً.
4. مرّر كل مرشح على الـ12 معياراً — ارفض 95% بلا تردد؛ ما يجتاز 10+ ينتقل للتحقق من التكلفة في CJ.

---

## 8) تطبيق المعايير على 7 منتجات مقترحة

التقييم: نقطة لكل معيار من الـ12 (النتيجة من 12). التكاليف تقديرية من نطاقات CJ/AliExpress المعتادة — **تحقق من تسعيرة CJ الفعلية + الشحن للسعودية قبل الالتزام**.

| المنتج | تكلفة تقديرية | بيع مقترح | 1 مشكلة/wow | 2 هامش | 3 سعر | 4 وزن | 5 فيديو | 6 ندرة | 7 جمهور | 8 إشارة سوق | 9 اتجاه | 10 إرجاع | 11 شرعي/ثقافي | 12 UGC | **النتيجة** |
|--------|---------------|-----------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **سبحة ذكية (خاتم عدّاد أذكار)** | $4–8 | $29–39 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ | **12/12** |
| **سجادة صلاة مبطنة محمولة (مع حقيبة/بوصلة)** | $8–14 | $35–49 | ✅ | ✅ | ✅ | ➖ (600–900غ) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅✅ | ✅ | **11/12** |
| **مكبر صوت قرآن (مصباح قمري/لمسي)** | $9–15 | $39–59 | ✅ wow | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ➖ إلكتروني | ✅✅ | ✅ | **11/12** |
| **مروحة رقبة محمولة (بدون شفرات)** | $6–11 | $29–45 | ✅ مشكلة حرّ الخليج | ✅ | ✅ | ✅ | ✅ | ➖ متوفرة محلياً جزئياً | ✅ | ✅ | ➖ موسمي (صيف) | ✅ | ✅ | ✅ | **10/12** |
| **مدلك رقبة EMS / مصحح جلوس** | $7–12 | $35–55 | ✅ مشكلة | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ➖ توقعات علاجية | ✅ | ➖ ادعاءات صحية تقيد الإعلان | **9/12** |
| **مكنسة سيارة لاسلكية صغيرة** | $9–16 | $39–59 | ✅ مشكلة (ثقافة السيارات الخليجية) | ✅ | ✅ | ➖ | ✅ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ➖ أفكار فيديو محدودة | **9/12** |
| **جهاز عرض المجرة (Galaxy Projector)** | $8–14 | $35–55 | ✅ wow | ✅ | ✅ | ✅ | ✅✅ | ➖ | ✅ | ➖ **مشبع عالمياً** | ➖ | ➖ إلكتروني | ✅ | ✅ | **8/12** |

### 8.1 التوصية: متجر niche "نمط حياة المسلم" (Islamic Lifestyle)

بدلاً من متجر منتج واحد، افتح متجراً متخصصاً يجمع **أفضل 3 منتجات متكاملة**:

1. **السبحة الذكية** (12/12) — المنتج البطل: خفيفة جداً (شحن رخيص)، هامش 4–5x، حلال بطبيعتها، هدية مثالية، طلب دائم غير موسمي، ومحتوى UGC سهل.
2. **سجادة الصلاة المحمولة المبطنة** (11/12) — سلة متوسطة أعلى، upsell طبيعي مع السبحة.
3. **مكبر صوت القرآن (مصباح)** (11/12) — عنصر الـwow والهدايا، يرفع متوسط قيمة الطلب.

**لماذا هذا الـniche يتفوق:**
- **تطابق ثقافي كامل مع السوق المستهدف** (الخليج) — والإعلان عنه بالعربية ميزة لا يملكها المنافس الأجنبي.
- **حلال بلا تأويل** — لا تعارض بين المنتج والهيكلة الشرعية للمتجر.
- **قابل للتحول إلى براند** (private label عبر CJ لاحقاً: نقش اسمك على السبحة/التغليف) — وهذا مخرجك من فخ هوامش الدروبشيبينغ (فصل 6 في `docs/dropshipping-guide.md`).
- مواسم قوية مدمجة: رمضان، الحج/العمرة، عيدين، هدايا الزواج — مع طلب أساسي مستمر.
- **بديل احتياطي (خطة ب):** إن أظهر التحقق تشبعاً محلياً، انتقل إلى مروحة الرقبة (10/12) كإطلاق صيفي سريع بنفس المتجر أو متجر عام.

### 8.2 التحقق قبل الإطلاق (لكل منتج — من workflow الـ30 يوماً)

- [ ] Ad Library: يوجد 1–5 معلنين نشطين في الخليج (لا صفر ولا 20+)
- [ ] Google Trends (SA): مستقر/صاعد على 12 شهراً
- [ ] تسعيرة CJ فعلية + شحن للرياض ≤ 8 أيام
- [ ] الهامش الصافي بعد رسوم البوابة (~3.5%) والشحن ≥ 30%
- [ ] عيّنة مطلوبة ومفحوصة قبل تجاوز 20 طلباً/أسبوع

---

## 9) خطة التنفيذ — 30 يوماً بميزانية شبه صفرية

مقتبسة من `modules/dropshipping/workflows/en/dropshipping-launch-global.md` ومعدّلة (organic بدل إعلانات مدفوعة):

| الأسبوع | المهام | مؤشر النجاح |
|---------|--------|-------------|
| **1** | فتح Shopify ($1) + دومين → إعداد 2Checkout→Payoneer وPayPal → حساب CJ → صياغة صفحة "كيف نعمل" (الهيكلة الشرعية: دفع مسبق، وصف دقيق، أجل تسليم، ضمان استرجاع) وعرضها على مختص شرعي → استيراد المنتجات الثلاثة ووصفها بالعربية | متجر يعمل + دفعة اختبار $1 ناجحة |
| **2** | حسابات TikTok/Instagram باسم المتجر → 10 فيديوهات أولى (2/يوم) → طلب عيّنة السبحة → تفعيل Shopify Email (سلة متروكة) | 10K+ مشاهدات تراكمية، أول زيارات |
| **3** | الاستمرار 1–2 فيديو/يوم → تجربة أنماط hook مختلفة → الرد على كل تعليق → إضافة Judge.me وأول مراجعات من المشترين الأوائل | **أول 3–5 طلبات** |
| **4** | تحليل: أي فيديو/منتج جلب المبيعات؟ → قرار: توسّع (إعادة استثمار الأرباح في $5–10/يوم إعلانات TikTok/Snapchat على أفضل فيديو) أو تعديل المنتج البطل → تفعيل COD إن ثبت الطلب | قرار scale/pivot مبني على بيانات |

**KPIs الحاسمة:** Conversion rate ≥ 1.5%، هامش صافٍ ≥ 30%، chargeback < 1%، مدة تسليم فعلية ≤ الموعودة.

---

## 10) المراجع

**الإطار الشرعي:** [Islam Q&A #334744](https://islamqa.info/en/answers/334744) · [Amanah Advisors — Mufti Faraz Adam](https://amanahadvisors.com/dropshipping-the-halal-and-shariah-compliant-way/) · [IlmFeed](https://ilmfeed.com/dropshipping-permissible-islam/) · [Halal Times](https://www.halaltimes.com/is-dropshipping-haram-in-islam/)
**معايير المنتج (YouTube/Social):** [Ac Hampton](https://www.youtube.com/watch?v=SuiWZsBuJZQ) · [Nathan Nazareth 2026](https://www.youtube.com/watch?v=J8mcGzOThrc) · [The Ecom King](https://www.youtube.com/watch?v=Sr68b5BfCGY) · [Sell The Trend — FB Ad Library](https://www.sellthetrend.com/blog/dominate-facebook-winning-product-research-with-these-methods) · [Winning Hunter — Instagram](https://winninghunter.com/blog/11-ways-to-find-winning-products-for-dropshipping-in-2024) · [r/dropship](https://www.reddit.com/r/dropship/comments/1harzy5/product_research_methods_fb_products/) · [Do Dropshipping](https://dodropshipping.com/what-is-a-winning-dropshipping-product/) · [Droppery](https://droppery.io/the-best-dropshipping-products-for-2026-a-proven-selection-formula-with-winning-niches/)
**السوق الخليجي:** [Virto — Middle East eCommerce](https://virtocommerce.com/blog/ecommerce-in-middle-east-gcc) · [Mordor — Saudi eCommerce](https://www.mordorintelligence.com/industry-reports/saudi-arabia-ecommerce-market) · [23HubLab — Meta CPM GCC](https://23hublab.com/meta-ads-benchmarks-across-gcc-markets/) · [LogicWorks — CPC GCC](https://logicworks.ae/blog/what-is-google-ads-cost-per-click-in-uae-and-gcc-2026/) · [swftbox — UAE COD](https://www.swftbox.com/swftblogger/uae-ecommerce-reality-2026)
**الدفع والمنصة:** [Payoneer — Shopify payouts](https://www.payoneer.com/resources/general-payments/shopify-payouts-withdrawal/) · [2Checkout × Shopify](https://www.2checkout.com/online-shopping-carts/shopify.html) · [Payoneer Checkout](https://www.payoneer.com/checkout/shopify-integration/) · [Shopify pricing 2026](https://www.demandsage.com/shopify-pricing/) · [EasyApps — Shopify UAE/GCC](https://easyappsecom.com/guides/selling-on-shopify-uae) · [AliDropship — KSA guide](https://alidropship.com/dropshipping-worldwide/saudi-arabia/)
