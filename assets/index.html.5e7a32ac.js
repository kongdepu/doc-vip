import{_ as i,o as n,c as e,e as s}from"./app.5bd229a3.js";const d={},l=s(`<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><p>\u4EC5\u4EC5\u662F\u4E2A\u4EBA\u7B14\u8BB0</p><h2 id="\u5212\u5206vlan" tabindex="-1"><a class="header-anchor" href="#\u5212\u5206vlan" aria-hidden="true">#</a> \u5212\u5206vlan</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>en 
config
hostname sw1

int fa0/3
switch mode trunk
exit

int fa0/1
switch access vlan 10
exit

int fa0/2
switch access vlan 20
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531\u5668\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u57FA\u672C\u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>en
config
hostname r1
enable secret 123456
exit
exit

en
123456
config
line vty 0 4
password 123456789
login
exit
int fa0/0
ip add 192.168.1.2 255.255.255.0
no shut
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>com.kdp
|-----annotation                 // \u81EA\u5B9A\u4E49\u6CE8\u89E3
|-----aspect                     // \u5207\u9762\u7C7B
|-----async                      // \u5F02\u6B65\u65B9\u6CD5
|-----config                     // \u5168\u5C40\u914D\u7F6E
|-----constant                   // \u5E38\u91CF\u7C7B
|-----controller                 // \u63A7\u5236\u5C42
|-----dao                        // \u7ED3\u6784\u5C42
|-----framework                  // \u7CFB\u7EDF\u6846\u67B6
|-----impl                       // \u4E1A\u52A1\u903B\u8F91\u5C42
|-----interceptor                // \u62E6\u622A\u5668
|-----pojo                       // \u5B9E\u4F53\u7C7B
|-----service                    // \u4E1A\u52A1\u903B\u8F91\u5C42
|-----utils                      // \u5DE5\u5177\u7C7B
resources
|-----applicationContext.xml     // \u5168\u5C40\u914D\u7F6E\u9879
|-----db.properties              // \u6570\u636E\u5E93\u76F8\u5173\u6570\u636E
|-----log4j.properties           // \u9519\u8BEF\u65E5\u5FD7\u7684\u6253\u5370
|-----mybatis-config.xml         // \u6301\u4E45\u5C42\u5C42\u7684\u76F8\u5173\u914D\u7F6E
|-----redis.properties           // redis\u76F8\u5173\u6570\u636E
|-----SpringMvc-config.xml       // springMvc\u7684\u76F8\u5173\u914D\u7F6E
|-----threadPool.xml             // \u5F02\u6B65\u65B9\u6CD5\u7684\u76F8\u5173\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[l];function v(r,c){return n(),e("div",null,a)}var u=i(d,[["render",v],["__file","index.html.vue"]]);export{u as default};
