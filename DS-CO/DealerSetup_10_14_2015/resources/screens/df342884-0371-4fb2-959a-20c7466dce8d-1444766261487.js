jQuery("#simulation")
  .on("click", ".s-df342884-0371-4fb2-959a-20c7466dce8d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Flat-button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8d458af3-8eba-467f-aad9-e8ecd8aa3c5a"
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
    } else if(jFirer.is("#s-Flat-button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8d458af3-8eba-467f-aad9-e8ecd8aa3c5a"
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
  .on("mouseenter dragenter", ".s-df342884-0371-4fb2-959a-20c7466dce8d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Flat-button") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-df342884-0371-4fb2-959a-20c7466dce8d #s-Flat-button": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df342884-0371-4fb2-959a-20c7466dce8d #s-Flat-button": {
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
    } else if(jFirer.is("#s-Flat-button_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-df342884-0371-4fb2-959a-20c7466dce8d #s-Flat-button_1": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df342884-0371-4fb2-959a-20c7466dce8d #s-Flat-button_1": {
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
  .on("mouseleave dragleave", ".s-df342884-0371-4fb2-959a-20c7466dce8d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Flat-button")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Flat-button_1")) {
      jEvent.undoCases(jFirer);
    }
  });