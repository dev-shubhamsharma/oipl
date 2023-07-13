const questions = [
    {
        // 1
        question: "Data in ________ bytes size is called big data.",
        optionA: "Meta",
        optionB: "Giga",
        optionC: "Tera",
        optionD: "Peta",
        correctAnswer: "Peta"
    },

    {
        // 2
        question: "Transaction data of the bank is a type of :",
        optionA: "Unstructured data",
        optionB: "Structured data",
        optionC: "Both A and B",
        optionD: "None of the Above",
        correctAnswer: "Structured data"
    },

    {
        // 3
        question: "The total forms of big data is :",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctAnswer: "3"
    },

    {
        // 4
        question: "________ is a collection of data that is huge in volume, yet growing exponentially with time.",
        optionA: "Big database",
        optionB: "Big DBMS",
        optionC: "Big Datafile",
        optionD: "Big Data",
        correctAnswer: "Big Data"
    },

    {
        // 5
        question: "Choose the primary characteristics of big data among the following",
        optionA: "Value",
        optionB: "Variety",
        optionC: "Volume",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 6
        question: "Choose the language which are used in data science.",
        optionA: "C++",
        optionB: "R",
        optionC: "C",
        optionD: "Ruby",
        correctAnswer: "R"
    },

    {
        // 7
        question: "Total V's of big data is ____",
        optionA: "3",
        optionB: "4",
        optionC: "5",
        optionD: "6",
        correctAnswer: "5"
    },

    {
        // 8
        question: "What is cloud computing",
        optionA: "Cloud computing means providing services like storage, servers, database, networking, etc.",
        optionB: "Cloud computing means storing data in a database",
        optionC: "cloud computing is a tool used to create an application",
        optionD: "none of the mentioned.",
        correctAnswer: "Cloud computing means providing services like storage, servers, database, networking, etc."
    },

    {
        // 9
        question: "Who is the father of cloud computing",
        optionA: "Sharon B. Codd",
        optionB: "Edgar Frank Codd",
        optionC: "J.C.R. Licklider",
        optionD: "Charles Bachman",
        correctAnswer: "J.C.R. Licklider"
    },

    {
        // 10
        question: "Which of the following is not a type of cloud server.",
        optionA: "Public Cloud",
        optionB: "Private Cloud",
        optionC: "Dedicated Cloud",
        optionD: "Merged Cloud",
        correctAnswer: "Merged Cloud"
    },

    {
        // 11
        question: "Which of the following are the features of cloud computing",
        optionA: "Security",
        optionB: "Availability",
        optionC: "Large Network Access",
        optionD: "All of the mentioned",
        correctAnswer: "All of the mentioned"
    },

    {
        // 12
        question: "Which of the following is a type of cloud computing service",
        optionA: "Service-as-a-Software (SaaS)",
        optionB: "Software-and-a-Server (SaaS)",
        optionC: "Software-as-a-Service (SaaS)",
        optionD: "Software-as-a-Server (SaaS)",
        correctAnswer: "Software-as-a-Service (SaaS)"
    },

    {
        // 13
        question: "Which of the following is the application of cloud computing.",
        optionA: "Adobe",
        optionB: "PayPal",
        optionC: "Google G Suite",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 14
        question: "Which of the following is an example of the cloud.",
        optionA: "Amazon Web Services (AWS)",
        optionB: "Dropbox",
        optionC: "Cisco WebEx",
        optionD: "All of the Above",
        correctAnswer: "All of the Above"
    },

    {
        // 15
        question: "Applications and services that run on a distributed network using virtualized resources is known as _________",
        optionA: "Parallel computing",
        optionB: "Soft computing",
        optionC: "Distributed computing",
        optionD: "Cloud computing",
        correctAnswer: "Cloud computing"
    },

    {
        // 16
        question: "Which of the following is an example of a PaaS cloud service",
        optionA: "Heroku",
        optionB: "AWS Elastic Beanstalk",
        optionC: "Windows Azure",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 17
        question: "Which of the following is an example of an IaaS Cloud service",
        optionA: "DigitalOcean",
        optionB: "Linode",
        optionC: "Rackspace",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 18
        question: "Which of the following is the correct statement about cloud computing",
        optionA: "Cloud computing abstracts systems by pooling and sharing resources",
        optionB: "Cloud computing is nothing more than the internet",
        optionC: "The use of the word \"Cloud\" makes reference of the two essesntial concepts",
        optionD: "All of the mentioned",
        correctAnswer: "All of the mentioned"
    },

    {
        // 19
        question: "Which of the following is cloud platform provided by Amazon",
        optionA: "AWS",
        optionB: "Cloudera",
        optionC: "Azure",
        optionD: "All of the mentioned",
        correctAnswer: "AWS"
    },

    {
        // 20
        question: "Which of the following is the most important area of concern in cloud computing.",
        optionA: "Scalability",
        optionB: "Storage",
        optionC: "Security",
        optionD: "All of the mentioned",
        correctAnswer: "Security"
    },

    {
        // 21
        question: "Which of the following is the most refined and restrictive cloud service model?",
        optionA: "PaaS",
        optionB: "IaaS",
        optionC: "SaaS",
        optionD: "CaaS",
        correctAnswer: "PaaS"
    },

    {
        // 22
        question: "Which of the following is an example of a SaaS Cloud Service.",
        optionA: "Google Workspace",
        optionB: "Dropbox",
        optionC: "Salesforce",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 23
        question: "Which of the most essesntial concept related to Cloud computing",
        optionA: "Abstraction",
        optionB: "Reliability",
        optionC: "Productivity",
        optionD: "All of the mentioned",
        correctAnswer: "Abstraction"
    },

    {
        // 24
        question: "In which of the following service models the hardware is virtualized in the cloud",
        optionA: "NaaS",
        optionB: "PaaS",
        optionC: "CaaS",
        optionD: "IaaS",
        correctAnswer: "IaaS"
    },

    {
        // 25
        question: "What is a blockchain",
        optionA: "A currency",
        optionB: "A centralized ledger",
        optionC: "A type of cryptocurrency",
        optionD: "A distributed ledger on a peer to peer network",
        correctAnswer: "A distributed ledger on a peer to peer network"
    },

    {
        // 26
        question: "Which of the following industry can use blockchain technology for cybersecurity.",
        optionA: "Logistics",
        optionB: "Healthcare",
        optionC: "Critical Insfrastructure",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 27
        question: "What are the pillars of blockchain technology",
        optionA: "Decentralization",
        optionB: "Immutability",
        optionC: "Transparency",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 28
        question: "How many pillars of blockchain technology have",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "6",
        correctAnswer: "3"
    },

    {
        // 29
        question: "A blockchain carries no transaction cost",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 30
        question: "What are the benefits of blockchain technology",
        optionA: "Security and Speed",
        optionB: "Fraud control & access levels",
        optionC: "No Hidden Fees",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 31
        question: "What are the disadvantages of blockchain technology",
        optionA: "Blockchain is not indestructible",
        optionB: "Scalability remains blockchain's weakness",
        optionC: "Blockchain entries do not last forever or are not immutable",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 32
        question: "What is the full form of P2P in blockchain",
        optionA: "Peer to Peer",
        optionB: "Public to Private",
        optionC: "Product to Product",
        optionD: "None of the above",
        correctAnswer: "Peer to Peer"
    },

    {
        // 33
        question: "Bitcoin was created by :",
        optionA: "John Mcafee",
        optionB: "Satoshi Nakamoto",
        optionC: "Alon Musk",
        optionD: "None of the above",
        correctAnswer: "Satoshi Nakamoto"
    },

    {
        // 34
        question: "Blockchain is a type of :",
        optionA: "View",
        optionB: "Table",
        optionC: "Object",
        optionD: "Database",
        correctAnswer: "Database"
    },

    {
        // 35
        question: "Blockchain store data in the form of :",
        optionA: "Lines",
        optionB: "Circles",
        optionC: "Blocks",
        optionD: "None of the Above",
        correctAnswer: "Blocks"
    },

    {
        // 36
        question: "Are decentralized blockchains immutable.",
        optionA: "True",
        optionB: "False",
        optionC: "",
        optionD: "",
        correctAnswer: "True"
    },

    {
        // 37
        question: "The blockchain was invented by _________ in 2008.",
        optionA: "Alon Musk",
        optionB: "Bill Gates",
        optionC: "Satoshi Nakamoto",
        optionD: "None of the above",
        correctAnswer: "Satoshi Nakamoto"
    },

    {
        // 38
        question: "Some of the largest, most known public blockchains are the :",
        optionA: "Bitcoin",
        optionB: "Ethereum",
        optionC: "Hybrid",
        optionD: "Both Bitcoin and Ethereum",
        correctAnswer: "Both Bitcoin and Ethereum"
    },

    {
        // 39
        question: "Currently, there are four types of blockchain networks, these are :",
        optionA: "public",
        optionB: "private",
        optionC: "consortium & hybrid",
        optionD: "All of the above",
        correctAnswer: "All of the above"
    },

    {
        // 40
        question: "Data that does not conform to a data model of data schema is known as :",
        optionA: "Structured data",
        optionB: "Unstructured data",
        optionC: "Semi-Structured data",
        optionD: "All of the mentioned",
        correctAnswer: "Unstructured data"
    },

    {
        // 41
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 42
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 43
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    },

    {
        // 44
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