(function(window, undefined) {
  var dictionary = {
    "b654f4ee-bfc6-4aec-a63a-da5546771807": "Home have active project",
    "015969c1-2ce1-4fb8-b49f-75f65deab3e1": "Project_details_feature",
    "a1d28b2e-2fa7-44bb-ba8c-f3d25ae081cd": "Plugin list",
    "585369c0-e65a-4955-8a06-eb1086a64a96": "Subscribers",
    "ac36a3b0-434c-4521-bb40-2feac7c6fe41": "Project details",
    "00efe0eb-a518-49e2-b98c-ab690854d414": "Features - Lockout",
    "44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc": "blank",
    "96bbc396-9ad7-4607-94fc-7228606f880b": "home without sibar",
    "e62d4df2-367e-4d74-a886-96b7045167b7": "Optimize Stream",
    "4c367326-b50d-4391-94a2-4905ab8e5830": "Project details without project",
    "0ea6c191-757f-40e7-8198-8051a607593d": "New Project",
    "27389bdf-5219-4477-82da-e98f640f0d38": "Logout Configuration",
    "033d7771-57d3-43e1-9c55-e490251db185": "Favorites Management",
    "e144d61f-b155-47cc-bf0b-842a70dae4af": "Home",
    "c481b17f-8b90-4b78-996e-ed8e95688c74": "Project_details_devices",
    "26bed113-5875-4cd5-940b-0d5a397f2a8f": "Static Menu Configuration",
    "6d88ebb1-279d-4bc5-853a-89cf3357049e": "addDevices-14NaimTuner",
    "9d51d227-da00-4f1c-b854-8a9a22c3afa7": "banner_breadcumd_tab",
    "a8aec9a1-253f-439c-9ba8-f308737cccb9": "banner extralarge",
    "845c9753-0933-4910-a489-c837624773e8": "project banner",
    "a06cba8d-ba65-4879-a37b-000f00f506a4": "project banner tap",
    "020eef3f-0318-4551-8ff7-f465314cab1a": "without-sibar-backup",
    "c28c6f81-e797-49f0-b070-3b315ed939af": "home",
    "04b2bebd-80f6-464f-93d4-8712bd300120": "project_info_tap",
    "5077f746-d9fa-40a4-a8aa-4a125fb55784": "without-sibar",
    "3229cad5-89d1-42ef-b22c-59d691d89f78": "banner dummy",
    "1ff7b68a-d972-401b-a4b2-d1f5a24d4634": "project_info",
    "70edbc06-b5ed-4b4a-bb82-7fa37c15e7c8": "banner_breadcumd",
    "e7063520-c900-4191-a778-d5aa396c6d91": "project_manage"
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