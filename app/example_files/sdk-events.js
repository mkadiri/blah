var optimoveCoreEvents = {
	"events": {
		"web_popup_displayed": {
			"id": 1008,
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
				"campaign_detail_id": {
					"id": 1,
					"name": "Campaign Detail ID",
					"configName": "campaign_detail_id",
					"type": "Number",
					"optional": false,
					"optiTrackDimensionId": 12
				}
			}
		}
	}
};