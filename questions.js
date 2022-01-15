const questions = [
    {   
        // 1
        question: "The SaveAs dialog box can be used :",
        optionA: "for saving the file for the first time",
        optionB: "to save file by some alternative name",
        optionC: "to save file in a format other than Word",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 2
        question: "Non-impact based printing device is :",
        optionA: "Dot matrix printer",
        optionB: "Scanner",
        optionC: "Laser Printer",
        optionD: "None of the above",
        correctAnswer: "Laser Printer"
    },

    {
        // 3
        question: "To cut text from the document, press the keys :",
        optionA: "Ctrl and V",
        optionB: "Ctrl and C",
        optionC: "Ctrl and A",
        optionD: "Ctrl and X",
        correctAnswer: "Ctrl and X"
    },

    {
        // 4
        question: "__________ maps IP addresses with the domain names of the sites.",
        optionA: "URL",
        optionB: "DNS",
        optionC: "FTP",
        optionD: "None of the above",
        correctAnswer: "DNS"
    },

    {
        // 5
        question: "A Nibble consists of __________ Bits :",
        optionA: "2",
        optionB: "4",
        optionC: "8",
        optionD: "16",
        correctAnswer: "4"
    },

    {
        // 6
        question: "User interact with the operating system through a set of __________.",
        optionA: "USB Sticks",
        optionB: "Commands",
        optionC: "Scanner",
        optionD: "All of the above",
        correctAnswer: "Commands"
    },

    {
        // 7
        question: "Which is the technology used in the evaluation of aptitude test ?",
        optionA: "OCR",
        optionB: "OMR",
        optionC: "MICR",
        optionD: "MCR",
        correctAnswer: "OMR"
    },

    {
        // 8
        question: "To create a Paragraph Break in MSWORD, which key is used ?",
        optionA: "Enter",
        optionB: "Esc",
        optionC: "Tab",
        optionD: "Shift",
        correctAnswer: "Enter"
    },

    {
        // 9
        question: "MIDI means :",
        optionA: "Multimedia Instrument Digital Information",
        optionB: "Multimedia Instrument Digital Interface",
        optionC: "Musical Instrument Digital Interface",
        optionD: "Musical Information Digital Information",
        correctAnswer: "Musical Instrument Digital Interface"
    },

    {
        // 10
        question: "Full form of ASCII :",
        optionA: "American Standard Code for Information Interconnection",
        optionB: "American Situation Code for Information Intercommunication",
        optionC: "American Standard Code for Information Interchange",
        optionD: "American Standard Coding for Information Interconnection",
        correctAnswer: "American Standard Code for Information Interchange"
    },

    {
        // 11
        question: "You can add words not available in Word dictionary to :",
        optionA: "My dictionary",
        optionB: "User dictionary",
        optionC: "Custom dictionary",
        optionD: "Live dictionary",
        correctAnswer: "Custom dictionary"
    },

    {
        // 12
        question: "Portrait is used to refer to page orientation, which is :",
        optionA: "vertical",
        optionB: "horizontal",
        optionC: "flip",
        optionD: "upside down",
        correctAnswer: "vertical"
    },

    {
        // 13
        question: "'Passport Seva' website is :",
        optionA: "www.passportindia.gov.in",
        optionB: "www.passportindia.com",
        optionC: "www.passportindia.edu",
        optionD: "www.e-passportindia.gov.in",
        correctAnswer: "www.passportindia.gov.in"
    },

    {
        // 14
        question: "ORS stands for :",
        optionA: "Open Resource System",
        optionB: "Online Registration System",
        optionC: "Open Reform System",
        optionD: "Open Repair System",
        correctAnswer: "Online Registration System"
    },

    {
        // 15
        question: "UMANG is integrated with :",
        optionA: "Aadhaar and Digilocker",
        optionB: "Aadhaar or Digilocker",
        optionC: "Digilocker only",
        optionD: "Aadhaar only",
        correctAnswer: "Aadhaar and Digilocker"
    },

    {
        // 16
        question: "Which box overflows with emails generally ?",
        optionA: "Inbox",
        optionB: "Outbox",
        optionC: "AddressBox",
        optionD: "MessageBox",
        correctAnswer: "Inbox"
    },

    {
        // 17
        question: "Gmail is a software used to ",
        optionA: "Search web pages",
        optionB: "Check Emails",
        optionC: "Find hotels",
        optionD: "Search Files",
        correctAnswer: "Check Emails"
    },

    {
        // 18
        question: "What is the minimum age to join Facebook ?",
        optionA: "18 years",
        optionB: "15 years",
        optionC: "13 years",
        optionD: "10 years",
        correctAnswer: "13 years"
    },

    {
        // 19
        question: "When was Twitter launched ?",
        optionA: "01-03-2006",
        optionB: "01-04-2006",
        optionC: "01-10-2006",
        optionD: "01-12-2006",
        correctAnswer: "01-10-2006"
    },

    {
        // 20
        question: "Which option helps us to send the same letter to different persons ?",
        optionA: "Mail Merge",
        optionB: "Macros",
        optionC: "Multiple Letter",
        optionD: "Template",
        correctAnswer: "Mail Merge"
    },

    {
        // 21
        question: "Numbers in base 16 are called as",
        optionA: "Octal System",
        optionB: "Hexadecimal System",
        optionC: "Decimal System",
        optionD: "Binary System",
        correctAnswer: "Hexadecimal System"
    },

    {
        // 22
        question: "The formula in cell A2 is =B2+C3 on copying this formula in cell C2 the formula will be :",
        optionA: "=D3+E4",
        optionB: "=D2+E3",
        optionC: "=D2+E4",
        optionD: "=D3+E3",
        correctAnswer: "=D2+E3"
    },

    {
        // 23
        question: "Which of the following file extensions indicate file created in Paint ?",
        optionA: "BMP",
        optionB: "DOC",
        optionC: "STK",
        optionD: "PPT",
        correctAnswer: "BMP"
    },

    {
        // 24
        question: "Which of the following is an input device ?",
        optionA: "Screen",
        optionB: "Speaker",
        optionC: "Keyboard",
        optionD: "Printer",
        correctAnswer: "Keyboard"
    },

    {
        // 25
        question: "The cost of storing a bit is minimum in :",
        optionA: "Cache",
        optionB: "RAM",
        optionC: "Register",
        optionD: "Magnetic Disc",
        correctAnswer: "Magnetic Disc"
    },

    {
        // 26
        question: "________ is known as High level language.",
        optionA: "Windows 7",
        optionB: "Operating System",
        optionC: "Java",
        optionD: "Apple",
        correctAnswer: "Java"
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
        // 31
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 32
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 33
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 34
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 35
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    

]