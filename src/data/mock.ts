export interface Post {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  body: string;
}

export interface Writer {
  id: number;
  name: string;
  imageUrl: string;
  bio: string;
}

export interface AnonymousPost {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  date: string;
  excerpt: string;
  body: string;
}

export const latestPosts: Post[] = [
  {
    id: 1,
    title: "The Art of Doing Nothing",
    slug: "art-of-doing-nothing",
    imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=800",
    author: "Elara Vance",
    date: "Oct 15, 2023",
    category: "Mindfulness",
    body: `
<p>In a world that relentlessly demands our attention, the act of doing nothing has become a radical form of self-care. It is not about laziness or procrastination, but about creating intentional space for our minds to wander, to rest, and to reconnect with ourselves. This is the lost art of stillness.</p>
<p>We are conditioned to believe that productivity is the ultimate measure of our worth. Our calendars are packed, our inboxes are overflowing, and our minds are constantly racing. But what if we chose to step off the hamster wheel, even for just a few moments each day? What if we allowed ourselves the simple luxury of being, without the pressure of doing?</p>
<h2>The Science of Stillness</h2>
<p>Neuroscience tells us that when our brains are at rest, they are anything but idle. The "default mode network" (DMN) becomes active, a state associated with creativity, memory consolidation, and self-reflection. By embracing moments of idleness, we are actually nurturing our cognitive functions and fostering a more resilient mind.</p>
<blockquote>"The quieter you become, the more you are able to hear." - Rumi</blockquote>
<p>So, how can we reclaim this lost art? It starts with small, intentional choices. Put away your phone during your lunch break. Sit on a park bench and simply observe the world around you. Allow your mind to drift without a specific goal or destination. It may feel uncomfortable at first, but with practice, you will discover a profound sense of peace and clarity in the quiet moments.</p>
    `
  },
  {
    id: 2,
    title: "Finding Clarity in Chaos",
    slug: "clarity-in-chaos",
    imageUrl: "https://images.unsplash.com/photo-1484253293226-a959f35a2fab?q=80&w=800",
    author: "Kenji Tanaka",
    date: "Oct 12, 2023",
    category: "Life",
    body: `
<p>Chaos is not a pit, it's a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some, are given a chance to climb. They refuse, they cling to the realm or the gods or love. Illusions. Only the ladder is real. The climb is all there is.</p>
<h2>Embracing the Unpredictable</h2>
<p>Life is inherently chaotic. Plans go awry, expectations are unmet, and the world is in a constant state of flux. Instead of resisting this reality, we can learn to embrace it. By accepting the unpredictable nature of life, we can find a strange sense of freedom and resilience.</p>
<p>The key is to focus on what we can control: our responses. We can't control the storm, but we can learn to build a stronger ship. This means developing emotional agility, practicing mindfulness, and cultivating a mindset of growth and adaptation.</p>
`
  },
  {
    id: 3,
    title: "The Future of Digital Identity",
    slug: "future-of-digital-identity",
    imageUrl: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=800",
    author: "Sofia Reyes",
    date: "Oct 10, 2023",
    category: "Technology",
    body: "<p>Our digital footprints are growing exponentially. This article explores the future of digital identity, privacy, and how we can build a more human-centric internet.</p>"
  },
  {
    id: 4,
    title: "Crafting Worlds with Words",
    slug: "crafting-worlds-with-words",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    author: "Marcus Holloway",
    date: "Oct 8, 2023",
    category: "Creativity",
    body: "<p>A deep dive into the art of storytelling, from character development to world-building. Learn how to create narratives that resonate with readers.</p>"
  },
  {
    id: 5,
    title: "Meditation for the Modern Mind",
    slug: "meditation-for-modern-mind",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-4e61f3d3d18f?q=80&w=800",
    author: "Elara Vance",
    date: "Oct 5, 2023",
    category: "Mindfulness",
    body: "<p>Can ancient practices help us navigate the stresses of modern life? This piece explores the benefits of meditation and offers practical tips for beginners.</p>"
  },
  {
    id: 6,
    title: "The Ethics of AI",
    slug: "ethics-of-ai",
    imageUrl: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=800",
    author: "Sofia Reyes",
    date: "Oct 2, 2023",
    category: "Technology",
    body: "<p>As artificial intelligence becomes more integrated into our lives, we must confront the ethical dilemmas it presents. A look at the challenges and potential solutions.</p>"
  },
  {
    id: 7,
    title: "The Power of Solitude",
    slug: "power-of-solitude",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800",
    author: "Kenji Tanaka",
    date: "Sep 29, 2023",
    category: "Life",
    body: "<p>In a hyper-connected world, solitude is often mistaken for loneliness. This article argues for the importance of spending time alone for self-discovery and growth.</p>"
  },
  {
    id: 8,
    title: "Unlocking Your Creative Potential",
    slug: "unlocking-creative-potential",
    imageUrl: "https://images.unsplash.com/photo-1505682499293-233fb1417540?q=80&w=800",
    author: "Marcus Holloway",
    date: "Sep 25, 2023",
    category: "Creativity",
    body: "<p>Creativity isn't a gift for the few; it's a skill that can be cultivated. Discover techniques to break through creative blocks and generate new ideas.</p>"
  },
  {
    id: 9,
    title: "Digital Minimalism in Practice",
    slug: "digital-minimalism-in-practice",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800",
    author: "Elara Vance",
    date: "Sep 22, 2023",
    category: "Mindfulness",
    body: "<p>A practical guide to decluttering your digital life. Learn how to use technology more intentionally to improve focus and well-being.</p>"
  },
  {
    id: 10,
    title: "The Philosophy of Open Source",
    slug: "philosophy-of-open-source",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    author: "Sofia Reyes",
    date: "Sep 19, 2023",
    category: "Technology",
    body: "<p>Open source is more than just code; it's a philosophy of collaboration and transparency. This article explores its impact on technology and society.</p>"
  }
];

export const featuredWriters: Writer[] = [
    {
        id: 1,
        name: "Elara Vance",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
        bio: "Philosopher and poet, exploring the depths of human consciousness."
    },
    {
        id: 2,
        name: "Kenji Tanaka",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
        bio: "Zen practitioner and author, writing about mindfulness in the digital age."
    },
    {
        id: 3,
        name: "Sofia Reyes",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
        bio: "Cultural critic and essayist, focusing on the intersection of technology and society."
    },
    {
        id: 4,
        name: "Marcus Holloway",
        imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
        bio: "Novelist and short story writer, crafting narratives that challenge perception."
    }
];

export const anonymousPosts: AnonymousPost[] = [
    {
        id: 1,
        title: "Reflections from the Void",
        slug: "reflections-from-the-void",
        imageUrl: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=800",
        date: "Oct 18, 2023",
        excerpt: "In the silence, I found a voice. It wasn't mine, but it spoke my truth. A whisper from the deep, echoing in the chambers of a heart I thought was empty.",
        body: "<p>The void is not empty. It's a canvas. For years, I saw it as a terrifying black hole, a place where light went to die. But I was wrong. It's a womb, a dark, quiet place where thoughts can be born without the harsh judgment of the world. In the silence, I found a voice. It wasn't mine, but it spoke my truth. A whisper from the deep, echoing in the chambers of a heart I thought was empty. This is the story of that whisper.</p>"
    },
    {
        id: 2,
        title: "A Letter to My Younger Self",
        slug: "letter-to-my-younger-self",
        imageUrl: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800",
        date: "Oct 10, 2023",
        excerpt: "If I could tell you one thing, it would be to breathe. Just breathe. The world will not end if you pause. Your heart will not stop if you rest.",
        body: "<p>If I could reach back through time, I wouldn't give you lottery numbers or stock tips. I'd just place a hand on your shoulder and say, 'Breathe.' You're running so fast, so desperate to prove yourself, that you're forgetting the simple act of being. The world will not end if you pause. Your heart will not stop if you rest. In fact, it is in those moments of stillness that you will find the strength you're so frantically searching for elsewhere.</p>"
    },
    {
        id: 3,
        title: "The Weight of a Secret",
        slug: "weight-of-a-secret",
        imageUrl: "https://images.unsplash.com/photo-1501139083-a95238693273?q=80&w=800",
        date: "Oct 5, 2023",
        excerpt: "It sits on my chest, a constant pressure, a reminder of a choice made in haste. Some secrets are not meant to be kept.",
        body: "<p>A secret is a heavy thing. It's a stone in your pocket that you can never put down. At first, it's small, almost weightless. But with time, it grows, its edges sharpening, its gravity pulling you down. It sits on my chest, a constant pressure, a reminder of a choice made in haste. This is the story of that stone, and the day I decided to finally let it go.</p>"
    },
    {
        id: 4,
        title: "City Lights, Lonely Nights",
        slug: "city-lights-lonely-nights",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800",
        date: "Sep 28, 2023",
        excerpt: "The city never sleeps, but my heart yearns for rest. A million lights, a million stories, and I am just a ghost drifting through them.",
        body: "<p>From my window, the city is a galaxy of lights, a sprawling, glittering promise of connection. But inside, there is a profound silence. The city never sleeps, but my heart yearns for rest. A million lights, a million stories, and I am just a ghost drifting through them, unseen, unheard. It's a strange paradox, to be surrounded by so many and yet feel so utterly alone.</p>"
    }
];