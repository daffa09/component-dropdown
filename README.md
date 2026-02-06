# Makyo Dropdown

A simple React dropdown component styled with Tailwind CSS. I built this because I needed a lightweight searchable select without installing heavy libraries like `react-select`.

## Why use this?
- **Lightweight**: No heavy dependencies, just React + Tailwind.
- **Searchable**: Simple text filter included.
- **TypeScript**: Typed props included.
- **Mobile Support**: Works fine on touch devices.

## Installation

```bash
npm install github:daffa09/component-dropdown
```

## Usage

Basic implementation:

```tsx
import { useState } from 'react';
import Dropdown from 'makyo-dropdown';

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
];

function App() {
  const [val, setVal] = useState('react');

  return (
    <div className="p-4">
      <Dropdown
        label="Select Framework"
        options={frameworks}
        selectedVal={val}
        onChange={(opt) => setVal(opt.value)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `label` | string | Label text above the input |
| `options` | array | List of data `{ label, value }` |
| `onChange` | func | Handle selection updates |
| `selectedVal` | any | Current value |