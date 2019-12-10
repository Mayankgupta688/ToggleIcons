window.applicationData = [
    {
       "domainCode":"D000",
       "name":"All Domains",
       "description":"All domains",
       "bankMandateDescription":"Hold all bank mandates, without any restriction or reserve, on behalf of the company, except the mandate of sub-delegation",
       "familyBankMandateCodeList":[
       ]
    },
    {
       "domainCode":"ACMT",
       "name":"Account Management",
       "description":"Account Management",
       "bankMandateDescription":"Sign all bank account management request",
       "familyBankMandateCodeList":[
          {
             "familyCode":"F000",
             "domainCode":"ACMT",
             "description":"All families",
             "bankMandateDescription":"Sign all bank account management request",
             "bankMandateCodeList":[
             ]
          },
          {
             "familyCode":"OPCL",
             "domainCode":"ACMT",
             "description":"Opening and Closing",
             "bankMandateDescription":"Open, close, transfer all types of bank account",
             "bankMandateCodeList":[
                {
                   "subFamilyCode":"S000",
                   "domainCode":"ACMT",
                   "familyCode":"OPCL",
                   "description":"All Operations",
                   "bankMandateDescription":"Open, close, transfer all types of bank account",
                   "typeCode":"CGI-MP",
                   "post":true,
                   "file":true,
                   "online":true,
                   "phone":false
                   
                }
             ]
          }
       ]
    },
    {
       "domainCode":"PMNT",
       "name":"Payments",
       "description":"Payments",
       "bankMandateDescription":"Sign all payments and collections",
       "familyBankMandateCodeList":[
       ]
    }
 ]