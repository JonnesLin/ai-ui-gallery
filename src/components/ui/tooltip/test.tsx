import React from 'react';
import { Tooltip } from './Tooltip';
import type { TooltipProps } from './Tooltip.types';

/**
 * Type validation tests - this file should compile without errors
 */

// Valid: All required props
const Test1 = () => (
  <Tooltip content="Test" placement="top" theme="minimalist">
    <button>Test</button>
  </Tooltip>
);

// Valid: Minimal props (defaults)
const Test2 = () => (
  <Tooltip content="Test">
    <button>Test</button>
  </Tooltip>
);

// Valid: All props
const Test3 = () => (
  <Tooltip
    content="Test"
    placement="bottom-start"
    theme="dark"
    delay={500}
    arrow={true}
    trigger="click"
    open={true}
    onOpenChange={() => {}}
    className="custom-class"
  >
    <button>Test</button>
  </Tooltip>
);

// Valid: Controlled state
const Test4 = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Tooltip content="Test" open={open} onOpenChange={setOpen}>
      <button>Test</button>
    </Tooltip>
  );
};

// Valid: Different placements
const Test5 = () => (
  <>
    <Tooltip content="Test" placement="top"><button>Top</button></Tooltip>
    <Tooltip content="Test" placement="top-start"><button>Top Start</button></Tooltip>
    <Tooltip content="Test" placement="top-end"><button>Top End</button></Tooltip>
    <Tooltip content="Test" placement="bottom"><button>Bottom</button></Tooltip>
    <Tooltip content="Test" placement="bottom-start"><button>Bottom Start</button></Tooltip>
    <Tooltip content="Test" placement="bottom-end"><button>Bottom End</button></Tooltip>
    <Tooltip content="Test" placement="left"><button>Left</button></Tooltip>
    <Tooltip content="Test" placement="right"><button>Right</button></Tooltip>
  </>
);

// Valid: Different themes
const Test6 = () => (
  <>
    <Tooltip content="Test" theme="minimalist"><button>Minimalist</button></Tooltip>
    <Tooltip content="Test" theme="dark"><button>Dark</button></Tooltip>
    <Tooltip content="Test" theme="glassmorphism"><button>Glass</button></Tooltip>
    <Tooltip content="Test" theme="neumorphism"><button>Neumorphism</button></Tooltip>
  </>
);

// Valid: Different triggers
const Test7 = () => (
  <>
    <Tooltip content="Test" trigger="hover"><button>Hover</button></Tooltip>
    <Tooltip content="Test" trigger="click"><button>Click</button></Tooltip>
    <Tooltip content="Test" trigger="focus"><button>Focus</button></Tooltip>
  </>
);

// Valid: Different content types
const Test8 = () => (
  <>
    <Tooltip content="Simple text"><button>Text</button></Tooltip>
    <Tooltip content={<div>JSX content</div>}><button>JSX</button></Tooltip>
    <Tooltip content={<><strong>Bold</strong> and <em>italic</em></>}><button>Mixed</button></Tooltip>
  </>
);

// Valid: Different children types
const Test9 = () => (
  <>
    <Tooltip content="Test"><button>Button</button></Tooltip>
    <Tooltip content="Test"><span>Span</span></Tooltip>
    <Tooltip content="Test"><div>Div</div></Tooltip>
    <Tooltip content="Test"><a href="#">Link</a></Tooltip>
  </>
);

export {
  Test1, Test2, Test3, Test4, Test5, Test6, Test7, Test8, Test9
};
