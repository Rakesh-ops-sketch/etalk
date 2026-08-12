export const locales = ["en", "or"] as const;
export type Locale = (typeof locales)[number];
export type PageKey = "home" | "product" | "learners" | "about" | "help" | "privacy" | "terms";

export function isLocale(value: string): value is Locale { return locales.includes(value as Locale); }

const en = {
  nav: { product: "Product", learners: "For learners", about: "About", help: "Help", cta: "Join the waitlist" },
  home: {
    eyebrow: "Built in Odisha · Made for your voice", title: "Speak English with confidence—", accent: "starting in Odia.",
    body: "A friendly AI English coach that explains clearly, listens patiently, and turns 15 minutes a day into real speaking confidence.",
    secondary: "See how it works", note: "Free to join · Be first to try E-Talk",
    proof: ["Odia-friendly guidance", "Private speaking practice", "15-minute daily lessons"],
    trust: [["Odisha-first", "Built around local learning context"], ["AI + human care", "Feedback without fear or judgement"], ["Pre-launch", "Help shape what we build next"]],
    benefitsTitle: "Everything you need to keep speaking", benefitsBody: "Small wins, clear guidance, and practice that feels safe enough to repeat every day.",
    benefits: [["🎙️","Speak without fear","Practise privately and get useful pronunciation feedback."],["🧭","Know what comes next","Follow a path that adapts to your level and goal."],["🔥","Build a real habit","Keep momentum with streaks, milestones, and short challenges."],["💬","Understand in Odia","Get clarity in Odia, then apply it naturally in English."]],
    stepsTitle: "From hesitant to heard", stepsBody: "One simple daily loop designed to turn understanding into usable English.",
    steps: [["01 · UNDERSTAND","Learn it your way","See the idea in simple English with Odia guidance when it helps."],["02 · SPEAK","Say it out loud","Practise real phrases and receive calm, immediate feedback."],["03 · GROW","See your progress","Build streaks, unlock milestones, and revisit what needs work."]],
    audienceTitle: "English for the moments that matter", audience: [["Students","Classrooms, exams, campus conversations, and first presentations."],["Job seekers","Interviews, group discussions, and confident introductions."],["Professionals","Calls, client conversations, email, and workplace collaboration."]],
    faqTitle: "Questions learners ask", faq: [["Do I need strong English to start?","No. E-Talk begins at your level and uses Odia support whenever it makes a difficult idea easier."],["Is the Android app available now?","Not yet. E-Talk is in pre-launch development. Join the waitlist for early-access news."],["Will my speaking practice be private?","Privacy is part of the product direction. Exact app data practices will be published before release."],["How much will it cost?","Final plans are not announced. We are designing E-Talk to remain accessible for learners across Odisha."]],
  },
  form: { title:"Get early access", body:"Join the learner community shaping E-Talk.", name:"Your name", email:"Email address", consent:"I agree to receive E-Talk launch and early-access emails. I can unsubscribe at any time.", submit:"Join the free waitlist", pending:"Joining…", success:"You’re on the list! Check your inbox for confirmation.", error:"We couldn’t submit your details. Please try again." },
};

const or: typeof en = {
  nav: { product:"ପ୍ରଡକ୍ଟ", learners:"ଶିକ୍ଷାର୍ଥୀଙ୍କ ପାଇଁ", about:"ଆମ ବିଷୟରେ", help:"ସହାୟତା", cta:"ୱେଟଲିଷ୍ଟରେ ଯୋଗ ଦିଅନ୍ତୁ" },
  home: {
    eyebrow:"ଓଡ଼ିଶାରେ ନିର୍ମିତ · ଆପଣଙ୍କ ସ୍ୱର ପାଇଁ", title:"ଆତ୍ମବିଶ୍ୱାସରେ ଇଂରାଜୀ କୁହନ୍ତୁ—", accent:"ଓଡ଼ିଆରୁ ଆରମ୍ଭ କରନ୍ତୁ।",
    body:"ଏକ ବନ୍ଧୁସୁଲଭ AI ଇଂରାଜୀ କୋଚ୍, ଯାହା ସହଜରେ ବୁଝାଏ, ଧୈର୍ଯ୍ୟରେ ଶୁଣେ ଏବଂ ଦିନକୁ ୧୫ ମିନିଟ୍‌ରେ କଥା କହିବାର ଆତ୍ମବିଶ୍ୱାସ ବଢ଼ାଏ।",
    secondary:"କିପରି କାମ କରେ ଦେଖନ୍ତୁ", note:"ଯୋଗଦାନ ମାଗଣା · ପ୍ରଥମେ E-Talk ବ୍ୟବହାର କରନ୍ତୁ",
    proof:["ଓଡ଼ିଆରେ ସହଜ ମାର୍ଗଦର୍ଶନ","ବ୍ୟକ୍ତିଗତ କଥାବାର୍ତ୍ତା ଅଭ୍ୟାସ","ଦୈନିକ ୧୫ ମିନିଟ୍ ପାଠ"],
    trust:[["ଓଡ଼ିଶା ପ୍ରଥମ","ସ୍ଥାନୀୟ ଶିକ୍ଷା ପରିପ୍ରେକ୍ଷୀରେ ନିର୍ମିତ"],["AI + ମାନବୀୟ ଯତ୍ନ","ଭୟ କିମ୍ବା ବିଚାର ବିନା ଫିଡ୍‌ବ୍ୟାକ୍"],["ପ୍ରି-ଲଞ୍ଚ","ଆମେ ପରେ କଣ ତିଆରି କରିବୁ ସେଥିରେ ସାହାଯ୍ୟ କରନ୍ତୁ"]],
    benefitsTitle:"କଥା କହିଚାଲିବା ପାଇଁ ସବୁକିଛି", benefitsBody:"ଛୋଟ ସଫଳତା, ସ୍ପଷ୍ଟ ମାର୍ଗଦର୍ଶନ ଏବଂ ପ୍ରତିଦିନ ଅଭ୍ୟାସ ପାଇଁ ସୁରକ୍ଷିତ ପରିବେଶ।",
    benefits:[["🎙️","ଭୟ ବିନା କୁହନ୍ତୁ","ବ୍ୟକ୍ତିଗତ ଭାବେ ଅଭ୍ୟାସ କରନ୍ତୁ ଏବଂ ଉପଯୋଗୀ ଉଚ୍ଚାରଣ ଫିଡ୍‌ବ୍ୟାକ୍ ପାଆନ୍ତୁ।"],["🧭","ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ଜାଣନ୍ତୁ","ଆପଣଙ୍କ ସ୍ତର ଏବଂ ଲକ୍ଷ୍ୟ ଅନୁଯାୟୀ ପଥ ଅନୁସରଣ କରନ୍ତୁ।"],["🔥","ଭଲ ଅଭ୍ୟାସ ଗଢ଼ନ୍ତୁ","ଷ୍ଟ୍ରିକ୍, ମାଇଲଷ୍ଟୋନ୍ ଏବଂ ଛୋଟ ଚ୍ୟାଲେଞ୍ଜ ସହ ଆଗକୁ ବଢ଼ନ୍ତୁ।"],["💬","ଓଡ଼ିଆରେ ବୁଝନ୍ତୁ","ଓଡ଼ିଆରେ ସ୍ପଷ୍ଟତା ପାଇ ଇଂରାଜୀରେ ସ୍ୱାଭାବିକ ଭାବେ ପ୍ରୟୋଗ କରନ୍ତୁ।"]],
    stepsTitle:"ଦ୍ୱିଧାରୁ ଆତ୍ମବିଶ୍ୱାସ ପର୍ଯ୍ୟନ୍ତ", stepsBody:"ବୁଝିବାକୁ ବ୍ୟବହାରିକ ଇଂରାଜୀରେ ପରିଣତ କରୁଥିବା ଏକ ସହଜ ଦୈନିକ ପ୍ରକ୍ରିୟା।",
    steps:[["୦୧ · ବୁଝନ୍ତୁ","ନିଜ ଭାବରେ ଶିଖନ୍ତୁ","ସହଜ ଇଂରାଜୀ ଏବଂ ଦରକାର ବେଳେ ଓଡ଼ିଆ ସହାୟତାରେ ବିଷୟ ବୁଝନ୍ତୁ।"],["୦୨ · କୁହନ୍ତୁ","ଉଚ୍ଚ ସ୍ୱରରେ କୁହନ୍ତୁ","ବାସ୍ତବ ବାକ୍ୟ ଅଭ୍ୟାସ କରି ତୁରନ୍ତ ଶାନ୍ତ ଫିଡ୍‌ବ୍ୟାକ୍ ପାଆନ୍ତୁ।"],["୦୩ · ବଢ଼ନ୍ତୁ","ପ୍ରଗତି ଦେଖନ୍ତୁ","ଷ୍ଟ୍ରିକ୍ ବଢ଼ାନ୍ତୁ, ମାଇଲଷ୍ଟୋନ୍ ଖୋଲନ୍ତୁ ଏବଂ ଦୁର୍ବଳ ବିଷୟ ପୁନଃ ଅଭ୍ୟାସ କରନ୍ତୁ।"]],
    audienceTitle:"ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ମୁହୂର୍ତ୍ତ ପାଇଁ ଇଂରାଜୀ", audience:[["ଛାତ୍ରଛାତ୍ରୀ","ଶ୍ରେଣୀ, ପରୀକ୍ଷା, କ୍ୟାମ୍ପସ୍ କଥାବାର୍ତ୍ତା ଏବଂ ପ୍ରଥମ ପ୍ରେଜେଣ୍ଟେସନ୍।"],["ଚାକିରି ପ୍ରାର୍ଥୀ","ଇଣ୍ଟରଭ୍ୟୁ, ଗ୍ରୁପ୍ ଡିସକସନ୍ ଏବଂ ଆତ୍ମବିଶ୍ୱାସୀ ପରିଚୟ।"],["ପେଶାଦାର","କଲ୍, କ୍ଲାଏଣ୍ଟ କଥାବାର୍ତ୍ତା, ଇମେଲ୍ ଏବଂ କାର୍ଯ୍ୟସ୍ଥଳ ସହଯୋଗ।"]],
    faqTitle:"ଶିକ୍ଷାର୍ଥୀଙ୍କ ପ୍ରଶ୍ନ", faq:[["ଆରମ୍ଭ ପାଇଁ ଭଲ ଇଂରାଜୀ ଦରକାର କି?","ନା। E-Talk ଆପଣଙ୍କ ସ୍ତରରୁ ଆରମ୍ଭ କରେ ଏବଂ କଠିନ ବିଷୟ ପାଇଁ ଓଡ଼ିଆ ସହାୟତା ଦିଏ।"],["Android ଆପ୍ ଏବେ ଉପଲବ୍ଧ କି?","ଏବେ ନୁହେଁ। E-Talk ପ୍ରି-ଲଞ୍ଚ ନିର୍ମାଣରେ ଅଛି। ଅପଡେଟ୍ ପାଇଁ ୱେଟଲିଷ୍ଟରେ ଯୋଗ ଦିଅନ୍ତୁ।"],["ମୋର କଥାବାର୍ତ୍ତା ଅଭ୍ୟାସ ବ୍ୟକ୍ତିଗତ ରହିବ କି?","ଗୋପନୀୟତା ଆମ ପ୍ରଡକ୍ଟ ଦିଗର ଅଂଶ। ରିଲିଜ୍ ପୂର୍ବରୁ ସଠିକ୍ ଡାଟା ନୀତି ପ୍ରକାଶ ପାଇବ।"],["ଏହାର ମୂଲ୍ୟ କେତେ ହେବ?","ଚୂଡ଼ାନ୍ତ ପ୍ଲାନ୍ ଏଯାଏଁ ଘୋଷଣା ହୋଇନାହିଁ। ଆମେ E-Talkକୁ ସମସ୍ତଙ୍କ ପାଇଁ ସୁଲଭ ରଖିବାକୁ ଚାହୁଁଛୁ।"]],
  },
  form:{ title:"ପ୍ରଥମେ ବ୍ୟବହାର କରନ୍ତୁ", body:"E-Talk ଗଢ଼ୁଥିବା ଶିକ୍ଷାର୍ଥୀ ସମୁଦାୟରେ ଯୋଗ ଦିଅନ୍ତୁ।", name:"ଆପଣଙ୍କ ନାମ", email:"ଇମେଲ୍ ଠିକଣା", consent:"ମୁଁ E-Talk ଲଞ୍ଚ ଏବଂ ଆର୍ଲି-ଆକ୍ସେସ୍ ଇମେଲ୍ ପାଇବାକୁ ସମ୍ମତ।", submit:"ମାଗଣା ୱେଟଲିଷ୍ଟରେ ଯୋଗ ଦିଅନ୍ତୁ", pending:"ଯୋଗ ହେଉଛି…", success:"ଆପଣ ତାଲିକାରେ ଅଛନ୍ତି! ନିଶ୍ଚିତକରଣ ପାଇଁ ଇନବକ୍ସ ଦେଖନ୍ତୁ।", error:"ଦାଖଲ ହୋଇପାରିଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।" }
};

export function getContent(locale: Locale) { return locale === "or" ? or : en; }
export type SiteContent = typeof en;

export const pageSlugs: Record<PageKey, string> = { home:"", product:"product", learners:"learners", about:"about", help:"help", privacy:"privacy", terms:"terms" };
