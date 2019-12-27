
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"248",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(a)return a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";a=a.split(\"\/\")[4];return a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";a=a.split(\"\/\")[3];return a.toLowerCase()})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";if(a){var b=new RegExp(\/^GA[1-2]\\.[0-9]+\\.([0-9]+.[0-9]+)$\/);return b.exec(a)[1]}})();"]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],";if(a){var b=new RegExp(\/^(.+) cashback from (Quidco|\\.\\.\\.)$\/i);if(!0===b.test(a))return b.exec(a)[1].replace(\/\\s\/g,\"-\").toLowerCase()}else return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var referrer=",["escape",["macro",11],8,16],";var pageHostname=",["escape",["macro",12],8,16],";var pagePath=",["escape",["macro",3],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lastHistoryFragment"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var oldHistoryFragment=",["escape",["macro",14],8,16],";var newHistoryFragment=",["escape",["macro",15],8,16],";var lastHistoryFragment=",["escape",["macro",16],8,16],";if(oldHistoryFragment===newHistoryFragment)return\"true\";else if(lastUrlFragment===newHistoryFragment)return\"true\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageVirtual"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.newHistoryState.searchLocation"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var gtmEvent=",["escape",["macro",18],8,16],";var pageVirtual=",["escape",["macro",19],8,16],";var pagePath=",["escape",["macro",3],8,16],";var pageQuery=",["escape",["macro",20],8,16],";var newHistoryFragment=",["escape",["macro",15],8,16],";var historySource=",["escape",["macro",21],8,16],";var newSearchLocation=",["escape",["macro",22],8,16],";var clickText=",["escape",["macro",23],8,16],";var newSearchLocation=",["escape",["macro",22],8,16],";var searchQuery;if(newSearchLocation){var regEx_searchLocation=new RegExp(\/^https?:\\\/\\\/.+\\.quidco\\.com\\\/search\\\/?\\?search=(.+)$\/i);if(regEx_searchLocation.test(newSearchLocation)===\ntrue)searchQuery=regEx_searchLocation.exec(newSearchLocation)[1]}if(pageVirtual)return\"\/virtual\"+pageVirtual;else if(gtmEvent===\"registration\"||gtmEvent===\"authenticate\")return\"\/virtual\"+pagePath+\"#\"+gtmEvent;else if(gtmEvent===\"gtm.historyChange\"\u0026\u0026historySource===\"pushState\"\u0026\u0026newSearchLocation)return\"\/virtual\"+pagePath+\"?search\\x3d\"+searchQuery;else if(gtmEvent===\"gtm.historyChange\"\u0026\u0026pageQuery\u0026\u0026newHistoryFragment)return\"\/virtual\"+pagePath+\"?\"+pageQuery+\"#\"+newHistoryFragment;else if(gtmEvent===\"gtm.historyChange\"\u0026\u0026\nnewHistoryFragment)return\"\/virtual\"+pagePath+\"#\"+newHistoryFragment;else if(gtmEvent===\"gtm.linkClick\"\u0026\u0026pagePath===\"\/onboarding\/\"\u0026\u0026clickText===\"Finish\"||gtmEvent===\"gtm.linkClick\"\u0026\u0026pagePath===\"\/onboarding\"\u0026\u0026clickText===\"Finish\")return\"\/virtual\"+pagePath+\"#finish\";else if(pageQuery)return pagePath+\"?\"+pageQuery;else return pagePath})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":true,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";if(a)return a.toLowerCase()})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(a)return a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube(-nocookie)?\\.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__c",
      "vtp_value":"universalTracker"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){window.dataLayer.push({\"eventCategory\":undefined,\"eventAction\":undefined,\"eventLabel\":undefined,\"eventNonInteractive\":undefined,\"eventId\":undefined});var trackerName=",["escape",["macro",30],8,16],"}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"QuidcoRefUnique"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=new RegExp(\/^([0-9]+)\\-.+$\/),a=",["escape",["macro",32],8,16],";if(a\u0026\u0026!0===b.test(a))return regEx_getOutClickParts.exec(a)[1]})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",20],8,16],",a=",["escape",["macro",34],8,16],";a=a?a.replace(\"?\",\"\\x26\"):void 0;return b\u0026\u0026a?\"?\"+b+\"\\x26\"+a:b?\"?\"+b:a?\"?\"+a:\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIsLoggedIn"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",36],8,16],";a=\"null\"==a?void 0:a;if(a=null==a?void 0:a)return a=a.toString().replace(\"1\",\"true\").replace(\"0\",\"false\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"agree_to_offers"
    },{
      "function":"__j",
      "vtp_name":"navigator.doNotTrack"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"gtm_userIsRegistered"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var cookieDC_opt_out=",["escape",["macro",38],8,16],";var browserDoNotTrack=",["escape",["macro",39],8,16],";var userIsLoggedIn=",["escape",["macro",40],8,16],";return true})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 21})();"]
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=void 0,a=",["escape",["macro",43],8,16],";\"www.\"==a.substring(0,4)\u0026\u0026(a=a.substring(4,a.length));a=a.split(\".\");for(var b=1;b\u003C=a.length;b++)if(document.cookie=\"gtm_tld_testcookie\\x3d1; path\\x3d\/; domain\\x3d\"+a.slice(-1*b).join(\".\"),-1!=document.cookie.indexOf(\"gtm_tld_testcookie\")){c=a.slice(-1*b).join(\".\");document.cookie=\"gtm_tld_testcookie\\x3d1; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\/; domain\\x3d\"+a.slice(-1*b).join(\".\");break}return c})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"span.dropdown__details \u003E span:nth-child(2)",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"span.user-activity-details \u003E span:nth-child(2)",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",45],8,16],",b=",["escape",["macro",46],8,16],";a=\"null\"==a?void 0:a;b=\"null\"==b?void 0:b;if(a)return Number(a.replace(\"\\u00a3\",\"\"));if(b)return Number(b.replace(\"\\u00a3\",\"\"))})();"]
    },{
      "function":"__d",
      "vtp_elementId":"join-quidco-form",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementId":"join-quidco-landing-form",
      "vtp_selectorType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],",b=",["escape",["macro",49],8,16],";a=\"null\"==a?void 0:a;b=\"null\"==b?void 0:b;if(a||b)return\"true\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__e"
    },{
      "function":"__cid"
    },{
      "function":"__dbg"
    },{
      "function":"__j",
      "vtp_name":"window['FE-APP-HOME-CONFIGURATION'].environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",56],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","administrator","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_defaultValue":["macro",57],
      "vtp_map":["list",["map","key","development","value","true"],["map","key","staging","value","true"],["map","key","beta","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_defaultValue":["macro",58]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",59],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(^|.+\\.)((api\\-|www\\-)?(staging|beta)([0-9]+)?\\.quidco\\.com|syrupme\\.net|force\\.com|localhost|workspace|212\\.53\\.86\\.164)$","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",53],
      "vtp_defaultValue":["macro",60],
      "vtp_map":["list",["map","key","GTM-TQZTRT3","value","true"],["map","key","GTM-MVPFD3N","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"N3784.318583",
      "vtp_map":["list",["map","key","true","value","N9999.999999"]]
    },{
      "function":"__r"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"4798120",
      "vtp_map":["list",["map","key","true","value","999996"]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_customUrlSource":["macro",35],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"1789183",
      "vtp_map":["list",["map","key","true","value","9999999"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lead_number"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"quidcoUserId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"userId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",70],
      "vtp_defaultValue":["macro",70],
      "vtp_map":["list",["map","key","null","value",["macro",71]],["map","key","undefined","value",["macro",71]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"l68ug",
      "vtp_map":["list",["map","key","true","value","99999"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",18],
      "vtp_name":"gtmCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",75],
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isAutoRefresh"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",77],
      "vtp_map":["list",["map","key","1","value","true"],["map","key","0","value","false"],["map","key","true","value","true"],["map","key","false","value","false"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchant_ID"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",79],
      "vtp_defaultValue":["macro",79],
      "vtp_map":["list",["map","key","null","value",["macro",1]],["map","key","0","value",["macro",1]]]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_customUrlSource":["macro",19],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=",["escape",["macro",81],8,16],";a=b?b:a;a=a.replace(\"\/virtual\",\"\");if(\"\/\"===a)return\"home\";a=a.split(\"\/\")[1];return a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=",["escape",["macro",81],8,16],";a=b?b:a;a=a.replace(\"\/virtual\",\"\");if(\"\/\"===a)return\"home\";a=a.split(\"\/\")[2];return a.toLowerCase()})();"]
    },{
      "function":"__j",
      "vtp_name":"mixpanel_filename"
    },{
      "function":"__d",
      "vtp_elementSelector":".ppc-signed-in.padding-bottom-2\u003E.alert.alert-block.alert-success",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":".ppc-signed-in.padding-bottom-2\u003E.alert.alert-block.alert-info\u003E.alert-text\u003Espan",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var merchant_ID=",["escape",["macro",80],8,16],";var pathnameLevel1=",["escape",["macro",82],8,16],";var pathnameLevel2=",["escape",["macro",83],8,16],";var pageTitle=",["escape",["macro",9],8,16],";var pageHostname=",["escape",["macro",43],8,16],";var mixpanelFilename=",["escape",["macro",84],8,16],";var gtmEvent=",["escape",["macro",18],8,16],";var joinForm1_msg=",["escape",["macro",85],8,16],";var joinForm2_msg=",["escape",["macro",86],8,16],";var isJoinForm_nonLoggedIn=",["escape",["macro",50],8,16],";var isJoinForm_all;if(isJoinForm_nonLoggedIn==true)isJoinForm_all=\"true\";else if(joinForm1_msg===\n\"Thanks for joining Quidco\")isJoinForm_all=\"true\";else if(joinForm1_msg===\"This promotion is open to new Quidco members only. If you already have an account with us, click on the link below to start earning cashback every time you shop.\")isJoinForm_all=\"true\";var regEx_isFalsePositiveLandingPage=\/^\\\/(freego|freedompop|freedom-health-insurance|freedom-prepaid-mastercard|freedom-finance|free-people)\\\/?($|\\?.*|#.*)\/i;var regEx_isLandingPage=\/^\\\/(join-quidco|join-quidco\\\/fast|ppc.+|free.+|incentives.+|[a-zA-Z0-9_\\-]+(_co-?marketing2?|_newmember|bonus)|quidco-account-holder-agreement|.+[\\-_]([0-9]{2}-)?(jan(uary)?|feb(ruary)?|mar(ch)?|apr(il)?|may|jun(e)?|jul(y)?|aug(ust)?|sep(tember)?|oct(ober)?|nov(ember)?|dec(ember)?)(-[0-9]{2})?|[a-zA-Z]{3,9}20[0-9][0-9]_.+|just_?eat_.+|hungryhouse_.+|dominos_.+|ticketmaster-chicago|matalan-baby-15|hotelchocolatvalentineshbox|cadburyeastereggs|asda-grocery-15|boots-soap-and-glory|exclusivebonus_mse_july|gruumblackfriday13\\.50|georgeasdabonusapril|hotel-chocolat-advent|chinese-new-year-takeawayelfsuperdrugoffer|slim-fast-15|argos-10-black-friday|jd_sports_10_comark_jan18|hungryhouse-13|justeat-bluemonday-10|mac-20|superdrugpampersdecember|topshop-15|topshop-boxing-day-15|wilko-uni-supplies|fitbit-15|liverpool-fc-13-bonus17|clicksnap-minature-heroes|everything5pounds-com-10|for-good-causes-10|fplexclusivebonus13|gruum-valentines-offer|hannah_quidcopromotion|national-pizza-day-2018|nowtvkidspass|student-15|baby-12-2018|benefitfoolproofbrowgift|newsignupbenefitmascara|buyagift-fathers-day-13|exante-diet-10|fifa-18)(\\\/?($|\\?.*|#.*)|\\\/.*)\/i;\nif(pageTitle===\"Page not found\"||pageTitle===\"Page not found - Quidco | Discover\")return\"error 404\";else if(pageTitle===\"Quidco site undergoing maintenance\")return\"error 500\";else if(gtmEvent===\"registration\")return\"registration\";else if(gtmEvent===\"authenticate\")return\"authenticate\";else if(pageHostname===\"support.quidco.com\")return\"support\";else if(pageHostname===\"chat.quidco.com\")return\"chat\";else if(pathnameLevel1===\"home\"||pathnameLevel1===\"\/\")return\"home\";else if(pathnameLevel1===\"search\"||\ngtmEvent===\"Merchant Search Results Viewed\"||gtmEvent===\"segment.gtm.Merchant_Search_Results_Viewed\")return\"search\";else if(mixpanelFilename===\"merchants\")return\"category\";else if(mixpanelFilename===\"merchant\")return\"reviews\";else if(pathnameLevel2===\"write-review\")return\"write-review\";else if(mixpanelFilename===\"landing\")return\"landing\";else if(pathnameLevel1===\"join-quidco\")return\"join-quidco\";else if(isJoinForm_all==true)return\"landing\";else if(regEx_isFalsePositiveLandingPage.test(pathnameLevel1)===\ntrue)return\"product\";else if(regEx_isLandingPage.test(pathnameLevel1)===true)return\"landing\";else if(pathnameLevel1===\"visit\"||pathnameLevel1===\"mobile-visit\")return\"outclick\";else if(merchant_ID)return\"product\";else if(pathnameLevel1===\"discover\")return\"blog\";else return pathnameLevel1})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",87],
      "vtp_defaultValue":"other",
      "vtp_map":["list",["map","key","landing","value","conversionintent"],["map","key","join-quidco","value","conversionintent"],["map","key","registration","value","conversion"],["map","key","authenticate","value","conversion"],["map","key","home","value","home"],["map","key","category","value","searchresults"],["map","key","search","value","searchresults"],["map","key","product","value","product"],["map","key","reviews","value","cart"],["map","key","outclick","value","purchase"],["map","key","payments","value","other"],["map","key","refer-quidco","value","other"],["map","key","referrals","value","other"],["map","key","write-review","value","other"],["map","key","quidco-compare","value","other"],["map","key","app","value","other"],["map","key","blog","value","other"],["map","key","support","value","other"],["map","key","onboarding","value","conversion"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",37],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","true","value","true"]]
    },{
      "function":"__ctv"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"1",
      "vtp_map":["list",["map","key","true","value","0"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":["macro",0],
      "vtp_map":["list",["map","key","true","value",["macro",2]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"quidcoUserType"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"GDPR-CHECK"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"segmentAnonymousId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"UA-5946757-2",
      "vtp_map":["list",["map","key","true","value","UA-5946757-26"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_functionName":"ga2",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",78]],["map","index","2","group",["macro",88]],["map","index","3","group",["macro",87]],["map","index","4","group",["macro",89]],["map","index","5","group",["template",["macro",53],": ",["macro",90]]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","siteSpeedSampleRate","value",["macro",91]],["map","fieldName","allowLinker","value",["macro",0]],["map","fieldName","userId","value",["macro",72]],["map","fieldName","page","value",["macro",24]],["map","fieldName","anonymizeIp","value",["macro",92]],["map","fieldName","allowAdFeatures","value",["macro",41]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",78]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",72]],["map","index","4","dimension",["macro",89]],["map","index","5","dimension",["template",["macro",53],": ",["macro",90]]],["map","index","6","dimension",["macro",93]],["map","index","7","dimension",["macro",32]],["map","index","8","dimension",["macro",32]],["map","index","9","dimension",["macro",47]],["map","index","15","dimension",["macro",94]],["map","index","16","dimension",["macro",95]],["map","index","17","dimension",["macro",80]],["map","index","18","dimension",["macro",88]],["map","index","20","dimension",["macro",18]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",96],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"QuidcoRefBanner"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__d",
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"1032645171",
      "vtp_map":["list",["map","key","true","value","9999999999"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.0.merchant_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",107],
      "vtp_map":["list",["map","key","icon-primary-expand","value","icon-primary-expand"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",106],
      "vtp_defaultValue":["macro",108],
      "vtp_map":["list",["map","key","first_name_join","value","01_first_name"],["map","key","last_name_join","value","02_last_name"],["map","key","new_email_join","value","03_new_email"],["map","key","new_password_join","value","04_new_password"],["map","key","agree_to_offers","value","05_agree_to_offers"],["map","key","agree_to_terms_join","value","06_agree_to_terms"],["map","key","join-quidco-submit-button","value","07_join-quidco-submit-button"],["map","key","join-quidco-form","value","07_join-quidco-submit-button"]]
    },{
      "function":"__d",
      "vtp_elementSelector":"div.alert-text",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"awReferrer"
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_strategy"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"1755995928006035",
      "vtp_map":["list",["map","key","true","value","9999999999999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"5522584",
      "vtp_map":["list",["map","key","true","value","9999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"quidco.1.0.0",
      "vtp_map":["list",["map","key","true","value","quidco.1.0.0-stg"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchant_id_page_visit"
    },{
      "function":"__d",
      "vtp_elementId":"categoriesPage",
      "vtp_selectorType":"ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimoveRegEmail"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"10001467828717",
      "vtp_map":["list",["map","key","true","value","99999999999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"8551",
      "vtp_map":["list",["map","key","true","value","9999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"307307",
      "vtp_map":["list",["map","key","true","value","999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"Nmd9o1IW1810Cs",
      "vtp_map":["list",["map","key","true","value","99999999999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"1732",
      "vtp_map":["list",["map","key","true","value","9999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"SLoE",
      "vtp_map":["list",["map","key","true","value","9999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"18849",
      "vtp_map":["list",["map","key","true","value","99999"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",18],
      "vtp_name":"gtmAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",129],
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtmLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",131],
      "vtp_name":"label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"click_ID"
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.timerEventNumber"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",135],
      "vtp_map":["list",["map","key","1","value","30"],["map","key","2","value","60"],["map","key","3","value","90"],["map","key","4","value","120"],["map","key","5","value","150"],["map","key","6","value","180"],["map","key","7","value","210"],["map","key","8","value","240"],["map","key","9","value","270"],["map","key","10","value","300"],["map","key","11","value","330"],["map","key","12","value","360"],["map","key","13","value","390"],["map","key","14","value","420"],["map","key","15","value","450"],["map","key","16","value","480"],["map","key","17","value","510"],["map","key","18","value","540"],["map","key","19","value","570"],["map","key","20","value","600"],["map","key","21","value","630"],["map","key","22","value","660"],["map","key","23","value","690"],["map","key","24","value","720"],["map","key","25","value","750"],["map","key","26","value","780"],["map","key","27","value","810"],["map","key","28","value","840"],["map","key","29","value","870"],["map","key","30","value","900"],["map","key","31","value","930"],["map","key","32","value","960"],["map","key","33","value","990"],["map","key","34","value","1020"],["map","key","35","value","1050"],["map","key","36","value","1080"],["map","key","37","value","1110"],["map","key","38","value","1140"],["map","key","39","value","1170"],["map","key","40","value","1200"],["map","key","41","value","1230"],["map","key","42","value","1260"],["map","key","43","value","1290"],["map","key","44","value","1320"],["map","key","45","value","1350"],["map","key","46","value","1380"],["map","key","47","value","1410"],["map","key","48","value","1440"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"218",
      "vtp_map":["list",["map","key","true","value","999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"99999",
      "vtp_map":["list",["map","key","true","value","xxx"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"quidco.com",
      "vtp_map":["list",["map","key","true","value","quidco.com"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.1.merchant_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.2.merchant_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.1.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.2.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.3.merchant_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchants.3.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var h=",["escape",["macro",18],8,16],",k=new RegExp(\/^\\\/(visit\\\/|mobile-visit\\\/|visit-prep\\\/|.*outclickpage\\.html)(.*)$\/i),b=",["escape",["macro",4],8,16],",m=",["escape",["macro",87],8,16],",g=",["escape",["macro",80],8,16],",e=",["escape",["macro",9],8,16],";if(e){var a=new RegExp(\/^(.+) cashback( from |, Voucher Codes \u0026 Discount Codes \\| )(Quidco|\\.\\.\\.)$\/i);!0===a.test(e)\u0026\u0026(e=a.exec(e)[1].toLowerCase())}if(\"gtm.dom\"===h\u0026\u0026!0===k.test(b)||\"Loaded a Page\"===h\u0026\u0026!0===k.test(b)){k=",["escape",["macro",133],8,16],";var c=new RegExp(\/^\\\/(visit|mobile-visit)\\\/([0-9]+)\\\/([a-zA-Z0-9]+)?\\\/(no-cashback|cashback)\\\/?((offer|voucher)\\\/([0-9]+)\\\/?)?(iphone|android)?(.*)$\/i);\nif(!0===c.test(b)){c.exec(b);g=c.exec(b)[2];var n=c.exec(b)[3];var f=c.exec(b)[4];var l=c.exec(b)[6];var d=c.exec(b)[7];c.exec(b)}switch(n){case \"af\":a=\"Affiliate Future\";break;case \"afn\":a=\"Affilinet\";break;case \"appl\":a=\"Apple\";break;case \"awie\":a=\"Awin Ireland\";break;case \"awq\":a=\"Awin\";break;case \"bkc\":a=\"Booking.com\";break;case \"bttn\":a=\"Button\";break;case \"cj\":a=\"Commission Junction\";break;case \"clg\":a=\"Clixgalore\";break;case \"crp\":a=\"Carpetright\";break;case \"cw7\":a=\"Clickwork7\";break;case \"epn\":a=\n\"eBay Partner Network\";break;case \"grpn\":a=\"Groupon\";break;case \"ir\":a=\"Impact Radius\";break;case \"itu\":a=\"iTunes\";break;case \"ls\":a=\"Linkshare (Rakuten)\";break;case \"ma\":a=\"Market Ace\";break;case \"max\":a=\"Maxus\";break;case \"mc\":a=\"Meda Contacts\";break;case \"omg\":a=\"Optimise OMG Affiliate Network\";break;case \"ph\":a=\"Performance Horizon\";break;case \"phc\":a=\"Performance Horizon (Client)\";break;case \"phd\":a=\"PHD Media\";break;case \"por\":a=\"Paid On Results\";break;case \"qco\":a=\"Qco\";break;case \"s20\":a=\n\"Stream20\";break;case \"seopa\":a=\"Seopa\";break;case \"st\":a=\"Silvertap\";break;case \"stk\":a=\"Steak\";break;case \"sum\":a=\"Summit Media\";break;case \"tag\":a=\"The Affiliate Gateway\";break;case \"tdq\":a=\"Tradedoubler\";break;case \"tt\":a=\"Tradetracker\";break;case \"ttpl\":a=\"Tradetracker Poland\";break;case \"wg\":a=\"Webgains\";break;case \"wow\":a=\"WOW Trk\";break;case \"znxpl\":a=\"Zanox Poland\";break;case \"none\":a=\"None\";break;default:a=n}b=\"GBP\";c=\"user\"+",["escape",["macro",72],8,16],"+\"_click\"+k;var p=0;h=d;m=void 0;l=a+\"\/\"+\nf+\"\/\"+l+\"\/\"+k;k=.77;return d={ecommerce:{currencyCode:b,purchase:{actionField:{step:\"4\",option:\"outclick\",id:c,affiliation:n,revenue:p,coupon:h},products:[{id:g,name:e,category:l,brand:m,variant:f,price:k,quantity:1,coupon:d}]}}}}if(\"gtm.dom\"===h\u0026\u0026\"product\"===m||\"Loaded a Page\"===h\u0026\u0026\"product\"===m){if(d=document.querySelectorAll('script[type\\x3d\"application\/ld+json\"]')[1].textContent)d=JSON.parse(d),c=d.aggregateRating.ratingValue,p=d.aggregateRating.reviewCount;return d={ecommerce:{detail:{products:[{id:g,\nname:e,brand:",["escape",["macro",82],8,16],",ratingValue:c,reviewCount:p}]}}}}if(\"Merchant Search Results Viewed\"===h||\"segment.gtm.Merchant_Search_Results_Viewed\"===h)return d={ecommerce:{impressions:[{id:",["escape",["macro",105],8,16],",name:",["escape",["macro",142],8,16],",list:\"Search Results\",position:1},{id:",["escape",["macro",140],8,16],",name:",["escape",["macro",143],8,16],",list:\"Search Results\",position:2},{id:",["escape",["macro",141],8,16],",name:",["escape",["macro",144],8,16],",list:\"Search Results\",position:3},{id:",["escape",["macro",145],8,16],",name:",["escape",["macro",146],8,16],",\nlist:\"Search Results\",position:4}]},eventCategory:\"Online Cashback\",eventAction:\"Merchant Search Results Viewed\",eventLabel:\"Merchant\",eventValue:0,eventNonInteractive:!1};if(\"gtm.dom\"===h\u0026\u0026\"home\"===m||\"Loaded a Page\"===h\u0026\u0026\"home\"===m){d=[];c=document.querySelectorAll(\"a.segmentLink\");e=0;for(l=c.length;e\u003Cl;e+=1)f=c[e],g=f.getAttribute(\"data-merchant-name\"),g=null==g?f.getAttribute(\"data-promotion-name\"):g,b=f.getAttribute(\"data-merchant-id\"),null!=b\u0026\u0026d.push({id:b+\"_\"+f.getAttribute(\"data-promotion-id\"),\nname:g,category:\"Carousel\",list:\"Homepage\",position:f.getAttribute(\"data-position\")});g=document.querySelectorAll(\"a.offer\");e=0;for(l=g.length;e\u003Cl;e+=1)f=g[e],d.push({id:f.getAttribute(\"data-merchant-id\")+\"_\"+f.getAttribute(\"data-promotion-id\"),name:f.getAttribute(\"data-merchant-name\"),creative:f.getAttribute(\"data-promotion-name\"),category:\"Widget\",list:\"Homepage\",position:f.getAttribute(\"data-position\")});return d={ecommerce:{promoView:{promotions:d}}}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",148],
      "vtp_defaultValue":["macro",148],
      "vtp_map":["list",["map","key","progress","value",["template","progress: ",["macro",149],"%"]]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_defaultValue":"1",
      "vtp_map":["list",["map","key","true","value","0"]]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"eventAction",
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"eventCategory",
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"eventNonInteractive"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"0",
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",23],
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",26],
      "vtp_name":"network"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",101],
      "vtp_name":"opt_target"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"QuidcoRefPlacement"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"QuidcoRefTduid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_customUrlSource":["macro",35],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"merchant_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"creative"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";if(\"Promotion Clicked\"===a)return a={ecommerce:{promoClick:{promotions:[{id:",["escape",["macro",80],8,16],"+\"_\"+",["escape",["macro",163],8,16],",name:",["escape",["macro",164],8,16],",creative:",["escape",["macro",165],8,16],",position:",["escape",["macro",166],8,16],",optional_promotion_type:",["escape",["macro",167],8,16],",optional_creative:",["escape",["macro",168],8,16],"}]}},eventCategory:\"Online Cashback\",eventAction:\"Promotion Clicked\",eventLabel:\"Promotion\",eventValue:0,eventNonInteractive:!0}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",20],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.+awc=15819_.+","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"Quidco",
      "vtp_map":["list",["map","key","true","value","999999"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",61],
      "vtp_defaultValue":"RHHJX-RX581-NE7FF-7N3CP",
      "vtp_map":["list",["map","key","true","value","999999"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimoveLoggedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"\/",
      "vtp_name":"quidcoPath"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":99999999999,
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction gtm_setCookie(b,c,d){var e=",["escape",["macro",44],8,16],",a=\"\";d\u0026\u0026(a=new Date,a.setTime(a.getTime()+864E5*d),a=\"; expires\\x3d\"+a.toGMTString());b\u0026\u0026c\u0026\u0026(document.cookie=b+\"\\x3d\"+c+a+\";domain\\x3d\"+e+\";path\\x3d\/\")}var cookie_user_isRegistered=",["escape",["macro",40],8,16],",dataLayer_userID=",["escape",["macro",72],8,16],";dataLayer_userID=\"null\"==dataLayer_userID?void 0:dataLayer_userID;\"true\"!==cookie_user_isRegistered\u0026\u0026dataLayer_userID\u0026\u0026gtm_setCookie(\"gtm_userIsRegistered\",\"true\",30);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":488
    },{
      "function":"__awct",
      "priority":1,
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",42],
      "vtp_orderId":["macro",72],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",104],
      "vtp_currencyCode":"GBP",
      "vtp_conversionLabel":"jawRCJvF3AEQs9Sz7AM",
      "vtp_url":["macro",65],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":473
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/ad.doubleclick.net\/ddm\/ad\/",["escape",["macro",62],3],".AFFILIATEWINDOW.CO.\/B8922434.120847956;sz=1x1;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",63],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/ad.doubleclick.net\/ddm\/ad\/",["escape",["macro",62],3],".AFFILIATEWINDOW.CO.\/B8922434.130859116;sz=1x1;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?"],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",63],
      "tag_id":142
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":165
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":217
    },{
      "function":"__gclidw",
      "once_per_load":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":230
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"quidc0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"quidc001",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":["macro",64],
      "vtp_ordinalStandard":["macro",63],
      "vtp_url":["macro",65],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":255
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":258
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":259
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":260
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":261
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":268
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":270
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":273
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":276
    },{
      "function":"__tdlc",
      "once_per_load":true,
      "vtp_eventId":"273870",
      "vtp_orgId":["macro",68],
      "vtp_leadNumber":["macro",69],
      "tag_id":281
    },{
      "function":"__tdsc",
      "once_per_load":true,
      "vtp_eventId":"346405",
      "vtp_orderNumber":["macro",72],
      "vtp_currency":"GBP",
      "vtp_orderValue":["macro",1],
      "vtp_orgId":["macro",68],
      "tag_id":282
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":["macro",73],
      "tag_id":283
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":287
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":294
    },{
      "function":"__flc",
      "once_per_load":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"quidc0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"quidc00",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":["macro",64],
      "vtp_ordinalStandard":["macro",63],
      "vtp_url":["macro",65],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":392
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":393
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":427
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":444
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"All",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",97],
      "vtp_eventAction":"registration",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":445
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":446
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":452
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":453
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":454
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":455
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":456
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":457
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"error 404",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",97],
      "vtp_eventAction":["macro",101],
      "vtp_eventLabel":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":458
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":459
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":461
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"heartbeat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",97],
      "vtp_eventAction":"heartbeat - landing page",
      "vtp_eventLabel":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":462
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":464
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":465
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":466
    },{
      "function":"__ua",
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_trackerName":"supportTracker",
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",97],
      "vtp_trackingId":"UA-5946757-25",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":467
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":468
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":475
    },{
      "function":"__twitter_website_tag",
      "once_per_load":true,
      "vtp_event_type":"CompleteRegistration",
      "vtp_twitter_pixel_id":["macro",73],
      "vtp_event_parameters":["list",["map","param_table_key_column","value","param_table_value_column",["macro",42]],["map","param_table_key_column","num_items","param_table_value_column","1"],["map","param_table_key_column","content_name","param_table_value_column","registration"]],
      "tag_id":477
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":479
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","dynx_itemid","value",["macro",80]],["map","key","dynx_pagetype","value",["macro",88]],["map","key","userIsLoggedIn","value",["macro",89]],["map","key","userIsRegistered","value",["macro",40]],["map","key","userType","value",["macro",93]],["map","key","google_user_id","value",["macro",72]]],
      "vtp_conversionId":["macro",104],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"0OJdCIHDlYMBELPUs-wD",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":false,
      "tag_id":481
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","dynx_itemid","value",["macro",105]],["map","key","dynx_pagetype","value",["macro",88]],["map","key","userIsLoggedIn","value",["macro",89]],["map","key","userIsRegistered","value",["macro",40]],["map","key","userType","value",["macro",93]],["map","key","google_user_id","value",["macro",72]]],
      "vtp_conversionId":["macro",104],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"0OJdCIHDlYMBELPUs-wD",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":false,
      "tag_id":482
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",105]],["map","key","ecomm_pagetype","value",["macro",88]],["map","key","userIsLoggedIn","value",["macro",89]],["map","key","userIsRegistered","value",["macro",40]],["map","key","userType","value",["macro",93]],["map","key","google_user_id","value",["macro",72]]],
      "vtp_conversionId":["macro",104],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"kzv5CJSFo4MBELPUs-wD",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":false,
      "tag_id":483
    },{
      "function":"__sp",
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",105]],["map","key","ecomm_pagetype","value",["macro",88]],["map","key","userIsLoggedIn","value",["macro",89]],["map","key","userIsRegistered","value",["macro",40]],["map","key","userType","value",["macro",93]],["map","key","google_user_id","value",["macro",72]]],
      "vtp_conversionId":["macro",104],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"kzv5CJSFo4MBELPUs-wD",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",65],
      "vtp_enableRdpCheckbox":false,
      "tag_id":484
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/virtual",["macro",4],"#",["macro",109]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":489
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":490
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":491
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":492
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":493
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/virtual\/onboarding\/#\/finish"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":494
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":495
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":496
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":497
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":498
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":507
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":508
    },{
      "function":"__awj",
      "once_per_event":true,
      "vtp_merchantId":"15819",
      "tag_id":509
    },{
      "function":"__awc",
      "once_per_event":true,
      "vtp_orderRef":["macro",72],
      "vtp_merchantId":"15819",
      "vtp_testMode":false,
      "vtp_channel":["macro",112],
      "vtp_currency":"GBP",
      "vtp_orderValue":["macro",113],
      "vtp_group":"WEB_SIGNUP",
      "tag_id":510
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":512
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":513
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":514
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":515
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_orderId":["macro",72],
      "vtp_conversionValue":["macro",79],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1032645171",
      "vtp_currencyCode":"GBP",
      "vtp_conversionLabel":"1tQ0CLvJi6IBELPUs-wD",
      "vtp_url":["macro",65],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":516
    },{
      "function":"__jel",
      "tag_id":532
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer.30mins",
      "vtp_interval":"1800000",
      "vtp_limit":"48",
      "vtp_uniqueTriggerId":"8631970_149",
      "tag_id":533
    },{
      "function":"__hl",
      "tag_id":534
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_251",
      "tag_id":535
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_253",
      "tag_id":536
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_254",
      "tag_id":537
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_255",
      "tag_id":538
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_256",
      "tag_id":539
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_258",
      "tag_id":540
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_259",
      "tag_id":541
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_260",
      "tag_id":542
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_261",
      "tag_id":543
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer.30sec",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"8631970_263",
      "tag_id":544
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"8631970_264",
      "vtp_enableTriggerStartOption":true,
      "tag_id":545
    },{
      "function":"__cl",
      "tag_id":546
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"500",
      "vtp_uniqueTriggerId":"8631970_317",
      "tag_id":547
    },{
      "function":"__hl",
      "tag_id":548
    },{
      "function":"__cl",
      "tag_id":549
    },{
      "function":"__cl",
      "tag_id":550
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_434",
      "tag_id":551
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_448",
      "tag_id":552
    },{
      "function":"__cl",
      "tag_id":553
    },{
      "function":"__cl",
      "tag_id":554
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8631970_455",
      "tag_id":555
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){dataLayer.push({path:void 0,referrer:void 0,search:void 0,title:void 0,url:void 0,segmentAnonymousId:void 0,quidcoPath:void 0,search_instance_id:void 0})},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":293
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var b=",["escape",["macro",3],8,16],",a=",["escape",["macro",114],8,16],",c=",["escape",["macro",115],8,16],";a\u0026\u0026dataLayer.push({pageVirtual:b+\"?search\\x3d\"+a.toLowerCase()+\"\\x26searchStrategy\\x3d\"+c,event:\"segment.gtm.Merchant_Search_Results_Viewed\"})},2E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":310
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof fbq){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var gtmFacebookAccountId=",["escape",["macro",116],8,16],";window._fbq=window._fbq||[];fbq(\"set\",\"autoConfig\",!1,gtmFacebookAccountId);\nfbq(\"init\",gtmFacebookAccountId)}fbq(\"track\",\"PageView\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":378
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push({ec:\"registration\",ea:\"registration\",el:\"registration\",ev:",["escape",["macro",42],8,16],",gv:",["escape",["macro",42],8,16],",gc:\"GBP\"});\n(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:",["escape",["macro",117],8,16],"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":478
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof fbq){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var gtmFacebookAccountId=",["escape",["macro",116],8,16],";window._fbq=window._fbq||[];fbq(\"set\",\"autoConfig\",!1,gtmFacebookAccountId);\nfbq(\"init\",gtmFacebookAccountId)}fbq(\"track\",\"Lead\",{status:\"registration\",currency:\"GBP\",value:",["escape",["macro",42],8,16],",num_items:1,custom_param1:",["escape",["macro",40],8,16],",custom_param2:",["escape",["macro",93],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":485
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"===typeof fbq){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");var gtmFacebookAccountId=",["escape",["macro",116],8,16],";window._fbq=window._fbq||[];fbq(\"set\",\"autoConfig\",!1,gtmFacebookAccountId);\nfbq(\"init\",gtmFacebookAccountId)}var pageTitle=",["escape",["macro",9],8,16],";if(pageTitle){var regEx_productName=new RegExp(\/^(.+) cashback from (Quidco|\\.\\.\\.)$\/i);!0===regEx_productName.test(pageTitle)\u0026\u0026(pageTitle=\"Outclick to \"+regEx_productName.exec(pageTitle)[1])}fbq(\"track\",\"InitiateCheckout\",{currency:\"GBP\",content_ids:",["escape",["macro",80],8,16],",content_name:pageTitle,content_type:\"product\",value:0,content_category:",["escape",["macro",87],8,16],",num_items:1,custom_param1:",["escape",["macro",40],8,16],",custom_param2:",["escape",["macro",93],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":486
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",51],8,16],"(\"awReferrer\",",["escape",["macro",67],8,16],",void 0,\"\/\",void 0);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":511
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar optimoveSDKToken=\"6b4167cff2576e3f493a179983125092c41c4bceebd80d3686c86d273a571bb5\",optimoveSDKVersion=\"1.0.7\",optimoveSDKconfigVersion=",["escape",["macro",118],8,16],";function createOptimoveSDK(b,d){console.log(\"In createOptimoveSDK() \"+b);if(null!=b){var c=document,a=c.createElement(\"script\");c=c.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.defer=!0;a.src=b;a.onload=d;c.parentNode.insertBefore(a,c)}}\nfunction initializeOptimoveSDK(){console.log(\"In initializeOptimoveSDK()\");optimoveSDK.initialize(optimoveSDKToken,optimoveSDKconfigVersion,loadOptimoveSDKFunctions,\"info\")}function loadOptimoveSDKFunctions(b){console.log(\"In loadOptimoveSDKFunctions()  \\x3d \"+b);dataLayer.push({event:\"page_visit\"})}createOptimoveSDK(\"https:\/\/sdk-cdn.optimove.net\/websdk\/sdk-v\"+optimoveSDKVersion+\".js\",initializeOptimoveSDK);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":517
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",36],8,16],"\u0026\u0026optimoveSDK.API.setUserId(\"",["escape",["macro",70],7],"\");\nif(void 0!==",["escape",["macro",119],8,16],"){var merchant_name=",["escape",["macro",100],8,16],";merchant_name=merchant_name.replace(\" Cashback \\x26 Offers\",\"\");var link_path=\"https:\/\/www.quidco.com\"+",["escape",["macro",3],8,16],",image_path=\"https:\/\/i.cashbacksrv.com\/quidco_com\/s\/static\/uploads\/a\/img\/merchant-cover-photos\/\"+",["escape",["macro",119],8,16],"+\".jpg\",logo_name=",["escape",["macro",3],8,16],";logo_name=logo_name.replace(\/\\\/\/g,\"\");var logo_path=\"https:\/\/i.cashbacksrv.com\/quidco_com\/s\/static\/uploads\/a\/img\/merchant-150\/\"+logo_name+\".png\";\noptimoveSDK.API.reportEvent(\"merchant_details\",{merchant_name:merchant_name,link_path:link_path,image_path:image_path,logo_path:logo_path})}var category=\"\";void 0!==",["escape",["macro",120],8,16],"\u0026\u0026\"null\"!==",["escape",["macro",120],8,16],"\u0026\u0026(category=",["escape",["macro",3],8,16],",category=category.replace(\/\\\/\/g,\"\"),optimoveSDK.API.reportEvent(\"browse_details\",{url:",["escape",["macro",101],8,16],",title:",["escape",["macro",9],8,16],",category:category}));\ncategory?optimoveSDK.API.setPageVisit(",["escape",["macro",101],8,16],",",["escape",["macro",9],8,16],",category):optimoveSDK.API.setPageVisit(",["escape",["macro",101],8,16],",",["escape",["macro",9],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":518
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evoid 0!==",["escape",["macro",121],8,16],"\u0026\u0026(optimoveSDK.API.setUserId(\"",["escape",["macro",72],7],"\"),optimoveSDK.API.setUserEmail(\"",["escape",["macro",121],7],"\"),referrer=",["escape",["macro",11],8,16],",referrer.includes(\"campaign\")?optimoveSDK.API.reportEvent(\"registered\",{registration_source:\"Incentive\"}):optimoveSDK.API.reportEvent(\"registered\",{registration_source:\"Natural\"}));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":520
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"refer_a_friend\",{raf_url:\"https:\/\/www.quidco.com\/raf\/\"+",["escape",["macro",70],8,16],"+\"\/\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":522
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"raf_copy_link_clicked\",{raf_url:\"https:\/\/www.quidco.com\/raf\/\"+",["escape",["macro",70],8,16],"+\"\/\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":523
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar geotargetlybar1574677789671=document.createElement(\"script\");geotargetlybar1574677789671.setAttribute(\"type\",\"text\/javascript\");geotargetlybar1574677789671.async=1;geotargetlybar1574677789671.setAttribute(\"src\",\"\/\/geo-targetly.com\/geobar?id\\x3d-LuX62hkIwZrErroybNj\");document.getElementsByTagName(\"head\")[0].appendChild(geotargetlybar1574677789671);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":525
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"merchant_search_results_viewed\",{search_term:",["escape",["macro",114],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":526
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"cashback_reminder\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":527
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"add_to_chrome_click\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":528
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"upgrade_now_clicked\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":529
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"premium_details\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":530
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_convertJsValuesToExpressions":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EoptimoveSDK.API.reportEvent(\"merchant_clickout\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":true,
      "tag_id":531
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^\/bt-broadband\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^\/bt-mobile\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^\/(home)?\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"www.quidco.com"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^\/quidco-high-street\/how-it-works\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"registration"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/(visit|mobile-visit|visit-prep)\/(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"Page not found"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^|.+\\.)(quidco\\.com|syrupme\\.net|force\\.com|localhost|workspace|212\\.53\\.86\\.164)$",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"\/mobile-visit\/"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":".*"
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"\/visit\/"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(^|.+\\.)(comms|communication)\\.quidco\\.com$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"^email$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"^(popstate|hashchange)$"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^\\.(.+)\\.(facebook|twitter|null|undefined)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"^\/\/?join-quidco\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/\/?(join-quidco|onboarding)\/?$"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_261($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"^(gtm|segment|inline|donewith)(\\.|_)(.+)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"^(Loaded a Page|Promotion Clicked|Merchant Search Results Viewed|Merchant Visited|Merchant Clickout|search-typeahead|page-refresh|pixel-.*|ignition-one-.+|user-logged-in|transaction)$"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"authenticate"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"Promotion Clicked"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"segment.gtm.Merchant_Search_Results_Viewed"
    },{
      "function":"_ew",
      "arg0":["macro",43],
      "arg1":"quidco.com"
    },{
      "function":"_sw",
      "arg0":["macro",3],
      "arg1":"\/discover"
    },{
      "function":"_eq",
      "arg0":["macro",98],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/search\/?$"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"^(gtm\\.js|gtm\\.dom|gtm\\.load|gtm\\.historyChange)$"
    },{
      "function":"_sw",
      "arg0":["macro",99],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_258($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^|.+\\.)(play\\.google\\.com|itunes\\.apple\\.com|appworld\\.blackberry\\.com|click\\.google\\-analytics\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_255($|,)))"
    },{
      "function":"_ew",
      "arg0":["macro",28],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_259($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^|.+\\.)(quidco\\.com|syrupme\\.net|force\\.com|localhost|workspace|212\\.53\\.86\\.164)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^\/(visit|mobile-visit|visit-prep)\/(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_253($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^|.+\\.)(vimeo\\.com|youtube\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_254($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"(^|.+\\.)(facebook\\.com|twitter\\.com|reddit\\.com|linkedin\\.com|plus\\.google\\.com|flickr\\.com|pinterest\\.com|instagram\\.com|youtube\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_256($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"social"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"^(.*Page not found.*|.*Error 404.*|.*404 Page.*)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"Page not found"
    },{
      "function":"_ew",
      "arg0":["macro",43],
      "arg1":"support.quidco.com"
    },{
      "function":"_re",
      "arg0":["macro",102],
      "arg1":"^(header-searchform|cas-header-search|sign-in-page-form|facebook-form-sign-in|facebook-form-authenticate|archive-email-form)$"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"(search-input|search-bar)"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_251($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.timer.30mins"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_149($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.timer.30sec"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_263($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",99],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_260($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_264($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.click"
    },{
      "function":"_sw",
      "arg0":["macro",4],
      "arg1":"\/join-quidco"
    },{
      "function":"_re",
      "arg0":["macro",110],
      "arg1":"^(null|undefined)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/(visit\/.*|mobile-visit\/.*|visit-prep\/.*|.*outclickpage\\.html)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"^(www\\.|support\\.|comms\\.|communication\\.|chat\\.)?quidco\\.com$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/clicksnap\/app\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/onboarding\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Finish"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_317($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"reviews"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"popstate"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"\/account-selection"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/onboarding\/?$"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"div.box.premium, div.box.premium \u003E *"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"basic-vs-premium"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"div.box.basic"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"Loaded a Page"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"Merchant Visited"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/(visit|mobile-visit|visit-prep)\/(.*)"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"^(Loaded a Page|Merchant Search Results Viewed)$"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"Merchant Search Results Viewed"
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"page_visit"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/refer-quidco\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"raf-copy-button"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_434($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/search\/?$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/cashback-reminder\/?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"https:\/\/chrome.google.com\/webstore\/detail\/quidco-cashback-reminder\/offafgdgnliocofjjiohlpjpenbogkbl"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_448($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"upgrade-account-button"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Upgrade now"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^\/premium\/?$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"\/visit\/"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"I understand, visit retailer"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"(^$|((^|,)8631970_455($|,)))"
    }],
  "rules":[
    [["if",0,1],["add",2]],
    [["if",1,2],["add",3]],
    [["if",3,4,5],["add",4]],
    [["if",5],["add",5,6,9,11,13,19,20,27,95]],
    [["if",1],["add",7,14,60,62,65,66,0,100,105,69,71,82,83,85,86,87,88,89,90,91,92]],
    [["if",1,6],["add",8]],
    [["if",7],["add",10,12,15,17,18,22,23,26,27,1,43,44,61,63,64,96,97],["block",25,62]],
    [["if",5,8,10],["unless",9],["add",16,98]],
    [["if",16,20],["unless",17,18,19],["add",21,27]],
    [["if",21,23,24],["unless",22],["add",24]],
    [["if",12],["unless",25,26],["add",25]],
    [["if",30],["add",27]],
    [["if",23,36,37],["add",28]],
    [["if",23,38,39],["add",29],["block",31]],
    [["if",23,40,41],["add",30]],
    [["if",23,44],["unless",42,43],["add",31]],
    [["if",49],["add",32,40]],
    [["if",23,47,48],["add",32,40],["block",31]],
    [["if",23,45,46],["add",33],["block",31]],
    [["if",1,50],["add",34]],
    [["if",1,51,52],["add",34]],
    [["if",55,56],["unless",53,54],["add",35]],
    [["if",57,58],["add",36]],
    [["if",59,60],["add",37]],
    [["if",23,61,62],["add",38]],
    [["if",63,64,65],["add",39]],
    [["if",5,52],["add",41]],
    [["if",66],["add",42]],
    [["if",5],["unless",33],["add",45],["block",27]],
    [["if",5],["unless",67],["add",46]],
    [["if",30],["unless",67],["add",47]],
    [["if",5,68],["unless",67],["add",47],["block",46]],
    [["if",5,67],["add",48]],
    [["if",30,67],["add",49],["block",48]],
    [["if",5,67,68],["add",49],["block",48]],
    [["if",70,71],["unless",69],["add",50]],
    [["if",72,74],["unless",73],["add",51]],
    [["if",29],["add",52],["block",25]],
    [["if",5,75],["add",53]],
    [["if",5,77],["add",54]],
    [["if",23,78,79,80],["add",55]],
    [["if",1,70],["add",56]],
    [["if",5,81],["add",57]],
    [["if",20,82,83,84],["add",58]],
    [["if",71,84,85,86],["add",58]],
    [["if",1,84],["add",58]],
    [["if",71,84,86,87],["add",59]],
    [["if",88],["add",67,0]],
    [["if",89],["add",68]],
    [["if",1,90],["add",70,72]],
    [["if",1],["unless",91],["add",73,74,75,76,77,78,79,80]],
    [["if",1],["unless",10],["add",81]],
    [["if",1,78],["add",84]],
    [["if",92],["add",93]],
    [["if",94],["add",94]],
    [["if",1],["unless",95],["add",99]],
    [["if",96],["add",101,102]],
    [["if",96,97],["add",103]],
    [["if",23,98,99],["add",104]],
    [["if",96,100],["add",106]],
    [["if",96,101],["add",107]],
    [["if",23,102,103],["add",108]],
    [["if",71,104],["add",109]],
    [["if",71,105],["add",109]],
    [["if",96,106],["add",110]],
    [["if",23,107,109],["unless",108],["add",111]],
    [["if",11,12],["block",16,27,45,98]],
    [["if",12,13,14],["block",16,27,45,98]],
    [["if",12,13,15],["block",16,27,45,98]],
    [["if",27],["block",25]],
    [["if",28],["block",25]],
    [["if",5,31,32],["block",27,45]],
    [["if",8,12],["unless",10],["block",27,45]],
    [["if",34,35],["block",27]],
    [["if",12],["unless",72],["block",50]],
    [["if",12,76],["block",53,54,56,57]],
    [["if",12,93],["block",93]]]
},
"runtime":[
[],[]
]



};
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={sf:!0},ia={};try{ia.__proto__=ha;fa=ia.sf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},t=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};xa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},C=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;Qa[3]=function(a){return String(a).replace(Ta,Sa)};var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Jc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Uf(d,k))}catch(y){b.he&&b.he(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.zb);d.push(q)}return xb&&m?xb.Xf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.Dg(a))return xb.Og(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Wd:a[2],
index:p};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Fb(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{ld:a("convert_case_to"),md:a("convert_false_to"),nd:a("convert_null_to"),od:a("convert_true_to"),pd:a("convert_undefined_to"),uh:a("debug_mode_metadata"),ma:a("function"),ff:a("instance_name"),hf:a("live_only"),jf:a("malware_disabled"),kf:a("metadata"),wh:a("original_vendor_template_id"),lf:a("once_per_event"),Jd:a("once_per_load"),Kd:a("setup_tags"),Ld:a("tag_id"),Md:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,Zb=navigator,$b=F.currentScript&&F.currentScript.src,ac=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},bc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},cc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;bc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var g=la.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},dc=function(){if($b){var a=$b.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);bc(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var sc=F.querySelectorAll(":root");sc&&1==sc.length&&sc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var H={la:"_ee",gc:"event_callback",Ra:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",oc:"restricted_data_processing",U:"cookie_expires",Qa:"cookie_update",Ba:"session_duration",V:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Ea(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.m="GTM-MVPFD3N";Nc.Db="c61";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.m+"&cv=248",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},I=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var cd=function(){return"&tc="+sb.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.Fg()||0>=md--?(I("GTM",1),kd[gd]=!0):(ld.Zg(),fc(nd()),hd[gd]=!0,od=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[pd,hd[a]?"":"&es=1",qd[a],b?"&u="+b:"",c?"&ut="+c:"",cd(),id,jd,od,"&z=0"].join("")},rd=function(){return[Wc,"&v=3&t=t","&pid="+
wa(),"&rv="+Nc.Db].join("")},sd="0.005000">Math.random(),pd=rd(),td=function(){pd=rd()},hd={},id="",jd="",od="",gd=void 0,qd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{Fg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Zg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),md=1E3,ud=function(a,b){if(sd&&!kd[a]&&gd!==a){ed();gd=a;id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";qd[a]="&e="+c+"&eid="+a;fd()}},vd=function(a,b,c){if(sd&&!kd[a]&&b){a!==gd&&
(ed(),gd=a);var d=String(b[Gb.ma]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;id=id?id+"."+e:"&tr="+e;fd();2022<=nd().length&&ed()}},wd=function(a,b,c){if(sd&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var xd={},yd=new xa,zd={},Ad={},Dd={name:"dataLayer",set:function(a,b){C(La(a,b),zd);Bd()},get:function(a){return Cd(a,2)},reset:function(){yd=new xa;zd={};Bd()}},Cd=function(a,b){if(2!=b){var c=yd.get(a);if(sd){var d=Ed(a);c!==d&&I("GTM",5)}return c}return Ed(a)},Ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Gd(d)},Gd=function(a){for(var b=zd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Id=function(a,b){Ad.hasOwnProperty(a)||(yd.set(a,b),C(La(a,b),zd),Bd())},Bd=function(a){za(Ad,function(b,c){yd.set(b,c);C(La(b,void 0),zd);C(La(b,c),zd);a&&delete Ad[b]})},Jd=function(a,b,c){xd[a]=xd[a]||{};var d=1!==c?Ed(b):yd.get(b);"array"===Na(d)||"object"===Na(d)?xd[a][b]=C(d):xd[a][b]=d},Kd=function(a,b){if(xd[a])return xd[a][b]};var Ld=function(){var a=!1;return a};var P=function(a,b,c,d){return(2===Md()||d||"http:"!=D.location.protocol?a:b)+c},Md=function(){var a=dc(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var ae=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),be={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ce={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},de="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fe=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Cd("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),be),d=Cd("gtm.blacklist");d||(d=Cd("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];ee()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=t(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),ce),g={};return function(h){var k=h&&h[Gb.ma];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>t(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>t(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=t(e,k);if(p)u=p;else{var r=ya(e,l||[]);r&&I("GTM",10);u=r}}var v=!m||u;v||!(0<=t(l,"sandboxedScripts"))||c&&-1!==t(c,"sandboxedScripts")||(v=ya(e,de));return g[k]=v}},ee=function(){return ae.test(D.location&&D.location.hostname)};var ge={Uf:function(a,b){b[Gb.ld]&&"string"===typeof a&&(a=1==b[Gb.ld]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.nd)&&null===a&&(a=b[Gb.nd]);b.hasOwnProperty(Gb.pd)&&void 0===a&&(a=b[Gb.pd]);b.hasOwnProperty(Gb.od)&&!0===a&&(a=b[Gb.od]);b.hasOwnProperty(Gb.md)&&!1===a&&(a=b[Gb.md]);return a}};var he={active:!0,isWhitelisted:function(){return!0}},ie=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var je=function(){};var ke=!1,le=0,me=[];function ne(a){if(!ke){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ke=!0;for(var e=0;e<me.length;e++)G(me[e])}me.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function oe(){if(!ke&&140>le){le++;try{F.documentElement.doScroll("left"),ne()}catch(a){D.setTimeout(oe,50)}}}var pe=function(a){ke?a():me.push(a)};var qe={},re={},se=function(a,b,c,d){if(!re[a]||Qc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return re[a].tags.push(e)-1},te=function(a,b,c,d){if(re[a]){var e=re[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ue(a){for(var b=qe[a]||[],c=0;c<b.length;c++)b[c]();qe[a]={push:function(d){d(Nc.m,re[a])}}}
var xe=function(a,b,c){re[a]={tags:[]};qa(b)&&ve(a,b);c&&D.setTimeout(function(){return ue(a)},Number(c));return we(a)},ve=function(a,b){qe[a]=qe[a]||[];qe[a].push(Ha(function(){return G(function(){b(Nc.m,re[a])})}))};function we(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&ue(a)})},Ef:function(){d=!0;b>=c&&ue(a)}}};var ye=function(){function a(d){return!ra(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Dd.get("gtm.start"))?Dd.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var Ce=!1,De=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ee=!1;
var Fe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ye();return D[b]},Ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=De();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ie=function(){},He=function(){return D.GoogleAnalyticsObject||"ga"};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Le=/:[0-9]+$/,Me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ne(a.protocol)||Ne(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Le,"").toLowerCase());var g=b,h,k=Ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=t(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ne=function(a){return a?a.replace(":","").toLowerCase():""},Oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ve(a,b,c,d){var e=sb[a],g=We(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Kd],c,[]);if(h&&h.length){var k=h[0];g=Ve(k.index,{s:g,o:1===k.Wd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function We(a,b,c,d){function e(){if(g[Gb.jf])k();else{var w=Cb(g,c,[]),y=se(c.id,String(g[Gb.ma]),Number(g[Gb.Ld]),w[Gb.kf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"5");te(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"6");te(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;vd(c.id,g,"1");var z=function(){var A=Fa()-B;vd(c.id,g,"7");te(c.id,y,"exception",A);x||(x=!0,k())};var B=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=sb[a],h=b.s,k=b.o,l=b.terminate;if(c.Jc(g))return null;var m=Bb(g[Gb.Md],c,[]);if(m&&m.length){var n=m[0],q=Ve(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Wd?l:q}if(g[Gb.Jd]||g[Gb.lf]){var u=g[Gb.Jd]?ub:c.ih,p=h,r=k;if(!u[a]){e=Ha(e);var v=Xe(a,u,e);h=v.s;k=v.o}return function(){u[a](p,r)}}return e}
function Xe(a,b,c){var d=[],e=[];b[a]=Ye(d,e,c);return{s:function(){b[a]=Ze;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=$e;for(var g=0;g<e.length;g++)e[g]()}}}function Ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ze(a){a()}function $e(a,b){b()};var cf=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.kb[d]){var e=sb[d];var g=b.add();try{var h=Ve(d,{s:g,o:g,terminate:g},a,d);h?c.push({ze:d,oe:Db(e),eg:h}):(af(d,a),g())}catch(l){g()}}b.Ef();c.sort(bf);for(var k=0;k<c.length;k++)c[k].eg();return 0<c.length};function bf(a,b){var c,d=b.oe,e=a.oe;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ze,k=b.ze;g=h>k?1:h<k?-1:0}return g}
function af(a,b){if(!sd)return;var c=function(d){var e=b.Jc(sb[d])?"3":"4",g=Bb(sb[d][Gb.Kd],b,[]);g&&g.length&&c(g[0].index);vd(b.id,sb[d],e);var h=Bb(sb[d][Gb.Md],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var df=!1,ef=function(a,b,c,d,e){if("gtm.js"==b){if(df)return!1;df=!0}ud(a,b);var g=xe(a,d,e);Jd(a,"event",1);Jd(a,"ecommerce",1);Jd(a,"gtm");var h={id:a,name:b,Jc:fe(c),kb:[],ih:[],he:function(){I("GTM",6)}};h.kb=Kb(h);var k=cf(h,g);
if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=sb[l];if(m&&!Qc[String(m[Gb.ma])])return!0}return!1};var gf=/^https?:\/\/www\.googletagmanager\.com/;function hf(){var a;return a}function kf(a,b){}
function jf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function lf(){var a=!1;return a};var mf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.Ma={};this.globalConfig={};this.s=function(){};this.o=function(){}},nf=function(a){var b=new mf;b.eventModel=a;return b},of=function(a,b){a.targetConfig=b;return a},pf=function(a,b){a.containerConfig=b;return a},qf=function(a,b){a.Ma=b;return a},rf=function(a,b){a.globalConfig=b;return a},sf=function(a,b){a.s=b;return a},tf=function(a,b){a.o=b;return a};
mf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.Ma[a])return this.Ma[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var uf=function(a){function b(e){za(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var vf={},wf=["G"];vf.Be="";var xf=vf.Be.split(",");function yf(){var a=Oc;return a.gcq=a.gcq||new zf}
var Af=function(a,b,c){yf().register(a,b,c)},Bf=function(a,b,c,d){yf().push("event",[b,a],c,d)},Cf=function(a,b){yf().push("config",[a],b)},Df={},Ef=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Ma={};this.pe=null;this.ae=!1},Ff=function(a,b,c,d,e){this.type=a;this.Ae=b;this.L=c||"";this.Hb=d;this.defer=e},zf=function(){this.Sd={};this.$d={};this.eb=[]},Gf=function(a,b){var c=Kc(b);return a.Sd[c.containerId]=a.Sd[c.containerId]||new Ef},Hf=function(a,b,c,d){if(d.L){var e=
Gf(a,d.L),g=e.pe;if(g){var h=C(c),k=C(e.targetConfig[d.L]),l=C(e.containerConfig),m=C(e.Ma),n=C(a.$d),q=Cd("gtm.uniqueEventId"),u=Kc(d.L).prefix,p=tf(sf(rf(qf(pf(of(nf(h),k),l),m),n),function(){wd(q,u,"2");}),function(){wd(q,u,"3");});try{wd(q,u,"1");3===g.length?g(b,d.Ae,p):4===g.length&&
g(d.L,b,d.Ae,p)}catch(r){wd(q,u,"4");}}}};
zf.prototype.register=function(a,b,c){if(3!==Gf(this,a).status){Gf(this,a).pe=b;Gf(this,a).status=3;c&&(Gf(this,a).Ma=c);var d=Kc(a),e=Df[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Cd("gtm.uniqueEventId"),l=h,m=Fa()-g;if(sd&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);od=od?od+","+n:"&cl="+n}delete Df[d.containerId]}this.flush()}};
zf.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Gf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Gf(this,c).status=2,this.push("require",[],g.containerId),Df[g.containerId]=Fa(),!Ld())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";cc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.eb.push(new Ff(a,e,c,b,d));d||this.flush()};
zf.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==Gf(this,c.L).status&&!a)return;break;case "set":za(c.Hb[0],function(l,m){C(La(l,m),b.$d)});break;case "config":var d=c.Hb[0],e=!!d[H.yb];delete d[H.yb];var g=Gf(this,c.L),h=Kc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.ae&&e||Hf(this,H.w,d,c);g.ae=!0;delete d[H.la];k?C(d,g.containerConfig):C(d,g.targetConfig[c.L]);
break;case "event":Hf(this,c.Hb[1],c.Hb[0],c)}this.eb.shift()}};var If=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Lf=function(a,b,c,d){var e=Jf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Kf(e,function(g){return g.Mb},b);if(1===e.length)return e[0].id;e=Kf(e,function(g){return g.lb},c);return e[0]?e[0].id:void 0}};
function Mf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=If(b,e).indexOf(c)}
var Qf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(u=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Nf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Pf(y,u)&&Mf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Pf(q,u)&&Mf(m,a,l)}return k};function Kf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Jf(a,b){for(var c=[],d=If(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Mb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var Rf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Sf=/(^|\.)doubleclick\.net$/i,Pf=function(a,b){return Sf.test(document.location.hostname)||"/"===b&&Rf.test(a)},Nf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Sf.test(e)||Rf.test(e)||a.push("none");return a};var Tf="".split(/,/),Uf=!1;var Vf=null,Wf={},Xf={},Yf;function Zf(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.gc]&&(c.eventCallback=b[H.gc]),b[H.Ra]&&(c.eventTimeout=b[H.Ra]));return c}
var eg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Zf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Ih().Ah(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=
C(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},fg={policy:!0};var gg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ig=function(a){var b=hg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pg=function(a){if(og(a))return a;this.ph=a};pg.prototype.lg=function(){return this.ph};var og=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};pg.prototype.getUntrustedUpdateValue=pg.prototype.lg;var qg=!1,rg=[];function sg(){if(!qg){qg=!0;for(var a=0;a<rg.length;a++)G(rg[a])}}var tg=function(a){qg?G(a):rg.push(a)};var ug=[],vg=!1,wg=function(a){return D["dataLayer"].push(a)},xg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function yg(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&Id(g,void 0),Id(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Id("gtm.uniqueEventId",d));Vc=c;var e=zg(a);Vc=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function zg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.m,c):he;return d.active?ef(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Ag(){for(var a=!1;!vg&&0<ug.length;){vg=!0;delete zd.eventModel;Bd();var b=ug.shift();if(null!=b){var c=og(b);if(c){var d=b;b=og(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Cd(h,1);if(ua(k)||Pa(k))k=C(k);Ad[h]=k}}try{if(qa(b))try{b.call(Dd)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Cd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var r=eg[b[0]];if(r&&(!c||!fg[b[0]])){b=r(b);break a}}b=void 0}if(!b){vg=!1;continue}}a=yg(b)||a}}finally{c&&Bd(!0)}}vg=!1}
return!a}function Bg(){var a=Ag();try{gg(D["dataLayer"],Nc.m)}catch(b){}return a}
var Dg=function(){var a=ac("dataLayer",[]),b=ac("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});tg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new pg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ug.push.apply(ug,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ag()&&h};ug.push.apply(ug,a.slice(0));Cg()&&G(Bg)},Cg=function(){var a=!0;return a};var Eg={};Eg.zb=new String("undefined");
var Fg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Eg.zb?b:a[d]);return c.join("")}};Fg.prototype.toString=function(){return this.resolve("undefined")};Fg.prototype.valueOf=Fg.prototype.toString;Eg.qf=Fg;Eg.wc={};Eg.Xf=function(a){return new Fg(a)};var Gg={};Eg.$g=function(a,b){var c=Zc();Gg[c]=[a,b];return c};Eg.Td=function(a){var b=a?0:1;return function(c){var d=Gg[c];if(d&&"function"===typeof d[b])d[b]();Gg[c]=void 0}};Eg.Dg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Eg.Og=function(a){if(a===Eg.zb)return a;var b=Zc();Eg.wc[b]=a;return'google_tag_manager["'+Nc.m+'"].macro('+b+")"};Eg.Hg=function(a,b,c){a instanceof Eg.qf&&(a=a.resolve(Eg.$g(b,c)),b=pa);return{Hc:a,s:b}};var Hg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ig=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Jg=function(a,b,c){Ig(a)[b]=c},Kg=function(a,b,c,d){var e=Ig(a),g=Ga(e,b,d);e[b]=c(g)},Lg=function(a,b,c){var d=Ig(a);return Ga(d,b,c)};var Mg=function(){for(var a=Zb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Pg=function(a,b,c,d){var e=Ng(b);return Lf(a,e,Og(c),d)},Qg=function(a,b,c,d){var e=""+Ng(c),g=Og(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Ng=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Og=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Rg=["1"],Sg={},Wg=function(a,b,c,d){var e=Tg(a);Sg[e]||Ug(e,b,c)||(Vg(e,Mg(),b,c,d),Ug(e,b,c))};function Vg(a,b,c,d,e){var g=Qg(b,"1",d,c);Qf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function Ug(a,b,c){var d=Pg(a,b,c,Rg);d&&(Sg[a]=d);return d}function Tg(a){return(a||"_gcl")+"_au"};var Xg=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({cd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].cd]||(g[a[h].cd]=[]),g[a[h].cd].push({timestamp:k[1],ig:k[2]}))}return g};function Yg(){for(var a=Zg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function $g(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Zg,ah;function bh(a){Zg=Zg||$g();ah=ah||Yg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Zg[l],Zg[m],Zg[n],Zg[q])}return b.join("")}
function ch(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ah[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Zg=Zg||$g();ah=ah||Yg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var dh;function eh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ih=function(){var a=fh,b=gh,c=hh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){gc(F,"mousedown",d);gc(F,"keyup",d);gc(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},hh=function(){var a=ac("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var jh=/(.*?)\*(.*?)\*(.*)/,kh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,lh=/^(?:www\.|m\.|amp\.)+/,mh=/([^?#]+)(\?[^#]*)?(#.*)?/,nh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ph=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(bh(String(d))))}var e=b.join("*");return["1",oh(e),e].join("*")},oh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=dh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}dh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^dh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},rh=function(){return function(a){var b=Qe(D.location.href),c=b.search.replace("?",""),d=Me(c,"_gl",!0)||"";a.query=qh(d)||{};var e=Pe(b,"fragment").match(nh);a.fragment=qh(e&&e[3]||
"")||{}}},sh=function(){var a=rh(),b=hh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},qh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=jh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===oh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ch(u[p+1]);return q}}}}catch(r){}};
function th(a,b,c){function d(m){var n=m,q=nh.exec(n),u=n;if(q){var p=q[2],r=q[4];u=q[1];r&&(u=u+p+r)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=mh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function uh(a,b,c){for(var d={},e={},g=hh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&eh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=ph(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=F.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=th(l,a.action);Ke.test(v)&&(a.action=v)}}}else vh(l,a,!1)}if(!c&&Ja(e)){var w=ph(e);vh(w,a,!0)}}function vh(a,b,c){if(b.href){var d=th(a,b.href,void 0===c?!1:c);Ke.test(d)&&(b.href=d)}}
var fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||uh(e,e.hostname,!1)}}catch(h){}},gh=function(a){try{if(a.action){var b=Pe(Qe(a.action),"host");uh(a,b,!0)}}catch(c){}},wh=function(a,b,c,d){ih();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};hh().decorators.push(e)},xh=function(){var a=F.location.hostname,b=kh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(lh,""),l=e.replace(lh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yh=function(a,b){return!1===a?!1:a||b||xh()};var zh={};var Ah=/^\w+$/,Bh=/^[\w-]+$/,Ch=/^~?[\w-]+$/,Dh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Eh(a){return a&&"string"==typeof a&&a.match(Ah)?a:"_gcl"}var Gh=function(){var a=Qe(D.location.href),b=Pe(a,"query",!1,void 0,"gclid"),c=Pe(a,"query",!1,void 0,"gclsrc"),d=Pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Me(e,"gclid",void 0);c=c||Me(e,"gclsrc",void 0)}return Fh(b,c,d)};
function Fh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Bh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==zh.gtm_3pds?0:zh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Ih=function(a){var b=Gh();Hh(b,a)};
function Hh(a,b,c){function d(q,u){var p=Jh(q,e);p&&Qf(p,u,h,g,l,!0)}b=b||{};var e=Eh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Yh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Lh=function(a,b,c,d,e){for(var g=sh(),h=Eh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Dh[l]){var m=Jh(l,h),n=g[m];if(n){var q=Math.min(Kh(n),Fa()),u;b:{for(var p=q,r=If(m,F.cookie),v=0;v<r.length;++v)if(Kh(r[v])>p){u=!0;break b}u=!1}u||Qf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Hh(Fh(g.gclid,g.gclsrc),w)},Jh=function(a,b){var c=Dh[a];if(void 0!==c)return b+c},Kh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Nh=function(a,b,c,d,e){if(ua(b)){var g=Eh(e);wh(function(){for(var h={},k=0;k<a.length;++k){var l=Jh(a[k],g);if(l){var m=If(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Oh=function(a){return a.filter(function(b){return Ch.test(b)})},Ph=function(a,b){for(var c=Eh(b&&b.prefix),d={},e=0;e<a.length;e++)Dh[a[e]]&&(d[a[e]]=Dh[a[e]]);za(d,function(g,h){var k=If(c+h,F.cookie);if(k.length){var l=k[0],m=Kh(l),n={};n[g]=[Mh(l)];Hh(n,b,m)}})};var Qh=/^\d+\.fls\.doubleclick\.net$/;function Rh(a){var b=Qe(D.location.href),c=Pe(b,"host",!1);if(c&&c.match(Qh)){var d=Pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Sh(a,b){if("aw"==a||"dc"==a){var c=Rh("gcl"+a);if(c)return c.split(".")}var d=Eh(b);if("_gcl"==d){var e;e=Gh()[a]||[];if(0<e.length)return e}var g=Jh(a,d),h;if(g){var k=[];if(F.cookie){var l=If(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Mh(l[m]);n&&-1===t(k,n)&&k.push(n)}h=Oh(k)}else h=k}else h=k}else h=[];return h}
var Th=function(){var a=Rh("gac");if(a)return decodeURIComponent(a);var b=Xg(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].ig);g=Oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Uh=function(a,b,c,d,e){Wg(b,c,d,e);var g=Sg[Tg(b)],h=Gh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Zb.sendBeacon&&Zb.sendBeacon(u)||fc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Tg(b),r=Sg[p];r&&Vg(p,r,c,d,e)}};var Vh;if(3===Nc.Db.length)Vh="g";else{var Wh="G";Vh=Wh}
var Xh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vh,OPT:"o"},Yh=function(a){var b=Nc.m.split("-"),c=b[0].toUpperCase(),d=Xh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.Db.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.Db+e};
var Zh=function(a){return!(void 0===a||null===a||0===(a+"").length)},$h=function(a,b){var c;if(2===b.S)return a("ord",wa(1E11,1E13)),!0;if(3===b.S)return a("ord","1"),a("num",wa(1E11,1E13)),!0;if(4===b.S)return Zh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.S)c="1";else if(6===b.S)c=b.Xc;else return!1;Zh(c)&&a("qty",c);Zh(b.Jb)&&a("cost",b.Jb);Zh(b.transactionId)&&a("ord",b.transactionId);return!0},ai=encodeURIComponent,bi=function(a,b){function c(n,q,u){g.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:ai(q)))}var d=a.Ec,e=a.protocol;e+=a.Vb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+ai(d)+(";type="+ai(a.Gc))+(";cat="+ai(a.cb));var g=a.Zf||{};za(g,function(n,q){e+=";"+ai(n)+"="+ai(q+"")});if($h(c,a)){Zh(a.bc)&&c("u",a.bc);Zh(a.ac)&&c("tran",a.ac);c("gtm",Yh());!1===a.Af&&c("npa","1");if(a.Cc){var h=Sh("dc",a.Ea);h&&h.length&&c("gcldc",h.join("."));var k=Sh("aw",a.Ea);k&&k.length&&c("gclaw",k.join("."));var l=Th();l&&c("gac",l);Wg(a.Ea,void 0,a.Vf,a.Wf);
var m=Sg[Tg(a.Ea)];m&&c("auiddc",m)}Zh(a.Tc)&&c("prd",a.Tc,!0);za(a.ed,function(n,q){c(n,q)});e+=b||"";Zh(a.Tb)&&c("~oref",a.Tb);a.Vb?ec(e+"?",a.s):fc(e+"?",a.s,a.o)}else G(a.o)};var ci=["input","select","textarea"],di=["button","hidden","image","reset","submit"],ei=function(a){var b=a.tagName.toLowerCase();return!va(ci,function(c){return c===b})||"input"===b&&va(di,function(c){return c===a.type.toLowerCase()})?!1:!0},fi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},gi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ei(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ji=!!D.MutationObserver,ki=void 0,li=function(a){if(!ki){var b=function(){var c=F.body;if(c)if(ji)(new MutationObserver(function(){for(var e=0;e<ki.length;e++)G(ki[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ki.length;e++)G(ki[e])}))})}};ki=[];F.body?b():G(b)}ki.push(a)};
var wi=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Gi=function(a,b,c){function d(){var h=a();g+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,g=0;return{Nb:function(h,k,l){var m=a(),n=m.Ud,q=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Ud*k):Math.round(m.Yf),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(q/n*100),p=F.hidden?!1:.5<=xi(c);d();var r=Hg(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(q);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=u;r["gtm.videoVisible"]=p;wg(r)},bh:function(){e=Fa()},xc:function(){d()}}};var Hi=D.clearTimeout,Ii=D.setTimeout,T=function(a,b,c){if(Ld()){b&&G(b)}else return cc(a,b,c)},Ji=function(){return D.location.href},Ki=function(a){return Pe(Qe(a),"fragment")},Li=function(a){return Oe(Qe(a))},V=function(a,b){return Cd(a,b||2)},Mi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return wg(a)},Ni=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
Oi=function(a,b,c){return If(a,b,void 0===c?!0:!!c)},Pi=function(a,b){if(Ld()){b&&G(b)}else ec(a,b)},Qi=function(a){return!!Lg(a,"init",!1)},Ri=function(a){Jg(a,"init",!0)},Si=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(P("https://","http://",c))},Ti=function(a,b){var c=a[b];return c};
var Ui=Eg.Hg;var Vi;var rj=new xa;function sj(a,b){function c(h){var k=Qe(h),l=Pe(k,"protocol"),m=Pe(k,"host",!0),n=Pe(k,"port"),q=Pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function tj(a){return uj(a)?1:0}
function uj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(tj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,r=rj.get(p);r||(r=new RegExp(c,u),rj.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return sj(b,
c)}return!1};var vj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var wj={},xj=encodeURI,X=encodeURIComponent,yj=fc;var zj=function(a,b){if(!a)return!1;var c=Pe(Qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Aj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};wj.Eg=function(){var a=!1;return a};var Kk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Vk=window,Wk=document,Xk=function(a){var b=Vk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vk["ga-disable-"+a])return!0;try{var c=Vk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=If("AMP_TOKEN",Wk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Wk.getElementById("__gaOptOutExtension")?!0:!1};function $k(a){return"_"===a.charAt(0)}var al=function(a){za(a,function(c){$k(c)&&delete a[c]});var b=a[H.V]||{};za(b,function(c){$k(c)&&delete b[c]})};var el=function(a,b,c){Bf(b,c,a)},fl=function(a,b,c){Bf(b,c,a,!0)},hl=function(a,b){};
function gl(a,b){}var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.b="ctv";Y.__ctv.g=!0;Y.__ctv.priorityOverride=0})(function(){return"248"})}();

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;bi(b,c)}(function(b){Y.__flc=b;Y.__flc.b="flc";Y.__flc.g=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Aj(b.vtp_customVariable||[],"key","value")||{},e={cb:b.vtp_activityTag,Cc:c,Ea:b.vtp_conversionCookiePrefix||void 0,Jb:void 0,S:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Ec:b.vtp_advertiserId,Gc:b.vtp_groupTag,o:b.vtp_gtmOnFailure,s:b.vtp_gtmOnSuccess,
Tb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Xc:void 0,Vb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,ac:b.vtp_transactionVariable,transactionId:void 0,bc:b.vtp_userVariable,ed:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Aj(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.sp=["google"],function(){(function(a){Y.__sp=a;Y.__sp.b="sp";Y.__sp.g=!0;Y.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;ye();T(b,function(){var d=W("google_trackConversion");if(qa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=Aj(a.vtp_customParams,
"key","value"));var g={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(g.value=a.vtp_eventValue),a.vtp_eventItems&&(g.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Yh()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);d(h)||c()}else c()},c)})}();

Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.b="d";Y.__d.g=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=oc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(c=d?ic(b,d):jc(b));return Ea(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(Kd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Pe(Qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Li(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Hg(c,"gtm.click");Mi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Qi("cl")){var c=W("document");gc(c,"click",a,!0);Ri("cl")}G(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return Oi(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||Ji();var d=b[a("vtp_component")];if(!d||"URL"==d)return Li(String(c));var e=Qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ua(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.Nc&&b.Pc>=b.Nc)b.Ic&&W("self").clearInterval(b.Ic);else{b.Pc++;var c=(new Date).getTime();Mi({event:b.aa,"gtm.timerId":b.Ic,"gtm.timerEventNumber":b.Pc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Nc,"gtm.timerStartTime":b.ye,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ye,"gtm.triggers":b.nh})}}}(function(b){Y.__tl=b;Y.__tl.b="tl";Y.__tl.g=!0;Y.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{aa:b.vtp_eventName,Pc:0,interval:Number(b.vtp_interval),Nc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),nh:String(b.vtp_uniqueTriggerId||"0"),ye:(new Date).getTime()};c.Ic=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Aj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(n.vtp_contentGroup,"index","group"),h);C(Aj(n.vtp_dimension,"index","dimension"),k);C(Aj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Aj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(d.vtp_contentGroup,
"index","group"),h);C(Aj(d.vtp_dimension,"index","dimension"),k);C(Aj(d.vtp_metric,"index","metric"),l);var u=Fe(d.vtp_functionName);if(qa(u)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Zc(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:r};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Yh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ja})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=P("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);T(ab,function(){var O=De();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();
Y.a.jel=["google"],function(){(function(a){Y.__jel=a;Y.__jel.b="jel";Y.__jel.g=!0;Y.__jel.priorityOverride=0})(function(a){if(!Qi("jel")){var b=W("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Mi({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Ri("jel")}G(a.vtp_gtmOnSuccess)})}();



Y.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!r){var x=W("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.dd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.dd,"true"),d(w,y.Yd))){w.id||(w.id=a());var x=W("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var B=h(z,y),A={},E;for(E in B)A.Pa=E,B.hasOwnProperty(A.Pa)&&z.addEventListener(A.Pa,function(J){return function(M){return B[J.Pa](M.data)}}(A)),A={Pa:A.Pa}}}
function g(w){G(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,A=0;A<B;A++)e(z[A],w)}var x=W("document");y();li(y)})}function h(w,y){var x,z;function B(){ea=Gi(function(){return{url:S,title:U,Ud:L,Yf:w.getCurrentTime(),playbackRate:na}},y.dd,w.getIframe());L=0;U=S="";na=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());S=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();U=K?K.title:""}na=w.getPlaybackRate();y.Rf?ea.Nb("start"):ea.xc();
N=m(y.Rg,y.Qg,w.getDuration());return E(O);default:return A}}function E(){ja=w.getCurrentTime();ta=(new Date).getTime();ea.bh();Z();return J}function J(O){var K;switch(O){case p.ENDED:return R(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ja;K=1<Math.abs(((new Date).getTime()-ta)/1E3*na-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.Qf?ea.Nb(K):ea.xc());Q();return M;case p.UNSTARTED:return B(O);default:return J}}function M(O){switch(O){case p.ENDED:return R(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return B(O);default:return M}}function R(){for(;z;){var O=x;Hi(z);O()}y.Pf&&ea.Nb("complete",1);return B(p.UNSTARTED)}function ca(){}function Q(){z&&(Hi(z),z=0,x=ca)}function Z(){if(N.length&&0!==na){var O=-1,K;do{K=N[0];if(K.qa>w.getDuration())return;O=(K.qa-w.getCurrentTime())/na;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=ca;0<N.length&&N[0].qa===K.qa&&(N.shift(),ea.Nb("progress",K.ne,K.ve));Z()};z=Ii(x,1E3*O)}}var ea,N=[],L,S,U,na,ja,ta,ab=B(p.UNSTARTED);
z=0;x=ca;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ja=w.getCurrentTime();ta=(new Date).getTime();ea.xc();na=O;Q();Z()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],B=0;B<x;B++){var A=parseInt(y[B],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{qa:E,ve:E,ne:void 0}});if(!y.length)return z;var B=y.map(function(E){return{qa:E*x,ve:void 0,ne:E}});if(!z.length)return B;var A=z.concat(B);A.sort(function(E,J){return E.qa-J.qa});return A}function n(w){w.vtp_triggerStartOption?q(w):pe(function(){q(w)})}function q(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,B=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||B.length||
A.length){var J={Rf:y,Pf:x,Qf:z,Qg:B,Rg:A,Yd:E,dd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=W("YT"),R=function(){g(J)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(R);else{var ca=W("onYouTubeIframeAPIReady");Ni("onYouTubeIframeAPIReady",function(){ca&&ca();R()});G(function(){for(var Q=W("document"),Z=Q.getElementsByTagName("script"),ea=Z.length,N=0;N<ea;N++){var L=Z[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var S=Q.getElementsByTagName("iframe"),U=S.length,
na=0;na<U;na++)if(!v&&d(S[na],J.Yd)){T("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,v=!1;Y.__ytl=n;Y.__ytl.b="ytl";Y.__ytl.g=!0;Y.__ytl.priorityOverride=0}();
Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return Nc.m})}();

Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
xh())){Lh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Ih(m);Ph(["aw","dc"],m);Uh(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Nh(a,q,u,p,n);}})}();


Y.a.aev=["google"],function(){function a(p,r){var v=Kd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,r,v){var w=a(p,u[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(Ji());ua(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!zj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Pe(Qe(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)ei(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&ic(w,r)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,jc)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),B=Qe(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Pe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var J=p.vtp_attribute,M=a(r,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var R=p.vtp_mdValue,ca=b(r,"MD",si);return R&&ca?vi(ca,
R)||v:ca||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Gb.ma]=null;c[Gb.ff]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awc=["nonGoogleScripts"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else{var d=c.vtp_channel||"na",e,g,h;if(c.vtp_group&&0<=c.vtp_group.indexOf(":")){e=c.vtp_group;for(var k=c.vtp_group.split("|"),l=[],m=h=0;m<k.length;m++)if(k[m]){var n=k[m].split(":");if(2==n.length&&n[0]&&n[1]){var q=parseFloat(n[1]);isNaN(q)||(l.push(X(n[0])+":"+q),h+=q)}}g=l.join("|")}else h=c.vtp_orderValue||0,e=(c.vtp_group||"DEFAULT")+":"+h,g=X(c.vtp_group||"DEFAULT")+":"+X(h);var u=c.vtp_testMode?"1":
"0";try{var p=["merchant="+X(c.vtp_merchantId),"ref="+X(c.vtp_orderRef),"amount="+X(h),"parts="+g,"ch="+X(d),"testmode="+u];c.vtp_currency&&p.push("cr="+X(c.vtp_currency));c.vtp_discountCode&&p.push("vc="+X(c.vtp_discountCode));yj("https://www.awin1.com/sread.img?tt=ns&tv=2&"+p.join("&"))}catch(v){}try{var r={};r.orderRef=c.vtp_orderRef;r.amount=h;c.vtp_currency&&(r.currency=c.vtp_currency);r.parts=e;c.vtp_discountCode&&(r.voucher=c.vtp_discountCode);r.channel=d;r.test=u;D.AWIN={Tracking:{Sale:r}};
T("https://www.dwin1.com/"+c.vtp_merchantId+".js",c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure);a=!0}catch(v){G(c.vtp_gtmOnFailure)}}};Y.__awc=b;Y.__awc.b="awc";Y.__awc.g=!0;Y.__awc.priorityOverride=0}();
Y.a.awj=["nonGoogleScripts"],function(){var a=!1,b=function(c){if(a)c.vtp_gtmOnSuccess();else try{T("https://www.dwin1.com/"+c.vtp_merchantId+".js",c.vtp_gtmOnSuccess,c.vtp_gtmOnFailure),a=!0}catch(d){G(c.vtp_gtmOnFailure)}};Y.__awj=b;Y.__awj.b="awj";Y.__awj.g=!0;Y.__awj.priorityOverride=0}();
Y.a.tdsc=["nonGooglePixels"],function(){(function(a){Y.__tdsc=a;Y.__tdsc.b="tdsc";Y.__tdsc.g=!0;Y.__tdsc.priorityOverride=0})(function(a){try{var b=[];b.push("organization="+X(a.vtp_orgId));b.push("event="+X(a.vtp_eventId));b.push("orderNumber="+X(a.vtp_orderNumber));b.push("orderValue="+X(a.vtp_orderValue));b.push("type=iframe");a.vtp_currency&&b.push("currency="+X(a.vtp_currency));a.vtp_tduid&&b.push("tduid="+X(a.vtp_tduid));a.vtp_voucherCode&&b.push("voucher="+X(a.vtp_voucherCode));Pi(P("https:",
"http:","//tbs.tradedoubler.com/report?"+b.join("&")),a.vtp_gtmOnSuccess)}catch(c){G(a.vtp_gtmOnFailure)}})}();
Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Ji()}function b(g,h){gc(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Li(l),J:Ki(l)})})}function c(g,h){gc(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Li(l),J:Ki(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(qa(m))try{l[g]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Li(Ji()),
J:Ki(Ji())})}}catch(n){}}function e(){var g={source:null,state:W("history").state||null,url:Li(Ji()),J:Ki(Ji())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Mi(m)}}}(function(g){Y.__hl=g;Y.__hl.b="hl";Y.__hl.g=!0;Y.__hl.priorityOverride=0})(function(g){var h=W("self");if(!Qi("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Ri("hl")}G(g.vtp_gtmOnSuccess)})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ye();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Yh()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?V(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?V(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,T(p,g(),e(p)))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.b="remm";Y.__remm.g=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Y.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;gc(e,"click",function(k){var l=k.target;if(l&&(l=lc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&ic(l,"value")){var m;(m=l.form?l.form.tagName?l.form:F.getElementById(l.form):lc(l,["form"],100))&&g.store(m,l)}},!1);gc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=g.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=Lg("fsl",h?"nv.mwt":"mwt",0),n;n=h?Lg("fsl","nv.ids",[]):Lg("fsl","ids",[]);if(!n.length)return!0;var q=Hg(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!Mi(q,xg(g),m))return!1}else Mi(q,function(){},m||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.b=
"fsl";Y.__fsl.g=!0;Y.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,q)};Kg("fsl","mwt",m,0);h||Kg("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Kg("fsl","ids",n,[]);h||Kg("fsl","nv.ids",n,[]);Qi("fsl")||(a(),Ri("fsl"));G(e.vtp_gtmOnSuccess)})}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Aj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Y.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.b="twitter_website_tag";Y.__twitter_website_tag.g=!0;Y.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],T("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Aj(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);G(a.vtp_gtmOnSuccess)})}();
Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,bc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=Ui(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Hc,k=g.s;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Ii(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();

Y.a.dbg=["google"],function(){(function(a){Y.__dbg=a;Y.__dbg.b="dbg";Y.__dbg.g=!0;Y.__dbg.priorityOverride=0})(function(){return!1})}();


Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.b="img";Y.__img.g=!0;Y.__img.priorityOverride=0})(function(a){var b=kc('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}yj(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.a.tdlc=["nonGooglePixels"],function(){(function(a){Y.__tdlc=a;Y.__tdlc.b="tdlc";Y.__tdlc.g=!0;Y.__tdlc.priorityOverride=0})(function(a){try{var b=[];b.push("organization="+X(a.vtp_orgId));b.push("event="+X(a.vtp_eventId));b.push("leadNumber="+X(a.vtp_leadNumber));b.push("type=iframe");a.vtp_tduid&&b.push("tduid="+X(a.vtp_tduid));a.vtp_voucherCode&&b.push("voucher="+X(a.vtp_voucherCode));Pi(P("https:","http:","//tbl.tradedoubler.com/report?"+b.join("&")),a.vtp_gtmOnSuccess)}catch(c){G(a.vtp_gtmOnFailure)}})}();

Y.a.lcl=[],function(){function a(){var e=W("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Cg||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=lc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Lg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Lg("lcl","nv.ids",[]):Lg("lcl","ids",[]);if(q.length){var u=Hg(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(Ti(l,"rel")||""),r=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
r&&I("GTM",36);var v=W((Ti(l,"target")||"_self").substring(1)),w=!0;if(Mi(u,xg(function(){var y;if(y=w&&v){var x;a:if(r&&d){var z;try{z=new MouseEvent(k.type)}catch(B){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Cg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=Ti(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Mi(u,function(){},n||2E3);return!0}}};gc(e,"click",h,!1);gc(e,"auxclick",h,
!1)}function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=Ti(g,"href"),l=k.indexOf("#"),m=Ti(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Li(k),q=Li(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Kg("lcl","mwt",m,0);h||Kg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Kg("lcl","ids",n,[]);h||Kg("lcl","nv.ids",n,[]);Qi("lcl")||(a(),Ri("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=0;}();


var $l={};$l.macro=function(a){if(Eg.wc.hasOwnProperty(a))return Eg.wc[a]},$l.onHtmlSuccess=Eg.Td(!0),$l.onHtmlFailure=Eg.Td(!1);$l.dataLayer=Dd;$l.callback=function(a){Xc.hasOwnProperty(a)&&qa(Xc[a])&&Xc[a]();delete Xc[a]};function am(){Oc[Nc.m]=$l;Ia(Yc,Y.a);xb=xb||Eg;yb=ge}
function bm(){zh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.m]){var a=Oc.zones;a&&a.unregisterChild(Nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)sb.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Y;wb=tj;am();Dg();ke=!1;le=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)ne();else{gc(F,"DOMContentLoaded",ne);gc(F,"readystatechange",ne);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&oe()}gc(D,"load",ne)}qg=!1;"complete"===F.readyState?sg():gc(D,
"load",sg);a:{if(!sd)break a;D.setInterval(td,864E5);}
Uc=(new Date).getTime();
}}bm();

})()
