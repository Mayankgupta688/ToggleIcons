

var createComponent = (function() {

    function createService(element) {
        var parentComponent = document.getElementById("account_services");
    
        var newServiceComponent = document.createElement("div")
        newServiceComponent.classList.add("service");
        $(newServiceComponent).append('<span class="serviceTitle" onclick="toggleServiceDetails(event)">' + element.name + '</span>')
        newServiceComponent.appendChild(serviceAttributes())
        newServiceComponent.appendChild(serviceAttributes())
        newServiceComponent.appendChild(serviceAttributes())
    
        parentComponent.append(newServiceComponent);
    }
    
    function serviceAttributes() {
        var serviceAttritute = document.createElement("div")
        serviceAttritute.id = "service_attributes_059c305a-ce8e-4e8e-b554-1168b81f5425";
        serviceAttritute.className = "serviceAttributes";
        $(serviceAttritute).append(attributeGroup())
        return serviceAttritute;
    }
    
    function attributeGroup() {
        var attributeGroup = document.createElement("div");
        attributeGroup.className = "attributeGroup"
        $(attributeGroup).append("<span>IDD Service (Remote Deposit Capture)</span>");
        $(attributeGroup).append(groupAttribute());
        return attributeGroup;
    }
    
    function groupAttribute() {
        var attribute = document.createElement("div")
        attribute.className = "attribute_value";
        attribute.id = "attribute_6998fb21-04d1-435a-b78e-a45d8cc8f399_value";
        $(attribute).append('<input id="attribute_6998fb21-04d1-435a-b78e-a45d8cc8f399_boolean" type="checkbox" name="booleanAttributes[6998fb21-04d1-435a-b78e-a45d8cc8f399]" value="6998fb21-04d1-435a-b78e-a45d8cc8f399">')
        $(attribute).append('IDD Service (Remote Deposit Capture)<input type="hidden" class="selectedId" id="selected_attribute_6998fb21-04d1-435a-b78e-a45d8cc8f399_value" value="">')
        $(attribute).append('<div id="attribute_6998fb21-04d1-435a-b78e-a45d8cc8f399_mapping" class="mapping"></div>')
    
        var returnComponent = document.createElement("div")
        returnComponent.className = "groupAttribute";
        returnComponent.append(attribute)
    
        return returnComponent;
    }

    return {
        createService: createService
    }
})()

$(document).ready(() => {
    jsonDataStructure.ApplicationNode.forEach((element) => {
        createComponent.createService(element);
    })
})




