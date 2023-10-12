import{_ as a,o as d,c as r,a as n,d as e,e as i,b as l,r as c}from"./app.5bd229a3.js";const t={},v=i(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><ul><li>Linux \u662F\u4E00\u79CD\u81EA\u7531\u548C\u5F00\u653E\u6E90\u7801\u7684\u7C7B UNIX \u64CD\u4F5C\u7CFB\u7EDF\u3002</li><li>Linux \u82F1\u6587\u89E3\u91CA\u4E3A Linux is not Unix\u3002</li><li>Linux \u662F\u5728 1991 \u7531\u6797\u7EB3\u65AF\xB7\u6258\u74E6\u5179\u5728\u8D6B\u5C14\u8F9B\u57FA\u5927\u5B66\u4E0A\u5B66\u65F6\u521B\u7ACB\u7684\uFF0C\u4E3B\u8981\u53D7\u5230 Minix \u548C Unix \u601D\u60F3\u7684\u542F\u53D1\u3002</li><li>Linux\u7EE7\u627F\u4E86Unix\u4EE5\u7F51\u7EDC\u4E3A\u6838\u5FC3\u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u662F\u4E00\u4E2A\u6027\u80FD\u7A33\u5B9A\u7684\u591A\u7528\u6237\u7F51\u7EDC\u64CD\u4F5C\u7CFB\u7EDF\u3002</li></ul><h2 id="linux\u5B89\u88C5vim" tabindex="-1"><a class="header-anchor" href="#linux\u5B89\u88C5vim" aria-hidden="true">#</a> Linux\u5B89\u88C5vim</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum -y <span class="token function">install</span> vim*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),o={href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"},u=l("\u53C2\u8003\u7F51\u7AD9"),p=i(`<h2 id="linux\u5B89\u88C5\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#linux\u5B89\u88C5\u9632\u706B\u5899" aria-hidden="true">#</a> Linux\u5B89\u88C5\u9632\u706B\u5899</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    //\u5B89\u88C5
    yum <span class="token function">install</span> firewalld
    //\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001
    systemctl status firewalld
    //\u5F00\u542F\u9632\u706B\u5899
    <span class="token function">service</span> firewall start
    systemctl start firewalld
    //\u91CD\u542F\u9632\u706B\u5899
    <span class="token function">service</span> firewall restart
    firewall-cmd --reload
    //\u505C\u6B62\u9632\u706B\u5899
    systemctl stop firewalld.service
    systemctl stop firewalld
    //\u7981\u6B62\u9632\u706B\u5899\u5F00\u673A\u542F\u52A8
    systemctl disable firewalld.service
    systemctl disable firewalld
    //\u5173\u95ED\u9632\u706B\u5899
    <span class="token function">service</span> firewall stop
    systemctl stop firewalld


    //\u67E5\u770B\u5DF2\u7ECF\u5F00\u653E\u7684\u7AEF\u53E3
    firewall-cmd --list-ports
    //\u67E5\u8BE280\u7AEF\u53E3\u662F\u5426\u5F00\u653E
    firewall-cmd --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp
    //\u5F00\u653E80\u7AEF\u53E3
    firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent
    //\u91CD\u65B0\u8F7D\u5165
    firewall-cmd --reload
    //\u67E5\u770B80\u7AEF\u53E3
    firewall-cmd --zone<span class="token operator">=</span>public --query-port<span class="token operator">=</span><span class="token number">80</span>/tcp
    //\u5220\u966480\u7AEF\u53E3
    firewall-cmd --zone<span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">80</span>/tcp --permanent



    //\u67E5\u770B\u9632\u706B\u5899\u89C4\u5219
    firewall-cmd --list-all
    //\u67E5\u770B\u5DF2\u7ECF\u5F00\u653E\u7684\u7AEF\u53E3
    firewall-cmd --list-ports




    //\u5217\u51FA\u6240\u6709\u7AEF\u53E3
    <span class="token function">netstat</span> -ntlp
    //\u67E5\u8BE2\u7AEF\u53E3\u5360\u7528\u60C5\u51B5
    <span class="token function">lsof</span> -i tcp:80
    //\u67E5\u8BE2\u7AEF\u53E3\u88AB\u54EA\u4E2A\u8FDB\u7A0B\u5360\u7528
    <span class="token function">netstat</span> -lnp<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">8000</span>
    //\u67E5\u770B\u8FDB\u7A0B\u5177\u4F53\u4FE1\u606F
    <span class="token function">ps</span> ***
    //\u6740\u6389\u8FDB\u7A0B
    <span class="token function">kill</span> -***
    <span class="token function">kill</span> -9 ***
    <span class="token function">pkill</span> -9 ***<span class="token punctuation">(</span>\u8FDB\u7A0B\u540D<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),m={href:"https://blog.csdn.net/beyondrl/article/details/90229495",target:"_blank",rel:"noopener noreferrer"},b=l("\u53C2\u8003\u7F51\u7AD9");function f(h,k){const s=c("ExternalLinkIcon");return d(),r("div",null,[v,n("p",null,[n("a",o,[u,e(s)])]),p,n("p",null,[n("a",m,[b,e(s)])])])}var _=a(t,[["render",f],["__file","index.html.vue"]]);export{_ as default};
