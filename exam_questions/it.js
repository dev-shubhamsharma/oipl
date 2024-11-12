const questions = [

    [
        {
            // 1
            question: "Which of the following is the brain of the computer?",
            optionA: "Hard Disk",
            optionB: "Monitor",
            optionC: "CPU",
            optionD: "Keyboard",
            correctAnswer: "CPU"
        },

        {
            question: "निम्नलिखित में से कौन सा कंप्यूटर का मस्तिष्क है?",
            optionA: "हार्ड डिस्क",
            optionB: "मॉनीटर",
            optionC: "सी.पी.यू.",
            optionD: "कीबोर्ड",
            correctAnswer: "सी.पी.यू."
        },
    ],

    [
        {
            // 2
            question: "Which of the following is a non-volatile memory?",
            optionA: "RAM",
            optionB: "Cache",
            optionC: "ROM",
            optionD: "Registers",
            correctAnswer: "ROM"
        },

        {
            question: "निम्नलिखित में से कौन एक नॉन वोलाटाइल मेमोरी है?",
            optionA: "रैम",
            optionB: "कैश",
            optionC: "रोम",
            optionD: "रजिस्टर्स",
            correctAnswer: "रोम"
        },
    ],

    [
        {
            // 3
            question: "Which of the following is the primary function of an operating system?",
            optionA: "Manage hardware resources",
            optionB: "Perform calculations",
            optionC: "Design applications",
            optionD: "Create websites",
            correctAnswer: "Manage hardware resources"
        },

        {
            question: "निम्नलिखित में से कौन एक ऑपरेटिंग सिस्टम का प्राथमिक कार्य है?",
            optionA: "हार्डवेयर संसाधनों का प्रबंधन करना",
            optionB: "गणना करना",
            optionC: "डिजाइन एप्पीलेकेशन्स्",
            optionD: "वेबसाइट बनाना",
            correctAnswer: "हार्डवेयर संसाधनों का प्रबंधन करना"
        },
    ],

    [
        {
            // 4
            question: "What is the full form of URL?",
            optionA: "Uniform Resource Locator",
            optionB: "Unified Resource Locator",
            optionC: "Uniform Remote Locator",
            optionD: "Unified Remote Locator",
            correctAnswer: "Uniform Resource Locator"
        },

        {
            question: "URL का पूरा रूप क्या है?",
            optionA: "यूनिफ़ॉर्म रिसोर्स लोकेटर",
            optionB: "यूनिफाइड रिसोर्स लोकेटर",
            optionC: "यूनिफॉर्म रिमोट लोकेटर",
            optionD: "यूनिफाइड रिमोट लोकेटर",
            correctAnswer: "यूनिफ़ॉर्म रिसोर्स लोकेटर"
        },
    ],

    [
        {
            // 5
            question: "Which of the following is the smallest unit of data in a computer?",
            optionA: "Byte",
            optionB: "Bit",
            optionC: "Kilobyte",
            optionD: "Word",
            correctAnswer: "Bit"
        },

        {
            question: "कंप्यूटर में डेटा की सबसे छोटी इकाई निम्नलिखित में से कौन सी है?",
            optionA: "बाइट",
            optionB: "बिट",
            optionC: "किलोबाइट",
            optionD: "वर्ड",
            correctAnswer: "बिट"
        },
    ],

    [
        {
            // 6
            question: "Which of the following is a type of software that allows a user to browse the internet?",
            optionA: "Compiler",
            optionB: "Browser",
            optionC: "Editor",
            optionD: "Spreadsheet",
            correctAnswer: "Browser"
        },

        {
            question: "निम्नलिखित में से कौन सा सॉफ्टवेयर है जो उपयोगकर्ता को इंटरनेट ब्राउज़ करने की अनुमति देता है?",
            optionA: "कम्पाइलर",
            optionB: "ब्राउज़र",
            optionC: "एडिटर",
            optionD: "स्प्रेडशीट",
            correctAnswer: "ब्राउज़र"
        },
    ],

    [
        {
            // 7
            question: "Which of the following is the function of the ALU (Arithmetic Logic Unit) in a computer?",
            optionA: "Perform arithmetic operations",
            optionB: "Manage input and output devices",
            optionC: "Store data permanently",
            optionD: "Control the entire computer system",
            correctAnswer: "Perform arithmetic operations"
        },

        {
            question: "कंप्यूटर में ALU (अरिथमैटिक लॉजिक यूनिट) का कार्य निम्नलिखित में से कौन सा कार्य है?",
            optionA: "अंकगणितीय संचालन करना",
            optionB: "इनपुट और आउटपुट उपकरणों का प्रबंधन करना",
            optionC: "स्थायी रूप से डेटा स्टोर करना",
            optionD: "पूरे कंप्यूटर सिस्टम को नियंत्रित करना",
            correctAnswer: "अंकगणितीय संचालन करना"
        },
    ],

    [
        {
            // 8
            question: "Which type of computer memory is used to store data temporarily and is volatile?",
            optionA: "ROM",
            optionB: "Hard Disk",
            optionC: "Flash Memory",
            optionD: "RAM",
            correctAnswer: "RAM"
        },

        {
            question: "डेटा को अस्थायी रूप से संग्रहीत करने के लिए किस प्रकार की कंप्यूटर मेमोरी का उपयोग किया जाता है और जो वोलाटाइल है?",
            optionA: "रोम",
            optionB: "डार्ड डिस्क",
            optionC: "फ्लैस मेमोरी",
            optionD: "रैम",
            correctAnswer: "रैम"
        },
    ],

    [
        {
            // 9
            question: "Which of the following is a common input device?",
            optionA: "Printer",
            optionB: "Monitor",
            optionC: "Mouse",
            optionD: "Speaker",
            correctAnswer: "Mouse"
        },

        {
            question: "निम्नलिखित में से कौन एक सामान्य इनपुट डिवाइस है?",
            optionA: "प्रिंटर",
            optionB: "मॉनीटर",
            optionC: "मॉउस",
            optionD: "स्पीकर",
            correctAnswer: "मॉउस"
        },
    ],

    [
        {
            // 10
            question: "Which of the following is a common output device?",
            optionA: "Keyboard",
            optionB: "Mouse",
            optionC: "Printer",
            optionD: "Scanner",
            correctAnswer: "Printer"
        },

        {
           question: "निम्नलिखित में से कौन एक सामान्य आउटपुट डिवाइस है?",
           optionA: "कीबोर्ड",
           optionB: "मॉउस",
           optionC: "प्रिंटर",
           optionD: "स्कैनर",
           correctAnswer: "प्रिंटर"
        },
    ],

    [
        {
            // 11
            question: "Which device is used to connect multiple computers in a network and allows them to communicate?",
            optionA: "Router",
            optionB: "Switch",
            optionC: "Hub",
            optionD: "Modem",
            correctAnswer: "Switch"
        },

        {
            question: "किसी नेटवर्क में कई कंप्यूटरों को कनेक्ट करने के लिए किस डिवाइस का उपयोग किया जाता है और उन्हें संवाद करने की अनुमति देता है?",
            optionA: "राउटर",
            optionB: "स्विच",
            optionC: "हब",
            optionD: "मॉडम",
            correctAnswer: "स्विच"
        },
    ],

    [
        {
            // 12
            question: "What does IP stand for in networking?",
            optionA: "Internet Protocol",
            optionB: "Internal Protocol",
            optionC: "Integrated Protocol",
            optionD: "International Protocol",
            correctAnswer: "Internet Protocol"
        },

        {
            question: "नेटवर्किंग में आईपी क्या है?",
            optionA: "इंटरनेट प्रोटोकॉल",
            optionB: "इंटरनल प्रोटोकॉल",
            optionC: "इंटीग्रेटेड प्रोटोकॉल",
            optionD: "इंटरनेशनल प्रोटोकॉल",
            correctAnswer: "इंटरनेट प्रोटोकॉल"
        },
    ],

    [
        {
            // 13
            question: "Which protocol is used for sending email over the internet?",
            optionA: "FTP",
            optionB: "SMTP",
            optionC: "HTTP",
            optionD: "POP3",
            correctAnswer: "SMTP"
        },

        {
            question: "इंटरनेट पर ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
            optionA: "एफ़.टी.पी.",
            optionB: "एस.एम.टी.पी.",
            optionC: "एच.टी.टी.पी.",
            optionD: "पी.ओ.पी.थ्री",
            correctAnswer: "एस.एम.टी.पी."
        },
    ],

    [
        {
            // 14
            question: "Which of the following is a valid IP address?",
            optionA: "256.255.255.0",
            optionB: "192.168.0.1",
            optionC: "300.200.100.50",
            optionD: "500.500.500.500",
            correctAnswer: "192.168.0.1"
        },

        {
            question: "निम्नलिखित में से कौन एक मान्य आईपी पता है?",
            optionA: "256.255.255.0",
            optionB: "192.168.0.1",
            optionC: "300.200.100.50",
            optionD: "500.500.500.500",
            correctAnswer: "192.168.0.1"
        },
    ],

    [
        {
            // 15
            question: "Which layer of the OSI model is responsible for data encryption and decryption?",
            optionA: "Application Layer",
            optionB: "Transport Layer",
            optionC: "Session Layer",
            optionD: "Presentation Layer",
            correctAnswer: "Presentation Layer"
        },

        {
            question: "OSI मॉडल का कौन सी लेयर डेटा एन्क्रिप्शन और डिक्रिप्शन के लिए जिम्मेदार है?",
            optionA: "एप्लीकेशन लेयर",
            optionB: "ट्रांसपोर्ट लेयर",
            optionC: "सेशन लेयर",
            optionD: "प्रेजेन्टेशन लेयर",
            correctAnswer: "प्रेजेन्टेशन लेयर"
        },
    ],

    [
        {
            // 16
            question: "What is the maximum speed of an Ethernet connection using Cat-5 cables?",
            optionA: "100 Mbps",
            optionB: "10 Mbps",
            optionC: "1 Gbps",
            optionD: "100 Gbps",
            correctAnswer: "100 Mbps"
        },

        {
            question: "कैट-5 केबलों का उपयोग करके ईथरनेट कनेक्शन की अधिकतम गति क्या है?",
            optionA: "100 Mbps",
            optionB: "10 Mbps",
            optionC: "1 Gbps",
            optionD: "100 Gbps",
            correctAnswer: "100 Mbps"
        },
    ],

    [
        {
            // 17
            question: "Which of the following is the function of a router in a network?",
            optionA: "Connects different types of networks",
            optionB: "Amplifies signals for long-distance communication",
            optionC: "Acts as a firewall to protect the network",
            optionD: "Routes email between different servers",
            correctAnswer: "Connects different types of networks"
        },

        {
            question: "एक नेटवर्क में राउटर का कार्य निम्नलिखित में से कौन सा है?",
            optionA: "विभिन्न प्रकार के नेटवर्क को जोड़ता है",
            optionB: "लंबी दूरी के संचार के लिए सिग्नल्स को बढ़ाता है",
            optionC: "नेटवर्क की सुरक्षा के लिए एक फ़ायरवॉल के रूप में कार्य करता है",
            optionD: "विभिन्न सर्वरों के बीच ईमेल संचालन करता है",
            correctAnswer: "विभिन्न प्रकार के नेटवर्क को जोड़ता है"
        },
    ],

    [
        {
            // 18
            question: "What is the full form of DNS in networking?",
            optionA: "Digital Network System",
            optionB: "Domain Name System",
            optionC: "Data Network Service",
            optionD: "Domain Name Server",
            correctAnswer: "Domain Name System"
        },

        {
            question: "नेटवर्किंग में DNS का पूरा रूप क्या है?",
            optionA: "डिजिटल नेटवर्क सिस्टम",
            optionB: "डोमेन नेम सिस्टम",
            optionC: "डॉटा नेटवर्क सर्विस",
            optionD: "डोमेन नेम सर्वर",
            correctAnswer: "डोमेन नेम सिस्टम"
        },
    ],

    [
        {
            // 19
            question: "What is the purpose of a firewall in a network?",
            optionA: "To encrypt data",
            optionB: "To route traffic between networks",
            optionC: "To monitor and filter incoming and outgoing traffic",
            optionD: "To provide wireless internet access",
            correctAnswer: "To monitor and filter incoming and outgoing traffic"
        },

        {
            question: "एक नेटवर्क में फ़ायरवॉल का उद्देश्य क्या है?",
            optionA: "डेटा एन्क्रिप्ट करने के लिए",
            optionB: "नेटवर्क के बीच यातायात को रूट करने के लिए",
            optionC: "इनकमिंग और आउटगोइंग ट्रैफ़िक की निगरानी और फ़िल्टर करने के लिए",
            optionD: "वायरलेस इंटरनेट एक्सेस प्रदान करने के लिए",
            correctAnswer: "इनकमिंग और आउटगोइंग ट्रैफ़िक की निगरानी और फ़िल्टर करने के लिए"
        },
    ],

    [
        {
            // 20
            question: "Which of the following is an example of a wireless communication technology?",
            optionA: "Ethernet",
            optionB: "Wi-Fi",
            optionC: "USB",
            optionD: "HDMI",
            correctAnswer: "Wi-Fi"
        },

        {
            question: "निम्नलिखित में से कौन वायरलेस संचार प्रौद्योगिकी का एक उदाहरण है?",
            optionA: "ईथरनेट",
            optionB: "वाई-फाई",
            optionC: "यू.एस.बी.",
            optionD: "एच.डी.एम.आई.",
            correctAnswer: "वाई-फाई"
        },
    ],

    [
        {
            // 21
            question: "Which of the following network protocols operates at the Transport Layer of the OSI model?",
            optionA: "HTTP",
            optionB: "FTP",
            optionC: "IP",
            optionD: "TCP",
            correctAnswer: "TCP"
        },

        {
            question: "निम्नलिखित में से कौन सा नेटवर्क प्रोटोकॉल OSI मॉडल की ट्रांसपोर्ट लेयर पर संचालित होता है?",
            optionA: "एच.टी.टी.पी.",
            optionB: "एफ़.टी.पी.",
            optionC: "आई.पी.",
            optionD: "टी.सी.पी.",
            correctAnswer: "टी.सी.पी."
        },
    ],

    [
        {
            // 22
            question: "What does the term subnetting refer to in networking?",
            optionA: "Dividing a large network into smaller subnetworks",
            optionB: "Connecting multiple subnets together to form a larger network",
            optionC: "Encrypting network traffic between subnets",
            optionD: "Managing IP addresses for subnets",
            correctAnswer: "Dividing a large network into smaller subnetworks"
        },

        {
            question: "नेटवर्किंग में सबनेटिंग शब्द का उल्लेख क्या है?",
            optionA: "एक बड़े नेटवर्क को छोटे सबनेटवर्क में विभाजित करना",
            optionB: "एक बड़ा नेटवर्क बनाने के लिए कई सबनेट को एक साथ जोड़ना",
            optionC: "सबनेट के बीच नेटवर्क ट्रैफ़िक एन्क्रिप्ट करना",
            optionD: "सबनेट के लिए आईपी पते का प्रबंधन करना",
            correctAnswer: "एक बड़े नेटवर्क को छोटे सबनेटवर्क में विभाजित करना"
        },
    ],

    [
        {
            // 23
            question: "Which of the following IP address classes is used for multicast communication?",
            optionA: "Class A",
            optionB: "Class B",
            optionC: "Class D",
            optionD: "Class E",
            correctAnswer: "Class D"
        },

        {
            question: "मल्टीकास्ट संचार के लिए निम्नलिखित आईपी एड्रेस की कक्षाओं में से किस का उपयोग किया जाता है?",
            optionA: "क्लास ए",
            optionB: "क्लास बी",
            optionC: "क्लास डी",
            optionD: "क्लास ई",
            correctAnswer: "क्लास डी"
        },
    ],

    [
        {
            // 24
            question: "In the TCP/IP protocol suite, what is the role of the ARP (Address Resolution Protocol)?",
            optionA: "It resolves domain names into IP addresses",
            optionB: "It resolves IP addresses into MAC (Media Access Control) addresses",
            optionC: "It resolves routing loops in a network",
            optionD: "It converts digital signals to analog signals",
            correctAnswer: "It resolves IP addresses into MAC (Media Access Control) addresses"
        },

        {
            question: "टीसीपी/आईपी प्रोटोकॉल सूट में, ए.आर.पी. (एड्रेस रिज़ॉल्यूशन प्रोटोकॉल) की भूमिका क्या है ?",
            optionA: "यह डोमेन नामों को आईपी एड्रेस में हल करता है",
            optionB: "यह आईपी एड्रेस को मैक (मीडिया एक्सेस कंट्रोल) एड्रेस में हल करता है",
            optionC: "यह एक नेटवर्क में रूटिंग कमियों को हल करता है",
            optionD: "यह डिजिटल सिग्नल को एनालॉग सिग्नल में परिवर्तित करता है",
            correctAnswer: "यह आईपी एड्रेस को मैक (मीडिया एक्सेस कंट्रोल) एड्रेस में हल करता है"
        },
    ],

    [
        {
            // 25
            question: "Which layer of the OSI model is responsible for routing packets between different networks?",
            optionA: "Application Layer",
            optionB: "Network Layer",
            optionC: "Transport Layer",
            optionD: "Data Link Layer",
            correctAnswer: "Network Layer"
        },

        {
            question: "OSI मॉडल की कौन सी परत विभिन्न नेटवर्क के बीच पैकेट को रूट करने के लिए जिम्मेदार है?",
            optionA: "एप्लीकेशन लेयर",
            optionB: "नेटवर्क लेयर",
            optionC: "ट्रांसपोर्ट लेयर",
            optionD: "डाटा लिंक लेयर",
            correctAnswer: "नेटवर्क लेयर"
        },
    ],

    [
        {
            // 26
            question: "What is the main difference between IPv4 and IPv6?",
            optionA: "IPv4 uses 128-bit addresses, while IPv6 uses 32-bit addresses",
            optionB: "IPv6 is faster than IPv4",
            optionC: "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses",
            optionD: "IPv4 supports encryption, while IPv6 does not",
            correctAnswer: "IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses"
        },

        {
            question: "IPv4 और IPv6 के बीच मुख्य अंतर क्या है?",
            optionA: "IPv4 128-बिट पते का उपयोग करता है, जबकि IPv6 32-बिट पते का उपयोग करता है",
            optionB: "IPv6, IPv4 की तुलना में तेज है",
            optionC: "IPv4 32-बिट पते का उपयोग करता है, जबकि IPv6 128-बिट पते का उपयोग करता है",
            optionD: "IPv4 एन्क्रिप्शन का समर्थन करता है, जबकि IPv6 नहीं करता है",
            correctAnswer: "IPv4 32-बिट पते का उपयोग करता है, जबकि IPv6 128-बिट पते का उपयोग करता है"
        },
    ],

    [
        {
            // 27
            question: "Which protocol is used to securely access a remote computer over a network?",
            optionA: "FTP",
            optionB: "SSH",
            optionC: "HTTP",
            optionD: "SNMP",
            correctAnswer: "SSH"
        },

        {
            question: "किस प्रोटोकॉल का उपयोग किसी नेटवर्क पर एक दूरस्थ कंप्यूटर तक सुरक्षित पहुंचने के लिए किया जाता है?",
            optionA: "एफ़.टी.पी.",
            optionB: "एस.एस.एच.",
            optionC: "एच.टी.टी.पी.",
            optionD: "एस.एन.एम.पी.",
            correctAnswer: "एस.एस.एच."
        },
    ],

    [
        {
            // 28
            question: "Which of the following statements best describes NAT (Network Address Translation)?",
            optionA: "A technique to secure network traffic using encryption",
            optionB: "A method to assign dynamic IP addresses to devices on a local network",
            optionC: "A technique to map private IP addresses to a public IP address for internet access",
            optionD: "A protocol used to route packets across different subnets",
            correctAnswer: "A technique to map private IP addresses to a public IP address for internet access"
        },

        {
           question: "निम्नलिखित में से कौन सा कथन NAT (नेटवर्क एड्रेस ट्रांसलेशन) का सबसे अच्छा वर्णन करता है?",
           optionA: "एन्क्रिप्शन का उपयोग करके नेटवर्क ट्रैफ़िक को सुरक्षित करने के लिए एक तकनीक",
           optionB: "एक स्थानीय नेटवर्क पर उपकरणों के लिए डॉयनामिक आईपी एड्रेस असाइन करने की एक विधि",
           optionC: "इंटरनेट एक्सेस के लिए निजी आईपी एड्रेस को पब्लिक आईपी एड्रेस में मैप करने के लिए एक तकनीक",
           optionD: "विभिन्न सबनेट में पैकेट को रूट करने के लिए एक प्रोटोकॉल",
           correctAnswer: "इंटरनेट एक्सेस के लिए निजी आईपी एड्रेस को पब्लिक आईपी एड्रेस में मैप करने के लिए एक तकनीक"
        },
    ],

    [
        {
            // 29
            question: "What is the primary advantage of using IPv6 over IPv4 in networking?",
            optionA: "IPv6 supports higher speeds than IPv4",
            optionB: "IPv6 uses simpler routing protocols",
            optionC: "IPv6 has a larger address space, solving the problem of address exhaustion in IPv4",
            optionD: "IPv6 is more secure than IPv4",
            correctAnswer: "IPv6 has a larger address space, solving the problem of address exhaustion in IPv4"
        },

        {
            question: "नेटवर्किंग में IPv4 के स्थान पर IPv6 का उपयोग करने का प्राथमिक लाभ क्या है?",
            optionA: "IPv6, IPv4 की तुलना में उच्च गति का समर्थन करता है",
            optionB: "IPv6 सरल रूटिंग प्रोटोकॉल का उपयोग करता है",
            optionC: "IPv6 अधिकतम एड्रेस के साथ, IPv4 में एड्रेस खत्म होने की समस्या को हल करता है",
            optionD: "IPv6, IPv4 की तुलना में अधिक सुरक्षित है",
            correctAnswer: "IPv6 अधिकतम एड्रेस के साथ, IPv4 में एड्रेस खत्म होने की समस्या को हल करता है"
        },
    ],

    [
        {
            // 30
            question: "Which of the following is the primary advantage of cache memory over RAM",
            optionA: "Cache memory is cheaper than RAM",
            optionB: "Cache memory is slower than RAM",
            optionC: "Cache memory is located closer to the CPU and operates at a higher speed",
            optionD: "Cache memory is volatile, unlike RAM",
            correctAnswer: "Cache memory is located closer to the CPU and operates at a higher speed"
        },

        {
            question: "निम्नलिखित में से कौन सा रैम की अपेक्षा कैश मेमोरी का प्राथमिक लाभ है",
            optionA: "कैश मेमोरी रैम से सस्ती है",
            optionB: "कैश मेमोरी रैम की तुलना में धीमी है",
            optionC: "कैश मेमोरी सीपीयू के करीब स्थित होती है और उच्च गति से संचालित होती है",
            optionD: "रैम के विपरीत कैश मेमोरी वोलाटाइल है",
            correctAnswer: "कैश मेमोरी सीपीयू के करीब स्थित होती है और उच्च गति से संचालित होती है"
        },
    ],

    [
        {
            // 31
            question: "What is the primary function of the Central Processing Unit (CPU) in a computer",
            optionA: "Store data",
            optionB: "Execute instructions",
            optionC: "Display images",
            optionD: "Control input devices",
            correctAnswer: "Execute instructions"
        },

        {
            question: "कंप्यूटर में सी.पी.यू. का प्राथमिक कार्य क्या है",
            optionA: "डेटा संग्रहण",
            optionB: "निर्देशों को निष्पादित करना",
            optionC: "चित्र प्रदर्शित करना",
            optionD: "इनपुट उपकरण का नियंत्रण",
            correctAnswer: "निर्देशों को निष्पादित करना"
        },
    ],

    [
        {
            // 32
            question: "Which of the following is an example of an input device?",
            optionA: "Printer",
            optionB: "Keyboard",
            optionC: "Monitor",
            optionD: "Speaker",
            correctAnswer: "Keyboard"
        },

        {
            question: "निम्नलिखित में से कौन एक इनपुट डिवाइस का एक उदाहरण है?",
            optionA: "प्रिंटर",
            optionB: "कीबोर्ड",
            optionC: "मॉनीटर",
            optionD: "स्पीकर",
            correctAnswer: "कीबोर्ड"
        },
    ],

    [
        {
            // 33
            question: "Which of the following is considered software?",
            optionA: "Mouse",
            optionB: "RAM",
            optionC: "Windows OS",
            optionD: "Printer",
            correctAnswer: "Windows OS"
        },

        {
            question: "निम्नलिखित में से कौन सा सॉफ्टवेयर है?",
            optionA: "माउस",
            optionB: "रैम",
            optionC: "विंडोज ओ.एस.",
            optionD: "प्रिंटर",
            correctAnswer: "विंडोज ओ.एस."
        },
    ],

    [
        {
            // 34
            question: "Which of these is an example of application software?",
            optionA: "Windows 10",
            optionB: "Linux",
            optionC: "Microsoft Word",
            optionD: "BIOS",
            correctAnswer: "Microsoft Word"
        },

        {
            question: "इनमें से कौन सा एप्लिकेशन सॉफ्टवेयर का एक उदाहरण है?",
            optionA: "विंडोज 10",
            optionB: "लिनक्स",
            optionC: "माइक्रोसॉफ्ट वर्ड",
            optionD: "बायोस",
            correctAnswer: "माइक्रोसॉफ्ट वर्ड"
        },
    ],

    [
        {
            // 35
            question: "What does RAM stand for?",
            optionA: "Read Only Memory",
            optionB: "Random Access Memory",
            optionC: "Read And Memory",
            optionD: "Real-time Access Memory",
            correctAnswer: "Random Access Memory"
        },

        {
            question: "रैम का पूरा नाम",
            optionA: "रीड ओनली मेमोरी",
            optionB: "रैंडम एक्सेस मेमोरी",
            optionC: "रीड एण्ड मेमोरी",
            optionD: "रियल-टाइम एक्सेस मेमोरी",
            correctAnswer: "रैंडम एक्सेस मेमोरी"
        },
    ],

    [
        {
            // 36
            question: "Which of the following is an example of an output device?",
            optionA: "Microphone",
            optionB: "Mouse",
            optionC: "Printer",
            optionD: "Keyboard",
            correctAnswer: "Printer"
        },

        {
            question: "निम्नलिखित में से कौन एक आउटपुट डिवाइस का एक उदाहरण है?",
            optionA: "माइक्रोफ़ोन",
            optionB: "माउस",
            optionC: "प्रिंटर",
            optionD: "कीबोर्ड",
            correctAnswer: "प्रिंटर"
        },
    ],

    [
        {
            // 37
            question: "Which of the following operating systems is open-source?",
            optionA: "macOS",
            optionB: "Windows",
            optionC: "Linux",
            optionD: "iOS",
            correctAnswer: "Linux"
        },

        {
            question: "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम ओपन-सोर्स है?",
            optionA: "मैक ओ.एस.",
            optionB: "विंडोज",
            optionC: "लिनक्स",
            optionD: "आई.ओ.एस.",
            correctAnswer: "लिनक्स"
        },
    ],

    [
        {
            // 38
            question: "What is the primary function of the operating system?",
            optionA: "To run applications",
            optionB: "To manage hardware and software resources",
            optionC: "To perform calculations",
            optionD: "To input data",
            correctAnswer: "To manage hardware and software resources"
        },

        {
            question: "ऑपरेटिंग सिस्टम का प्राथमिक कार्य क्या है?",
            optionA: "अनुप्रयोग चलाने के लिए",
            optionB: "हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करने के लिए",
            optionC: "गणना करने के लिए",
            optionD: "इनपुट डेटा के लिए",
            correctAnswer: "हार्डवेयर और सॉफ्टवेयर संसाधनों का प्रबंधन करने के लिए"
        },
    ],

    [
        {
            // 39
            question: "Which of these file extensions is associated with a video file?",
            optionA: ".mp3",
            optionB: ".jpg",
            optionC: ".mp4",
            optionD: ".txt",
            correctAnswer: ".mp4"
        },

        {
            question: "इनमें से कौन सा फ़ाइल एक्सटेंशन एक वीडियो फ़ाइल से जुड़ी है?",
            optionA: ".एम.पी.3",
            optionB: ".जे.पी.जी.",
            optionC: ".एम.पी.4",
            optionD: ".टी.एक्स.टी.",
            correctAnswer: ".एम.पी.4"
        },
    ],

    [
        {
            // 40
            question: "Which of the following is NOT an example of a utility software?",
            optionA: "Disk Cleanup",
            optionB: "Antivirus software",
            optionC: "Microsoft Excel",
            optionD: "File Compression tools",
            correctAnswer: "Microsoft Excel"
        },

        {
            question: "निम्नलिखित में से कौन एक यूटिलिटी सॉफ्टवेयर का उदाहरण नहीं है?",
            optionA: "डिस्क क्लीनअप",
            optionB: "एंटीवायरस सॉफ़्टवेयर",
            optionC: "मॉइक्रोसॉफ्ट एक्सेल",
            optionD: "फ़ाइल कम्प्रेशन टूल",
            correctAnswer: "मॉइक्रोसॉफ्ट एक्सेल"
        },
    ],

    [
        {
            // 41
            question: "Which of the following is NOT part of the CPU?",
            optionA: "Arithmetic Logic Unit (ALU)",
            optionB: "Control Unit (CU)",
            optionC: "Random Access Memory (RAM)",
            optionD: "Registers",
            correctAnswer: "Random Access Memory (RAM)"
        },

        {
            question: "निम्नलिखित में से कौन सीपीयू का हिस्सा नहीं है?",
            optionA: "अंकगणितीय तर्क इकाई (ALU)",
            optionB: "नियंत्रण यूनिट (CU)",
            optionC: "रैंडम एक्सेस मेमोरी (RAM)",
            optionD: "रजिस्टर",
            correctAnswer: "रैंडम एक्सेस मेमोरी (RAM)"
        },
    ],

    [
        {
            // 42
            question: "Which of the following is the default file extension for Microsoft Word documents?",
            optionA: ".docx",
            optionB: ".xlsx",
            optionC: ".pptx",
            optionD: ".txt",
            correctAnswer: ".docx"
        },

        {
            question: "मॉइक्रोसॉफ्ट वर्ड दस्तावेज़ों के लिए डिफ़ॉल्ट फ़ाइल एक्सटेंशन निम्नलिखित में से कौन सा है?",
            optionA: ".docx",
            optionB: ".xlsx",
            optionC: ".pptx",
            optionD: ".txt",
            correctAnswer: ".docx"
        },
    ],

    [
        {
            // 43
            question: "Which of these is a type of non-volatile storage device?",
            optionA: "RAM",
            optionB: "Hard Drive",
            optionC: "Cache",
            optionD: "Register",
            correctAnswer: "Hard Drive"
        },

        {
            question: "इनमें से कौन एक प्रकार का नॉन-वोलाटाइल डिवाइस है?",
            optionA: "रैम",
            optionB: "हार्ड ड्राइव",
            optionC: "कैश",
            optionD: "रजिस्टर",
            correctAnswer: "हार्ड ड्राइव"
        },
    ],

    [
        {
            // 44
            question: "What is the main advantage of SSD (Solid-State Drive) over HDD (Hard Disk Drive)?",
            optionA: "Higher capacity",
            optionB: "Lower cost",
            optionC: "Faster speed",
            optionD: "Longer lifespan",
            correctAnswer: "Faster speed"
        },

        {
            question: "HDD (हार्ड डिस्क ड्राइव) पर SSD (सॉलिड-स्टेट ड्राइव) का मुख्य लाभ क्या है?",
            optionA: "उच्च क्षमता",
            optionB: "कम लागत",
            optionC: "तेज गति",
            optionD: "कम जीवनकाल",
            correctAnswer: "तेज गति"
        },
    ],

    [
        {
            // 45
            question: "Which of the following operating systems is specifically designed for mobile devices?",
            optionA: "Windows 10",
            optionB: "iOS",
            optionC: "Linux",
            optionD: "macOS",
            correctAnswer: "iOS"
        },

        {
            question: "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम विशेष रूप से मोबाइल उपकरणों के लिए डिज़ाइन किया गया है?",
            optionA: "विंडोज 10",
            optionB: "आईओएस",
            optionC: "लिनक्स",
            optionD: "मैक ओएस",
            correctAnswer: "आईओएस"
        },
    ],

    [
        {
            // 46
            question: "Which of the following is an example of a wide-area network (WAN)?",
            optionA: "A local Wi-Fi network in a home",
            optionB: "A corporate LAN",
            optionC: "The internet",
            optionD: "A Bluetooth connection",
            correctAnswer: "The internet"
        },

        {
            question: "निम्नलिखित में से कौन एक वाइड एरिया नेटवर्क (WAN) का एक उदाहरण है?",
            optionA: "एक घर में एक स्थानीय वाई-फाई नेटवर्क",
            optionB: "एक कॉर्पोरेट लैन",
            optionC: "इंटरनेट",
            optionD: "एक ब्लूटूथ कनेक्शन",
            correctAnswer: "इंटरनेट"
        },
    ],

    [
        {
            // 47
            question: "Which operating system uses a taskbar for managing open applications?",
            optionA: "macOS",
            optionB: "Linux",
            optionC: "Windows",
            optionD: "iOS",
            correctAnswer: "Windows"
        },

        {
            question: "खुले अनुप्रयोगों के प्रबंधन के लिए कौन सा ऑपरेटिंग सिस्टम टास्कबार का उपयोग करता है?",
            optionA: "मैक ओएस",
            optionB: "लिनक्स",
            optionC: "विंडोज",
            optionD: "आईओएस",
            correctAnswer: "विंडोज"
        },
    ],

    [
        {
            // 48
            question: "What is the purpose of an operating systems file management system?",
            optionA: "To process instructions from applications",
            optionB: "To provide security for the system",
            optionC: "To manage the organization, storage, and retrieval of files",
            optionD: "To install software",
            correctAnswer: "To manage the organization, storage, and retrieval of files"
        },

        {
            question: "एक ऑपरेटिंग सिस्टम फ़ाइल प्रबंधन प्रणाली का उद्देश्य क्या है?",
            optionA: "अनुप्रयोगों से निर्देशों को संसाधित करने के लिए",
            optionB: "सिस्टम के लिए सुरक्षा प्रदान करने के लिए",
            optionC: "फाइलों के संगठन, भंडारण और पुनर्प्राप्ति का प्रबंधन करने के लिए",
            optionD: "सॉफ़्टवेयर स्थापित करने के लिए",
            correctAnswer: "फाइलों के संगठन, भंडारण और पुनर्प्राप्ति का प्रबंधन करने के लिए"
        },
    ],

    [
        {
            // 49
            question: "Which type of software is designed to interact directly with the hardware and manage the system?",
            optionA: "Utility software",
            optionB: "Application software",
            optionC: "System software",
            optionD: "Open source software",
            correctAnswer: "System software"
        },

        {
            question: "किस प्रकार के सॉफ़्टवेयर को सीधे हार्डवेयर के साथ बातचीत करने और सिस्टम का प्रबंधन करने के लिए डिज़ाइन किया गया है?",
            optionA: "यूटिलिटी सॉफ़्टवेयर",
            optionB: "एप्लिकेशन सॉफ़्टवेयर",
            optionC: "सिस्टम सॉफ़्टवेयर",
            optionD: "ओपन सोर्स सॉफ्टवेयर",
            correctAnswer: "सिस्टम सॉफ़्टवेयर"
        },
    ],

    [
        {
            // 50
            question: "Which of the following is a method of sharing files over a Local Area Network (LAN)?",
            optionA: "Bluetooth",
            optionB: "Email",
            optionC: "File sharing via networked folders",
            optionD: "USB transfer",
            correctAnswer: "File sharing via networked folders"
        },

        {
            question: "निम्नलिखित में से कौन लोकल एरिया नेटवर्क (LAN) पर फ़ाइलों को साझा करने की एक विधि है?",
            optionA: "ब्लूटूथ",
            optionB: "ईमेल",
            optionC: "नेटवर्क फ़ोल्डर्स के माध्यम से फ़ाइल साझा करना",
            optionD: "यूएसबी ट्रांसफर",
            correctAnswer: "नेटवर्क फ़ोल्डर्स के माध्यम से फ़ाइल साझा करना"
        },
    ],

    [
        {
            // 51
            question: "Which of the following is the most common extension for executable files in Windows?",
            optionA: ".exe",
            optionB: ".bat",
            optionC: ".dll",
            optionD: ".zip",
            correctAnswer: ".exe"
        },

        {
            question: "विंडोज में निष्पादन योग्य फ़ाइलों के लिए निम्नलिखित में से कौन सा एक्सटेंशन है?",
            optionA: ".exe",
            optionB: ".bat",
            optionC: ".dll",
            optionD: ".zip",
            correctAnswer: ".exe"
        },
    ],

    [
        {
            // 52
            question: "What is the primary function of the control unit (CU) within the CPU?",
            optionA: "To store data",
            optionB: "To perform arithmetic calculations",
            optionC: "To direct the operation of the processor",
            optionD: "To increase processor speed",
            correctAnswer: "To direct the operation of the processor"
        },

        {
            question: "CPU के भीतर कंट्रोल यूनिट (CU) का प्राथमिक कार्य क्या है?",
            optionA: "डेटा संग्रहीत करना",
            optionB: "अंकगणितीय गणना करना",
            optionC: "प्रोसेसर के संचालन को निर्देशित करना",
            optionD: "प्रोसेसर की गति बढ़ाना",
            correctAnswer: "प्रोसेसर के संचालन को निर्देशित करना"
        },
    ],

    [
        {
            // 53
            question: "Which of the following is an open-source mobile operating system?",
            optionA: "Android",
            optionB: "iOS",
            optionC: "Windows Phone",
            optionD: "BlackBerry OS",
            correctAnswer: "Android"
        },

        {
            question: "निम्नलिखित में से कौन एक ओपन-सोर्स मोबाइल ऑपरेटिंग सिस्टम है?",
            optionA: "एंड्रॉइड",
            optionB: "आईओएस",
            optionC: "विंडोज फोन",
            optionD: "ब्लैकबेरी ओएस",
            correctAnswer: "एंड्रॉइड"
        },
    ],

    [
        {
            // 54
            question: "Which of the following is a characteristic of open-source software?",
            optionA: "Closed source code",
            optionB: "Free to use and modify",
            optionC: "Paid software",
            optionD: "Limited access to source code",
            correctAnswer: "Free to use and modify"
        },

        {
            question: "निम्नलिखित में से कौन सा ओपन-सोर्स सॉफ्टवेयर की विशेषता है?",
            optionA: "बंद सोर्स कोड",
            optionB: "उपयोग करने और संशोधित करने की स्वतंत्रता",
            optionC: "भुगतान आधारित सॉफ्टवेयर",
            optionD: "सोर्स कोड तक सीमित पहुंच",
            correctAnswer: "उपयोग करने और संशोधित करने की स्वतंत्रता"
        },
    ],

    [
        {
            // 55
            question: "What is the default file extension for image files captured by most digital cameras?",
            optionA: "jpg",
            optionB: "mp3",
            optionC: "png",
            optionD: "gif",
            correctAnswer: "jpg"
        },

        {
            question: "अधिकांश डिजिटल कैमरा द्वारा कैप्चर की गई छवि फ़ाइलों के लिए डिफ़ॉल्ट फ़ाइल एक्सटेंशन क्या है?",
            optionA: "jpg",
            optionB: "mp3",
            optionC: "png",
            optionD: "gif",
            correctAnswer: "jpg"
        },
    ],

    [
        {
            // 56
            question: "Which type of storage device is typically faster: SSD or HDD?",
            optionA: "SSD",
            optionB: "HDD",
            optionC: "They are equally fast",
            optionD: "It depends on the size of the storage",
            correctAnswer: "SSD"
        },

        {
            question: "किस प्रकार का स्टोरेज डिवाइस आमतौर पर तेज होता है: एसएसडी या एचडीडी?",
            optionA: "एसएसडी",
            optionB: "एचडीडी",
            optionC: "वे समान रूप से तेज हैं",
            optionD: "यह भंडारण के आकार पर निर्भर करता है",
            correctAnswer: "एसएसडी"
        },
    ],

    [
        {
            // 57
            question: "Which file extension is typically associated with a PowerPoint presentation?",
            optionA: "xlsx",
            optionB: "pptx",
            optionC: "docx",
            optionD: "txt",
            correctAnswer: "pptx"
        },

        {
            question: "कौन सा फ़ाइल एक्सटेंशन आमतौर पर एक पावर प्वाइंट प्रेजेन्टेशन के साथ जुड़ा हुआ है?",
            optionA: "xlsx",
            optionB: "pptx",
            optionC: "docx",
            optionD: "txt",
            correctAnswer: "pptx"
        },
    ],

    [
        {
            // 58
            question: "Which of the following is an example of a proprietary software",
            optionA: "Apache Web Server",
            optionB: "Google Chrome",
            optionC: "Microsoft Word",
            optionD: "Linux",
            correctAnswer: "Microsoft Word"
        },

        {
            question: "निम्नलिखित में से कौन एक प्रोप्राइटरी सॉफ्टवेयर का एक उदाहरण है",
            optionA: "अपाचे वेब सर्वर",
            optionB: "गूगल क्रोम",
            optionC: "माइक्रोसॉफ्ट वर्ड",
            optionD: "लिनक्स",
            correctAnswer: "माइक्रोसॉफ्ट वर्ड"
        },
    ],

    [
        {
            // 59
            question: "Which of the following is the primary function of the BIOS (Basic Input/Output System)",
            optionA: "Store the operating system",
            optionB: "Perform basic hardware initialization during boot-up",
            optionC: "Manage user preferences and settings",
            optionD: "Protect the computer from viruses",
            correctAnswer: "Perform basic hardware initialization during boot-up"
        },

        {
            question: "निम्नलिखित में से कौन BIOS (बेसिक इनपुट/आउटपुट सिस्टम) का प्राथमिक कार्य है",
            optionA: "ऑपरेटिंग सिस्टम को स्टोर करना",
            optionB: "बूट-अप के दौरान बेसिक हार्डवेयर इनिशियलाइज़ेशन करना",
            optionC: "उपयोगकर्ता वरीयताओं और सेटिंग्स को प्रबंधित करना",
            optionD: "कंप्यूटर को वायरस से सुरक्षित रखना",
            correctAnswer: "बूट-अप के दौरान बेसिक हार्डवेयर इनिशियलाइज़ेशन करना"
        },
    ],

    [
        {
            // 60
            question: "Which of the following is the fastest type of memory in a computer system?",
            optionA: "RAM",
            optionB: "Cache memory",
            optionC: "Hard disk",
            optionD: "SSD",
            correctAnswer: "Cache memory"
        },

        {
            question: "कंप्यूटर सिस्टम में सबसे तेज प्रकार की मेमोरी निम्नलिखित में से कौन सा है?",
            optionA: "रैम",
            optionB: "कैश मेमोरी",
            optionC: "हार्ड डिस्क",
            optionD: "एसएसडी",
            correctAnswer: "कैश मेमोरी"
        },
    ],

    [
        {
            // 61
            question: "What is meaning of C in MICR",
            optionA: "Code",
            optionB: "Character",
            optionC: "Copy",
            optionD: "Convert",
            correctAnswer: "Character"
        },

        {
            question: "MICR में C का अर्थ क्या है",
            optionA: "कोड",
            optionB: "करेक्टर",
            optionC: "कॉपी",
            optionD: "कन्वर्ट",
            correctAnswer: "करेक्टर"
        },
    ],

    [
        {
            // 62
            question: "Linux Operating system was developed by",
            optionA: "Linus Torvalds",
            optionB: "Ken Thompson",
            optionC: "Dennis Ritchie",
            optionD: "Bell Labs",
            correctAnswer: "Linus Torvalds"
        },

        {
            question: "लिनक्स ऑपरेटिंग सिस्टम किसके द्वारा विकसित किया गया था",
            optionA: "लिनस टोरवाल्ड्स",
            optionB: "केन थॉम्पसन",
            optionC: "डेनिस रिची",
            optionD: "बेल लैब्स",
            correctAnswer: "लिनस टोरवाल्ड्स"
        },
    ],

    [
        {
            // 63
            question: "Which was the first network developed",
            optionA: "NSFNET",
            optionB: "ARPANET",
            optionC: "MILNET",
            optionD: "Ethernet",
            correctAnswer: "ARPANET"
        },

        {
            question: "Which was the first network developed",
            optionA: "NSFNET",
            optionB: "ARPANET",
            optionC: "MILNET",
            optionD: "Ethernet",
            correctAnswer: "ARPANET"
        },
    ],

    [
        {
            // 64
            question: "Full Name of IMEI",
            optionA: "Internet Mobile Equipment Identity",
            optionB: "International Mobile Equipment Information",
            optionC: "International Mobile Equipment Identity",
            optionD: "Internet Mobile Equipment Information",
            correctAnswer: "International Mobile Equipment Identity"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 65
            question: "Full name of IDS",
            optionA: "Intrusion Detection System",
            optionB: "Internet Detection System",
            optionC: "Intrusion Detection Software",
            optionD: "Internet Detection Software",
            correctAnswer: "Intrusion Detection System"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 66
            question: "Full form of UTR",
            optionA: "Unique Transport Reference",
            optionB: "Unique Transaction Reference",
            optionC: "Under Transaction Reference",
            optionD: "Unique Transaction Report",
            correctAnswer: "Unique Transaction Reference"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 67
            question: "ABRS stands for :",
            optionA: "Aadhaar Based Reserve Service",
            optionB: "Aadhaar Based Remittance Software",
            optionC: "Aadhaar Based Reserve Software",
            optionD: "Aadhaar Based Remittance Service",
            correctAnswer: "Aadhaar Based Remittance Service"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 68
            question: "Full form of EBCDIC",
            optionA: "Extended Binary Coded Decimal Interchange Code",
            optionB: "Extended Bit Coded Decimal Information Code",
            optionC: "Extended Binary Coded Decimal Information Code",
            optionD: "Extended Bit Coded Decimal Interchange Code",
            correctAnswer: "Extended Binary Coded Decimal Interchange Code"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 69
            question: "Which is a Propritary Software",
            optionA: "Linux",
            optionB: "Windows",
            optionC: "Ubuntu",
            optionD: "Android",
            correctAnswer: "Windows"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 70
            question: "A private network within a company can be used to provide shared content for staff is known as",
            optionA: "Extranet",
            optionB: "Internet",
            optionC: "Open-Source",
            optionD: "Intranet",
            correctAnswer: "Intranet"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 71
            question: "Shell is a ______",
            optionA: "Hardware",
            optionB: "Software",
            optionC: "Storage",
            optionD: "Account",
            correctAnswer: "Software"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 72
            question: "What is cipher text",
            optionA: "Readable form of encrypted data",
            optionB: "Non Readable form of encrypted data",
            optionC: "Undecorated Text",
            optionD: "Decorated Text",
            correctAnswer: "Non Readable form of encrypted data"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 73
            question: "The central processing unit",
            optionA: "Is controlled by the input data entering the system",
            optionB: "Is operated from the control panel",
            optionC: "Controls all input, output and processing",
            optionD: "Controls the auxiliary storage unit",
            correctAnswer: "Controls all input, output and processing"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 74
            question: "L1 is known as",
            optionA: "DRAM",
            optionB: "Primary Cache",
            optionC: "Secondary Cache",
            optionD: "SRAM",
            correctAnswer: "Primary Cache"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 75
            question: "Who invented Analytic engine",
            optionA: "Charles Babbage",
            optionB: "Blaise Pascal",
            optionC: "Percy Edwin Ludgate",
            optionD: "None of these",
            correctAnswer: "Charles Babbage"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 76
            question: "Which of the following devices can be used to input directly printed text",
            optionA: "OCR",
            optionB: "OMR",
            optionC: "MICR",
            optionD: "All of the above",
            correctAnswer: "OCR"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 77
            question: "Who is the father of internet",
            optionA: "Vint Cerf",
            optionB: "Tim-Berners-Lee",
            optionC: "Ray Tomlinson",
            optionD: "Mark Anderson",
            correctAnswer: "Vint Cerf"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 78
            question: "WWWW stands for",
            optionA: "World Wide Web World",
            optionB: "World Wide Web Worm",
            optionC: "World Wide Worm Web",
            optionD: "None of these",
            correctAnswer: "World Wide Web Worm"
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 79
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 80
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],

    [
        {
            // 62
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },

        {
            question: "",
            optionA: "",
            optionB: "",
            optionC: "",
            optionD: "",
            correctAnswer: ""
        },
    ],



    
   

]