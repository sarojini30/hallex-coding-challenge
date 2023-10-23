function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event, element) {
    event.dataTransfer.setData("text/plain", element);
  }
  
 
  function drop(event) {
    event.preventDefault();
    const element = event.dataTransfer.getData("text");
    const formPreview = document.getElementById("preview-form");
  
    if (element === "Layout") {
      const layoutDiv = document.createElement("div");
      layoutDiv.className = "layout";
      layoutDiv.setAttribute("draggable", "true");
      layoutDiv.setAttribute("ondragstart", "drag(event, 'Layout')");
      layoutDiv.ondrop = function (event) {
        splitFormPreview();
        event.preventDefault();
      };
      formPreview.appendChild(layoutDiv);
    } else if (element === "Label") {
        
      const label = document.createElement("label");
      label.innerText = "Label Text:";
      const input = document.createElement("input");
      input.type = "text";
      label.classList.add("draggable-label");
      formPreview.appendChild(label);
      formPreview.appendChild(input);
    } else if (element === "Text Box") {
      const textBox = document.createElement("input");
      textBox.type = "text";
      formPreview.appendChild(textBox);
    } else if (element === "Button") {
      const button = document.createElement("button");
      button.innerText = "Button";
      formPreview.appendChild(button);
    } else if (element === "Check Box") {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      formPreview.appendChild(checkbox);
      const label = document.createElement("label");
      label.innerText = "Check Box Label";
      formPreview.appendChild(label);
    } else if (element === "Radio Button") {
      const radio = document.createElement("input");
      radio.type = "radio";
      formPreview.appendChild(radio);
      const label = document.createElement("label");
      label.innerText = "Radio Button Label";
      formPreview.appendChild(label);
    } else if (element === "Table") {
      
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");
    tableContainer.classList.add("draggable");
    tableContainer.setAttribute("draggable", "true");
    tableContainer.style.minWidth = "200px";
    tableContainer.style.minHeight = "200px";

    
    const table = document.createElement("table");
    table.classList.add("draggable-table");
    tableContainer.appendChild(table);
     
     $(tableContainer).resizable({
      handles: "n, e, s, w",
      alsoResize: table, 
  });
    } else if (element === "Navigation") {
      const link = document.createElement("a");
      link.href = "#";
      link.innerText = "Navigation Link";
      formPreview.appendChild(link);
    } else if (element === "Image") {
      const image = document.createElement("img");
      image.src = "path_to_your_image.jpg";
      formPreview.appendChild(image);
    }
  }
  function reloadPage() {
    window.location.reload();
  }
  function loadPreview() {
    const formPreview = document.getElementById("form-preview");
    const previewContent = formPreview.innerHTML;
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write("<html><head><title>Form Preview</title></head><body>");
    newTab.document.write('<div id="preview-content">');
    newTab.document.write(previewContent);
    newTab.document.write("</div></body></html>");
    newTab.document.close();
  }
  function clearFormPreview() {
    
    const formPreview = document.getElementById("form-preview");
    while (formPreview.firstChild) {
      formPreview.removeChild(formPreview.firstChild);
    }
  }
  
  function saveFormPreview() {
   
    const formPreview = document.getElementById("form-preview").innerHTML;
    
  }
  
  function loadPreview() {
   
    const formPreview = document.getElementById("form-preview");
    
  }
$(document).ready(function () {
    
    $(".layout-element").click(function () {
        
        $(".layout-element").removeClass("selected");

        
        $(this).addClass("selected");

        
        $(".drop-box").addClass("selected");
    });
});
  