export type NavItem = {
  title: string
  href: string
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export const navigation: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/getting-started/installation" },
      { title: "Usage", href: "/getting-started/usage" },
      { title: "Theming", href: "/getting-started/theming" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Icons", href: "/foundations/icons" },
      { title: "Elevation", href: "/foundations/elevation" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Motion", href: "/foundations/motion" },
    ],
  },
  {
    title: "Atoms",
    items: [
      { title: "Avatar", href: "/components/avatar" },
      { title: "Avatar Group", href: "/components/avatar-group" },
      { title: "Badge", href: "/components/badge" },
      { title: "Button", href: "/components/button" },
      { title: "Chip", href: "/components/chip" },
      { title: "Divider", href: "/components/divider" },
      { title: "Icon", href: "/components/icon" },
      { title: "Kbd", href: "/components/kbd" },
      { title: "Label", href: "/components/label" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Spinner", href: "/components/spinner" },
      { title: "Tag", href: "/components/tag" },
      { title: "Toggle Group", href: "/components/toggle-group" },
      { title: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Calendar", href: "/components/calendar" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "File Upload", href: "/components/file-upload" },
      { title: "Form Field", href: "/components/form-field" },
      { title: "Input", href: "/components/input" },
      { title: "Input Group", href: "/components/input-group" },
      { title: "Input OTP", href: "/components/input-otp" },
      { title: "Number Input", href: "/components/number-input" },
      { title: "Password Input", href: "/components/password-input" },
      { title: "Phone Input", href: "/components/phone-input" },
      { title: "Radio", href: "/components/radio" },
      { title: "Search", href: "/components/search" },
      { title: "Select", href: "/components/select" },
      { title: "Slider", href: "/components/slider" },
      { title: "Switch", href: "/components/switch" },
      { title: "Textarea", href: "/components/textarea" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Breadcrumb", href: "/components/breadcrumb" },
      { title: "Menu", href: "/components/menu" },
      { title: "Navbar", href: "/components/navbar" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "Sidebar", href: "/components/sidebar" },
      { title: "Stepper", href: "/components/stepper" },
      { title: "Tabs", href: "/components/tabs" },
    ],
  },
  {
    title: "Overlays",
    items: [
      { title: "Alert Dialog", href: "/components/alert-dialog" },
      { title: "Bottom Sheet", href: "/components/bottom-sheet" },
      { title: "Command", href: "/components/command" },
      { title: "Context Menu", href: "/components/context-menu" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Drawer", href: "/components/drawer" },
      { title: "Dropdown", href: "/components/dropdown" },
      { title: "Popover", href: "/components/popover" },
      { title: "Toast", href: "/components/toast" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/components/alert" },
      { title: "Banner", href: "/components/banner" },
      { title: "Callout", href: "/components/callout" },
      { title: "Empty State", href: "/components/empty-state" },
      { title: "Notification Center", href: "/components/notification-center" },
      { title: "Progress", href: "/components/progress" },
    ],
  },
  {
    title: "Display",
    items: [
      { title: "Accordion", href: "/components/accordion" },
      { title: "Activity Feed", href: "/components/activity-feed" },
      { title: "Card", href: "/components/card" },
      { title: "Chat Message", href: "/components/chat-message" },
      { title: "Code Block", href: "/components/code-block" },
      { title: "Copy Button", href: "/components/copy-button" },
      { title: "Kanban Card", href: "/components/kanban-card" },
      { title: "List Item", href: "/components/list-item" },
      { title: "Media Card", href: "/components/media-card" },
      { title: "Pricing Card", href: "/components/pricing-card" },
      { title: "Profile Card", href: "/components/profile-card" },
      { title: "Rating", href: "/components/rating" },
      { title: "Segmented Control", href: "/components/segmented-control" },
      { title: "Stat Card", href: "/components/stat-card" },
      { title: "Table", href: "/components/table" },
      { title: "Timeline", href: "/components/timeline" },
    ],
  },
  {
    title: "Guidelines",
    items: [
      { title: "Accessibility", href: "/guidelines/accessibility" },
      { title: "Copywriting", href: "/guidelines/copywriting" },
    ],
  },
]
