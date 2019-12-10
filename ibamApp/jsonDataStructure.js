
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
        this.checkAll = true;
        this.hasChild = parentObj.familyBankMandateCodeList.length > 0;
        this.childNode = [];
        var that = this;
        if(this.hasChild) {
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
        this.checkAll = true;
        this.hasChild = childElement.bankMandateCodeList.length > 0;
        this.subChildNode = [];
        var that = this;
        if(this.hasChild) {
            childElement.bankMandateCodeList.forEach((subChildElement) => {
                AddSubChildNode(subChildElement, that);
            })
        }
    }

    function SubChildNode(childElement) {
        this.key = childElement.domainCode;
        this.description = childElement.bankMandateDescription;
        this.checkAll = true;
        this.familyCode = childElement.familyCode;
        this.subFamilyCode = childElement.subFamilyCode;
    }
    
    function AddSubChildNode(subChildElement, childElement) {
        var newSubChildElement =  new SubChildNode(subChildElement);
        childElement.subChildNode.push(newSubChildElement)
    }

    return {
        ApplicationNode: NodeCreator()
    }
    
})();