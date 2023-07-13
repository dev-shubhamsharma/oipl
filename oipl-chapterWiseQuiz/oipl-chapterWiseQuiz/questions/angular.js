const questions = [

    {
        // 1
        question: "AngularJS is based on",
        optionA: "MVC Architecture",
        optionB: "Decorator pattern",
        optionC: "MVVM Architectural pattern",
        optionD: "Observer pattern",
        correctAnswer: "MVC Architecture"
    },

    {
        // 2
        question: "AngularJS Expressions are written using",
        optionA: "(expression)",
        optionB: "{{expression}}",
        optionC: "{{{expression}}}",
        optionD: "[expression]",
        correctAnswer: "{{expression}}"
    },

    {
        // 3
        question: "What is the correct way to apply multiple filters in AngularJS.",
        optionA: "{{ expression | filter1 | filter2 | ...}}",
        optionB: "{{ expression | {filter1} | {filter2} | ...}}",
        optionC: "{{ expression - {filter1} - {filter2} - ...}}",
        optionD: "{{ {filter1} | {filter2} | ... - expression}}",
        correctAnswer: "{{ expression | filter1 | filter2 | ...}}"
    },

    {
        // 4
        question: "Which directive initialized an AngularJS application.",
        optionA: "ng-init",
        optionB: "ng-app",
        optionC: "ngSrc",
        optionD: "ng-start",
        correctAnswer: "ng-app"
    },

    {
        // 5
        question: "Which of the following is not valid AngularJS filter.",
        optionA: "lowercase",
        optionB: "orderby",
        optionC: "email",
        optionD: "currency",
        correctAnswer: "email"
    },

    {
        // 6
        question: "What are AngularJS Controllers are responsible for :",
        optionA: "Controlling the data",
        optionB: "Displaying the data",
        optionC: "Both",
        optionD: "None of these",
        correctAnswer: "Controlling the data"
    },

    {
        // 7
        question: "Which angular directive is used to binds the value of HTML controls(input, select, textarea) to application data",
        optionA: "ng-cloak",
        optionB: "ng-bind",
        optionC: "ng-model",
        optionD: "ng-blur",
        correctAnswer: "ng-model"
    },

    {
        // 8
        question: "Which one is correct syntax for creating a module in AngularJS",
        optionA: "var myModule = angular.module();",
        optionB: "var myModule = new Module();",
        optionC: "angular.module(\"app\",[])",
        optionD: "None of these",
        correctAnswer: "angular.module(\"app\",[])"
    },

    {
        // 9
        question: "How do you share data between controller and view",
        optionA: "using Model",
        optionB: "using Services",
        optionC: "using Factory",
        optionD: "using $scope",
        correctAnswer: "using Services"
    },

    {
        // 10
        question: "What is $routeProvider ?",
        optionA: "A service",
        optionB: "A module",
        optionC: "A component",
        optionD: "None of these",
        correctAnswer: "A service"
    },

    {
        // 11
        question: "Who is the father of AngularJS",
        optionA: "Brad Green",
        optionB: "Misko Hevery",
        optionC: "Adam Abrons",
        optionD: "None of these",
        correctAnswer: "Misko Hevery"
    },

    {
        // 12
        question: "Angular 1.X is written in",
        optionA: "Java",
        optionB: "JavaScript",
        optionC: "TypeScript",
        optionD: "None of these",
        correctAnswer: "JavaScript"
    },

    {
        // 13
        question: "Is AngularJS supports two way binding",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 14
        question: "Which angular directive is used to disbale an element",
        optionA: "ng-disabled",
        optionB: "ng-hide",
        optionC: "ng-false",
        optionD: "None of these",
        correctAnswer: "ng-disabled"
    },

    {
        // 15
        question: "Is AngularJS supports internalization ?",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 16
        question: "Can we extend AngularJS",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 17
        question: "AngularJS directives are used in ______",
        optionA: "Module",
        optionB: "Controller",
        optionC: "Service",
        optionD: "View",
        correctAnswer: "View"
    },

    {
        // 18
        question: "AngularJS directives can be written in templates as",
        optionA: "Tag",
        optionB: "Attribute",
        optionC: "Class name",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 19
        question: "Which of the following directive allows us to use a form in AngularJS",
        optionA: "ng-include",
        optionB: "ng-form",
        optionC: "ng-directive",
        optionD: "ng-bind",
        correctAnswer: "ng-form"
    },

    {
        // 20
        question: "AngularJS applications are a mix of :",
        optionA: "HTML and PHP",
        optionB: "HTML and JavaScript",
        optionC: "HTML and CrossScript",
        optionD: "HTML and AngularScript",
        correctAnswer: "HTML and JavaScript"
    },

    {
        // 21
        question: "AngularJS application are pure JavaScript Expressions",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 22
        question: "Can $http service is used to make an Ajax call to server",
        optionA: "Yes",
        optionB: "No",
        optionC: "",
        optionD: "",
        correctAnswer: "Yes"
    },

    {
        // 23
        question: "Which components can be injected as a dependency in AngularJS",
        optionA: "Value",
        optionB: "Factory",
        optionC: "Constant",
        optionD: "Application module",
        correctAnswer: "Application module"
    },

    {
        // 24
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 25
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 26
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 27
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 28
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 29
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 30
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