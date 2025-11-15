// updated pdfList with decade/theme/id (sample data)
const pdfList = [
    // Panneaux 1
    { id: "pdf001", title: "No_9_Feeding_Babies_and_Young_Children", url: "https://www.spc.int/digitallibrary/get/jyhih", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf002", title: "Kanikinaen te aoraki ae te tioka", url: "https://www.spc.int/digitallibrary/get/utkna", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf003", title: "Aron tararuaakin te aoraki ae te tioka", url: "https://www.spc.int/digitallibrary/get/meazi", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf004", title: "This is how diabetes starts", url: "https://www.spc.int/digitallibrary/get/x63ms", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf005", title: "Don't give in to diabetes (1)", url: "https://www.spc.int/digitallibrary/get/sbnwo", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf006", title: "Don't give in to diabetes (2)", url: "https://www.spc.int/digitallibrary/get/9gk5c", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf007", title: "Te amwarake ao te aoraki ae te tioka", url: "https://www.spc.int/digitallibrary/get/j7px4", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf008", title: "Aron tutuoan raoiroin te aoraki ae te tioka", url: "https://www.spc.int/digitallibrary/get/6h5wz", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf009", title: "Breast feeding our nation's best investment", url: "https://www.spc.int/digitallibrary/get/i9hg7", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf010", title: "Tararua raoi waem", url: "https://www.spc.int/digitallibrary/get/xfhjg", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf011", title: "Tera te aroraki ae te tioka", url: "https://www.spc.int/digitallibrary/get/j63vz", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf012", title: "Good food for the baby - 1 to 3 months", url: "https://www.spc.int/digitallibrary/get/mzr4k", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf013", title: "Good food for the baby - 4 to 6 months", url: "https://www.spc.int/digitallibrary/get/2gmz2", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf014", title: "Good food for the baby - 6 to 12 months", url: "https://www.spc.int/digitallibrary/get/tz5qx", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf015", title: "Jined Ilo Kobo", url: "https://www.spc.int/digitallibrary/get/wt7ux", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf016", title: "Healthy heart, healthy family", url: "https://www.spc.int/digitallibrary/get/m7cxm", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf017", title: "I am a lucky baby, I've got the best", url: "https://www.spc.int/digitallibrary/get/3u8ps", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf018", title: "Exercising regularly", url: "https://www.spc.int/digitallibrary/get/o7mwd", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf019", title: "Live Healthy Stay Healthy - Pacific guideline", url: "https://www.spc.int/digitallibrary/get/tq4zi", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf020", title: "Live Healthy Stay Healthy - Pacific guidelines for healthy living", url: "https://www.spc.int/digitallibrary/get/ozsjt", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf021", title: "Look fit, be healthy", url: "https://www.spc.int/digitallibrary/get/qy2xn", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf022", title: "Blood pressure check", url: "https://www.spc.int/digitallibrary/get/qzhad", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf023", title: "A child when we are ready", url: "https://www.spc.int/digitallibrary/get/29zpz", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf024", title: "Be responsible, plan your family", url: "https://www.spc.int/digitallibrary/get/7e5oz", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf025", title: "Every child a wanted child", url: "https://www.spc.int/digitallibrary/get/isq4t", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf026", title: "Wise teenagers use contraception", url: "https://www.spc.int/digitallibrary/get/divxc", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf027", title: "Would you be more careful if it was you that got pregnant", url: "https://www.spc.int/digitallibrary/get/wgbv6", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf028", title: "Kanganga ake a kona n reke man te aoraki ar te tioka", url: "https://www.spc.int/digitallibrary/get/zz9kb", category: "Family", decade: "2010s", theme: "family" },
    { id: "pdf029", title: "Prevent high blood pressure - Comment éviter l'hypertension", url: "https://www.spc.int/digitallibrary/get/boxtw", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf030", title: "Stay fit, be healthy, stay slim", url: "https://www.spc.int/digitallibrary/get/a73z9", category: "Health", decade: "2010s", theme: "healthy" },
    
    // Panneaux 2
    { id: "pdf031", title: "Dengue-Zika-Chikungunya-Recognising the symptoms", url: "https://www.spc.int/digitallibrary/get/cnc5f", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf032", title: "Prevent high blood pressure - Puipui e gagao toto tokoluga", url: "https://www.spc.int/digitallibrary/get/6hzzg", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf033", title: "Prevent high blood pressure - Puipuia mai le mai suka", url: "https://www.spc.int/digitallibrary/get/9zvuu", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf034", title: "Stay fit, be healthy, stay slim - Helt em i nambawan", url: "https://www.spc.int/digitallibrary/get/zqghc", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf035", title: "Stay fit, be healthy, stay slim - Kia moua e tino malolo", url: "https://www.spc.int/digitallibrary/get/tmskz", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf036", title: "Stay fit, be healthy, stay slim - Restez en bonne santé", url: "https://www.spc.int/digitallibrary/get/ysg3r", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf037", title: "Prevent high blood pressure heart disease diabetes", url: "https://www.spc.int/digitallibrary/get/4qag6", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf038", title: "Don't take the rik, wear a condom ill1", url: "https://www.spc.int/digitallibrary/get/42jdi", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf039", title: "Conseils Sanitaires Guam FestPac French-1", url: "https://www.spc.int/digitallibrary/get/z36pn", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf040", title: "Conseils Sanitaires Guam FestPac French-2", url: "https://www.spc.int/digitallibrary/get/v5vtz", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf041", title: "Lutte contre la Filariose", url: "https://www.spc.int/digitallibrary/get/fsrb3", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf042", title: "Contact Precautions", url: "https://www.spc.int/digitallibrary/get/2g67v", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf043", title: "Droplet Precautions", url: "https://www.spc.int/digitallibrary/get/x4jm3", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf044", title: "Airborne Precautions", url: "https://www.spc.int/digitallibrary/get/dpd8e", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf045", title: "Contact and Droplet Precautions", url: "https://www.spc.int/digitallibrary/get/94z4z", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf046", title: "Handwash Yate", url: "https://www.spc.int/digitallibrary/get/tstva", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf047", title: "COVID-19 Prevention", url: "https://www.spc.int/digitallibrary/get/fzs9k", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf048", title: "Fight the bite - Stop mosquito breeding", url: "https://www.spc.int/digitallibrary/get/k5xpv", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf049", title: "Zika & Pregnancy", url: "https://www.spc.int/digitallibrary/get/4uokb", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf050", title: "Risk of Aids for travelers", url: "https://www.spc.int/digitallibrary/get/9oqy6", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf051", title: "Love with care (1)", url: "https://www.spc.int/digitallibrary/get/9faim", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf052", title: "Love with care (2)", url: "https://www.spc.int/digitallibrary/get/k47xq", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf053", title: "Surveillance and response", url: "https://www.spc.int/DigitalLibrary/Doc/PHD/Surveillance_and_respons", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf054", title: "Mosquito prevention", url: "https://www.spc.int/digitallibrary/get/uarp6", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf055", title: "Wash your hands Fiji", url: "https://www.spc.int/digitallibrary/get/dyvqz", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf056", title: "How to wash your hands Tuvalu", url: "https://www.spc.int/digitallibrary/get/y5y5p", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf057", title: "Totokoa reken te aoraki", url: "https://www.spc.int/digitallibrary/get/38nmi", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf058", title: "Ne mordez pas à l'hameçon, mettez un préservatif", url: "https://www.spc.int/digitallibrary/get/j6bnn", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf059", title: "Ne prenez pas de risque, mettez un préservatif", url: "https://www.spc.int/digitallibrary/get/5eihn", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf060", title: "Prevent black & white striped mosquito from breeding", url: "https://www.spc.int/digitallibrary/get/mdmke", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf061", title: "Protect us from the black and white striped mosquito", url: "https://www.spc.int/digitallibrary/get/cf97t", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf062", title: "Sequence for putting on PPE", url: "https://www.spc.int/digitallibrary/get/8tica", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf063", title: "Sequence for removing PPE", url: "https://www.spc.int/digitallibrary/get/4t4wk", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf064", title: "COVID-19 Social media 1", url: "https://www.spc.int/digitallibrary/get/8oxbn", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf065", title: "COVID-19 Social media 2", url: "https://www.spc.int/digitallibrary/get/zkq95", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf066", title: "COVID-19 Social media 3", url: "https://www.spc.int/digitallibrary/get/zxyaj", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf067", title: "COVID-19 Social media 4", url: "https://www.spc.int/digitallibrary/get/cv45s", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf068", title: "COVID-19 Social media 5", url: "https://www.spc.int/digitallibrary/get/gi6t3", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf069", title: "Tips to prevent covid-19 FSM", url: "https://www.spc.int/digitallibrary/get/tcya6", category: "Health", decade: "2020s", theme: "healthy" },
    { id: "pdf070", title: "You can't change your past but you can change your future", url: "https://www.spc.int/digitallibrary/get/72h95", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf071", title: "Mosquitoes bring dengue fever, malaria and filariasis", url: "https://www.spc.int/digitallibrary/get/c9yhn", category: "Health", decade: "2010s", theme: "healthy" },
    
    // Panneaux 3
    { id: "pdf072", title: "Don't smoke", url: "https://www.spc.int/digitallibrary/get/x6g2w", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf073", title: "Prevent lung cancer", url: "https://www.spc.int/digitallibrary/get/9vgis", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf074", title: "Binge drinking destroys", url: "https://www.spc.int/digitallibrary/get/ir2rz", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf075", title: "Alcohol is dangerous - Koe mena kelea e kava", url: "https://www.spc.int/digitallibrary/get/xokun", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf076", title: "Alcohol is dangerous - L'alcool est dangereux", url: "https://www.spc.int/digitallibrary/get/3mqgg", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf077", title: "Alcohol is dangerous - Rerevaki ni yaqona ni vavalagi", url: "https://www.spc.int/digitallibrary/get/hzovq", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf078", title: "Alcohol is dangerous flipchart", url: "https://www.spc.int/digitallibrary/get/wey9v", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf079", title: "Alcohol is dangerous - Alkohol em i save kamapim birua", url: "https://www.spc.int/digitallibrary/get/dx65r", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf080", title: "Drink less alcohol", url: "https://www.spc.int/digitallibrary/get/o74n9", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf081", title: "Smoking kills banner Nauru", url: "https://www.spc.int/digitallibrary/get/9tzic", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf082", title: "Casse-têtes d'hier, casse-vies d'aujourd'hui", url: "https://www.spc.int/digitallibrary/get/7guny", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf083", title: "My Healthy Meal", url: "https://www.spc.int/digitallibrary/get/5ybva", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf084", title: "Food groups - Ai se meaai mai vasega e 3 i aso uma", url: "https://www.spc.int/digitallibrary/get/883oq", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf085", title: "Atoll Food - Healthy food", url: "https://www.spc.int/digitallibrary/get/gdxiv", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf086", title: "Kaikai bilong ples i nambawan", url: "https://www.spc.int/digitallibrary/get/zjmp8", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf087", title: "Island Food - naturally the best", url: "https://www.spc.int/digitallibrary/get/was84", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf088", title: "Grow more food around your house", url: "https://www.spc.int/digitallibrary/get/6pucu", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf089", title: "Food groups - The three food groups", url: "https://www.spc.int/digitallibrary/get/tjq25", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf090", title: "Pacific Nutrition Bingo", url: "https://www.spc.int/digitallibrary/get/m93za", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf091", title: "Boardgame - Village", url: "https://www.spc.int/digitallibrary/get/4dte8", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf092", title: "Healthy Eating in the Pacific", url: "https://www.spc.int/digitallibrary/get/zzngp", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf093", title: "Ko te pia", url: "https://www.spc.int/digitallibrary/get/znvhe", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf094", title: "What's in my food, hidden fat", url: "https://www.spc.int/digitallibrary/get/tsjnp", category: "Health", decade: "2010s", theme: "healthy" },
    
    // Panneaux 4
    { id: "pdf095", title: "What's in my food, hidden salt", url: "https://www.spc.int/digitallibrary/get/24vei", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf096", title: "What's in my food, hidden sugar", url: "https://www.spc.int/digitallibrary/get/tw9mw", category: "Health", decade: "2010s", theme: "healthy" },
    { id: "pdf097", title: "TABAC français", url: "https://www.spc.int/digitallibrary/get/tr9ti", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf098", title: "TABAC futunien", url: "https://www.spc.int/digitallibrary/get/tt4az", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf099", title: "TABAC wallisien", url: "https://www.spc.int/digitallibrary/get/ji2nf", category: "Addictions", decade: "2010s", theme: "addictions" },
    { id: "pdf100", title: "PASA 25", url: "https://www.spc.int/digitallibrary/get/fggez", category: "General", decade: "2010s", theme: "healthy" },
    { id: "pdf101", title: "PASA 25 Bulletin", url: "https://www.spc.int/DigitalLibrary/Doc/PHD/Bulletins/Pasa/PASA_25.ht", category: "General", decade: "2010s", theme: "healthy" }
];

// state
let selectedDecade = 'all';
let selectedTheme = 'all';
let searchTerm = '';

function buildFilterButtonHandlers() {
    document.querySelectorAll('#decadeFilters .filter-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            // toggle active
            document.querySelectorAll('#decadeFilters .filter-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            selectedDecade = btn.dataset.decade;
            applyFilters();
        });
    });
    document.querySelectorAll('#themeFilters .filter-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{
            document.querySelectorAll('#themeFilters .filter-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            selectedTheme = btn.dataset.theme;
            applyFilters();
        });
    });
    
    const input = document.getElementById('searchInput');
    if (input) {
        input.addEventListener('input', e=>{
            searchTerm = e.target.value.trim().toLowerCase();
            applyFilters();
        });
    }
    const clearBtn = document.getElementById('clearSearch');
    if (clearBtn) {
        clearBtn.addEventListener('click', ()=>{
            const inp = document.getElementById('searchInput');
            if (inp) inp.value = '';
            searchTerm = '';
            applyFilters();
        });
    }
}

/**
* Initialiser la galerie de PDFs avec prévisualisation iframe
*/
function initPdfGallery() {
    const gallery = document.getElementById('pdfGallery');
    gallery.innerHTML = '';
    pdfList.forEach((pdf, index) => {
        const card = document.createElement('div');
        card.className = 'pdf-card';
        // dataset for filters & search
        card.dataset.decade = pdf.decade || 'unknown';
        card.dataset.theme = pdf.theme || 'unknown';
        card.dataset.id = pdf.id || (`pdf${index}`);
        card.dataset.title = (pdf.title||'').toLowerCase();
        
        card.innerHTML = `
            <div class="pdf-preview-iframe">
                <div class="pdf-loading"></div>
                <iframe src="${pdf.url}#view=FitH" title="${pdf.title}" loading="lazy"></iframe>
            </div>
            <div class="pdf-info">
                <h3>${pdf.title}</h3>
                <p>${pdf.category} – <small class="fr-text">${pdf.decade}</small><small class="en-text" style="display:none;">${pdf.decade}</small></p>
                <a href="javascript:openPdfViewer('${pdf.url}', '${pdf.title}')" class="pdf-link fr-text">
                    Voir le PDF
                </a>
                <a href="${pdf.url}" target="_blank" class="pdf-link external-link fr-text" style="background: var(--pantone-3125);">
                    Ouvrir dans un nouvel onglet
                </a>
            </div>
        `;
        gallery.appendChild(card);
    });
    
    // Attacher les gestionnaires de chargement pour les iframes
    attachIframeLoadHandlers();
    
    buildFilterButtonHandlers();
    applyFilters();
}

/**
* Attacher les gestionnaires d'événements pour les iframes
*/
function attachIframeLoadHandlers() {
    const pdfCards = document.querySelectorAll('.pdf-card .pdf-preview-iframe');
    
    pdfCards.forEach(previewContainer => {
        const iframe = previewContainer.querySelector('iframe');
        const loading = previewContainer.querySelector('.pdf-loading');
        
        if (iframe && loading) {
            // Timeout de sécurité
            const timeoutId = setTimeout(() => {
                loading.classList.add('hidden');
            }, 5000);
            
            // Événement de chargement
            iframe.addEventListener('load', function() {
                clearTimeout(timeoutId);
                loading.classList.add('hidden');
            });
            
            // Événement d'erreur
            iframe.addEventListener('error', function() {
                clearTimeout(timeoutId);
                loading.classList.add('hidden');
            });
        }
    });
}

/**
* Appliquer filtres et recherche
*/
function applyFilters() {
    const gallery = document.getElementById('pdfGallery');
    const cards = gallery.querySelectorAll('.pdf-card');
    cards.forEach(card=>{
        let show = true;
        if (selectedDecade !== 'all' && card.dataset.decade !== selectedDecade) show = false;
        if (selectedTheme !== 'all' && card.dataset.theme !== selectedTheme) show = false;
        if (searchTerm) {
            const inId = card.dataset.id && card.dataset.id.toLowerCase().includes(searchTerm);
            const inTitle = card.dataset.title && card.dataset.title.includes(searchTerm);
            if (!inId && !inTitle) show = false;
        }
        card.style.display = show ? 'block' : 'none';
    });
}

/**
* Ouvrir le visualiseur PDF (existant)
*/
function openPdfViewer(url, title) {
    const container = document.getElementById('pdfViewerContainer');
    const frame = document.getElementById('pdfFrame');
    const titleElement = document.getElementById('pdfTitle');
    
    titleElement.textContent = title;
    frame.src = url;
    container.style.display = 'flex';
    container.classList.add('fullscreen');
    document.body.style.overflow = 'hidden';
}

function closePdfViewer() {
    const container = document.getElementById('pdfViewerContainer');
    const frame = document.getElementById('pdfFrame');
    
    container.style.display = 'none';
    container.classList.remove('fullscreen');
    frame.src = '';
    document.body.style.overflow = 'auto';
}

// keyboard close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePdfViewer();
});

// init
document.addEventListener('DOMContentLoaded', initPdfGallery);