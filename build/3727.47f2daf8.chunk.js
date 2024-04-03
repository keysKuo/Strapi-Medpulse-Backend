(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3727],{53727:(ft,pt,j)=>{"use strict";j.r(pt),j.d(pt,{default:()=>Oe});var q=j(92132),yt=j(21272),ce=j(33544),S=j.n(ce),mt=j(63891),p=j(91120),D=j(43064),tt=j(94061),A=j(2291),J=j(51187),Ut=j.n(J),W=j(13972),wt=j(55230),zt=j.n(wt);const et=async(u,C)=>{if(!C)return;const{plugins:m=[]}=u,k=[...m.map(_=>_.pluginName)],a=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"},{name:"ShowBlocks",module:"ckeditor5-show-blocks"}],h=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],f=["FontBackgroundColor","FontColor","FontFamily","FontSize"],R=["List","DocumentList"];await Promise.all(a.filter(({name:_})=>k.includes(_)).map(async({module:_})=>await j(58380)(`./${_}/build/translations/${C}.js`).catch(()=>null))),k.some(_=>h.includes(_))&&await j(89320)(`./${C}.js`).catch(()=>null),k.some(_=>R.includes(_))&&await j(43053)(`./${C}.js`).catch(()=>null),k.some(_=>f.includes(_))&&await j(3906)(`./${C}.js`).catch(()=>null)},ee=async u=>{const C=new URLSearchParams(window.location.search),k=Object.fromEntries(C.entries())["plugins[i18n][locale]"],a=A.j2.getUserInfo().preferedLanguage,{ui:h=a||"en",content:f,textPartLanguage:R,ignorei18n:_}=u.language||{};if(k){const Z=k.split("-")[0];u.language={ui:typeof u.language=="string"?u.language:h,content:_?f:Z,textPartLanguage:R},await et(u,u.language.ui),await et(u,u.language.content)}else typeof u.language=="object"?(await et(u,u.language.ui),await et(u,u.language.content)):typeof u.language=="string"?await et(u,u.language):(u.language=a,await et(u,a))},se=u=>{const{configs:C,configsOverwrite:m}=globalThis.CKEditorConfig||{};let k;return m?k=C:(k=W.A,C&&Object.keys(C).map(h=>{W.A.hasOwnProperty(h)?(k[h].fields={...W.A[h].field,...C[h].field},k[h].styles=C[h].styles||W.A[h].styles,k[h].editorConfig={...W.A[h].editorConfig,...C[h].editorConfig}):k[h]=C[h]})),Ut()(k[u])},dt=(u,{responsiveDimensions:C},m)=>{const k=u.editorConfig?.plugins?[...u.editorConfig.plugins.map(a=>a.pluginName)]:[];k.includes("StrapiMediaLib")&&(u.editorConfig.strapiMediaLib={toggle:m}),k.includes("StrapiUploadAdapter")&&(u.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+A.j2.getToken()},backendUrl:strapi.backendURL,responsive:C}),k.includes("WordCount")&&(u.editorConfig.WordCountPlugin=!0)},Gt=u=>(0,A.l1)(`/${zt()}/config/${u}`,{method:"GET"}),oe=async(u,C)=>{const m=se(u),k=await Gt("upload");return dt(m,k,C),await ee(m.editorConfig),{currentConfig:m,uploadPluginConfig:k}},Jt=(0,mt.AH)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,fe=(0,mt.AH)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,ge=(0,mt.AH)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,Mt=(0,mt.AH)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,pe={common:Jt,light:fe,dark:ge,additional:Mt},me=()=>{const u=localStorage.getItem("STRAPI_THEME")||"light",{theme:C,themeOverwrite:m}=globalThis.CKEditorConfig||{},k=m?C:{...pe,...C};return(0,mt.DU)`
       ${k.common}
       ${k[u]}
       ${k.additional}
   `},It=({isOpen:u,onChange:C,onToggle:m,editor:k,uploadConfig:{responsiveDimensions:a}})=>{const{components:h}=(0,A.tF)(),f=h["media-library"],R=Z=>{let E="";Z.map(({name:Y,url:K,alt:kt,formats:nt,mime:X,width:ot,height:G})=>{if(X.includes("image"))if(nt&&a){let it="";Object.keys(nt).sort((l,g)=>nt[l].width-nt[g].width).map(l=>it+=(0,A.vX)(nt[l].url)+` ${nt[l].width}w,`),E+=`<img src="${K}" alt="${kt}" width="${ot}" height="${G}" srcset="${it}" />`}else E+=`<img src="${K}" alt="${kt}" width="${ot}" height="${G}" />`;else X.includes("application/pdf")?E=`<a href="${(0,A.vX)(K)}" download="${Y}">${Y||"Download PDF"}</a>`:X.includes("video")&&(E=`
            <video class="video" controls width="500px">
                <source src="${(0,A.vX)(K)}" type="${X}" />
            <video/>`)});const I=k.data.processor.toView(E),H=k.data.toModel(I);k.model.insertContent(H),m()},_=Z=>{const E=Z.map(I=>({name:I.name,alt:I.alternativeText||I.name,url:(0,A.vX)(I.url),mime:I.mime,formats:I.formats,width:I.width,height:I.height}));R(E)};return u?(0,q.jsx)(f,{onClose:m,onSelectAssets:_}):null};It.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},It.propTypes={isOpen:S().bool,onChange:S().func,onToggle:S().func};const ke=It;var Ze=j(84316);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var u={662:(a,h,f)=>{"use strict";f.d(h,{A:()=>Z});var R=f(935),_=f.n(R)()(function(E){return E[1]});_.push([a.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const Z=_},935:a=>{"use strict";a.exports=function(h){var f=[];return f.toString=function(){return this.map(function(R){var _=h(R);return R[2]?"@media ".concat(R[2]," {").concat(_,"}"):_}).join("")},f.i=function(R,_,Z){typeof R=="string"&&(R=[[null,R,""]]);var E={};if(Z)for(var I=0;I<this.length;I++){var H=this[I][0];H!=null&&(E[H]=!0)}for(var Y=0;Y<R.length;Y++){var K=[].concat(R[Y]);Z&&E[K[0]]||(_&&(K[2]?K[2]="".concat(_," and ").concat(K[2]):K[2]=_),f.push(K))}},f}},591:(a,h,f)=>{"use strict";var R,_=function(){return R===void 0&&(R=Boolean(window&&document&&document.all&&!window.atob)),R},Z=function(){var d={};return function(l){if(d[l]===void 0){var g=document.querySelector(l);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch{g=null}d[l]=g}return d[l]}}(),E=[];function I(d){for(var l=-1,g=0;g<E.length;g++)if(E[g].identifier===d){l=g;break}return l}function H(d,l){for(var g={},T=[],L=0;L<d.length;L++){var U=d[L],$=l.base?U[0]+l.base:U[0],ct=g[$]||0,xt="".concat($," ").concat(ct);g[$]=ct+1;var $t=I(xt),Bt={css:U[1],media:U[2],sourceMap:U[3]};$t!==-1?(E[$t].references++,E[$t].updater(Bt)):E.push({identifier:xt,updater:it(Bt,l),references:1}),T.push(xt)}return T}function Y(d){var l=document.createElement("style"),g=d.attributes||{};if(g.nonce===void 0){var T=f.nc;T&&(g.nonce=T)}if(Object.keys(g).forEach(function(U){l.setAttribute(U,g[U])}),typeof d.insert=="function")d.insert(l);else{var L=Z(d.insert||"head");if(!L)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");L.appendChild(l)}return l}var K,kt=(K=[],function(d,l){return K[d]=l,K.filter(Boolean).join(`
`)});function nt(d,l,g,T){var L=g?"":T.media?"@media ".concat(T.media," {").concat(T.css,"}"):T.css;if(d.styleSheet)d.styleSheet.cssText=kt(l,L);else{var U=document.createTextNode(L),$=d.childNodes;$[l]&&d.removeChild($[l]),$.length?d.insertBefore(U,$[l]):d.appendChild(U)}}function X(d,l,g){var T=g.css,L=g.media,U=g.sourceMap;if(L?d.setAttribute("media",L):d.removeAttribute("media"),U&&typeof btoa<"u"&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),d.styleSheet)d.styleSheet.cssText=T;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(T))}}var ot=null,G=0;function it(d,l){var g,T,L;if(l.singleton){var U=G++;g=ot||(ot=Y(l)),T=nt.bind(null,g,U,!1),L=nt.bind(null,g,U,!0)}else g=Y(l),T=X.bind(null,g,l),L=function(){(function($){if($.parentNode===null)return!1;$.parentNode.removeChild($)})(g)};return T(d),function($){if($){if($.css===d.css&&$.media===d.media&&$.sourceMap===d.sourceMap)return;T(d=$)}else L()}}a.exports=function(d,l){(l=l||{}).singleton||typeof l.singleton=="boolean"||(l.singleton=_());var g=H(d=d||[],l);return function(T){if(T=T||[],Object.prototype.toString.call(T)==="[object Array]"){for(var L=0;L<g.length;L++){var U=I(g[L]);E[U].references--}for(var $=H(T,l),ct=0;ct<g.length;ct++){var xt=I(g[ct]);E[xt].references===0&&(E[xt].updater(),E.splice(xt,1))}g=$}}}},782:(a,h,f)=>{a.exports=f(237)("./src/core.js")},783:(a,h,f)=>{a.exports=f(237)("./src/engine.js")},311:(a,h,f)=>{a.exports=f(237)("./src/ui.js")},584:(a,h,f)=>{a.exports=f(237)("./src/utils.js")},602:(a,h,f)=>{a.exports=f(237)("./src/watchdog.js")},237:a=>{"use strict";a.exports=CKEditor5.dll}},C={};function m(a){var h=C[a];if(h!==void 0)return h.exports;var f=C[a]={id:a,exports:{}};return u[a](f,f.exports,m),f.exports}m.n=a=>{var h=a&&a.__esModule?()=>a.default:()=>a;return m.d(h,{a:h}),h},m.d=(a,h)=>{for(var f in h)m.o(h,f)&&!m.o(a,f)&&Object.defineProperty(a,f,{enumerable:!0,get:h[f]})},m.o=(a,h)=>Object.prototype.hasOwnProperty.call(a,h),m.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},m.nc=void 0;var k={};(()=>{"use strict";m.r(k),m.d(k,{ClassicEditor:()=>Dt});var a=m(311),h=m(783),f=m(584);class R extends a.EditorUI{constructor(b,O){super(b),this.view=O,this._toolbarConfig=(0,a.normalizeToolbarConfig)(b.config.get("toolbar")),this._elementReplacer=new f.ElementReplacer,this.listenTo(b.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(b){const O=this.editor,V=this.view,z=O.editing.view,B=V.editable,jt=z.document.getRoot();B.name=jt.rootName,V.render();const de=B.element;this.setEditableElement(B.name,de),V.editable.bind("isFocused").to(this.focusTracker),z.attachDomRoot(de),b&&this._elementReplacer.replace(b,this.element),this._initPlaceholder(),this._initToolbar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const b=this.view,O=this.editor.editing.view;this._elementReplacer.restore(),O.detachDomRoot(b.editable.name),b.destroy()}_initToolbar(){const b=this.view;b.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),b.stickyPanel.limiterElement=b.element,b.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:O})=>O||0),b.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(b.toolbar)}_initPlaceholder(){const b=this.editor,O=b.editing.view,V=O.document.getRoot(),z=b.sourceElement;let B;const jt=b.config.get("placeholder");jt&&(B=typeof jt=="string"?jt:jt[this.view.editable.name]),!B&&z&&z.tagName.toLowerCase()==="textarea"&&(B=z.getAttribute("placeholder")),B&&(V.placeholder=B),(0,h.enablePlaceholder)({view:O,element:V,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(b,O,V){const z=this.view.stickyPanel;if(z.isSticky){const B=new f.Rect(z.element).height;O.viewportOffset.top+=B}else{const B=()=>{this.editor.editing.view.scrollToTheSelection(V)};this.listenTo(z,"change:isSticky",B),setTimeout(()=>{this.stopListening(z,"change:isSticky",B)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const b=this.view.stickyPanel,O=this.editor.plugins.get("Dialog");O.on("show",()=>{const V=O.view;V.on("moveTo",(z,B)=>{if(!b.isSticky||V.wasMoved)return;const jt=new f.Rect(b.contentPanelElement);B[1]<jt.bottom+a.DialogView.defaultOffset&&(B[1]=jt.bottom+a.DialogView.defaultOffset)},{priority:"high"})},{priority:"low"})}}var _=m(591),Z=m.n(_),E=m(662),I={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Z()(E.A,I),E.A.locals;class H extends a.BoxedEditorUIView{constructor(b,O,V={}){super(b),this.stickyPanel=new a.StickyPanelView(b),this.toolbar=new a.ToolbarView(b,{shouldGroupWhenFull:V.shouldToolbarGroupWhenFull}),this.editable=new a.InlineEditableUIView(b,O)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var Y=m(782),K=m(602);const kt=function(y){return y!=null&&typeof y=="object"},nt=typeof global=="object"&&global&&global.Object===Object&&global;var X=typeof self=="object"&&self&&self.Object===Object&&self;const ot=(nt||X||Function("return this")()).Symbol;var G=Object.prototype,it=G.hasOwnProperty,d=G.toString,l=ot?ot.toStringTag:void 0;const g=function(y){var b=it.call(y,l),O=y[l];try{y[l]=void 0;var V=!0}catch{}var z=d.call(y);return V&&(b?y[l]=O:delete y[l]),z};var T=Object.prototype.toString;const L=function(y){return T.call(y)};var U=ot?ot.toStringTag:void 0;const $=function(y){return y==null?y===void 0?"[object Undefined]":"[object Null]":U&&U in Object(y)?g(y):L(y)},ct=function(y,b){return function(O){return y(b(O))}}(Object.getPrototypeOf,Object);var xt=Function.prototype,$t=Object.prototype,Bt=xt.toString,Se=$t.hasOwnProperty,Pe=Bt.call(Object);const Te=function(y){if(!kt(y)||$(y)!="[object Object]")return!1;var b=ct(y);if(b===null)return!0;var O=Se.call(b,"constructor")&&b.constructor;return typeof O=="function"&&O instanceof O&&Bt.call(O)==Pe},Ae=function(y){return kt(y)&&y.nodeType===1&&!Te(y)};class Vt extends(0,Y.ElementApiMixin)(Y.Editor){constructor(b,O={}){if(!Ot(b)&&O.initialData!==void 0)throw new f.CKEditorError("editor-create-initial-data",null);super(O),this.config.get("initialData")===void 0&&this.config.set("initialData",function(B){return Ot(B)?(0,f.getDataFromElement)(B):B}(b)),Ot(b)&&(this.sourceElement=b),this.model.document.createRoot();const V=!this.config.get("toolbar.shouldNotGroupWhenFull"),z=new H(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:V});this.ui=new R(this,z),(0,Y.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(b,O={}){return new Promise(V=>{const z=new this(b,O);V(z.initPlugins().then(()=>z.ui.init(Ot(b)?b:null)).then(()=>z.data.init(z.config.get("initialData"))).then(()=>z.fire("ready")).then(()=>z))})}}Vt.Context=Y.Context,Vt.EditorWatchdog=K.EditorWatchdog,Vt.ContextWatchdog=K.ContextWatchdog;const Dt=Vt;function Ot(y){return Ae(y)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=k})();const ve=me(),ae=(0,mt.Ay)("div")`${({editorStyles:u})=>u}`,_t=({onChange:u,name:C,value:m,disabled:k,preset:a,maxLength:h})=>{const[f,R]=(0,yt.useState)(!1),[_,Z]=(0,yt.useState)(!1),[E,I]=(0,yt.useState)(null),[H,Y]=(0,yt.useState)(null),[K,kt]=(0,yt.useState)(!1),nt=(0,yt.useRef)(null),X=()=>Z(G=>!G),ot=G=>G>h?kt(!0):kt(!1);return(0,yt.useEffect)(()=>{(async()=>{const{currentConfig:G,uploadPluginConfig:it}=await oe(a,X);Y(G),I(it)})()},[]),(0,q.jsxs)(q.Fragment,{children:[H&&(0,q.jsx)(ve,{}),(0,q.jsxs)(ae,{editorStyles:H?.styles,children:[!H&&(0,q.jsx)(ye,{hasRadius:!0,background:"neutral100",children:(0,q.jsx)(D.a,{children:"Loading..."})}),H&&(0,q.jsx)(p.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:H?.editorConfig,disabled:k,data:m,onReady:G=>{if(H.editorConfig.WordCountPlugin){const it=G.plugins.get("WordCount");it.on("update",(l,g)=>ot(g.characters)),nt.current?.appendChild(it.wordCountContainer)}G.plugins.has("ImageUploadEditing")&&G.plugins.get("ImageUploadEditing").on("uploadComplete",(it,{data:d,imageElement:l})=>G.model.change(g=>g.setAttribute("alt",d.alt,l))),R(G)},onChange:(G,it)=>{const d=it.getData();u({target:{name:C,value:d}})}}),H&&H.editorConfig.WordCountPlugin&&(0,q.jsx)(Et,{color:K?"danger500":"neutral400",ref:nt,children:!f&&(0,q.jsx)(D.a,{small:!0,children:"Loading..."})}),E&&(0,q.jsx)(ke,{isOpen:_,onToggle:X,editor:f,uploadConfig:E})]})]})};_t.defaultProps={value:"",disabled:!1},_t.propTypes={onChange:S().func.isRequired,name:S().string.isRequired,value:S().string,disabled:S().bool};const Et=(0,mt.Ay)(tt.a)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,ye=(0,mt.Ay)(tt.a)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,we=_t;var _e=j(54894),xe=j(7153),je=j(8361),le=j(16918),Ce=j(10229),Ee=j(37133);const re=({name:u,attribute:C,onChange:m,value:k,intlLabel:a,labelAction:h,disabled:f,error:R,description:_,required:Z})=>{const{formatMessage:E}=(0,_e.A)(),{preset:I,maxLengthCharacters:H,...Y}=C.options;return(0,q.jsx)(xe.D,{name:u,id:u,error:R,hint:_&&E(_),children:(0,q.jsxs)(Ee.B,{spacing:1,children:[(0,q.jsx)(je.d,{action:h,required:Z,children:E(a)}),(0,q.jsx)(we,{disabled:f,name:u,onChange:m,value:k,preset:I,maxLength:H}),(0,q.jsx)(le.o,{}),(0,q.jsx)(Ce.b,{})]})})};re.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},re.propTypes={intlLabel:S().object.isRequired,onChange:S().func.isRequired,attribute:S().object.isRequired,name:S().string.isRequired,description:S().object,disabled:S().bool,error:S().string,labelAction:S().object,required:S().bool,value:S().string};const Oe=re},91120:(ft,pt,j)=>{ft=j.nmd(ft);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(q,yt){ft.exports=yt(j(21272))})(self,q=>(()=>{var yt={703:(p,D,tt)=>{"use strict";var A=tt(414);function J(){}function Ut(){}Ut.resetWarningCache=J,p.exports=function(){function W(et,ee,se,dt,Gt,oe){if(oe!==A){var Jt=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Jt.name="Invariant Violation",Jt}}function wt(){return W}W.isRequired=W;var zt={array:W,bigint:W,bool:W,func:W,number:W,object:W,string:W,symbol:W,any:W,arrayOf:wt,element:W,elementType:W,instanceOf:wt,node:W,objectOf:wt,oneOf:wt,oneOfType:wt,shape:wt,exact:wt,checkPropTypes:Ut,resetWarningCache:J};return zt.PropTypes=zt,zt}},697:(p,D,tt)=>{p.exports=tt(703)()},414:p=>{"use strict";p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:p=>{"use strict";p.exports=q}},ce={};function S(p){var D=ce[p];if(D!==void 0)return D.exports;var tt=ce[p]={exports:{}};return yt[p](tt,tt.exports,S),tt.exports}S.n=p=>{var D=p&&p.__esModule?()=>p.default:()=>p;return S.d(D,{a:D}),D},S.d=(p,D)=>{for(var tt in D)S.o(D,tt)&&!S.o(p,tt)&&Object.defineProperty(p,tt,{enumerable:!0,get:D[tt]})},S.o=(p,D)=>Object.prototype.hasOwnProperty.call(p,D),S.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var mt={};return(()=>{"use strict";S.r(mt),S.d(mt,{CKEditor:()=>Xt,CKEditorContext:()=>Ve,useMultiRootEditor:()=>Gr});var p=S(787),D=S.n(p),tt=S(697),A=S.n(tt);const J=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2));class Ut{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r="error"in o?o.error:o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const n of r)n.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o instanceof ErrorEvent?o.filename:void 0,lineno:o instanceof ErrorEvent?o.lineno:void 0,colno:o instanceof ErrorEvent?o.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function W(t,e=new Set){const o=[t],r=new Set;let n=0;for(;o.length>n;){const c=o[n++];if(!r.has(c)&&wt(c)&&!e.has(c))if(r.add(c),Symbol.iterator in c)try{for(const s of c)o.push(s)}catch{}else for(const s in c)s!=="defaultValue"&&o.push(c[s])}return r}function wt(t){const e=Object.prototype.toString.call(t),o=typeof t;return!(o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded||t instanceof EventTarget||t instanceof Event)}function zt(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const n=W(t,o),c=W(e,o);for(const s of n)if(c.has(s))return!0;return!1}const et=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},ee=typeof j.g=="object"&&j.g&&j.g.Object===Object&&j.g;var se=typeof self=="object"&&self&&self.Object===Object&&self;const dt=ee||se||Function("return this")(),Gt=function(){return dt.Date.now()};var oe=/\s/;const Jt=function(t){for(var e=t.length;e--&&oe.test(t.charAt(e)););return e};var fe=/^\s+/;const ge=function(t){return t&&t.slice(0,Jt(t)+1).replace(fe,"")},Mt=dt.Symbol;var be=Object.prototype,pe=be.hasOwnProperty,me=be.toString,It=Mt?Mt.toStringTag:void 0;const ke=function(t){var e=pe.call(t,It),o=t[It];try{t[It]=void 0;var r=!0}catch{}var n=me.call(t);return r&&(e?t[It]=o:delete t[It]),n};var Ze=Object.prototype.toString;const ve=function(t){return Ze.call(t)};var ae=Mt?Mt.toStringTag:void 0;const _t=function(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":ae&&ae in Object(t)?ke(t):ve(t)},Et=function(t){return t!=null&&typeof t=="object"},ye=function(t){return typeof t=="symbol"||Et(t)&&_t(t)=="[object Symbol]"};var we=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,je=parseInt;const le=function(t){if(typeof t=="number")return t;if(ye(t))return NaN;if(et(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=et(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=ge(t);var o=_e.test(t);return o||xe.test(t)?je(t.slice(2),o?2:8):we.test(t)?NaN:+t};var Ce=Math.max,Ee=Math.min;const re=function(t,e,o){var r,n,c,s,i,x,w=0,vt=!1,ut=!1,rt=!0;if(typeof t!="function")throw new TypeError("Expected a function");function Nt(at){var Ct=r,Wt=n;return r=n=void 0,w=at,s=t.apply(Wt,Ct)}function Kt(at){var Ct=at-x;return x===void 0||Ct>=e||Ct<0||ut&&at-w>=c}function St(){var at=Gt();if(Kt(at))return ht(at);i=setTimeout(St,function(Ct){var Wt=e-(Ct-x);return ut?Ee(Wt,c-(Ct-w)):Wt}(at))}function ht(at){return i=void 0,rt&&r?Nt(at):(r=n=void 0,s)}function gt(){var at=Gt(),Ct=Kt(at);if(r=arguments,n=this,x=at,Ct){if(i===void 0)return function(Wt){return w=Wt,i=setTimeout(St,e),vt?Nt(Wt):s}(x);if(ut)return clearTimeout(i),i=setTimeout(St,e),Nt(x)}return i===void 0&&(i=setTimeout(St,e)),s}return e=le(e)||0,et(o)&&(vt=!!o.leading,c=(ut="maxWait"in o)?Ce(le(o.maxWait)||0,e):c,rt="trailing"in o?!!o.trailing:rt),gt.cancel=function(){i!==void 0&&clearTimeout(i),w=0,r=x=n=i=void 0},gt.flush=function(){return i===void 0?s:ht(Gt())},gt},Oe=function(t,e,o){var r=!0,n=!0;if(typeof t!="function")throw new TypeError("Expected a function");return et(o)&&(r="leading"in o?!!o.leading:r,n="trailing"in o?!!o.trailing:n),re(t,e,{leading:r,maxWait:e,trailing:n})},u=function(t,e){return function(o){return t(e(o))}},C=u(Object.getPrototypeOf,Object);var m=Function.prototype,k=Object.prototype,a=m.toString,h=k.hasOwnProperty,f=a.call(Object);const R=function(t){if(!Et(t)||_t(t)!="[object Object]")return!1;var e=C(t);if(e===null)return!0;var o=h.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&a.call(o)==f},_=function(t){return Et(t)&&t.nodeType===1&&!R(t)},Z=function(){this.__data__=[],this.size=0},E=function(t,e){return t===e||t!=t&&e!=e},I=function(t,e){for(var o=t.length;o--;)if(E(t[o][0],e))return o;return-1};var H=Array.prototype.splice;const Y=function(t){var e=this.__data__,o=I(e,t);return!(o<0)&&(o==e.length-1?e.pop():H.call(e,o,1),--this.size,!0)},K=function(t){var e=this.__data__,o=I(e,t);return o<0?void 0:e[o][1]},kt=function(t){return I(this.__data__,t)>-1},nt=function(t,e){var o=this.__data__,r=I(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function X(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}X.prototype.clear=Z,X.prototype.delete=Y,X.prototype.get=K,X.prototype.has=kt,X.prototype.set=nt;const ot=X,G=function(){this.__data__=new ot,this.size=0},it=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},d=function(t){return this.__data__.get(t)},l=function(t){return this.__data__.has(t)},g=function(t){if(!et(t))return!1;var e=_t(t);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},T=dt["__core-js_shared__"];var L=function(){var t=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const U=function(t){return!!L&&L in t};var $=Function.prototype.toString;const ct=function(t){if(t!=null){try{return $.call(t)}catch{}try{return t+""}catch{}}return""};var xt=/^\[object .+?Constructor\]$/,$t=Function.prototype,Bt=Object.prototype,Se=$t.toString,Pe=Bt.hasOwnProperty,Te=RegExp("^"+Se.call(Pe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Ae=function(t){return!(!et(t)||U(t))&&(g(t)?Te:xt).test(ct(t))},Vt=function(t,e){return t?.[e]},Dt=function(t,e){var o=Vt(t,e);return Ae(o)?o:void 0},Ot=Dt(dt,"Map"),y=Dt(Object,"create"),b=function(){this.__data__=y?y(null):{},this.size=0},O=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var V=Object.prototype.hasOwnProperty;const z=function(t){var e=this.__data__;if(y){var o=e[t];return o==="__lodash_hash_undefined__"?void 0:o}return V.call(e,t)?e[t]:void 0};var B=Object.prototype.hasOwnProperty;const jt=function(t){var e=this.__data__;return y?e[t]!==void 0:B.call(e,t)},de=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=y&&e===void 0?"__lodash_hash_undefined__":e,this};function Qt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=b,Qt.prototype.delete=O,Qt.prototype.get=z,Qt.prototype.has=jt,Qt.prototype.set=de;const Ye=Qt,Mo=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ot||ot),string:new Ye}},Fo=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},ue=function(t,e){var o=t.__data__;return Fo(e)?o[typeof e=="string"?"string":"hash"]:o.map},Uo=function(t){var e=ue(this,t).delete(t);return this.size-=e?1:0,e},$o=function(t){return ue(this,t).get(t)},Bo=function(t){return ue(this,t).has(t)},Ho=function(t,e){var o=ue(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function qt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Mo,qt.prototype.delete=Uo,qt.prototype.get=$o,qt.prototype.has=Bo,qt.prototype.set=Ho;const Ko=qt,Go=function(t,e){var o=this.__data__;if(o instanceof ot){var r=o.__data__;if(!Ot||r.length<199)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new Ko(r)}return o.set(t,e),this.size=o.size,this};function Zt(t){var e=this.__data__=new ot(t);this.size=e.size}Zt.prototype.clear=G,Zt.prototype.delete=it,Zt.prototype.get=d,Zt.prototype.has=l,Zt.prototype.set=Go;const Jo=Zt,Vo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},Xe=function(){try{var t=Dt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),to=function(t,e,o){e=="__proto__"&&Xe?Xe(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Qo=Object.prototype.hasOwnProperty;const eo=function(t,e,o){var r=t[e];Qo.call(t,e)&&E(r,o)&&(o!==void 0||e in t)||to(t,e,o)},he=function(t,e,o,r){var n=!o;o||(o={});for(var c=-1,s=e.length;++c<s;){var i=e[c],x=r?r(o[i],t[i],i,o,t):void 0;x===void 0&&(x=t[i]),n?to(o,i,x):eo(o,i,x)}return o},qo=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r},oo=function(t){return Et(t)&&_t(t)=="[object Arguments]"};var ro=Object.prototype,Zo=ro.hasOwnProperty,Yo=ro.propertyIsEnumerable;const Xo=oo(function(){return arguments}())?oo:function(t){return Et(t)&&Zo.call(t,"callee")&&!Yo.call(t,"callee")},Re=Array.isArray,tr=function(){return!1};var no=pt&&!pt.nodeType&&pt,io=no&&!0&&ft&&!ft.nodeType&&ft,co=io&&io.exports===no?dt.Buffer:void 0;const so=(co?co.isBuffer:void 0)||tr;var er=/^(?:0|[1-9]\d*)$/;const or=function(t,e){var o=typeof t;return!!(e=e??9007199254740991)&&(o=="number"||o!="symbol"&&er.test(t))&&t>-1&&t%1==0&&t<e},ao=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=9007199254740991};var M={};M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M["[object Arguments]"]=M["[object Array]"]=M["[object ArrayBuffer]"]=M["[object Boolean]"]=M["[object DataView]"]=M["[object Date]"]=M["[object Error]"]=M["[object Function]"]=M["[object Map]"]=M["[object Number]"]=M["[object Object]"]=M["[object RegExp]"]=M["[object Set]"]=M["[object String]"]=M["[object WeakMap]"]=!1;const rr=function(t){return Et(t)&&ao(t.length)&&!!M[_t(t)]},Ie=function(t){return function(e){return t(e)}};var lo=pt&&!pt.nodeType&&pt,ne=lo&&!0&&ft&&!ft.nodeType&&ft,De=ne&&ne.exports===lo&&ee.process;const Yt=function(){try{var t=ne&&ne.require&&ne.require("util").types;return t||De&&De.binding&&De.binding("util")}catch{}}();var uo=Yt&&Yt.isTypedArray;const nr=uo?Ie(uo):rr;var ir=Object.prototype.hasOwnProperty;const ho=function(t,e){var o=Re(t),r=!o&&Xo(t),n=!o&&!r&&so(t),c=!o&&!r&&!n&&nr(t),s=o||r||n||c,i=s?qo(t.length,String):[],x=i.length;for(var w in t)!e&&!ir.call(t,w)||s&&(w=="length"||n&&(w=="offset"||w=="parent")||c&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||or(w,x))||i.push(w);return i};var cr=Object.prototype;const Ne=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||cr)},sr=u(Object.keys,Object);var ar=Object.prototype.hasOwnProperty;const lr=function(t){if(!Ne(t))return sr(t);var e=[];for(var o in Object(t))ar.call(t,o)&&o!="constructor"&&e.push(o);return e},fo=function(t){return t!=null&&ao(t.length)&&!g(t)},We=function(t){return fo(t)?ho(t):lr(t)},dr=function(t,e){return t&&he(e,We(e),t)},ur=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var hr=Object.prototype.hasOwnProperty;const fr=function(t){if(!et(t))return ur(t);var e=Ne(t),o=[];for(var r in t)(r!="constructor"||!e&&hr.call(t,r))&&o.push(r);return o},Le=function(t){return fo(t)?ho(t,!0):fr(t)},gr=function(t,e){return t&&he(e,Le(e),t)};var go=pt&&!pt.nodeType&&pt,bo=go&&!0&&ft&&!ft.nodeType&&ft,po=bo&&bo.exports===go?dt.Buffer:void 0,mo=po?po.allocUnsafe:void 0;const br=function(t,e){if(e)return t.slice();var o=t.length,r=mo?mo(o):new t.constructor(o);return t.copy(r),r},pr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},mr=function(t,e){for(var o=-1,r=t==null?0:t.length,n=0,c=[];++o<r;){var s=t[o];e(s,o,t)&&(c[n++]=s)}return c},ko=function(){return[]};var kr=Object.prototype.propertyIsEnumerable,vo=Object.getOwnPropertySymbols;const ze=vo?function(t){return t==null?[]:(t=Object(t),mr(vo(t),function(e){return kr.call(t,e)}))}:ko,vr=function(t,e){return he(t,ze(t),e)},yo=function(t,e){for(var o=-1,r=e.length,n=t.length;++o<r;)t[n+o]=e[o];return t},wo=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)yo(e,ze(t)),t=C(t);return e}:ko,yr=function(t,e){return he(t,wo(t),e)},_o=function(t,e,o){var r=e(t);return Re(t)?r:yo(r,o(t))},wr=function(t){return _o(t,We,ze)},_r=function(t){return _o(t,Le,wo)},Me=Dt(dt,"DataView"),Fe=Dt(dt,"Promise"),Ue=Dt(dt,"Set"),$e=Dt(dt,"WeakMap");var xo="[object Map]",jo="[object Promise]",Co="[object Set]",Eo="[object WeakMap]",Oo="[object DataView]",xr=ct(Me),jr=ct(Ot),Cr=ct(Fe),Er=ct(Ue),Or=ct($e),Ht=_t;(Me&&Ht(new Me(new ArrayBuffer(1)))!=Oo||Ot&&Ht(new Ot)!=xo||Fe&&Ht(Fe.resolve())!=jo||Ue&&Ht(new Ue)!=Co||$e&&Ht(new $e)!=Eo)&&(Ht=function(t){var e=_t(t),o=e=="[object Object]"?t.constructor:void 0,r=o?ct(o):"";if(r)switch(r){case xr:return Oo;case jr:return xo;case Cr:return jo;case Er:return Co;case Or:return Eo}return e});const Be=Ht;var Sr=Object.prototype.hasOwnProperty;const Pr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&Sr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},So=dt.Uint8Array,He=function(t){var e=new t.constructor(t.byteLength);return new So(e).set(new So(t)),e},Tr=function(t,e){var o=e?He(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var Ar=/\w*$/;const Rr=function(t){var e=new t.constructor(t.source,Ar.exec(t));return e.lastIndex=t.lastIndex,e};var Po=Mt?Mt.prototype:void 0,To=Po?Po.valueOf:void 0;const Ir=function(t){return To?Object(To.call(t)):{}},Dr=function(t,e){var o=e?He(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)},Nr=function(t,e,o){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return He(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return Tr(t,o);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Dr(t,o);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return Rr(t);case"[object Symbol]":return Ir(t)}};var Ao=Object.create;const Wr=function(){function t(){}return function(e){if(!et(e))return{};if(Ao)return Ao(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Lr=function(t){return typeof t.constructor!="function"||Ne(t)?{}:Wr(C(t))},zr=function(t){return Et(t)&&Be(t)=="[object Map]"};var Ro=Yt&&Yt.isMap;const Mr=Ro?Ie(Ro):zr,Fr=function(t){return Et(t)&&Be(t)=="[object Set]"};var Io=Yt&&Yt.isSet;const Ur=Io?Ie(Io):Fr;var Do="[object Arguments]",No="[object Function]",Wo="[object Object]",N={};N[Do]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object DataView]"]=N["[object Boolean]"]=N["[object Date]"]=N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Map]"]=N["[object Number]"]=N[Wo]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object Symbol]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Error]"]=N[No]=N["[object WeakMap]"]=!1;const $r=function t(e,o,r,n,c,s){var i,x=1&o,w=2&o,vt=4&o;if(r&&(i=c?r(e,n,c,s):r(e)),i!==void 0)return i;if(!et(e))return e;var ut=Re(e);if(ut){if(i=Pr(e),!x)return pr(e,i)}else{var rt=Be(e),Nt=rt==No||rt=="[object GeneratorFunction]";if(so(e))return br(e,x);if(rt==Wo||rt==Do||Nt&&!c){if(i=w||Nt?{}:Lr(e),!x)return w?yr(e,gr(i,e)):vr(e,dr(i,e))}else{if(!N[rt])return c?e:{};i=Nr(e,rt,x)}}s||(s=new Jo);var Kt=s.get(e);if(Kt)return Kt;s.set(e,i),Ur(e)?e.forEach(function(ht){i.add(t(ht,o,r,ht,e,s))}):Mr(e)&&e.forEach(function(ht,gt){i.set(gt,t(ht,o,r,gt,e,s))});var St=ut?void 0:(vt?w?_r:wr:w?Le:We)(e);return Vo(St||e,function(ht,gt){St&&(ht=e[gt=ht]),eo(i,gt,t(ht,o,r,gt,e,s))}),i},Br=function(t,e){return $r(t,5,e=typeof e=="function"?e:void 0)};class Ke extends Ut{constructor(e,o={}){super(o),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Oe(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),e&&(this._creator=(r,n)=>e.create(r,n)),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},o=[],r=this._config.rootsAttributes||{},n={};for(const[s,i]of Object.entries(this._data.roots))i.isLoaded?(e[s]="",n[s]=r[s]||{}):o.push(s);const c={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:o,rootsAttributes:n,_watchdogInitialData:this._data};return delete c.initialData,c.extraPlugins.push(Hr),this._initUsingData?this.create(e,c,c.context):_(this._elementOrData)?this.create(this._elementOrData,c,c.context):this.create(this._editables,c,c.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(n=>{this._editor=n,n.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=n.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,o=e.model.document.roots.filter(i=>i.isAttached()&&i.rootName!="$graveyard"),{plugins:r}=e,n=r.has("CommentsRepository")&&r.get("CommentsRepository"),c=r.has("TrackChanges")&&r.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};o.forEach(i=>{s.roots[i.rootName]={content:JSON.stringify(Array.from(i.getChildren())),attributes:JSON.stringify(Array.from(i.getAttributes())),isLoaded:i._isLoaded}});for(const i of e.model.markers)i._affectsData&&(s.markers[i.name]={rangeJSON:i.getRange().toJSON(),usingOperation:i._managedUsingOperations,affectsData:i._affectsData});return n&&(s.commentThreads=JSON.stringify(n.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),c&&(s.suggestions=JSON.stringify(c.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const e={};for(const o of this.editor.model.document.getRootNames()){const r=this.editor.ui.getEditableElement(o);r&&(e[o]=r)}return e}_isErrorComingFromThisItem(e){return zt(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Br(e,(o,r)=>_(o)||r==="context"?o:void 0)}}class Hr{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},o=>{this._restoreCollaborationData(),this._restoreEditorData(o)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,o){if("name"in o){const r=e.createElement(o.name,o.attributes);if(o.children)for(const n of o.children)r._appendChild(this._createNode(e,n));return r}return e.createText(o.data,o.attributes)}_restoreEditorData(e){const o=this.editor;Object.entries(this._data.roots).forEach(([r,{content:n,attributes:c}])=>{const s=JSON.parse(n),i=JSON.parse(c),x=o.model.document.getRoot(r);for(const[w,vt]of i)e.setAttribute(w,vt,x);for(const w of s){const vt=this._createNode(e,w);e.insert(vt,x,"end")}}),Object.entries(this._data.markers).forEach(([r,n])=>{const{document:c}=o.model,{rangeJSON:{start:s,end:i},...x}=n,w=c.getRoot(s.root),vt=e.createPositionFromPath(w,s.path,s.stickiness),ut=e.createPositionFromPath(w,i.path,i.stickiness),rt=e.createRange(vt,ut);e.addMarker(r,{range:rt,...x})})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),o=JSON.parse(this._data.suggestions);e.forEach(r=>{const n=this.editor.config.get("collaboration.channelId"),c=this.editor.plugins.get("CommentsRepository");c.hasCommentThread(r.threadId)&&c.getCommentThread(r.threadId).remove(),c.addCommentThread({channelId:n,...r})}),o.forEach(r=>{const n=this.editor.plugins.get("TrackChangesEditing");n.hasSuggestion(r.id)?n.getSuggestion(r.id).attributes=r.attributes:n.addSuggestionData(r)})}}const ie=Symbol("MainQueueId");class Ge extends Ut{constructor(e,o={}){super(o),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Kr,this._watchdogConfig=o,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(ie,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=Lo(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return n=new Ke(null,this._watchdogConfig),n.setCreator(r.creator),n._setExcludedProperties(this._contextProps),r.destructor&&n.setDestructor(r.destructor),this._watchdogs.set(r.id,n),n.on("error",(c,{error:s,causesRestart:i})=>{this._fire("itemError",{itemId:r.id,error:s}),i&&this._actionQueues.enqueue(r.id,()=>new Promise(x=>{const w=()=>{n.off("restart",w),this._fire("itemRestart",{itemId:r.id}),x()};n.on("restart",w)}))}),n.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=Lo(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const n=this._getWatchdog(r);return this._watchdogs.delete(r),n.destroy()})))}destroy(){return this._actionQueues.enqueue(ie,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ie,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=W(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return zt(this._context,e.context)}}class Kr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===ie;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const n=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(ie),this._queues.get(e)])).then(o),c=n.catch(()=>{});return this._queues.set(e,c),n.finally(()=>{this._activeActions--,this._queues.get(e)===c&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function Lo(t){return Array.isArray(t)?t:[t]}const Je=D().createContext("contextWatchdog");class Ve extends D().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(e){return this._shouldComponentUpdate(e)}async _shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return D().createElement(Je.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new Ge(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Ve.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},Ve.propTypes={id:A().string,isLayoutReady:A().bool,context:A().func,watchdogConfig:A().object,config:A().object,onReady:A().func,onError:A().func};const Qe="Lock from React integration (@ckeditor/ckeditor5-react)";class Xt extends D().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=D().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||e.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(e)&&this.editor.data.set(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(Qe):this.editor.disableReadOnlyMode(Qe)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return D().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Ge?this.watchdog=new zo(this.context):this.watchdog=new Xt._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{(this.props.onError||console.error)(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>{(this.props.onError||console.error)(e,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(Qe);const n=r.model.document,c=r.editing.view.document;return n.on("change:data",s=>{this.props.onChange&&this.props.onChange(s,r)}),c.on("focus",s=>{this.props.onFocus&&this.props.onFocus(s,r)}),c.on("blur",s=>{this.props.onBlur&&this.props.onBlur(s,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,e()):this.instance?(await this.instance.destroy(),this.instance=null,e()):void e())})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.data.get()!==e.data}_getConfig(){const e=this.props.config||{};return this.props.data&&e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...e,initialData:e.initialData||this.props.data||""}}}Xt.contextType=Je,Xt.propTypes={editor:A().func.isRequired,data:A().string,config:A().object,disableWatchdog:A().bool,watchdogConfig:A().object,onChange:A().func,onReady:A().func,onFocus:A().func,onBlur:A().func,onError:A().func,disabled:A().bool,id:A().any},Xt._EditorWatchdog=Ke;class zo{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,c=4294967296*Math.random()>>>0;return"e"+J[o>>0&255]+J[o>>8&255]+J[o>>16&255]+J[o>>24&255]+J[r>>0&255]+J[r>>8&255]+J[r>>16&255]+J[r>>24&255]+J[n>>0&255]+J[n>>8&255]+J[n>>16&255]+J[n>>24&255]+J[c>>0&255]+J[c>>8&255]+J[c>>16&255]+J[c>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:n,error:c})=>{n===this._id&&o(null,{error:c,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const qe="Lock from React integration (@ckeditor/ckeditor5-react)",Gr=t=>{let e=null;const o=(0,p.useRef)(null),r=(0,p.useContext)(Je),[n,c]=(0,p.useState)(null),[s,i]=(0,p.useState)(t.data),[x,w]=(0,p.useState)(t.rootsAttributes||{}),[vt,ut]=(0,p.useState)([]),rt=(0,p.useRef)(!0),Nt=(0,p.useRef)(null),Kt=D().createElement("div",{ref:Nt});(0,p.useEffect)(()=>((async()=>(await o.current,t.isLayoutReady!==!1&&Ct()))(),()=>{at().then(()=>{o.current=null})}),[t.isLayoutReady]),(0,p.useEffect)(()=>{n&&(t.disabled?n.enableReadOnlyMode(qe):n.disableReadOnlyMode(qe))},[t.disabled]),(0,p.useEffect)(()=>{const v=Nt.current;if(n&&!o.current){const F=n.getFullData();i({...F}),w({...n.getRootsAttributes()}),ut([...Object.keys(F).map(P=>ht(n,P))]),v&&v.appendChild(n.ui.view.toolbar.element)}return()=>{v&&v.firstChild&&v.removeChild(v.firstChild)}},[n&&n.id]);const St=()=>{const v=t.config||{};return t.data&&v.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...v,rootsAttributes:x}},ht=(v,F)=>D().createElement("div",{id:F,key:F,ref:P=>{if(P){const Pt=v.ui.view.createEditable(F,P);v.ui.addEditable(Pt),v.editing.view.forceRender()}}}),gt=(v,F)=>t.editor.create(v,F).then(P=>{t.disabled&&t.disabled&&P.enableReadOnlyMode(qe);const Pt=P.model.document,Ft=P.editing.view.document;return Pt.on("change:data",Lt=>((Tt,At)=>{const lt=Tt.model.document,Rt={},bt={};lt.differ.getChanges().forEach(Q=>{let st;if(st=Q.type=="insert"||Q.type=="remove"?Q.position.root:Q.range.root,!st.isAttached())return;const{rootName:te}=st;Rt[te]=Tt.getData({rootName:te})}),lt.differ.getChangedRoots().forEach(Q=>{if(Q.state)return void(Rt[Q.name]!==void 0&&delete Rt[Q.name]);const st=Q.name;bt[st]=Tt.getRootAttributes(st)}),Object.keys(Rt).length&&i(Q=>({...Q,...Rt})),Object.keys(bt).length&&w(Q=>({...Q,...bt})),t.onChange&&t.onChange(At,Tt)})(P,Lt)),P.on("addRoot",(Lt,Tt)=>((At,lt,Rt)=>{const bt=Rt.rootName,Q=ht(At,bt);i(st=>({...st,[bt]:At.getData({rootName:bt})})),w(st=>({...st,[bt]:At.getRootAttributes(bt)})),ut(st=>[...st,Q])})(P,0,Tt)),P.on("detachRoot",(Lt,Tt)=>((At,lt,Rt)=>{const bt=Rt.rootName;ut(Q=>Q.filter(st=>st.props.id!==bt)),i(Q=>{const{[bt]:st,...te}=Q;return{...te}}),w(Q=>{const{[bt]:st,...te}=Q;return{...te}}),At.detachEditable(Rt)})(P,0,Tt)),Ft.on("focus",Lt=>{t.onFocus&&t.onFocus(Lt,P)}),Ft.on("blur",Lt=>{t.onBlur&&t.onBlur(Lt,P)}),c(P),t.onReady&&t.onReady(P),P}),at=async()=>{c(null),i({}),w({}),ut([]),o.current=new Promise(v=>{setTimeout(async()=>e?(await e.destroy(),e=null,v()):n?(await n.destroy(),v()):void v())})},Ct=async()=>{t.disableWatchdog?await gt(t.data,St()):e||(e=r instanceof Ge?new zo(r):new Ke(t.editor,t.watchdogConfig),e.setCreator((v,F)=>gt(v,F)),e.on("error",(v,{error:F,causesRestart:P})=>{(t.onError||console.error)(F,{phase:"runtime",willEditorRestart:P})}),await e.create(s,St()).catch(v=>{(t.onError||console.error)(v,{phase:"initialization",willEditorRestart:!1})}))};(0,p.useEffect)(()=>{if(n&&rt.current){rt.current=!1;const v=Object.keys(s),F=Object.keys(x);if(!v.every(lt=>F.includes(lt)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const P=n.getFullData(),Pt=n.getRootsAttributes(),{addedKeys:Ft,removedKeys:Lt}=Wt(P,s||{}),Tt=v.some(lt=>P[lt]!==void 0&&JSON.stringify(P[lt])!==JSON.stringify(s[lt])),At=F.filter(lt=>JSON.stringify(Pt[lt])!==JSON.stringify(x[lt]));n.model.change(lt=>{Jr(Ft),Vr(Lt),Tt&&Qr(),At.length&&qr(lt,At)})}},[s,x]);const Wt=(v,F)=>{const P=Object.keys(v),Pt=Object.keys(F);return{addedKeys:Pt.filter(Ft=>!P.includes(Ft)),removedKeys:P.filter(Ft=>!Pt.includes(Ft))}},Jr=v=>{v.forEach(F=>{n.addRoot(F,{data:s[F]||"",attributes:x?.[F]||{},isUndoable:!0})})},Vr=v=>{v.forEach(F=>{n.detachRoot(F,!0)})},Qr=()=>{n.data.set(s,{suppressErrorInCollaboration:!0})},qr=(v,F)=>{F.forEach(P=>{Object.keys(x[P]).forEach(Pt=>{n.registerRootAttribute(Pt)}),v.clearAttributes(n.model.document.getRoot(P)),v.setAttributes(x[P],n.model.document.getRoot(P))})},Zr=(0,p.useCallback)(v=>{rt.current=!0,i(v)},[i]),Yr=(0,p.useCallback)(v=>{rt.current=!0,w(v)},[w]);return{editor:n,editableElements:vt,toolbarElement:Kt,data:s,setData:Zr,attributes:x,setAttributes:Yr}}})(),mt})())}}]);
