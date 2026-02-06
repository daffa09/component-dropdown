import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dropdown from "./Dropdown";
const sampleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option with icon", value: "2" },
    { label: "Long Long Option 3", value: "3" },
    { label: "Long Long Long Option 4", value: "4" },
    { label: "Long Long Long Long Option 5", value: "5" },
    { label: "Long Long Long Long Long Option 6", value: "6" },
];
const manyOptions = Array.from({ length: 50 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: String(i + 1),
}));
const meta = {
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
        (Story) => (_jsx("div", { style: { width: 400, minHeight: 400 }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
// Basic usage
export const Default = {
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
export const SearchHighlighting = {
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
                story: "Type 'long' in the search box to see matching text highlighted in cyan.",
            },
        },
    },
};
// Multiple selection mode
export const MultipleSelection = {
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
export const NoSearch = {
    args: {
        options: sampleOptions,
        label: "No Search",
        searchable: false,
        multi: false,
        portal: true,
    },
};
// Without portal (positioned inline)
export const WithoutPortal = {
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
export const ManyOptions = {
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
export const CustomOptionRender = {
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
export const ZIndexTest = {
    args: {
        options: sampleOptions,
        label: "Z-Index Test",
        searchable: true,
        multi: false,
        portal: true,
    },
    decorators: [
        (Story) => (_jsxs("div", { style: { position: "relative" }, children: [_jsx("div", { style: {
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
                    }, children: "z-index: 1000 overlay" }), _jsx(Story, {})] })),
    ],
    parameters: {
        docs: {
            description: {
                story: "Dropdown menu should appear above elements with z-index > 1000.",
            },
        },
    },
};
