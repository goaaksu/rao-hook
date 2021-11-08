(self["webpackChunk"]=self["webpackChunk"]||[]).push([[7751],{69157:function(){},27832:function(e,t,l){"use strict";l.r(t);var n=l(13378),r=l(3911),a=l(67294),c=l(9790);t["default"]=e=>{var t=e.hidden,l=(0,r.Z)(e,["hidden"]);return a.createElement(c.Z,(0,n.Z)({className:t?"__dumi_taro-hook-hidden":""},l))}},26827:function(e,t,l){"use strict";l.r(t);var n=l(67294),r=l(96089),a=l(27832),c=l(65659),o=l(24758),m=l(67563),u=n.memo(m.default["pages-usebluetooth"].component);t["default"]=e=>(n.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement("div",{className:"markdown"},n.createElement("h1",{id:"usebluetooth"},n.createElement(r.AnchorLink,{to:"#usebluetooth","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"useBluetooth"),n.createElement("p",null,"\u84dd\u7259\u8bbe\u5907"),n.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.createElement("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u84dd\u7259\u529f\u80fd\u65f6(\u6ce8\u610f\u90e8\u5206\u8981\u6c42\u57fa\u7840\u5e93, \u4f1a\u5728\u4e0b\u9762\u65b9\u6cd5\u7684\u672b\u5c3e\u589e\u52a0)"),n.createElement("h2",{id:"api"},n.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"API"),n.createElement(c.Z,{code:"const [\n  { devices, connectedDevices, adapter },\n  {\n    openAdapter,\n    closeAdapter,\n    getAdapterState,\n    getDevices,\n    getConnectedDevices,\n    onAdapterStateChange,\n    offAdapterStateChange,\n    onDeviceFound,\n    offDeviceFound,\n    startDiscovery,\n    stopDiscovery,\n    makePair,\n    isBluetoothDevicePaired,\n  },\n] = useBluetooth();",lang:"jsx"}),n.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},n.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),n.createElement("p",null,"\u65e0"),n.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},n.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),n.createElement("p",null,"\u4e0b\u65b9\u6807\u660e\u7684\u7248\u672c\u53f7\u4e3a\u57fa\u7840\u5e93\u7248\u672c\u53f7"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u8fd4\u56de\u503c"),n.createElement("th",null,"\u8bf4\u660e"),n.createElement("th",null,"\u7c7b\u578b"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"devices"),n.createElement("td",null,"\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907"),n.createElement("td",null,n.createElement("code",null,"getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]?"))),n.createElement("tr",null,n.createElement("td",null,"connectedDevices"),n.createElement("td",null,"\u4e3b\u670d\u52a1",n.createElement("code",null,"UUID"),"\u83b7\u53d6\u5df2\u8fde\u63a5\u7684\u84dd\u7259\u8bbe\u5907"),n.createElement("td",null,n.createElement("code",null,"getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]?"))),n.createElement("tr",null,n.createElement("td",null,"adapter"),n.createElement("td",null,"\u84dd\u7259\u6a21\u5757"),n.createElement("td",null,n.createElement("code",null,"IAdapter?"))),n.createElement("tr",null,n.createElement("td",null,"openAdapter",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u521d\u59cb\u5316\u84dd\u7259\u6a21\u5757\u3002",n.createElement("code",null,"iOS"),"\u4e0a\u5f00\u542f\u4e3b\u673a/\u4ece\u673a\uff08\u5916\u56f4\u8bbe\u5907\uff09\u6a21\u5f0f\u65f6\u9700\u5206\u522b\u8c03\u7528\u4e00\u6b21\uff0c\u5e76\u6307\u5b9a\u5bf9\u5e94\u7684",n.createElement("code",null,"mode")),n.createElement("td",null,n.createElement("code",null,"(mode?: TOpenBluetoothAdapterType) => Promise<General.BluetoothError | IOpenBluetoothAdapterFailResult>"))),n.createElement("tr",null,n.createElement("td",null,"closeAdapter",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u5173\u95ed\u84dd\u7259\u6a21\u5757\u3002\u8c03\u7528\u8be5\u65b9\u6cd5\u5c06\u65ad\u5f00\u6240\u6709\u5df2\u5efa\u7acb\u7684\u8fde\u63a5\u5e76\u91ca\u653e\u7cfb\u7edf\u8d44\u6e90\u3002"),n.createElement("td",null,n.createElement("code",null,"() => Promise<General.BluetoothError>"))),n.createElement("tr",null,n.createElement("td",null,"getAdapterState",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u83b7\u53d6\u672c\u673a\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001"),n.createElement("td",null,n.createElement("code",null,"() => Promise<getBluetoothAdapterStateNamespace.SuccessCallbackResult | General.BluetoothError>"))),n.createElement("tr",null,n.createElement("td",null,"getDevices",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u83b7\u53d6\u5728\u84dd\u7259\u6a21\u5757\u751f\u6548\u671f\u95f4\u6240\u6709\u641c\u7d22\u5230\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5305\u62ec\u5df2\u7ecf\u548c\u672c\u673a\u5904\u4e8e\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907"),n.createElement("td",null,n.createElement("code",null,"() => Promise<General.BluetoothError | getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]>"))),n.createElement("tr",null,n.createElement("td",null,"getConnectedDevices",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u6839\u636e\u4e3b\u670d\u52a1",n.createElement("code",null,"UUID"),"\u83b7\u53d6\u5df2\u8fde\u63a5\u7684\u84dd\u7259\u8bbe\u5907"),n.createElement("td",null,n.createElement("code",null,"(services: string[]) => Promise<General.BluetoothError | getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]>"))),n.createElement("tr",null,n.createElement("td",null,"onAdapterStateChange",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback?: onBluetoothAdapterStateChangeNamespace.Callback) => void"))),n.createElement("tr",null,n.createElement("td",null,"offAdapterStateChange",n.createElement(o.Z,null,"2.9.0")),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback?: General.EventCallback) => void"))),n.createElement("tr",null,n.createElement("td",null,"onDeviceFound",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u76d1\u542c\u641c\u7d22\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback?: (devices: onBluetoothDeviceFoundNamespace.CallbackResultBlueToothDevice[]) => void) => void"))),n.createElement("tr",null,n.createElement("td",null,"offDeviceFound",n.createElement(o.Z,null,"2.9.0")),n.createElement("td",null,"\u53d6\u6d88\u76d1\u542c\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6"),n.createElement("td",null,n.createElement("code",null,"(callback?: (devices: onBluetoothDeviceFoundNamespace.CallbackResultBlueToothDevice[]) => void) => void"))),n.createElement("tr",null,n.createElement("td",null,"startDiscovery",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u5f00\u59cb\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907"),n.createElement("td",null,n.createElement("code",null,"(option?: IStartBluetoothDevicesDiscoveryOption) => Promise<General.BluetoothError>"))),n.createElement("tr",null,n.createElement("td",null,"stopDiscovery",n.createElement(o.Z,null,"1.1.0")),n.createElement("td",null,"\u505c\u6b62\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907\u3002\u82e5\u5df2\u7ecf\u627e\u5230\u9700\u8981\u7684\u84dd\u7259\u8bbe\u5907\u5e76\u4e0d\u9700\u8981\u7ee7\u7eed\u641c\u7d22\u65f6\uff0c\u5efa\u8bae\u8c03\u7528\u8be5\u63a5\u53e3\u505c\u6b62\u84dd\u7259\u641c\u7d22"),n.createElement("td",null,n.createElement("code",null,"TNormalAction<General.BluetoothError>"))),n.createElement("tr",null,n.createElement("td",null,"makePair",n.createElement(o.Z,null,"2.12.0"),n.createElement(o.Z,null,"Android")),n.createElement("td",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff08\u9700\u8981\u6307\u5b9a pin \u7801\u6216\u8005\u5bc6\u7801\u65f6\uff09\u7cfb\u7edf\u4f1a\u63a5\u7ba1\u914d\u5bf9\u6d41\u7a0b\uff0c\u76f4\u63a5\u8c03\u7528 wx.createBLEConnection \u5373\u53ef\u3002\u8be5\u63a5\u53e3\u53ea\u5e94\u5f53\u5728\u5f00\u53d1\u8005\u4e0d\u60f3\u8ba9\u7528\u6237\u624b\u52a8\u8f93\u5165 pin \u7801\u4e14\u771f\u673a\u9a8c\u8bc1\u786e\u8ba4\u53ef\u4ee5\u6b63\u5e38\u751f\u6548\u60c5\u51b5\u4e0b\u7528"),n.createElement("td",null,n.createElement("code",null,"(deviceId: string, pin: string, timeout?: number) => Promise<General.BluetoothError>"))),n.createElement("tr",null,n.createElement("td",null,"isBluetoothDevicePaired",n.createElement(o.Z,null,"2.20.1"),n.createElement(o.Z,null,"Android")),n.createElement("td",null,"\u67e5\u8be2\u84dd\u7259\u8bbe\u5907\u662f\u5426\u914d\u5bf9\uff0c\u4ec5\u5b89\u5353\u652f\u6301"),n.createElement("td",null,n.createElement("code",null,"(deviceId: string) => Promise<General.BluetoothError>"))))),n.createElement("h3",{id:"iadapter"},n.createElement(r.AnchorLink,{to:"#iadapter","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"IAdapter"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"available"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u84dd\u7259\u9002\u914d\u5668\u662f\u5426\u53ef\u7528")),n.createElement("tr",null,n.createElement("td",null,"discovering"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u662f\u5426\u6b63\u5728\u641c\u7d22\u8bbe\u5907")),n.createElement("tr",null,n.createElement("td",null,"powered"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u662f\u5426\u4e3a\u626b\u63cf\u6a21\u5f0f")))),n.createElement("h3",{id:"topenbluetoothadaptertype"},n.createElement(r.AnchorLink,{to:"#topenbluetoothadaptertype","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"TOpenBluetoothAdapterType",n.createElement(o.Z,null,"iOS")),n.createElement("p",null,"\u84dd\u7259\u6a21\u5f0f\uff0c\u53ef\u4f5c\u4e3a\u4e3b/\u4ece\u8bbe\u5907"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"central"),n.createElement("td",null,"\u4e3b\u673a\u6a21\u5f0f")),n.createElement("tr",null,n.createElement("td",null,"peripheral"),n.createElement("td",null,"\u4ece\u673a\uff08\u5916\u56f4\u8bbe\u5907\uff09\u6a21\u5f0f")))),n.createElement("h3",{id:"tpowerlevel"},n.createElement(r.AnchorLink,{to:"#tpowerlevel","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"TPowerLevel",n.createElement(o.Z,null,"Android Wechat >= 7.0.12")),n.createElement("p",null,"\u626b\u63cf\u6a21\u5f0f\uff0c\u8d8a\u9ad8\u626b\u63cf\u8d8a\u5feb\uff0c\u4e5f\u8d8a\u8017\u7535"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"low"),n.createElement("td",null,"\u4f4e")),n.createElement("tr",null,n.createElement("td",null,"medium"),n.createElement("td",null,"\u4e2d")),n.createElement("tr",null,n.createElement("td",null,"high"),n.createElement("td",null,"\u9ad8")))),n.createElement("h3",{id:"istartbluetoothdevicesdiscoveryoption"},n.createElement(r.AnchorLink,{to:"#istartbluetoothdevicesdiscoveryoption","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"IStartBluetoothDevicesDiscoveryOption"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"services"),n.createElement("td",null,n.createElement("code",null,"string[]")),n.createElement("td",null,"\u8981\u641c\u7d22\u7684\u84dd\u7259\u8bbe\u5907\u4e3b\u670d\u52a1\u7684 UUID \u5217\u8868\uff08\u652f\u6301 16/32/128 \u4f4d UUID\uff09")),n.createElement("tr",null,n.createElement("td",null,"allowDuplicatesKey"),n.createElement("td",null,n.createElement("code",null,"boolean")),n.createElement("td",null,"\u662f\u5426\u5141\u8bb8\u91cd\u590d\u4e0a\u62a5\u540c\u4e00\u8bbe\u5907")),n.createElement("tr",null,n.createElement("td",null,"interval"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u4e0a\u62a5\u8bbe\u5907\u7684\u95f4\u9694\uff0c\u5355\u4f4d ms\u30020 \u8868\u793a\u627e\u5230\u65b0\u8bbe\u5907\u7acb\u5373\u4e0a\u62a5\uff0c\u5176\u4ed6\u6570\u503c\u6839\u636e\u4f20\u5165\u7684\u95f4\u9694\u4e0a\u62a5")),n.createElement("tr",null,n.createElement("td",null,"powerLevel"),n.createElement("td",null,n.createElement("code",null,"TPowerLevel")),n.createElement("td",null,"\u626b\u63cf\u6a21\u5f0f\uff0c\u8d8a\u9ad8\u626b\u63cf\u8d8a\u5feb\uff0c\u4e5f\u8d8a\u8017\u7535\u3002\u4ec5\u5b89\u5353\u5fae\u4fe1\u5ba2\u6237\u7aef 7.0.12 \u53ca\u4ee5\u4e0a\u652f\u6301")))),n.createElement("h3",{id:"tmakebluetoothpair"},n.createElement(r.AnchorLink,{to:"#tmakebluetoothpair","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"TMakeBluetoothPair"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"deviceId"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u84dd\u7259\u8bbe\u5907 id")),n.createElement("tr",null,n.createElement("td",null,"pin"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"pin \u7801\uff0cBase64 \u683c\u5f0f\u3002")),n.createElement("tr",null,n.createElement("td",null,"timeout"),n.createElement("td",null,n.createElement("code",null,"number")),n.createElement("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d ms")))),n.createElement("h3",{id:"bluetootherror"},n.createElement(r.AnchorLink,{to:"#bluetootherror","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"BluetoothError"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u53c2\u6570"),n.createElement("th",null,"\u7c7b\u578b"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"errMsg"),n.createElement("td",null,n.createElement("code",null,"string")),n.createElement("td",null,"\u9519\u8bef\u4fe1\u606f")),n.createElement("tr",null,n.createElement("td",null,"errCode"),n.createElement("td",null,n.createElement("code",null,"keyof BluetoothErrCode")),n.createElement("td",null,"\u9519\u8bef\u7801")))),n.createElement("h3",{id:"bluetootherrcode"},n.createElement(r.AnchorLink,{to:"#bluetootherrcode","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"BluetoothErrCode"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"\u9519\u8bef\u7801"),n.createElement("th",null,"\u9519\u8bef\u4fe1\u606f"),n.createElement("th",null,"\u8bf4\u660e"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"0"),n.createElement("td",null,"ok"),n.createElement("td",null,"\u6b63\u5e38")),n.createElement("tr",null,n.createElement("td",null,"-1"),n.createElement("td",null,"already connect"),n.createElement("td",null,"\u5df2\u8fde\u63a5")),n.createElement("tr",null,n.createElement("td",null,"10000"),n.createElement("td",null,"not init"),n.createElement("td",null,"\u672a\u521d\u59cb\u5316\u84dd\u7259\u9002\u914d\u5668")),n.createElement("tr",null,n.createElement("td",null,"10001"),n.createElement("td",null,"not available"),n.createElement("td",null,"\u5f53\u524d\u84dd\u7259\u9002\u914d\u5668\u4e0d\u53ef\u7528")),n.createElement("tr",null,n.createElement("td",null,"10002"),n.createElement("td",null,"no device"),n.createElement("td",null,"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u8bbe\u5907")),n.createElement("tr",null,n.createElement("td",null,"10003"),n.createElement("td",null,"connection fail"),n.createElement("td",null,"\u8fde\u63a5\u5931\u8d25")),n.createElement("tr",null,n.createElement("td",null,"10004"),n.createElement("td",null,"no service"),n.createElement("td",null,"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u670d\u52a1")),n.createElement("tr",null,n.createElement("td",null,"10005"),n.createElement("td",null,"no characteristic"),n.createElement("td",null,"\u6ca1\u6709\u627e\u5230\u6307\u5b9a\u7279\u5f81")),n.createElement("tr",null,n.createElement("td",null,"10006"),n.createElement("td",null,"no connection"),n.createElement("td",null,"\u5f53\u524d\u8fde\u63a5\u5df2\u65ad\u5f00")),n.createElement("tr",null,n.createElement("td",null,"10007"),n.createElement("td",null,"property not support"),n.createElement("td",null,"\u5f53\u524d\u7279\u5f81\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c")),n.createElement("tr",null,n.createElement("td",null,"10008"),n.createElement("td",null,"system error"),n.createElement("td",null,"\u5176\u4f59\u6240\u6709\u7cfb\u7edf\u4e0a\u62a5\u7684\u5f02\u5e38")),n.createElement("tr",null,n.createElement("td",null,"10009"),n.createElement("td",null,"system not support"),n.createElement("td",null,"Android \u7cfb\u7edf\u7279\u6709\uff0c\u7cfb\u7edf\u7248\u672c\u4f4e\u4e8e 4.3 \u4e0d\u652f\u6301 BLE")),n.createElement("tr",null,n.createElement("td",null,"100012"),n.createElement("td",null,"operate time out"),n.createElement("td",null,"\u8fde\u63a5\u8d85\u65f6")),n.createElement("tr",null,n.createElement("td",null,"100013"),n.createElement("td",null,"invalid_data"),n.createElement("td",null,"\u8fde\u63a5 deviceId \u4e3a\u7a7a\u6216\u8005\u662f\u683c\u5f0f\u4e0d\u6b63\u786e")))),n.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},n.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),n.createElement(a.default,m.default["pages-usebluetooth"].previewerProps,n.createElement(u,null)),n.createElement("div",{className:"markdown"},n.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},n.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),n.createElement("th",{align:"center"},"H5"),n.createElement("th",{align:"center"},"ReactNative"))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{align:"center"},"\u2714\ufe0f"),n.createElement("td",{align:"center"}),n.createElement("td",{align:"center"})))),n.createElement("h2",{id:"faq"},n.createElement(r.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},n.createElement("span",{className:"icon icon-link"})),"FAQ"),n.createElement("ul",null,n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html"},"stopBluetoothDevicesDiscovery")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"},"startBluetoothDevicesDiscovery")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html"},"openBluetoothAdapter")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html"},"onBluetoothDeviceFound")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html"},"onBluetoothAdapterStateChange")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothDeviceFound.html"},"offBluetoothDeviceFound")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothAdapterStateChange.html"},"offBluetoothAdapterStateChange")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.makeBluetoothPair.html"},"makeBluetoothPair")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.isBluetoothDevicePaired.html"},"isBluetoothDevicePaired")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html"},"getConnectedBluetoothDevices")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html"},"getBluetoothDevices")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html"},"getBluetoothAdapterState")),n.createElement("li",null,n.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html"},"closeBluetoothAdapter")))))))},24758:function(e,t,l){"use strict";var n=l(67294);l(69157);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}t["Z"]=function(e){return n.createElement("span",r({className:"__dumi-default-badge"},e))}}}]);