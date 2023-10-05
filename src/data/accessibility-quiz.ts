const accessibilityQuiz = [
  {
    Question: "What legal repercussions can businesses face for failing to meet website accessibility requirements?",
    Answer: "Businesses can face lawsuits or financial penalties",
    Distractor1: "no repercussions",
    Distractor2: "they will serve 10 years in jail",
    Distractor3: "they will do 2500 hours of community service",
    Explanation: "Businesses that fail to meet website accessibility requirements may face lawsuits, financial penalties, and damage to their reputation. Maintaining good accessibility standards is good for everyone in this digital age.",
    Link: "https://www.freecodecamp.org/news/what-is-website-accessibility-18ce00ec990f/"
  },
  {
    Question: "According to the W3C, which of the following is not a valid guideline for crafting style sheets that enhance accessibility?",
    Answer:  "Utilize the 'px' unit to define font sizes.",
    Distractor1: "Ensure there is always a fallback generic font",
    Distractor2: "Opt for numbers instead of names when specifying colors.",
    Distractor3: "Ensure consistent 'class' names for the same concept across all style sheets",
    Explanation: "For setting font sizes, use the 'em' unit and favor relative length units and percentages.",
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
  }
];

export default accessibilityQuiz;
