const cssQuiz = [
  {
    Question:
      "Which CSS property is used to represent the transparency of an element?",
    Answer: "Opacity",
    Distractor1: "Dark",
    Distractor2: "Transparent",
    Distractor3: "Hover",
    Explanation:
      "Opacity is used to represent the transparency of an element in CSS.",
    Link: "https://youtu.be/1Rs2ND1ryYc?t=4728",
  },
  {
    Question:
      "Which of the following CSS properties represents the order of flex items in a container?",
    Answer: "order",
    Distractor1: "float",
    Distractor2: "overflow",
    Distractor3: "int",
    Explanation:
      "order is used to represent the order of flex items.",
    Link: "https://youtu.be/1Rs2ND1ryYc",
  },
  {
    Question:
      "In CSS, what selector is used to set the style of links for the moment they are clicked?",
    Answer: "a:active",
    Distractor1: "a:hover",
    Distractor2: "a:visited",
    Distractor3: "a:link",
    Explanation:
      "With a:active you can set the style of links for the moment they are clicked.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question:
      "In CSS, which one of these values represents 20% of the viewport height?",
    Answer: "20vh",
    Distractor1: "200vh",
    Distractor2: "2vh",
    Distractor3: "2000vh",
    Explanation: "20vh is equivalent to 20% of the viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In CSS, which one of these values represents 10% of the viewport width?",
    Answer: "10vw",
    Distractor1: "10vh",
    Distractor2: "100vw",
    Distractor3: "1000vw",
    Explanation: "10vw is equivalent to 10% of the viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In CSS, what does the animation-fill-mode property do?",
    Answer: "It is used to style the element after the animation ends.",
    Distractor1: "It sets a delay for the animation to start.",
    Distractor2: "It sets how many times an animation should run.",
    Distractor3: "It determines how long an animation should last in seconds.",
    Explanation:
      "The animation-fill-mode property is used to style the element after the animation ends.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS Grid, what is the name of the grid property used to set the number and width of columns?",
    Answer: "grid-template-columns",
    Distractor1: "grid-columns",
    Distractor2: "flex-template-columns",
    Distractor3: "template-columns-grid",
    Explanation:
      "The grid-template-columns property is used to set the number and width of the columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, this type of unit is defined by comparing to another length value.",
    Answer: "Relative",
    Distractor1: "Absolute",
    Distractor2: "Fixed",
    Distractor3: "Dynamic",
    Explanation:
      "In CSS, relative units are relative to other length values. Several of the relative units depend on the viewport size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/#why-learn-css-relative-units",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to position items inside grid containers along the main axis?",
    Answer: "justify-items",
    Distractor1: "justify-content",
    Distractor2: "justify-rows",
    Distractor3: "justify-columns",
    Explanation:
      "The justify-items property is used to position items within a grid container along the x-axis (main axis).",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what is the all media type in a CSS media query?",
    Answer: "A category of media that works for all devices.",
    Distractor1: "A category of media that only works for mobile devices.",
    Distractor2: "A category of media that only works for print media.",
    Distractor3: "A category of media that only works for tablets.",
    Explanation:
      "The all media type is a category of media that will work for all media devices.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, how can you abbreviate the following Hex code? #FF0000",
    Answer: "#F00",
    Distractor1: "#0F0",
    Distractor2: "#00F",
    Distractor3: "#0FF0",
    Explanation:
      "To abbreviate a Hex code in CSS, include one digit of each pair of digits in the code. ",
    Link: "https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/",
  },
  {
    Question: "In CSS, what does the animation-direction property do?",
    Answer: "It sets the direction of the animation.",
    Distractor1: "It sets how many times an animation should run.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3: "It pauses the animation if the animation is running.",
    Explanation:
      "The animation-direction property sets the direction of the animation.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS, what is the name of the value that stretches the repeated images in the background-repeat property?",
    Answer: "round",
    Distractor1: "space",
    Distractor2: "around",
    Distractor3: "rounding",
    Explanation:
      "The round value is used to stretch the repeated images in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In CSS, what is the speech media type in a CSS media query?",
    Answer:
      "A category of media that works for devices like screen readers where the content is read out loud to the user.",
    Distractor1: "A category of media that works for devices with screens.",
    Distractor2:
      "A category of media that works for devices where the media is in print preview mode.",
    Distractor3: "A category of media that only works for mobile devices.",
    Explanation:
      "The speech media type works for devices like screen readers where the content is read out loud to the user.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, which one is NOT an example of a relative unit?",
    Answer: "px",
    Distractor1: "rem",
    Distractor2: "em",
    Distractor3: "vh",
    Explanation: "Relative units in CSS include rem, em, vh, and vw",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In CSS, what does the animation-duration property do?",
    Answer: "It determines how long an animation should last in seconds.",
    Distractor1: "It is used to style the element after the animation ends.",
    Distractor2: "It sets the direction of the element.",
    Distractor3: "It pauses the animation if the animation is running.",
    Explanation:
      "The animation-duration property is used to determine how long an animation should last in seconds.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In CSS, how do you change the background-image of an element?",
    Answer: 'background-image: url("path_to_image");',
    Distractor1: 'background-img: url("path_to_image");',
    Distractor2: 'background_image: url("path_to_image");',
    Distractor3: 'background-image: ("path_to_image")',
    Explanation:
      "The background-image CSS property allows you to place an image behind any HTML element you wish. Immediately after the property you add a colon. Then, url() is used to tell CSS where the image is located. Inside the parentheses the path to the image is listed in opening and closing double quotes. This lets the browser know what URL to pull. Lastly, don't forget the semicolon to end the statement!",
    Link: "https://www.freecodecamp.org/news/css-background-image-with-html-example-code/",
  },
  {
    Question: "In CSS, what is the media type in a CSS media query?",
    Answer: "The category of media for the device.",
    Distractor1: "A set of rules that only applies to mobile devices",
    Distractor2: "A category only for print media.",
    Distractor3: "A category only for speech.",
    Explanation: "A media type refers to the category of media for the device.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS Flexbox, what does align-items do?",
    Answer: "aligns the items along the cross axis",
    Distractor1: "aligns the items to the right of the y axis",
    Distractor2: "aligns the items to the right of the x axis",
    Distractor3: "aligns the items to the right of the z axis",
    Explanation:
      "In CSS Flexbox, align-items aligns the items along the cross axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS Flexbox, how do you allow items to move to a new line?",
    Answer: "flex-wrap: wrap;",
    Distractor1: "flex: wrap;",
    Distractor2: "flex-wrap: wrap-items;",
    Distractor3: "flex-wrap: item-wrap;",
    Explanation:
      "In CSS Flexbox, flex-wrap: wrap; will tell the computer to move items to a new line if there is not enough space",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, how do you change the background color?",
    Answer: "background-color: pink;",
    Distractor1: "bg-color: pink;",
    Distractor2: "backgroundColor: pink;",
    Distractor3: "b-color: pink;",
    Explanation:
      "You can use the background property in CSS to change the background color of an element",
    Link: "https://www.freecodecamp.org/news/css-background-color-how-to-change-the-background-color-in-html/",
  },
  {
    Question: "In CSS, what is the default position property?",
    Answer: "position: static;",
    Distractor1: "position: relative;",
    Distractor2: "position: top;",
    Distractor3: "position: absolute;",
    Explanation:
      "The default property in CSS is position: static; which means it follows the order of the HTML",
    Link: "https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position items inside the grid container along the y-axis?",
    Answer: "align-items",
    Distractor1: "grid-columns",
    Distractor2: "grid-template-columns",
    Distractor3: "fraction-unit",
    Explanation:
      "The align-items property is used to position items inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what selector is used to set the style of links when the user moves the mouse over them?",
    Answer: "a:hover",
    Distractor1: "a:visited",
    Distractor2: "a:active",
    Distractor3: "a:link",
    Explanation:
      "With a:hover you can set the style of links when the user mouses over them.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to set the number and height of the rows?",
    Answer: "grid-template-rows",
    Distractor1: "grid-template-columns",
    Distractor2: "grid-rows",
    Distractor3: "grid-unit-rows",
    Explanation:
      "The grid-template-rows property is used to set the number and height of the rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what does the no-repeat value do in the background-repeat property?",
    Answer: "Sets no repetition for the background image",
    Distractor1: "Repeats the image along the z-axis",
    Distractor2: "Repeats the image along the y-axis",
    Distractor3: "Repeats the image along the x-axis",
    Explanation:
      "The no-repeat value of the background-repeat property sets no repetition for the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-content property?",
    Answer: "repeat",
    Distractor1: "space-around",
    Distractor2: "space-between",
    Distractor3: "space-evenly",
    Explanation:
      "The justify-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what does the animation-iteration-count property do?",
    Answer: "It sets how many times an animation should run.",
    Distractor1:
      "It sets a name used to describe the animation applied to the element.",
    Distractor2: "It determines how long an animation should last in seconds.",
    Distractor3: "It sets a delay for the animation to start.",
    Explanation:
      "The animation-iteration-count property sets how many times the animation should run.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one grid item in a container along the y-axis?",
    Answer: "align-self",
    Distractor1: "grid-columns",
    Distractor2: "space-around",
    Distractor3: "grid-template-columns",
    Explanation:
      "The align-self property is used to position one grid item in a container along the y-axis",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what does the animation-play-state property do?",
    Answer: "It is used to pause the animation if it is set to paused.",
    Distractor1: "It determines how long an animation should last in seconds.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3: "It sets the direction for the animation.",
    Explanation:
      "The animation-play-state property is used to pause the animation if set to paused.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question: "In CSS, how do you add a smooth scroll to an HTML element?",
    Answer: "scroll-behavior: smooth;",
    Distractor1: "scroll-behavior: smooth-scroll;",
    Distractor2: "scroll: smooth;",
    Distractor3: "behavior: smooth;",
    Explanation:
      "You can use scroll-behavior: smooth; to add a smooth scroll to the html element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question:
      "In CSS, what is the name of the function used to set the width of all columns in CSS grid?",
    Answer: "repeat()",
    Distractor1: "set-width()",
    Distractor2: "width-all()",
    Distractor3: "width-container()",
    Explanation:
      "The repeat() function is used to set the width of all of the columns in the grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what is the name of the property used to repeat a background image?",
    Answer: "background-repeat",
    Distractor1: "background-position-x",
    Distractor2: "background-position-y",
    Distractor3: "background-origin",
    Explanation:
      "The background-repeat property is used to repeat the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what selector would you use to select all elements with the class of blue-text?",
    Answer: ".blue-text",
    Distractor1: "#blue-text",
    Distractor2: "a[blue-text]",
    Distractor3: "blue-text",
    Explanation:
      "In CSS, you can select all the elements with a given class with a dot before its name.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/",
  },
  {
    Question: "In CSS, what is the media attribute in the link tag?",
    Answer:
      "Specifies the type of media that should be used when importing the linked content",
    Distractor1:
      "tells the computer to import the linked content for phones only",
    Distractor2:
      "tells the computer to import the linked content for laptops only",
    Distractor3:
      "tells the computer to import the linked content for tablets only",
    Explanation:
      "The media attribute specifies the type of media that should be used when importing the linked content",
    Link: "https://www.freecodecamp.org/news/external-css-stylesheets-how-to-link-css-to-html-and-import-into-head/",
  },
  {
    Question:
      "In CSS, what is the name of the property that clips the background image to inside the container?",
    Answer: "background-clip",
    Distractor1: "background-color",
    Distractor2: "background-position",
    Distractor3: "background-size",
    Explanation:
      "The background-clip property is used to clip the background image to inside the container.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a row?",
    Answer: "flex-direction: row-reverse;",
    Distractor1: "flex-direction: reverse-row;",
    Distractor2: "flex-row: row-reverse;",
    Distractor3: "flex-direction: set-row-reverse;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: row-reverse; to the container whose items you want to display in a row, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to reverse the items in a column?",
    Answer: "flex-direction: column-reverse;",
    Distractor1: "flex-direction: reverse-c;",
    Distractor2: "flex-direction: column-r;",
    Distractor3: "flex-direction: column-rev;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column-reverse; to the container whose items you want to display in a column, with their order reversed.",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, what does list-style-type: circle; do?",
    Answer: "Applies circles to all of the list items in an unordered list.",
    Distractor1: "Applies discs to all of the list items in an unordered list.",
    Distractor2:
      "Applies decimals to all of the list items in an unordered list.",
    Distractor3:
      "Applies squares to all of the list items in an unordered list.",
    Explanation:
      "list-style-type: circle; will apply circles to all of the list items of an unordered list.",
    Link: "https://www.freecodecamp.org/news/html-bullet-points-how-to-create-an-unordered-list-with-the-ul-tag-example/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-position property?",
    Answer: "side-left",
    Distractor1: "top",
    Distractor2: "bottom",
    Distractor3: "right",
    Explanation:
      "The background-position property can take in many values including of top, right, left and bottom.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In CSS, what does the vw unit stand for?",
    Answer: "viewport width",
    Distractor1: "view width height",
    Distractor2: "viewport weight",
    Distractor3: "viewport height",
    Explanation: "The vw unit stands for viewport width.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "In CSS Flexbox, what does align-self do?",
    Answer: "adjusts the alignment for an element",
    Distractor1: "adjust the alignment for all elements",
    Distractor2: "adjusts the alignment for hr elements",
    Distractor3: "adjusts the alignment for an img element",
    Explanation:
      "In CSS Flexbox, align-self adjusts the alignment for an element",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, what does the animation-name property do?",
    Answer:
      "It is a name used to describe the animation applied to the element.",
    Distractor1: "It sets the duration of the animation.",
    Distractor2: "It sets a delay for the animation to start.",
    Distractor3: "It sets how many times an animation should run.",
    Explanation:
      "The animation-name property is used to describe the animation applied to the element.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS, what is the name of the grid property used to set the space for grid cells in rows and columns?",
    Answer: "grid-template-areas",
    Distractor1: "grid-template-rows",
    Distractor2: "fraction unit",
    Distractor3: "repeat",
    Explanation:
      "The grid-template-areas property is used to set the space for grid cells in rows and columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what is the universal selector?",
    Answer: "*",
    Distractor1: "#",
    Distractor2: "$",
    Distractor3: "@",
    Explanation:
      "The asterisk * is the universal selector in CSS. It selects all elements of any type.",
    Link: "https://www.freecodecamp.org/news/use-css-selectors-to-style-webpage/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the position of the background image?",
    Answer: "background-position",
    Distractor1: "background-clip",
    Distractor2: "background-color",
    Distractor3: "background-origin",
    Explanation:
      "The background-position is used to change the position of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to position one individual grid item inside a grid container along the x-axis?",
    Answer: "justify-self",
    Distractor1: "align-content",
    Distractor2: "grid-template-areas",
    Distractor3: "justify-rows",
    Explanation:
      "The justify-self property is used to position one individual grid item inside a grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, which one of these values does NOT apply to the all shorthand property?",
    Answer: "position",
    Distractor1: "unset",
    Distractor2: "initial",
    Distractor3: "revert",
    Explanation:
      "The all CSS shorthand property can accept the following values: initial, inherit, unset, revert.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
  },
  {
    Question:
      "In CSS Flexbox, how do you set the flex container to arrange the items in a column?",
    Answer: "flex-direction: column;",
    Distractor1: "flex-direction: row;",
    Distractor2: "flex-column: column;",
    Distractor3: "flex-direction: set-column;",
    Explanation:
      "In CSS Flexbox, you can apply flex-direction: column; to the container whose items you want arrange in a column",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-origin property?",
    Answer: "box-sizing",
    Distractor1: "border-box",
    Distractor2: "padding-box",
    Distractor3: "content-box",
    Explanation:
      "The background-origin property can use following values: border-box, padding-box, inherit, and content-box.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between columns?",
    Answer: "column-gap",
    Distractor1: "set-width",
    Distractor2: "fit-unit",
    Distractor3: "grid-template-columns",
    Explanation:
      "The column-gap property is used to create gaps between columns.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what does the animation-timing-function property do?",
    Answer: "It determines when the animation should speed up or slow down.",
    Distractor1: "It sets the direction for the element.",
    Distractor2: "It is used to style the element after the animation ends.",
    Distractor3:
      "It is a name used to describe the animation applied to the element.",
    Explanation:
      "The animation-timing-function is used to determine when the animation should speed up or slow down.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },

  {
    Question:
      "In CSS, what is the name of the relative unit that is based on its parent's font size?",
    Answer: "em",
    Distractor1: "rem",
    Distractor2: "vh",
    Distractor3: "vw",
    Explanation: "The em unit is based on its parent's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In CSS, this is the type of unit that is tied to physical units of length. ",
    Answer: "Absolute",
    Distractor1: "Relative",
    Distractor2: "Fixed",
    Distractor3: "Dynamic",
    Explanation:
      "In CSS, absolute units are tied to physical units of length. ",
    Link: "https://www.freecodecamp.org/news/css-unit-guide/",
  },
  {
    Question:
      "In CSS, what property is used to customize the marker of a list item?",
    Answer: "list-style-type",
    Distractor1: "list-style",
    Distractor2: "list-marker-type",
    Distractor3: "list-markers",
    Explanation:
      "The list-style-type property is used to set the marker of a list item. ",
    Link: "https://www.freecodecamp.org/news/how-to-style-lists-with-css/",
  },
  {
    Question: "In CSS, what is an at-rule?",
    Answer:
      "A rule that dictates what the CSS will look like based on certain conditions.",
    Distractor1: "A rule that dictates how to format the HTML.",
    Distractor2: "A rule that dictates javascript functions.",
    Distractor3: "A rule that only applies to how <p> elements are styled.",
    Explanation:
      "An at-rule in CSS will dictate what the CSS will look like based on certain conditions.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, what is the role of media queries?",
    Answer: "They help create responsive websites",
    Distractor1: "They create links to other webpages",
    Distractor2: "They add interactivity to a static webpage",
    Distractor3: "They change the font of text",
    Explanation:
      "CSS media queries allow you to create responsive websites across all screen sizes, ranging from desktop to mobile",
    Link: "https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/",
  },
  {
    Question: "In CSS, how is the not operator used in a media query?",
    Answer:
      "It reverses a true query into a false query and a false query into a true query.",
    Distractor1: "It joins multiple media features.",
    Distractor2: "It splits media queries into separate ones.",
    Distractor3: "It separates multiple media features by commas.",
    Explanation:
      "The not operator is used to reverse a true query into a false query and a false query into a true query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to change the origin of the background image?",
    Answer: "background-origin",
    Distractor1: "background-position",
    Distractor2: "background-clip",
    Distractor3: "background-color",
    Explanation:
      "The background-origin property is used to set the origin of the background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "What does CSS stand for?",
    Answer: "Cascading Style Sheets",
    Distractor1: "Complex Style Sheets",
    Distractor2: "Complete Synchronizes Sheets",
    Distractor3: "Community Stylish System",
    Explanation: "CSS stands for Cascading Style Sheets.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
  },
  {
    Question: "What is the main purpose of CSS in a website?",
    Answer: "Style",
    Distractor1: "Structure",
    Distractor2: "Functionality",
    Distractor3: "Sound",
    Explanation:
      "CSS is used to define the style of the elements in a website.",
    Link: "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
  },
  {
    Question: "In CSS, what is the print media type in a CSS media query?",
    Answer:
      "A category of media that works for devices where the media is in print preview mode.",
    Distractor1: "A type of media only for 4k monitors.",
    Distractor2: "A type of media that only works for desktop computers.",
    Distractor3: "A set of rules only applied to mobile devices.",
    Explanation:
      "The print media type works for devices where the media is in print preview mode.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, how do you make all of the text for an element uppercase?",
    Answer: "text-transform: uppercase;",
    Distractor1: "text-transform: toUpper;",
    Distractor2: "text-transform: upper;",
    Distractor3: "text-transform: set-upper;",
    Explanation:
      "You can use the text-transform: uppercase; to make all of the text for that element uppercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In CSS, how do you make an image circular or oval?",
    Answer: "border-radius: 50%;",
    Distractor1: "border-radius: 10%;",
    Distractor2: "border-radius: 0;",
    Distractor3: "border-radius: 3px;",
    Explanation:
      "You can use the CSS property border-radius with a value of 50% to make an image circular or oval.",
    Link: "https://devdocs.io/css/border-radius",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-repeat property?",
    Answer: "repeat-z-axis",
    Distractor1: "no-repeat",
    Distractor2: "repeat",
    Distractor3: "repeat-x",
    Explanation:
      "The background-repeat property can take in seven values include no-repeat, repeat, repeat-x and repeat-y",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In CSS, what do H, S, and L in HSL stand for?",
    Answer: "Hue, Saturation, Lightness",
    Distractor1: "Hue, Saturation, Lightning",
    Distractor2: "Hue, Style, Lightness",
    Distractor3: "Habitat, Style, Lightness",
    Explanation: "HSL stands for Hue, Saturation, and Lightness.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/",
  },
  {
    Question:
      "In CSS, what is the name of the property that determines if the background image is in a scroll, fixed, or local position?",
    Answer: "background-attachment",
    Distractor1: "background-origin",
    Distractor2: "background-clip",
    Distractor3: "background-position",
    Explanation:
      "The background-attachment property is used to determine if the background image is in a scroll, fixed, or local position.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what are the conditions that decide if a media rule is applied?",
    Answer: "Breakpoints",
    Distractor1: "Breaks",
    Distractor2: "Points",
    Distractor3: "Keys",
    Explanation:
      "A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries.",
    Link: "https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/",
  },
  {
    Question:
      "In CSS, the amount of space between an element's border and its surrounding elements is known as...",
    Answer: "Margin",
    Distractor1: "Padding",
    Distractor2: "White Space",
    Distractor3: "Indentation",
    Explanation:
      "The margin is the amount of space between an element's border and its surrounding elements.",
    Link: "https://www.freecodecamp.org/news/css-margins/",
  },
  {
    Question:
      "In CSS, what value should be assigned to the text-decoration property to remove an underline from links?",
    Answer: "none",
    Distractor1: "underline",
    Distractor2: "overline",
    Distractor3: "line-through",
    Explanation:
      "The property text-decoration should have the value of none to remove an underline from links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },

  {
    Question: "In CSS Flexbox, which one is NOT used with align-content?",
    Answer: "align-bottom",
    Distractor1: "center",
    Distractor2: "space-around",
    Distractor3: "stretch",
    Explanation:
      "In CSS Flexbox, some of the options for align-content include center, stretch, space-around and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, how is the comma operator used in a media query?",
    Answer:
      "It separates multiple media features by commas and it applies the styles inside the curly braces if one of the conditions is true.",
    Distractor1:
      "It reverses a true query into a false query and a false query into a true query.",
    Distractor2: "It joins multiple media features.",
    Distractor3: "It splits media queries into separate ones.",
    Explanation:
      "The comma operator is used to separate multiple media features by commas and to apply the styles inside the curly braces if one of the conditions is true.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, what does the repeat-x value do in the background-repeat property?",
    Answer: "It repeats the image along the x-axis.",
    Distractor1: "It repeats the image along the y-axis.",
    Distractor2: "It repeats the image along the z-axis.",
    Distractor3: "It repeats the image along both of the x-axis and y-axis.",
    Explanation:
      "The repeat-x value of the background-repeat property repeats the image along the x-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In CSS, how is the and operator used in a media query?",
    Answer: "It is used to join multiple media features.",
    Distractor1: "It is used to reverse a true query into a false query.",
    Distractor2: "It is used to separate multiple media features by commas.",
    Distractor3: "It is used to split media queries into separate ones.",
    Explanation:
      "The and operator is used to join multiple media features in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, what does the A in RGBA stand for?",
    Answer: "Alpha",
    Distractor1: "Alphabetical",
    Distractor2: "Ambiguous",
    Distractor3: "Ancient",
    Explanation:
      "The A in RGBA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://devdocs.io/css/color_value/rgba()",
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with align-items?",
    Answer: "align-middle",
    Distractor1: "flex-end",
    Distractor2: "flex-start",
    Distractor3: "baseline",
    Explanation:
      "In CSS Flexbox, some of the options for align-items include flex-start, flex-end, baseline and stretch",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question: "In CSS, what is the screen media type in a CSS media query?",
    Answer: "A category of media that works for devices with screens.",
    Distractor1:
      "A category of media that works for media in print preview mode.",
    Distractor2: "A category of media that works for devices without screens.",
    Distractor3: "A category of media that only works for tablets.",
    Explanation: "The screen media type works for devices with screens.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, what does the vh unit stand for?",
    Answer: "viewport height",
    Distractor1: "viewport width",
    Distractor2: "view heights",
    Distractor3: "viewing height",
    Explanation: "The vh unit stands for viewport height.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },

  {
    Question: "In CSS, how do you add content after an element?",
    Answer: "::after",
    Distractor1: "::after-content",
    Distractor2: "::add",
    Distractor3: "::before",
    Explanation:
      "You can use the ::after selector to add content after an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "In CSS, what does the animation-delay property do?",
    Answer: "It sets a delay for the animation to start.",
    Distractor1: "It determines how long an animation should last in seconds.",
    Distractor2: "It pauses the animation if the animation is running.",
    Distractor3:
      "It determines when the animation should speed up or slow down.",
    Explanation:
      "The animation-delay property is used to set a delay for the animation to start.",
    Link: "https://www.freecodecamp.org/news/a-quick-introduction-to-css-animations-a1655375ec90/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the justify-items property?",
    Answer: "gap",
    Distractor1: "start",
    Distractor2: "end",
    Distractor3: "stretch",
    Explanation:
      "The four values that can be used for the justify-items property are: start, end, center, and stretch.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what is the name of the value that evenly distributes space in the background-repeat property?",
    Answer: "space",
    Distractor1: "repeat",
    Distractor2: "no-repeat",
    Distractor3: "repeat-x",
    Explanation:
      "The space value is used to evenly distribute the space in the background-repeat property.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is the name of the relative unit that is based on the root element's font size?",
    Answer: "rem",
    Distractor1: "em",
    Distractor2: "px",
    Distractor3: "vw",
    Explanation: "The rem unit is based on the root element's font size.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In CSS, the amount of space between an element's content and its border is known as...",
    Answer: "Padding",
    Distractor1: "Margin",
    Distractor2: "White Space",
    Distractor3: "Indentation",
    Explanation:
      "The padding is the amount of space between the element's content and its border.",
    Link: "https://www.freecodecamp.org/news/css-margins/",
  },
  {
    Question:
      "In CSS, which one of these values is NOT used for the background-attachment property?",
    Answer: "inherit",
    Distractor1: "local",
    Distractor2: "scroll",
    Distractor3: "fixed",
    Explanation:
      "The background-attachment property can take in the fixed, scroll and local values.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for tablet devices in a media query?",
    Answer: "481px - 768px",
    Distractor1: "300px - 7000px",
    Distractor2: "2px - 68px",
    Distractor3: "81px - 700px",
    Explanation:
      "The range of 481px - 768px can be used to target tablet devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a valid value for the font-weight property?",
    Answer: "bolding",
    Distractor1: "bold",
    Distractor2: "900",
    Distractor3: "lighter",
    Explanation:
      'The option "bolding" is not a valid value for the font-weight property.',
    Link: "https://www.freecodecamp.org/news/bold-font-in-html-font-weight-for-letters/",
  },
  {
    Question: "What does fr stand for in CSS grid?",
    Answer: "fraction unit",
    Distractor1: "font units",
    Distractor2: "flex unit",
    Distractor3: "fit unit",
    Explanation: "fr stands for fraction unit in CSS grid.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for laptop devices in a media query?",
    Answer: "769px -1024px",
    Distractor1: "7px -10px",
    Distractor2: "69px -124px",
    Distractor3: "769px -10,024px",
    Explanation:
      "The range of 769px -1024px can be used to target laptop devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, which one of these options is NOT a value used for the align-content property?",
    Answer: "row-gap",
    Distractor1: "space-between",
    Distractor2: "center",
    Distractor3: "start",
    Explanation:
      "The align-content property can accept seven values including space-around, space-between, start, and end.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, how do you make the text for an element all lowercase?",
    Answer: "text-transform: lowercase;",
    Distractor1: "text-transform: lower;",
    Distractor2: "text-transform: to-lower;",
    Distractor3: "text-transform: set-lower;",
    Explanation:
      "You can use the text-transform: lowercase; to make all of the text for that element lowercase",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question:
      "In CSS, what is the name of the property used to adjust the size of a background image?",
    Answer: "background-size",
    Distractor1: "background-repeat",
    Distractor2: "background-origin",
    Distractor3: "background-position",
    Explanation:
      "The background-size property is used to adjust the size for a background image.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question:
      "In CSS, what is the name of the property that sets the opacity of an HTML element?",
    Answer: "opacity",
    Distractor1: "margin",
    Distractor2: "padding",
    Distractor3: "border",
    Explanation:
      "The opacity property is used to set the opacity of an HTML element.",
    Link: "https://www.freecodecamp.org/news/transparent-background-image-opacity-in-css-and-html/",
  },
  {
    Question: "In CSS Flexbox, what does justify-content do?",
    Answer: "aligns the items along the main axis",
    Distractor1: "aligns the items to right of the y axis",
    Distractor2: "aligns the items to the left of  the x and y axis",
    Distractor3: "aligns the items to the right of the x axis",
    Explanation:
      "In CSS Flexbox, justify-content is used to align the items in the container along the main axis",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In CSS, what is the name of the rule that will override CSS style for an element?",
    Answer: "!important",
    Distractor1: "!override",
    Distractor2: "!change",
    Distractor3: "!specific",
    Explanation:
      "The !important rule will override the other CSS style rules for that element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question: "How do you create a flexbox container in CSS Flexbox?",
    Answer: "display:flex;",
    Distractor1: "display:flexbox;",
    Distractor2: "display:flexcontainer;",
    Distractor3: "display:flexB;",
    Explanation:
      "You can apply CSS Flexbox to an HTML container by using display:flex;",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS property used to position the grid inside the grid container along the y-axis?",
    Answer: "align-content",
    Distractor1: "justify-content",
    Distractor2: "end",
    Distractor3: "grid-unit-rows",
    Explanation:
      "The align-content property is used to position the grid inside the grid container along the y-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for desktops and large screens in a media query?",
    Answer: "1025px - 1200px",
    Distractor1: "25px - 120px",
    Distractor2: "125px - 12,000px",
    Distractor3: "5px - 12px",
    Explanation:
      "The range of 1025px - 1200px can be used to target desktops and large screens in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question: "In CSS, what does the A stand for in HSLA?",
    Answer: "Alpha",
    Distractor1: "Alphabetical",
    Distractor2: "Ambiguous",
    Distractor3: "Ancient",
    Explanation:
      "The A in HSLA stands for Alpha. This value represents the transparency of the color.",
    Link: "https://www.freecodecamp.org/news/css-font-color-how-to-style-text-in-html/",
  },
  {
    Question:
      "In CSS, what does the repeat-y value do in the background-repeat property?",
    Answer: "It repeats the image along the y-axis.",
    Distractor1: "It repeats the image along the x-axis.",
    Distractor2: "It repeats the image along both of the x-axis and y-axis.",
    Distractor3: "It repeats the image along the z-axis.",
    Explanation: "The repeat-y value repeats the image along the y-axis.",
    Link: "https://www.freecodecamp.org/news/learn-css-background-properties/",
  },
  {
    Question: "In CSS Flexbox, which one is NOT used with justify-content?",
    Answer: "flex-middle",
    Distractor1: "flex-start",
    Distractor2: "flex-end",
    Distractor3: "space-around",
    Explanation:
      "In CSS Flexbox, some of the options for justify-content include space-around, flex-end, flex-start and space-between",
    Link: "https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/",
  },
  {
    Question:
      "In HTML, how do you change the font-size of an h1 tag using inline CSS?",
    Answer: '<h1 style="font-size: 4rem">freeCodeCamp</h1>',
    Distractor1: '<h1 css="font-size: 4rem">freeCodeCamp</h1>',
    Distractor2: '<h1 font="font-size: 4rem">freeCodeCamp</h1>',
    Distractor3: '<h1 fontSize="font-size: 4rem">freeCodeCamp</h1>',
    Explanation:
      "To change the font size of an HTML element, you can use the style attribute and the font-size property in the opening tag.",
    Link: "https://www.freecodecamp.org/news/html-font-style-how-to-change-text-color-and-size-with-an-html-tag/",
  },
  {
    Question: "In CSS, how many pixels are equivalent to 1 rem unit?",
    Answer: "16",
    Distractor1: "32",
    Distractor2: "12",
    Distractor3: "6",
    Explanation: "One rem unit is equivalent to 16 pixels",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question:
      "In CSS, what selector is used to set the style of visited links?",
    Answer: "a:visited",
    Distractor1: "a:hover",
    Distractor2: "a:active",
    Distractor3: "a:link",
    Explanation: "With a:visited you can set the style of visited links.",
    Link: "https://www.freecodecamp.org/news/how-to-style-links-in-css/",
  },
  {
    Question:
      "In CSS, what is a common breakpoint range used for mobile devices in a media query?",
    Answer: "320px - 480px",
    Distractor1: "1000px - 5000px",
    Distractor2: "100px - 150px",
    Distractor3: "200px - 4000px",
    Explanation:
      "The range of 320px - 480px can be used to target mobile devices in a media query.",
    Link: "https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/",
  },
  {
    Question:
      "In CSS, what is the name of the CSS grid property used to create gaps between rows?",
    Answer: "row-gap",
    Distractor1: "grid-template-rows",
    Distractor2: "grid-columns",
    Distractor3: "repeat",
    Explanation: "The row-gap property is used to create gaps between rows.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, what is the code used to create a CSS grid container?",
    Answer: "display: grid;",
    Distractor1: "display: flex;",
    Distractor2: "display: grid-box;",
    Distractor3: "display: grid-container;",
    Explanation:
      "You can use display: grid; to create a new CSS grid container.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, how do you add content before an element?",
    Answer: "::before",
    Distractor1: "::add-content",
    Distractor2: "::before-content",
    Distractor3: "::after",
    Explanation:
      "You can use the ::before selector to add content before an element",
    Link: "https://www.freecodecamp.org/news/10-css-tricks-for-your-next-coding-project/",
  },
  {
    Question:
      "In CSS Grid, what is the name of the CSS property used to position the grid inside the grid container along the x-axis?",
    Answer: "justify-content",
    Distractor1: "grid-template-areas",
    Distractor2: "grid-template-rows",
    Distractor3: "row-gap",
    Explanation:
      "The justify-content property is used to position the grid in the grid container along the x-axis.",
    Link: "https://www.freecodecamp.org/news/css-grid-tutorial-with-cheatsheet/#css-grid-architecture",
  },
  {
    Question: "In CSS, which of the following options is one way to center a div?",
    Answer: "use  display: flex; on the parent container and  margin: auto; for the child container",
    Distractor1: "use  display: flex; on the parent container and  margin: 20px; for the child container",
    Distractor2: "use  display: flex; on the parent container and  margin: 50px; for the child container",
    Distractor3: "use  display: flex; on the parent container and  margin: 45%; for the child container",
    Explanation:
      "To center a div with CSS, apply display: flex; on the parent container and  margin: auto; for the child container.",
    Link: "https://www.freecodecamp.org/news/how-to-center-a-div-with-css-10-different-ways/"
  },
  {
    Question: "In CSS, 3em units are equivalent to how much in px units?",
    Answer: "48",
    Distractor1: "32",
    Distractor2: "16",
    Distractor3: "12",
    Explanation: "3em is equivalent to 48 pixels.",
    Link: "https://www.freecodecamp.org/news/learn-css-units-em-rem-vh-vw-with-code-examples/",
  },
  {
    Question: "What color would rgb(255,0,0) give?",
    Answer: "Red",
    Distractor1: "Green",
    Distractor2: "Yellow",
    Distractor3: "Blue",
    Explanation: "Each parameter defines the intensity of each color, rgb(red, green, and blue), with an integer number ranging from 0-255. The minimum value of 0 represents that none of the color is being shown, so it is at its darkest. On the other hand, the maximum value of 255 represents that the full amount of color and the full intensity is on display",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/",
  },
];

export default cssQuiz;
