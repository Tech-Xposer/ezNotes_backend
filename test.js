const author = 'Ashutosh'
let notes = [
    {
      "title": "Morning Reflection",
      "content": "Today, I'll start my day with a positive mindset. I'll focus on my priorities and set clear goals for the day.",
      "tags": ["reflection", "morning"],
      "favorite": false
    },
    {
      "title": "Daily Gratitude",
      "content": "I'm grateful for the opportunities that each day brings. I'll cherish the moments and make the most of them.",
      "tags": ["gratitude", "daily"],
      "favorite": false
    },
    {
      "title": "Productivity Boost",
      "content": "I'll tackle my tasks with focus and determination. I'll eliminate distractions and stay committed to my goals.",
      "tags": ["productivity", "goals"],
      "favorite": false
    },
    {
      "title": "Evening Reflection",
      "content": "As the day comes to a close, I'll reflect on my achievements and learnings. I'll plan for a restful night and prepare for tomorrow's challenges.",
      "tags": ["reflection", "evening"],
      "favorite": false
    },
    {
      "title": "Inspiring Quote",
      "content": "In the midst of challenges, lies opportunity. I'll embrace every obstacle as a chance to grow and learn.",
      "tags": ["inspiration", "quote"],
      "favorite": false
    },
    {
      "title": "Healthy Habits",
      "content": "I'll prioritize my health and well-being. I'll nourish my body with nutritious food and engage in regular exercise.",
      "tags": ["health", "habits"],
      "favorite": false
    },
    {
      "title": "Mindful Meditation",
      "content": "I'll practice mindfulness to calm my thoughts and center myself. I'll find peace in the present moment.",
      "tags": ["mindfulness", "meditation"],
      "favorite": false
    },
    {
      "title": "Creative Expression",
      "content": "I'll unleash my creativity and express myself freely. I'll explore new ideas and embrace my unique perspective.",
      "tags": ["creativity", "expression"],
      "favorite": false
    },
    {
      "title": "Positive Affirmations",
      "content": "I am capable, I am worthy, I am enough. I'll reaffirm my self-worth and believe in my abilities.",
      "tags": ["affirmations", "positive"],
      "favorite": false
    },
    {
      "title": "Self-Care Routine",
      "content": "I'll pamper myself with acts of self-care and self-love. I'll prioritize my happiness and well-being.",
      "tags": ["self-care", "routine"],
      "favorite": false
    },
    {
      "title": "Goal Setting",
      "content": "I'll set ambitious yet achievable goals. I'll break them down into actionable steps and track my progress.",
      "tags": ["goals", "achievement"],
      "favorite": false
    },
    {
      "title": "Random Act of Kindness",
      "content": "I'll spread kindness wherever I go. I'll brighten someone's day with a simple gesture of compassion.",
      "tags": ["kindness", "random"],
      "favorite": false
    },
    {
      "title": "Learning Journey",
      "content": "I'll embrace every opportunity to learn and grow. I'll seek knowledge and expand my horizons.",
      "tags": ["learning", "growth"],
      "favorite": false
    },
    {
      "title": "Adventure Awaits",
      "content": "I'll step out of my comfort zone and embrace new experiences. I'll seize the day and make memories to cherish.",
      "tags": ["adventure", "experience"],
      "favorite": false
    },
    {
      "title": "Gratitude Journal",
      "content": "I'll write down three things I'm grateful for each day. I'll cultivate a mindset of gratitude and abundance.",
      "tags": ["gratitude", "journal"],
      "favorite": false
    },
    {
      "title": "Stress Management",
      "content": "I'll practice stress-relief techniques to maintain balance and inner peace. I'll take deep breaths and let go of tension.",
      "tags": ["stress", "management"],
      "favorite": false
    },
    {
      "title": "Empowering Mantra",
      "content": "I am strong, I am resilient, I am unstoppable. I'll repeat my empowering mantra and face challenges with confidence.",
      "tags": ["empowerment", "mantra"],
      "favorite": false
    },
    {
      "title": "Digital Detox",
      "content": "I'll unplug from technology and connect with the world around me. I'll savor moments of stillness and solitude.",
      "tags": ["digital", "detox"],
      "favorite": false
    },
    {
      "title": "Dream Big",
      "content": "I'll dare to dream big and pursue my passions fearlessly. I'll believe in the power of my dreams to shape my reality.",
      "tags": ["dreams", "aspirations"],
      "favorite": false
    },
    {
      "title": "Mindset Shift",
      "content": "I'll challenge limiting beliefs and cultivate a growth mindset. I'll see obstacles as opportunities for growth and learning.",
      "tags": ["mindset", "growth"],
      "favorite": false
    },
    {
      "title": "Morning Routine",
      "content": "I'll establish a morning routine to set the tone for a productive day. I'll start with gratitude and intention.",
      "tags": ["morning", "routine"],
      "favorite": false
    },
    {
      "title": "Evening Wind Down",
      "content": "I'll wind down with calming activities to prepare for restful sleep. I'll disconnect from screens and relax my mind.",
      "tags": ["evening", "relaxation"],
      "favorite": false
    },
    {
      "title": "Celebrating Small Wins",
      "content": "I'll celebrate my achievements, no matter how small. I'll acknowledge my progress and build momentum.",
      "tags": ["celebration", "achievement"],
      "favorite": false
    },
    {
      "title": "Power of Positivity",
      "content": "I'll surround myself with positive energy and optimistic thinking. I'll radiate positivity and attract abundance.",
      "tags": ["positivity", "optimism"],
      "favorite": false
    },
    {
      "title": "Healthy Mind, Healthy Body",
      "content": "I'll nurture my mental and physical health with self-care practices. I'll prioritize rest, nourishment, and mindfulness.",
      "tags": ["health", "wellness"],
      "favorite": false
    },
    {
      "title": "Inspired Action",
      "content": "I'll take inspired action towards my goals. I'll trust my intuition and follow the path that aligns with my values.",
      "tags": ["inspiration", "action"],
      "favorite": false
    },
    {
      "title": "Focus and Flow",
      "content": "I'll enter a state of flow by immersing myself in my work. I'll eliminate distractions and let creativity guide me.",
      "tags": ["focus", "flow"],
      "favorite": false
    },
    {
      "title": "Inner Strength",
      "content": "I'll tap into my inner strength to overcome challenges. I'll draw upon my resilience and courage to face adversity.",
      "tags": ["strength", "resilience"],
      "favorite": false
    },
    {
      "title": "Time Management",
      "content": "I'll manage my time effectively to maximize productivity. I'll prioritize tasks and allocate time for breaks and self-care.",
      "tags": ["time", "management"],
      "favorite": false
    },
    {
      "title": "Self-Reflection",
      "content": "I'll engage in regular self-reflection to gain insights and self-awareness. I'll learn from past experiences and evolve.",
      "tags": ["reflection", "self-awareness"],
      "favorite": false
    },
    {
      "title": "Gratitude Practice",
      "content": "I'll express gratitude for the blessings in my life. I'll find joy in the simple pleasures and appreciate each moment.",
      "tags": ["gratitude", "practice"],
      "favorite": false
    },
    {
      "title": "Healthy Boundaries",
      "content": "I'll set healthy boundaries to protect my time and energy. I'll prioritize self-care and honor my needs.",
      "tags": ["boundaries", "self-care"],
      "favorite": false
    },
    {
      "title": "Mindful Movement",
      "content": "I'll engage in mindful movement to nourish my body and soul. I'll find joy in yoga, dance, and other forms of exercise.",
      "tags": ["mindfulness", "movement"],
      "favorite": false
    },
    {
      "title": "Daily Affirmations",
      "content": "I am enough, I am worthy, I am loved. I'll affirm my worthiness and embrace my true self.",
      "tags": ["affirmations", "self-love"],
      "favorite": false
    },
    {
      "title": "Embracing Change",
      "content": "I'll embrace change as a natural part of life. I'll adapt to new circumstances with flexibility and resilience.",
      "tags": ["change", "adaptation"],
      "favorite": false
    },
    {
      "title": "Positive Vibes Only",
      "content": "I'll cultivate positive vibes in my environment and interactions. I'll uplift others with kindness and encouragement.",
      "tags": ["positivity", "kindness"],
      "favorite": false
    },
    {
      "title": "Self-Discovery Journey",
      "content": "I'll embark on a journey of self-discovery and personal growth. I'll explore my passions and uncover my true purpose.",
      "tags": ["self-discovery", "growth"],
      "favorite": false
    },
    {
      "title": "Creative Inspiration",
      "content": "I'll seek inspiration from the beauty of nature and the creativity of others. I'll fuel my imagination and unleash my artistic expression.",
      "tags": ["inspiration", "creativity"],
      "favorite": false
    },
    {
      "title": "Heartfelt Connection",
      "content": "I'll nurture meaningful connections with loved ones and friends. I'll cherish moments of laughter, love, and shared experiences.",
      "tags": ["connection", "relationships"],
      "favorite": false
    },
    {
      "title": "Path to Success",
      "content": "I'll pave my own path to success with determination and perseverance. I'll stay true to my values and never give up on my dreams.",
      "tags": ["success", "perseverance"],
      "favorite": false
    },
    {
      "title": "Inner Peace",
      "content": "I'll cultivate inner peace amidst the chaos of life. I'll find solace in moments of stillness and connect with my inner wisdom.",
      "tags": ["peace", "mindfulness"],
      "favorite": false
    },
    {
      "title": "Healthy Relationships",
      "content": "I'll nurture healthy and supportive relationships. I'll communicate openly, listen with empathy, and respect boundaries.",
      "tags": ["relationships", "communication"],
      "favorite": false
    },
    {
      "title": "Soulful Retreat",
      "content": "I'll retreat into solitude to recharge my soul. I'll find serenity in moments of quiet reflection and self-care.",
      "tags": ["retreat", "self-care"],
      "favorite": false
    },
    {
      "title": "Manifesting Abundance",
      "content": "I'll manifest abundance in all areas of my life. I'll cultivate gratitude and abundance mindset to attract prosperity.",
      "tags": ["abundance", "manifestation"],
      "favorite": false
    },
    {
      "title": "Self-Expression",
      "content": "I'll express myself authentically and fearlessly. I'll honor my truth and share my unique gifts with the world.",
      "tags": ["self-expression", "authenticity"],
      "favorite": false
    },
    {
      "title": "Daily Inspiration",
      "content": "I'll seek inspiration from the beauty of life and the resilience of the human spirit. I'll find strength in adversity and hope in despair.",
      "tags": ["inspiration", "hope"],
      "favorite": false
    },
    {
      "title": "Mindful Eating",
      "content": "I'll practice mindful eating to savor the flavors and nourish my body. I'll eat with awareness and gratitude.",
      "tags": ["mindfulness", "nutrition"],
      "favorite": false
    },
    {
      "title": "Inner Harmony",
      "content": "I'll find harmony within myself and with the world around me. I'll embrace balance and alignment in all aspects of my life.",
      "tags": ["harmony", "balance"],
      "favorite": false
    },
    {
      "title": "Adventure Seeker",
      "content": "I'll seek adventure and explore new horizons. I'll embrace the unknown and embark on journeys of discovery.",
      "tags": ["adventure", "exploration"],
      "favorite": false
    },
    {
      "title": "Morning Affirmation",
      "content": "Today is a new beginning, full of possibilities and opportunities. I'll greet the day with gratitude and optimism.",
      "tags": ["affirmation", "morning"],
      "favorite": false
    }
  ]

  const newNotes = []
  notes.map(note=>{
    newNotes.push({
        ...note,
        author
    })
  })
  console.log(newNotes);