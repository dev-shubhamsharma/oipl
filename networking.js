const questions = [
    {
        // 1
        question: "__________ maps IP addresses with the domain names of the sites.",
        optionA: "URL",
        optionB: "DNS",
        optionC: "FTP",
        optionD: "None of the above",
        correctAnswer: "DNS"
    },

    {
        // 2
        question: "Size of IPv4 is :",
        optionA: "32",
        optionB: "48",
        optionC: "62",
        optionD: "128",
        correctAnswer: "32"
    },

    {
        // 3
        question: "Which protocol provides e-mail facility among different hosts?",
        optionA: "FTP",
        optionB: "SMTP",
        optionC: "TELNET",
        optionD: "SNMP",
        correctAnswer: "SMTP"
    },

    {
        // 4
        question: "The World Wide Web was devised by :",
        optionA: "CERN",
        optionB: "ECRN",
        optionC: "CARN",
        optionD: "NETW",
        correctAnswer: "CERN"
    },

    {
        // 5
        question: "A collection of hyperlinked documents on the internet forms the ?",
        optionA: "WWW",
        optionB: "Email System",
        optionC: "Mailing list",
        optionD: "Hypertext Markup Language",
        correctAnswer: "WWW"
    },

    {
        // 6
        question: "The location of a resource on the internet is given by its?",
        optionA: "Protocol",
        optionB: "URL",
        optionC: "E-mail address",
        optionD: "ICQ",
        correctAnswer: "URL"
    },

    {
        // 7
        question: "The term HTTP stands for?",
        optionA: "Hyper terminal tracing program",
        optionB: "Hypertext tracing protocol",
        optionC: "Hypertext transfer program",
        optionD: "Hypertext transfer protocol",
        correctAnswer: "Hypertext transfer protocol"
    },

    {
        // 8
        question: "Which software prevents the external access to a system?",
        optionA: "Firewall",
        optionB: "Gateway",
        optionC: "Router",
        optionD: "Virus checker",
        correctAnswer: "Firewall"
    },

    {
        // 9
        question: " Which of the following best describes uploading information?",
        optionA: "Sorting data on a disk drive",
        optionB: "Sending information to a host computer",
        optionC: "Receiving information from a host computer",
        optionD: "Sorting data on a hard drive",
        correctAnswer: "Sending information to a host computer"
    },

    {
        // 10
        question: "Which one of the following is the most common internet protocol?",
        optionA: "HTML",
        optionB: "NetBEUI",
        optionC: "TCP/IP",
        optionD: "IPX/SPX",
        correctAnswer: "TCP/IP"
    },

    {
        // 11
        question: "The term FTP stands for?",
        optionA: "File transfer program",
        optionB: "File transmission protocol",
        optionC: "File transfer protocol",
        optionD: "File transfer protection",
        correctAnswer: "File transfer protocol"
    },

    {
        // 12
        question: "Which one of the following is not a network topology?",
        optionA: "Star",
        optionB: "Ring",
        optionC: "Bus",
        optionD: "Peer to Peer",
        correctAnswer: "Peer to Peer"
    },

    {
        // 13
        question: "When the mail server sends mail to other mail servers it becomes ___ ?",
        optionA: "SMTP client",
        optionB: "SMTP server",
        optionC: "Peer",
        optionD: "Master",
        correctAnswer: "SMTP client"
    },

    {
        // 14
        question: "The length of an IPv6 address is?",
        optionA: "32 bits",
        optionB: "64 bits",
        optionC: "128 bits",
        optionD: "256 bits",
        correctAnswer: "128 bits"
    },

    {
        // 15
        question: "Which of the following address belongs class A?",
        optionA: "121.12.12.248",
        optionB: "130.12.12.248",
        optionC: "128.12.12.248",
        optionD: "129.12.12.248",
        correctAnswer: "121.12.12.248"
    },

    {
        // 16
        question: "Which of the following is correct IPv4 address?",
        optionA: "124.201.3.1.52",
        optionB: "01.200.128.123",
        optionC: "300.142.210.64",
        optionD: "128.64.0.0",
        correctAnswer: "128.64.0.0"
    },

    {
        // 17
        question: "The term WAN stands for?",
        optionA: "Wide Area Net",
        optionB: "Wide Access Network",
        optionC: "Wide Area Network",
        optionD: "Wide Access Net",
        correctAnswer: "Wide Area Network"
    },

    {
        // 18
        question: "What IP address class allocates 8 bits for the host identification part?",
        optionA: "Class A",
        optionB: "Class B",
        optionC: "Class C",
        optionD: "Class D",
        correctAnswer: "Class C"
    },

    {
        // 19
        question: "How many versions available of IP?",
        optionA: "6 version",
        optionB: "4 version",
        optionC: "2 version",
        optionD: "1 version",
        correctAnswer: "2 version"
    },

    {
        // 20
        question: "In specific, if the systems use separate protocols, which one of the following devices is used to link two systems?",
        optionA: "Repeater",
        optionB: "Gateway",
        optionC: "Bridge",
        optionD: "Hub",
        correctAnswer: "Gateway"
    },

    {
        // 21
        question: "This is a networking device that passes data between networks having similar functions but dissimilar implementations.",
        optionA: "Hub",
        optionB: "Modem",
        optionC: "Gateway",
        optionD: "Repeater",
        correctAnswer: "Gateway"
    },

    {
        // 22
        question: "DNS translates __________.",
        optionA: "domain name into IP",
        optionB: "IP into domain name",
        optionC: "domain name into physical address",
        optionD: "both (A) and (B)",
        correctAnswer: "domain name into IP"
    },

    {
        // 23
        question: "In order to connect to ISP's server you need ",
        optionA: "Hand gloves",
        optionB: "Printer",
        optionC: "User name and Password",
        optionD: "None of the above",
        correctAnswer: "User name and Password"
    },

    {
        // 24
        question: "In order to upload a HTML file to a web server, you use __________.",
        optionA: "HTTP",
        optionB: "SMTP",
        optionC: "SIP",
        optionD: "FTP",
        correctAnswer: "FTP"
    },

    {
        // 25
        question: "Once the e-mail is sent, the message is broken into pieces called __________.",
        optionA: "Packets",
        optionB: "Process",
        optionC: "Digits",
        optionD: "Bytes",
        correctAnswer: "Packets"
    },

    {
        // 26
        question: "__________ is a web's native protocol",
        optionA: "SLIP",
        optionB: "TCP/IP",
        optionC: "HTTP",
        optionD: "PPP",
        correctAnswer: "HTTP"
    },

    {
        // 27
        question: "It is a uniform naming scheme for locating resources on the web.",
        optionA: "URI",
        optionB: "HTTP",
        optionC: "WEBNAME",
        optionD: "RESOURCENAME",
        correctAnswer: "URI"
    },

    {
        // 28
        question: "Which of the following is best suitable for remote administration of a computer ?",
        optionA: "Telnet",
        optionB: "WAIS",
        optionC: "Brosers",
        optionD: "HTML",
        correctAnswer: "Telnet"
    },

    {
        // 29
        question: "Web pages are uniquely defined using :",
        optionA: "IP Address",
        optionB: "URL",
        optionC: "Domain",
        optionD: "File name",
        correctAnswer: "URL"
    },

    {
        // 30
        question: "The ownership rights as related to content on the web are governed under",
        optionA: "Copyright law",
        optionB: "Patent law",
        optionC: "Data protection law",
        optionD: "Privacy law",
        correctAnswer: "Copyright law"
    },

    {
        // 30
        question: "A modem is not needed when accessing the internet through :",
        optionA: "Wi-Fi",
        optionB: "LAN",
        optionC: "Cable",
        optionD: "None of the above",
        correctAnswer: "LAN"
    },

    {
        // 31
        question: "A software that prevents external access to a system is termed as :",
        optionA: "Gateway",
        optionB: "Firewall",
        optionC: "Intrusion Prevention System",
        optionD: "Anti-virus",
        correctAnswer: "Firewall"
    },

    {
        // 32
        question: "On internet, which version of the Internet Protocol is the most widely used",
        optionA: "IPv1",
        optionB: "IPv6",
        optionC: "IPv2",
        optionD: "IPv4",
        correctAnswer: "IPv4"
    },

    {
        // 33
        question: "Who is making the Web standards?",
        optionA: "Mozilla",
        optionB: "Microsoft",
        optionC: "The World Wide Web Consortium(W3C)",
        optionD: "NVDIA",
        correctAnswer: "The World Wide Web Consortium(W3C)"
    },

    {
        // 34
        question: "Data communication system spanning states, countries, or the whole world is",
        optionA: "LAN",
        optionB: "WAN",
        optionC: "MAN",
        optionD: "None of the above",
        correctAnswer: "WAN"
    },

    {
        // 35
        question: "Expand WAN",
        optionA: "World area network",
        optionB: "Wide area network",
        optionC: "Web area network",
        optionD: "None of the above",
        correctAnswer: "Wide area network"
    },

    {
        // 36
        question: "Which of the following services use TCP ? (i) DHCP, (ii) SMTP, (iii) HTTP, (iv) TFTP, (v) FTP",
        optionA: "(i) and (ii)",
        optionB: "(i), (ii) and (iv)",
        optionC: "(i), (iii) and (iv)",
        optionD: "(ii), (iii) and (v)",
        correctAnswer: "(ii), (iii) and (v)"
    },

    {
        // 37
        question: "A firewall may be implemented in :",
        optionA: "bridges used in an intranet",
        optionB: "routers which connect intranet to internet",
        optionC: "expensive modem",
        optionD: "user application programs",
        correctAnswer: "routers which connect intranet to internet"
    },

    {
        // 38
        question: "Which of the following protocol is used by remote login?",
        optionA: "telnet",
        optionB: "ftp",
        optionC: "smtp",
        optionD: "ntp",
        correctAnswer: "telnet"
    },

    {
        // 39
        question: "Raj can receive his e-mail, but he cannot send e-mail. Which of the following is most likely causing his problem?",
        optionA: "POP3",
        optionB: "SMTP",
        optionC: "IMAP",
        optionD: "UART",
        correctAnswer: "SMTP"
    },

    {
        // 40
        question: "The 4 byte IP address consists of",
        optionA: "Network Address",
        optionB: "Host Address",
        optionC: "Both Network and Host address",
        optionD: "None of the above",
        correctAnswer: "Both Network and Host address"
    },

    {
        // 41
        question: "In this topology there is a central controller or hub :",
        optionA: "Star",
        optionB: "Mesh",
        optionC: "Ring",
        optionD: "Bus",
        correctAnswer: "Star"
    },

    {
        // 42
        question: "A computer communication technology that provides a way to interconnect multiple computers across short distance is",
        optionA: "LAN",
        optionB: "WAN",
        optionC: "MAN",
        optionD: "None of the above",
        correctAnswer: "LAN"
    },

    {
        // 43
        question: "The system that translates an IP address into an easier to remember name is the",
        optionA: "Packet switching",
        optionB: "DNS",
        optionC: "Domain numbering system",
        optionD: "None of the above",
        correctAnswer: "DNS"
    },

    {
        // 44
        question: "The way in which information is transmitted to multiple internet connected devices is called",
        optionA: "Internet connectivity",
        optionB: "IP address",
        optionC: "multicasting",
        optionD: "multitasking",
        correctAnswer: "multicasting"
    },

    {
        // 45
        question: "Which class of IP address has the most host addresses available by default?",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "None of the above",
        correctAnswer: "A"
    },

    {
        // 46
        question: "FTP is",
        optionA: "Server side encryption protocol",
        optionB: "Control connection to remote computer to transfer files",
        optionC: "User Datagram Protocol.",
        optionD: "Authorization of a user through login and password verification.",
        correctAnswer: "Control connection to remote computer to transfer files"
    },

    {
        // 47
        question: "Which protocol assigns IP address to the client connected in the Internet?",
        optionA: "DHCP",
        optionB: "IP",
        optionC: "TCP",
        optionD: "Telnet",
        correctAnswer: "DHCP"
    },

    {
        // 48
        question: "The topology with highest reliability is?",
        optionA: "Bus topology",
        optionB: "Star topology",
        optionC: "Ring Topology ",
        optionD: "Mesh Topology",
        correctAnswer: "Mesh Topology"
    },

    {
        // 49
        question: "Set of rules ",
        optionA: "Softwares",
        optionB: "Functions",
        optionC: "Programs",
        optionD: "Protocols",
        correctAnswer: "Protocols"
    },

    {
        // 50
        question: "Global system of interconnected computer networks",
        optionA: "Internet",
        optionB: "LAN",
        optionC: "Intranet",
        optionD: "Protocol",
        correctAnswer: "Internet"
    },

    {
        // 51
        question: "Protocol used for network file transfers in www environment.",
        optionA: "HTTP",
        optionB: "LAN",
        optionC: "WAN",
        optionD: "SMTP",
        correctAnswer: "HTTP"
    },

    {
        // 52
        question: "Computer network limited in a building",
        optionA: "LAN",
        optionB: "WAN",
        optionC: "MAN",
        optionD: "Internet of things",
        correctAnswer: "LAN"
    }


]