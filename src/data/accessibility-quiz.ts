const accessibilityQuiz = [
  {
    Question: "What does ASAP mean in the context of accessibility?",
    Answer: "As Semantic As Possible",
    Distractor1: "As Soon As Possible",
    Distractor2: "Automated System Application Protocol",
    Distractor3: "Advanced Syntax Application Programming",
    Explanation:
      "In the context of web development, ASAP stands for 'As Semantic As Possible', emphasizing the importance of semantic markup for accessibility and SEO.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question: "How does 'focus management' contribute to web accessibility?",
    Answer:
      "It ensures keyboard and screen reader users can navigate content in a logical order",
    Distractor1: "It designs web forms",
    Distractor2: "It provides navigation menus",
    Distractor3: "It adds pop-up ads",
    Explanation: "Focus management is essential for a smooth user experience.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What is the primary goal of web accessibility?",
    Answer:
      "To make websites usable by as many people as possible, regardless of disabilities",
    Distractor1: "To increase web traffic",
    Distractor2: "To enhance website appearance",
    Distractor3: "To block access for certain users",
    Explanation:
      "Web accessibility is the practice of ensuring that websites can be used effectively by individuals with disabilities, aiming to provide an inclusive and equitable online experience.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question:
      "Why is it important to provide textual alternatives for non-text content in web accessibility?",
    Answer:
      "To ensure users with disabilities can access and understand content",
    Distractor1: "To improve search engine rankings",
    Distractor2: "To speed up website loading times",
    Distractor3: "To add visual effects",
    Explanation: "Textual alternatives are crucial for accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "Why is 'keyboard navigation' important in web accessibility?",
    Answer: "It helps users navigate a website using keyboard keys",
    Distractor1: "It enhances page design",
    Distractor2: "It increases loading speed",
    Distractor3: "It adds background music",
    Explanation:
      "Keyboard navigation allows users with mobility issues to browse a website efficiently.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question:
      "What does 'text alternatives' for non-text content provide in web accessibility?",
    Answer: "Ensures users with disabilities can access and understand content",
    Distractor1: "Improves search engine rankings",
    Distractor2: "Speeds up website loading times",
    Distractor3: "Adds visual effects",
    Explanation: "Text alternatives are essential for accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What are the landmarks in web accessibility?",
    Answer: "Structure",
    Distractor1: "Images",
    Distractor2: "Audio",
    Distractor3: "Video",
    Explanation:
      "Landmarks provide a structural outline for web content, making it more accessible.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "How does layout structure contribute to web accessibility?",
    Answer: "Organization",
    Distractor1: "Fonts",
    Distractor2: "Colors",
    Distractor3: "Multimedia",
    Explanation:
      "A clear layout structure enhances the user experience for all, including those with disabilities.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid"
  },
  {
    Question: "What is the minimum font size recommended for accessibility?",
    Answer: "16px",
    Distractor1: "10px",
    Distractor2: "14px",
    Distractor3: "18px",
    Explanation:
      "A font size of 16px or 12pt is considered a good practice for accessibility.",
    Link: "https://www.freecodecamp.org/news/how-to-change-text-size-in-html"
  },
  {
    Question: "How does semantic HTML contribute to web accessibility?",
    Answer: "Clarity",
    Distractor1: "Interactivity",
    Distractor2: "Animation",
    Distractor3: "Multimedia",
    Explanation:
      "Semantic HTML tags provide clear and meaningful structure to web content.",
    Link: "https://webaim.org/techniques/semanticstructure"
  },
  {
    Question: "What is the role of a label in accessibility?",
    Answer: "Identification",
    Distractor1: "Navigation",
    Distractor2: "Animation",
    Distractor3: "Color",
    Explanation:
      "Labels help users identify form fields, buttons, and other interactive elements.",
    Link: "https://www.freecodecamp.org/news/html-label-label-tag-example"
  },
  {
    Question: "How do buttons enhance web accessibility?",
    Answer: "Interaction",
    Distractor1: "Navigation",
    Distractor2: "Layout",
    Distractor3: "Multimedia",
    Explanation:
      "Buttons provide interactive elements that are essential for accessibility.",
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website"
  },
  {
    Question:
      "Which of the following is NOT one of the default landmark roles?",
    Answer: "nav",
    Distractor1: "complementary",
    Distractor2: "contentinfo",
    Distractor3: "form",
    Explanation:
      "The <nav> element is a semantic HTML element with a corresponding default landmark role of role='navigation'.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html"
  },
  {
    Question:
      "What do you need to consider when using more than one <main> landmark in your code?",
    Answer: "That each <main> landmark has a unique label.",
    Distractor1: "You do not have to consider something specific.",
    Distractor2: "It is not allowed to have two <main> landmarks.",
    Distractor3: "That each <main> landmark has a unique id.",
    Explanation:
      "The <main> landmark contains the main content of the page. Even though it's rare to have more then one <main> landmark, it is possible. It is important for screen reader users to be able to differ between those landmarks. Therefore, a unique label should be added to each <main> landmark.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/main.html"
  },
  {
    Question:
      "Which of the following HTML elements uses the default landmark complementary?",
    Answer: "aside",
    Distractor1: "contentinfo",
    Distractor2: "section",
    Distractor3: "div",
    Explanation:
      "The semantic <aside> element uses the complementary landmark which is a supporting section of the document created to complement the main content.",
    Link: "https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/complementary.html"
  },
  {
    Question:
      "When did the World Wide Web Consortium first draft the set of standards for developing accessible websites?",
    Answer: "1999",
    Distractor1: "2001",
    Distractor2: "1990",
    Distractor3: "1989",
    Explanation:
      "The World Wide Web Consortium first drafted standards for developing accessible websites back in 1999.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following laws has brought accessibility issues to the forefront in recent years?",
    Answer: "The Americans with Disabilities Act",
    Distractor1: "The Internet Freedom Act",
    Distractor2: "The Web Accessibility Act",
    Distractor3: "The Digital Inclusion Law",
    Explanation:
      "The Americans with Disabilities Act (ADA) has brought web accessibility to the forefront by requiring public spaces and commercial facilities to provide equal access to individuals with disabilities, which now includes web-based activities due to legal rulings.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question: "Which of the following is NOT a benefit of web accessibility?",
    Answer: "Limited Audience Reach",
    Distractor1: "Higher Search Engine Rankings",
    Distractor2: "Inclusivity",
    Distractor3: "Improved User Experience",
    Explanation:
      "Making websites accessible broadens the audience reach rather than limiting it, ensuring that everyone, regardless of their abilities, can access the content online",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "When creating charts, what should be added so that color is not the only identifier to convey the meaning of the information?",
    Answer: "Patterns",
    Distractor1: "Hint Buttons",
    Distractor2: "Gradients",
    Distractor3:
      "There is no need to add an additional identifier, color is enough.",
    Explanation:
      "Colorblind and low vision users have difficulties to perceive the color differences. In addition, when the graph appears in greyscale (e.g. user settings, print), it is impossible to every user to see differences.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
  },
  {
    Question:
      "Why is it better for accessibility reasons to use relative units(em and rem) instead of absolute units(px)?",
    Answer:
      "With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.",
    Distractor1:
      "Absolute units like 'px' provide better control over the design's precise layout.",
    Distractor2:
      "Relative units like 'em' and 'rem' are only useful for text size, not layout.",
    Distractor3:
      "There is no significant difference between relative and absolute units in web design.",
    Explanation:
      "When you use px, the element's size remains constant regardless of the size of the screen. With 'em' and 'rem,' your design can adjust according to the user's chosen font size, making it more accessible and user-friendly.",
    Link: "https://www.freecodecamp.org/news/why-use-rem-to-set-font-size-in-css#what-are-relative-units-in-css"
  },
  {
    Question:
      "What role does the 'alt' attribute play when adding alternative text to images on a webpage?",
    Answer:
      "The 'alt' attribute describes the content of the image to users who cannot see it.",
    Distractor1: "The 'alt' attribute enhances image aesthetics.",
    Distractor2: "The 'alt' attribute speeds up image loading.",
    Distractor3:
      "The 'alt' attribute provides translations for the image content.",
    Explanation:
      "It's a tool to check accessibility properties of web elements.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "What is the purpose of the 'Chrome Accessibility Developer Tools' extension for Google Chrome?",
    Answer: "It's a tool to check accessibility properties of web elements.",
    Distractor1: "It's a tool to only fix color contrast errors",
    Distractor2: "It's a tool to only fix font size errors",
    Distractor3: "It's a tool to audit only keyboard accessibility errors",
    Explanation:
      "The extension aids in inspecting and ensuring web accessibility by providing relevant information in the Developer tools.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "As of 2023, which tool or extension allows you to find accessibility defects on your web page in both Chrome and Firefox?",
    Answer: "WAVE",
    Distractor1: "Color Oracle",
    Distractor2: "aXe",
    Distractor3: "ChromeVox",
    Explanation:
      "WAVE is an extension available for both Chrome and Firefox that helps identify accessibility issues on web pages.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is it important to add labels to form inputs like search forms?",
    Answer:
      "Labels indicate the purpose of form inputs and make them accessible to screen reader users.",
    Distractor1: "Labels improve website aesthetics.",
    Distractor2: "Labels increase website loading speed.",
    Distractor3: "Labels provide translations for form inputs.",
    Explanation:
      "Labels associated with form inputs, such as search forms, describe the purpose of the input, making it accessible to screen reader users.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "As of 2023, which screen reader is a Free & Open-source downloadable software for Windows OS?",
    Answer: "NVDA (Non Visual Desktop Access)",
    Distractor1: "JAWS (Job Access With Speech)",
    Distractor2: "ChromeVox",
    Distractor3: "a11yproject",
    Explanation:
      "NVDA is a free screen reader for Windows, making it accessible to a wide audience.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "What does the 'a11yproject' provide for web development, and what can you find on their site?",
    Answer:
      "It provides practical guides, examples, how-tos, myths, tips, and recommended accessibility tools.",
    Distractor1: "It provides a platform for game development",
    Distractor2: "It offers free stock images",
    Distractor3: "It is a social media network",
    Explanation:
      "The 'a11yproject' offers practical guides, examples, how-tos, myths, tips, and recommended accessibility tools for implementing accessible features and components during web development. It is a community-driven project that can be contributed to on Github. The 'a11yproject' is a valuable resource for web developers looking to enhance the accessibility of their projects.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Which tool allows you to check foreground and background color values for AA and AAA color contrast ratios for small and large text?",
    Answer: "WebAIM Color Contrast Checker",
    Distractor1: "Accessible Color Palette Builder",
    Distractor2: "Randoma11y Color Generator",
    Distractor3: "Check My Colours",
    Explanation:
      "The WebAIM Color Contrast Checker is a tool to verify color contrast which is a crucial aspect of web accessibility.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is web accessibility important for SEO (Search Engine Optimization)?",
    Answer:
      "It helps search engines understand and index website content better.",
    Distractor1: "It decreases website load times.",
    Distractor2: "It automatically improves website design.",
    Distractor3: "It increases advertising revenue.",
    Explanation:
      "Accessibility practices that make content understandable to screen readers also benefit search engines in understanding and indexing website content.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "Which accessibility issue is associated with buttons?",
    Answer: "lack of button text for screen reader users",
    Distractor1: "lack of background color",
    Distractor2: "lack of font color",
    Distractor3: "lack of border styles",
    Explanation:
      "Empty buttons that lack text for screen reader users are an accessibility issue.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "What is a common accessibility issue when it comes to forms?",
    Answer: "Missing form input labels",
    Distractor1: "Empty links",
    Distractor2: "to many labels and inputs",
    Distractor3: "Low contrast text",
    Explanation:
      "A form label is an HTML element used in forms to describe what the the various fields in the form are for. Without the label element, screen reader users will not know what the form is when they focus on it.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "What is the primary accessibility problem associated with low color contrast on a webpage?",
    Answer: "Low contrast text",
    Distractor1: "Broken links",
    Distractor2: "Empty buttons",
    Distractor3: "Missing document language",
    Explanation:
      "Low color contrast, specifically with text, leads to the accessibility problem of low contrast text.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question: "What is the purpose of the 'aria-labelledby' attribute in ARIA?",
    Answer:
      "To enable authors to reference other elements on the page to define an accessible name.",
    Distractor1: "To hide an element from screen readers",
    Distractor2: "To add a tooltip to an element",
    Distractor3: "To change the focus order of elements",
    Explanation:
      "The 'aria-labelledby' attribute specifies the element or elements responsible for providing labels to the element to which it is assigned.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby"
  },
  {
    Question:
      "What is the purpose of the 'aria-describedby' attribute in ARIA?",
    Answer: "To list the IDs of the elements that describe the object.",
    Distractor1: "To change the font size",
    Distractor2: "To add a border to an element",
    Distractor3: "To change the background color of an element",
    Explanation:
      "The aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/"
  },
  {
    Question:
      "What legal repercussions can businesses face for failing to meet website accessibility requirements?",
    Answer: "Businesses can face lawsuits or financial penalties",
    Distractor1: "no repercussions",
    Distractor2: "they will serve 10 years in jail",
    Distractor3: "they will do 2500 hours of community service",
    Explanation:
      "Businesses that fail to meet website accessibility requirements may face lawsuits, financial penalties, and damage to their reputation. Maintaining good accessibility standards is good for everyone in this digital age.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "According to the W3C, which of the following is not a valid guideline for crafting style sheets that enhance accessibility?",
    Answer: "Utilize the 'px' unit to define font sizes.",
    Distractor1: "Ensure there is always a fallback generic font",
    Distractor2: "Opt for numbers instead of names when specifying colors.",
    Distractor3:
      "Ensure consistent 'class' names for the same concept across all style sheets",
    Explanation:
      "For setting font sizes, use the 'em' unit and favor relative length units and percentages.",
    Link: "https://www.w3.org/WAI/GL/WD-WCAG10-TECHS-20000615/css-techniques.html#:~:text=Users%20should%20where%20necessary.,units%20even%20in%20absolute%20positioning."
  },
  {
    Question: "What is the purpose of the 'aria-expanded' attribute in ARIA?",
    Answer:
      "To indicate whether an element is open or closed when the visual indicator is not available",
    Distractor1: "To specify the font size of text on a webpage",
    Distractor2: "To apply a transition effect to an element's size",
    Distractor3: "To adjust the spacing between elements on a webpage",
    Explanation:
      "The 'aria-expanded' attribute conveys open or closed states for accessibility, aiding users when the visual indicator is not available.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded"
  },
  {
    Question: "What is the purpose of the 'aria-label' attribute in ARIA?",
    Answer:
      "To provide a text label for an element when the visible label is not present",
    Distractor1: "To change the background color of an element",
    Distractor2: "To add audio effects to an element",
    Distractor3: "To hide an element from screen readers",
    Explanation:
      "The 'aria-label' attribute is used to provide an accessible label for an element when the visible label is not sufficient.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"
  },
  {
    Question: "What is the purpose of the 'aria-live' attribute in ARIA?",
    Answer:
      "To specify when and how updates to content should be announced by screen readers",
    Distractor1: "To control the volume of audio elements on a webpage",
    Distractor2: "To change the font size of text",
    Distractor3: "To add video captions to multimedia content",
    Explanation:
      "The 'aria-live' attribute is used to control how and when updates to dynamic content are announced to screen reader users.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
  },
  {
    Question: "What is the purpose of 'role' attributes in ARIA?",
    Answer:
      "To define the function or purpose of an element for assistive technologies",
    Distractor1: "To specify the text color of an element",
    Distractor2: "To create hyperlinks on a webpage",
    Distractor3: "To apply CSS styles to an element",
    Explanation:
      "ARIA 'role' attributes help convey the semantic meaning and behavior of elements to assistive technologies.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-common-aria-mistakes-to-avoid/"
  },
  {
    Question: "What is the purpose of the 'tabindex' attribute in HTML?",
    Answer: "To control the order in which elements receive focus",
    Distractor1: "To add styling to elements",
    Distractor2: "To hide elements from screen readers",
    Distractor3: "To create hyperlinks",
    Explanation:
      "The 'tabindex' attribute specifies the order in which elements should be focused when navigating with the keyboard.",
    Link: "https://www.freecodecamp.org/news/html-roving-tabindex-attribute-explained-with-examples/"
  },
  {
    Question: "What does WCAG stand for in the context of web accessibility?",
    Answer: "Web Content Accessibility Guidelines",
    Distractor1: "Website Coding and Graphics",
    Distractor2: "Web Content Approval Group",
    Distractor3: "Webpage Creation and Graphics",
    Explanation:
      "WCAG stands for Web Content Accessibility Guidelines, which provide a set of recommendations for making web content more accessible.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of color contrast in web accessibility?",
    Answer:
      "Ensuring text and content remain readable for individuals with visual impairments.",
    Distractor1: "Creating visually appealing websites",
    Distractor2: "Enhancing website loading speed",
    Distractor3: "Improving SEO ranking",
    Explanation:
      "Color contrast is essential to make text and content distinguishable for users with various levels of vision, ensuring readability and accessibility.",
    Link: "https://www.w3.org/TR/WCAG21/"
  },
  {
    Question:
      "What is the purpose of alternative text (alt text) in web accessibility?",
    Answer:
      "Providing descriptions of images for screen reader users and users with visual impairments.",
    Distractor1: "Improving website design",
    Distractor2: "Enhancing website performance",
    Distractor3: "Hiding images from users",
    Explanation:
      "Alternative text (alt text) is used to describe images on web pages, making them accessible to individuals who use screen readers or have visual impairments.",
    Link: "https://www.w3.org/WAI/tutorials/images/decision-tree/"
  },
  {
    Question:
      "What is the name of the international body responsible for establishing the most common web accessibility standards?",
    Answer: "World Wide Web Consortium(W3C)",
    Distractor1: "Websites for All",
    Distractor2: "Web Accessibility Initiative (WAI)",
    Distractor3: "A11y",
    Explanation:
      "Although there are several standards for accessibility, the most notable and globally recognized are developed by the World Wide Web Consortium (W3C) through its Web Accessibility Initiative.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/"
  },
  {
    Question: "Why is it important to use semantic elements when writing HTML?",
    Answer:
      "Semantic code clearly describes the code's meaning to both the browser and the developer",
    Distractor1: "Semantic code is prettier.",
    Distractor2: "Semantic code decreases site readability.",
    Distractor3:
      "Semantic code can improve comprehension for hearing-impaired individuals.",
    Explanation:
      "Semantic HTML helps describe the meaning behind the content whereas generic HTML elements like divs and spans hold no special meaning. It is always encouraged to use semantic HTML when possible to help with accessibility.",
    Link: "https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/"
  },
  {
    Question:
      "Which one is the correct HTML element used to identify the main language of an entire page?",
    Answer: "<html>",
    Distractor1: "<!DOCTYPE>",
    Distractor2: "<body>",
    Distractor3: "<img>",
    Explanation:
      "To set the main language of the page, use the lang attribute on the <html> element at the top of the page.",
    Link: "https://www.w3.org/International/questions/qa-html-language-declarations.en.html"
  },
  {
    Question:
      "What are the four principles under the Web Content Accessibility Guidelines (WCAG) 2.0?",
    Answer: "Perceivable, Operable, Understandable, and Robust",
    Distractor1: "Comprehensible, Thorough, Detectable, and Configurable",
    Distractor2: "Justifiable, Clear, Permissable, and Simple",
    Distractor3: "Fundamental, Executable, Meaningful, and Useable",
    Explanation:
      "These principles help contextualize different areas of accessibility, as defined by the WCAG 2.0.",
    Link: "https://www.w3.org/TR/WCAG20/#guidelines"
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
    Link: "https://www.w3.org/WAI/WCAG2A-Conformance"
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
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
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
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
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
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
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
    Link: "https://www.w3.org/WAI/test-evaluate/tools/"
  },
  {
    Question: "What is web accessibility?",
    Answer: "the practice of building websites that are usable by everyone",
    Distractor1: "a new JavaScript framework",
    Distractor2: "a sorting algorithm",
    Distractor3: "a type of programming paradigm",
    Explanation:
      "Web accessibility means building websites that are usable by as many people as possible.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following HTML elements can improve the accessibility for your website?",
    Answer: "<main>",
    Distractor1: "<div>",
    Distractor2: "<span>",
    Distractor3: "<head>",
    Explanation:
      "The main element defines a main landmark on the page which allows screen reader users to quickly navigate to the beginning of the main content.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question:
      "Which of the following is a good reason to have a strong contrast ratio between foreground and background colors?",
    Answer:
      "people with moderately low vision can read and access the website contents.",
    Distractor1: "a good contrast ratio will improve the entire web design.",
    Distractor2:
      "screen readers can distinguish better between foreground and background colors",
    Distractor3:
      "a good contrast ratio will improve website performance and SEO.",
    Explanation:
      "Websites that have a strong contrast ratio between background and foreground colors will allow people with low vision to better access and read the website content.",
    Link: "https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background"
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
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/#add-missing-document-language"
  },
  {
    Question:
      "When a website complies with Level AA of conformance, which of these levels will already be compatible?",
    Answer: "Level A",
    Distractor1: "Level AAA",
    Distractor2: "Level AA and Level AAA",
    Distractor3: "Level AAA and Level A",
    Explanation:
      "WCAG Levels are backwards compatible. If a website complies with Level AAA, then it also complies with the requirements of Level AA and Level A.",
    Link: "https://www.freecodecamp.org/news/pragmatic-rules-of-web-accessibility-that-will-stick-to-your-mind-9d3eb85a1a28/"
  },
  {
    Question: "What are some of the most common types of WCAG 2 failures?",
    Answer:
      "Low contrast text, missing alternative text for images, empty links",
    Distractor1:
      "High contrast text, alternative images for text, broken links",
    Distractor2:
      "Styled buttons, form input labels, multiple document languages",
    Distractor3: "Missing hover text, auto-fill inputs, responsive elements",
    Explanation:
      "WCAG's audit shows that many accessibility errors fall into just six areas/categories: low contrast text, missing alternative text for images, missing form input labels, empty links, missing document language, and empty buttons.",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "Why would providing a skip navigation link create a better experience for keyboard users?",
    Answer:
      "It would allow them to skip to the main content of a site and avoid tabbing through all the main navigation links.",
    Distractor1:
      "It would disable all main navigation links, allowing for quicker access to the main content.",
    Distractor2:
      "It would go through all of the navigation options before the main content of a site.",
    Distractor3:
      "It would allow them to skip to the site's navigation links for more efficient access to content.",
    Explanation:
      "In order to give keyboard users a pleasant experience on your website, they need to be able to access content quickly and efficiently. To allow them to skip to the main content of a site and avoid tabbing through all the main navigation, you can create a 'skip navigation link'.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question: "What is a screen reader?",
    Answer:
      "A software application that attempts to convey what is displayed via non-visual means, like text-to-speech.",
    Distractor1:
      "A Chrome extension that reads all text on a web page and converts it to a audio files.",
    Distractor2:
      "A site that provides examples of how to implement alt text to images.",
    Distractor3:
      "A computer program to scan an application for accessibility improvements.",
    Explanation:
      "A software application with assistive technology that attempts to convey what people with normal eyesight see on a display to their users via non-visual means, like text-to-speech. Developers can utilize a screen reader to understand how a webpage can be made accessible to such people and develop the page accordingly.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question: "What is ARIA?",
    Answer:
      "ARIA defines the responsibilities and states for screen readers in order to convey information about custom modules like carousels and tabs.",
    Distractor1:
      "A tool that changes visuals on a web page to make it more accessible.",
    Distractor2:
      "It is an open-source, automated web page quality measurement tool.",
    Distractor3:
      "A computer program to scan an application for accessibility improvements.",
    Explanation:
      "ARIA is the acronym for Accessible Rich Internet Application which defines the responsibilities, characteristics, and states for screen readers in order to convey information about modules.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
  },
  {
    Question:
      "What should you avoid doing with the tabindex attribute when it comes to keyboard accessibility?",
    Answer: "setting the tabindex attribute greater than zero",
    Distractor1: "Use Javascript",
    Distractor2: "setting the tabindex to use only numbers",
    Distractor3: "Put the headings in an unordered fashion",
    Explanation:
      "Putting the tabindex attribute greater than zero causes the focus order of a website's page to be disorganized, causing people who only user their keyboards to navigate the web to be confused",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard"
  },
  {
    Question:
      "How can you make focus elements more accessible to screen readers on native mobile apps?",
    Answer: "Add an accessibility label for each element.",
    Distractor1: "Avoid using images, gifs, and videos altogether.",
    Distractor2: "Add a contentDesc label to your focus elements.",
    Distractor3:
      "Avoid using descriptive headings which are longer than 10 characters.",
    Explanation:
      "Accessibility labels are good ways to describe the element to screen reader users.",
    Link: "https://www.freecodecamp.org/news/mobile-accessibility/"
  },
  {
    Question: "What are some of the benefits of an accessible design?",
    Answer: "Follows SEO best practices and better UX",
    Distractor1: "Better UI and better customer support",
    Distractor2: "Easier A/B testing and white box testing",
    Distractor3: "Generates more engagement and widens target demographic",
    Explanation:
      "Some of the basic accessibility requirements are also SEO best practices, and improving accessibility for people with disabilities will improve the experience for all your users.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Follows%20SEO%20best,people%20with%20disabilities."
  },
  {
    Question: "When should you start thinking about accessibility?",
    Answer: "Right from the get-go",
    Distractor1: "After pitching your MVP",
    Distractor2: "After your first bug-fix",
    Distractor3: "As the finishing touch",
    Explanation:
      "If you don't pay attention to accessibility right from the beginning of your project, it may become an expensive burden once you start retrofitting.",
    Link: "https://www.freecodecamp.org/news/react-accessibility-tools-build-accessible-react-apps/#:~:text=Why%20you%20should,from%20the%20beginning%3A"
  },
  {
    Question:
      "For accessibility, which interaction does NOT need to be ensured for motor disability?",
    Answer: "Color adjustment",
    Distractor1: "NO keyboard ",
    Distractor2: "NO limitations on response time",
    Distractor3: "Customizing the behavior",
    Explanation: "Color adjustments are key for visual impairments.",
    Link: "https://www.w3.org/TR/css-color-adjust-1/"
  },
  {
    Question:
      "Which of the following HTML tags does NOT use the autocomplete attribute?",
    Answer: "<html>",
    Distractor1: "<input>",
    Distractor2: "<text>",
    Distractor3: "<form>",
    Explanation:
      "The autocomplete attribute can be used in the following HTML elements: <input>, <textarea>, <select> and <form>.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
  },
  {
    Question:
      "Which of the following attributes turns an element with a role of button into a toggle button?",
    Answer: "aria-pressed",
    Distractor1: "aria-checked",
    Distractor2: "aria-expanded",
    Distractor3: "aria-selected",
    Explanation:
      "The aria-pressed attribute indicates the current pressed state of a toggle button.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed"
  },
  {
    Question:
      "What is the semantic HTML equivalent for the ARIA: link role (role=`link`)?",
    Answer: "<a>",
    Distractor1: "<nav>",
    Distractor2: "<link>",
    Distractor3: "<iframe>",
    Explanation:
      "The anchor element is the HTML equivalent to the  ARIA link role. It is best to use the anchor element because it is best supported by assistive technologies.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role"
  },
  {
    Question:
      "Which of the following HTML tags does NOT use the rel attribute?",
    Answer: "<input>",
    Distractor1: "<link>",
    Distractor2: "<area>",
    Distractor3: "<form>",
    Explanation:
      "The rel attribute can be used in the following HTML elements: <link>, <a>, <area>, and <form>",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel"
  },
  {
    Question: "What is the function of the contentinfo ARIA role?",
    Answer: "defines the footer content at that bottom of a website",
    Distractor1: "defines the navigation content",
    Distractor2: "displays a list",
    Distractor3: "defines article element content",
    Explanation:
      "The contentinfo role is used describe the information that is presented at the bottom of the website, such as copyright statements, links to help people navigate the website, etc. ",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"
  },
  {
    Question: "What is the ARIA comment role used for?",
    Answer: "To describe a reaction or emotion in some content",
    Distractor1: "To provide notes about certain lines of code",
    Distractor2: "To share an opinion",
    Distractor3: "To critique a piece of text",
    Explanation:
      "If a website has a testimonial section, the comment role helps describe this information to people who use screen readers.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role"
  },
  {
    Question:
      "What is the minimum contrast ratio needed, according to the WCAG?",
    Answer: "4.5:1",
    Distractor1: "1:1",
    Distractor2: "3:1",
    Distractor3: "2.5:1",
    Explanation:
      "The minimum contrast ratio needed depends on the type and size of the text and the level of conformance. For normal text, the minimum contrast ratio is 4.5:1.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question:
      "In the context of web accessibility, what does 'cognitive accessibility' refer to?",
    Answer:
      "Ensuring that web content is easy to understand and use for individuals with cognitive disabilities.",
    Distractor1: "Making web content more engaging and interactive.",
    Distractor2: "Enhancing the creativity and aesthetics of web design.",
    Distractor3: "Providing audio descriptions for video content.",
    Explanation:
      "'Cognitive accessibility' refers to the practice of designing and structuring web content in a way that makes it easy to comprehend and navigate for individuals with cognitive disabilities like dyslexia, attention deficit disorders, or intellectual disabilities.",
    Link: "https://www.w3.org/WAI/cognitive/"
  },
  {
    Question:
      "What is keyboard accessibility, and why is it important for web accessibility?",
    Answer:
      "Keyboard accessibility refers to the ability to navigate and interact with a website using only the keyboard, without relying on a mouse.",
    Distractor1:
      "Keyboard accessibility refers to using specialized keyboards for web browsing.",
    Distractor2:
      "Keyboard accessibility is a feature that improves website loading speed.",
    Distractor3:
      "Keyboard accessibility is only important for developers, not users.",
    Explanation:
      "Keyboard accessibility is a fundamental aspect of web accessibility, as it ensures that websites are usable by a wide range of users, including those with disabilities. Providing keyboard support means implementing focus management, allowing users to navigate through interactive elements, and ensuring that all functionality is accessible via keyboard input.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
  },
  {
    Question:
      "Which HTML element triggers an action when pressed and is accessible for screen readers?",
    Answer: "<button>",
    Distractor1: "<div>",
    Distractor2: "<span>",
    Distractor3: "<a>",
    Explanation:
      "The <button> element is the appropriate HTML element to create a button that triggers an action when pressed. It is also accessible for screen readers when used correctly with appropriate ARIA attributes.",
    Link: "https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/"
  },
  {
    Question:
      "When designing a website to enhance accessibility, what is the purpose of a skip navigation link?",
    Answer:
      "It helps visually impaired users to skip to the main content of a site.",
    Distractor1: "It serves as a link to the website's home page.",
    Distractor2:
      "It allows users to skip directly to the website's contact page.",
    Distractor3: "It provides a link to download a screen reader application.",
    Explanation:
      "A skip navigation link allows visually impaired users to bypass the main navigation links and jump directly to the main content of a site.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-a11y-tips/"
  },
  {
    Question:
      "What are the four broad guidelines of web accessibility that address different aspects of usability and inclusivity?",
    Answer: "Perceivable, Operable, Understandable, Robust.",
    Distractor1: "Responsive, Mobile-Friendly, Fast-Loading and Secure.",
    Distractor2: "Content, Design, Interaction and Navigation.",
    Distractor3: "Productivity, Accessibility, Scalability and Visual.",
    Explanation:
      "The four broad guidelines of web accessibility are Perceivable, Operable, Understandable, Robust. They help ensure that web content is accessible to all users, including those with disabilities",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question:
      "Which of the following is not the way to fix web accessibility errors?",
    Answer: "Changing document color",
    Distractor1: "Updating low contrast text",
    Distractor2: "Adding missing alternative text for images",
    Distractor3: "Fix empty links",
    Explanation:
      "Fixing empty links, adding missing alternative text for images, updating low contrast text are some common ways to fix accessibility errors",
    Link: "https://www.freecodecamp.org/news/common-accessibility-errors-and-how-to-fix-them/"
  },
  {
    Question:
      "When was version 1.0 of the Web Content Accessibility Guidelines (WCAG) released?",
    Answer: "1999",
    Distractor1: "2008",
    Distractor2: "1995",
    Distractor3: "2005",
    Explanation:
      "WCAG version 1.0 was published on May 5, 1999 and was a total game-changer for web accessibility.",
    Link: "https://www.freecodecamp.org/news/web-accessibility-best-practices-and-checklist/"
  },
  {
    Question: "Which of the following is NOT an example of web accessibility?",
    Answer: "Programming Robots using Machine Learning",
    Distractor1: "Alternative Text for Images",
    Distractor2: "Keyboard Input",
    Distractor3: "Transcripts for Audio",
    Explanation:
      "All of the above are current examples of web accessibility, except for Machine Learning, which may become a future trend.",
    Link: "https://www.w3.org/WAI/fundamentals/accessibility-intro/#examples"
  },
  {
    Question:
      "Which type of color combinations should be avoided to improve web accessibility for colorblind users?",
    Answer: "Red and green combinations.",
    Distractor1: "Black and white combinations.",
    Distractor2: "Blue and yellow combinations.",
    Distractor3: "Purple and orange combinations.",
    Explanation:
      "Red and green are problematic for colorblind users, so it's important to choose color combinations that are distinguishable by everyone.",
    Link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
  },
  {
    Question:
      "Which web accessibility guideline ensures that website navigation can be operated via a keyboard?",
    Answer: "Keyboard Accessibility",
    Distractor1: "Image Alt Text",
    Distractor2: "Audio Descriptions",
    Distractor3: "Video Captions",
    Explanation:
      "Keyboard accessibility ensures that users can navigate and interact with a website using only a keyboard.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "Why is it important to provide captions for videos on a website?",
    Answer:
      "To make video content accessible to individuals with hearing impairments.",
    Distractor1: "To add decorative elements to videos.",
    Distractor2: "To increase the video's play speed.",
    Distractor3: "To hide the video from users.",
    Explanation:
      "Captions are essential for conveying spoken content to those who cannot hear it.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "How can a web developer improve the keyboard accessibility of a website?",
    Answer:
      "By ensuring all interactive elements can be accessed and used via the keyboard alone.",
    Distractor1: "By removing all interactive elements from the website.",
    Distractor2: "By increasing the size of interactive elements.",
    Distractor3: "By using more images on the website.",
    Explanation:
      "Keyboard accessibility means that users can perform all actions using just the keyboard, without a mouse or other pointing device.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the role of focus indicators in web accessibility?",
    Answer:
      "To provide a visual indication of where keyboard focus is on the page.",
    Distractor1: "To highlight decorative elements on the page.",
    Distractor2: "To disable keyboard navigation.",
    Distractor3: "To change the font size of text content.",
    Explanation:
      "Focus indicators help users understand where they are on a web page and improve navigation for keyboard users.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of an accessible form in web accessibility?",
    Answer:
      "To ensure that forms are usable by individuals with disabilities, including those who use screen readers or keyboard navigation.",
    Distractor1: "To collect personal information from users.",
    Distractor2: "To create complex visual effects on a web page.",
    Distractor3: "To prevent users from submitting forms.",
    Explanation:
      "Accessible forms are designed to be usable by everyone, including those with disabilities.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "What is the purpose of text resizing options in web accessibility?",
    Answer:
      "To allow users to adjust text size to meet their specific needs and preferences.",
    Distractor1: "To change the website's background color.",
    Distractor2: "To add animated transitions to the website.",
    Distractor3: "To hide the website's navigation menu.",
    Explanation:
      "Text resizing options improve accessibility by accommodating users with varying visual impairments.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the purpose of ARIA landmarks in web accessibility?",
    Answer:
      "To provide a way for screen readers to navigate and understand the structure of a web page.",
    Distractor1: "To create colorful graphics on the page.",
    Distractor2: "To insert advertising banners on the page.",
    Distractor3: "To change the page's font style.",
    Explanation:
      "ARIA landmarks help screen reader users quickly locate and understand different sections of a web page.",
    Link: "https://www.w3.org/WAI/standards-guidelines/aria/"
  },
  {
    Question:
      "Why is it important to provide accessible alternatives for multimedia content?",
    Answer:
      "To ensure that all users, including those with disabilities, can access and understand the content.",
    Distractor1: "To increase the number of multimedia elements on a website.",
    Distractor2: "To add visual effects to multimedia content.",
    Distractor3: "To reduce the page load time.",
    Explanation:
      "Accessible alternatives like captions and audio descriptions make multimedia content inclusive.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question: "What is the role of screen readers in web accessibility?",
    Answer:
      "To provide audible representation of on-screen content for individuals with visual impairments.",
    Distractor1: "To display visual content on a screen.",
    Distractor2: "To make text content larger on a screen.",
    Distractor3: "To increase the website's loading speed.",
    Explanation:
      "Screen readers are essential for making digital content accessible to blind and visually impaired users.",
    Link: "https://en.wikipedia.org/wiki/Screen_reader"
  },
  {
    Question:
      "What are the WCAG guidelines, and why are they important for web accessibility?",
    Answer:
      "WCAG (Web Content Accessibility Guidelines) provide a set of international standards for web accessibility, ensuring that digital content is accessible to a wide range of users, including those with disabilities.",
    Distractor1: "WCAG guidelines are only for mobile app development.",
    Distractor2: "WCAG guidelines focus on website aesthetics.",
    Distractor3: "WCAG guidelines are only relevant for small businesses.",
    Explanation:
      "WCAG guidelines are globally recognized and help create web content that is accessible and usable for individuals with disabilities, enhancing inclusivity on the web.",
    Link: "https://www.w3.org/WAI/standards-guidelines/wcag/"
  },
  {
    Question:
      "Which of the following screen readers is available as licensed software for Windows?",
    Answer: "JAWS (Job Access With Speech)",
    Distractor1: "NVDA(Non Visual Desktop Access)",
    Distractor2: "a11y.project",
    Distractor3: "ChromeVox",
    Explanation:
      "JAWS (Job Access With Speech) is widely used screen reading software developed by Freedom Scientific, which is available as licensed software for Windows.",
    Link: "https://www.freecodecamp.org/news/accessibility-testing-tools-for-ada-compliance/"
  },
  {
    Question:
      "Why is it important for developers to prioritize semantic HTML when building websites?",
    Answer:
      "It helps screen readers and other assistive technologies to interpret the content accurately.",
    Distractor1:
      "It enhances the visual appeal of the website for users with normal vision.",
    Distractor2:
      "It minimizes the overall file size and improves website loading speed.",
    Distractor3:
      "It allows for more complex styling options using CSS and JavaScript.",
    Explanation:
      "By prioritizing semantic HTML, developers enable better accessibility for users who rely on assistive technologies, ensuring accurate interpretation of website content for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  },
  {
    Question:
      "How can developers ensure the accessibility of forms on their websites?",
    Answer:
      "By using proper labeling and grouping of form elements, and providing clear instructions for users.",
    Distractor1:
      "By minimizing the number of form fields to streamline the user experience.",
    Distractor2:
      "By implementing complex validation rules to ensure data accuracy.",
    Distractor3:
      "By embedding interactive multimedia elements within the form for engagement.",
    Explanation:
      "Accessibility in web forms can be achieved by implementing clear labels, grouping related fields, and offering explicit instructions, facilitating easy navigation and understanding for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  },
  {
    Question:
      "What is the significance of providing descriptive alt texts for images in web development?",
    Answer:
      "It enables users with visual impairments to understand the content and context of the images.",
    Distractor1:
      "It enhances the visual appeal of the website and encourages user engagement.",
    Distractor2: "It prevents unauthorized use of images by other websites.",
    Distractor3:
      "It improves search engine optimization (SEO) and boosts website visibility.",
    Explanation:
      "Descriptive alt texts for images ensure that users with visual impairments can comprehend the content of the images, fostering a comprehensive browsing experience for all users.",
    Link: "https://www.freecodecamp.org/news/4-principles-for-getting-started-with-website-accessibility-4e85f75730b/"
  }
];

export default accessibilityQuiz;
