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

      /* 这是外层容器，控制全局基准和评论区 */
      .font-typography {
        font-weight: 400; /* 建议改回400，500在中文正文中可能略显粗重 */
        font-size: 20px;
        font-family:
          'Noto Serif SC',
          'Georgia',
          'Times New Roman',
          'Times',
          'Source Han Serif CN',
          'Source Han Serif SC',
          'Source Han Serif TC',
          'Songti SC',
          'SimSun',
          serif !important;
      }

      // 底色
      .dark body {
        background-color: rgb(35, 34, 34);
      }
      
      // 文本不可选取
      .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }

      .dark #theme-typography {
        /* 如果深色模式也要纯色背景，请注释掉下面这段 linear-gradient */
        background-image: linear-gradient(
              to right,
              rgb(255 255 255 / 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px);
      }

      #theme-typography {
        --primary-color: #2e405b;
        background-color: #ffffff; /* 纯白背景 */
        color: #2e405b;
        text-shadow: 1px 1px 1px rgb(0 0 0 / 0.04);
        /* 已去除背景网格 */
      }

      #theme-typography #blog-name,
      #theme-typography #blog-name-en {
        font-family: HiraMinProN-W6, 'Source Han Serif CN',
          'Source Han Serif SC', 'Source Han Serif TC', serif;
      }

      #theme-typography .blog-item-title {
        color: #276077;
        font-size: 24px; /* 标题建议比正文再大一点 */
      }

      .dark #theme-typography .blog-item-title {
        color: #d1d5db;
      }

      /* 【关键修改在这里】 */
      /* 针对 Notion 渲染的内容进行强制覆盖 */
      .notion {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        
        /* 强制设置正文字体大小 */
        font-size: 20px !important;
        
        /* 字号变大后，必须增加行高，否则字会挤在一起 */
        line-height: 1.8 !important; 
      }
      
      /* 这是一个额外的保险：如果上面的不生效，这会强制针对段落生效 */
      .notion-text, .notion-list-item, .notion-quote {
         font-size: 20px !important;
      }

      #container-wrapper .scroll-hidden {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `}</style>
  )
}

export { Style }
