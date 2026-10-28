export const person = {
  short: "Chakri",
  full: "Siva Prasad Chakri Dhanakoti",
  // assembled in the browser (see Contact.jsx), so the address is not sitting in the page as plain text
  emailUser: "chekri.dsp",
  emailHost: "gmail.com",
};

export const links = {
  trento: "https://www.unitn.it",
  dalCorso: "https://dalcorso.dicam.unitn.it",
  bigoni: "https://bigoni.dicam.unitn.it",
  fu: "https://www.fu-berlin.de",
  maddocks: "https://people.epfl.ch/john.maddocks?lang=fr",
};

export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/chekri" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sp-chakri-dhanakoti-b9220585/" },
  { id: "orcid", label: "ORCID", href: "https://orcid.org/0000-0001-8346-4289" },
];

/* `page: true` entries open their own page instead of scrolling to a section */
export const nav = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "cv", label: "Curriculum Vita" },
  { id: "learning", label: "Learning" },
  { id: "beyond", label: "Beyond Research", page: true },
  { id: "contact", label: "Contact" },
];

export const research = {
  interests: [
    { label: "Calculus of Variations", icon: "variations" },
    { label: "Solid Mechanics", icon: "beam" },
    { label: "Nonlinear Dynamics", icon: "wave" },
    { label: "Optimization and Numerical Methods", icon: "optimize" },
    { label: "Instabilities", icon: "hill" },
    { label: "Bifurcation theory", icon: "fork" },
  ],
  focus: [
    { badge: "Now", label: "Current Research", text: "The dynamics of slender structures/architected structures.", keywords: "Dynamics, Vibrations, Non-local elasticity" },
    { badge: "2018 – 2023", label: "PhD Research", text: "3D slender structures and instabilities.", keywords: "Snap-back instability, Quaternions, Optimal control" },
  ],
};

export const cv = {
  personal: { nationality: "Indian", languages: "Telugu, English, German" },
  education: [
    {
      years: "2018 – 2023",
      degree: "Ph.D. in Mathematics",
      school: "Freie Universität Berlin",
      url: links.fu,
      place: "Berlin, Germany",
      focus: "Calculus of Variations, Elastic Rods, Optimal Control, Parameter Continuation, Numerical Methods",
      advisors: "Prof. John Maddocks, Dr. Martin Weiser",
      showThesis: true,
    },
    {
      years: "2017 – 2018",
      degree: "Master’s in Physics of Complex Systems",
      school: "University of Paris Cité",
      place: "Paris, France",
      focus: "Elastic structures, Nonlinear Dynamics",
      advisors: "Prof. Sebastien Neukirch, Prof. Arnaud Lazarus",
    },
    {
      years: "2016 – 2017",
      degree: "Master’s in Multi-Physics & Multi-Scale Modelling of Materials and Structures",
      school: "École Polytechnique / University of Paris-Saclay",
      place: "Palaiseau, France",
      focus: "Elasticity, Multi-physics coupling, Bifurcation theory",
      advisors: "Prof. TJ Healey",
    },
    {
      years: "2009 – 2013",
      degree: "Bachelor of Technology in Mechanical Engineering",
      school: "IIT Madras",
      place: "Chennai, India",
    },
  ],
};

export const learning = {
  intro:
    "As a life long learner, I am always keen in learning topics in Mathematics and explore its applications in Mechanics. This list is not exhaustive and continues to grow.",
  topics: [
    { label: "Port-Hamiltonian systems", eq: "ẋ = (J − R)∇H + Bu" },
    { label: "Gamma-Convergence", eq: "Γ-lim Fₙ = F" },
    { label: "Group-theoretic approaches in Mechanics", eq: "G ↷ M" },
  ],
};

/* "Other interests", rephrased. Original: running, playing cricket, observing nature, sometimes painting. */
export const beyond = {
  intro: "Away from the desk, I like to run, play cricket and watch nature closely. Every so often I also try my hand at painting.",
  items: ["Running", "Cricket", "Observing nature", "Painting"],
};

/* PHOTOGRAPHY: copy images into public/images/photos/ and list them here, for example:
   { src: "images/photos/sunrise.jpg", alt: "Sunrise over a lake", caption: "Sunrise, Trento" }
   While this list is empty, the Beyond Research page shows placeholder frames. */
export const photos = [];

export const publications = [
  {
    fig: "fold",
    authors: "S. P. Chakri Dhanakoti",
    title: "Stability analysis through folds: an end-loaded elastica with a lever arm.",
    venue: "Proceedings of the Royal Society A (2025), 481(2325): 20250148.",
    links: [
      { label: "Journal", href: "https://doi.org/10.1098/rspa.2025.0148" },
      { label: "Preprint", href: "https://doi.org/10.48550/arXiv.2501.04729" },
    ],
  },
  {
    fig: "cantilever",
    authors: "S. P. Chakri Dhanakoti",
    title: "Stability of cantilever-like structures with applications to soft robot arms.",
    venue: "Proceedings of the Royal Society A (2025), 481(2312): 20240561.",
    links: [
      { label: "Journal", href: "https://doi.org/10.1098/rspa.2024.0561" },
      { label: "Preprint", href: "https://doi.org/10.48550/arXiv.2407.07601" },
    ],
  },
  {
    fig: "tubes",
    authors: "S. P. Chakri Dhanakoti, J. Maddocks, and M. Weiser",
    title: "Navigation of Concentric Tube Continuum Robots using Optimal Control.",
    venue: "ICINCO (2022), pp. 146–154.",
    links: [{ label: "Proceedings", href: "https://www.scitepress.org/Link.aspx?doi=10.5220/0011271000003271" }],
  },
];

export const theses = [
  {
    fig: "rod",
    title:
      "Study of Intrinsically Curved Elastic Rods Under External Loads With Applications to Concentric Tube Continuum Robots and Their Control.",
    links: [
      {
        label: "Thesis",
        href: "https://refubium.fu-berlin.de/bitstream/handle/fub188/42994/Dissertation_Siva_Prasad_Chakri_Dhanakoti.pdf?sequence=3&isAllowed=y",
      },
    ],
  },
];

export const talks = [
  { title: "Dynamics of origami-like microstructured elastic rods", event: "NHISMEH 2025", year: "2025", place: "Lucca, Italy" },
  { title: "Snapping of a soft-robotic arm", event: "ESMC 2022", year: "2022", place: "Galway, Ireland" },
  { title: "Navigation of Concentric Tube Continuum Robots using Optimal Control", event: "ICINCO 2022", year: "2022", place: "Lisbon, Portugal" },
];
