export type Lang = "en" | "or";

const year = new Date().getFullYear();

export const translations = {
  en: {
    nav: {
      whyEtalk: "Why E-talk",
      features: "Features",
      howItWorks: "How it works",
      team: "Team",
      faq: "FAQ",
      cta: "Get early access",
      /** Rotating header/footer logo lines (Odia line + English line per variant). */
      brandTaglines: [
        { odia: "AI ଇଂରାଜୀ ଶିକ୍ଷକ", en: "AI English Teacher" },
        {
          odia: "ଓଡ଼ିଆ ସହଯୋଗ · ଇଂରାଜୀ ଅଭ୍ୟାସ",
          en: "Odia context · English practice",
        },
        { odia: "ବୁଝି · କୁହନ୍ତୁ · ବଢ଼ନ୍ତୁ", en: "Learn. Speak. Grow." },
      ],
    },
    hero: {
      eyebrow: "Odia-friendly AI English learning",
      odiaLine: "ଓଡ଼ିଆ AI ଇଂରାଜୀ କହିବା ଆପ୍",
      h1: "Speak English confidently—with Odia context at every step",
      typewriter:
        "Your voice and our AI—E-talk builds your learning journey, step by step.",
      body: "For students and professionals who want clear explanations, adaptive lessons, and real-time help—built with Odisha first, open to learners everywhere.",
      primaryCta: "Join the waitlist",
      secondaryCta: "See how it works",
      note: "Free to join the waitlist · Launch updates only",
    },
    banner: {
      eyebrow: "Launch countdown",
      headline: "E-talk goes live in about three months — join the waitlist for the exact date.",
      days: "Days",
      hours: "Hrs",
      minutes: "Min",
      seconds: "Sec",
      ariaLabel: "Countdown to E-talk launch",
      secondaryLink: "Sign up below",
    },
    trust: {
      col1Title: "Odisha-first",
      col1Body:
        "Product and pedagogy rooted in local language context—not a generic import.",
      col2Title: "AI + human help",
      col2Body:
        "Adaptive paths plus live chat so you are not practising alone.",
      col3Title: "Early access",
      col3Body:
        "Join the waitlist for launch timing and product news—no clutter.",
    },
    approach: {
      heading: "Why learners need a different kind of app",
      subhead:
        "Many English tools assume you already think in English. That extra mental step slows you down and kills confidence.",
      gapTitle: "The gap",
      gapBody:
        "Pure English-only explanations can feel abstract. You end up translating twice—from lesson to Odia, then back to English for real life.",
      approachTitle: "The E-talk approach",
      approachBody:
        "Odia-friendly guidance where it helps, English practice where it counts—so you build fluency for exams, interviews, and everyday conversation.",
    },
    features: {
      heading: "Everything in one learning flow",
      subhead:
        "Structured lessons, AI guidance, and live support—so you progress without switching between five different apps.",
      items: [
        {
          title: "Odia-friendly learning",
          body: "Explanations and prompts that respect Odia speakers—so concepts land faster and you spend less time guessing.",
        },
        {
          title: "AI paths that adapt to you",
          body: "Courses adjust to your level, goals, and pace—whether you are preparing for exams or workplace English.",
        },
        {
          title: "Live chat when you are stuck",
          body: "Ask questions, practise dialogues, and build speaking confidence with guided help in real time.",
        },
        {
          title: "Speaking practice that sticks",
          body: "Structured rehearsal, feedback loops, and real-world scenarios so you move from reading to confident conversation.",
        },
      ],
    },
    how: {
      heading: "How E-talk works",
      subhead:
        "Goal → contextual lessons → spoken practice—with AI and live chat at each step.",
      carouselOdiaLine: "ଓଡ଼ିଆରେ ବୁଝି · ଇଂରାଜୀରେ ଆଗକୁ ବଢ଼ନ୍ତୁ",
      carouselHint:
        "Steps scroll automatically in the phone preview — hover the screen to pause, or use the Pause button.",
      carouselA11y:
        "Product steps scroll in an infinite vertical reel inside a phone preview. Use Pause if you need motion to stop.",
      carouselPause: "Pause scrolling",
      carouselResume: "Resume scrolling",
      carousel: [
        {
          title: "AI Speech Feedback",
          body: "Instant feedback on pronunciation and fluency—clear, actionable tips so you sound more natural, faster.",
        },
        {
          title: "Adaptive Learning Pathways",
          body: "Your route adjusts to strengths and weak spots—spend time where you need it, skip what you already know.",
        },
        {
          title: "Curated Lesson Paths",
          body: "Ready-made journeys for exams, interviews, email, and everyday English—structured, not random YouTube.",
        },
        {
          title: "Daily Challenges & Streaks",
          body: "Gamified nudges and streaks that fit school, work, and family—small wins that build real habit.",
        },
        {
          title: "Track Your Progress",
          body: "Dashboards and milestones from first sentences to confident conversation—see proof you are improving.",
        },
        {
          title: "Bite-Sized Daily Lessons",
          body: "About 15 minutes a day—micro-learning designed for busy learners in Odisha and beyond.",
        },
        {
          title: "Live Chat & Coaching",
          body: "Human-in-the-loop support when you are stuck—ask, rehearse, and get feedback in real time.",
        },
        {
          title: "Odia-First, English-Forward",
          body: "Odia-friendly explanations when you need them; English practice when you are ready—no guesswork.",
        },
      ],
    },
    audience: {
      heading: "Built for your schedule—not a one-size course",
      subhead:
        "Students, professionals, shopkeepers, caregivers, farmers, first-time English learners—whoever you are, we want you here. E-talk meets you where you are.",
      heritageQuote:
        "Our forebears like Madhu Babu (Madhusudan Das) used English to stand before British courts and councils—not with violence, but with law, debate, and the force of words. Without that language, the same fight could not have been waged the same way. Today, English still opens rooms; E-talk helps every kind of learner walk in with confidence.",
      heritageCaption: "Heritage, not hype—language as dignity and leverage",
      carouselAria: "Who E-talk is for—scroll through learner types",
      carouselHint: "Swipe the row or use the arrows.",
      carouselPrev: "Previous learner card",
      carouselNext: "Next learner card",
      carousel: [
        {
          title: "School & college students",
          body: "Boards, entrances, and campus life—grammar and speaking that fits syllabi, with Odia-friendly clarity when concepts get dense.",
        },
        {
          title: "Job seekers & exam aspirants",
          body: "Interviews, group discussion, and exam English—structured practice so anxiety does not decide your score.",
        },
        {
          title: "IT & corporate professionals",
          body: "Email, stand-ups, clients, and calls—scenarios that match real deadlines, not textbook dialogues.",
        },
        {
          title: "Small business & shop owners",
          body: "Supplier talk, billing, SMS, and customer-facing English—short lessons you can use the same day at work.",
        },
        {
          title: "Healthcare, hospitality & frontline",
          body: "Clear, respectful phrasing under pressure—patients, guests, and teams; we keep it practical and human.",
        },
        {
          title: "Homemakers & returning learners",
          body: "Confidence after a break—flexible minutes between chores; no shame, no rush, steady progress.",
        },
        {
          title: "Rural & first-gen English learners",
          body: "If English felt “not for us,” we disagree—start in Odia, grow into English at a pace that respects your context.",
        },
        {
          title: "Retirees & lifelong learners",
          body: "Travel, family abroad, reading, or simply the joy of learning—gentle paths without competitive pressure.",
        },
      ],
    },
    quote: {
      heading: "Built with learners, not just for them",
      subhead:
        "We are shaping E-talk alongside students and professionals in Odisha. Your waitlist feedback helps prioritise what ships first.",
      text: "Fluency is not memorising rules—it is feeling safe to speak. E-talk is designed around that idea: clear support in Odia when you need it, and real English practice when you are ready.",
      caption: "— E-talk team",
    },
    team: {
      heading: "Meet the co-founders",
      subhead:
        "A small team building E-talk from Odisha—with a shared focus on accessible, Odia-friendly English learning.",
      role: "Co-founder",
      members: {
        prasannjit: {
          title: "Chief of Operations",
          blurb:
            "Keeps programs, delivery, and day-to-day execution aligned so learners and partners get a dependable experience.",
        },
        bikram: {
          title: "Chief of Administration and Infrastructure",
          blurb:
            "Oversees internal systems, facilities, and administrative support that keep the organisation running smoothly.",
        },
        rakesh: {
          title: "Product design head",
          subtitle: "Chief of Technology",
          blurb:
            "Shapes the product experience and technical direction—from design craft to engineering and architecture.",
        },
      },
    },
    faq: {
      heading: "Frequently asked questions",
      subhead: "Straight answers about how E-talk fits your learning.",
      items: [
        {
          q: "Do I need strong English to start?",
          a: "No. Paths start from your level and ramp up as you improve—whether you are in school or at work.",
        },
        {
          q: "Is everything only in English?",
          a: "Practice targets real English use. Explanations and guidance are Odia-friendly so you are never left guessing what a phrase means.",
        },
        {
          q: "What happens after I join the waitlist?",
          a: "You will get launch updates by email. We will not spam you; you can unsubscribe any time.",
        },
        {
          q: "Will E-talk be free?",
          a: "Pricing is still being shaped. Waitlist members will hear first when plans and timelines are ready.",
        },
      ],
    },
    cta: {
      heading: "Be first when E-talk launches",
      body: "Email us to join the waitlist or ask a question—we read every message.",
      submitBtn: "Email to join waitlist",
      note: "Opens your email app with our address and a short template. You can edit before sending.",
    },
    footer: {
      brandMarketingLine:
        "Odia-first AI English learning — clear explanations, adaptive lessons, and confidence for exams, work, and daily life.",
      copyright: `© ${year} E-talk. Made with focus on Odisha.`,
      follow: "Follow us",
      fromFounders: "Sister venture from the founders",
      talentsTrackerName: "Talent's Tracker",
      talentsTrackerTagline: "A step towards Success",
      talentsTrackerAria:
        "Talent's Tracker — opens thetalentstracker.com in a new tab",
      team: "Team",
      faq: "FAQ",
      waitlist: "Waitlist",
      contact: "Contact",
      thanks: "ଧନ୍ୟବାଦ · Thank you",
    },
  },

  or: {
    nav: {
      whyEtalk: "ଇ-ଟକ୍ ବିଷୟରେ",
      features: "ବୈଶିଷ୍ଟ୍ୟ",
      howItWorks: "କିପରି କାମ କରେ",
      team: "ଦଳ",
      faq: "ସାଧାରଣ ପ୍ରଶ୍ନ",
      cta: "ଆଗୁଆ ଯୋଗ ଦିଅନ୍ତୁ",
      brandTaglines: [
        { odia: "AI ଇଂରାଜୀ ଶିକ୍ଷକ", en: "AI English Teacher" },
        {
          odia: "ଓଡ଼ିଆ ସହଯୋଗ · ଇଂରାଜୀ ଅଭ୍ୟାସ",
          en: "Odia context · English practice",
        },
        { odia: "ବୁଝି · କୁହନ୍ତୁ · ବଢ଼ନ୍ତୁ", en: "Learn. Speak. Grow." },
      ],
    },
    hero: {
      eyebrow: "ଓଡ଼ିଆ-ସହାୟ AI ଇଂରାଜୀ ଶିଖଣ",
      odiaLine: "ଓଡ଼ିଆ AI ଇଂରାଜୀ କହିବା ଆପ୍",
      h1: "ଆତ୍ମବିଶ୍ୱାସରେ ଇଂରାଜୀ ବୋଲନ୍ତୁ—ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପରେ ଓଡ଼ିଆ ସହଯୋଗ",
      typewriter:
        "ଆପଣଙ୍କ ସ୍ୱର ଓ ଆମ AI—ଇ-ଟକ୍ ଆପଣଙ୍କ ଶିଖଣ ଯାତ୍ରା ଗଢ଼ି ଉଠାଏ।",
      body: "ଛାତ୍ର ଓ ବୃତ୍ତିଧାରୀଙ୍କ ପାଇଁ ଯେଉଁମାନେ ସ୍ପଷ୍ଟ ବ୍ୟାଖ୍ୟା, ଅଭିଯୋଜ୍ୟ ପାଠ ଓ ତୁରନ୍ତ ସହାୟତା ଚାହୁଁଛନ୍ତି—ଓଡ଼ିଶା ପ୍ରଥମ, ସର୍ବତ୍ର ଶିଖ୍ୟାର୍ଥୀଙ୍କ ପାଇଁ।",
      primaryCta: "ପ୍ରତୀକ୍ଷା ତାଲିକାରେ ଯୋଗ ଦିଅନ୍ତୁ",
      secondaryCta: "କିପରି କାମ କରେ ଦେଖନ୍ତୁ",
      note: "ଯୋଗ ଦେବା ମୁଫ · କେବଳ ଲଞ୍ଚ ଅଦ୍ୟତନ",
    },
    banner: {
      eyebrow: "ଲଞ୍ଚ କାଉଣ୍ଟଡାଉନ୍",
      headline:
        "ଇ-ଟକ୍ ପ୍ରାୟ ତିନି ମାସରେ ଲାଇଭ୍ — ଠିକ୍ ତାରିଖ ପାଇଁ ପ୍ରତୀକ୍ଷା ତାଲିକାରେ ଯୋଗ ଦିଅନ୍ତୁ।",
      days: "ଦିନ",
      hours: "ଘଣ୍ଟା",
      minutes: "ମିନିଟ୍",
      seconds: "ସେକେଣ୍ଡ୍",
      ariaLabel: "ଇ-ଟକ୍ ଲଞ୍ଚ ପାଇଁ କାଉଣ୍ଟଡାଉନ୍",
      secondaryLink: "ତଳେ ଯୋଗ ଦିଅନ୍ତୁ",
    },
    trust: {
      col1Title: "ଓଡ଼ିଶା-ପ୍ରଥମ",
      col1Body:
        "ସ୍ଥାନୀୟ ଭାଷା ପ୍ରସଙ୍ଗରୁ ଉଦ୍ଭୂତ ଉତ୍ପାଦ ଓ ଶିକ୍ଷଣ ଶୈଳୀ—ସାଧାରଣ ଆମଦାନି ନୁହେଁ।",
      col2Title: "AI + ମାନବ ସହାୟତା",
      col2Body:
        "ଅଭିଯୋଜ୍ୟ ପଥ ଓ ଲାଇଭ ଚ୍ୟାଟ—ଆପଣ ଏକୁଟିଆ ଅଭ୍ୟାସ କରୁ ନ ଥିବେ।",
      col3Title: "ଆଗୁଆ ଆକ୍ସେସ",
      col3Body:
        "ଲଞ୍ଚ ସମୟ ଓ ଉତ୍ପାଦ ସମ୍ବାଦ ପାଇଁ ପ୍ରତୀକ୍ଷା ତାଲିକାରେ ଯୋଗ ଦିଅନ୍ତୁ।",
    },
    approach: {
      heading: "ଶିଖ୍ୟାର୍ଥୀଙ୍କ ଏକ ଭିନ୍ନ ଆପ ଦରକାର କାହିଁକି",
      subhead:
        "ଅଧିକାଂଶ ଇଂରାଜୀ ଉପକରଣ ଧରି ନିଅନ୍ତି ଆପଣ ଇଂରାଜୀରେ ଭାବନ୍ତି। ଏହି ଅତିରିକ୍ତ ମାନସିକ ପଦକ୍ଷେପ ଆପଣଙ୍କ ଗତି ଆଟକାଇ ଦଏ।",
      gapTitle: "ଅଭାବ",
      gapBody:
        "ଶୁଦ୍ଧ ଇଂରାଜୀ ବ୍ୟାଖ୍ୟା ଅସ୍ପଷ୍ଟ ଲାଗୁଥାଏ। ଆପଣ ଦୁଇ ଥର ଅନୁବାଦ କରୁଥାଆନ୍ତି—ପ୍ରଥମେ ଓଡ଼ିଆ, ଆଉ ତାପରେ ଇଂରାଜୀ।",
      approachTitle: "ଇ-ଟକ୍ ର ଉପାୟ",
      approachBody:
        "ଦରକାର ଥିଲେ ଓଡ଼ିଆ ସହାୟତା, ଗୁରୁତ୍ୱ ଥିଲେ ଇଂରାଜୀ ଅଭ୍ୟାସ—ଯାହା ଆପଣଙ୍କୁ ପରୀକ୍ଷା, ସାକ୍ଷାତ ଓ ଦୈନ୍ୟ ବ୍ୟବହାରରେ ଦକ୍ଷ କରିଥାଏ।",
    },
    features: {
      heading: "ଏକ ଶିଖଣ ପ୍ରବାହରେ ସବୁ କିଛି",
      subhead:
        "ସଂଗଠିତ ପାଠ, AI ନିର୍ଦ୍ଦେଶ, ଓ ଲାଇଭ ସହାୟତା—ପାଞ୍ଚଟି ଆଲଗ ଆପ ବ୍ୟବହାର ନ କରି ଏଗିଯାଅ।",
      items: [
        {
          title: "ଓଡ଼ିଆ-ସହାୟ ଶିଖଣ",
          body: "ଓଡ଼ିଆ ଭାଷୀଙ୍କୁ ସମ୍ମାନ ଦେଉଥିବା ବ୍ୟାଖ୍ୟା—ଧାରଣା ଶୀଘ୍ର ସ୍ଥିର ହୁଏ, ଅନୁମାନ ଆଉ ଲାଗେ ନାହିଁ।",
        },
        {
          title: "ଆପଣ ଅନୁଯାୟୀ AI ପଥ",
          body: "ଆପଣଙ୍କ ସ୍ତର, ଲକ୍ଷ୍ୟ ଓ ଗତି ଅନୁଯାୟୀ ଅଭ୍ୟାସ ଢ଼ାଞ୍ଚା ବଦଳେ।",
        },
        {
          title: "ଅଟକି ଗଲେ ଲାଇଭ ଚ୍ୟାଟ",
          body: "ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ, ସଂଳାପ ଅଭ୍ୟାସ କରନ୍ତୁ, ସହାୟ ସ୍ୱରରେ ଆତ୍ମବିଶ୍ୱାସ ବଢ଼ାନ୍ତୁ।",
        },
        {
          title: "ଯାହା ମନ ଧରୁଥାଏ ତାହା ଅଭ୍ୟାସ",
          body: "ସଂଗଠିତ ଅଭ୍ୟାସ, ଫିଡ୍‌ବ୍ୟାକ ଲୁପ, ଓ ଆସଲ ଦୁନିଆ ଦୃଶ୍ୟ—ପଢ଼ାରୁ ଆତ୍ମବିଶ୍ୱାସ ଭରା ବ୍ୟବହାର।",
        },
      ],
    },
    how: {
      heading: "ଇ-ଟକ୍ କିପରି କାମ କରେ",
      subhead:
        "ଲକ୍ଷ୍ୟ → ପ୍ରସଙ୍ଗ ପାଠ → କଥ୍ୟ ଅଭ୍ୟାସ—ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପରେ AI ଓ ଲାଇଭ ଚ୍ୟାଟ।",
      carouselOdiaLine: "ଓଡ଼ିଆରେ ବୁଝି · ଇଂରାଜୀରେ ଆଗକୁ ବଢ଼ନ୍ତୁ",
      carouselHint:
        "ଫୋନ୍ ଭିତରେ ପଦକ୍ଷେପ ଆପେ ଚାଲେ—ସ୍କ୍ରିନ୍ ଉପରେ ହୋଭର୍ କରି ବିରତ କରନ୍ତୁ, ବା ବିରତ ବଟନ ବ୍ୟବହାର କରନ୍ତୁ।",
      carouselA11y:
        "ପଦକ୍ଷେପଗୁଡ଼ିକ ଫୋନ୍ ଭିତରେ ଅନବରତ ଭାବେ ଉପରକୁ ଚାଲୁଛି। ଗତି ବନ୍ଦ ଦରକାର ହେଲେ ବିରତ ବଟନ ଦବାନ୍ତୁ।",
      carouselPause: "ବିରତ",
      carouselResume: "ପୁନଃ ଚାଲୁ",
      carousel: [
        {
          title: "AI ସ୍ୱର ଫିଡ୍‌ବ୍ୟାକ",
          body: "ଉଚ୍ଚାରଣ ଓ ସ୍ୱାଦ ଉପରେ ତୁରନ୍ତ ମତ—ସ୍ପଷ୍ଟ ଟିପ୍ ଯାହା ଦ୍ୱାରା ଆପଣ ଆହୁରି ସ୍ୱାଭାବିକ ଶୁଣିବେ।",
        },
        {
          title: "ଅଭିଯୋଜ୍ୟ ଶିଖଣ ପଥ",
          body: "ଶକ୍ତି ଓ ଦୁର୍ବଳ ଦିଗ ଅନୁଯାୟୀ ପଥ ବଦଳେ—ଯେଉଁଠି ଦରକାର ସେଠି ସମୟ, ଜାଣା ଜିନିଷ ଛାଡ଼ି ଯାଆନ୍ତୁ।",
        },
        {
          title: "ଚୟନିତ ପାଠ ପଥ",
          body: "ପରୀକ୍ଷା, ସାକ୍ଷାତ, ଇ-ମେଲ, ଦୈନନ୍ଦିନ ଇଂରାଜୀ ପାଇଁ ପ୍ରସ୍ତୁତ ଯାତ୍ରା—ବ୍ୟବସ୍ଥିତ, ଅନିୟମିତ ଭିଡିଓ ନୁହେଁ।",
        },
        {
          title: "ଦୈନିକ ଚ୍ୟାଲେଞ୍ଜ ଓ ଷ୍ଟ୍ରିକ",
          body: "ଖେଳ ଭଳି ନିଅ ଓ ଷ୍ଟ୍ରିକ—ସ୍କୁଲ, ଅଫିସ, ଘର ସମୟ ସହ ମିଶିଯାଏ, ଅଭ୍ୟାସ ଗଢ଼େ।",
        },
        {
          title: "ଆପଣଙ୍କ ପ୍ରଗତି ଦେଖନ୍ତୁ",
          body: "ଡ୍ୟାସବୋର୍ଡ ଓ ମାଇଲ୍ ଷ୍ଟୋନ୍—ପ୍ରଥମ ବାକ୍ୟରୁ ଆତ୍ମବିଶ୍ୱାସ ଭରା କଥା ପର୍ଯ୍ୟନ୍ତ ପ୍ରମାଣ ଦେଖନ୍ତୁ।",
        },
        {
          title: "ଛୋଟ ଦୈନିକ ପାଠ",
          body: "ପ୍ରାୟ ୧୫ ମିନିଟ୍ ଦିନକୁ—ବ୍ୟସ୍ତ ଛାତ୍ର ଓ ଚାକିରିଜୀବୀଙ୍କ ପାଇଁ ମାଇକ୍ରୋ ଶିଖଣ, ଓଡ଼ିଶା ଓ ବାହାରେ।",
        },
        {
          title: "ଲାଇଭ ଚ୍ୟାଟ ଓ କୋଚିଂ",
          body: "ଅଟକି ଗଲେ ତୁରନ୍ତ ସହାୟତା—ପଚାରନ୍ତୁ, ଅଭ୍ୟାସ କରନ୍ତୁ, ମାନବ ସହ ଫିଡ୍‌ବ୍ୟାକ୍ ପାଆନ୍ତୁ।",
        },
        {
          title: "ଓଡ଼ିଆ ପ୍ରଥମ, ଇଂରାଜୀ ଆଗକୁ",
          body: "ନୂଆ ଧାରଣା ପାଇଁ ଓଡ଼ିଆ-ସହାୟ ବ୍ୟାଖ୍ୟା; ପ୍ରସ୍ତୁତ ହେଲେ ଇଂରାଜୀ ଅଭ୍ୟାସ—ଅନୁମାନ ନାହିଁ।",
        },
      ],
    },
    audience: {
      heading: "ଆପଣଙ୍କ ସମୟ ଅନୁଯାୟୀ—ଏକ ସାଧାରଣ ପ୍ୟାକେଜ ନୁହେଁ",
      subhead:
        "ଛାତ୍ର, ବୃତ୍ତିଧାରୀ, ଦୋକାନି, ଘର ସମ୍ଭାଳିବା, ଚାଷୀ, ପ୍ରଥମ ଥର ଇଂରାଜୀ ଶିଖୁଥିବା—ଯିଏ ହେଉନ୍ତୁ ଆମେ ଚାହୁଁ ଆପଣ ଶିଖନ୍ତୁ। ଇ-ଟକ୍ ଆପଣଙ୍କ ସ୍ତରରୁ ଆରମ୍ଭ କରେ।",
      heritageQuote:
        "ମଧୁ ବାବୁ (ମଧୁସୂଦନ ଦାସ) ଭଳି ପୂର୍ବଜମାନେ ବ୍ରିଟିଶ୍ ଅଦାଲତ ଓ ପରିଷଦରେ ଇଂରାଜୀରେ ଛିଡ଼ା ହୋଇଥିଲେ—ହିଂସା ନୁହେଁ, ଆଇନ, ବିତର୍କ ଓ ବାକ୍ୟର ଶକ୍ତି ଦ୍ୱାରା। ସେ ଭାଷା ବିନା ସେ ଲଢ଼େଇ ସେହି ଭାବେ ହୋଇ ପାରିନଥାନ୍ତା। ଆଜି ମଧ୍ୟ ଇଂରାଜୀ ଦ୍ୱାର ଖୋଲେ; ଇ-ଟକ୍ ପ୍ରତ୍ୟେକ ପ୍ରକାର ଶିଖ୍ୟାର୍ଥୀଙ୍କୁ ଆତ୍ମବିଶ୍ୱାସରେ ଭିତରକୁ ଯିବାକୁ ସାହାଯ୍ୟ କରେ।",
      heritageCaption: "ପୁରୁଣା ଗରିମା—ଭାଷା ହେଉଛି ମର୍ଯ୍ୟାଦା ଓ ସୁଯୋଗ",
      carouselAria: "କାହାଙ୍କ ପାଇଁ ଇ-ଟକ୍—ଶିଖ୍ୟାର୍ଥୀ ପ୍ରକାର ବ୍ରାଉଜ୍ କରନ୍ତୁ",
      carouselHint: "ଧସା କରି ବା ତୀର ବଟନ ବ୍ୟବହାର କରନ୍ତୁ।",
      carouselPrev: "ପୂର୍ବ କାର୍ଡ",
      carouselNext: "ପର କାର୍ଡ",
      carousel: [
        {
          title: "ସ୍କୁଲ ଓ କଲେଜ ଛାତ୍ର",
          body: "ବୋର୍ଡ, ପ୍ରବେଶ ଓ କ୍ୟାମ୍ପସ୍—ବ୍ୟାକରଣ ଓ ବୋଲିବା ଯାହା ସିଲେବସ୍ ସହ ମେଳେ; କଠିନ ଧାରଣା ପାଇଁ ଓଡ଼ିଆ-ସହାୟ ସ୍ପଷ୍ଟତା।",
        },
        {
          title: "ଚାକିରି ଓ ପରୀକ୍ଷା ପ୍ରସ୍ତୁତି",
          body: "ସାକ୍ଷାତ, ଗ୍ରୁପ ଡିସକସନ୍, ପରୀକ୍ଷା ଇଂରାଜୀ—ଗଠିତ ଅଭ୍ୟାସ ଯାହା ଦ୍ୱାରା ଭୟ ନୁହେଁ ନମ୍ବର ନିର୍ଦ୍ଧାରଣ କରେ।",
        },
        {
          title: "IT ଓ କର୍ପୋରେଟ ବୃତ୍ତିଧାରୀ",
          body: "ଇ-ମେଲ, ଷ୍ଟାଣ୍ଡ-ଅପ, ଗ୍ରାହକ ଓ କଲ୍—ପାଠ୍ୟ ସଂଳାପ ନୁହେଁ, ଆସଲ ଡେଡଲାଇନ୍ ଅନୁଯାୟୀ ଦୃଶ୍ୟ।",
        },
        {
          title: "ଛୋଟ ବ୍ୟବସାୟ ଓ ଦୋକାନ",
          body: "ଯୋଗାଣ, ବିଲ୍, ଏସଏମଏସ୍, ଗ୍ରାହକ ସହ ଇଂରାଜୀ—ଛୋଟ ପାଠ ଯାହା ସେହି ଦିନ କାମରେ ଲାଗେ।",
        },
        {
          title: "ସ୍ୱାସ୍ଥ୍ୟ, ଅତିଥି ସେବା ଓ ଫ୍ରଣ୍ଟଲାଇନ୍",
          body: "ଚାପ ତଳେ ସ୍ପଷ୍ଟ ସମ୍ମାନଜନକ ବାକ୍ୟ—ରୋଗୀ, ଅତିଥି, ଟିମ୍; ବ୍ୟବହାରିକ ଓ ମାନବୀୟ।",
        },
        {
          title: "ଘର ସମ୍ଭାଳିବା ଓ ପୁନଃ ଆରମ୍ଭ",
          body: "ବିରତି ପରେ ଆତ୍ମବିଶ୍ୱାସ—କାମ ମଧ୍ୟରେ ନିଅ ଯିବା ଯୋଗ୍ୟ ସମୟ; ଲଜ୍ଜା ନାହିଁ, ଧୀରେ ପ୍ରଗତି।",
        },
        {
          title: "ଗ୍ରାମୀଣ ଓ ପ୍ରଥମ ପିଢ଼ି ଇଂରାଜୀ",
          body: "ଇଂରାଜୀ ‘ଆମ ପାଇଁ ନୁହେଁ’ ଲାଗିଲେ ମଧ୍ୟ ଆମେ କୁହୁ—ଓଡ଼ିଆରୁ ଆରମ୍ଭ, ଆପଣଙ୍କ ପରିସ୍ଥିତିକୁ ସମ୍ମାନ ଦେଇ ଇଂରାଜୀ ବଢ଼ନ୍ତୁ।",
        },
        {
          title: "ଅବସର ଓ ଜୀବନସ୍ଥାୟୀ ଶିଖ୍ୟାର୍ଥୀ",
          body: "ଭ୍ରମଣ, ବିଦେଶରେ ପରିବାର, ପଢ଼ିବା କି ଶିଖିବାର ଆନନ୍ଦ—ପ୍ରତିଯୋଗୀ ଚାପ ବିନା ନରମ ପଥ।",
        },
      ],
    },
    quote: {
      heading: "ଶିଖ୍ୟାର୍ଥୀଙ୍କ ସହ, ଶୁଧୁ ସେମାନଙ୍କ ପାଇଁ ନୁହେଁ",
      subhead:
        "ଆମେ ଓଡ଼ିଶାର ଛାତ୍ର ଓ ବୃତ୍ତିଧାରୀଙ୍କ ସହ ଇ-ଟକ୍ ଗଢ଼ୁଛୁ। ଆପଣଙ୍କ ମତ ଆଗ ଲଞ୍ଚ ସ୍ଥିର କରିଥାଏ।",
      text: "ଦକ୍ଷତା ନିୟମ ମୁଖସ୍ଥ ନୁହେଁ—ଏହା ବୋଲିବାରେ ନିରାପଦ ଅନୁଭବ। ଇ-ଟକ୍ ଏହି ଧାରଣା ଉପରେ ତିଆରି: ଦରକାର ଥିଲେ ଓଡ଼ିଆ ସ୍ପଷ୍ଟ ସହାୟତା, ଆଉ ପ୍ରସ୍ତୁତ ଥିଲେ ଇଂରାଜୀ ଅଭ୍ୟାସ।",
      caption: "— ଇ-ଟକ୍ ଦଳ",
    },
    team: {
      heading: "ସହ-ପ୍ରତିଷ୍ଠାତାଙ୍କୁ ଭେଟନ୍ତୁ",
      subhead:
        "ଓଡ଼ିଶାରୁ ଇ-ଟକ୍ ଗଢ଼ୁଥିବା ଏକ ଛୋଟ ଦଳ—ସ୍ୱୀକାର୍ଯ୍ୟ ଓ ଓଡ଼ିଆ-ସହାୟ ଇଂରାଜୀ ଶିଖଣ ଉପରେ ଆଗ୍ରହ।",
      role: "ସହ-ପ୍ରତିଷ୍ଠାତା",
      members: {
        prasannjit: {
          title: "ପରିଚାଳନା ପ୍ରମୁଖ (Chief of Operations)",
          blurb:
            "କାର୍ଯ୍ୟକ୍ରମ, ବିତରଣ ଓ ଦୈନନ୍ଦିନ କାର୍ଯ୍ୟ ସୁଚାରୁରୁପେ ଚାଲୁ ରଖନ୍ତି—ଶିଖ୍ୟାର୍ଥୀ ଓ ସାଥୀଙ୍କ ପାଇଁ ନିର୍ଭରଯୋଗ୍ୟ ଅଭିଜ୍ଞତା।",
        },
        bikram: {
          title: "ପ୍ରଶାସନ ଓ ଅବସ୍ଥାପତ୍ୟ ପ୍ରମୁଖ",
          blurb:
            "ଆଭ୍ୟନ୍ତରୀଣ ବ୍ୟବସ୍ଥା, ଅବସ୍ଥାପନା ଓ ପ୍ରଶାସନିକ ସହାୟତା ଦେଖାନ୍ତି—ସଂସ୍ଥା ସ୍ଥିର ଓ ସୁଗମ ରହେ।",
        },
        rakesh: {
          title: "ପ୍ରୋଡକ୍ଟ ଡିଜାଇନ୍ ପ୍ରମୁଖ",
          subtitle: "ପ୍ରଯୁକ୍ତି ବିଜ୍ଞାନ ପ୍ରମୁଖ (Chief of Technology)",
          blurb:
            "ପ୍ରୋଡକ୍ଟ ଅଭିଜ୍ଞତା ଓ ପ୍ରଯୁକ୍ତି ଦିଗ ନିର୍ଦ୍ଧାରଣ—ଡିଜାଇନ୍ କୌଶଳରୁ ଇଞ୍ଜିନିୟରିଂ ଓ ଆର୍କିଟେକ୍ଚର୍ ପର୍ଯ୍ୟନ୍ତ।",
        },
      },
    },
    faq: {
      heading: "ସାଧାରଣ ପ୍ରଶ୍ନ",
      subhead: "ଇ-ଟକ୍ ଆପଣଙ୍କ ଶିଖଣରେ କିପରି ଖାପ ଖାଏ, ତା ସ୍ପଷ୍ଟ ଉତ୍ତର।",
      items: [
        {
          q: "ଆରମ୍ଭ ପାଇଁ ଶକ୍ତ ଇଂରାଜୀ ଦରକାର?",
          a: "ନା। ଆପଣ ଯେଉଁ ସ୍ତରରେ ଅଛନ୍ତି ସେଠାରୁ ଆରମ୍ଭ, ବିଦ୍ୟାଳୟ ବା କର୍ମ ଯେଉଁ ଦ୍ୱାରରୁ ହୋଇଥାଉ।",
        },
        {
          q: "ସବୁ ଇଂରାଜୀରେ?",
          a: "ଅଭ୍ୟାସ ଆସଲ ଇଂରାଜୀ ଉପରେ। ବ୍ୟାଖ୍ୟା ଓ ନିର୍ଦ୍ଦେଶ ଓଡ଼ିଆ-ସହାୟ ଯାଗ ଆପଣ ଅର୍ଥ ଅନୁମାନ ନ କରୁ।",
        },
        {
          q: "ଯୋଗ ଦେବା ପରେ କ'ଣ ହୁଏ?",
          a: "ଲଞ୍ଚ ଅଦ୍ୟତନ ଇ-ମେଲ ଦ୍ୱାରା ପ୍ରାପ୍ତ ହେବ। ଯେ କୌଣସି ସମୟ ଗ୍ରହଣ ବନ୍ଦ କରିହେବ।",
        },
        {
          q: "ଇ-ଟକ୍ ମୁଫ ହେବ?",
          a: "ମୂଲ୍ୟ ଏ ପର୍ଯ୍ୟନ୍ତ ସ୍ଥିର ହୋଇ ନଥିଲା। ଯୋଗ ଦିଆ ସଦସ୍ୟ ପ୍ରଥମ ଜ ପାଇବେ।",
        },
      ],
    },
    cta: {
      heading: "ଇ-ଟକ୍ ଲଞ୍ଚ ହେଲାବେଳେ ପ୍ରଥମ ଜାଣନ୍ତୁ",
      body: "ପ୍ରତୀକ୍ଷା ତାଲିକା କି ପ୍ରଶ୍ନ ପାଇଁ ଆମକୁ ଇ-ମେଲ କରନ୍ତୁ—ଆମେ ପଢ଼ୁ।",
      submitBtn: "ଇ-ମେଲରେ ଯୋଗ ଦିଅନ୍ତୁ",
      note: "ଆପଣଙ୍କ ଇ-ମେଲ ଆପ୍ ଖୋଲିବ ଓ ଠିକଣା ଭରି ଦେବ। ପଠାଇବା ପୂର୍ବେ ବଦଳାଇ ପାରିବେ।",
    },
    footer: {
      brandMarketingLine:
        "ଓଡ଼ିଆ-ପ୍ରଥମ AI ଇଂରାଜୀ ଶିଖଣ—ସ୍ପଷ୍ଟ ବ୍ୟାଖ୍ୟା, ଅଭିଯୋଜ୍ୟ ପାଠ ଓ ପରୀକ୍ଷା, କାର୍ଯ୍ୟ ଓ ଦୈନନ୍ଦିନ ଜୀବନ ପାଇଁ ଆତ୍ମବିଶ୍ୱାସ।",
      copyright: `© ${year} ଇ-ଟକ୍। ଓଡ଼ିଶା ଉପରେ ଧ୍ୟାନ ଦେଇ ତିଆରି।`,
      follow: "ଅନୁସରଣ",
      fromFounders: "ପ୍ରତିଷ୍ଠାତାଙ୍କ ଅନ୍ୟ ଉଦ୍ୟମ",
      talentsTrackerName: "Talent's Tracker",
      talentsTrackerTagline: "ସଫଳତା ଆଡ଼େ ଗୋଟିଏ ପଦକ୍ଷେପ",
      talentsTrackerAria:
        "Talent's Tracker — ନୂଆ ଟ୍ୟାବରେ thetalentstracker.com ଖୋଲିବ",
      team: "ଦଳ",
      faq: "ସାଧାରଣ ପ୍ରଶ୍ନ",
      waitlist: "ପ୍ରତୀକ୍ଷା ତାଲିକା",
      contact: "ଯୋଗାଯୋଗ",
      thanks: "ଧନ୍ୟବାଦ · Thank you",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
