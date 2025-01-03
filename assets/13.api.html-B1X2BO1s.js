import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,a as n,e as o,o as l,r as p}from"./app-DxIX-K7X.js";const s="/img/api/00-add.png",m={};function c(d,e){const i=p("Mermaid");return l(),r("div",null,[e[0]||(e[0]=t("h2",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言"},[t("span",null,"前言")])],-1)),e[1]||(e[1]=t("p",null,"大概的流程就是下面流程图这样的一个流程，大佬不用看都懂，这个是给小白看的，拉到下面我们说一下怎么个流程吧",-1)),n(i,{id:"mermaid-8",code:"eJx9le9P2kAYx9/7V5As2TuCLYhKosmSLcuSJTP78erii9JesbHA0lb3xhfTxIg/UBenTmFTNmbYi8EWt8FWKv9M7wr/xe56FGkpJtDc3fe5D0+f53tHNBqdMBRDhakI2jCdozJqH+Cjom2VHyw8wcdnTm0X/14nT1S6maDBspp/Iy4JmhF5+nwiEhFVQdcfQpkNuIisqGoqrwm5DBxReabem5QnR7S4pyXlES3R16QZqgnAtjrO+xo+2cKVL4tkJQ26+010cIIKTXzywzarzvaeu84Bu1W02+djZB6M1UTAiuCUWmjzWnituIscwOXtkVAe4NPL4KrEgYVnL166Qx48fsRGcbDwio24VCrFShaNzkMOGPllmGO5LA5LMgfIr8eEFWMppuYzSu5WdTF0N99/f1IR2/yDCqfdSs0P4V2IrMdURTdCCHFAkkfmvz6h+te/Pe5tzy5LihayPwF6W0X0zkKHRYaIOaU6so79mISH0WBOyMIQzhRAhcveWfUOyNQtJJtfDUDi3ixOaUlACoGKx3Zrx25fMuYgnkbISQ8m57UslfraIKHpfmnt1m7XsuxOBa83/PlMe4gMDFSW92Y8Jc0A59p0zItu/cax6oNIqskzrMdSVsnFdGgYSi7j7xTv8ihmFnR/XeFCM9BlFzM7hFnRoTaOwU0C9P0D2qiFQYg4lIxBjnIGhoCYbTmADhvkLDJcwLh95/pApPFpNazzHA+cq/VxKOZfP0pS9HEsz86hLGZmP0vUoGAEUKxUCYAvvnYbn/HeFqqfM2DABqxszNx+7LAlhso/5TG335L7pPftJ9qp9TaLxBa4VsEfO6FtYb5nfElTVkPby14/6Z2ioZwDRWDG92UrkTbDQBEEEpymX5qDSO9MOqFKmnLWUOkT2jed8i67jNcEeh/Ozc3NizRGpJtoXiLdnnZvUPIXMi9xkfukFvRBTxr9/AdufKsb"}),e[2]||(e[2]=o('<blockquote><ul><li>POST token获取 /api/auth/login</li><li>POST 获取文件列表 /api/fs/list</li><li>POST 新建文件夹 /api/fs/mkdir</li><li>POST 重命名文件/目录 /api/fs/rename</li><li>POST 删除文件/目录 /api/fs/remove</li><li>PUT 表单上传文件 /api/fs/form</li><li>POST 获取下载信息 /api/fs/get</li><li>GET 系统设置 /api/admin/setting/list</li><li>GET 账户列表 /api/admin/user/list</li><li>GET 存储列表 /api/admin/storage/list</li><li>POST 启用存储 /api/admin/storage/enable</li><li>POST 禁用存储 /api/admin/storage/disable</li><li>POST 新建存储 /api/admin/storage/create</li><li>GET 查询指定存储信息 /api/admin/storage/get</li><li>GET 查询所有驱动配置模板列表 /api/admin/driver/list</li><li>POST 删除指定存储 /api/admin/storage/delete</li></ul></blockquote><p>上述API来自：<strong><a href="https://github.com/AlistGo/alist/discussions/2501" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/discussions/2501</a></strong> | <a href="https://github.com/Kuingsmile" target="_blank" rel="noopener noreferrer">@Kuingsmile</a>大佬整理发布</p><ul><li>已发布完整API文档 👉 <a href="https://alist.nn.ci/zh/guide/api/" target="_blank" rel="noopener noreferrer">查看完整API文档</a></li></ul><p>在教程之前先说一下怎么都是 /api/xxx/xxx ？这怎么使用？</p><ul><li><p>前面是通用链接，这个链接就是我们自己的AList网站链接，可以是域名可以是IP，可以是http也可以是HTTPS，也能带端口号</p><ul><li>或者使用<code>postman</code>配置一个通用的，很方便，但是需要登录才可以</li><li>配置如下图所示，改好名称，填写一个自己方便的名字，后面写API通用域名或者IP</li><li><img src="'+s+'" style="zoom:50%;"></li></ul></li><li><p>例如我本地的就是：http://192.168.31.103:5244，到时候我们直接请求<code>http://192.168.31.103:5244/api/auth/login</code> 然后填写相关参数就能请求到</p></li></ul><p>我这里使用的请求软件是<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">postman</a>，因为老早之前apifox还没出的时候就在用postman了...</p><ul><li>或者使用<a href="https://apifox.com/" target="_blank" rel="noopener noreferrer">Apifox</a></li></ul><br><div style="text-align:center;"><p><span style="font-size:50px;color:red;font-family:&#39;树颜&#39;;"><del>敬请期待</del> 就这样了</span></p></div>',9))])}const u=a(m,[["render",c],["__file","13.api.html.vue"]]),g=JSON.parse('{"path":"/index/13.api.html","title":"傻瓜式操作AList API教程","lang":"zh-CN","frontmatter":{"title":"傻瓜式操作AList API教程","icon":"fa-solid fa-rocket-launch","order":15,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList","Windows","Linux","API","教程","安装"],"sticky":true,"star":true,"headerDepth":6,"description":"前言 大概的流程就是下面流程图这样的一个流程，大佬不用看都懂，这个是给小白看的，拉到下面我们说一下怎么个流程吧 POST token获取 /api/auth/login POST 获取文件列表 /api/fs/list POST 新建文件夹 /api/fs/mkdir POST 重命名文件/目录 /api/fs/rename POST 删除文件/目录 ...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://anwen-anyi/anwen-anyi.github.io/index/13.api.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"傻瓜式操作AList API教程"}],["meta",{"property":"og:description","content":"前言 大概的流程就是下面流程图这样的一个流程，大佬不用看都懂，这个是给小白看的，拉到下面我们说一下怎么个流程吧 POST token获取 /api/auth/login POST 获取文件列表 /api/fs/list POST 新建文件夹 /api/fs/mkdir POST 重命名文件/目录 /api/fs/rename POST 删除文件/目录 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"AList"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"API"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:tag","content":"安装"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"傻瓜式操作AList API教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]}],"readingTime":{"minutes":3.01,"words":903},"filePathRelative":"index/13.api.md","localizedDate":"2023年1月1日","autoDesc":true,"excerpt":"<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->\\n"}');export{u as comp,g as data};