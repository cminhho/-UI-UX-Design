jQuery("#simulation")
  .on("click", ".t-5077f746-d9fa-40a4-a8aa-4a125fb55784 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Title")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e144d61f-b155-47cc-bf0b-842a70dae4af"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a1d28b2e-2fa7-44bb-ba8c-f3d25ae081cd"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-5077f746-d9fa-40a4-a8aa-4a125fb55784 #t-Text_12": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "solid",
                        "border-top-color": "#C8C8C8",
                        "border-right-width": "0px",
                        "border-right-style": "solid",
                        "border-right-color": "#C8C8C8",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F77857",
                        "border-left-width": "0px",
                        "border-left-style": "solid",
                        "border-left-color": "#C8C8C8",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-5077f746-d9fa-40a4-a8aa-4a125fb55784 #t-Text_12": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "solid",
                        "border-top-color": "#C8C8C8",
                        "border-right-width": "0px",
                        "border-right-style": "solid",
                        "border-right-color": "#C8C8C8",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F77857",
                        "border-left-width": "0px",
                        "border-left-style": "solid",
                        "border-left-color": "#C8C8C8",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a1d28b2e-2fa7-44bb-ba8c-f3d25ae081cd"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-5077f746-d9fa-40a4-a8aa-4a125fb55784 #t-Text_11": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "solid",
                        "border-top-color": "#C8C8C8",
                        "border-right-width": "0px",
                        "border-right-style": "solid",
                        "border-right-color": "#C8C8C8",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F77857",
                        "border-left-width": "0px",
                        "border-left-style": "solid",
                        "border-left-color": "#C8C8C8",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#t-5077f746-d9fa-40a4-a8aa-4a125fb55784 #t-Text_11": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "solid",
                        "border-top-color": "#C8C8C8",
                        "border-right-width": "0px",
                        "border-right-style": "solid",
                        "border-right-color": "#C8C8C8",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F77857",
                        "border-left-width": "0px",
                        "border-left-style": "solid",
                        "border-left-color": "#C8C8C8",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });