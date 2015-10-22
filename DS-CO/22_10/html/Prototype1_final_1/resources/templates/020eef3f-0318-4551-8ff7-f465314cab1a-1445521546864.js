jQuery("#simulation")
  .on("click", ".t-020eef3f-0318-4551-8ff7-f465314cab1a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Label_43": {
                      "attributes": {
                        "background-color": "#F77857",
                        "background-image": "none",
                        "font-size": "28.0pt",
                        "font-family": "IOS8-Icons-Regular,Arial"
                      }
                    }
                  },{
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Label_43 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Label_43 span": {
                      "attributes": {
                        "color": "#F77857",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "IOS8-Icons-Regular,Arial",
                        "font-size": "28.0pt"
                      }
                    }
                  },{
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#F77857",
                        "-pie-poll": "false"
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
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Text_11": {
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
                    "#t-020eef3f-0318-4551-8ff7-f465314cab1a #t-Text_11": {
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
    } else if(jFirer.is("#t-Label_7")) {
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
    }
  })
  .on("click", ".t-020eef3f-0318-4551-8ff7-f465314cab1a .toggle", function(event, data) {
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