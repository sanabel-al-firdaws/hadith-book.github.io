importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");self.addEventListener("widgetinstall",t=>{t.waitUntil(e(t))});self.addEventListener("widgetresume",t=>{t.waitUntil(e(t))});self.addEventListener("widgetclick",t=>{t.action=="updateName"&&t.waitUntil(s(t))});self.addEventListener("widgetuninstall",t=>{});const e=async t=>{const a=t.widget.definition,i={template:JSON.stringify(await(await fetch(a.msAcTemplate)).json()),data:JSON.stringify(await(await fetch(a.data)).json())};await self.widgets.updateByInstanceId(t.instanceId,i)},s=async t=>{const a=t.data.json().name,i=t.widget.definition,n={template:JSON.stringify(await(await fetch(i.msAcTemplate)).json()),data:JSON.stringify({name:a})};await self.widgets.updateByInstanceId(t.instanceId,n)};workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about-bd2082e0.js"},{"revision":null,"url":"code/bab-al-wodo-1-40c1af74.js"},{"revision":null,"url":"code/bab-al-wodo-f7fddc49.js"},{"revision":null,"url":"code/bab-salat-al-fajr-1-58dae618.js"},{"revision":null,"url":"code/bab-salat-al-fajr-250be38f.js"},{"revision":null,"url":"code/index-cff8baa4.js"},{"revision":null,"url":"code/index-d961e0b8.js"},{"revision":null,"url":"code/index-f4b85155.css"},{"revision":null,"url":"code/kitab-al-akhlaq-04b4cef5.js"},{"revision":null,"url":"code/kitab-al-salah-c4d6254c.js"},{"revision":null,"url":"code/kitab-al-sawm-1d047d94.js"},{"revision":"9ade6c917efaf230af466217d7c62d44","url":"index.html"},{"revision":"0fe8353a5f90936cbdcce361bc88af0f","url":"manifest.json"},{"revision":"0ad293556599e0acb1dad2c26a786622","url":"staticwebapp.config.json"},{"revision":"74171a6083089ceb0ce6f79b58424106","url":"widget/ac.json"},{"revision":"8a8dbb0e25f5f023196d021c299a936f","url":"widget/data.json"}]||[]);
//# sourceMappingURL=sw.js.map
