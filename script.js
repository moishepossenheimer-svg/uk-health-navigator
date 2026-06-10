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
