
var jsonDataStructure = (function() {
    var parentNodeList = [];

    function NodeCreator() {
        window.applicationData.forEach(element => {
            addParentNode(element)
        });
        return parentNodeList;
    }
    
    function addParentNode(element) {
        var newParentNode = new ParentNode(element);
        parentNodeList.push(newParentNode)
    }   
    
    function ParentNode(parentObj) {
        this.key = parentObj.domainCode;
        this.name = parentObj.name;
        this.description = parentObj.description;
        this.displayDescription = parentObj.bankMandateDescription
        this.checkAll = true;
        this.hasChild = parentObj.familyBankMandateCodeList.length > 0;
        this.childNode = [];
        var that = this;
        if(this.hasChild && parentObj.description != "All domains") {
            parentObj.familyBankMandateCodeList.forEach((childElement) => {
                addChildNode(childElement, that);
            })
        }
    }
    
    function addChildNode(childElement, parentObj) {
        var newChildElement =  new ChildNode(childElement);
        newChildElement.familyCode = childElement.familyCode;
        parentObj.childNode.push(newChildElement)
    }
    
    function ChildNode(childElement) {
        this.key = childElement.domainCode;
        this.description = childElement.description;
        this.displayDescription = childElement.bankMandateDescription;
        this.checkAll = true;
        this.hasChild = childElement.bankMandateCodeList.length > 0;
        this.childNode = [];
        var that = this;
        if(this.hasChild  && childElement.description != "All families") {
            childElement.bankMandateCodeList.forEach((childNode) => {
                AddSubChildNode(childNode, that);
            })
        }
    }

    function SubChildNode(childElement) {
        this.key = childElement.domainCode;
        this.description = childElement.description;
        this.displayDescription = childElement.bankMandateDescription;
        this.checkAll = true;
        this.familyCode = childElement.familyCode;
        this.subFamilyCode = childElement.subFamilyCode;
    }
    
    function AddSubChildNode(subChildElement, childElement) {
        var newSubChildElement =  new SubChildNode(subChildElement);
        childElement.childNode.push(newSubChildElement)
    }

    return {
        ApplicationNode: window.jsonData
    }
    
})();