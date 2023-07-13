const questions = [
    {
        // 1
        question: "The formula in cell A2 is =B2+C3 on copying this formula in cell C2 the formula will be :",
        optionA: "=D3+E4",
        optionB: "=D2+E3",
        optionC: "=D2+E4",
        optionD: "=D3+E3",
        correctAnswer: "=D2+E3"
    },

    {
        // 2
        question: "ROUND(1363.45, -2) returns :",
        optionA: "-1364",
        optionB: "1400",
        optionC: "1363.45",
        optionD: "1300",
        correctAnswer: "1400"
    },

    {
        // 3
        question: "A collection of worksheets is called as :",
        optionA: "Excel Sheets",
        optionB: "Workbook",
        optionC: "Excel Worksheets",
        optionD: "Excel Book",
        correctAnswer: "Workbook"
    },

    {
        // 4
        question: "To perform addition of all the cells from B8 to B11, which is the correct option ?",
        optionA: "=ADD(B8:B11)",
        optionB: "=(B8+B11)",
        optionC: "=SUM(B8+B11)",
        optionD: "=SUM(B8:B11)",
        correctAnswer: "=SUM(B8:B11)"
    },

    {
        // 5
        question: "To change the cell reference B4:B9 to an absolute cell reference, you would enter it as",
        optionA: "B4:B9",
        optionB: "B$4:B$9",
        optionC: "$B$4:$B$9",
        optionD: "$B4:$B9",
        correctAnswer: "$B$4:$B$9"
    },

    {
        // 6
        question: "The arranging of data in a logical sequence",
        optionA: "Sorting",
        optionB: "Filtering",
        optionC: "Auto correct",
        optionD: "Auto complete",
        correctAnswer: "Sorting"
    },

    {
        // 7
        question: "Readymade formulas of Excel",
        optionA: "Auto correct",
        optionB: "Auto right",
        optionC: "Sorting",
        optionD: "Functions",
        correctAnswer: "Functions"
    },

    {
        // 8
        question: "Inventory _________ is concerned with minimizing the total cost of inventory.",
        optionA: "Control",
        optionB: "End",
        optionC: "Autosum",
        optionD: "Link",
        correctAnswer: "Control"
    },

    {
        // 9
        question: "________ is used in MS-Excel to total rows and/or columns",
        optionA: "Autosum",
        optionB: "Mailbox",
        optionC: "Link",
        optionD: "Autocorrect",
        correctAnswer: "Autosum"
    },



    {
        // 10
        question: "________ sign is mandatory before any formula in calc",
        optionA: "+",
        optionB: "-",
        optionC: "=",
        optionD: "*",
        correctAnswer: "="
    },


    {
        // 11
        question: "Which shortcut key is used for reach to last edit cell in Libreoffice Calc",
        optionA: "Ctrl + Home",
        optionB: "Ctrl + End",
        optionC: "Ctrl + H",
        optionD: "Alt + Ctrl + O",
        correctAnswer: "Ctrl + End"
    },

    {
        // 12
        question: "What is the ouput of the expression in Calc : =100/10/2 ?",
        optionA: "5",
        optionB: "25",
        optionC: "50",
        optionD: "200",
        correctAnswer: "5"
    },

    {
        // 13
        question: "Shortcut key used to open the function wizard in Libreoffice calc is :",
        optionA: "Alt + F1",
        optionB: "Ctrl + F6",
        optionC: "F2",
        optionD: "Ctrl + F2",
        correctAnswer: "Ctrl + F2"
    },

    {
        // 14
        question: "The combination of the column letter and row number for a cell in an calc spreadsheet is called",
        optionA: "Cell across",
        optionB: "cell reference",
        optionC: "cell identity",
        optionD: "cell identification number",
        correctAnswer: "cell reference"
    },

    {
        // 15
        question: "Which key is used to open manage template in Libreoffice calc",
        optionA: "Ctrl + T",
        optionB: "Ctrl + F1",
        optionC: "Ctrl + O",
        optionD: "Ctrl + Shift + N",
        correctAnswer: "Ctrl + Shift + N"
    },

    {
        // 16
        question: "What is the file extension of Libreoffice calc spreadsheet",
        optionA: ".ODS",
        optionB: ".XLX",
        optionC: ".ODP",
        optionD: ".ODT",
        correctAnswer: ".ODS"
    },

    {
        // 17
        question: "What is the maximum number of characters in one cell in calc spreadsheet",
        optionA: "6000",
        optionB: "32767",
        optionC: "255",
        optionD: "1021",
        correctAnswer: "32767"
    },

    {
        // 18
        question: "No of Default sheets in Libreoffice calc",
        optionA: "0",
        optionB: "1",
        optionC: "2",
        optionD: "3",
        correctAnswer: "1"
    },

    {
        // 19
        question: "What will result from adding =A1+A2 to calc",
        optionA: "0",
        optionB: "1",
        optionC: "10",
        optionD: "5",
        correctAnswer: "0"
    },

    {
        // 20
        question: "What is maximum number of cell per spreadsheet in calc",
        optionA: "6000",
        optionB: "1000",
        optionC: "1073741824",
        optionD: "1048576",
        correctAnswer: "1073741824"
    },

    {
        // 21
        question: "What is maximum zoom percentage in Libreoffice calc",
        optionA: "100%",
        optionB: "200%",
        optionC: "400%",
        optionD: "500%",
        correctAnswer: "400%"
    },

    {
        // 22
        question: "F7 key is used for spell check in the current sheet",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 23
        question: "Which shortcut key is used to insert comment in Libreoffice calc",
        optionA: "Ctrl + Alt + C",
        optionB: "Ctrl + Shift + J",
        optionC: "Ctrl + Alt + S",
        optionD: "None of the Above",
        correctAnswer: "Ctrl + Alt + C"
    },

    {
        // 24
        question: "Ctrl + Shift + J is used for full screen mode in Libreoffice calc",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 25
        question: "Ctrl + F1 is used to display comments that is attached to the current cell",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 26
        question: "Pagedown key is used to move the viewable rows down one screen",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 27
        question: "Which shortcut key is used in calc to Insert function",
        optionA: "Ctrl + F3",
        optionB: "Ctrl + F1",
        optionC: "Ctrl + F2",
        optionD: "Ctrl + F4",
        correctAnswer: "Ctrl + F2"
    },

    {
        // 28
        question: "In Libreoffice package, spreadsheet is called ________",
        optionA: "Excel",
        optionB: "row",
        optionC: "column",
        optionD: "calc",
        correctAnswer: "calc"
    },

    {
        // 29
        question: "How many numbers of rows in the Libreoffice calc",
        optionA: "1048575",
        optionB: "1048578",
        optionC: "1048576",
        optionD: "1048577",
        correctAnswer: "1048576"
    },

    {
        // 30
        question: "Which shortcut is used to delete cell",
        optionA: "Ctrl + +",
        optionB: "Ctrl + -",
        optionC: "Ctrl + =",
        optionD: "Ctrl + |",
        correctAnswer: "Ctrl + -"
    },

    {
        // 31
        question: "Which shortcut key is used to insert cell in Libreoffice calc",
        optionA: "Ctrl + -",
        optionB: "Ctrl + +",
        optionC: "Ctrl + =",
        optionD: "Ctrl + |",
        correctAnswer: "Ctrl + +"
    },

    {
        // 32
        question: "How many number of columns in Libreoffice calc spreadsheet",
        optionA: "1000",
        optionB: "1024",
        optionC: "1020",
        optionD: "1025",
        correctAnswer: "1024"
    },

    {
        // 33
        question: "________ menus are found in Libreoffice calc",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "9",
        correctAnswer: "9"
    },

    {
        // 34
        question: "________ is used to open the Thesaurus if the current cell contains text",
        optionA: "Ctrl + F7",
        optionB: "Ctrl + F6",
        optionC: "Ctrl + F8",
        optionD: "Ctrl + F9",
        correctAnswer: "Ctrl + F7"
    },

    {
        // 35
        question: "________ option is found in Edit Menu in Libreoffice calc",
        optionA: "Find",
        optionB: "Replace",
        optionC: "Share",
        optionD: "Both Find & Replace",
        correctAnswer: "Both Find & Replace"
    },

    {
        // 36
        question: "What is the minimum font size in Libreoffice Calc",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "5",
        correctAnswer: "2"
    },

    {
        // 37
        question: "________ is used to highlight cells containing numeric values.",
        optionA: "Ctrl + F7",
        optionB: "Ctrl + F6",
        optionC: "Ctrl + F8",
        optionD: "Ctrl + F5",
        correctAnswer: "Ctrl + F8"
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 10
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    }

    


]