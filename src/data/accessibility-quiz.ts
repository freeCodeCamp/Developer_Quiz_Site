const accessibilityQuiz = [
  {
    Question:
      "What are the four principles under the Web Content Accessibility Guidelines (WCAG) 2.0?",
    Answer: "Perceivable, Operable, Understandable, and Robust",
    Distractor1: "Comprehensible, Thorough, Detectable, and Configurable",
    Distractor2: "Justifiable, Clear, Permissable, and Simple",
    Distractor3: "Fundamental, Executable, Meaningful, and Useable",
    Explanation:
      "These principles help contextualize different areas of accessibility, as defined by the WCAG 2.0.",
    Link: "https://www.w3.org/TR/WCAG20/#guidelines",
  },
  {
    Question:
      "What is the highest conformance level under the Web Content Accessibility Guidelines (WCAG) 2.0?",
    Answer: "AAA",
    Distractor1: "A",
    Distractor2: "5",
    Distractor3: "3",
    Explanation:
      "While 'AAA' is the highest WCAG 2.0 conformance level, it is not required as a general policy because not all content can satisfy all AAA success criteria.",
    Link: "https://www.w3.org/WAI/WCAG2A-Conformance",
  },
  {
    Question:
      "In general, what is the minimum contrast ratio for text and images of text under the Web Content Accessibility Guidelines (WCAG) 2.0 conformance level AA?",
    Answer: "4.5:1",
    Distractor1: "2:1",
    Distractor2: "14:1",
    Distractor3: "40:1",
    Explanation:
      "A 4.5:1 contrast ratio helps ensure that users with moderately low vision are still able to read text.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
  },
  {
    Question:
      "What additional HTML element should be added and associated to <input> form fields to add accessibility for screen readers?",
    Answer: "<label>",
    Distractor1: "<name>",
    Distractor2: "<spec>",
    Distractor3: "<screen>",
    Explanation:
      "Adding an associated <label> element for <input> form fields will provide valuable focus information to screen readers.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/",
  },
  {
    Question:
      "Which attribute makes images accessible for people using screen readers?",
    Answer: "alt",
    Distractor1: "desc",
    Distractor2: "img",
    Distractor3: "src",
    Explanation:
      "The alt attribute provides short descriptive text for images and the text is read aloud by a screen reader.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/",
  },
  {
    Question: "What are web accessibility evaluation tools?",
    Answer:
      "Software programs or online services that help determine if web content meets accessibility standards.",
    Distractor1: "Tools that help determine if unit tests are well written.",
    Distractor2:
      "Software programs that help determine if a website is secure.",
    Distractor3:
      "Online services that help determine if customer satisfaction is high.",
    Explanation:
      "Web accessibility evaluation tools are programs used to ensure that software adheres to accessibility guidelines as laid out by the W3C.",
    Link: "https://www.w3.org/WAI/test-evaluate/tools/",
  },
  {
    Question: "What is web accessibility?",
    Answer: "the practice of building websites that are usable by everyone",
    Distractor1: "a new JavaScript framework",
    Distractor2: "a sorting algorithm",
    Distractor3: "a type of programming paradigm",
    Explanation:
      "Web accessibility means building websites that are usable by as many people as possible.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/",
  },
  {
    Question:
      "Which of the following HTML elements can improve the accessibility for your website?",
    Answer: "<section>",
    Distractor1: "<div>",
    Distractor2: "<span>",
    Distractor3: "<head>",
    Explanation:
      "The section element holds semantic meaning and defines sections within the HTML document.",
    Link: "https://www.freecodecamp.org/news/semantic-html5-elements/",
  },
  {
    Question:
      "Which of the following is a good reason to have a strong contrast ratio between foreground and background colors?",
    Answer:
      "people with moderately low vision can read and access the website contents.",
    Distractor1: "a good contrast ratio will improve the entire web design.",
    Distractor2:
      "secreen readers can distinguish better between foreground and background colors",
    Distractor3:
      "a good contrast ratio will improve website performance and SEO.",
    Explanation:
      "Websites that have a strong contrast ratio between background and foreground colors will allow people with low vision to better access and read the website content.",
    Link: "https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background",
  },
  {
    Question:
      "How does adding a `lang` attribute to a webpage's `html` element help with accessibility?",
    Answer: "It helps screen readers in identifying the language of the page",
    Distractor1: "It helps Google Translate to translate the page",
    Distractor2: "It helps the page to display the correct font",
    Distractor3: "It helps the page to rank with search engines",
    Explanation:
      "It's important to indicate the language of the page because screen readers use the document language to know how to pronounce the words on the page.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/#add-missing-document-language",
  },
  {
    Question: "When a website complies with Level AA of conformance, which of these levels will already be compatible?",
    Answer: "Level A",
    Distractor1: "Level AAA",
    Distractor2: "Level AA and Level AAA",
    Distractor3: "Level AAA and Level A",
    Explanation:
      "WCAG Levels are backwards compatible. If a website complies with Level AAA, then it also complies with the requirements of Level AA and Level A.",
    Link: "https://www.freecodecamp.org/news/pragmatic-rules-of-web-accessibility-that-will-stick-to-your-mind-9d3eb85a1a28/",
  },
];

export default accessibilityQuiz;
