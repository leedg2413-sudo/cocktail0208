import { questions, cocktails } from './data.js';

let currentStep = 0;
const userAnswers = {
    taste: [],
    strength: [],
    mood: [],
    carbonation: [],
    baseSpirit: [],
    allergies: [],
    customAllergy: ""
};


// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    loading: document.getElementById('loading-screen'),
    result: document.getElementById('result-screen')
};

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const customInputContainer = document.getElementById('custom-input-container');
const allergyInput = document.getElementById('allergy-input');
const progressBar = document.getElementById('progress');

// Events
startBtn.addEventListener('click', () => switchScreen('home', 'quiz', loadQuestion));
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);
restartBtn.addEventListener('click', () => {
    currentStep = 0;
    for (let key in userAnswers) {
        userAnswers[key] = key === 'customAllergy' ? "" : [];
    }
    allergyInput.value = "";
    switchScreen('result', 'home');
});

allergyInput.addEventListener('input', (e) => {
    userAnswers.customAllergy = e.target.value;
});

function switchScreen(fromId, toId, callback = null) {
    screens[fromId].classList.remove('active');
    setTimeout(() => {
        screens[toId].classList.add('active');
        if (callback) callback();
    }, 500);
}

function loadQuestion() {
    const q = questions[currentStep];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';
    
    // Progress
    progressBar.style.width = `${((currentStep) / (questions.length)) * 100}%`;
    setTimeout(()=> {
        progressBar.style.width = `${((currentStep + 1) / questions.length) * 100}%`;
    }, 50);
    
    // Custom input logic
    if (q.allowCustomInput) {
        customInputContainer.classList.remove('hidden');
        allergyInput.value = userAnswers.customAllergy;
    } else {
        customInputContainer.classList.add('hidden');
    }

    // Prev btn Logic
    if (currentStep === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-icon">${opt.icon}</span><span>${opt.label}</span>`;
        
        if (userAnswers[q.id].includes(opt.value)) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => {
            if (!q.multiSelect) {
                Array.from(optionsContainer.children).forEach(child => child.classList.remove('selected'));
                btn.classList.add('selected');
                userAnswers[q.id] = [opt.value];
            } else {
                if (opt.value === 'none') {
                    if (!btn.classList.contains('selected')) {
                        Array.from(optionsContainer.children).forEach(child => child.classList.remove('selected'));
                        btn.classList.add('selected');
                        userAnswers[q.id] = ['none'];
                    } else {
                        btn.classList.remove('selected');
                        userAnswers[q.id] = [];
                    }
                } else {
                    const noneBtnStr = Array.from(optionsContainer.children).find(c => c.textContent.includes('해당 없음'));
                    if (noneBtnStr && noneBtnStr.classList.contains('selected')) {
                        noneBtnStr.classList.remove('selected');
                        userAnswers[q.id] = userAnswers[q.id].filter(v => v !== 'none');
                    }

                    if (btn.classList.contains('selected')) {
                        btn.classList.remove('selected');
                        userAnswers[q.id] = userAnswers[q.id].filter(val => val !== opt.value);
                    } else {
                        btn.classList.add('selected');
                        userAnswers[q.id].push(opt.value);
                    }
                }
            }
            updateNextBtnVisibility();
        });
        
        optionsContainer.appendChild(btn);
    });

    updateNextBtnVisibility();
}

function updateNextBtnVisibility() {
    const q = questions[currentStep];
    const hasSelection = userAnswers[q.id].length > 0;
    
    if (hasSelection) {
        nextBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.add('hidden');
    }
}

function handleNext() {
    if (currentStep < questions.length - 1) {
        currentStep++;
        optionsContainer.style.opacity = '0';
        setTimeout(() => {
            loadQuestion();
            optionsContainer.style.opacity = '1';
        }, 300);
        
    } else {
        switchScreen('quiz', 'loading', () => {
            setTimeout(() => {
                showResult();
            }, 3000); 
        });
    }
}

function handlePrev() {
    if (currentStep > 0) {
        currentStep--;
        optionsContainer.style.opacity = '0';
        setTimeout(() => {
            loadQuestion();
            optionsContainer.style.opacity = '1';
        }, 300);
    }
}

function showResult() {
    const userAllergens = userAnswers.allergies;
    let safeCocktails = cocktails;
    
    if (!userAllergens.includes('none') && userAllergens.length > 0) {
        safeCocktails = cocktails.filter(c => {
            return !c.allergies.some(a => userAllergens.includes(a));
        });
    }
    
    if (safeCocktails.length === 0) safeCocktails = cocktails;

    const uTaste = userAnswers.taste[0];
    const uStrength = userAnswers.strength[0];
    const uMood = userAnswers.mood[0];
    const uCarbonation = userAnswers.carbonation[0];
    const uBaseSpirits = userAnswers.baseSpirit;

    safeCocktails.forEach(c => {
        let score = 0;
        
        if (c.attributes.taste === uTaste) score += 3;
        if (c.attributes.strength === uStrength) score += 5;
        if (c.attributes.mood === uMood) score += 2;
        
        // Carbonation scoring
        if (uCarbonation === 'any') {
            score += 3;
        } else if (c.attributes.carbonation === uCarbonation) {
            score += 3;
        }

        // Base spirit scoring
        if (uBaseSpirits.includes('any')) {
            score += 4;
        } else if (uBaseSpirits.includes(c.attributes.baseSpirit)) {
            score += 4;
        }

        // Add small random noise to prevent same result every time if tied
        c.score = score + Math.random(); 
    });


    safeCocktails.sort((a, b) => b.score - a.score);
    const bestMatch = safeCocktails[0];

    document.getElementById('result-image').src = bestMatch.image;
    document.getElementById('result-name').textContent = bestMatch.name;
    document.getElementById('result-desc').textContent = bestMatch.description;
    
    const tagsContainer = document.getElementById('result-tags');
    tagsContainer.innerHTML = '';
    bestMatch.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = `#${tag}`;
        tagsContainer.appendChild(span);
    });

    switchScreen('loading', 'result');
}
