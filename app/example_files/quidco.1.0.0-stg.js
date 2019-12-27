var optimoveTenantConfiguration = {
  "version": "1.0.6",
  "realtimeMetaData": {
    "realtimeToken": "6b4167cff2576e3f493a179983125092c41c4bceebd80d3686c86d273a571bb5",
    "realtimeGateway": "https://gateway-eu.optimove.events/",
    "options": {
      "showDimmer": true,
      "showWatermark": false
    }
  },
  "optitrackMetaData": {
    "sendUserAgentHeader": true,
    "useSessionStorage": true,
    "enableHeartBeatTimer": false,
    "heartBeatTimer": 30,
    "eventCategoryName": "LogEvent",
    "eventIdCustomDimensionId": 6,
    "eventNameCustomDimensionId": 7,
    "visitCustomDimensionsStartId": 1,
    "maxVisitCustomDimensions": 5,
    "actionCustomDimensionsStartId": 8,
    "maxActionCustomDimensions": 56,
    "optitrackEndpoint": "https://quidcotracksdk-stg.optimove.net/",
    "siteId": 657
  },
  "cookieMatcherMetaData": {
    "optimoveCookieMatcherId": "optimove_dmp",
    "tenantToken": "cc8066ea-bfb9-47a9-a456-e8095899071e"
  },
  "datonicsCookieMatchingMetaData": {
    "baseEndpoint": "http://fei.pro-market.net/engine?du=97;"
  },
  "liveRampMetaData": {
    "baseEndpoint": "https://id.rlcdn.com/[liveRampToken].gif?cparams=",
    "tenantToken": "cc8066ea-bfb9-47a9-a456-e8095899071e",
    "liveRampTenantToken": "470966"
  },
  "mobile": {
    "optipushMetaData": {
      "enableAdvertisingIdReport": false
    }
  },
  "sdkServicesEndPoint": "https://sdkuaservice.optimove.net",
  "useLocalStorage": true,
  "isSPA": false,
  "enableOptitrack": true,
  "enableVisitors": true,
  "enableRealtime": true,
  "enableOptipush": false,
  "supportCookieMatcher": true,
  "supportUserEmailStitch": false,
  "supportDatonicsCookieMatching": false,
  "supportLiveRamp": false,
  "events": {
    "set_user_id_event": {
      "id": 1001,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "originalVisitorId": {
          "id": 1,
          "name": "Original Visitor ID",
          "configName": "originalVisitorId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "userId": {
          "id": 2,
          "name": "User ID",
          "configName": "userId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "updatedVisitorId": {
          "id": 3,
          "name": "Updated Visitor ID",
          "configName": "updatedVisitorId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 10
        }
      }
    },
    "set_email_event": {
      "id": 1002,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "email": {
          "id": 1,
          "name": "Email",
          "configName": "email",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        }
      }
    },
    "page_category_event": {
      "id": 1003,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "category": {
          "id": 1,
          "name": "Category",
          "configName": "category",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        }
      }
    },
    "stitch_event": {
      "id": 1004,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "sourcePublicCustomerId": {
          "id": 1,
          "name": "Source Public Customer Id",
          "configName": "sourcePublicCustomerId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "sourceVisitorId": {
          "id": 2,
          "name": "Source Visitor ID",
          "configName": "sourceVisitorId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "targetVisitorId": {
          "id": 3,
          "name": "Target Visitor ID",
          "configName": "targetVisitorId",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 10
        }
      }
    },
    "user_agent_header_event": {
      "id": 1005,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "user_agent_header1": {
          "id": 1,
          "name": "User Agent Header Part 1",
          "configName": "user_agent_header1",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "user_agent_header2": {
          "id": 2,
          "name": "User Agent Header Part 2",
          "configName": "user_agent_header2",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        }
      }
    },
    "set_page_visit": {
      "id": 1006,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "customURL": {
          "id": 1,
          "name": "Page URL",
          "configName": "customURL",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "pageTitle": {
          "id": 2,
          "name": "Page Title",
          "configName": "pageTitle",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "category": {
          "id": 3,
          "name": "Page Category",
          "configName": "category",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        }
      }
    },
    "optimove_sdk_metadata": {
      "id": 1007,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "sdk_platform": {
          "id": 1,
          "name": "SDK Platform",
          "configName": "sdk_platform",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 12
        },
        "sdk_version": {
          "id": 2,
          "name": "SDK Version",
          "configName": "sdk_version",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 13
        },
        "config_file_url": {
          "id": 3,
          "name": "Config file URL",
          "configName": "config_file_url",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 14
        },
        "app_ns": {
          "id": 4,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 15
        }
      }
    },
    "set_advertising_id": {
      "id": 1010,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "advertising_id": {
          "id": 1,
          "name": "Advertising ID",
          "configName": "advertising_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "device_id": {
          "id": 2,
          "name": "Device ID",
          "configName": "device_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "app_ns": {
          "id": 3,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 10
        }
      }
    },
    "notification_delivered": {
      "id": 1012,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 18
        },
        "timestamp": {
          "id": 1,
          "name": "Timestamp",
          "configName": "timestamp",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "app_ns": {
          "id": 2,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "campaign_id": {
          "id": 3,
          "name": "Plan ID",
          "configName": "campaign_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 10
        },
        "action_serial": {
          "id": 4,
          "name": "Action Serial",
          "configName": "action_serial",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 11
        },
        "template_id": {
          "id": 5,
          "name": "Template ID",
          "configName": "template_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 12
        },
        "engagement_id": {
          "id": 6,
          "name": "Engagement ID",
          "configName": "engagement_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 13
        },
        "campaign_type": {
          "id": 7,
          "name": "Campaign Type",
          "configName": "campaign_type",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 14
        }
      }
    },
    "notification_opened": {
      "id": 1013,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 18
        },
        "timestamp": {
          "id": 1,
          "name": "Timestamp",
          "configName": "timestamp",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "app_ns": {
          "id": 2,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "campaign_id": {
          "id": 3,
          "name": "Plan ID",
          "configName": "campaign_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 10
        },
        "action_serial": {
          "id": 4,
          "name": "Action Serial",
          "configName": "action_serial",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 11
        },
        "template_id": {
          "id": 5,
          "name": "Template ID",
          "configName": "template_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 12
        },
        "engagement_id": {
          "id": 6,
          "name": "Engagement ID",
          "configName": "engagement_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 13
        },
        "campaign_type": {
          "id": 7,
          "name": "Campaign Type",
          "configName": "campaign_type",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 14
        }
      }
    },
    "notification_dismissed": {
      "id": 1014,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "campaign_type": {
          "id": 7,
          "name": "Campaign Type",
          "configName": "campaign_type",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 14
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 18
        },
        "timestamp": {
          "id": 1,
          "name": "Timestamp",
          "configName": "timestamp",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "app_ns": {
          "id": 2,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "campaign_id": {
          "id": 3,
          "name": "Plan ID",
          "configName": "campaign_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 10
        },
        "action_serial": {
          "id": 4,
          "name": "Action Serial",
          "configName": "action_serial",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 11
        },
        "template_id": {
          "id": 5,
          "name": "Template ID",
          "configName": "template_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 12
        },
        "engagement_id": {
          "id": 6,
          "name": "Engagement ID",
          "configName": "engagement_id",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 13
        }
      }
    },
    "before_set_user_id": {
      "id": 1015,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "original_visitor_id": {
          "id": 1,
          "name": "original_visitor_id",
          "configName": "original_visitor_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "user_id": {
          "id": 2,
          "name": "user_id",
          "configName": "user_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 13
        }
      }
    },
    "after_set_user_id": {
      "id": 1016,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "original_visitor_id": {
          "id": 1,
          "name": "original_visitor_id",
          "configName": "original_visitor_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "user_id": {
          "id": 2,
          "name": "user_id",
          "configName": "user_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 13
        }
      }
    },
    "optipush_opt_in": {
      "id": 1017,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "timestamp": {
          "id": 1,
          "name": "Timestamp",
          "configName": "timestamp",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "app_ns": {
          "id": 2,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "device_id": {
          "id": 3,
          "name": "Device ID",
          "configName": "device_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 10
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        }
      }
    },
    "optipush_opt_out": {
      "id": 1018,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "timestamp": {
          "id": 1,
          "name": "Timestamp",
          "configName": "timestamp",
          "type": "Number",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "app_ns": {
          "id": 2,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "device_id": {
          "id": 3,
          "name": "Device ID",
          "configName": "device_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 10
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 14
        }
      }
    },
    "notification_ping": {
      "id": 1019,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "app_ns": {
          "id": 1,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "device_id": {
          "id": 2,
          "name": "Device ID",
          "configName": "device_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "user_id": {
          "id": 3,
          "name": "User ID",
          "configName": "user_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "visitor_id": {
          "id": 4,
          "name": "Visitor ID",
          "configName": "visitor_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 15
        }
      }
    },
    "app_open": {
      "id": 1020,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": false,
      "parameters": {
        "app_ns": {
          "id": 1,
          "name": "App Namespace",
          "configName": "app_ns",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 8
        },
        "device_id": {
          "id": 2,
          "name": "Device ID",
          "configName": "device_id",
          "type": "String",
          "optional": false,
          "optiTrackDimensionId": 9
        },
        "user_id": {
          "id": 3,
          "name": "User ID",
          "configName": "user_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "visitor_id": {
          "id": 4,
          "name": "Visitor ID",
          "configName": "visitor_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "event_device_type": {
          "id": 1001,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "event_os": {
          "id": 1002,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 15
        }
      }
    },
    "registered": {
      "id": 1101,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "referral_id": {
          "id": 3,
          "name": "referral id",
          "configName": "referral_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "registration_source": {
          "id": 4,
          "name": "registration source",
          "configName": "registration_source",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        }
      }
    },
    "merchant": {
      "id": 1102,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "merchant_name": {
          "id": 1,
          "name": "Merchant Name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "get_cash_back_clicked": {
      "id": 1103,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "merchant_name": {
          "id": 1,
          "name": "Merchant Name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "premium_details": {
      "id": 1104,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        }
      }
    },
    "upgrade_now_clicked": {
      "id": 1105,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "clicked_from": {
          "id": 1,
          "name": "Clicked From",
          "configName": "clicked_from",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "refer_a_friend": {
      "id": 1106,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "raf_url": {
          "id": 1,
          "name": "raf url",
          "configName": "raf_url",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "raf_copy_link_clicked": {
      "id": 1107,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "raf_url": {
          "id": 1,
          "name": "RAF URL",
          "configName": "raf_url",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "merchant_search_results_viewed": {
      "id": 1108,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "search_term": {
          "id": 1,
          "name": "Search Term",
          "configName": "search_term",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "label": {
          "id": 2,
          "name": "label",
          "configName": "label",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "search_strategy": {
          "id": 4,
          "name": "search strategy",
          "configName": "search_strategy",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "page": {
          "id": 5,
          "name": "page",
          "configName": "page",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        }
      }
    },
    "browse_details": {
      "id": 1110,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "title": {
          "id": 1,
          "name": "Title",
          "configName": "title",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "url": {
          "id": 2,
          "name": "URL",
          "configName": "url",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "category": {
          "id": 3,
          "name": "Category",
          "configName": "category",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "sub_category": {
          "id": 4,
          "name": "Sub Category",
          "configName": "sub_category",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "merchant_name": {
          "id": 5,
          "name": "merchant name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "merchant_id": {
          "id": 6,
          "name": "merchant ID",
          "configName": "merchant_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        }
      }
    },
    "login_successful": {
      "id": 1111,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "label": {
          "id": 1,
          "name": "label",
          "configName": "label",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "cashback_reminder": {
      "id": 1112,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        }
      }
    },
    "add_to_chrome_click": {
      "id": 1113,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        }
      }
    },
    "merchant_details": {
      "id": 1115,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "merchant_name": {
          "id": 1,
          "name": "Merchant Name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "link_path": {
          "id": 2,
          "name": "Link Path",
          "configName": "link_path",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "image_path": {
          "id": 3,
          "name": "Image Path",
          "configName": "image_path",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "best_rate_amount": {
          "id": 4,
          "name": "Best Rate Amount",
          "configName": "best_rate_amount",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "best_rate_title": {
          "id": 5,
          "name": "Best Rate Title",
          "configName": "best_rate_title",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "logo_path": {
          "id": 6,
          "name": "Logo Path",
          "configName": "logo_path",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        },
        "first_name": {
          "id": 7,
          "name": "First Name",
          "configName": "first_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 18
        }
      }
    },
    "merchant_clickout": {
      "id": 1116,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "event_source": {
          "id": 2,
          "name": "event source",
          "configName": "event_source",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        },
        "label": {
          "id": 3,
          "name": "label",
          "configName": "label",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 14
        },
        "merchant_id": {
          "id": 4,
          "name": "merchant ID",
          "configName": "merchant_id",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 15
        },
        "merchant_name": {
          "id": 5,
          "name": "merchant name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 16
        },
        "position": {
          "id": 6,
          "name": "position",
          "configName": "position",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 17
        },
        "qcategory": {
          "id": 7,
          "name": "qcategory",
          "configName": "qcategory",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 18
        },
        "component": {
          "id": 8,
          "name": "component",
          "configName": "component",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 19
        }
      }
    },
    "refer_a_friend_invite_clicked": {
      "id": 1117,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "raf_url": {
          "id": 1,
          "name": "raf url",
          "configName": "raf_url",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        }
      }
    },
    "cashback_tracked": {
      "id": 1118,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "merchant_name": {
          "id": 1,
          "name": "merchant name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "transaction_cashback": {
          "id": 2,
          "name": "transaction cashback",
          "configName": "transaction_cashback",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        }
      }
    },
    "cashback_confirmed": {
      "id": 1119,
      "supportedOnOptitrack": true,
      "supportedOnRealTime": true,
      "parameters": {
        "event_platform": {
          "id": 1000,
          "name": "Platform",
          "configName": "event_platform",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 8
        },
        "event_os": {
          "id": 1001,
          "name": "OS",
          "configName": "event_os",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 9
        },
        "event_device_type": {
          "id": 1002,
          "name": "Device Type",
          "configName": "event_device_type",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 10
        },
        "event_native_mobile": {
          "id": 1003,
          "name": "Native Mobile",
          "configName": "event_native_mobile",
          "type": "Boolean",
          "optional": true,
          "optiTrackDimensionId": 11
        },
        "merchant_name": {
          "id": 1,
          "name": "merchant name",
          "configName": "merchant_name",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 12
        },
        "transaction_cashback": {
          "id": 2,
          "name": "transaction cashback",
          "configName": "transaction_cashback",
          "type": "String",
          "optional": true,
          "optiTrackDimensionId": 13
        }
      }
    }
  }
}