const conditionData = {
  "crohns-disease": {name:"Crohn's disease", route:"GP, IBD nurse or gastroenterology team", track:"Bowel frequency, pain, blood or mucus, weight, fever, missed medicines and recent infections.", url:"condition-crohns-disease.html"},
  "ulcerative-colitis": {name:"Ulcerative colitis", route:"GP, IBD nurse or gastroenterology team", track:"Bowel frequency, urgency, blood, mucus, pain, tiredness, weight change and medicine changes.", url:"condition-ulcerative-colitis.html"},
  "ibs": {name:"Irritable bowel syndrome (IBS)", route:"GP, with pharmacist support for some symptom questions", track:"Pain, bloating, bowel pattern, food triggers, stress, sleep and medication changes.", url:"condition-ibs.html"},
  "coeliac-disease": {name:"Coeliac disease", route:"GP and dietitian or specialist if diagnosed", track:"Symptoms, weight, diet changes, accidental gluten exposure and blood test follow-up.", url:"condition-coeliac-disease.html"},
  "asthma": {name:"Asthma", route:"GP, asthma nurse or pharmacist; urgent help if breathing symptoms are severe", track:"Inhaler use, night symptoms, wheeze, triggers, peak flow if used and recent infections.", url:"condition-asthma.html"},
  "diabetes": {name:"Diabetes", route:"GP, diabetes nurse, pharmacist or specialist diabetes team", track:"Blood glucose readings if advised, symptoms, medicines, hypos or hypers, foot issues and appointments.", url:"condition-diabetes.html"},
  "eczema": {name:"Eczema", route:"Pharmacist for mild issues, GP for persistent or severe symptoms", track:"Flare triggers, creams used, itch, sleep disruption, infection signs and allergies.", url:"condition-eczema.html"},
  "psoriasis": {name:"Psoriasis", route:"GP, dermatologist if referred", track:"Affected areas, pain, itching, joint symptoms, treatments tried and triggers.", url:"condition-psoriasis.html"},
  "migraine": {name:"Migraine", route:"Pharmacist or GP; urgent help for sudden severe or unusual symptoms", track:"Frequency, duration, triggers, aura, medicines, sleep, stress and impact on school or work.", url:"condition-migraine.html"},
  "arthritis": {name:"Arthritis", route:"GP, physiotherapist, rheumatology if referred", track:"Painful joints, swelling, stiffness, morning symptoms, movement limits and pain relief used.", url:"condition-arthritis.html"},
  "anxiety": {name:"Anxiety", route:"GP, NHS talking therapies, urgent mental health support if needed", track:"Triggers, physical symptoms, sleep, panic episodes, avoidance, mood and support used.", url:"condition-anxiety.html"},
  "depression": {name:"Depression", route:"GP, NHS talking therapies, urgent mental health support if needed", track:"Mood, sleep, appetite, energy, concentration, school or work impact and support used.", url:"condition-depression.html"},
  "adhd": {name:"ADHD", route:"GP for referral pathway; specialist assessment services", track:"Attention, impulsivity, organisation, school or work impact, sleep and examples from daily life.", url:"condition-adhd.html"},
  "autism": {name:"Autism", route:"GP or local referral route for assessment", track:"Communication, sensory needs, routines, social challenges, school or work impact and support needs.", url:"condition-autism.html"},
  "acne": {name:"Acne", route:"Pharmacist, GP if severe, persistent or scarring", track:"Severity, products tried, side effects, pain, scarring and emotional impact.", url:"condition-acne.html"},
  "hay-fever": {name:"Hay fever", route:"Pharmacist for common treatment advice, GP if severe or not improving", track:"Season, triggers, eye and nose symptoms, sleep impact and medicines tried.", url:"condition-hay-fever.html"}
};

const menuBtn = document.getElementById("menuBtn");
const links = document.getElementById("links");
if (menuBtn && links) {
  menuBtn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

function esc(s){return (s || "").replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));}

function quickService(){
  const v = document.getElementById("quickService").value;
  let msg = "Use NHS 111 online or call 111 if you need medical help now and are unsure what to do.";
  if (v === "emergency") msg = "Call 999 or go to A&E now if it may be life-threatening. Do not wait for online advice.";
  if (v === "ongoing") msg = "For ongoing symptoms, long-term conditions, medication reviews or referrals, contact your GP surgery. Use the appointment planner before you contact them.";
  if (v === "minor") msg = "For minor illness or medicine questions, ask a pharmacist. They can also tell you if you need GP, NHS 111 or urgent care.";
  if (v === "mental") msg = "For mental health support, use your GP, NHS talking therapies or urgent mental health support. If there is immediate danger, use emergency services.";
  if (v === "crohns") msg = "For Crohn's or IBD concerns, contact your IBD nurse or gastroenterology team if you have one, or your GP. Use NHS 111 if you need help now and are unsure what to do.";
  document.getElementById("quickServiceResult").innerHTML = msg;
}

function conditionFinder(){
  const slug = document.getElementById("conditionSelect").value;
  const out = document.getElementById("conditionResult");
  if (!slug || !conditionData[slug]) { out.innerHTML = "Choose a condition first."; return; }
  const c = conditionData[slug];
  out.innerHTML = `<h3>${c.name}</h3><p><strong>Usual route:</strong> ${c.route}.</p><p><strong>Useful to track:</strong> ${c.track}</p><p><a href="${c.url}">Open the full resource page</a></p>`;
}

function makePlan(){
  const out = document.getElementById("planResult");
  out.innerHTML = "<h3>Your appointment notes</h3>" +
    "<p><strong>Main problem:</strong><br>" + esc(document.getElementById("problem").value) + "</p>" +
    "<p><strong>Timeline:</strong><br>" + esc(document.getElementById("timeline").value) + "</p>" +
    "<p><strong>Symptoms and impact:</strong><br>" + esc(document.getElementById("symptoms").value) + "</p>" +
    "<p><strong>Medicines, allergies and side effects:</strong><br>" + esc(document.getElementById("meds").value) + "</p>" +
    "<p><strong>Questions:</strong><br>" + esc(document.getElementById("questions").value) + "</p>" +
    "<p><strong>Before leaving, ask:</strong> What is the next step? When should I seek urgent help? When will results come back? Who do I contact if things change?</p>";
}

function makeDiary(){
  const days = Math.max(3, Math.min(60, parseInt(document.getElementById("diaryDays").value || 14, 10)));
  const cond = esc(document.getElementById("diaryCondition").value);
  const track = esc(document.getElementById("diaryTrack").value);
  let rows = "<table><tr><th>Day</th><th>Date</th><th>Symptoms</th><th>Severity</th><th>Triggers</th><th>Medicines</th><th>Notes</th></tr>";
  for (let i = 1; i <= days; i++) rows += `<tr><td>${i}</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
  rows += "</table>";
  document.getElementById("diaryResult").innerHTML = `<h3>Symptom diary: ${cond || "your condition or symptom"}</h3><p><strong>Track:</strong> ${track || "symptoms, triggers, medicines and impact"}</p>` + rows;
}

function makeMedicineNotes(){
  document.getElementById("medicineResult").innerHTML = "<h3>Medication review notes</h3><p>Bring this list to your GP, pharmacist, nurse or specialist appointment.</p><pre>" + esc(document.getElementById("medicineList").value) + "</pre><p><strong>Questions to ask:</strong> What is each medicine for? Are there side effects to watch for? Do I need monitoring? What should I do if I miss a dose?</p>";
}

function getNavigatorValue(id){
  const el = document.getElementById(id);
  return el ? el.value : "";
}

function checkedNavigatorFlags(){
  return [...document.querySelectorAll('input[name="navRedFlags"]:checked')].map(input => input.value);
}

function guidedNavigator(){
  const result = document.getElementById("guidedNavigatorResult");
  if (!result) return;

  const age = getNavigatorValue("navAge");
  const emergency = getNavigatorValue("navEmergency");
  const urgency = getNavigatorValue("navUrgency");
  const area = getNavigatorValue("navArea");
  const severity = getNavigatorValue("navSeverity");
  const duration = getNavigatorValue("navDuration");
  const worse = getNavigatorValue("navWorse");
  const mentalRisk = getNavigatorValue("navMentalRisk");
  const existing = getNavigatorValue("navExisting");
  const redFlags = checkedNavigatorFlags().filter(flag => flag !== "none");

  let advice = {
    route: "GP surgery",
    priority: "Routine appointment or online consultation",
    badge: "GP",
    reason: "The answers suggest an ongoing, recurring, or unclear health problem that is best reviewed by a GP surgery. GP teams can consider symptoms in context, review medicines, request tests where appropriate, and discuss referral if needed.",
    next: "Use the appointment planner to summarise the main problem, timeline, symptoms, medicines, allergies, and what you want to know before the appointment ends.",
    say: "I would like advice about an ongoing problem. It has lasted " + durationLabel(duration) + ", severity is " + severityLabel(severity) + ", and it is affecting daily life in this way: [add your words].",
    links: [
      ["NHS GP services", "https://www.nhs.uk/nhs-services/gps/"],
      ["Appointment planner", "appointment-planner.html"]
    ],
    className: "navigator-result route-gp"
  };

  if (emergency === "yes" || redFlags.length || mentalRisk === "immediate" || worse === "rapid") {
    advice = {
      route: "999 or A&E",
      priority: "Emergency now",
      badge: "Emergency",
      reason: "One or more answers could fit a serious, life-threatening, or rapidly worsening situation. A&E is for serious injuries and life-threatening emergencies, and online tools should not delay emergency care.",
      next: "Call 999 or go to A&E now. Do not drive yourself to A&E if you may be seriously unwell; ask someone else to take you or call 999.",
      say: "Say what happened, when it started, what has changed, current medicines, allergies, and whether there is breathing difficulty, chest pain, stroke symptoms, collapse, heavy bleeding, overdose, or immediate danger.",
      links: [
        ["NHS: when to go to A&E", "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-go-to-ae/"],
        ["NHS: mental health urgent help", "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"]
      ],
      className: "navigator-result route-emergency"
    };
  } else if (existing === "specialist" && (area === "longterm" || duration === "ongoing" || worse === "yes")) {
    advice = {
      route: "Existing specialist team, or GP if you cannot reach them",
      priority: "Use existing care route",
      badge: "Specialist",
      reason: "The answers mention an existing specialist, clinic, or hospital team and an ongoing or changing issue. Existing teams often give contact instructions in clinic letters, care plans, patient portals, or nurse helpline information.",
      next: "Check your most recent clinic letter or care plan. Use NHS 111 if you need help now and are unsure what to do.",
      say: "I am already under [team/clinic]. My symptoms have changed since [date]. The main change is [describe]. My medicines are [list]. What should I do next?",
      links: [
        ["Appointment planner", "appointment-planner.html"],
        ["Symptom diary", "symptom-diary.html"]
      ],
      className: "navigator-result route-specialist"
    };
  } else if (area === "mental" || mentalRisk === "support") {
    advice = {
      route: "GP, NHS 111 mental health option, or local mental health service",
      priority: "Mental health support",
      badge: "Mental health",
      reason: "The answers point towards mental health support without an immediate safety emergency. NHS advice says urgent mental health help can come through 111 or an urgent GP appointment, and some services allow self-referral.",
      next: "Contact your GP, use NHS 111 and select the mental health option if urgent, or use local NHS talking therapies if appropriate. If you cannot stay safe, call 999 or go to A&E.",
      say: "I need help with my mental health. The main issue is [panic/mood/sleep/safety/other]. It has lasted [time]. I can/cannot keep myself safe.",
      links: [
        ["NHS: urgent mental health help", "https://www.nhs.uk/nhs-services/mental-health-services/where-to-get-urgent-help-for-mental-health/"],
        ["Mind", "https://www.mind.org.uk/"]
      ],
      className: "navigator-result route-mental"
    };
  } else if (urgency === "now" || urgency === "unsure" || severity === "severe") {
    advice = {
      route: "NHS 111",
      priority: "Urgent or unsure",
      badge: "111",
      reason: "The answers suggest medical help may be needed now, or it is unclear which route is safest. NHS 111 can direct people to options such as urgent treatment, out-of-hours GP, nurse callback, pharmacist, GP surgery, A&E, or safe self-care.",
      next: "Use NHS 111 online if appropriate, or call 111. Call 111 rather than using 111 online for children under 5, complex existing conditions, care plans, or end-of-life care needs.",
      say: "Explain the main symptom, when it started, whether it is getting worse, any long-term conditions, medicines, allergies, and what made you seek help now.",
      links: [
        ["NHS: when to use 111", "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/"],
        ["NHS 111 online", "https://111.nhs.uk/"]
      ],
      className: "navigator-result route-111"
    };
  } else if (severity === "mild" && duration === "hours" && worse === "no" && urgency === "routine") {
    advice = {
      route: "Self-care and monitor, with pharmacy or GP if it changes",
      priority: "Low urgency based on these answers",
      badge: "Monitor",
      reason: "The answers suggest mild symptoms that started recently, are not worsening, and do not include urgent warning signs. It may be reasonable to monitor and use trusted NHS information, while being ready to escalate if symptoms change.",
      next: "Write down the start time, symptoms, temperature if relevant, medicines taken, and anything that makes it better or worse. Ask a pharmacist or GP if it persists, worsens, or you are worried.",
      say: "If you contact a service later, explain what changed, when it changed, and why you are now concerned.",
      links: [
        ["NHS Health A to Z", "https://www.nhs.uk/conditions/"],
        ["Symptom diary", "symptom-diary.html"]
      ],
      className: "navigator-result route-monitor"
    };
  } else if (area === "medicine" || existing === "pharmacy" || (severity === "mild" && duration !== "ongoing" && ["skin","infection","general"].includes(area))) {
    advice = {
      route: "Community pharmacy",
      priority: "Common first step",
      badge: "Pharmacy",
      reason: "For many mild, short-term symptoms and medicine questions, a pharmacist can advise on common options and whether another service is needed. In England, Pharmacy First covers several common conditions through participating pharmacies.",
      next: "Speak to a pharmacist and bring the medicine name, dose, allergies, pregnancy status if relevant, and how symptoms have changed.",
      say: "I would like pharmacy advice about [problem]. It started " + durationLabel(duration) + ". Severity is " + severityLabel(severity) + ". I take these medicines: [list].",
      links: [
        ["NHS England: Pharmacy First", "https://www.england.nhs.uk/primary-care/pharmacy/pharmacy-services/pharmacy-first/"],
        ["Medication tracker", "medication-tracker.html"]
      ],
      className: "navigator-result route-pharmacy"
    };
  } else if (area === "injury" && (severity === "moderate" || urgency === "today")) {
    advice = {
      route: "Urgent treatment centre or NHS 111",
      priority: "Same-day urgent care",
      badge: "UTC",
      reason: "Urgent treatment centres can help with many non-life-threatening injuries and urgent problems, such as sprains, suspected broken bones, cuts, stomach pain, rashes, fever, and some mental health concerns.",
      next: "Use NHS 111 online or call 111 to find the right urgent service and whether an appointment or arrival time can be arranged.",
      say: "Describe the injury, how it happened, when it happened, pain level, swelling, movement limits, bleeding, and any medicines or allergies.",
      links: [
        ["NHS: urgent treatment centres", "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-visit-an-urgent-treatment-centre/"],
        ["NHS 111 online", "https://111.nhs.uk/"]
      ],
      className: "navigator-result route-utc"
    };
  } else if (urgency === "today" || worse === "yes" || age === "child" || age === "pregnancy" || age === "older") {
    advice = {
      route: "GP surgery, NHS 111 if you cannot get timely help",
      priority: "Same-day or prompt advice",
      badge: "Prompt",
      reason: "The answers suggest the problem may need prompt professional advice, especially because symptoms are worsening, the person is a child, pregnant or recently gave birth, older/frail, or help is needed today.",
      next: "Contact the GP surgery and explain why help is needed today. Use NHS 111 if the GP is closed, unavailable, or you are unsure.",
      say: "I think I need advice today because [reason]. The person is [child/pregnant/older adult/other if relevant]. Symptoms started " + durationLabel(duration) + " and are [stable/worse].",
      links: [
        ["NHS GP services", "https://www.nhs.uk/nhs-services/gps/"],
        ["NHS 111 online", "https://111.nhs.uk/"]
      ],
      className: "navigator-result route-gp"
    };
  }

  const areaText = document.querySelector("#navArea option:checked")?.textContent || "Not specified";
  const durationText = document.querySelector("#navDuration option:checked")?.textContent || "Not specified";
  const severityText = document.querySelector("#navSeverity option:checked")?.textContent || "Not specified";
  const linkHtml = advice.links.map(([label, href]) => `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`).join("");

  result.className = "result " + advice.className;
  result.innerHTML = `<div class="route-badge">${advice.badge}</div>
    <h3>Suggested route: ${advice.route}</h3>
    <p><strong>Priority:</strong> ${advice.priority}</p>
    <p>${advice.reason}</p>
    <p><strong>Best next step:</strong> ${advice.next}</p>
    <p><strong>What to say:</strong> ${advice.say}</p>
    <div class="navigator-summary">
      <strong>Summary to prepare:</strong>
      <span>Main area: ${esc(areaText)}</span>
      <span>Severity: ${esc(severityText)}</span>
      <span>Duration: ${esc(durationText)}</span>
    </div>
    <div class="result-links">${linkHtml}</div>
    <p class="small"><strong>Reminder:</strong> this is a routing tool only. It does not diagnose, rule conditions in or out, or recommend treatment.</p>`;
}

function durationLabel(value){
  return ({hours:"today", days:"a few days", weeks:"more than 1-2 weeks", ongoing:"ongoing or recurring"}[value] || "not specified");
}

function severityLabel(value){
  return ({mild:"mild and manageable", moderate:"moderate or affecting normal activities", severe:"severe, unusual or hard to manage"}[value] || "not specified");
}

function clearGuidedNavigator(){
  ["navAge","navEmergency","navUrgency","navArea","navSeverity","navDuration","navWorse","navMentalRisk","navExisting"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.selectedIndex = 0;
  });
  document.querySelectorAll('input[name="navRedFlags"]').forEach(input => input.checked = false);
  const result = document.getElementById("guidedNavigatorResult");
  if (result) {
    result.className = "result navigator-result";
    result.innerHTML = 'Answer the questions, then choose "Suggest next route".';
  }
}
