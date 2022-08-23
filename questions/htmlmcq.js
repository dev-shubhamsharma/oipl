const questions = [
    
    {
        // 1
        question: "Correct HTML tag for the largest heading is",
        optionA: "<h6>",
        optionB: "<heading>",
        optionC: "<h1>",
        optionD: "<head>",
        correctAnswer: "<h1>"
    },

    {
        // 2
        question: "Which of the following is not an attribute of <form> tag",
        optionA: "Action",
        optionB: "Method",
        optionC: "name",
        optionD: "url",
        correctAnswer: "url"
    },

    {
        // 3
        question: "HTML is a subset of ",
        optionA: "SGMT",
        optionB: "SGMD",
        optionC: "SGML",
        optionD: "None of these",
        correctAnswer: "SGML"
    },

    {
        // 4
        question: "All HTML tags are must be Enclosed in ?",
        optionA: "? And !",
        optionB: "< And >",
        optionC: "{ And }",
        optionD: "# And #",
        correctAnswer: "< And >"
    },

    {
        // 5
        question: "The BODY tag is usually used after",
        optionA: "EM tag",
        optionB: "TITLE tag",
        optionC: "HEAD tag",
        optionD: "HTML tag",
        correctAnswer: "HTML tag"
    },

    {
        // 6
        question: "Choose the Correct HTML tag to make a text italic",
        optionA: "<italic>",
        optionB: "<it>",
        optionC: "<i>",
        optionD: "<il>",
        correctAnswer: "<i>"
    },

    {
        // 7
        question: "A Much better approach to establish the base URL is to use the _____ element.",
        optionA: "BODY",
        optionB: "BASE",
        optionC: "HEAD",
        optionD: "None of the Above",
        correctAnswer: "BASE"
    },

    {
        // 8
        question: "GIF and JPG are the two main types of what ?",
        optionA: "Videos",
        optionB: "Images",
        optionC: "None of the above",
        optionD: "Animated Effects",
        correctAnswer: "Animated Effects"
    },

    {
        // 9
        question: "To start a list using circles, use",
        optionA: "<ul type=\"circle\">",
        optionB: "<ul type=\"round\">",
        optionC: "<ul =\"round\">",
        optionD: "<ul \"round\">",
        correctAnswer: "<ul type=\"circle\">"
    },

    {
        // 10
        question: "Which is not a a property of attribute behaviour of <marquee> tag ?",
        optionA: "Blur",
        optionB: "Scroll",
        optionC: "Alternate",
        optionD: "Slide",
        correctAnswer: "Blur"
    },

    {
        // 11
        question: "A simple text file which tells the browser what to cache is known as a",
        optionA: "Input files",
        optionB: "Output files",
        optionC: "A Manifest file",
        optionD: "HTML File",
        correctAnswer: "A Manifest file"
    },

    {
        // 12
        question: "Which HTML tag is used to define a client side script such as the Javascript.",
        optionA: "<unscript>",
        optionB: "<script>",
        optionC: "Both above",
        optionD: "None of the above",
        correctAnswer: "<script>"
    },

    {
        // 13
        question: "Which tag is used to create a checkbox in HTML5",
        optionA: "<checkbox>",
        optionB: "<input type=\"checkbox\">",
        optionC: "<cb>",
        optionD: "None of the above",
        correctAnswer: "<input type=\"checkbox\">"
    },

    {
        // 14
        question: "Which attribute sets the text direction as related to lang attribute.",
        optionA: "Sub",
        optionB: "Lang",
        optionC: "Ds",
        optionD: "Dir",
        correctAnswer: "Dir"
    },

    {
        // 15
        question: "Which HTML attribute is used to provide an advisory text about an element or its content.",
        optionA: "Dir",
        optionB: "Title",
        optionC: "Tooltip",
        optionD: "None of the above",
        correctAnswer: "Title"
    },

    {
        // 16
        question: "Which tag is not used if you want to indicate the importance of the phrase.",
        optionA: "<h1>",
        optionB: "<em>",
        optionC: "<strong>",
        optionD: "<i>",
        correctAnswer: "<i>"
    },

    {
        // 17
        question: "HTML is what type of language",
        optionA: "Scripting language",
        optionB: "Markup language",
        optionC: "Programming language",
        optionD: "Network protocol",
        correctAnswer: "Markup language"
    },

    {
        // 18
        question: "All elements are identified by their ____ and are marked up using either start tags and end tags or self closing tags.",
        optionA: "Attribute Name",
        optionB: "Class Name",
        optionC: "Tag Name",
        optionD: "None of the mention",
        correctAnswer: "Tag Name"
    },

    {
        // 19
        question: "The ______ element represents a span of text that is isolated from its surroundings for the purposes of Bidirectional Text formatting.",
        optionA: "B",
        optionB: "Bdi",
        optionC: "Bdo",
        optionD: "Base",
        correctAnswer: "Bdi"
    },

    {
        // 20
        question: "Apart from <b> tag, what other tag makes text bold?",
        optionA: "<emp>",
        optionB: "<black>",
        optionC: "<fat>",
        optionD: "<strong>",
        correctAnswer: "<strong>"
    },

    {
        // 21
        question: "Who is known as the father of WWW",
        optionA: "Robert Cailliau",
        optionB: "Tim Berners-Lee",
        optionC: "Tim Thompson",
        optionD: "Charles Darwin",
        correctAnswer: "Tim Berners-Lee"
    },

    {
        // 22
        question: "What should be the first tag in any HTML Document.",
        optionA: "<html>",
        optionB: "<head>",
        optionC: "<title>",
        optionD: "<document>",
        correctAnswer: "<html>"
    },

    {
        // 23
        question: "What tag is used to display a picture in a HTML page",
        optionA: "picture",
        optionB: "img",
        optionC: "src",
        optionD: "image",
        correctAnswer: "img"
    },

    {
        // 24
        question: "HTML web pages can be read and rendered by ",
        optionA: "Compiler",
        optionB: "Server",
        optionC: "Web browser",
        optionD: "Interpreter",
        correctAnswer: "Web browser"
    },

    {
        // 25
        question: "HTML tags are surrounded by which type of brackets",
        optionA: "Curly",
        optionB: "Round",
        optionC: "Square",
        optionD: "Angle",
        correctAnswer: "Angle"
    },

    {
        // 26
        question: "Which of the following attribute triggers event, when an element gets user input",
        optionA: "ondata",
        optionB: "onhaschange",
        optionC: "oninput",
        optionD: "onloadeddata",
        correctAnswer: "oninput"
    },

    {
        // 27
        question: "Intensity of a color can be described through",
        optionA: "Hue",
        optionB: "Saturation",
        optionC: "Lightness",
        optionD: "Grayscale",
        correctAnswer: "Saturation"
    },

    {
        // 28
        question: "How can you create an E-mail link",
        optionA: "<a href=\"a@b\">",
        optionB: "<mail>a@b",
        optionC: "<a href=\"mailto:a@b.com\">",
        optionD: "<mail href=\"a@b\">",
        correctAnswer: "<a href=\"mailto:a@b.com\">"
    },

    {
        // 29
        question: "What is correct HTML for create a hyperlink?",
        optionA: "<a href=\"http://www.example.com\">example</a>",
        optionB: "<a name=\"\">A</a>",
        optionC: "<a url=\"http://www.example.com\">example</a>",
        optionD: "<a>B</a>",
        correctAnswer: "<a href=\"http://www.example.com\">example</a>"
    },

    {
        // 30
        question: "What is the correct HTML tag for inserting a line break",
        optionA: "<break />",
        optionB: "<br />",
        optionC: "<lb />",
        optionD: "<nbsp>",
        correctAnswer: "<br />"
    },

    {
        // 31
        question: "Which are the objects used for storing data on the client provided by the html local storage.",
        optionA: "Window.localStorage",
        optionB: "Window.sessionStorage",
        optionC: "Window.localSession",
        optionD: "Both A & B",
        correctAnswer: "Both A & B"
    },

    {
        // 32
        question: "Which HTML element is used to define the discription data",
        optionA: "<dt>",
        optionB: "<dd>",
        optionC: "<li>",
        optionD: "<dl>",
        correctAnswer: "<dd>"
    },

    {
        // 33
        question: "Which of the following is a Declaration for an HTML Document.",
        optionA: "<html>",
        optionB: "<!DOCTYPE html>",
        optionC: "<body>",
        optionD: "<p>",
        correctAnswer: "<!DOCTYPE html>"
    },

    {
        // 34
        question: "If you want to change the text color to red which of the following tags will you use.",
        optionA: "<body text=\"red\">",
        optionB: "<body bgcolor=\"red\">",
        optionC: "<body color=\"red\">",
        optionD: "None of the above",
        correctAnswer: "<body text=\"red\">"
    },

    {
        // 35
        question: "HTML uses :",
        optionA: "Fixed tags defined by the language",
        optionB: "User defined tags",
        optionC: "Pre-specified tags",
        optionD: "Tags only for linking",
        correctAnswer: "Fixed tags defined by the language"
    },

    {
        // 36
        question: "HTML links are defined with <a> tag and address is specified by attribute",
        optionA: "href",
        optionB: "hlink",
        optionC: "src",
        optionD: "src-link",
        correctAnswer: "href"
    },

    {
        // 37
        question: "An HTML file can be saved with any extension.",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 38
        question: "Which character is used to indicate an end tag in html",
        optionA: ">",
        optionB: "<",
        optionC: "/",
        optionD: "*",
        correctAnswer: "/"
    },

    {
        // 39
        question: "We use ______ to change the size of an image in html",
        optionA: "bigger and smaller",
        optionB: "height and width",
        optionC: "top and bottom",
        optionD: "None of the above",
        correctAnswer: "height and width"
    },

    {
        // 40
        question: "Which of the following is not used to create or edit html documents.",
        optionA: "FileZilla FTP Client",
        optionB: "Online HTML Editor",
        optionC: "Word processing software",
        optionD: "All of the above",
        correctAnswer: "FileZilla FTP Client"
    },

    {
        // 41
        question: "In which part of the html metadata is contained",
        optionA: "head tag",
        optionB: "title tag",
        optionC: "html tag",
        optionD: "body tag",
        correctAnswer: "head tag"
    },

    {
        // 42
        question: "Which element is used to get highlighted text in html5",
        optionA: "<u>",
        optionB: "<mark>",
        optionC: "<highlight>",
        optionD: "<b>",
        correctAnswer: "<mark>"
    },

    {
        // 43
        question: "Which of the following is not a html5 tag?",
        optionA: "<track>",
        optionB: "<video>",
        optionC: "<slider>",
        optionD: "<source>",
        correctAnswer: "<slider>"
    },

    {
        // 44
        question: "How do we write comments in HTML?",
        optionA: "</.....-->",
        optionB: "<!.....-->",
        optionC: "</...../>",
        optionD: "<......!>",
        correctAnswer: "<!.....-->"
    },

    {
        // 45
        question: "In Html, which attribute is used to create a link that opens in a new window tab",
        optionA: "src=\"_blank\"",
        optionB: "alt=\"_blank\"",
        optionC: "target=\"_blank\"",
        optionD: "target=\"_self\"",
        correctAnswer: "target=\"_blank\""
    },

    {
        // 46
        question: "Which html element is used for short quote.",
        optionA: "<em>",
        optionB: "<abbr>",
        optionC: "<q>",
        optionD: "<blockquote>",
        correctAnswer: "<q>"
    },

    {
        // 47
        question: "Which html element is used for abbreviation or acronym?",
        optionA: "<abbr>",
        optionB: "<blockquote>",
        optionC: "<q>",
        optionD: "<em>",
        correctAnswer: "<abbr>"
    },

    {
        // 48
        question: "What is the work of <address> element in html5",
        optionA: "contains IP address",
        optionB: "contains home address",
        optionC: "contains url",
        optionD: "contains contact details for author",
        correctAnswer: "contains contact details for author"
    },

    {
        // 49
        question: "To show deleted text, which html element is used",
        optionA: "<del>",
        optionB: "<em>",
        optionC: "<strong>",
        optionD: "<ins>",
        correctAnswer: "<del>"
    },

    {
        // 50
        question: "Which tag is used to create a dropdown in HTML form",
        optionA: "<input>",
        optionB: "<select>",
        optionC: "<text>",
        optionD: "<textarea>",
        correctAnswer: "<select>"
    },

    {
        // 51
        question: "What is the use of <hr/> tag in html",
        optionA: "for making content appearance italics",
        optionB: "to create vertical rule between sections",
        optionC: "to create a line break",
        optionD: "to create horizontal rule between sections",
        correctAnswer: "to create horizontal rule between sections"
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    }

        





]
