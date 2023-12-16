/** This Array of objects are candidate for centralized master data*/
/*
 * The 'accessModule' and 'master-data' arrays of objects indicate their application access.
 * view, create,update,delete
 */
export const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "$2b$10$6X9/.fH5x1bjk2UJ28boc.02kmOtt99GHU.zqKKucQoSlNSM34JMa",
    status: "active",
    //* Missing modules in "accessModule" signify no user access.
    accessModule: [
      { purchasing: ["view", "create", "update"] },
      { bookings: ["view"] },
      { sales: ["view"] },
      { reports: ["view", "create", "update", "delete"] },
      { accounting: ["view"] },
      {
        //* Missing data in "master-data" signify no user access.
        "master-data": [
          {
            users: ["view", "create", "update", "delete"],
          },
          {
            employees: ["view", "create"],
          },
          {
            company: ["view"],
          },
        ],
      },
      { booking: ["view"] },
    ],
    role: ["user", "manager"],
    company: [
      { id: '"410544b2-4001-4271-9855', name: "Diamond Co." },
      { id: '"410544b2-4001-4271-9853', name: "Tech Innovations Co." },
      { id: '"410544b2-4001-4271-9852', name: "Architectural Innovations Co." },
      { id: '"410544b2-4001-4271-9851', name: "Export Innovations Co." },
    ],
  },
  {
    id: "c853f9b8-69e1-4b2f-8b22-efcf7ef8dce1",
    name: "User1",
    email: "user1@nextmail.com",
    password: "654321",
    status: "inactive",
    accessModule: [
      { purchasing: ["create", "update"] },
      { bookings: ["view", "create"] },
      { sales: ["update"] },
      { reports: ["create", "delete"] },
      { accounting: ["view", "update"] },
      {
        "master-data": [
          { users: ["delete"] },
          { employees: ["create"] },
          { company: ["view", "update"] },
        ],
      },
      { booking: ["view", "create"] },
    ],
    role: ["user"],
    company: ["Diamond Co.", "Export Innovations Co."],
  },
  {
    id: "b2b40269-c525-4da4-a96d-5e82439b1c4e",
    name: "User2",
    email: "user2@nextmail.com",
    password: "abcdef",
    status: "active",
    accessModule: [
      { purchasing: ["view"] },
      { bookings: ["create"] },
      { sales: ["view", "create", "update"] },
      { reports: ["create", "update"] },
      { accounting: ["view"] },
      {
        "master-data": [
          { users: ["create"] },
          { employees: ["view", "create", "update"] },
          { company: ["create"] },
        ],
      },
      { booking: ["view", "create"] },
    ],
    role: ["manager"],
    company: [
      "Diamond Co.",
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "a5a69b5d-7910-4f3d-bc84-1e0c05c609ad",
    name: "User3",
    email: "user3@nextmail.com",
    password: "qwerty",
    status: "active",
    accessModule: [
      { purchasing: ["view", "create"] },
      { bookings: ["view", "update", "delete"] },
      { sales: ["view", "update"] },
      { reports: ["view", "create", "delete"] },
      { accounting: ["create", "update"] },
      {
        "master-data": [
          { users: ["create", "update", "delete"] },
          { employees: ["create", "delete"] },
          { company: ["view", "delete"] },
        ],
      },
      { booking: ["view", "create", "delete"] },
    ],
    role: ["user", "manager"],
    company: [
      "Diamond Co.",
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "7db9bb18-c9de-4c97-ba3e-0d2b1c4c0882",
    name: "User4",
    email: "user4@nextmail.com",
    password: "abc123",
    status: "inactive",
    accessModule: [
      { purchasing: ["view", "create", "update"] },
      { bookings: ["view", "create"] },
      { sales: ["view", "update", "delete"] },
      { reports: ["view", "delete"] },
      { accounting: ["view", "create"] },
      {
        "master-data": [
          { users: ["create", "delete"] },
          { employees: ["view", "update"] },
          { company: ["create", "update"] },
        ],
      },
      { booking: ["create", "delete"] },
    ],
    role: ["user"],
    company: [
      "Diamond Co.",
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "56a6c0db-61e5-43fb-9e54-3b8ba1546bb3",
    name: "User5",
    email: "user5@nextmail.com",
    password: "789456",
    status: "active",
    accessModule: [
      { purchasing: ["update"] },
      { bookings: ["view"] },
      { sales: ["view", "create"] },
      { reports: ["create", "update"] },
      { accounting: ["view", "update", "delete"] },
      {
        "master-data": [
          { users: ["view", "update"] },
          { employees: ["delete"] },
          { company: ["view", "create", "delete"] },
        ],
      },
      { booking: ["create", "update"] },
    ],
    role: ["manager"],
    company: [
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "56a6c0db-61e5-43fb-9e54-3b8ba1546bb3",
    name: "User5",
    email: "user5@nextmail.com",
    password: "789456",
    status: "active",
    accessModule: [
      { purchasing: ["update"] },
      { bookings: ["view"] },
      { sales: ["view", "create"] },
      { reports: ["create", "update"] },
      { accounting: ["view", "update", "delete"] },
      {
        "master-data": [
          { users: ["view", "update"] },
          { employees: ["delete"] },
          { company: ["view", "create", "delete"] },
        ],
      },
      { booking: ["create", "update"] },
    ],
    role: ["manager"],
    company: [
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "2b795c57-85bb-4c0b-83a9-0a422b8d1e52",
    name: "User6",
    email: "user6@nextmail.com",
    password: "xyz789",
    status: "inactive",
    accessModule: [
      { purchasing: ["create"] },
      { bookings: ["view", "create", "delete"] },
      { sales: ["update", "delete"] },
      { reports: ["create"] },
      { accounting: ["view", "create"] },
      {
        "master-data": [
          { users: ["update"] },
          { employees: ["view", "create", "delete"] },
          { company: ["view", "update"] },
        ],
      },
      { booking: ["update", "delete"] },
    ],
    role: ["user"],
    company: [
      "Diamond Co.",
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
  {
    id: "a3b42e4d-906f-4611-bdd3-198f4c53f674",
    name: "User7",
    email: "user7@nextmail.com",
    password: "qwe123",
    status: "active",
    accessModule: [
      { purchasing: ["create", "update", "delete"] },
      { bookings: ["view", "update"] },
      { sales: ["create", "update"] },
      { reports: ["view", "create", "update", "delete"] },
      { accounting: ["update", "delete"] },
      {
        "master-data": [
          { users: ["create", "update", "delete"] },
          { employees: ["create", "update", "delete"] },
          { company: ["view", "update", "delete"] },
        ],
      },
      { booking: ["view", "create", "delete"] },
    ],
    role: ["manager"],
    company: ["Export Innovations Co."],
  },
  {
    id: "cf8ef31a-861d-4d7f-9a16-4d1ea12cda6e",
    name: "User8",
    email: "user8@nextmail.com",
    password: "zxc789",
    status: "inactive",
    accessModule: [
      { purchasing: ["view"] },
      { bookings: ["view", "create", "update", "delete"] },
      { sales: ["view", "create", "update", "delete"] },
      { reports: ["view"] },
      { accounting: ["view", "create", "delete"] },
      {
        "master-data": [
          { users: ["create"] },
          { employees: ["create", "update"] },
          { company: ["create"] },
        ],
      },
      { booking: ["view"] },
    ],
    role: ["user"],
    company: ["Architectural Innovations Co.", "Export Innovations Co."],
  },
  {
    id: "aedc4b3f-1c77-4a84-bb9d-686297e1e66c",
    name: "User9",
    email: "user9@nextmail.com",
    password: "mno456",
    status: "active",
    accessModule: [
      { purchasing: ["view", "update", "delete"] },
      { bookings: ["create", "update"] },
      { sales: ["view", "update", "delete"] },
      { reports: ["view", "delete"] },
      { accounting: ["view"] },
      {
        "master-data": [
          { users: ["create", "delete"] },
          { employees: ["view", "create", "delete"] },
          { company: ["create", "update"] },
        ],
      },
      { booking: ["create"] },
    ],
    role: ["manager"],
    company: ["Diamond Co.", "Export Innovations Co."],
  },
  {
    id: "8a6942ea-3bf9-4206-93c0-3701d45e85e3",
    name: "User10",
    email: "user10@nextmail.com",
    password: "pqr123",
    status: "inactive",
    accessModule: [
      { purchasing: ["create", "update", "delete"] },
      { bookings: ["view", "update", "delete"] },
      { sales: ["view", "create", "update", "delete"] },
      { reports: ["view", "create", "update"] },
      { accounting: ["view", "delete"] },
      {
        "master-data": [
          { users: ["view", "update"] },
          { employees: ["create", "update", "delete"] },
          { company: ["view", "create"] },
        ],
      },
      { booking: ["view", "delete"] },
    ],
    role: ["user"],
    company: [
      "Diamond Co.",
      "Tech Innovations Co.",
      "Architectural Innovations Co.",
      "Export Innovations Co.",
    ],
  },
];

const employees = [];
//** Company can be multiple or more */
export const company = [
  {
    id: "5b7a8461-615d-43c2-9f93-4a07b0de0f6b",
    companyName: "Diamond Co.",
    industry: "Jewelry and precious metals",
    location: "Antwerp, Belgium",
    founded: 1864,
    employees: 500,
    revenue: 1000000000,
    description:
      "Diamond Co. is a leading diamond manufacturer and retailer with a long history of providing high-quality diamonds to customers around the world. The company is known for its ethical sourcing practices and its commitment to sustainability.",
  },
  {
    id: "1cbfc97b-8a82-44c3-ba07-9a5a5d49a584",
    companyName: "Tech Innovations Co.",
    industry: "Technology",
    location: "Silicon Valley, California, USA",
    founded: 2010,
    employees: 1000,
    revenue: 500000000,
    description:
      "Tech Innovations Co. is a leading provider of innovative technology solutions. The company develops and markets a wide range of products and services, including software, hardware, and cloud computing solutions.",
  },
  {
    id: "0f6d2084-9534-48e3-9612-1f22e6e4a2f1",
    companyName: "Architectural Innovations Co.",
    industry: "Architecture and engineering",
    location: "New York City, New York, USA",
    founded: 1995,
    employees: 250,
    revenue: 100000000,
    description:
      "Architectural Innovations Co. is an award-winning architectural firm that designs and builds innovative and sustainable buildings. The firm is known for its creative and environmentally conscious approach to design.",
  },
  {
    id: "9a51f09b-1f53-4c3a-9eeb-847b1a5f0bfb",
    companyName: "Export Innovations Co.",
    industry: "Exporting",
    location: "Shanghai, China",
    founded: 2005,
    employees: 300,
    revenue: 200000000,
    description:
      "Export Innovations Co. is a leading exporter of a wide range of products, including electronics, machinery, and textiles. The company is known for its strong relationships with its suppliers and its ability to source high-quality products at competitive prices.",
  },
];

export const partners = [
  [
    {
      id: "5b7a8461-615d-43c2-9f93-4a07b0de0f6b",
      Vendor: "Vendor1",
      Name: "ABC Electronics",
      "Contact Person": "John Smith",
      "Vendor Ref. No.": "V1001",
      "Local Currency": "USD",
      Branch: "Main",
    },
    {
      id: "1cbfc97b-8a82-44c3-ba07-9a5a5d49a584",
      Vendor: "Vendor2",
      Name: "XYZ Supplies",
      "Contact Person": "Jane Doe",
      "Vendor Ref. No.": "V2002",
      "Local Currency": "EUR",
      Branch: "Branch A",
    },
    {
      id: "0f6d2084-9534-48e3-9612-1f22e6e4a2f1",
      Vendor: "Vendor3",
      Name: "PQR Solutions",
      "Contact Person": "Michael Johnson",
      "Vendor Ref. No.": "V3003",
      "Local Currency": "GBP",
      Branch: "Branch B",
    },
    {
      id: "9a51f09b-1f53-4c3a-9eeb-847b1a5f0bfb",
      Vendor: "Vendor4",
      Name: "LMN Services",
      "Contact Person": "Emily Wilson",
      "Vendor Ref. No.": "V4004",
      "Local Currency": "CAD",
      Branch: "Branch C",
    },
    {
      id: "5ac94936-5e67-47cf-9984-7de93856a45e",
      Vendor: "Vendor5",
      Name: "JKL Technologies",
      "Contact Person": "Christopher Brown",
      "Vendor Ref. No.": "V5005",
      "Local Currency": "AUD",
      Branch: "Branch D",
    },
  ],
];
const vendors = [];
const items = [
  [
    {
      id: "5b7a8461-615d-43c2-9f93-4a07b0de0f6b",
      "Item No.": "A001",
      "Item Name": "Widget X",
      "BP Catalog No": "BP1001",
      Quantity: 100,
      "Unit Price": 10.99,
      Discount: 5,
      "Tax Code": "TAX001",
    },
    {
      id: "1cbfc97b-8a82-44c3-ba07-9a5a5d49a584",
      "Item No.": "B002",
      "Item Name": "Gadget Y",
      "BP Catalog No": "BP2002",
      Quantity: 50,
      "Unit Price": 19.99,
      Discount: 2.5,
      "Tax Code": "TAX002",
    },
    {
      id: "0f6d2084-9534-48e3-9612-1f22e6e4a2f1",
      "Item No.": "C003",
      "Item Name": "Tool Z",
      "BP Catalog No": "BP3003",
      Quantity: 75,
      "Unit Price": 8.49,
      Discount: 7,
      "Tax Code": "TAX003",
    },
    {
      id: "9a51f09b-1f53-4c3a-9eeb-847b1a5f0bfb",
      "Item No.": "D004",
      "Item Name": "Device A",
      "BP Catalog No": "BP4004",
      Quantity: 200,
      "Unit Price": 15.75,
      Discount: 3.5,
      "Tax Code": "TAX004",
    },
    {
      id: "5ac94936-5e67-47cf-9984-7de93856a45e",
      "Item No.": "E005",
      "Item Name": "Accessory B",
      "BP Catalog No": "BP5005",
      Quantity: 30,
      "Unit Price": 5.99,
      Discount: 4,
      "Tax Code": "TAX005",
    },
  ],
];
//* List of comapany assets/equipment used for booking
const equiments = [];

//** A List of purchasing records that has a status(PO Quatation, PO, GRPO, A/P Invoice) */
//** If A/P Invoice is the status should add a A/P invoice Status (A/P credit memo, Payed Invoice, or notpayed? ) */
const purchasing = [];

//** A List of booking records of company assets/equiment that has a staatus(Confirm Booking, Waiting List, Pending Approval) */
//** Candidate field(Name, type, status, remarks,date, time, employee) */
const booking = [];
