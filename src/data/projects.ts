export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  link?: string;
  category: "professional" | "personal";
  keyFeatures?: {
    title: string;
    description: string;
  }[];

  // New fields for project details
  role?: string;
  status?: string;
  challenge?: string;
  solution?: string;
  implementation?: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    id: "ep-production",
    title: "EP Production App",
    category: "professional",

    description:
      "A centralized Power Platform application that streamlines production material management, inventory visibility and operational workflows. The solution replaces fragmented manual processes with structured material ordering, automated complaint routing and logistics task management.",

    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Process Development",
    ],
    images: [
      "etusivu.png",
      "MaterialTiketti.jpg",
      "MaterialList.jpg",
      "AddButton.jpg",
      "logistiikkaTiketti.jpg",
      "RekkulaTiketti.jpg",
      "bufferi.png",
    ],

    role: "Sole Developer",
    status: "In Production",

    challenge:
      "Material management and operational requests were handled through several disconnected processes. Employees had no direct visibility into material availability or buffer storage levels and relied on material coordinators checking Excel files. Material orders were submitted through emails, messages or phone calls. Complaints were handled through email, while logistics requests used a separate Microsoft Forms form. These fragmented processes made information access and task coordination unnecessarily complicated.",

    solution:
      "Independently designed and developed a centralized Power Apps application that combines material information, ordering, complaints and logistics requests into a single interface. Production supervisors can view buffer storage inventory levels directly. Complaint submissions are automatically routed to the appropriate planning contact based on the selected project, while logistics requests are transferred to the logistics team's Microsoft Planner work queue.",

    keyFeatures: [
      {
        title: "Material Search",
        description:
          "Search material information from a SharePoint list containing over 12,000 records.",
      },
      {
        title: "Buffer Inventory Visibility",
        description:
          "Production supervisors can check buffer storage material quantities directly in the application.",
      },
      {
        title: "Material Ordering",
        description:
          "Submit structured material orders instead of using emails, messages or phone calls.",
      },
      {
        title: "Complaint Management",
        description:
          "Submit complaints that are automatically routed to the appropriate planning contact based on the selected project.",
      },
      {
        title: "Logistics Requests",
        description:
          "Create logistics requests that are automatically transferred to the logistics team's Microsoft Planner work queue.",
      },
    ],

    implementation: [
      "Independently designed, developed and deployed the complete Power Apps canvas application.",
      "Integrated SharePoint lists for material information, buffer inventory data and operational requests.",
      "Developed a Power Automate search flow to handle over 12,000 material records and overcome Power Apps delegation limitations.",
      "Implemented debounced searching to reduce unnecessary flow executions.",
      "Integrated shared inventory data between the EP Production App and the Buffer Storage Inventory App.",
      "Implemented project-based complaint routing and automated logistics task creation in Microsoft Planner.",
      "Tested, deployed and maintained the application in production use.",
    ],

    outcome:
      "The application replaces several disconnected workflows with a centralized digital solution. Production supervisors can independently check material availability and buffer storage levels. Material orders are submitted through a structured process, complaints are directed to the correct planning contacts, and logistics requests enter a shared Planner work queue. The solution improves information visibility, reduces manual communication and supports more consistent coordination between production, planning and logistics teams.",
  },
  {
    id: "buffer-inventory",
    title: "Buffer Storage Inventory App",
    category: "professional",

    description:
      "A mobile Power Apps application that introduces digital inventory tracking to buffer storage. Barcode scanning, stock updates and transaction history provide warehouse employees and production supervisors with better visibility into material availability.",

    technologies: [
      "Power Apps",
      "SharePoint",
      "Barcode Scanning",
      "Inventory Management",
    ],
    images: [
      "inventoryEtusivu.jpeg",
      "skanneri.jpeg",
      "QRCode.jpeg",
      "inventoryAfterScan.jpeg",
      "inventoryAdd.jpeg",
      "inventoryRemove.jpeg",
    ],

    role: "Sole Developer",
    status: "In Production",

    challenge:
      "Buffer storage operations required an efficient way to maintain inventory quantities and track material movements. The goal was to simplify warehouse transactions and improve visibility into stock levels and inventory history.",

    solution:
      "Independently designed and developed a mobile inventory management application for warehouse employees using Microsoft Power Apps and SharePoint. Employees scan material barcodes to record incoming and outgoing quantities, while inventory transactions are stored in a history log. The same inventory data is made available to production supervisors through the EP Production App.",

    keyFeatures: [
      {
        title: "Barcode Scanning",
        description:
          "Identify warehouse materials quickly by scanning their barcodes instead of searching for material numbers manually.",
      },
      {
        title: "Inventory Management",
        description:
          "Record incoming and outgoing materials and update stock quantities directly through the mobile application.",
      },
      {
        title: "Stock Visibility",
        description:
          "View recorded material quantities and availability through a centralized inventory system.",
      },
      {
        title: "Transaction History",
        description:
          "Track inventory movements with information about materials, quantities, users and timestamps.",
      },
      {
        title: "Production App Integration",
        description:
          "Share inventory information with the EP Production App so production supervisors can check buffer storage availability.",
      },
    ],

    implementation: [
      "Independently designed and developed a mobile-first Power Apps canvas application.",
      "Integrated SharePoint lists for material information, stock quantities and inventory transaction history.",
      "Implemented barcode scanning and material identification using material numbers.",
      "Developed stock-in and stock-out operations to update inventory quantities.",
      "Created a transaction log containing material movements, quantities, users and timestamps.",
      "Implemented location recording for material removals.",
      "Integrated shared SharePoint inventory data with the EP Production App.",
      "Tested and deployed the application for operational warehouse use.",
    ],

    outcome:
      "The solution introduces systematic digital inventory tracking where no centralized stock visibility previously existed. Warehouse employees maintain stock quantities through barcode scanning, while production supervisors can check material availability directly in the EP Production App. This improves transparency between warehouse operations and production planning.",
  },
  {
    id: "buffer-ordering",
    title: "Buffer Material Ordering App",
    category: "professional",

    description:
      "A mobile Power Apps application that replaces email-based material ordering with barcode scanning. Orders are automatically transferred to Microsoft Planner, while Teams notifications keep material coordinators informed.",

    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Microsoft Planner",
      "Microsoft Teams",
    ],
    images: [
      "bufferiTilausEtusivu.jpeg",
      "QRCode.jpeg",
      "bufferiTilausAddQty.jpeg",
      "bufferitilausCheck.jpeg",
      "bufferiTilausSend.jpeg",
    ],

    role: "Sole Developer",
    status: "In Production",

    challenge:
      "Warehouse employees previously requested materials by email. They had to look up material numbers in a separate Excel file and manually enter them into the message. When the correct material number was unknown, employees sometimes provided only a material name, leaving the material coordinator responsible for identifying the correct item before processing the order in SAP.",

    solution:
      "Independently designed and developed a mobile Power Apps application that allows users to scan materials, specify order quantities, review their order and submit multiple materials at once. Power Automate transfers the order information to Microsoft Planner and sends a notification to Microsoft Teams.",

    keyFeatures: [
      {
        title: "Barcode-Based Ordering",
        description:
          "Identify materials by scanning barcodes without manually searching for material numbers in Excel.",
      },
      {
        title: "Order Quantity Selection",
        description: "Specify the required quantity for each scanned material.",
      },
      {
        title: "Multiple Material Orders",
        description:
          "Add several materials to a single order and review or remove items before submission.",
      },
      {
        title: "Automated Planner Tasks",
        description:
          "Automatically create a Microsoft Planner task containing material numbers, names and quantities.",
      },
      {
        title: "Microsoft Teams Notifications",
        description:
          "Notify the material coordinators when a new material order is submitted.",
      },
    ],

    implementation: [
      "Independently designed and developed a mobile-first Power Apps canvas application.",
      "Integrated SharePoint lists to retrieve material information.",
      "Implemented barcode scanning to identify materials using their material numbers.",
      "Developed an order collection to manage multiple materials and quantities before submission.",
      "Built a Power Automate flow triggered directly from Power Apps.",
      "Automated Microsoft Planner task creation with formatted material information in the task notes.",
      "Integrated Microsoft Teams notifications for the material coordination team.",
      "Configured Power Automate connections to support multiple application users.",
      "Tested and deployed the application for warehouse use.",
    ],

    outcome:
      "A digital material ordering process that connects warehouse users with the order processing team. Material orders are submitted through a mobile application and automatically transferred to Microsoft Planner, improving consistency and reducing manual order communication.",
  },
  {
    id: "planner-email-automation",
    title: "Planner-to-Email Automation",
    category: "professional",

    description:
      "A production-ready Power Automate workflow that sends order completion emails when Microsoft Planner tasks are marked as completed. The automation includes order details, task notes, SAP-generated PDF attachments and information about the person who completed the task.",

    technologies: [
      "Power Automate",
      "Microsoft Planner",
      "Outlook",
      "Workflow Automation",
    ],
    images: [],

    role: "Sole Developer",
    status: "In Production",

    challenge:
      "Communicating completed material orders required a consistent process for sharing order information with the relevant recipients. Manual email preparation added unnecessary work to the ordering workflow.",

    solution:
      "Independently developed and deployed a Power Automate workflow that sends an Outlook notification when a material order is completed in Microsoft Planner. The workflow retrieves the task notes, processes the SAP-generated PDF attachment added to the Planner task and includes information about the person who completed the order.",

    keyFeatures: [
      {
        title: "Completion-Based Automation",
        description:
          "Automatically triggers the workflow when a material order task is completed in Microsoft Planner.",
      },
      {
        title: "PDF Attachment Handling",
        description:
          "Retrieves the SAP-generated PDF attached to the Planner task and includes it in the outgoing email.",
      },
      {
        title: "Task Notes Integration",
        description:
          "Includes material order information from the Planner task notes.",
      },
      {
        title: "Completed-By Information",
        description:
          "Identifies the person who completed the Planner task and includes their information in the notification.",
      },
      {
        title: "Automated Outlook Email",
        description:
          "Sends a standardized completion notification with order information and the PDF attachment.",
      },
    ],

    implementation: [
      "Independently designed, developed and deployed the Power Automate workflow.",
      "Configured the workflow to respond to completed Microsoft Planner tasks.",
      "Retrieved task details, notes and attachment references from Planner.",
      "Processed PDF attachments stored in SharePoint and linked to Planner tasks.",
      "Handled Base64-encoded file content to include PDF attachments correctly in Outlook emails.",
      "Retrieved information about the user who completed the Planner task.",
      "Generated and sent Outlook emails containing the order details, task notes and PDF attachment.",
      "Tested and deployed the automation for production use.",
    ],

    outcome:
      "A production-ready workflow that automatically communicates completed material orders with their relevant information and PDF documentation. The solution reduces manual email preparation and helps ensure that order details are consistently shared with the intended recipients.",
  },
  {
    id: "boxhunt",
    title: "BoxHunt",
    category: "professional",
    description:
      "Contributed to the development of BoxHunt at Rento Innovations. The software supports food traceability and production efficiency. My responsibilities included developing new features and writing unit and integration tests.",
    technologies: ["Full-stack Development", "Software Testing"],
    images: ["box1.png", "box2.png", "box3.png", "box4.png"],
    link: "https://boxhunt.fi/",

    role: "Software Developer",
    status: "Professional Project",

    challenge:
      "Developing and maintaining software that supports food traceability and production efficiency requires reliable functionality and careful testing.",

    solution:
      "Contributed to the development of BoxHunt at Rento Innovations, working on application features and software quality as part of the development process.",

    implementation: [
      "Participated in full-stack software development.",
      "Developed new application features.",
      "Created and maintained unit tests.",
      "Worked with integration testing to support software reliability.",
      "Contributed to the development and maintenance of an existing software product.",
    ],

    outcome:
      "Contributed to the ongoing development and quality assurance of BoxHunt, gaining practical experience in professional software development and testing.",
  },
  {
    id: "cat-friends",
    title: "Cat Friends",
    category: "personal",
    description:
      "A personal React project created to practice component-based frontend development and working with dynamic user interfaces.",
    technologies: ["React", "JavaScript", "CSS"],
    images: ["cat1.png", "cat3.png", "cat2.png", "cat4.png"],
    link: "https://jerekarsikas.github.io/catfriends/",
  },
  {
    id: "expenses-tracker",
    title: "Expenses Tracker",
    category: "personal",
    description:
      "A personal web application for tracking expenses, created to practice JavaScript programming and interactive application development.",
    technologies: ["JavaScript", "HTML", "CSS"],
    images: ["expenses1.png", "expenses2.png", "expenses3.png"],
    link: "https://jerekarsikas.github.io/expenses-tracker/",
  },
  {
    id: "guess-my-number",
    title: "Guess My Number",
    category: "personal",
    description:
      "An interactive number guessing game developed to practice JavaScript fundamentals, DOM manipulation and application logic.",
    technologies: ["JavaScript", "HTML", "CSS"],
    images: ["guess1.png", "guess2.png", "guess3.png"],
    link: "https://jerekarsikas.github.io/Guess-my-number/",
  },
  {
    id: "pig-game",
    title: "Pig Game",
    category: "personal",
    description:
      "A browser-based dice game created to practice JavaScript, event handling and application state management.",
    technologies: ["JavaScript", "HTML", "CSS"],
    images: ["pig1.png", "pig2.png", "pig3.png"],
    link: "https://jerekarsikas.github.io/pig-game/",
  },
];
