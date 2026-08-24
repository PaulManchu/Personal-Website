export const CONTACT = {
  email: "manchupaul@outlook.com",
  phone: "+27 79 825 2753",
  location: "Johannesburg, South Africa",
  linkedin: "https://www.linkedin.com/in/mocoana-paul-manchu-610583198",
  github: "https://github.com/PaulManchu",
};

export const RESUME_URL = "/Paul-Manchu-Resume.pdf";

export const SKILLS = [
  {
    category: "Cloud & Infrastructure",
    items: [
      "Microsoft Azure",
      "Azure Virtual Machines",
      "Windows Server 2019 / 2022",
      "Active Directory Domain Services",
      "Microsoft 365",
      "Exchange Online",
      "Group Policy",
      "WSUS",
    ],
  },
  {
    category: "Systems Administration",
    items: [
      "User & Group Administration",
      "File Server Administration",
      "NTFS & Share Permissions",
      "Remote Desktop Services",
      "Windows 10 / 11",
      "PowerShell",
      "Backup & Restore",
      "Server Maintenance",
    ],
  },
  {
    category: "Networking & Connectivity",
    items: [
      "TCP / IP",
      "DNS",
      "DHCP",
      "VPN",
      "Remote Connectivity",
      "Network Troubleshooting",
    ],
  },
  {
    category: "Support & Operations",
    items: [
      "Incident Management",
      "SLA Management",
      "Hardware Support",
      "Software Deployment",
      "Printer Support",
      "Technical Documentation",
      "Customer Support",
    ],
  },
];

export const PROJECTS = [
  {
    id: "azure-lab",
    index: "01",
    title: "Enterprise Azure Infrastructure Lab",
    subtitle: "A full corporate-style Windows environment, built end-to-end in the cloud.",
    tags: ["Microsoft Azure", "Windows Server 2022", "Active Directory", "PowerShell"],
    image:
      "https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Designed and deployed a complete enterprise-style Windows infrastructure in Microsoft Azure to simulate a corporate production environment — from virtual networking to a fully administered domain.",
    highlights: [
      "Designed an Azure virtual network hosting Windows Server and Windows 10/11 virtual machines",
      "Installed and promoted Windows Server 2022 as an Active Directory Domain Controller",
      "Configured DNS services and domain authentication for enterprise identity management",
      "Joined Windows 10 and additional Windows Server machines to the domain",
      "Built an Organisational Unit structure representing multiple business departments",
      "Created and managed AD users, security groups and administrative permissions with PowerShell",
      "Configured Group Policy Objects to enforce workstation security and Remote Desktop settings",
      "Deployed a dedicated File Server with departmental shared folders",
      "Implemented NTFS and Share permissions using security groups on least-privilege principles",
      "Installed and configured WSUS for centralised Windows update management",
      "Troubleshot DNS, Group Policy, AD replication, RDP authorisation, WSUS reporting and file permissions",
      "Documented deployment procedures and administrative tasks to enterprise operational standards",
    ],
  },
  {
    id: "alakhe",
    index: "02",
    title: "Alakhe Conglomerate Website & Infrastructure",
    subtitle: "Real-world web platform and cloud infrastructure, built and maintained in production.",
    tags: ["React", "FastAPI", "GitHub", "Cloud Infrastructure", "DNS & SSL"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&q=85&w=940",
    description:
      "Built and continue to maintain the company website and its underlying cloud infrastructure for Alakhe Conglomerate — owning everything from the frontend to deployment and troubleshooting.",
    highlights: [
      "Developed and maintain the company website with a React frontend and FastAPI backend",
      "Managed source control and deployment workflows through GitHub",
      "Provisioned and maintained the underlying cloud infrastructure",
      "Configured DNS records and SSL certificates for secure public access",
      "Handled deployment, monitoring and practical troubleshooting of production issues",
      "Balanced this project alongside day-to-day support engineering responsibilities",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Support Engineer",
    company: "Alakhe Conglomerate",
    period: "2022 — Present",
    points: [
      "Provide technical support and administration for Windows-based environments, user systems and operational IT infrastructure",
      "Support Microsoft 365 including Outlook, Teams, SharePoint and user account administration",
      "Perform Active Directory administration — user creation, password resets, account maintenance and permission assignments",
      "Troubleshoot DNS, DHCP, IP addressing and remote connectivity issues within SLA requirements",
      "Deliver remote support for offsite users, and manage onboarding / offboarding including account provisioning and device configuration",
      "Contribute to IT operational documentation, support procedures and knowledge base updates",
    ],
  },
  {
    role: "First Line Support Consultant",
    company: "Velocity",
    period: "2025",
    points: [
      "Delivered technical support within a structured, ticket-driven IT support environment for Windows systems",
      "Assisted with hardware setup, software troubleshooting and Windows operating system support",
      "Supported user account administration and access-related requests",
      "Maintained response and resolution targets while following defined escalation processes",
      "Maintained professional communication with users and third-party stakeholders during issue resolution",
    ],
  },
];

export const DEVELOPING = [
  "Microsoft 365 Administration (MS-102)",
  "Windows Server",
  "Linux Administration",
  "SQL",
  "PowerShell",
  "Cloud Infrastructure",
];
