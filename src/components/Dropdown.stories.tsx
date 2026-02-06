import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import type { DropdownOption } from "./Dropdown";

const sampleOptions: DropdownOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option with icon", value: "2" },
  { label: "Long Long Option 3", value: "3" },
  { label: "Long Long Long Option 4", value: "4" },
  { label: "Long Long Long Long Option 5", value: "5" },
  { label: "Long Long Long Long Long Option 6", value: "6" },
];

const manyOptions: DropdownOption[] = Array.from({ length: 50 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}));

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    searchable: {
      control: "boolean",
      description: "Enable search functionality",
    },
    multi: {
      control: "boolean",
      description: "Allow multiple selections",
    },
    portal: {
      control: "boolean",
      description: "Render dropdown in a portal",
    },
    label: {
      control: "text",
      description: "Label text above the dropdown",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no option is selected",
    },
    highlightColor: {
      control: "text",
      description: "Tailwind class for highlight color",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400, minHeight: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    options: sampleOptions,
    label: "Label",
    placeholder: "Select option",
    searchable: true,
    multi: false,
    portal: true,
  },
};

// With search highlighting - matching the design mockup
export const SearchHighlighting: Story = {
  args: {
    options: sampleOptions,
    label: "Label",
    searchable: true,
    multi: false,
    portal: true,
    highlightColor: "bg-cyan-400",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Type 'long' in the search box to see matching text highlighted in cyan.",
      },
    },
  },
};

// Multiple selection mode
export const MultipleSelection: Story = {
  args: {
    options: sampleOptions,
    label: "Multiple Selection",
    searchable: true,
    multi: true,
    portal: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Select multiple options. Each selection appears as a tag that can be removed.",
      },
    },
  },
};

// Without search
export const NoSearch: Story = {
  args: {
    options: sampleOptions,
    label: "No Search",
    searchable: false,
    multi: false,
    portal: true,
  },
};

// Without portal (positioned inline)
export const WithoutPortal: Story = {
  args: {
    options: sampleOptions,
    label: "Without Portal",
    searchable: true,
    multi: false,
    portal: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu is positioned relative to parent instead of using a portal.",
      },
    },
  },
};

// With many options to test scrolling and filtering
export const ManyOptions: Story = {
  args: {
    options: manyOptions,
    label: "Many Options",
    searchable: true,
    multi: false,
    portal: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Test with 50 options to verify scrolling and search filtering works well.",
      },
    },
  },
};

// Custom rendering example
export const CustomOptionRender: Story = {
  args: {
    options: [
      { label: "United States", value: "us", icon: "🇺🇸" },
      { label: "United Kingdom", value: "uk", icon: "🇬🇧" },
      { label: "Germany", value: "de", icon: "🇩🇪" },
      { label: "France", value: "fr", icon: "🇫🇷" },
      { label: "Japan", value: "jp", icon: "🇯🇵" },
    ],
    label: "Select Country",
    searchable: true,
    multi: false,
    portal: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Options with icons showing custom rendering capability.",
      },
    },
  },
};

// Z-index test - dropdown should appear above high z-index elements
export const ZIndexTest: Story = {
  args: {
    options: sampleOptions,
    label: "Z-Index Test",
    searchable: true,
    multi: false,
    portal: true,
  },
  decorators: [
    (Story) => (
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            height: 200,
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          z-index: 1000 overlay
        </div>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu should appear above elements with z-index > 1000.",
      },
    },
  },
};
