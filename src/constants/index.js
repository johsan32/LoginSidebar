export const Menus = [
  {
    id:"dasboard",
    name: "Dashboard",
    type: "category",
    menu: [
      {
        id:"/",
        title: "Default",
        path:"dashboard",
        icon: "default.svg",
      },
      {
        id:"analytics",
        title: "Analytics",
        path:"admin",
        icon: "analytics.svg",
      },
    ],
  },
  {
    id:"widget",
    name: "Widget",
    type: "category",
    menu: [
      {
        id:"statictics",
        title: "Statistics",
        path:"second",
        icon: "statistic.svg",
      },
      {
        id:"data",
        title: "Data",
        path:"admin",
        icon: "data.svg",
      },
      { 
        title: "Chart", 
        path:"listChild",
        icon: "chart.svg" 
    },
    ],
  },
  {
    id:"application",
    name: "Application",
    type: "category",
    menu: [
      {
        title: "Users",
        icon: "users.svg",
        subMenus: [
          {
            subMenuTitle: "Social Profile",
          },
          {
            subMenuTitle: "Account Profile",
            subMenuList:[
              {
                tabMenu:"Profile 1"
              },
              {
                tabMenu:"Profile 2"
              },
              {
                tabMenu:"Profile 3"
              }
            ]
          },
          {
            subMenuTitle: "Cards",
            subMenuList:[
              {
                tabMenu:"Style 1"
              },
              {
                tabMenu:"Style 2"
              },
              {
                tabMenu:"Style 3"
              }
            ]
          },
          {
            subMenuTitle: "List",
            subMenuList:[
              {
                tabMenu:"Style 1"
              },
              {
                tabMenu:"Style 2"
              },
              {
                tabMenu:"Style 3"
              }
            ]
          },
        ],
      },
      {
        title: "Customer",
        icon: "customer.svg",
        subMenus: [
          {
            subMenuTitle: "Customer List",
          },
          {
            subMenuTitle: "Order List",
          },
          {
            subMenuTitle: "Create Invoice",
          },
          {
            subMenuTitle: "Order Details",
          },
          {
            subMenuTitle: "Products",
          },
          {
            subMenuTitle: "Product Review",
          },
        ],
      },
      {
        title: "Chat",
        icon: "chat.svg",
      },
      {
        title: "Kanban",
        icon: "kanban.svg",
      },
      {
        title: "Mail",
        icon: "mail.svg",
      },
      {
        title: "Calendar",
        icon: "calendar.svg",
      },
      {
        title: "Contact",
        icon: "contact.svg",
        subMenus: [
          {
            subMenuTitle: "Cards",
          },
          {
            subMenuTitle: "List",
          },
        ],
      },
      {
        title: "E-commerce",
        icon: "commerce.svg",
        subMenus: [
          {
            subMenuTitle: "Products",
          },
          {
            subMenuTitle: "Product Details",
          },
          {
            subMenuTitle: "Product List",
          },
          {
            subMenuTitle: "Checkout",
          },
        ],
      },
    ],
  },

  {
    id:"forms",
    name: "Forms",
    type: "category",
    menu: [
      {
        title: "Components",
        icon: "form.svg",
        subMenus: [
          {
            subMenuTitle: "Auto Complete",
          },
          {
            subMenuTitle: "Button",
          },
          {
            subMenuTitle: "Checkbox",
          },
          {
            subMenuTitle: "Date&Time",
          },
          {
            subMenuTitle: "Radio",
          },
          {
            subMenuTitle: "Slider",
          },
          {
            subMenuTitle: "Switch",
          },
          {
            subMenuTitle: "Text Field",
          },
        ],
      },
      {
        title: "Plugins",
        icon: "plugins.svg",
        subMenus: [
          {
            subMenuTitle: "Auto Complete",
          },
          {
            subMenuTitle: "Mask",
          },
          {
            subMenuTitle: "Clipboard",
          },
          {
            subMenuTitle: "reCaptcha",
          },
          {
            subMenuTitle: "Wysinwug Editor",
          },
          {
            subMenuTitle: "Modal",
          },
        ],
      },
      {
        title: "Layaouts",
        icon: "layaut.svg",
        subMenus: [
          {
            subMenuTitle: "Layauts",
          },
          {
            subMenuTitle: "Multi Column Forms",
          },
          {
            subMenuTitle: "Action Bar",
          },
          {
            subMenuTitle: "Sticky Action Bar",
          },
        ],
      },
      {
        title: "Table",
        icon: "table.svg",
        subMenus: [
          {
            subMenuTitle: "Basic Table",
          },
          {
            subMenuTitle: "Dense Table",
          },
          {
            subMenuTitle: "Enhanced Tables",
          },
          {
            subMenuTitle: "Data Table",
          },
          {
            subMenuTitle: "Custom Table",
          },
          {
            subMenuTitle: "Fixed Header",
          },
          {
            subMenuTitle: "Collapse Table",
          },
        ],
      },
      {
        title: "Data Grid",
        icon: "datag.svg",
        subMenus: [
          {
            subMenuTitle: "Basic",
          },
          {
            subMenuTitle: "Inline Editing",
          },
          {
            subMenuTitle: "Column Groups",
          },
          {
            subMenuTitle: "Save&Restore",
          },
          {
            subMenuTitle: "Quick Filter",
          },
          {
            subMenuTitle: "Column Visibility",
          },
          {
            subMenuTitle: "Column Vitualization",
          },
          {
            subMenuTitle: "Column Menu",
          },
        ],
      },
      {
        title: "Charts",
        icon: "charts.svg",
      },
      {
        title: "Map",
        icon: "map.svg",
      },
      {
        title: "Form Validation",
        icon: "forms.svg",
      },
      {
        title: "Form Wizard",
        icon: "wizard.svg",
      },
    ],
  },


  {
    id:"ui",
    name: "UI Element",
    type: "category",
    menu: [
      {
        title: "Basic",
        info:"8 basic componenets",
        icon: "basic.svg",
        subMenus: [
          {
            subMenuTitle: "Accordion",
          },
          {
            subMenuTitle: "Avatar",
          },
          {
            subMenuTitle: "Badges",
          },
          {
            subMenuTitle: "Breadcrumb",
          },
          {
            subMenuTitle: "Cards",
          },
          {
            subMenuTitle: "Chip",
          },
          {
            subMenuTitle: "List",
          },
          {
            subMenuTitle: "Tabs",
          },
        ],
      },
      {
        title: "Advance",
        icon: "advance.svg",
        subMenus: [
          {
            subMenuTitle: "Alert",
          },
          {
            subMenuTitle: "Dialog",
          },
          {
            subMenuTitle: "Pagination",
          },
          {
            subMenuTitle: "Progres",
          },
          {
            subMenuTitle: "Rating",
          },
          {
            subMenuTitle: "Snackbar",
          },
          {
            subMenuTitle: "Skeleton",
          },
          {
            subMenuTitle: "Speddial",
          },
          {
            subMenuTitle: "Timeline",
          },
          {
            subMenuTitle: "Toogle Button",
          },
          {
            subMenuTitle: "Treview",
          },
        ],
      },
      {
        title: "Sample Page",
        icon: "samplepa.svg",
      },
  
    ],
  },
  {
    id:"pages",
    name: "Pages",
    info:"Prebuild Pages",
    type: "category",
    menu: [
      {
        title: "Authentication",
        icon: "authentication.svg",
        subMenus: [
          {
            subMenuTitle: "Authentication 1",
            subMenuList:[
              {
                tabMenu:"Login"
              },
              {
                tabMenu:"Register"
              },
              {
                tabMenu:"Forgot Password"
              },
              {
                tabMenu:"Check Mail"
              },
              {
                tabMenu:"Reset Password"
              },
              {
                tabMenu:"Code Verification"
              },
            ]
          },
          {
            subMenuTitle: "Authentication 2",
            subMenuList:[
              {
                tabMenu:"Login"
              },
              {
                tabMenu:"Register"
              },
              {
                tabMenu:"Forgot Password"
              },
              {
                tabMenu:"Check Mail"
              },
              {
                tabMenu:"Reset Password"
              },
              {
                tabMenu:"Code Verification"
              },
            ]
          },
          {
            subMenuTitle: "Authentication 3",
            subMenuList:[
              {
                tabMenu:"Login"
              },
              {
                tabMenu:"Register"
              },
              {
                tabMenu:"Forgot Password"
              },
              {
                tabMenu:"Check Mail"
              },
              {
                tabMenu:"Reset Password"
              },
              {
                tabMenu:"Code Verification"
              },
            ]
          },
        ],
      },
      {
        title: "Pricing",
        icon: "pricing.svg",
        subMenus: [
          {
            subMenuTitle: "Pricing 1",
          },
          {
            subMenuTitle: "Pricing 2",
          },          
        ],
      },
      {
        title: "Maintenance",
        icon: "maintenance.svg",
        subMenus: [
          {
            subMenuTitle: "Error 404",
          },
          {
            subMenuTitle: "Coming Soon",
            subMenuList:[
              {
                tabMenu:"Coming Soon 01"
              },
              {
                tabMenu:"Coming Soon 02"
              },
            ]
          }, 
          {
            subMenuTitle: "Under Construction",
          },              
        ],
      },
      {
        title: "Landing",
        icon: "landing.svg",
      },
      {
        title: "Contact Us",
        icon: "contactt.svg",
      },
      {
        title: "FaQs",
        icon: "faq.svg",
      },
      {
        title: "Privacy Policy",
        icon: "privacy.svg",
      },
    ],
  },

  {
    id:"utulies",
    name: "Utilities",
    type: "category",
    menu: [
      {
        title: "Tyography",
        icon: "typografy.svg",
      },
      {
        title: "Color",
        icon: "color.svg",
      },
      {
        title: "Shadow",
        icon: "shadow.svg",
      },
      {
        title: "Icons",
        icon: "icons.svg",
        subMenus: [
          {
            subMenuTitle: "Tabler Icons",
          },
          {
            subMenuTitle: "Material Icons",
          }
        ],
      },
      {
        title: "Animation",
        icon: "animation.svg",
      },
      {
        title: "Grid",
        icon: "grid.svg",
      },
    ],
  },



  {
    id:"others",
    name: "Others",
    type: "category",
    menu: [
      {
        title: "Menu Levels",
        icon: "menu.svg",
        subMenus: [
          {
            subMenuTitle: "Level 1",
          },
          {
            subMenuTitle: "Level 2",
          }
        ],
      },
      {
        title: "Sub Caption Levels",
        icon: "caption.svg",
        info:"Caption Collapse",
        subMenus: [
          {
            subMenuTitle: "Level 1",
            subInfo:"Caption Item",
          },
          {
            subMenuTitle: "Level 2",
            subInfo:"Sub Coolapse Caption",
          }
        ],
      },
      {
        title: "Disabled Menu",
        icon: "disabled.svg",
        disabled:true,
  
      },
      {
        title: "Oval Chip",
        icon: "oval.svg",
        mark:"9"
      },
      {
        title: "Avatar",
        icon: "avatar.svg",
        mark:"c",
        marked:"Codec"
      },
      {
        title: "Outlined",
        icon: "outline.svg",
        outline:"Outlined",
      },
    ],
  },
  {
    id:"endlist",
    name: "",
    type: "category",
    menu: [
      {
        title: "Documentation",
        icon: "document.svg",

      },

      {
        title: "Roadmap",
        icon: "roadmap.svg",

      },
    ],
  },
]
