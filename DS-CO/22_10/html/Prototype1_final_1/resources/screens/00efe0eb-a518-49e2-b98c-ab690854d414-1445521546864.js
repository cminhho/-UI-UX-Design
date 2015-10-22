jQuery("#simulation")
  .on("click", ".s-00efe0eb-a518-49e2-b98c-ab690854d414 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_13")) {
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
                      "target": "#s-project_options"
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
                      "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Label_13": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Label_13 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Label_13 span": {
                        "attributes": {
                          "color": "#F77857",
                          "text-align": "left",
                          "text-decoration": "none",
                          "font-family": "materialdesignjim-Regular,Arial",
                          "font-size": "20.0pt"
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Text_8")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Text_8": {
                        "attributes": {
                          "border-top-width": "0px",
                          "border-top-style": "solid",
                          "border-top-color": "#C8C8C8",
                          "border-right-width": "0px",
                          "border-right-style": "solid",
                          "border-right-color": "#C8C8C8",
                          "border-bottom-width": "2px",
                          "border-bottom-style": "solid",
                          "border-bottom-color": "#F77857",
                          "border-left-width": "0px",
                          "border-left-style": "solid",
                          "border-left-color": "#C8C8C8",
                          "border-radius": "0px 0px 0px 0px"
                        }
                      }
                    },{
                      "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Text_8": {
                        "attributes-ie": {
                          "border-top-width": "0px",
                          "border-top-style": "solid",
                          "border-top-color": "#C8C8C8",
                          "border-right-width": "0px",
                          "border-right-style": "solid",
                          "border-right-color": "#C8C8C8",
                          "border-bottom-width": "2px",
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("mouseenter dragenter", ".s-00efe0eb-a518-49e2-b98c-ab690854d414 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Flat-button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Flat-button_3": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none",
                        "font-size": "13.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Flat-button_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Flat-button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "13.0pt"
                      }
                    }
                  },{
                    "#s-00efe0eb-a518-49e2-b98c-ab690854d414 #s-Flat-button_3": {
                      "attributes-ie": {
                        "-pie-background": "#666666",
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-00efe0eb-a518-49e2-b98c-ab690854d414 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Flat-button_3")) {
      jEvent.undoCases(jFirer);
    }
  });