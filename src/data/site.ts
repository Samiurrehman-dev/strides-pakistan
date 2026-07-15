export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Courses", href: "/courses" },
  { label: "Publications", href: "/publications" },
  { label: "Cooperation", href: "/cooperation" },
];

export const researchAreas = [
  {
    number: "01",
    icon: "shield",
    title: "Defence & Strategic Studies",
    description:
      "Military strategy, deterrence, national security, force posture, strategic stability, crisis management and regional conflict analysis.",
  },
  {
    number: "02",
    icon: "bolt",
    title: "Emerging Security Threats",
    description:
      "Hybrid warfare, grey-zone competition, drones, missile threats, electronic warfare, asymmetric operations and security resilience.",
  },
  {
    number: "03",
    icon: "cpu",
    title: "AI, Cyber & Information Warfare",
    description:
      "AI-enabled conflict, cyber operations, digital security, disinformation, cognitive warfare, data-driven defence and future warfare technologies.",
  },
  {
    number: "04",
    icon: "waves",
    title: "Maritime & Border Security",
    description:
      "Ports, coastlines, sea lanes, chokepoints, shipping security, Indian Ocean risks, border defence and regional connectivity.",
  },
  {
    number: "05",
    icon: "globe",
    title: "Geopolitics & Regional Affairs",
    description:
      "South Asia, the Middle East, China–Pakistan relations, strategic partnerships, great-power competition and regional security trends.",
  },
  {
    number: "06",
    icon: "academic",
    title: "Security Education & Training",
    description:
      "Professional military education, strategic communication, leadership, simulations, policy writing and capacity-building models.",
  },
];

export const courses = [
  {
    number: "01",
    title: "Defence Strategy & National Security",
    description:
      "Strategic thought, national security architecture, defence policy and crisis decision-making.",
  },
  {
    number: "02",
    title: "Geopolitics & Regional Security",
    description:
      "South Asia, the Middle East, China–Pakistan relations, great-power competition and regional risk.",
  },
  {
    number: "03",
    title: "Hybrid Warfare & Emerging Threats",
    description:
      "Grey-zone conflict, drone warfare, missiles, proxies, psychological operations and resilience.",
  },
  {
    number: "04",
    title: "AI in Defence and Security",
    description:
      "AI-enabled decision support, surveillance, targeting ethics, command systems and future warfare.",
  },
  {
    number: "05",
    title: "Cyber Security & Information Warfare",
    description:
      "Cyber risk, digital security, disinformation, social media influence and cognitive threats.",
  },
  {
    number: "06",
    title: "Electronic Warfare & Future Battlefield",
    description:
      "EW fundamentals, spectrum awareness, communications vulnerabilities and modern battlefield trends.",
  },
  {
    number: "07",
    title: "Maritime Security & Chokepoint Risk",
    description:
      "Indian Ocean security, ports, shipping, chokepoints, piracy, energy security and maritime governance.",
  },
  {
    number: "08",
    title: "Policy Writing & Strategic Analysis",
    description:
      "Policy briefs, analytical writing, executive summaries, evidence framing and strategic communication.",
  },
];

export const publications = [
  {
    type: "Policy Brief",
    title: "AI and the Future of Warfare: Implications for South Asia",
  },
  {
    type: "Research Paper",
    title: "Hybrid Threats and National Resilience in the Digital Era",
  },
  {
    type: "Maritime Security",
    title: "Chokepoint Risk and Energy Security in the Indian Ocean Region",
  },
  {
    type: "Security Alert",
    title: "Drone Warfare, Missile Defence and Border Security Trends",
  },
];

export const cooperationOptions = [
  ["Research Grants", "Funded policy briefs and reports", "Open-source studies on cyber awareness, AI risks, hybrid threats, maritime safety, crisis preparedness and regional security."],
  ["Training Support", "Scholarships and sponsored courses", "Fund seats for students, young researchers, journalists, civil society members and public-sector professionals."],
  ["Dialogue Programs", "Conferences and expert roundtables", "Sponsor seminars, webinars, international lectures, policy labs and academic dialogue."],
  ["Digital Resilience", "Cyber and media-literacy projects", "Develop public awareness programs on disinformation, cyber hygiene, AI misuse and digital security culture."],
  ["Maritime & Coastal Safety", "Community awareness initiatives", "Support education on port safety, maritime security awareness, coastal resilience and emergency preparedness."],
  ["Youth Development", "Young scholars and fellows program", "Provide fellowships, internships, writing mentorship and policy-research competitions for young Pakistanis."],
  ["Publications", "Open-access knowledge products", "Support reports, course readers, issue briefs, newsletters, translations and accessible public education material."],
  ["Technology Support", "Digital library and research tools", "Provide access to databases, software, webinar tools, data visualization platforms and research infrastructure."],
  ["Institutional Growth", "Capacity-building for STRIDES", "Support governance systems, monitoring and evaluation, outreach and transparent reporting."],
] as const;

export const partnerCategories = [
  ["International NGOs", "Peace, resilience, media literacy, cyber awareness, youth education and community safety programs."],
  ["Foundations", "Research grants, scholarships, publications, fellowships and public policy education."],
  ["Universities", "Joint research, visiting experts, student exchanges, workshops and certificate programs."],
  ["Think Tanks", "Joint reports, conferences, policy dialogue, expert networks and comparative studies."],
  ["UN & Development Partners", "Resilience, disaster preparedness, youth development, peace education and capacity-building themes."],
  ["Cyber & Technology NGOs", "Cyber hygiene, AI safety, digital resilience and responsible technology awareness."],
  ["Maritime Organizations", "Maritime safety, port security awareness, coastal community resilience and blue economy security."],
  ["Corporate CSR Partners", "Training sponsorships, youth programs, digital labs, events and publication support."],
] as const;
