jQuery("#simulation")
  .on("click", ".t-c28c6f81-e797-49f0-b070-3b315ed939af .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4c367326-b50d-4391-94a2-4905ab8e5830"
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
    } else if(jFirer.is("#t-Label_215")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4c367326-b50d-4391-94a2-4905ab8e5830"
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
    } else if(jFirer.is("#t-Title")) {
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
    } else if(jFirer.is("#t-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-discovery_modal"
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
                    "#t-c28c6f81-e797-49f0-b070-3b315ed939af #t-Text_11": {
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
                    "#t-c28c6f81-e797-49f0-b070-3b315ed939af #t-Text_11": {
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
    } else if(jFirer.is("#t-Label_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-discovery_modal"
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
    } else if(jFirer.is("#t-Label_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c481b17f-8b90-4b78-996e-ed8e95688c74"
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
                    "#t-c28c6f81-e797-49f0-b070-3b315ed939af #t-Text_12": {
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
                    "#t-c28c6f81-e797-49f0-b070-3b315ed939af #t-Text_12": {
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
  })
  .on("click", ".t-c28c6f81-e797-49f0-b070-3b315ed939af .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#t-sidebar_left",
                      "effect": {
                        "type": "slide",
                        "duration": 500,
                        "direction": "left"
                      }
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
        jEvent.launchCases(cases);
      }
    }
  });