const questions = [
    
    {
        // 1
        question: "Which of the following is the use of id() function",
        optionA: "Every object doesn’t have a unique id",
        optionB: "Id returns the identity of the object",
        optionC: "All of the mentioned",
        optionD: "None of the mentioned",
        correctAnswer: "Id returns the identity of the object"
    },

    {
        // 2
        question: "Is python case sensitive when dealing with identifiers",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        correctAnswer: "Yes"
    },

    {
        // 3
        question: "All keywords in Python are in",
        optionA: "uppercase",
        optionB: "lowercase",
        optionC: "Capitalized",
        optionD: "None of the mentioned",
        correctAnswer: "None of the mentioned"
    },

    {
        // 4
        question: "Mathematical operations can be performed on a string.",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "False"
    },

    {
        // 5
        question: "Which of the following has the highest precedence in the expression?",
        optionA: "Addition",
        optionB: "Multiplication",
        optionC: "Exponential",
        optionD: "Parenthesis",
        correctAnswer: "Parenthesis"
    },

    {
        // 6
        question: "What is the return type of function id?",
        optionA: "float",
        optionB: "bool",
        optionC: "dict",
        optionD: "int",
        correctAnswer: "int"
    },

    {
        // 7
        question: "What is the output of the following? print(\"Hello {0!r} and {0!s}\".format('foo','bin'))",
        optionA: "Hello ‘foo’ and foo",
        optionB: "Hello foo and foo",
        optionC: "Hello foo and ‘bin’",
        optionD: "Error",
        correctAnswer: "Hello ‘foo’ and foo"
    },

    {
        // 8
        question: "Which of the following data types is not supported in python",
        optionA: "String",
        optionB: "Numbers",
        optionC: "Slice",
        optionD: "List",
        correctAnswer: "Slice"
    },

    {
        // 9
        question: "Which of the following keywords mark the beginning of the class definition?",
        optionA: "return",
        optionB: "class",
        optionC: "def",
        optionD: "All of the above",
        correctAnswer: "class"
    },

    {
        // 10
        question: "Select the reserved word in python",
        optionA: "else",
        optionB: "raise",
        optionC: "import",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 11
        question: "Are nested if-else allowed in Python",
        optionA: "Yes",
        optionB: "no",
        optionC: "",
        optionD: "",
        correctAnswer: "Yes"
    },

    {
        // 12
        question: "Python allows string slicing. What is output of below code : s='cppbuzzchicago'\n print(s[3:5])",
        optionA: "buzzc",
        optionB: "pbuzz",
        optionC: "bu",
        optionD: "None of these",
        correctAnswer: "bu"
    },

    {
        // 13
        question: "class test: def__init__(self):print \"Hello World\" def__init__(self):print\"Bye World\" obj=test()",
        optionA: "Bye World",
        optionB: "Hello World",
        optionC: "Compliation Error",
        optionD: "Ambiguity",
        correctAnswer: "Compliation Error"
    },

    {
        // 14
        question: "The format function, when applied on a string returns:",
        optionA: "list",
        optionB: "bool",
        optionC: "int",
        optionD: "str",
        correctAnswer: "str"
    },

    {
        // 15
        question: "Which statement is correct..?",
        optionA: "List is mutable and Tuple is immutable",
        optionB: "List is immutable & Tuple is mutable",
        optionC: "Both are mutable",
        optionD: "Both are immutable",
        correctAnswer: "List is mutable and Tuple is immutable"
    },

    {
        // 16
        question: "What is the maximum possible length of an identifier?",
        optionA: "32 Characters",
        optionB: "63 Characters",
        optionC: "79 Characters",
        optionD: "31 Characters",
        correctAnswer: "79 Characters"
    },

    {
        // 17
        question: "Which of the following is not a python's predefined data type?",
        optionA: "List",
        optionB: "Dictionary",
        optionC: "Tuple",
        optionD: "Class",
        correctAnswer: "Class"
    },

    {
        // 18
        question: "What will be the output of 7^10 in python",
        optionA: "13",
        optionB: "15",
        optionC: "2",
        optionD: "None of these",
        correctAnswer: "13"
    },

    {
        // 19
        question: "19%2 in python",
        optionA: "1",
        optionB: "2",
        optionC: "9",
        optionD: "None of these",
        correctAnswer: "1"
    },

    {
        // 20
        question: "Which of the following has more precedence",
        optionA: "/",
        optionB: "+",
        optionC: "()",
        optionD: "-",
        correctAnswer: "()"
    },

    {
        // 21
        question: "Is tuple mutable",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        correctAnswer: "No"
    },

    {
        // 22
        question: "Which of the following is a python tuple?",
        optionA: "[3]",
        optionB: "{1,2,3}",
        optionC: "(1,2,3,4)",
        optionD: "None of the above",
        correctAnswer: "(1,2,3,4)"
    },

    {
        // 23
        question: "Which of the following is not a declaration of the dictionary",
        optionA: "{1:'A', 2:'B'}",
        optionB: "{1,\"A\",2,\"B\"}",
        optionC: "dict([[1,\"A\"],[2,\"B\"]])",
        optionD: "{}",
        correctAnswer: "{1,\"A\",2,\"B\"}"
    },

    {
        // 24
        question: "Which of the following refers to the Mathematical function",
        optionA: "sqrt",
        optionB: "add",
        optionC: "rhombus",
        optionD: "None of the above",
        correctAnswer: "sqrt"
    },

    {
        // 25
        question: "What will be the output of the following python code.\ndef cube(x):\n\treturn x*x*x\n x=cube(5)\nprint(x)",
        optionA: "26",
        optionB: "125",
        optionC: "525",
        optionD: "None of the above",
        correctAnswer: "125"
    },

    {
        // 26
        question: "which of these is floor division?",
        optionA: "/",
        optionB: "//",
        optionC: "%",
        optionD: "$",
        correctAnswer: "//"
    },

    {
        // 27
        question: "Python allows you to assign a single value to multiple variables simultaneously",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 28
        question: "In python programming, pass is a null statement.",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        correctAnswer: "Yes"
    },

    {
        // 29
        question: "i=1\nwhile True:\n\tif i%2 == 0\n\t\tbreak\n\tprint i\n\ti+=2",
        optionA: "1",
        optionB: "1,2,5,8,9",
        optionC: "1,3,5,7,9,11",
        optionD: "None of the above",
        correctAnswer: "None of the above"
    },

    {
        // 30
        question: "Which symbol is used to test condition in a flow chart.",
        optionA: "Terminal",
        optionB: "Process",
        optionC: "Decision",
        optionD: "Input/Output",
        correctAnswer: "Decision"
    },

    {
        // 31
        question: "Output of this statement: chr(ord('A'))",
        optionA: "A",
        optionB: "B",
        optionC: "a",
        optionD: "Error",
        correctAnswer: "A"
    },

    {
        // 32
        question: "Who created python",
        optionA: "Tom Cruise",
        optionB: "James Gosling",
        optionC: "Dennis Ritchie",
        optionD: "Guido Van Rossum",
        correctAnswer: "Guido Van Rossum"
    },

    {
        // 33
        question: "In Which language python is written",
        optionA: "PHP",
        optionB: "Java",
        optionC: "C",
        optionD: "None of the above",
        correctAnswer: "C"
    },

    {
        // 34
        question: "Python is released in which year publicly?",
        optionA: "1990",
        optionB: "1991",
        optionC: "1992",
        optionD: "1993",
        correctAnswer: "1991"
    },

    {
        // 35
        question: "Which of symbols are used in python comments",
        optionA: "/* */",
        optionB: "//",
        optionC: "**",
        optionD: "#",
        correctAnswer: "#"
    },

    {
        // 36
        question: "Where is function can be defined",
        optionA: "class",
        optionB: "Another function",
        optionC: "Module",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 37
        question: "Which keyword is use for function",
        optionA: "def",
        optionB: "define",
        optionC: "fun",
        optionD: "function",
        correctAnswer: "def"
    },

    {
        // 38
        question: "What do we use to define a block of code in Python language",
        optionA: "Indentation",
        optionB: "List",
        optionC: "Classes",
        optionD: "Entities",
        correctAnswer: "Indentation"
    },

    {
        // 39
        question: "Identify the words which best describes python?",
        optionA: "Flexible",
        optionB: "Reliable",
        optionC: "Robust & Simple",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 40
        question: "Output of statement : round(4.576)",
        optionA: "4.5",
        optionB: "5",
        optionC: "4",
        optionD: "4.6",
        correctAnswer: "5"
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 1
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
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
