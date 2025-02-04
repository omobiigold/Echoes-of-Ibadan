import React from 'react';
import { Calendar, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Publication } from '../../types/publications';

export const publications: Publication[] = [
  {
    id: 1,
    title: "Ibadan History from the Sixteenth Century to the British Colonial Period",
    abstract: "This publication provides an in-depth historical analysis of Ibadan's transformation from a small war camp into a dominant Yoruba empire before its eventual integration into British colonial administration. The document explores key events such as the migration of Oyo refugees to Ibadan, the role of Ibadan warriors in shaping Yoruba power structures, and the complex relationship between Ibadan and other Yoruba states. It also examines how British colonial policies redefined traditional governance in Ibadan, setting the stage for modern-day political systems in the region.",
    content: `### Introduction
Ibadan, a city that has long stood at the center of Yoruba civilization, was originally established as a military war camp in the early 19th century following the collapse of the Oyo Empire. Over time, it evolved into a structured political entity, becoming one of the most powerful Yoruba states.

### The Establishment of Ibadan as a Military War Camp
In **1824**, Ibadan was founded as a refuge for warriors and displaced people after the fall of Oyo-Ile. It quickly became a strategic military base, attracting a diverse group of Yoruba warriors. Unlike many other Yoruba states, Ibadan's leadership was not hereditary; rather, it was based on a **military meritocracy**, where the most experienced warriors rose to power.

### Ibadan's Political and Military Rise
Throughout the mid-19th century, Ibadan established itself as a dominant force in the region, engaging in wars that expanded its influence. The city became a crucial player in the **Yoruba Civil Wars**, battling rivals such as Ijaye and the Egba people of Abeokuta. The famous war leader **Balogun Ibikunle** led many successful campaigns, solidifying Ibadan's status as an empire.

### Relations with the Oyo Empire and Other Yoruba States
Despite its military dominance, Ibadan maintained a complex relationship with other Yoruba polities. The city often operated as an independent entity but was still seen as part of the Oyo cultural and political sphere.

### British Colonization and Governance Changes
In **1893**, Ibadan formally came under British colonial rule, marking a turning point in its governance structure. The British introduced a new administrative system that significantly reduced the influence of the traditional war chiefs, replacing their authority with colonial-appointed officials. This transition had long-term effects on Ibadan's governance, ultimately shaping the Olubadan system as it exists today.

### Conclusion
The transformation of Ibadan from a war camp into an empire and then a colonial administrative center is a testament to its resilience and adaptability. This publication sheds light on the city's historical evolution and its enduring significance in Yoruba history.`,
    coverImage:  "/images/ibadan-history.jpg",
    date: "1820s",
    category: "foundational-histories",
    pdfUrl: "TEST PUBLICATION.pdf",
    keywords: ["Ibadan", "Oyo Empire", "Yoruba Civil Wars", "Governance", "Colonial Rule", "Traditional Leadership"],
    locations: [
      {
        name: "Olubadan Palace",
        coordinates: { x: 45, y: 55 },
        description: "The seat of Ibadan's traditional rulers, established during the city's rise to power."
      },
      {
        name: "Old Oyo Empire",
        coordinates: { x: 42, y: 35 },
        description: "The former capital of the Oyo Empire, which heavily influenced Ibadan's governance."
      }
    ],
    timelineEvents: [
      {
        id: "1824-establishment",
        year: 1824,
        title: "Establishment of Ibadan as a War Camp",
        description: "Following the collapse of Oyo, refugees and warriors established Ibadan as a strategic military base.",
        link: "/publications/ibadan-history"
      },
      {
        id: "1893-colonization",
        year: 1893,
        title: "British Colonization of Ibadan",
        description: "The British imposed indirect rule, reducing the power of Ibadan's traditional war chiefs.",
        link: "/publications/ibadan-history"
      }
    ],
    citations: {
      apa: "Tomori, L. (2025). Ibadan History from the Sixteenth Century. Historical Archives.",
      mla: "Tomori, Lola. Ibadan History from the Sixteenth Century. Historical Archives, 2025.",
      chicago: "Tomori, Lola. Ibadan History from the Sixteenth Century. Historical Archives, 2025."
    }
  },
  {
    id: 2,
    title: "The Dynamics of Honour in Violence and Chieftaincy Politics in Ibadan History",
    abstract: "This work examines the cultural and political practices of honor in Ibadan, focusing on the historical significance of suicide as a means of preserving personal and family dignity, and the role of warriors and chiefs in shaping Ibadan's history. The document analyzes key events such as politically motivated suicides, chieftaincy conflicts, and the complex social dynamics surrounding traditional governance.",
    content: `### Power and Honour in Ibadan Society
The concept of honor in Ibadan has historically been tied to self-esteem and societal respect. Politically motivated suicides among chiefs served as a mechanism to preserve dignity, even in death, amid the fierce power struggles and colonial interference.

### Notable Suicides and Historical Context
Several significant suicides shaped Ibadan's history:
- Chief Lakanle (1855), Otun Are Ona-Kakanfo, who chose death during a succession dispute.
- Chief Aiyejenku (1877), a war veteran who stood against Are Latosa's policies.
- Seriki Iyapo (1877), who demonstrated ultimate loyalty to his family's honor by committing suicide.

These acts illustrate the intricate balance between personal honor and political survival.

### Warrior Culture and Leadership Conflicts
The warrior ethos defined Ibadan's leadership. Conflicts such as Elepo's tragedy highlight the betrayals, power struggles, and loyalty challenges that shaped the city's governance and military tactics.

### Traditional Governance and Power Structure
Ibadan's governance was characterized by a blend of military and civil authority, with positions like Baale and Balogun being central. The promotion system based on meritocracy often led to intense rivalries, as seen in the cases of chiefs like Balogun Ajayi Osungbekun and Balogun Ajobo.

### Conclusion
The historical dynamics of honor and violence reveal the resilience of Ibadan's political structures. This publication sheds light on how traditional practices of governance influenced modern systems and the city's unique cultural identity.`,
    coverImage: "/images/Honor-in-Violence.jpg",
    date: "2025",
    category: "governance",
    pdfUrl: "THE DYNAMICS OF HONOUR IN VIOLENCE.pdf",
    keywords: ["Ibadan", "Chieftaincy Politics", "Honor", "Warrior Culture", "Colonial Rule", "Traditional Governance"],
    locations: [
      {
        name: "Oluyole Compound",
        coordinates: { x: 45, y: 55 },
        description: "Home of Basorun Oluyole, a central figure in Ibadan's governance and military history."
      },
      {
        name: "Ijaye",
        coordinates: { x: 42, y: 35 },
        description: "Key location in Ibadan's chieftaincy conflicts, associated with Elepo and Kurunmi."
      }
    ],
    timelineEvents: [
      {
        id: "1830-lakanle",
        year: 1830,
        title: "Chief Lakanle's Political Suicide",
        description: "The Otun Are Ona-Kakanfo committed suicide to preserve honor amid a succession crisis.",
        link: "/publications/dynamics-of-honour"
      },
      {
        id: "1877-aiyejenku",
        year: 1877,
        title: "Chief Aiyejenku's Resistance and Suicide",
        description: "Chief Aiyejenku took his own life after opposing Are Latosa's policies, leaving a legacy of courage.",
        link: "/publications/dynamics-of-honour"
      },
      {
        id: "1893-british-governance",
        year: 1893,
        title: "Transition of Governance under British Influence",
        description: "The British began implementing changes that disrupted traditional power structures.",
        link: "/publications/dynamics-of-honour"
      }
    ],
    citations: {
      apa: "Tomori, M. A. (2025). The Dynamics of Honour in Violence and Chieftaincy Politics in Ibadan History. Ibadan: Macos Consultancy.",
      mla: "Tomori, M. A. The Dynamics of Honour in Violence and Chieftaincy Politics in Ibadan History. Ibadan: Macos Consultancy, 2025.",
      chicago: "Tomori, M. A. 2025. The Dynamics of Honour in Violence and Chieftaincy Politics in Ibadan History. Ibadan: Macos Consultancy."
    }
  },
  {
    id: 3,
    title: "THE PLACE OF OLUWO LABOSINDE IN IBADAN HISTORY",
    abstract: "This publication explores the role of Labosinde, a legendary Ife war chief who played a crucial role in the formation of Ibadan as a powerful Yoruba city-state. It delves into his contributions to military strategy, governance, and cultural heritage, particularly his influence in traditional chieftaincy politics. The document examines Ibadan's historical evolution, from the early settlements influenced by Ife warriors to its transformation into a major Yoruba power center. Labosinde's impact on war leadership, administration, and his role as the Babasale (chief advisor) is highlighted.",
    content: `### Introduction
Ibadan's transformation from a war camp into a powerful city-state is deeply tied to its military history and leadership structures. Among the key figures that shaped Ibadan's governance and military success was Labosinde, a warrior from Ife who later became a respected leader in Ibadan.

### Labosinde as a War Hero
Labosinde was an influential Ife war-chief who played a crucial role in the establishment of the second Ibadan settlement at Oriyangi. He was known for his strategic military leadership and political wisdom. His four children—Faeso, Mosadogun, Onifade, and Moyinope—later became prominent figures in Ibadan.

### The Military Influence of Labosinde
Labosinde's military career was shaped by the Owu Wars (1814-1820), where he joined the Ife army against the Owu kingdom. His strategic alliances led him to Ibadan, where he helped form the war camp that later evolved into the dominant Yoruba city-state.

### Governance and the Role of Babasale
As Babasale of Ibadan, Labosinde held the only civil title in the warrior hierarchy. Unlike other warlords, he played a mediator role, ensuring peace among the warring factions. His ability to prevent conflicts earned him the nickname "Baba mbo" (father is coming), a phrase used to de-escalate violent confrontations.

### Labosinde's Impact on Ibadan's Power Structure
His contributions to Ibadan's chieftaincy system include:
- Holding the title of Oluwo, the custodian of Ibadan's war staff.
- Being instrumental in shaping Ibadan's war leadership transition.
- Establishing Labosinde Market, which became a major trade hub.

### Conclusion
Labosinde's legacy remains deeply embedded in Ibadan's history. His descendants continued to hold the Oluwo title, serving as custodians of traditional power. His contributions to war leadership and governance positioned Ibadan as the dominant Yoruba military force of its era.`,
    coverImage: "/images/labosinde.jpg",
    date: "2016",
    category: "governance",
    pdfUrl: "THE PLACE OF LABOSINDE.pdf",
    keywords: ["Labosinde", "Ibadan", "War Chiefs", "Babasale", "Oluwo", "Military Leadership", "Traditional Governance"],
    locations: [
      {
        name: "Oluwo Compound",
        coordinates: { x: 45, y: 55 },
        description: "The compound of the Oluwo, home to the custodians of the Ibadan War Staff."
      },
      {
        name: "Labosinde Market",
        coordinates: { x: 42, y: 35 },
        description: "A major trade hub named in honor of Labosinde's contributions to Ibadan."
      }
    ],
    timelineEvents: [
      {
        id: "1814-owu-wars",
        year: 1814,
        title: "The Owu Wars Begin",
        description: "Labosinde joins the Ife army in the battle against Owu, setting the stage for his leadership in Ibadan.",
        link: "/publications/the-place-of-labosinde"
      },
      {
        id: "1825-oriyangi",
        year: 1825,
        title: "Ibadan's Second Settlement at Oriyangi",
        description: "Labosinde helps establish Ibadan as a military outpost following the destruction of Eleyele Hill settlement.",
        link: "/publications/the-place-of-labosinde"
      },
      {
        id: "1850-babasale",
        year: 1850,
        title: "Labosinde Becomes Babasale of Ibadan",
        description: "Labosinde is honored with the civil title of Babasale, acting as the chief advisor and mediator among warriors.",
        link: "/publications/the-place-of-labosinde"
      }
    ],
    citations: {
      apa: "Tomori, M. A. (2016). The Place of Labosinde in Ibadan History. Macos Urban Management Consultants.",
      mla: "Tomori, Moshood A. The Place of Labosinde in Ibadan History. Macos Urban Management Consultants, 2016.",
      chicago: "Tomori, Moshood A. The Place of Labosinde in Ibadan History. Macos Urban Management Consultants, 2016."
    }
  },
  {
    id: 4,
    title: "Olubadan's Unique Position in Yoruba Traditional History",
    abstract: "This publication delves into the exceptional role of the Olubadan within Yoruba traditional history. It highlights the unique, merit-based ascension system of the Olubadan chieftaincy, tracing its origins and its enduring significance in Yoruba cultural and political governance. Through detailed historical analysis, the work offers insights into the social, political, and cultural structures that have preserved this institution over centuries.",
    content: `### Introduction
The Olubadan of Ibadan holds a unique and revered position in Yoruba traditional history. Unlike many other chieftaincy titles in Yorubaland, the Olubadan system is rooted in a meritocratic ascension process, making it one of the most democratic chieftaincy systems in Nigeria. This publication explores the origins, structure, and cultural significance of the Olubadan institution.

### Historical Foundations
The title of Olubadan dates back centuries, originating as a unifying leadership position in the war-driven and politically dynamic landscape of 19th-century Yorubaland. Ibadan, originally a war camp, required a stable and inclusive governance structure to manage its growing population and complex social dynamics. The Olubadan institution emerged as a solution, balancing military leadership with civil governance.

### Merit-Based Ascension
One of the defining features of the Olubadan system is its merit-based ascension process. Unlike hereditary titles, individuals climb through two hierarchical lines: the civil (Otun) line and the military (Balogun) line. Progression is based on seniority and contributions to the community, ensuring that the most experienced and respected individuals ascend to the throne.

### Cultural and Political Significance
The Olubadan institution plays a critical role in preserving Yoruba customs and traditions. As a custodian of Ibadan's history and culture, the Olubadan oversees traditional ceremonies, conflict resolution, and the administration of customary laws. Additionally, the institution serves as a bridge between traditional governance and modern political systems.

### Contemporary Relevance
Despite the advent of modern governance, the Olubadan institution remains relevant in contemporary society. It symbolizes unity, cultural pride, and continuity, attracting respect and recognition both locally and internationally. The meritocratic nature of the system has also become a model for transparent and inclusive leadership.

### Conclusion
The Olubadan's unique position in Yoruba traditional history underscores the resilience and adaptability of indigenous governance systems. By combining historical depth with cultural significance, this publication sheds light on the enduring legacy of the Olubadan institution and its pivotal role in Yoruba culture.`,
    coverImage: "/images/Olubadan-Palace.jpg",
    date: "2025",
    category: "governance",
    pdfUrl: "OLUBADAN'S UNIQUE POSITION IN YORUBA TRADITIONAL HISTORY.pdf",
    keywords: ["Olubadan", "Ibadan", "Yoruba Traditional Governance", "Meritocracy", "Chieftaincy System", "Cultural Heritage"],
    locations: [
      {
        name: "Olubadan Palace",
        coordinates: { x: 45, y: 55 },
        description: "The official residence of the Olubadan, symbolizing traditional leadership in Ibadan."
      }
    ],
    timelineEvents: [
      {
        id: "1829-olubadan-institution",
        year: 1829,
        title: "Establishment of the Olubadan Institution",
        description: "The Olubadan institution was formalized to unify and govern the growing city of Ibadan.",
        link: "/publications/olubadan-unique-position"
      },
      {
        id: "1930-ascension-system",
        year: 1930,
        title: "Codification of the Olubadan Ascension System",
        description: "The hierarchical ascension process was formally documented, preserving its meritocratic nature.",
        link: "/publications/olubadan-unique-position"
      }
    ],
    citations: {
      apa: "Tomori, M. A. (2025). Olubadan's Unique Position in Yoruba Traditional History. Ibadan: Macos Urban Management Consultants.",
      mla: "Tomori, Moshood A. Olubadan's Unique Position in Yoruba Traditional History. Ibadan: Macos Urban Management Consultants, 2025.",
      chicago: "Tomori, Moshood A. Olubadan's Unique Position in Yoruba Traditional History. Ibadan: Macos Urban Management Consultants, 2025."
    }
  }
];

export default function PublicationsList() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#064635] mb-8">Publications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <Link
              key={pub.id}
              to={`/publications/${pub.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center">
                    <BookMarked className="h-4 w-4 mr-1" />
                    <span className="capitalize">{pub.category.replace('-', ' ')}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-[#064635] mb-3 group-hover:text-[#D4AF37] transition">
                  {pub.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {pub.abstract}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}