export const questions = [
    {
        id: "taste",
        question: "오늘, 어떤 맛이 끌리시나요?",
        options: [
            { label: "달콤함으로 힐링", icon: "🍬", value: "sweet" },
            { label: "새콤하게 리프레시", icon: "🍋", value: "sour" },
            { label: "청량하고 상쾌하게", icon: "🍃", value: "refreshing" },
            { label: "분위기 있는 씁쓸함", icon: "☕", value: "bitter" }
        ],
        multiSelect: false
    },
    {
        id: "strength",
        question: "선호하는 알코올 강도는?",
        options: [
            { label: "분위기만 (무알콜)", icon: "🥤", value: "none" },
            { label: "가볍게 톡 (저도수)", icon: "🍹", value: "low" },
            { label: "알딸딸하게 (중간)", icon: "🍷", value: "medium" },
            { label: "짜릿하게 (고도수)", icon: "🍸", value: "high" }
        ],
        multiSelect: false
    },
    {
        id: "mood",
        question: "현재 어떤 기분을 만끽하고 싶나요?",
        options: [
            { label: "에너지 업! 신나게", icon: "✨", value: "energetic" },
            { label: "차분하고 느긋하게", icon: "🛋️", value: "relaxed" },
            { label: "로맨틱한 무드", icon: "🌹", value: "romantic" },
            { label: "우울함을 씻어낼", icon: "🌧️", value: "melancholy" }
        ],
        multiSelect: false
    },
    {
        id: "carbonation",
        question: "탄산의 청량감을 느끼고 싶으신가요?",
        options: [
            { label: "톡 쏘는 탄산형", icon: "🫧", value: "sparkling" },
            { label: "부드러운 무탄산", icon: "💧", value: "still" },
            { label: "상관없음", icon: "🤷", value: "any" }
        ],
        multiSelect: false
    },
    {
        id: "baseSpirit",
        question: "평소 선호하시는 주종이 있나요? (다중 선택 가능)",
        options: [
            { label: "진 (깔끔)", icon: "🍸", value: "gin" },
            { label: "보드카 (순수)", icon: "🍸", value: "vodka" },
            { label: "럼 (달큰)", icon: "🍹", value: "rum" },
            { label: "위스키 (진함)", icon: "🥃", value: "whisky" },
            { label: "데킬라 (열정)", icon: "🌵", value: "tequila" },
            { label: "리큐르 (개성)", icon: "🍯", value: "liqueur" },
            { label: "상관없음", icon: "✅", value: "any" }
        ],
        multiSelect: true
    },
    {
        id: "allergies",
        question: "피하고 싶은 재료가 있나요?",
        options: [
            { label: "우유/유제품", icon: "🧀", value: "dairy" },
            { label: "계란", icon: "🥚", value: "egg" },
            { label: "견과류", icon: "🥜", value: "nuts" },
            { label: "해당 없음", icon: "✅", value: "none" }
        ],
        multiSelect: true,
        allowCustomInput: true
    }
];

export const cocktails = [
    {
        name: "모히또 (Mojito)",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=80",
        tags: ["상큼한", "저도수", "리프레시", "탄산"],
        attributes: { taste: "refreshing", strength: "low", mood: "energetic", carbonation: "sparkling", baseSpirit: "rum" },
        allergies: [],
        description: "신선한 라임과 민트가 어우러져 한 모금만으로도 기분이 상쾌해지는 마법 같은 칵테일입니다. 기분 전환이 필요할 때 최고의 선택이 될 거예요."
    },
    {
        name: "깔루아 밀크 (Kahlua Milk)",
        image: "https://images.unsplash.com/photo-1595867364506-c87fdad3df81?w=500&q=80",
        tags: ["달콤한", "커피향", "저도수", "부드러움"],
        attributes: { taste: "sweet", strength: "low", mood: "relaxed", carbonation: "still", baseSpirit: "liqueur" },
        allergies: ["dairy"],
        description: "커피 리큐어의 쌉쌀함과 우유의 부드러움이 만나 완성된 한 잔. 오늘 하루 수고한 당신에게 차분하고 달콤한 휴식을 선사합니다."
    },
    {
        name: "마티니 (Martini)",
        image: "https://images.unsplash.com/photo-1575037614876-c385cb80bf9a?w=500&q=80",
        tags: ["드라이", "고도수", "로맨틱"],
        attributes: { taste: "bitter", strength: "high", mood: "romantic", carbonation: "still", baseSpirit: "gin" },
        allergies: [],
        description: "칵테일의 제왕이라 불리는 클래식 중의 클래식. 진과 베르무트의 깔끔하고 드라이한 맛이 로맨틱하고 우아한 분위기를 깊게 만들어줍니다."
    },
    {
        name: "피냐 콜라다 (Piña Colada)",
        image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?w=500&q=80",
        tags: ["트로피컬", "달콤한", "신나는"],
        attributes: { taste: "sweet", strength: "low", mood: "energetic", carbonation: "still", baseSpirit: "rum" },
        allergies: ["dairy"],
        description: "파인애플과 코코넛 크림이 빚어내는 달콤한 맛. 마시는 순간 열대 휴양지에 와있는 듯한 기분 좋은 환상에 빠지게 될 거예요."
    },
    {
        name: "올드 패션드 (Old Fashioned)",
        image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=500&q=80",
        tags: ["클래식", "고도수", "차분한"],
        attributes: { taste: "bitter", strength: "high", mood: "melancholy", carbonation: "still", baseSpirit: "whisky" },
        allergies: [],
        description: "위스키 본연의 깊은 풍미를 가장 잘 느낄 수 있는 한 잔입니다. 오렌지 껍질의 은은한 향이 치친 마음을 부드럽게 위로합니다."
    },
    {
        name: "블루 라군 (Blue Lagoon)",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80",
        tags: ["상큼한", "중간도수", "청량감", "탄산"],
        attributes: { taste: "refreshing", strength: "medium", mood: "energetic", carbonation: "sparkling", baseSpirit: "vodka" },
        allergies: [],
        description: "푸른 바다를 그대로 옮겨온 듯한 영롱한 색감. 레몬의 새콤함이 답답했던 속을 시원하게 뚫어줍니다."
    },
    {
        name: "신데렐라 (Cinderella)",
        image: "https://plus.unsplash.com/premium_photo-1690050854378-0cf7f4bd99ed?w=500&q=80",
        tags: ["무알콜", "새콤달콤", "파티"],
        attributes: { taste: "sour", strength: "none", mood: "romantic", carbonation: "still", baseSpirit: "any" },
        allergies: [],
        description: "다양한 열대 과일 주스가 섞여 만들어낸 상큼 달콤한 무알콜 칵테일입니다. 취하지 않아도 충분히 로맨틱한 파티 분위기를 낼 수 있어요."
    },
    {
        name: "아마레또 사워 (Amaretto Sour)",
        image: "https://images.unsplash.com/photo-1560508180-03f285f67dee?w=500&q=80",
        tags: ["고소한", "중간도수", "부드러움"],
        attributes: { taste: "sour", strength: "medium", mood: "melancholy", carbonation: "still", baseSpirit: "liqueur" },
        allergies: ["egg", "nuts"],
        description: "아몬드 리큐어의 진한 고소함과 레몬의 산미, 계란 흰자의 텍스처가 만나 오묘하면서도 고급스러운 맛을 냅니다. 울적한 날의 특별한 치료제."
    }

];
