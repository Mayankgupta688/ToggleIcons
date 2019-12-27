

var createComponent = (function() {

    function createService(element) {
        var parentComponent = document.getElementById("account_services");
    
        var newServiceComponent = document.createElement("div")
        newServiceComponent.classList.add("service");
        $(newServiceComponent).append('<span class="serviceTitle" onclick="toggleServiceDetails(event)">' + element.name + '</span>')

        if(element.description == "All domains") {
            newServiceComponent.appendChild(parentServiceAttributes(element))
        } else {

            for(let i = 0; i< element.childNode.length; i++) {
                if(element.childNode[i].childNode.length == 0) {
                    newServiceComponent.appendChild(parentServiceAttributes(element.childNode[i], false))
                } else {
                    newServiceComponent.appendChild(parentServiceAttributes(element.childNode[i], true))
                }
            }
        }
    
        parentComponent.append(newServiceComponent);
    }

    function parentServiceAttributes(element, hasMultipleCheckbox) {
        var serviceAttritute = document.createElement("div")
        serviceAttritute.id = "service_attributes_" + element.key;
        serviceAttritute.className = "serviceAttributes";
        $(serviceAttritute).append(parentAttributeGroup(element, hasMultipleCheckbox))
        return serviceAttritute;
    }

    function parentAttributeGroup(element, hasMultipleCheckbox) {
        var attributeGroup = document.createElement("div");
        attributeGroup.className = "attributeGroup"
        if(hasMultipleCheckbox) {
            $(attributeGroup).append("<div class='attribute_group_header' onclick='toggleGroupDetails(event)' class='group_heading'><span>"+ element.description + "</span></div>");
        } else {
            $(attributeGroup).append("<div class='attribute_group_header' onclick='toggleGroupDetails(event)' class='group_heading'><span>"+ element.displayDescription + "</span></div>");
        }
        
        $(attributeGroup).append(parentGroupAttribute(element, hasMultipleCheckbox));
        return attributeGroup;
    }

    function parentGroupAttribute(element, hasMultipleCheckbox) {
        var attribute = null;
        var returnComponent = null;
        if(!hasMultipleCheckbox) {
            attribute = document.createElement("div")
            attribute.className = "attribute_value";
            attribute.id = "attribute_" + element.domainCode + "_value";
            $(attribute).append('<input id="attribute_' + element.domainCode +'_boolean" type="checkbox" class="input_checkbox" name="booleanAttributes[6998fb21-04d1-435a-b78e-a45d8cc8f399]" value="6998fb21-04d1-435a-b78e-a45d8cc8f399">')
            $(attribute).append(element.description)
            returnComponent = document.createElement("div")
            returnComponent.className = "groupAttribute";
            returnComponent.append(attribute)
            return returnComponent;
        } else {
            returnComponent = document.createElement("div")
            returnComponent.className = "groupAttribute";

            for(var i = 0; i< element.childNode.length; i++) {
                attribute = document.createElement("div")
                attribute.className = "attribute_value";
                attribute.id = "attribute_" + element.childNode[i].domainCode + "_value";
                $(attribute).append('<input id="attribute_' + element.childNode[i].domainCode +'_boolean" type="checkbox" class="input_checkbox" name="booleanAttributes[6998fb21-04d1-435a-b78e-a45d8cc8f399]" value="6998fb21-04d1-435a-b78e-a45d8cc8f399">')
                $(attribute).append(element.childNode[i].description)
                returnComponent.append(attribute)
            }

            return returnComponent;
        }
        
    }

    return {
        createService: createService
    }
})()

$(document).ready(() => {
    var jsonString = JSON.stringify(jsonDataStructure.ApplicationNode)
    console.dir(jsonString)
    jsonDataStructure.ApplicationNode.forEach((element) => {
        createComponent.createService(element);
    })
})




