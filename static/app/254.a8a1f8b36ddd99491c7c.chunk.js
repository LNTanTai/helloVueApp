(self["webpackChunkspace_1"]=self["webpackChunkspace_1"]||[]).push([[254],{1254:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return S}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[s("span",{attrs:{id:"metrics-page-heading","data-cy":"metricsPageHeading"},domProps:{textContent:t._s(t.$t("metrics.title"))}},[t._v("Application Metrics")]),t._v(" "),s("button",{staticClass:"btn btn-primary float-right",on:{click:function(e){return t.refresh()}}},[s("font-awesome-icon",{attrs:{icon:"sync"}}),t._v(" "),s("span",{domProps:{textContent:t._s(t.$t("metrics['refresh.button']"))}},[t._v("Refresh")])],1)]),t._v(" "),s("h3",{domProps:{textContent:t._s(t.$t("metrics.jvm.title"))}},[t._v("JVM Metrics")]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("h4",{domProps:{textContent:t._s(t.$t("metrics.jvm.memory.title"))}},[t._v("Memory")]),t._v(" "),s("div",t._l(t.metrics.jvm,(function(e,a){return s("div",{key:a},[-1!==e.max?s("span",[s("span",[t._v(t._s(a))]),t._v(" ("+t._s(t.formatNumber1(e.used/1048576))+"M / "+t._s(t.formatNumber1(e.max/1048576))+"M)\n          ")]):s("span",[s("span",[t._v(t._s(a))]),t._v(" "+t._s(t.formatNumber1(e.used/1048576))+"M\n          ")]),t._v(" "),s("div",[t._v("Committed : "+t._s(t.formatNumber1(e.committed/1048576))+"M")]),t._v(" "),-1!==e.max?s("b-progress",{attrs:{variant:"success",animated:"",max:e.max,striped:""}},[s("b-progress-bar",{attrs:{value:e.used,label:t.formatNumber1(100*e.used/e.max)+"%"}})],1):t._e()],1)})),0)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("h4",{domProps:{textContent:t._s(t.$t("metrics.jvm.threads.title"))}},[t._v("Threads")]),t._v(" "),s("span",[s("span",{domProps:{textContent:t._s(t.$t("metrics.jvm.threads.runnable"))}},[t._v("Runnable")]),t._v(" "+t._s(t.threadStats.threadDumpRunnable))]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.threadStats.threadDumpAll,striped:""}},[s("b-progress-bar",{attrs:{value:t.threadStats.threadDumpRunnable,label:t.formatNumber1(100*t.threadStats.threadDumpRunnable/t.threadStats.threadDumpAll)+"%"}})],1),t._v(" "),s("span",[s("span",{domProps:{textContent:t._s(t.$t("metrics.jvm.threads.timedwaiting"))}},[t._v("Timed Waiting")]),t._v(" ("+t._s(t.threadStats.threadDumpTimedWaiting)+")")]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.threadStats.threadDumpAll,striped:""}},[s("b-progress-bar",{attrs:{value:t.threadStats.threadDumpTimedWaiting,label:t.formatNumber1(100*t.threadStats.threadDumpTimedWaiting/t.threadStats.threadDumpAll)+"%"}})],1),t._v(" "),s("span",[s("span",{domProps:{textContent:t._s(t.$t("metrics.jvm.threads.waiting"))}},[t._v("Waiting")]),t._v(" ("+t._s(t.threadStats.threadDumpWaiting)+")")]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.threadStats.threadDumpAll,striped:""}},[s("b-progress-bar",{attrs:{value:t.threadStats.threadDumpWaiting,label:t.formatNumber1(100*t.threadStats.threadDumpWaiting/t.threadStats.threadDumpAll)+"%"}})],1),t._v(" "),s("span",[s("span",{domProps:{textContent:t._s(t.$t("metrics.jvm.threads.blocked"))}},[t._v("Blocked")]),t._v(" ("+t._s(t.threadStats.threadDumpBlocked)+")")]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.threadStats.threadDumpAll,striped:""}},[s("b-progress-bar",{attrs:{value:t.threadStats.threadDumpBlocked,label:t.formatNumber1(100*t.threadStats.threadDumpBlocked/t.threadStats.threadDumpAll)+"%"}})],1),t._v(" "),s("span",[t._v("Total: "+t._s(t.threadStats.threadDumpAll)+"\n        "),s("a",{directives:[{name:"b-modal",rawName:"v-b-modal.metricsModal",modifiers:{metricsModal:!0}}],staticClass:"hand",attrs:{"data-toggle":"modal","data-target":"#threadDump"},on:{click:function(e){return t.openModal()}}},[s("font-awesome-icon",{attrs:{icon:"eye"}})],1)])],1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("h4",[t._v("System")]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[t._v("Uptime")]),t._v(" "),s("div",{staticClass:"col-md-8 text-right"},[t._v(t._s(t.convertMillisecondsToDuration(t.metrics.processMetrics["process.uptime"])))])]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[t._v("Start time")]),t._v(" "),s("div",{staticClass:"col-md-8 text-right"},[t._v(t._s(t._f("formatMillis")(t.metrics.processMetrics["process.start.time"])))])]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("Process CPU usage")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.formatNumber2(100*t.metrics.processMetrics["process.cpu.usage"]))+" %")])]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:100,striped:""}},[s("b-progress-bar",{attrs:{value:100*t.metrics.processMetrics["process.cpu.usage"],label:t.formatNumber1(100*t.metrics.processMetrics["process.cpu.usage"])+"%"}})],1),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("System CPU usage")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.formatNumber2(100*t.metrics.processMetrics["system.cpu.usage"]))+" %")])]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:100,striped:""}},[s("b-progress-bar",{attrs:{value:100*t.metrics.processMetrics["system.cpu.usage"],label:t.formatNumber1(100*t.metrics.processMetrics["system.cpu.usage"])+"%"}})],1),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("System CPU count")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.metrics.processMetrics["system.cpu.count"]))])]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("System 1m Load average")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.formatNumber2(t.metrics.processMetrics["system.load.average.1m"])))])]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("Process files max")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.formatNumber1(t.metrics.processMetrics["process.files.max"])))])]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("Process files open")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.formatNumber1(t.metrics.processMetrics["process.files.open"])))])])],1)]),t._v(" "),s("h3",{domProps:{textContent:t._s(t.$t("metrics.jvm.gc.title"))}},[t._v("Garbage collections")]),t._v(" "),!t.updatingMetrics&&t.isObjectExisting(t.metrics,"garbageCollector")?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("div",[s("span",[t._v("\n          GC Live Data Size/GC Max Data Size ("+t._s(t.formatNumber1(t.metrics.garbageCollector["jvm.gc.live.data.size"]/1048576))+"M /\n          "+t._s(t.formatNumber1(t.metrics.garbageCollector["jvm.gc.max.data.size"]/1048576))+"M)\n        ")]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.metrics.garbageCollector["jvm.gc.max.data.size"],striped:""}},[s("b-progress-bar",{attrs:{value:t.metrics.garbageCollector["jvm.gc.live.data.size"],label:t.formatNumber2(100*t.metrics.garbageCollector["jvm.gc.live.data.size"]/t.metrics.garbageCollector["jvm.gc.max.data.size"])+"%"}})],1)],1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",[s("span",[t._v("\n          GC Memory Promoted/GC Memory Allocated ("+t._s(t.formatNumber1(t.metrics.garbageCollector["jvm.gc.memory.promoted"]/1048576))+"M /\n          "+t._s(t.formatNumber1(t.metrics.garbageCollector["jvm.gc.memory.allocated"]/1048576))+"M)\n        ")]),t._v(" "),s("b-progress",{attrs:{variant:"success",max:t.metrics.garbageCollector["jvm.gc.memory.allocated"],striped:""}},[s("b-progress-bar",{attrs:{value:t.metrics.garbageCollector["jvm.gc.memory.promoted"],label:t.formatNumber2(100*t.metrics.garbageCollector["jvm.gc.memory.promoted"]/t.metrics.garbageCollector["jvm.gc.memory.allocated"])+"%"}})],1)],1)]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("Classes loaded")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.metrics.garbageCollector.classesLoaded))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9"},[t._v("Classes unloaded")]),t._v(" "),s("div",{staticClass:"col-md-3 text-right"},[t._v(t._s(t.metrics.garbageCollector.classesUnloaded))])])]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped",attrs:{"aria-describedby":"Jvm gc"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.count"))}},[t._v("Count")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.mean"))}},[t._v("Mean")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.min"))}},[t._v("Min")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p50"))}},[t._v("p50")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p75"))}},[t._v("p75")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p95"))}},[t._v("p95")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p99"))}},[t._v("p99")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.max"))}},[t._v("Max")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("jvm.gc.pause")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.metrics.garbageCollector["jvm.gc.pause"].count))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"].mean)))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"]["0.0"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"]["0.5"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"]["0.75"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"]["0.95"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"]["0.99"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.garbageCollector["jvm.gc.pause"].max)))])])])])])]):t._e(),t._v(" "),s("h3",{domProps:{textContent:t._s(t.$t("metrics.jvm.http.title"))}},[t._v("HTTP requests (time in millisecond)")]),t._v(" "),!t.updatingMetrics&&t.isObjectExisting(t.metrics,"http.server.requests")?s("table",{staticClass:"table table-striped",attrs:{"aria-describedby":"Jvm http"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.http.table.code"))}},[t._v("Code")]),t._v(" "),s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.http.table.count"))}},[t._v("Count")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.http.table.mean"))}},[t._v("Mean")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.http.table.max"))}},[t._v("Max")])])]),t._v(" "),s("tbody",t._l(t.metrics["http.server.requests"]["percode"],(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a))]),t._v(" "),s("td",[s("b-progress",{attrs:{variant:"success",animated:"",max:t.metrics["http.server.requests"]["all"].count,striped:""}},[s("b-progress-bar",{attrs:{value:e.count,label:t.formatNumber1(e.count)}})],1)],1),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n          "+t._s(t.formatNumber2(t.filterNaN(e.mean)))+"\n        ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(e.max)))])])})),0)]):t._e(),t._v(" "),s("h3",[t._v("Endpoints requests (time in millisecond)")]),t._v(" "),t.updatingMetrics?t._e():s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped",attrs:{"aria-describedby":"Endpoint"}},[t._m(0),t._v(" "),s("tbody",[t._l(t.metrics.services,(function(e,a){return t._l(e,(function(e,r){return s("tr",{key:a+"-"+r},[s("td",[t._v(t._s(r))]),t._v(" "),s("td",[t._v(t._s(a))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e.count))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(e.mean)))])])}))}))],2)])]),t._v(" "),s("h3",{domProps:{textContent:t._s(t.$t("metrics.cache.title"))}},[t._v("Cache statistics")]),t._v(" "),!t.updatingMetrics&&t.isObjectExisting(t.metrics,"cache")?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped",attrs:{"aria-describedby":"Cache"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.cache.cachename"))}},[t._v("Cache name")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.hits"}},[t._v("Cache Hits")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.misses"}},[t._v("Cache Misses")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.gets"}},[t._v("Cache Gets")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.puts"}},[t._v("Cache Puts")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.removals"}},[t._v("Cache Removals")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.evictions"}},[t._v("Cache Evictions")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.hitPercent"}},[t._v("Cache Hit %")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col","data-translate":"metrics.cache.missPercent"}},[t._v("Cache Miss %")])])]),t._v(" "),s("tbody",t._l(t.metrics.cache,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.gets.hit"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.gets.miss"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.gets.hit"]+e["cache.gets.miss"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.puts"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.removals"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(e["cache.evictions"]))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n            "+t._s(t.formatNumber2(t.filterNaN(100*e["cache.gets.hit"]/(e["cache.gets.hit"]+e["cache.gets.miss"]))))+"\n          ")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("\n            "+t._s(t.formatNumber2(t.filterNaN(100*e["cache.gets.miss"]/(e["cache.gets.hit"]+e["cache.gets.miss"]))))+"\n          ")])])})),0)])]):t._e(),t._v(" "),s("h3",{domProps:{textContent:t._s(t.$t("metrics.datasource.title"))}},[t._v("DataSource statistics (time in millisecond)")]),t._v(" "),!t.updatingMetrics&&t.isObjectExistingAndNotEmpty(t.metrics,"databases")?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped",attrs:{"aria-describedby":"Connection pool"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("span",{domProps:{textContent:t._s(t.$t("metrics.datasource.usage"))}},[t._v("Connection Pool Usage")]),t._v(" (active: "+t._s(t.metrics.databases.active.value)+", min:\n            "+t._s(t.metrics.databases.min.value)+", max: "+t._s(t.metrics.databases.max.value)+", idle: "+t._s(t.metrics.databases.idle.value)+")\n          ")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.datasource.count"))}},[t._v("Count")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.datasource.mean"))}},[t._v("Mean")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.min"))}},[t._v("Min")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p50"))}},[t._v("p50")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p75"))}},[t._v("p75")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p95"))}},[t._v("p95")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.servicesstats.table.p99"))}},[t._v("p99")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.datasource.max"))}},[t._v("Max")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Acquire")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.metrics.databases.acquire.count))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.acquire.mean))))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.acquire["0.0"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.acquire["0.5"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.acquire["0.75"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.acquire["0.95"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.acquire["0.99"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.acquire.max))))])]),t._v(" "),s("tr",[s("td",[t._v("Creation")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.metrics.databases.creation.count))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.creation.mean))))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.creation["0.0"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.creation["0.5"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.creation["0.75"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.creation["0.95"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.creation["0.99"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.creation.max))))])]),t._v(" "),s("tr",[s("td",[t._v("Usage")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.metrics.databases.usage.count))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.usage.mean))))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.usage["0.0"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.usage["0.5"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.usage["0.75"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.usage["0.95"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.metrics.databases.usage["0.99"])))]),t._v(" "),s("td",{staticClass:"text-right"},[t._v(t._s(t.formatNumber2(t.filterNaN(t.metrics.databases.usage.max))))])])])])]):t._e(),t._v(" "),s("b-modal",{ref:"metricsModal",attrs:{size:"lg"}},[s("h4",{staticClass:"modal-title",attrs:{slot:"modal-title",id:"showMetricsLabel"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.title"))},slot:"modal-title"},[t._v("Threads dump")]),t._v(" "),s("metrics-modal",{attrs:{"thread-dump":t.threadData}})],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Method")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Endpoint url")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("Count")]),t._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"}},[t._v("Mean")])])])}];a._withStripped=!0;var i=s(2077),c=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-body"},[s("span",{staticClass:"badge badge-primary",on:{click:function(e){t.threadDumpFilter=""}}},[t._v("All "),s("span",{staticClass:"badge badge-pill badge-default"},[t._v(t._s(t.threadDumpData.threadDumpAll))])]),t._v(" \n  "),s("span",{staticClass:"badge badge-success",on:{click:function(e){t.threadDumpFilter="RUNNABLE"}}},[t._v("Runnable "),s("span",{staticClass:"badge badge-pill badge-default"},[t._v(t._s(t.threadDumpData.threadDumpRunnable))])]),t._v(" \n  "),s("span",{staticClass:"badge badge-info",on:{click:function(e){t.threadDumpFilter="WAITING"}}},[t._v("Waiting "),s("span",{staticClass:"badge badge-pill badge-default"},[t._v(t._s(t.threadDumpData.threadDumpWaiting))])]),t._v(" \n  "),s("span",{staticClass:"badge badge-warning",on:{click:function(e){t.threadDumpFilter="TIMED_WAITING"}}},[t._v("Timed Waiting "),s("span",{staticClass:"badge badge-pill badge-default"},[t._v(t._s(t.threadDumpData.threadDumpTimedWaiting))])]),t._v(" \n  "),s("span",{staticClass:"badge badge-danger",on:{click:function(e){t.threadDumpFilter="BLOCKED"}}},[t._v("Blocked "),s("span",{staticClass:"badge badge-pill badge-default"},[t._v(t._s(t.threadDumpData.threadDumpBlocked))])]),t._v(" \n  "),s("div",{staticClass:"mt-2"},[t._v(" ")]),t._v("\n  Filter\n  "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.threadDumpFilter,expression:"threadDumpFilter"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.threadDumpFilter},on:{input:function(e){e.target.composing||(t.threadDumpFilter=e.target.value)}}}),t._v(" "),t._l(t.filterBy(t.threadDump,t.threadDumpFilter),(function(e,a){return s("div",{key:a,staticClass:"pad"},[s("h6",[s("span",{staticClass:"badge",class:t.getBadgeClass(e.threadState)},[t._v(t._s(e.threadState))]),t._v(" "+t._s(e.threadName)+" (ID "+t._s(e.threadId)+")\n      "),s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.show=!e.show}}},[s("span",{attrs:{hidden:e.show},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.show"))}},[t._v("Show StackTrace")]),t._v(" "),s("span",{attrs:{hidden:!e.show},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.hide"))}},[t._v("Hide StackTrace")])])]),t._v(" "),s("div",{staticClass:"card",attrs:{hidden:!e.show}},[s("div",{staticClass:"card-body"},t._l(e.stackTrace,(function(e,a){return s("div",{key:a,staticClass:"break"},[s("samp",[t._v(t._s(e.className)+"."+t._s(e.methodName)+"("),s("code",[t._v(t._s(e.fileName)+":"+t._s(e.lineNumber))]),t._v(")")]),t._v(" "),s("span",{staticClass:"mt-1"})])})),0)]),t._v(" "),s("table",{staticClass:"table table-sm table-responsive",attrs:{"aria-describedby":"Metrics"}},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.blockedtime"))}},[t._v("Blocked Time")]),t._v(" "),s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.blockedcount"))}},[t._v("Blocked Count")]),t._v(" "),s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.waitedtime"))}},[t._v("Waited Time")]),t._v(" "),s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.waitedcount"))}},[t._v("Waited Count")]),t._v(" "),s("th",{attrs:{scope:"col"},domProps:{textContent:t._s(t.$t("metrics.jvm.threads.dump.lockname"))}},[t._v("Lock Name")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(t._s(e.blockedTime))]),t._v(" "),s("td",[t._v(t._s(e.blockedCount))]),t._v(" "),s("td",[t._v(t._s(e.waitedTime))]),t._v(" "),s("td",[t._v(t._s(e.waitedCount))]),t._v(" "),s("td",{staticClass:"thread-dump-modal-lock",attrs:{title:e.lockName}},[s("code",[t._v(t._s(e.lockName))])])])])])])}))],2)},m=[];o._withStripped=!0;var d=s(1157),l=s(4494),n=s.n(l),v=function(){var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},t(e,s)};return function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function a(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),_=function(t,e,s,a){var r,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(c=(i<3?r(c):i>3?r(e,s,c):r(e,s))||c);return i>3&&c&&Object.defineProperty(e,s,c),c},p=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.threadDumpFilter=null,e}return v(e,t),Object.defineProperty(e.prototype,"threadDumpData",{get:function(){var t={threadDumpAll:0,threadDumpBlocked:0,threadDumpRunnable:0,threadDumpTimedWaiting:0,threadDumpWaiting:0};return this.threadDump&&(this.threadDump.forEach((function(e){"RUNNABLE"===e.threadState?t.threadDumpRunnable+=1:"WAITING"===e.threadState?t.threadDumpWaiting+=1:"TIMED_WAITING"===e.threadState?t.threadDumpTimedWaiting+=1:"BLOCKED"===e.threadState&&(t.threadDumpBlocked+=1)})),t.threadDumpAll=t.threadDumpRunnable+t.threadDumpWaiting+t.threadDumpTimedWaiting+t.threadDumpBlocked),t},enumerable:!1,configurable:!0}),e.prototype.getBadgeClass=function(t){return"RUNNABLE"===t?"badge-success":"WAITING"===t?"badge-info":"TIMED_WAITING"===t?"badge-warning":"BLOCKED"===t?"badge-danger":void 0},_([(0,d.fI)(),p("design:type",Object)],e.prototype,"threadDump",void 0),e=_([(0,d.wA)({mixins:[n().mixin]})],e),e}(d.w3),h=u,g=h,b=s(1900),C=(0,b.Z)(g,o,m,!1,null,null,null);C.options.__file="src/main/webapp/app/admin/metrics/metrics-modal.vue";var f=C.exports,x=function(){var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},t(e,s)};return function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Class extends value "+String(s)+" is not a constructor or null");function a(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(a.prototype=s.prototype,new a)}}(),N=function(t,e,s,a){var r,i=arguments.length,c=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(c=(i<3?r(c):i>3?r(e,s,c):r(e,s))||c);return i>3&&c&&Object.defineProperty(e,s,c),c},D=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.metrics={},e.threadData=null,e.threadStats={},e.updatingMetrics=!0,e}return x(e,t),e.prototype.mounted=function(){this.refresh()},e.prototype.refresh=function(){var t=this;this.metricsService().getMetrics().then((function(e){t.metrics=e.data,t.metricsService().retrieveThreadDump().then((function(e){t.updatingMetrics=!0,t.threadData=e.data.threads,t.threadStats={threadDumpRunnable:0,threadDumpWaiting:0,threadDumpTimedWaiting:0,threadDumpBlocked:0,threadDumpAll:0},t.threadData.forEach((function(e){"RUNNABLE"===e.threadState?t.threadStats.threadDumpRunnable+=1:"WAITING"===e.threadState?t.threadStats.threadDumpWaiting+=1:"TIMED_WAITING"===e.threadState?t.threadStats.threadDumpTimedWaiting+=1:"BLOCKED"===e.threadState&&(t.threadStats.threadDumpBlocked+=1)})),t.threadStats.threadDumpAll=t.threadStats.threadDumpRunnable+t.threadStats.threadDumpWaiting+t.threadStats.threadDumpTimedWaiting+t.threadStats.threadDumpBlocked,t.updatingMetrics=!1})).catch((function(){t.updatingMetrics=!0}))})).catch((function(){t.updatingMetrics=!0}))},e.prototype.openModal=function(){this.$refs.metricsModal.show&&this.$refs.metricsModal.show()},e.prototype.filterNaN=function(t){return isNaN(t)?0:t},e.prototype.formatNumber1=function(t){return c()(t).format("0,0")},e.prototype.formatNumber2=function(t){return c()(t).format("0,00")},e.prototype.convertMillisecondsToDuration=function(t){var e={year:315576e5,month:2629746e3,day:864e5,hour:36e5,minute:6e4,second:1e3},s="",a="";for(var r in e)Math.floor(t/e[r])>0&&(a=Math.floor(t/e[r])>1?"s":"",s+=Math.floor(t/e[r]).toString()+" "+r.toString()+a+" ",t-=e[r]*Math.floor(t/e[r]));return s},e.prototype.isObjectExisting=function(t,e){return t&&t[e]},e.prototype.isObjectExistingAndNotEmpty=function(t,e){return this.isObjectExisting(t,e)&&"{}"!==JSON.stringify(t[e])},N([(0,d.tB)("metricsService"),D("design:type",Function)],e.prototype,"metricsService",void 0),e=N([(0,d.wA)({components:{"metrics-modal":f}})],e),e}(d.w3),M=y,j=M,P=(0,b.Z)(j,a,r,!1,null,null,null);P.options.__file="src/main/webapp/app/admin/metrics/metrics.vue";var S=P.exports}}]);
//# sourceMappingURL=254.a8a1f8b36ddd99491c7c.chunk.js.map