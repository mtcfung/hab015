import React from 'react';
import { Message,Field,DependsOn,PersonalInfo,Section,Validate,validation,Condition,CompositeField,FieldList,Layout,isEmpty,CustomTotalPrice,ExternalLink} from 'govhk-form-core';
import moment from 'moment';

export default {
  title: ({ i }) => i`丁部 –	過去6年舉辦境外青年交流／實習項目資料（如適用）`,
  content: ({ i }) => (
    <div>
    <Section title={i`丁部 –	過去6年舉辦境外青年交流／實習項目資料（如適用）`}>
    
    {i`field.label.partD_title1`}<b>{i`field.label.partD_title2`}</b>{i`field.label.partD_title3`}



         <DependsOn fields="fundingScheme,organiserNameOne_fundingScheme,organiserNameTwo_fundingScheme,organiserNameThree_fundingScheme">
                              { (fundingScheme,organiserNameOne_fundingScheme,organiserNameTwo_fundingScheme,organiserNameThree_fundingScheme) => {
                                let view;   
                                let displayInternational = false;
            
         if (!isEmpty(fundingScheme)){
                 if (fundingScheme.includes('international')){
                        displayInternational = true;
                     
                 }}   
         if (!isEmpty(organiserNameOne_fundingScheme)){
                 if (organiserNameOne_fundingScheme.includes('international')){
                        displayInternational = true;
                     
                 }}
        if (!isEmpty(organiserNameTwo_fundingScheme)){
                 if (organiserNameTwo_fundingScheme.includes('international')){
                        displayInternational = true;
                     
                 }}
        if (!isEmpty(organiserNameThree_fundingScheme)){
                 if (organiserNameThree_fundingScheme.includes('international')){
                        displayInternational = true;
                     
                 }}         
        
        if (displayInternational == true){
            view = (
                
                
                
                <div>
                                      
                                      
                                      
                                      <FieldList name="D1InternaltionExchangeHistoryFieldList" maxItems={3} style = {{textAlign : 'justify'}} >
                     
                                      <br />{i`field.label.partD1`}
                                      <Field.Dropdown name="D1i_PreviousExchangeItem" 
                                      label={i`field.label.partD1ititle`}
                                options={[
                                    { value: '201920', label: i`field.label.partD1iOptionB` },
                                    { value: '202324', label: i`field.label.partD1iOptionC` },
                                    { value: '202425', label: i`field.label.partD1iOptionD` },
                                ]}
                                required
                              />
                                <Field.Text name="D1iiItemName" label={i`field.label.partD1iititle`} required />      
                                <Field.Text name="D1iiiItemName" label={i`field.label.partD1iiititle`} required />            
                                <Field.Text name="D1ivDestination" label={i`field.label.partD1ivtitle`} required />                  
                                
                                
                                
                                <Layout.Inline>
                                <b>{i`field.label.partD1vtitle`}</b><br/>
                                <Field.Date name="D1vExchangeDateFrom" label={i`由`} check={{onOrAfter : "2019-05-01",onOrBefore: "2025-05-31",}} config={{ min:"2019-05-01" ,max:"2025-05-31"}} required/>
                                
                                <Field.Date name="D1vExchangeDateTo" label={i`至`}  check={{onOrAfter : "2019-05-01",onOrBefore: "2025-05-31",}} config={{ min:"2019-05-01" ,max:"2025-05-31"}} required/>
                               </Layout.Inline>
                                
                                
                                
                                
                                
                                <Validate  fields="D1vExchangeDateFrom,D1vExchangeDateTo"
                                 test={(field1Value, field2Value) => {
                                    let error;
                                    let startDateValue = new Date(moment(field1Value));
                                      let endDateValue = new Date(moment(field2Value));
                                      
                                      if(startDateValue.getTime() > endDateValue.getTime()){
                                      error = {
                                        D1vExchangeDateTo: {
                                          mustEqual: true,
                                        },
                                      };
                                    }

                                    if(startDateValue.getTime() == endDateValue.getTime()){
                                      error = {
                                        D1vExchangeDateTo: {
                                          mustEqualA: true,
                                        },
                                      };
                                    }
                                
                                    return error;
                                  }}
                                  messages={{
                                    mustEqual: () => i`交流/實習團出發日期不可遲於回程日期`,
                                    mustEqualA: () => i`輸入錯誤，交流/實習團出發及回程日期不可於同一天，請重新選擇交流/實習日期。`,
                                  }}
                                />

                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <CompositeField layout="sentense">
                                {i`field.label.partD1vititle`}<font color="#b30000">*</font>
                                <Field.Integer name="D1viNumExchange" size={5} required /> {i`名`} <br />
                                
                                {i`field.label.partD1viititle`}<font color="#b30000">*</font>
                                <Field.Text name="D1viiActualNumExchange" size={5} required />{i`名`} <br />
                                {i`field.label.partD1viiititle`}  <br />
                                {i`field.label.partD1viiititle1`}<font color="#b30000">*</font>
                                <Field.Text name="D1viiiVerySatifyPert" size={5} required />{i`%`} <br />
                                {i`field.label.partD1viiititle2`}<font color="#b30000">*</font>
                                <Field.Text name="D1viiiSatifyPert" size={5} required />{i`%`} <br />
                                
                                
                                {i`field.label.partD1ixtitle`}<font color="#b30000">*</font>
                                <Field.Text name="D1ixEffectiveDesc" check={{maxLength: 500}} required />
                                </CompositeField>
                                </FieldList>
                </div>
                                
                                
                
                );
        }
        
        
            
            
            
        
        return view;
        }}
        
        </DependsOn>
       
    <DependsOn fields="fundingScheme,organiserNameOne_fundingScheme,organiserNameTwo_fundingScheme,organiserNameThree_fundingScheme">
                              { (fundingScheme,organiserNameOne_fundingScheme,organiserNameTwo_fundingScheme,organiserNameThree_fundingScheme) => {
                                let view;   
                                let displayYouth = false;
            
         if (!isEmpty(fundingScheme)){
                 if (fundingScheme.includes('youthinternship')){
                        displayYouth = true;
                     
                 }
                 if (fundingScheme.includes('youthexchange')){
                        displayYouth = true;
                     
                 }
         }   
         if (!isEmpty(organiserNameOne_fundingScheme)){
                 if (organiserNameOne_fundingScheme.includes('youthinternship')){
                        displayYouth = true;
                     
                 }
                 if (organiserNameOne_fundingScheme.includes('youthexchange')){
                        displayYouth = true;
                     
                 }
         }
         if (!isEmpty(organiserNameTwo_fundingScheme)){
                 if (organiserNameTwo_fundingScheme.includes('youthinternship')){
                        displayYouth = true;
                     
                 }
                 if (organiserNameTwo_fundingScheme.includes('youthexchange')){
                        displayYouth = true;
                     
                 }
         }
         if (!isEmpty(organiserNameThree_fundingScheme)){
                 if (organiserNameThree_fundingScheme.includes('youthinternship')){
                        displayYouth = true;
                     
                 }
                 if (organiserNameThree_fundingScheme.includes('youthexchange')){
                        displayYouth = true;
                     
                 }
         }
         
        
                 
        
        if (displayYouth == true){
            view = (
                <div>
                                      
                                  <FieldList name="D2YouthInternshipExchangeHistoryFieldList" maxItems={5} style = {{textAlign : 'justify'}} >
                                  
                                      {i`field.label.partD2title`}
                                      <Field.Dropdown name="D2i_PreviousExchangeItem" 
                                      label={i`field.label.partD1ititle`}
                                options={[
                                    { value: '201819Exchange', label: i`field.label.partD2iOptionB` },
                                    { value: '201920Exchange', label: i`field.label.partD2iOptionC` },
                                    { value: '202324Exchange', label: i`field.label.partD2iOptionD` },
                                    { value: '202425Exchange', label: i`field.label.partD2iOptionA` },
                                    { value: '201819internship', label: i`field.label.partD2iOptionF` },
                                    { value: '201920internship', label: i`field.label.partD2iOptionG` },
                                    { value: '202324internship', label: i`field.label.partD2iOptionH` },
                                    { value: '202425internship', label: i`field.label.partD2iOptionE` },
                                ]}
                                required
                              />
                              
                              <Field.Text name="D2iiItemName" label={i`field.label.partD1iititle`} required />      
                              <Field.Text name="D2iiiItemName" label={i`field.label.partD1iiititle`} required />            
                              <Field.Text name="D2ivDestination" label={i`field.label.partD1ivtitle`} required /> 
                              
                              <b>{i`field.label.partD2vtitle`}</b><br/>
                              <Layout.Inline>
                              <Field.Date name="D2vExchangeDateFrom" label={i`由`} check={{ required: true }} check={{onOrAfter : "2018-05-01",onOrBefore: "2025-05-31",}} config={{ min:"2018-05-01" ,max:"2025-05-31"}}required/>
                              <Field.Date name="D2vExchangeDateTo" label={i`由`} check={{ required: true }} check={{onOrAfter : "2018-05-01",onOrBefore: "2025-05-31",}} config={{ min:"2018-05-01" ,max:"2025-05-31"}}required/>
                              </Layout.Inline>
                              
                              
                              
                              
                              <Validate  fields="D2vExchangeDateFrom,D2vExchangeDateTo"
                                 test={(field1Value, field2Value) => {
                                    let error;
                                    let startDateValue = new Date(moment(field1Value));
                                      let endDateValue = new Date(moment(field2Value));
                                      
                                      if(startDateValue.getTime() > endDateValue.getTime()){
                                      error = {
                                        D2vExchangeDateTo: {
                                          mustEqual: true,
                                        },
                                      };
                                    }
                                
                                    return error;
                                  }}
                                  messages={{
                                    mustEqual: () => i`交流/實習團出發日期不可遲於回程日期`,
                                  }}
                                />

                                {/*FYI 輸入有錯誤，請檢視及重新輸入過往在「青年內地交流資助計劃」及「青年內地實習資助計劃」下獲批資助及最終成功舉辦的交流／實習項目*/}
                                
                                
                              
                              <CompositeField layout="sentense">
                                {i`field.label.partD2vititle`}<font color="#b30000">*</font>
                                <Field.Integer name="D2viNumExchange" size={5} required /> {i`名`} <br />
                                
                                {i`field.label.partD1viititle`}<font color="#b30000">*</font>
                                <Field.Integer name="D2viiActualNumExchange" size={5} required />{i`名`} <br />  
                                 </CompositeField>
                                 
                                 
                                 </FieldList>     
                                 
                                      </div>
                
                
                
                                
                                
                
                );
        }
        
        
            
            
            
        
        return view;
        }}
        
        </DependsOn>
                
    
         <FieldList name="D3OtherHistoryFieldList" maxItems={4} style = {{textAlign : 'justify'}} >
                
                             {i`field.label.partD3title`}
                              <Field.Text name="D3iItemName" label={i`field.label.partD3ititle`}  />      
                              <Field.Text name="D3iiItemName" label={i`field.label.partD3iititle`}  />            
                              <Field.Text name="D3iiiDestination" label={i`field.label.partD3iiititle`}  /> 
                              
                              <b>{i`field.label.partD3ivtitle`}</b><br />
                              <Layout.Inline>
                              <Field.Date name="D3ivExchangeDateFrom" label={i`由`} check={{ required: true }} check={{onOrAfter : "2019-01-01",onOrBefore: "2024-12-31",}} config={{ min:"2019-01-01" ,max:"2024-12-31"}} />
                              
                              <Field.Date name="D3ivExchangeDateTo" label={i`至`} check={{ required: true }} check={{onOrAfter : "2019-01-01",onOrBefore: "2024-12-31",}} config={{ min:"2019-01-01" ,max:"2024-12-31"}} />
                              </Layout.Inline>
                              
                              <Validate  fields="D3ivExchangeDateFrom,D3ivExchangeDateTo"
                                 test={(field1Value, field2Value) => {
                                    let error;
                                    let startDateValue = new Date(moment(field1Value));
                                      let endDateValue = new Date(moment(field2Value));
                                      
                                      if(startDateValue.getTime() > endDateValue.getTime()){
                                      error = {
                                        D3ivExchangeDateTo: {
                                          mustEqual: true,
                                        },
                                      };
                                    }
                                
                                    return error;
                                  }}
                                  messages={{
                                    mustEqual: () => i`交流/實習團出發日期不可遲於回程日期`,
                                  }}
                                />

                                {/* FYI 輸入有錯誤，請檢視及重新輸入過往在其他曾舉辦的境外交流項目（並非在上述資助計劃下獲批資助） */}


                                
                              <Field.Integer name="D3Participants" label={i`field.label.partD3Participants`}   />  
                              <Field.Text name="D3OverseasReceptionAgencies" label={i`field.label.D3OverseasReceptionAgencies`} check={{maxLength: 500}}  />
                              
                              <Field.Text name="D3vEffectiveDesc" label={i`field.label.partD3vtitle`} check={{maxLength: 500}}  />
                              <Field.Select
                              name="D3viGovtsupport"
                              label={i`field.label.D3vititle`}
                              
                              options={[
                                { value: 'D3viGovtsupport_y', label: i`是`,view: () => (
                                    <Field.Text name="D3viGovtsupportTextbox" label={i`請提供政府機構名稱`} size={40} required /> ) },
                                { value: 'D3viGovtsupport_n', label: i`否` },
                              ]}
                              inline
                            />
                              
                </FieldList>
                
                
                       
                
                

                              
             
   
                
                
    </Section>            
                
    </div>
    )
}