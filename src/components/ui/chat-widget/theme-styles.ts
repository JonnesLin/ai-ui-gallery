import type { ThemeName } from '../_themes/types';

export interface ChatWidgetThemeStyles {
  container: string;
  header: {
    container: string;
    avatar: string;
    title: string;
    subtitle: string;
    closeButton: string;
  };
  messages: {
    container: string;
    userBubble: string;
    agentBubble: string;
    userAvatar: string;
    agentAvatar: string;
    timestamp: string;
    dateDivider: string;
  };
  input: {
    container: string;
    inputField: string;
    sendButton: string;
    attachButton: string;
    quickReply: string;
  };
  trigger: {
    button: string;
    icon: string;
  };
}

export const chatWidgetThemeStyles: Record<ThemeName, ChatWidgetThemeStyles> = {
  flat: {
    container: 'bg-gray-100 rounded-lg overflow-hidden',
    header: {
      container: 'px-5 py-4 bg-teal-500',
      avatar: 'w-11 h-11 rounded-lg bg-teal-600 flex items-center justify-center',
      title: 'text-white font-semibold',
      subtitle: 'text-teal-100 text-sm',
      closeButton: 'w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center hover:bg-teal-700 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gray-100',
      userBubble: 'bg-teal-500 text-white px-4 py-3 rounded-lg text-sm',
      agentBubble: 'bg-white text-gray-700 px-4 py-3 rounded-lg text-sm',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: '',
    },
    input: {
      container: 'p-4 bg-gray-100',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none',
      sendButton: 'px-5 py-3 bg-teal-500 text-white font-medium text-sm rounded-lg hover:bg-teal-600 transition-colors',
      attachButton: 'w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-white text-teal-600 text-sm rounded-lg hover:bg-teal-50 transition-colors',
    },
    trigger: {
      button: 'w-14 h-14 bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 transition-colors',
      icon: 'w-6 h-6 text-white',
    },
  },
  material: {
    container: 'bg-white rounded-2xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)]',
    header: {
      container: 'px-4 py-3 bg-blue-600',
      avatar: 'w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white/30',
      title: 'text-white font-medium',
      subtitle: 'text-blue-100 text-xs',
      closeButton: 'w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gray-50',
      userBubble: 'bg-blue-600 text-white rounded-2xl rounded-br-md px-4 py-2.5 text-sm',
      agentBubble: 'bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm px-4 py-2.5 text-sm',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-auto',
      timestamp: 'text-xs text-gray-500 mt-1 block px-2',
      dateDivider: 'text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-3 bg-white border-t border-gray-100',
      inputField: 'flex-1 px-4 py-2.5 text-sm bg-gray-100 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all',
      sendButton: 'w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md',
      attachButton: 'w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-blue-50 text-blue-600 text-sm rounded-full hover:bg-blue-100 transition-colors',
    },
    trigger: {
      button: 'w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors',
      icon: 'w-6 h-6 text-white',
    },
  },
  minimalist: {
    container: 'bg-white rounded-none overflow-hidden border border-gray-200',
    header: {
      container: 'px-4 py-3 border-b border-gray-200',
      avatar: 'w-8 h-8 rounded-full bg-black flex items-center justify-center',
      title: 'text-black font-medium',
      subtitle: 'text-gray-500 text-xs',
      closeButton: 'w-8 h-8 hover:bg-gray-100 flex items-center justify-center transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-white',
      userBubble: 'bg-black text-white px-3 py-2 text-sm',
      agentBubble: 'bg-gray-100 text-black px-3 py-2 text-sm',
      userAvatar: '',
      agentAvatar: 'w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-gray-400 mt-1 block',
      dateDivider: 'text-xs text-gray-400',
    },
    input: {
      container: 'p-3 border-t border-gray-200',
      inputField: 'flex-1 px-3 py-2 text-sm border border-gray-200 text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors',
      sendButton: 'px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors',
      attachButton: 'w-8 h-8 hover:bg-gray-100 flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 border border-gray-200 text-black text-sm hover:bg-gray-50 transition-colors',
    },
    trigger: {
      button: 'w-12 h-12 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-colors',
      icon: 'w-5 h-5 text-white',
    },
  },
  glassmorphism: {
    container: 'bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl',
    header: {
      container: 'px-5 py-4 bg-white/5 backdrop-blur-sm border-b border-white/10',
      avatar: 'w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30',
      title: 'text-white font-semibold',
      subtitle: 'text-white/70 text-sm',
      closeButton: 'w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3',
      userBubble: 'bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-2xl text-sm border border-white/20',
      agentBubble: 'bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-2xl text-sm border border-white/10',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30',
      timestamp: 'text-xs text-white/60 mt-1 block px-1',
      dateDivider: 'text-xs text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-white/5 backdrop-blur-sm border-t border-white/10',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white/10 backdrop-blur-md rounded-2xl text-white placeholder-white/50 focus:outline-none focus:bg-white/15 transition-all border border-white/20',
      sendButton: 'px-5 py-3 bg-white/20 backdrop-blur-md text-white font-medium text-sm rounded-2xl hover:bg-white/30 transition-all border border-white/30',
      attachButton: 'w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all',
      quickReply: 'px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm rounded-xl hover:bg-white/20 transition-all border border-white/20',
    },
    trigger: {
      button: 'w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full shadow-2xl hover:bg-white/30 transition-all border border-white/30',
      icon: 'w-6 h-6 text-white',
    },
  },
  neumorphism: {
    container: 'bg-[#e0e5ec] rounded-3xl overflow-hidden shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]',
    header: {
      container: 'px-5 py-4 bg-[#e0e5ec]',
      avatar: 'w-11 h-11 rounded-2xl bg-[#e0e5ec] flex items-center justify-center shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]',
      title: 'text-[#4a5568] font-semibold',
      subtitle: 'text-[#718096] text-sm',
      closeButton: 'w-9 h-9 rounded-xl bg-[#e0e5ec] text-[#4a5568] flex items-center justify-center shadow-[2px_2px_5px_#a3b1c6,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] transition-all',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-[#e0e5ec]',
      userBubble: 'bg-[#e0e5ec] text-[#4a5568] px-4 py-3 rounded-2xl text-sm shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]',
      agentBubble: 'bg-[#e0e5ec] text-[#4a5568] px-4 py-3 rounded-2xl text-sm shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-[#e0e5ec] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]',
      timestamp: 'text-xs text-[#718096] mt-1 block px-1',
      dateDivider: 'text-xs text-[#718096] bg-[#e0e5ec] px-3 py-1 rounded-full shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff]',
    },
    input: {
      container: 'p-4 bg-[#e0e5ec]',
      inputField: 'flex-1 px-4 py-3 text-sm bg-[#e0e5ec] rounded-2xl text-[#4a5568] placeholder-[#718096] focus:outline-none shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]',
      sendButton: 'px-5 py-3 bg-[#e0e5ec] text-[#4a5568] font-medium text-sm rounded-2xl shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff] hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff] transition-all',
      attachButton: 'w-10 h-10 rounded-xl bg-[#e0e5ec] shadow-[2px_2px_5px_#a3b1c6,-2px_-2px_5px_#ffffff] hover:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] flex items-center justify-center transition-all',
      quickReply: 'px-3 py-1.5 bg-[#e0e5ec] text-[#4a5568] text-sm rounded-xl shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff] hover:shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff] transition-all',
    },
    trigger: {
      button: 'w-14 h-14 bg-[#e0e5ec] rounded-full shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] transition-all',
      icon: 'w-6 h-6 text-[#4a5568]',
    },
  },
  dark: {
    container: 'bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2a2a2a]',
    header: {
      container: 'px-5 py-4 bg-[#2a2a2a] border-b border-[#3a3a3a]',
      avatar: 'w-10 h-10 rounded-xl bg-[#3a3a3a] flex items-center justify-center',
      title: 'text-white font-semibold',
      subtitle: 'text-gray-400 text-sm',
      closeButton: 'w-9 h-9 rounded-lg bg-[#3a3a3a] text-white flex items-center justify-center hover:bg-[#4a4a4a] transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-[#1a1a1a]',
      userBubble: 'bg-blue-600 text-white px-4 py-3 rounded-2xl text-sm',
      agentBubble: 'bg-[#2a2a2a] text-gray-200 px-4 py-3 rounded-2xl text-sm border border-[#3a3a3a]',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-[#3a3a3a] flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: 'text-xs text-gray-500 bg-[#2a2a2a] px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-[#2a2a2a] border-t border-[#3a3a3a]',
      inputField: 'flex-1 px-4 py-3 text-sm bg-[#1a1a1a] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-[#3a3a3a]',
      sendButton: 'px-5 py-3 bg-blue-600 text-white font-medium text-sm rounded-xl hover:bg-blue-700 transition-colors',
      attachButton: 'w-10 h-10 rounded-xl bg-[#3a3a3a] hover:bg-[#4a4a4a] flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-[#3a3a3a] text-gray-300 text-sm rounded-lg hover:bg-[#4a4a4a] transition-colors',
    },
    trigger: {
      button: 'w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors',
      icon: 'w-6 h-6 text-white',
    },
  },
  gradient: {
    container: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl overflow-hidden shadow-2xl',
    header: {
      container: 'px-5 py-4 bg-black/20 backdrop-blur-sm',
      avatar: 'w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center',
      title: 'text-white font-bold',
      subtitle: 'text-white/80 text-sm',
      closeButton: 'w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-black/10',
      userBubble: 'bg-white/90 text-purple-900 px-4 py-3 rounded-2xl rounded-br-md text-sm font-medium',
      agentBubble: 'bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-2xl rounded-bl-md text-sm',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-white/70 mt-1 block px-1',
      dateDivider: 'text-xs text-white/70 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-black/20 backdrop-blur-sm',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white/20 backdrop-blur-md rounded-2xl text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition-all',
      sendButton: 'px-5 py-3 bg-white/90 text-purple-600 font-bold text-sm rounded-2xl hover:bg-white transition-all',
      attachButton: 'w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all',
      quickReply: 'px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm rounded-xl hover:bg-white/30 transition-all',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full shadow-2xl hover:shadow-3xl transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  brutalist: {
    container: 'bg-yellow-300 rounded-none overflow-hidden border-8 border-black shadow-[8px_8px_0_0_#000]',
    header: {
      container: 'px-5 py-4 bg-black border-b-8 border-black',
      avatar: 'w-12 h-12 rounded-none bg-yellow-300 border-4 border-black flex items-center justify-center',
      title: 'text-yellow-300 font-black text-lg uppercase tracking-wider',
      subtitle: 'text-yellow-300/80 text-sm font-bold uppercase',
      closeButton: 'w-10 h-10 rounded-none bg-yellow-300 text-black border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-4 bg-yellow-300',
      userBubble: 'bg-black text-yellow-300 px-4 py-3 rounded-none border-4 border-black text-sm font-bold',
      agentBubble: 'bg-white text-black px-4 py-3 rounded-none border-4 border-black text-sm font-bold',
      userAvatar: '',
      agentAvatar: 'w-10 h-10 rounded-none bg-black border-4 border-black flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-black font-bold mt-1 block px-1 uppercase',
      dateDivider: 'text-xs text-black font-bold bg-white border-4 border-black px-3 py-1 uppercase',
    },
    input: {
      container: 'p-4 bg-yellow-300 border-t-8 border-black',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-none border-4 border-black text-black placeholder-black/50 focus:outline-none font-bold',
      sendButton: 'px-5 py-3 bg-black text-yellow-300 font-black text-sm rounded-none border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors uppercase',
      attachButton: 'w-10 h-10 rounded-none bg-white border-4 border-black hover:bg-yellow-400 flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-white text-black text-sm rounded-none border-4 border-black hover:bg-yellow-400 transition-colors font-bold uppercase',
    },
    trigger: {
      button: 'w-14 h-14 bg-yellow-300 rounded-none border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all',
      icon: 'w-6 h-6 text-black',
    },
  },
  retro: {
    container: 'bg-[#f4e4c1] rounded-2xl overflow-hidden border-4 border-[#8b4513] shadow-[0_8px_0_0_#8b4513]',
    header: {
      container: 'px-5 py-4 bg-[#d2691e] border-b-4 border-[#8b4513]',
      avatar: 'w-11 h-11 rounded-full bg-[#f4e4c1] border-3 border-[#8b4513] flex items-center justify-center',
      title: 'text-[#f4e4c1] font-bold text-shadow-sm',
      subtitle: 'text-[#f4e4c1]/80 text-sm',
      closeButton: 'w-9 h-9 rounded-full bg-[#8b4513] text-[#f4e4c1] flex items-center justify-center hover:bg-[#a0522d] transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-[#f4e4c1]',
      userBubble: 'bg-[#d2691e] text-[#f4e4c1] px-4 py-3 rounded-2xl text-sm border-2 border-[#8b4513]',
      agentBubble: 'bg-white text-[#8b4513] px-4 py-3 rounded-2xl text-sm border-2 border-[#8b4513]',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-[#d2691e] border-2 border-[#8b4513] flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-[#8b4513] mt-1 block px-1',
      dateDivider: 'text-xs text-[#8b4513] bg-white border-2 border-[#8b4513] px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-[#f4e4c1] border-t-4 border-[#8b4513]',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-2xl border-2 border-[#8b4513] text-[#8b4513] placeholder-[#8b4513]/50 focus:outline-none focus:border-[#d2691e] transition-colors',
      sendButton: 'px-5 py-3 bg-[#d2691e] text-[#f4e4c1] font-bold text-sm rounded-2xl border-2 border-[#8b4513] hover:bg-[#cd853f] transition-colors',
      attachButton: 'w-10 h-10 rounded-full bg-white border-2 border-[#8b4513] hover:bg-[#d2691e] hover:text-[#f4e4c1] flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-white text-[#8b4513] text-sm rounded-full border-2 border-[#8b4513] hover:bg-[#d2691e] hover:text-[#f4e4c1] transition-colors',
    },
    trigger: {
      button: 'w-14 h-14 bg-[#d2691e] rounded-full border-4 border-[#8b4513] shadow-[0_4px_0_0_#8b4513] hover:shadow-[0_6px_0_0_#8b4513] transition-all',
      icon: 'w-6 h-6 text-[#f4e4c1]',
    },
  },
  cyberpunk: {
    container: 'bg-black rounded-none overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)]',
    header: {
      container: 'px-5 py-4 bg-gradient-to-r from-purple-900 to-pink-900 border-b-2 border-cyan-400 relative after:absolute after:inset-0 after:bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,255,0.1)_50%,transparent_100%)] after:animate-pulse',
      avatar: 'w-11 h-11 rounded-none bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(0,255,255,0.8)]',
      title: 'text-cyan-400 font-black text-lg uppercase tracking-widest',
      subtitle: 'text-pink-400 text-sm font-bold uppercase',
      closeButton: 'w-9 h-9 rounded-none bg-black text-cyan-400 border-2 border-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)]',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-black',
      userBubble: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-4 py-3 rounded-none border-2 border-cyan-400 text-sm font-bold shadow-[0_0_15px_rgba(0,255,255,0.5)]',
      agentBubble: 'bg-black text-cyan-400 px-4 py-3 rounded-none border-2 border-pink-400 text-sm font-bold shadow-[0_0_15px_rgba(255,0,255,0.3)]',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-none bg-black border-2 border-pink-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(255,0,255,0.5)]',
      timestamp: 'text-xs text-cyan-400/70 mt-1 block px-1 font-mono',
      dateDivider: 'text-xs text-cyan-400 bg-black border border-cyan-400 px-3 py-1 font-mono shadow-[0_0_10px_rgba(0,255,255,0.3)]',
    },
    input: {
      container: 'p-4 bg-black border-t-2 border-cyan-400',
      inputField: 'flex-1 px-4 py-3 text-sm bg-black rounded-none border-2 border-cyan-400 text-cyan-400 placeholder-cyan-400/50 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all font-mono',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black text-sm rounded-none border-2 border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all uppercase',
      attachButton: 'w-10 h-10 rounded-none bg-black border-2 border-pink-400 hover:bg-pink-400 hover:text-black flex items-center justify-center transition-all shadow-[0_0_10px_rgba(255,0,255,0.3)]',
      quickReply: 'px-3 py-1.5 bg-black text-cyan-400 text-sm rounded-none border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-bold uppercase',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-none border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:shadow-[0_0_30px_rgba(0,255,255,1)] transition-all',
      icon: 'w-6 h-6 text-black',
    },
  },
  pastel: {
    container: 'bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden',
    header: {
      container: 'px-5 py-4 bg-gradient-to-r from-pink-200 to-purple-200',
      avatar: 'w-11 h-11 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center',
      title: 'text-purple-800 font-semibold',
      subtitle: 'text-purple-600 text-sm',
      closeButton: 'w-9 h-9 rounded-full bg-white/50 text-purple-600 flex items-center justify-center hover:bg-white/80 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-pink-50 to-purple-50',
      userBubble: 'bg-gradient-to-r from-pink-300 to-purple-300 text-white px-4 py-3 rounded-3xl text-sm',
      agentBubble: 'bg-white text-purple-800 px-4 py-3 rounded-3xl text-sm',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-purple-400 mt-1 block px-1',
      dateDivider: 'text-xs text-purple-500 bg-white/70 px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-gradient-to-r from-pink-100 to-purple-100',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-full text-purple-800 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-medium text-sm rounded-full hover:from-pink-500 hover:to-purple-500 transition-all',
      attachButton: 'w-10 h-10 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-white text-purple-600 text-sm rounded-full hover:bg-purple-50 transition-colors',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg hover:shadow-xl transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  corporate: {
    container: 'bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg',
    header: {
      container: 'px-5 py-4 bg-gradient-to-r from-blue-700 to-blue-900',
      avatar: 'w-10 h-10 rounded-lg bg-white flex items-center justify-center',
      title: 'text-white font-semibold',
      subtitle: 'text-blue-100 text-sm',
      closeButton: 'w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gray-50',
      userBubble: 'bg-blue-700 text-white px-4 py-3 rounded-lg text-sm',
      agentBubble: 'bg-white text-gray-800 px-4 py-3 rounded-lg text-sm border border-gray-200',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: 'text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded-full',
    },
    input: {
      container: 'p-4 bg-white border-t border-gray-200',
      inputField: 'flex-1 px-4 py-3 text-sm bg-gray-50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all border border-gray-200',
      sendButton: 'px-5 py-3 bg-blue-700 text-white font-medium text-sm rounded-lg hover:bg-blue-800 transition-colors',
      attachButton: 'w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors',
      quickReply: 'px-3 py-1.5 bg-white text-blue-700 text-sm rounded-lg hover:bg-blue-50 transition-colors border border-gray-200',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-lg hover:shadow-xl transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  playful: {
    container: 'bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 rounded-[2rem] overflow-hidden shadow-2xl',
    header: {
      container: 'px-5 py-4 bg-white/30 backdrop-blur-sm',
      avatar: 'w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center animate-bounce',
      title: 'text-purple-800 font-black text-lg',
      subtitle: 'text-purple-600 text-sm font-bold',
      closeButton: 'w-10 h-10 rounded-full bg-white/50 text-purple-600 flex items-center justify-center hover:bg-white hover:rotate-90 transition-all duration-300',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-white/20',
      userBubble: 'bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-4 py-3 rounded-3xl text-sm font-semibold transform hover:scale-105 transition-transform',
      agentBubble: 'bg-white text-purple-800 px-4 py-3 rounded-3xl text-sm font-semibold transform hover:scale-105 transition-transform',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-purple-600 mt-1 block px-1 font-bold',
      dateDivider: 'text-xs text-purple-700 bg-white/70 px-3 py-1 rounded-full font-bold',
    },
    input: {
      container: 'p-4 bg-white/30 backdrop-blur-sm',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-full text-purple-800 placeholder-purple-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold text-sm rounded-full hover:from-yellow-500 hover:to-pink-500 transform hover:scale-110 transition-all',
      attachButton: 'w-10 h-10 rounded-full bg-white/70 hover:bg-white transform hover:rotate-12 flex items-center justify-center transition-all',
      quickReply: 'px-3 py-1.5 bg-white text-purple-600 text-sm rounded-full hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-300 transition-all font-bold',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-full shadow-2xl hover:shadow-3xl animate-pulse hover:animate-none transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  '3d': {
    container: 'bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-white',
    header: {
      container: 'px-5 py-4 bg-gradient-to-b from-blue-500 to-blue-600 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)]',
      avatar: 'w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.3)]',
      title: 'text-white font-bold drop-shadow-md',
      subtitle: 'text-blue-100 text-sm drop-shadow-sm',
      closeButton: 'w-9 h-9 rounded-lg bg-gradient-to-b from-blue-400 to-blue-500 text-white flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-slate-100',
      userBubble: 'bg-gradient-to-b from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl text-sm shadow-[0_4px_8px_rgba(0,0,0,0.2)]',
      agentBubble: 'bg-gradient-to-b from-white to-slate-50 text-gray-800 px-4 py-3 rounded-2xl text-sm shadow-[0_4px_8px_rgba(0,0,0,0.15)] border-t border-white',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center flex-shrink-0 shadow-[0_2px_4px_rgba(0,0,0,0.2)]',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: 'text-xs text-gray-600 bg-gradient-to-b from-slate-200 to-slate-300 px-3 py-1 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
    },
    input: {
      container: 'p-4 bg-gradient-to-b from-slate-100 to-slate-200 border-t-2 border-white',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]',
      sendButton: 'px-5 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-medium text-sm rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-[0_4px_8px_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]',
      attachButton: 'w-10 h-10 rounded-xl bg-gradient-to-b from-slate-200 to-slate-300 hover:from-slate-300 hover:to-slate-400 flex items-center justify-center transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]',
      quickReply: 'px-3 py-1.5 bg-gradient-to-b from-white to-slate-100 text-blue-600 text-sm rounded-lg hover:from-slate-50 hover:to-slate-200 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.4)] active:shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all',
      icon: 'w-6 h-6 text-white drop-shadow-md',
    },
  },
  futuristic: {
    container: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)]',
    header: {
      container: 'px-5 py-4 bg-black/40 backdrop-blur-md border-b border-purple-500/30',
      avatar: 'w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]',
      title: 'text-white font-bold tracking-wide',
      subtitle: 'text-purple-300 text-sm',
      closeButton: 'w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center hover:bg-purple-500/30 hover:text-white transition-all',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-black/20 to-black/40',
      userBubble: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-2xl text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)]',
      agentBubble: 'bg-slate-800/60 backdrop-blur-sm text-purple-100 px-4 py-3 rounded-2xl text-sm border border-purple-500/20',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.6)]',
      timestamp: 'text-xs text-purple-400 mt-1 block px-1',
      dateDivider: 'text-xs text-purple-400 bg-purple-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/20',
    },
    input: {
      container: 'p-4 bg-black/40 backdrop-blur-md border-t border-purple-500/30',
      inputField: 'flex-1 px-4 py-3 text-sm bg-slate-800/40 backdrop-blur-sm rounded-2xl text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border border-purple-500/20',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-sm rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)]',
      attachButton: 'w-10 h-10 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 flex items-center justify-center transition-all',
      quickReply: 'px-3 py-1.5 bg-purple-500/20 text-purple-300 text-sm rounded-xl hover:bg-purple-500/30 hover:text-white transition-all border border-purple-500/30',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  luxury: {
    container: 'bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl overflow-hidden border border-amber-200 shadow-[0_8px_32px_rgba(217,119,6,0.2)]',
    header: {
      container: 'px-5 py-4 bg-gradient-to-r from-amber-900 to-yellow-900',
      avatar: 'w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center border-2 border-amber-300',
      title: 'text-amber-50 font-serif font-bold tracking-wide',
      subtitle: 'text-amber-200 text-sm font-serif',
      closeButton: 'w-9 h-9 rounded-full bg-amber-700 text-amber-50 flex items-center justify-center hover:bg-amber-600 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-amber-50',
      userBubble: 'bg-gradient-to-r from-amber-700 to-yellow-700 text-amber-50 px-4 py-3 rounded-2xl text-sm font-serif',
      agentBubble: 'bg-white text-amber-900 px-4 py-3 rounded-2xl text-sm border border-amber-200 font-serif',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center flex-shrink-0 border border-amber-300',
      timestamp: 'text-xs text-amber-600 mt-1 block px-1 font-serif',
      dateDivider: 'text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 font-serif',
    },
    input: {
      container: 'p-4 bg-gradient-to-b from-amber-50 to-yellow-50 border-t border-amber-200',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-2xl text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all border border-amber-200 font-serif',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-amber-700 to-yellow-700 text-amber-50 font-serif font-medium text-sm rounded-2xl hover:from-amber-800 hover:to-yellow-800 transition-all',
      attachButton: 'w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors border border-amber-200',
      quickReply: 'px-3 py-1.5 bg-white text-amber-700 text-sm rounded-full hover:bg-amber-50 transition-colors border border-amber-200 font-serif',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full shadow-[0_8px_32px_rgba(217,119,6,0.3)] hover:shadow-[0_12px_40px_rgba(217,119,6,0.4)] transition-all border-2 border-amber-300',
      icon: 'w-6 h-6 text-amber-50',
    },
  },
  monochrome: {
    container: 'bg-white rounded-lg overflow-hidden border-2 border-black',
    header: {
      container: 'px-5 py-4 bg-black border-b-2 border-black',
      avatar: 'w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-black',
      title: 'text-white font-bold',
      subtitle: 'text-gray-300 text-sm',
      closeButton: 'w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-white',
      userBubble: 'bg-black text-white px-4 py-3 rounded-lg text-sm',
      agentBubble: 'bg-white text-black px-4 py-3 rounded-lg text-sm border-2 border-black',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 border-2 border-black',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: 'text-xs text-black bg-white px-3 py-1 rounded-full border-2 border-black',
    },
    input: {
      container: 'p-4 bg-white border-t-2 border-black',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none border-2 border-black',
      sendButton: 'px-5 py-3 bg-black text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-colors',
      attachButton: 'w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors border-2 border-black',
      quickReply: 'px-3 py-1.5 bg-white text-black text-sm rounded-lg hover:bg-gray-100 transition-colors border-2 border-black',
    },
    trigger: {
      button: 'w-14 h-14 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-colors border-2 border-black',
      icon: 'w-6 h-6 text-white',
    },
  },
  nature: {
    container: 'bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden border border-green-200 shadow-lg',
    header: {
      container: 'px-5 py-4 bg-gradient-to-r from-green-600 to-emerald-600',
      avatar: 'w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center',
      title: 'text-white font-semibold',
      subtitle: 'text-green-100 text-sm',
      closeButton: 'w-9 h-9 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition-colors',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-green-50 to-emerald-50',
      userBubble: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-3xl text-sm',
      agentBubble: 'bg-white text-green-800 px-4 py-3 rounded-3xl text-sm border border-green-200',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0',
      timestamp: 'text-xs text-green-600 mt-1 block px-1',
      dateDivider: 'text-xs text-green-700 bg-white px-3 py-1 rounded-full border border-green-200',
    },
    input: {
      container: 'p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-full text-green-800 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all border border-green-200',
      sendButton: 'px-5 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium text-sm rounded-full hover:from-green-700 hover:to-emerald-700 transition-all',
      attachButton: 'w-10 h-10 rounded-full bg-white hover:bg-green-50 flex items-center justify-center transition-colors border border-green-200',
      quickReply: 'px-3 py-1.5 bg-white text-green-600 text-sm rounded-full hover:bg-green-50 transition-colors border border-green-200',
    },
    trigger: {
      button: 'w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all',
      icon: 'w-6 h-6 text-white',
    },
  },
  neon: {
    container: 'bg-gray-900 rounded-2xl overflow-hidden border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.5)]',
    header: {
      container: 'px-5 py-4 bg-black border-b-2 border-pink-500',
      avatar: 'w-11 h-11 rounded-lg bg-black flex items-center justify-center border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]',
      title: 'text-pink-400 font-black text-lg tracking-wider',
      subtitle: 'text-cyan-400 text-sm font-bold',
      closeButton: 'w-9 h-9 rounded-lg bg-black text-pink-400 border-2 border-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-gray-900',
      userBubble: 'bg-black text-pink-400 px-4 py-3 rounded-xl text-sm border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]',
      agentBubble: 'bg-black text-cyan-400 px-4 py-3 rounded-xl text-sm border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-lg bg-black border-2 border-cyan-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]',
      timestamp: 'text-xs text-gray-500 mt-1 block px-1',
      dateDivider: 'text-xs text-pink-400 bg-black border border-pink-500 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.3)]',
    },
    input: {
      container: 'p-4 bg-black border-t-2 border-pink-500',
      inputField: 'flex-1 px-4 py-3 text-sm bg-gray-900 rounded-xl text-pink-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all border-2 border-pink-500',
      sendButton: 'px-5 py-3 bg-black text-cyan-400 font-bold text-sm rounded-xl border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)]',
      attachButton: 'w-10 h-10 rounded-xl bg-black border-2 border-pink-500 hover:bg-pink-500 hover:text-black flex items-center justify-center transition-all shadow-[0_0_10px_rgba(236,72,153,0.3)]',
      quickReply: 'px-3 py-1.5 bg-black text-pink-400 text-sm rounded-lg border-2 border-pink-500 hover:bg-pink-500 hover:text-black transition-all shadow-[0_0_10px_rgba(236,72,153,0.3)]',
    },
    trigger: {
      button: 'w-14 h-14 bg-black rounded-full border-2 border-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.8)] hover:shadow-[0_0_40px_rgba(236,72,153,1)] transition-all',
      icon: 'w-6 h-6 text-pink-400',
    },
  },
  sketch: {
    container: 'bg-white rounded-lg overflow-hidden border-2 border-black shadow-[4px_4px_0_0_#000]',
    header: {
      container: 'px-5 py-4 bg-yellow-100 border-b-2 border-black',
      avatar: 'w-11 h-11 rounded-lg bg-white border-2 border-black flex items-center justify-center transform rotate-1',
      title: 'text-black font-bold',
      subtitle: 'text-gray-700 text-sm',
      closeButton: 'w-9 h-9 rounded-lg bg-white text-black border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors transform -rotate-2',
    },
    messages: {
      container: 'h-80 overflow-y-auto p-4 space-y-3 bg-white',
      userBubble: 'bg-yellow-100 text-black px-4 py-3 rounded-lg text-sm border-2 border-black transform rotate-1',
      agentBubble: 'bg-blue-100 text-black px-4 py-3 rounded-lg text-sm border-2 border-black transform -rotate-1',
      userAvatar: '',
      agentAvatar: 'w-8 h-8 rounded-lg bg-white border-2 border-black flex items-center justify-center flex-shrink-0 transform rotate-2',
      timestamp: 'text-xs text-gray-600 mt-1 block px-1',
      dateDivider: 'text-xs text-black bg-yellow-100 px-3 py-1 rounded-full border-2 border-black',
    },
    input: {
      container: 'p-4 bg-yellow-50 border-t-2 border-black',
      inputField: 'flex-1 px-4 py-3 text-sm bg-white rounded-lg text-black placeholder-gray-500 focus:outline-none border-2 border-black transform rotate-0 focus:rotate-1 transition-transform',
      sendButton: 'px-5 py-3 bg-yellow-100 text-black font-medium text-sm rounded-lg border-2 border-black hover:bg-yellow-200 transition-colors transform -rotate-1',
      attachButton: 'w-10 h-10 rounded-lg bg-white hover:bg-gray-50 flex items-center justify-center transition-colors border-2 border-black transform rotate-2',
      quickReply: 'px-3 py-1.5 bg-white text-black text-sm rounded-lg hover:bg-gray-50 transition-colors border-2 border-black transform -rotate-1',
    },
    trigger: {
      button: 'w-14 h-14 bg-yellow-100 rounded-full shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] transition-all border-2 border-black transform rotate-3',
      icon: 'w-6 h-6 text-black',
    },
  },
};

export function getChatWidgetStyles(theme: ThemeName): ChatWidgetThemeStyles {
  return chatWidgetThemeStyles[theme];
}
