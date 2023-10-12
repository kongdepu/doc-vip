import{_ as a,o as i,c as t,a as s,d as c,e as d,b as e,r as l}from"./app.5bd229a3.js";const p={},r=d(`<h1 id="\u4F7F\u7528linux\u642D\u5EFAphp\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528linux\u642D\u5EFAphp\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u4F7F\u7528Linux\u642D\u5EFAPHP\u5F00\u53D1\u73AF\u5883</h1><p>\u7B80\u5355\u4ECB\u7ECD\u5982\u4F55\u5728Linux\u4E0B\u90E8\u7F72php\u9879\u76EE</p><h2 id="\u5B89\u88C5apache" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5apache" aria-hidden="true">#</a> \u5B89\u88C5Apache</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h2><p>\u5916\u7F51\u8BBF\u95EE\u865A\u62DF\u673A\u4E2D\u7684\u5730\u5740\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u4FEE\u6539\u4E00\u4E0B<code>apache</code>\u7684\u914D\u7F6E\u6587\u4EF6<code>/etc/httpd/conf/httpd.conf</code></p><h3 id="\u4FEE\u6539\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539\u5730\u5740</h3><p>\u5230 <code># ServerName www.example.com:80</code> \u6539\u4E3A <code>ServerName localhost:80</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ServerName gives the name and port that the server uses to identify itself.</span>
<span class="token comment"># This can often be determined automatically, but we recommend you specify</span>
<span class="token comment"># it explicitly to prevent problems during startup.</span>
<span class="token comment">#</span>
<span class="token comment"># If your host doesn&#39;t have a registered DNS name, enter its IP address here.</span>
<span class="token comment">#</span>
<span class="token comment"># ServerName www.example.com:80</span>
ServerName localhost:80
<span class="token comment">#</span>
<span class="token comment"># Deny access to the entirety of your server&#39;s filesystem. You must</span>
<span class="token comment"># explicitly permit access to web content directories in other </span>
<span class="token comment"># &lt;Directory&gt; blocks below.</span>
<span class="token comment">#</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u7AEF\u53E3\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7AEF\u53E3\u53F7" aria-hidden="true">#</a> \u4FEE\u6539\u7AEF\u53E3\u53F7</h3><p>\u627E\u5230\u3000<code># Listen</code> \u6539\u4E3A <code>Listen:8080</code>(linux\u4E2D\u5F00\u653E\u7684\u7AEF\u53E3\u53F780XX)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token comment"># Listen: Allows you to bind Apache to specific IP addresses and/or</span>
<span class="token comment"># ports, instead of the default. See also the &lt;VirtualHost&gt;</span>
<span class="token comment"># directive.</span>
<span class="token comment">#</span>
<span class="token comment"># Change this to Listen on specific IP addresses as shown below to </span>
<span class="token comment"># prevent Apache from glomming onto all bound IP addresses.</span>
<span class="token comment">#</span>
<span class="token comment"># Listen 12.34.56.78:80</span>
Listen <span class="token number">8080</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8httpd\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8httpd\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8Httpd\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> httpd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B63\u786E\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Redirecting to /bin/systemctl start  httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u542F\u52A8\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u542F\u52A8\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B\u542F\u52A8\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> httpd status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B63\u786E\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Redirecting to /bin/systemctl status  httpd.service
\u25CF httpd.service - The Apache HTTP Server
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/httpd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2017</span>-06-05 <span class="token number">15</span>:57:34 CST<span class="token punctuation">;</span> 5s ago
     Docs: man:httpd<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
           man:apachectl<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
  Process: <span class="token number">54532</span> <span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill -WINCH <span class="token variable">\${MAINPID}</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
  Process: <span class="token number">39046</span> <span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/sbin/httpd <span class="token variable">$OPTIONS</span> -k graceful <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
 Main PID: <span class="token number">54573</span> <span class="token punctuation">(</span>httpd<span class="token punctuation">)</span>
   Status: <span class="token string">&quot;Processing requests...&quot;</span>
   Memory: <span class="token number">15</span>.8M
   CGroup: /system.slice/httpd.service
           \u251C\u250054573 /usr/sbin/httpd -DFOREGROUND
           \u251C\u250054576 /usr/sbin/httpd -DFOREGROUND
           \u251C\u250054577 /usr/sbin/httpd -DFOREGROUND
           \u251C\u250054578 /usr/sbin/httpd -DFOREGROUND
           \u251C\u250054579 /usr/sbin/httpd -DFOREGROUND
           \u2514\u250054580 /usr/sbin/httpd -DFOREGROUND

Jun 05 <span class="token number">15</span>:57:34 tele-2 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting The Apache HTTP Server<span class="token punctuation">..</span>.
Jun 05 <span class="token number">15</span>:57:34 tele-2 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started The Apache HTTP Server.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u9875\u9762" aria-hidden="true">#</a> \u6D4B\u8BD5\u9875\u9762</h2><p>\u6B64\u65F6\u76F4\u63A5\u8BBF\u95EE\u4F60\u7684\u670D\u52A1\u5668\u4E86,\u8F93\u5165\u670D\u52A1\u5668\u7684IP\u5730\u5740,\u51FA\u73B0\u4E00\u4E2A<code>Apache test page powered by centos</code>\u7684\u6D4B\u8BD5\u9875\u9762\u3002</p><h2 id="\u5B89\u88C5php" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5php" aria-hidden="true">#</a> \u5B89\u88C5PHP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u91CD\u542Fhttpd\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Fhttpd\u670D\u52A1" aria-hidden="true">#</a> \u91CD\u542Fhttpd\u670D\u52A1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> httpd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B63\u786E\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Redirecting to /bin/systemctl start  httpd.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u65B0\u5EFAphp\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFAphp\u9875\u9762" aria-hidden="true">#</a> \u65B0\u5EFAphp\u9875\u9762</h2><p>\u91CD\u542F\u4E4B\u540E\u6211\u4EEC\u8FDB\u884C\u6D4B\u8BD5<code>php</code>\u76F8\u5173\u4FE1\u606F\uFF0C\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A<code>php</code>\u754C\u9762\u8FDB\u884C\u6D4B\u8BD5, \u5728<code>apache</code>\u9ED8\u8BA4\u9875\u9762\u8DEF\u5F84<code>/var/www/html</code>\u4E0B\u65B0\u5EFA\u4E00\u4E2Atest.php\u9875\u9762\uFF0C\u6DFB\u52A0\u4EE3\u7801</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
 <span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=e("\u6211\u4EEC\u8BBF\u95EE\u8FD9\u4E2A\u9875\u9762,\u8F93\u5165http://ip:8080/test.php\u5C31\u53EF\u4EE5\u770B\u89C1php\u73AF\u5883\u7684\u914D\u7F6E\u4FE1\u606F\u4E86 "),u={href:"https://www.yisu.com/zixun/457400.html",target:"_blank",rel:"noopener noreferrer"},h=e("\u53C2\u8003\u7F51\u7AD9");function v(m,b){const n=l("ExternalLinkIcon");return i(),t("div",null,[r,s("p",null,[o,s("a",u,[h,c(n)])])])}var g=a(p,[["render",v],["__file","php.html.vue"]]);export{g as default};