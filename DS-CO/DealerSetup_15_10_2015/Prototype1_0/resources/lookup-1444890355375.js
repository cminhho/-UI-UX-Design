(function(window, undefined) {
  var dictionary = {
    "44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc": "blank",
    "ac36a3b0-434c-4521-bb40-2feac7c6fe41": "Project_Details",
    "ca03a01e-3c58-4e34-afbe-83bd8910c84a": "Project-List",
    "e1afd022-57f7-41b1-8595-6b00a917032a": "Project-New-1",
    "e144d61f-b155-47cc-bf0b-842a70dae4af": "Home",
    "8d458af3-8eba-467f-aad9-e8ecd8aa3c5a": "Project-Not-Empty",
    "015969c1-2ce1-4fb8-b49f-75f65deab3e1": "Project_details_feature",
    "eebe4c1a-0df6-4c76-bb0a-483661b30017": "Projects-Empty",
    "c481b17f-8b90-4b78-996e-ed8e95688c74": "Project_details_devices",
    "a8aec9a1-253f-439c-9ba8-f308737cccb9": "banner extralarge"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);