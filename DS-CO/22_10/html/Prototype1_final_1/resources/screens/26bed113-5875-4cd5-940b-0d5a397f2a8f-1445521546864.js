jQuery("#simulation")
  .on("click", ".s-26bed113-5875-4cd5-940b-0d5a397f2a8f .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_10")) {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_10": {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_10": {
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
    } else if(jFirer.is("#s-Text_15")) {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_15": {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_15": {
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
    } else if(jFirer.is("#s-Label_13")) {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Label_13": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Label_13 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Label_13 span": {
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
    } else if(jFirer.is("#s-Text_9")) {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_9": {
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
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-Text_9": {
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
    } else if(jFirer.is("#s-checkbox-on-light_6")) {
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
                    "action": "jimSetValue",
                    "parameter": {
                      "target": "#s-checkbox-on-light_6",
                      "value": ""
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-checkbox-on-light_6": {
                        "attributes": {
                          "font-size": "20.0pt",
                          "font-family": "materialdesignjim-Regular,Arial"
                        }
                      }
                    },{
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-checkbox-on-light_6 .valign": {
                        "attributes": {
                          "vertical-align": "middle",
                          "text-align": "left"
                        }
                      }
                    },{
                      "#s-26bed113-5875-4cd5-940b-0d5a397f2a8f #s-checkbox-on-light_6 span": {
                        "attributes": {
                          "color": "#8AD9D2",
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
    }
  });