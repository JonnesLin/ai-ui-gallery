import { createContext } from 'react';

/**
 * 当 Modal 在 ComponentPreview 等隔离容器中渲染时，
 * 通过此 context 将 portal 目标从 document.body 切换为容器内部元素，
 * 防止 portal 逃逸到主页面。
 */
export const PortalContainerContext = createContext<HTMLElement | null>(null);
