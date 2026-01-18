/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持 tailwindCSS 的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      html {
        -webkit-font-smoothing: antialiased;
      }

      /* =========================================================
         1. 全局容器与正文基准设置
         正文字体已修改为 Noto Serif SC
         ========================================================= */
      .font-typography {
        /* 正文字体：Noto Serif SC (思源宋体) */
        font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif CN", serif !important;
        
        /* 正文大小：20px */
        font-size: 20px !important;
        
        /* 正文粗细：400 (Normal) */
        font-weight: 400 !important;
        
        /* 正文行高：32.8px */
        line-height: 32.8px !important;
        
        /* 文本渲染优化 */
        text-rendering: optimizeLegibility;
      }

      /* =========================================================
         2. 背景设置 (纯白背景)
         ========================================================= */
      .dark body {
        background-color: rgb(35, 34, 34);
      }
      
      #theme-typography {
        --primary-color: #2e405b;
        background-color: #f5f5f5; /* 纯白 */
        color: #000000;
        
        /* 去除网格背景 */
        background-image: none;
        text-shadow: none;
      }
      
      .dark #theme-typography {
        background-image: none;
      }

      /* =========================================================
         3. 标题设置 (保持无衬线体，现代感)
         ========================================================= */
      #theme-typography .blog-item-title, 
      .notion-h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", 
                     "PingFang SC", "Hiragino Sans GB", "Droid Sans Fallback", 
                     "Microsoft YaHei", sans-serif !important;
        
        font-size: 30px !important;
        font-weight: 700 !important;
        line-height: 42px !important;
        margin-bottom: 10px !important;
        color: rgb(0, 0, 0) !important;
      }
      
      .dark #theme-typography .blog-item-title,
      .dark .notion-h1 {
        color: #d1d5db !important;
      }

      /* =========================================================
         4. Notion 内容强制覆盖 (确保正文生效)
         ========================================================= */
      .notion-text, 
      .notion-paragraph, 
      .notion-list-item {
        /* 强制使用 Noto Serif SC */
        font-family: "Noto Serif SC", "Source Han Serif SC", "Source Han Serif CN", serif !important;
        
        font-size: 20px !important;
        line-height: 32.8px !important;
        
        /* 段落间距：22.4px */
        margin-bottom: 22.4px !important;
        margin-top: 0px !important;
      }

      /* 博客名称 (左上角) */
      #theme-typography #blog-name,
      #theme-typography #blog-name-en {
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
      }

      /* 杂项 */
      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
      
      .notion {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      #container-wrapper .scroll-hidden {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  )
}

export { Style }
