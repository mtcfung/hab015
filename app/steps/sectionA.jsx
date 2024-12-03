/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, DependsOn, Message, CompositeField, PersonalInfo, isEmpty, FieldList, Validate } from 'govhk-form-core';

/*const checkPracticeItemA = (practiceItemOne,practiceItemTwo,practiceItemThree,practiceItemFour,practiceItemFive,inputNum) => {
  const errors = {};
  if (!isEmpty(inputNum) && inputNum >= 2) {
    if (!isEmpty(practiceItemOne) && !isEmpty(practiceItemTwo)) {
      if (practiceItemOne == practiceItemTwo) {
        errors.$ = { checkPracticeItemAValidate: true };
      }
    }
  } 
  if (!isEmpty(inputNum) && inputNum >= 3) {
    if (!isEmpty(practiceItemOne) && !isEmpty(practiceItemTwo) && !isEmpty(practiceItemThree)) {
      if ((practiceItemOne == practiceItemTwo) || (practiceItemOne == practiceItemThree) || (practiceItemTwo == practiceItemThree)) {
        errors.$ = { checkPracticeItemAValidate: true };
      }
    }
  } 
  if (!isEmpty(inputNum) && inputNum >= 4) {
    if (!isEmpty(practiceItemOne) && !isEmpty(practiceItemTwo) && !isEmpty(practiceItemThree) && !isEmpty(practiceItemFour)) {
      if ((practiceItemOne == practiceItemTwo) || (practiceItemOne == practiceItemThree) || (practiceItemOne == practiceItemFour) || (practiceItemTwo == practiceItemThree) || (practiceItemTwo == practiceItemFour) || (practiceItemThree == practiceItemFour)) {
        errors.$ = { checkPracticeItemAValidate: true };
      }
    } 
  } 
  if (!isEmpty(inputNum) && inputNum >= 5) {
    if (!isEmpty(practiceItemOne) && !isEmpty(practiceItemTwo) && !isEmpty(practiceItemThree) && !isEmpty(practiceItemFour) && !isEmpty(practiceItemFive)) {
      if ((practiceItemOne == practiceItemTwo) || (practiceItemOne == practiceItemThree) || (practiceItemOne == practiceItemFour) || (practiceItemOne == practiceItemFive) || (practiceItemTwo == practiceItemThree) || (practiceItemTwo == practiceItemFour) || (practiceItemTwo == practiceItemFive) ||(practiceItemThree == practiceItemFour) || (practiceItemThree == practiceItemFive) || (practiceItemFour == practiceItemFive)) {
        errors.$ = { checkPracticeItemAValidate: true };
      }
    }  
  }
  return errors;
};*/


/*const checkorganiserNamePartA = (organiserNameOne,organiserNameTwo) => {
  const errors = {};
    if (!isEmpty(organiserNameOne) && !isEmpty(organiserNameTwo)) {
      if (organiserNameOne == organiserNameTwo) {
        errors.$ = { checkorganiserNameOneValidate: true };
      }
    }
  return errors;
};*/




export default {
  title: ({ i }) => i`step1.partA`,
  content: ({ i }) => (
    <div>

      <Section title={i`step1.partA`}>
        <Field.Text name="organiserNameChi" label={i`field.label.partA.organiserNameChi`} size="20" check={{ required: true, maxLength: 30 }} />
        <Field.Text name="organiserNameEn" label={i`field.label.partA.organiserNameEn`} size="20" check={{ required: true, maxLength: 120 }} />
        <Field.Text name="unitChi" label={i`field.label.partA.unitChi`} size="20" check={{ maxLength: 30 }} />
        <Field.Text name="unitEng" label={i`field.label.partA.unitEng`} size="20" check={{ maxLength: 100 }} />
        
       
        <Field.SelectMultiple
  name="fundingScheme"
  label={(<span>{i`field.label.partA.fundingScheme_1`}<b><u>{i`field.label.partA.fundingScheme_2`}</u></b>{i`field.label.partA.fundingScheme_3`}</span>)}
  options={[
    { value: 'international', label: i`field.label.partA.international` },
    { value: 'youthexchange', label: i`field.label.partA.youthexchange` },
    { value: 'youthinternship', label: i`field.label.partA.youthinternship` },
  ]}
  />
        
        
        
        
        
        
        
        
        <Field.Select
          name="registrationStatus" label={<span>{i`field.label.partA.registrationStatusPart1`}<br />{i`field.label.partA.registrationStatusPart2`}<i>{i`field.label.partA.registrationStatusPart3`}<b>{i`field.label.partA.registrationStatusPart4`}</b>{i`field.label.partA.registrationStatusPart5`}</i></span>}
          options={[
              { value: 'option1', label: i`field.label.partA.registrationOption1` },
              { value: 'option2', label: (<span>{i`field.label.partA.registrationOption2Part1`}<i><b>{i`field.label.partA.registrationOption2Part2`}</b></i>{i`)`}</span>) },
              { value: 'option3', label: i`field.label.partA.registrationOption3` },
              { value: 'option4', label: i`field.label.partA.registrationOption4` },
          ]}
          required
        />
        <DependsOn fields="registrationStatus">
        {
          (value) => {
          let view;
          if (value == 'option1') {
            view = (
              <div>
              <Message type="info">{<span>{i`field.label.partA.option1AttachPartA`}<b><u>{i`field.label.partA.option1AttachPartB`}</u></b>{i`field.label.partA.option1AttachPartC`}</span>}</Message>
              <Field.Select
                name="registrationType" label={i`field.label.partA.registrationType`}
                options={[
                    { value: 'cbo1_a', 
                      label: i`field.label.partA.cbo1_a`,               
                      view: () => (
                        <div>
                          <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                            {i`field.label.partA.cbo1_a_Part1`}
                            <Field.Text name="cbo1_a_input1" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part2`}
                            <Field.Text name="cbo1_a_input2" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part3`}
                            <Field.Text name="cbo1_a_input3" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part4`}
                            <Field.Text name="cbo1_a_input4" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part5`}
                            <Field.Text name="cbo1_a_input5" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part6`}
                            <Field.Text name="cbo1_a_input6" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_a_Part7`}
                          </CompositeField><br />{i`field.label.partA.option1_cbo1_a_Attach`}
                          
                          <br />
                          <b>{i`field.label.partA.option1_cbo1_a_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            name="option1_cbo1_a_AttachONE" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '1 MB',
                              fileSize: '1 MB',
                              maxFiles: 1,
                              
                            }}
                            required
                          />
                          
                          <br /><b>{i`field.label.partA.option1_cbo1_a_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            name="option1_cbo1_a_AttachTWO" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '3 MB',
                              fileSize: '3 MB',
                              maxFiles: 1,
                              
                            }}
                            required
                          />
                          
                          
                          <DependsOn fields="option1_cbo1_a_AttachONE,option1_cbo1_a_AttachTWO">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                          
                                                          
                        </div>
                      ), 
                    },
                    { value: 'cbo1_b', 
                      label: i`field.label.partA.cbo1_b`, 
                      view: () => (
                        <div>
                          <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                            {i`field.label.partA.cbo1_b_Part1`}
                            <Field.Text name="cbo1_b_input1" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part2`}
                            <Field.Text name="cbo1_b_input2" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part3`}
                            <Field.Text name="cbo1_b_input3" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part4`}
                            <Field.Text name="cbo1_b_input4" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part5`}
                            <Field.Text name="cbo1_b_input5" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part6`}
                            <Field.Text name="cbo1_b_input6" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_b_Part7b`}
                          </CompositeField><br />
                          
                          {i`field.label.partA.option1_cbo1_b_Attach`}<br />
                          
                          <br /><b>{i`field.label.partA.option1_cbo1_b_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            multiple
                            name="option1_cbo1_b_AttachONE" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '1 MB',
                              fileSize: '1 MB',
                              maxFiles: 1,
                              
                            }}
                            required
                          />
                            <br /><b>{i`field.label.partA.option1_cbo1_b_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            multiple
                            name="option1_cbo1_b_AttachTWO" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '3 MB',
                              fileSize: '3 MB',
                              
                              maxFiles: 1,
                            }}
                            required
                          />
                          
                          <DependsOn fields="option1_cbo1_b_AttachONE,option1_cbo1_b_AttachTWO">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                          
                                                          
                          
                        </div>
                      ), 
                    },
                    { value: 'cbo1_c', 
                      label: i`field.label.partA.cbo1_c`, 
                      view: () => (
                        <div>
                          <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                            {i`field.label.partA.cbo1_c_Part1`}
                            <Field.Text name="cbo1_c_input1" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part2`}
                            <Field.Text name="cbo1_c_input2" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part3`}
                            <Field.Text name="cbo1_c_input3" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part4`}
                            <Field.Text name="cbo1_c_input4" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part5`}
                            <Field.Text name="cbo1_c_input5" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part6`}
                            <Field.Text name="cbo1_c_input6" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                            {i`field.label.partA.cbo1_c_Part7`}
                          </CompositeField><br />
                          
                          {i`field.label.partA.option1_cbo1_b_Attach`}<br /><br />
                          
                          <b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            multiple
                            name="option1_cbo1_c_AttachONE" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '1 MB',
                              fileSize: '1 MB',
                              maxFiles: 1,
                            }}
                            required
                          />
                          <br/>
                          <b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                            multiple
                            name="option1_cbo1_c_AttachTWO" 
                            check={{
                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                              totalFileSize: '3 MB',
                              fileSize: '3 MB',
                              maxFiles: 1,
                            }}
                            required
                          />
                          
                          <DependsOn fields="option1_cbo1_c_AttachONE,option1_cbo1_c_AttachTWO">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                          
                          
                        </div>
                      ), 
                    },
                    { value: 'cbo1_d', 
                      label: (<span><DependsOn fields="registrationType">
                        {(registrationType) => {
                          let view;
                          let hide = true;
                          if (registrationType == 'cbo1_d') {
                            hide = false;
                          }
                          view=(
                    <div>
                        {/* <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                          {i`field.label.partA.cbo1_c_Part1`}
                          <Field.Text name="cbo1_c_input1" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_c_Part2`}
                          <Field.Text name="cbo1_c_input2" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_c_Part3`}
                        </CompositeField><br />
                        <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                          {i`field.label.partA.cbo1_b_Part1`}
                          <Field.Text name="cbo1_c_input3" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part2`}
                          <Field.Text name="cbo1_c_input4" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part3`}
                          <Field.Text name="cbo1_c_input5" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part4`}
                          <Field.Text name="cbo1_c_input6" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part5`}
                          <Field.Text name="cbo1_c_input7" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part6`}
                          <Field.Text name="cbo1_c_input8" inputProps={{disabled:hide}} hideLabel={true} required check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part7`}
                        </CompositeField><br/>{i`field.label.partA.option1_cbo1_c_Attach`} */}
                        <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                          {i`field.label.partA.cbo1_d_Part1`}
                          <Field.Text name="cbo1_d_input1" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_d_Part2`}
                          <Field.Text name="cbo1_d_input2" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_d_Part3`}
                        </CompositeField><br />
                      </div>
                          );
                          return view;
                        }}
                        </DependsOn></span>),
                        view: () => (
                          <div>
                            <CompositeField layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                          {i`field.label.partA.cbo1_b_Part1`}
                          <Field.Text name="cbo1_d_input3" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part2`}
                          <Field.Text name="cbo1_d_input4" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part3`}
                          <Field.Text name="cbo1_d_input5" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part4`}
                          <Field.Text name="cbo1_d_input6" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part5`}
                          <Field.Text name="cbo1_d_input7" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part6`}
                          <Field.Text name="cbo1_d_input8" required check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                          {i`field.label.partA.cbo1_b_Part7`}
                        </CompositeField><br/><br />
                        
                        
                        <br />{i`field.label.partA.option1_cbo1_b_Attach`}<br /><br />
                        
                        <b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                          <Field.File 
                          multiple
                          name="option1_cbo1_d_AttachONE" 
                          check={{
                            fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                            totalFileSize: '1 MB',
                            fileSize: '1 MB',
                            
                            maxFiles: 1,
                          }}
                          required
                        />
                        <br/>
                        <b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><font color="b30000">*</font><br />
                          <Field.File 
                          multiple
                          name="option1_cbo1_d_AttachTWO" 
                          check={{
                            fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                            totalFileSize: '3 MB',
                            fileSize: '3 MB',
                            
                            maxFiles: 1,
                          }}
                          required
                        />
                        
                        
                        <DependsOn fields="option1_cbo1_d_AttachONE,option1_cbo1_d_AttachTWO">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                        
                          </div>
                      ),  
                    },
                ]}
                required
              />
              </div>
            );
          } else if (value == 'option2') {
            view = (
              <div>
               <Field.File
                   
                  key="option2AttachONE"
                  name="option2AttachONE"
                  label={i`field.label.partA.option2Attach1`} 
                  check={{
                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                    totalFileSize: '1 MB',
                    fileSize: '1 MB',
                    minFiles: 2,
                    maxFiles: 3,
                    
                  }}
                  required
                />
                <Field.File
                   
                  key="option2AttachTWO"
                  name="option2AttachTWO"
                  label={i`field.label.partA.option2Attach2`} 
                  check={{
                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                    totalFileSize: '1 MB',
                    fileSize: '1 MB',
                    minFiles: 2,
                    maxFiles: 3,
                    
                  }}
                  required
                />
                <DependsOn fields="option2AttachONE,option2AttachTWO">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>                
                
                
              </div>
            );
          } else if (value == 'option3') {
            view = (
              <div>
              
               <Field.File 
                  multiple
                  key="option3Attach"
                  name="option3Attach"
                  label={i`field.label.partA.option2Attach`} 
                  check={{
                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                    totalFileSize: '3 MB',
                    fileSize: '3 MB',
                    minFiles: 1,
                    maxFiles: 3,
                  }}
                  required
                />
              </div>
            );
          } else if (value == 'option4') {
            view = (
              <div>
               <Field.File 
                  multiple
                  key="option4Attach"
                  name="option4Attach"
                  label={i`field.label.partA.option2Attach`} 
                  check={{
                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                    totalFileSize: '3 MB',
                    fileSize: '3 MB',
                    minFiles: 1,
                    maxFiles: 3,
                  }}
                  required
                />
              </div>
            );
          }
          return view;
          }
        }
        </DependsOn>
        <Field.Text name="homeAdd" label={i`field.label.partA.addr`} required check={{maxLength: 150}}/>
        <Field.Text name="TelNum" label={<span>{i`field.label.partA.contant`}<br />{i`field.label.partA.telNum`}</span>} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
        <PersonalInfo.Email name="Email" label={i`field.label.partA.email`} check={{ required: true, minLength: 5, maxLength: 70 }} />
        {/*<Field.Text name="fax" label={i`field.label.partA.fax`} check={{ required: false, charset: 'digits', minLength: 8, maxLength: 15 }} />*/}
        <Field.Text name="url" label={i`field.label.partA.url`} size="20" check={{ required: true, charset: 'alphanumeric', maxLength: 100 }}  />
        


      
     <Field.Select name="join" label={i`field.label.partA.join`}
                        options={[
                            { value: 'y', label: i`field.label.partA.y` },
                            { value: 'n', label: i`field.label.partA.n` },
                        ]}
                        required
    />   
    
    
    <DependsOn fields="join">
                        {
                          (value) => {
                            let view;
                            if (!isEmpty(value) && value == 'y') {
                              view = (
                                  
                                <div>
                                  
                                  <Field.Dropdown
                                    name="joinNum" label={i`field.label.partA.joinNum`}
                                    options={[
                                        { value: '1', label: i`field.label.partA.1` },
                                        { value: '2', label: i`field.label.partA.2` },
                                        { value: '3', label: i`field.label.partA.3` },
                                    ]}
                                    required
                                  />
                                  <DependsOn fields="joinNum"> 
                                    {
                                      (value)=> {
                                        let view;
                                        
                                        if (!isEmpty(value)) {
                                          view = (
                                            <div>
                                              {parseInt(value) >= 1 && 
                                                <div>
                                                  <hr />
                                                  <h3>{i`field.label.partA.organiserNameOne`}</h3>
                                                  <Field.Text name="organiserNameOne_practiceItemOneChi" label={i`field.label.partA.organiserNameOneChi`} size="20" check={{ required: true, maxLength: 30 }} />
                                                  <Field.Text name="organiserNameOne_practiceItemOneEng" label={i`field.label.partA.organiserNameOneEng`} size="20" check={{ required: true,maxLength: 120 }} />

                                                  <Field.Text name="organiserNameOne_unitChi" label={i`field.label.partA.organiserNameOne_unitChi`} size="20" check={{ maxLength: 30 }} />
                                                  <Field.Text name="organiserNameOne_unitEng" label={i`field.label.partA.unitEng`} size="20" check={{ maxLength: 100 }} />
                                                  
                                                  
                                                  <Field.SelectMultiple name="organiserNameOne_fundingScheme" label={(<span>{i`(iv)`}{i`field.label.partA.organiserNamefundingScheme_1`}<b><u>{i`field.label.partA.fundingScheme_2`}</u></b>{i`field.label.partA.fundingScheme_3`}</span>)}
                                                   options={[
                                                    { value: 'international', label: i`field.label.partA.international` },
                                                    { value: 'youthexchange', label: i`field.label.partA.youthexchange` },
                                                    { value: 'youthinternship', label: i`field.label.partA.youthinternship` },
                                                    ]}
                                                  />
                                                  
                                                  

                                                  
                                                  <Field.Select
                                                    name="registrationStatus_organiserOne_practiceItemOne" label={i`field.label.partA.registrationStatus_organiserOne`}
                                                    options={[
                                                        { value: 'option1', label: i`field.label.partA.registrationOption1` },
                                                        { value: 'option2', label: (<span>{i`field.label.partA.registrationOption2Part1`}<i><b>{i`field.label.partA.registrationOption2Part2`}</b></i>{i`)`}</span>) },
                                                        { value: 'option3', label: i`field.label.partA.registrationOption3` },
                                                        { value: 'option4', label: i`field.label.partA.registrationOption4` },
                                                    ]}
                                                    required
                                                  />
                                                  <DependsOn fields="registrationStatus_organiserOne_practiceItemOne">
                                                  {
                                                    (value) => {
                                                    let view;
                                                    if (value == 'option1') {
                                                      view = (
                                                        <div>
                                                        <Message type="info">{<span>{i`field.label.partA.option1AttachPartA`}<b><u>{i`field.label.partA.option1AttachPartB`}</u></b>{i`field.label.partA.option1AttachPartC`}</span>}</Message>
                                                        <Field.Select
                                                          name="registrationType_join1_practiceItemOne" label={i`field.label.partA.registrationType`}
                                                          options={[
                                                              { value: 'cbo1_a', 
                                                                label: i`field.label.partA.cbo1_a`,               
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_a_Part1`}
                                                                      <Field.Text name="cbo1_a_input1_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part2`}
                                                                      <Field.Text name="cbo1_a_input2_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part3`}
                                                                      <Field.Text name="cbo1_a_input3_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part4`}
                                                                      <Field.Text name="cbo1_a_input4_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part5`}
                                                                      <Field.Text name="cbo1_a_input5_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part6`}
                                                                      <Field.Text name="cbo1_a_input6_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part7`}
                                                                    </CompositeField>
                                                                    
                                                                    
                                                                    <br />{i`field.label.partA.option1_cbo1_a_Attach`}
                                                                    
                                                                    <br /><br /><b>{i`field.label.partA.option1_cbo1_a_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_a_Attach1_join1_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach1_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_a_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_a_Attach2_join1_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach2_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_a_Attach1_join1_practiceItemOne,option1_cbo1_a_Attach2_join1_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                                    
                                                                    
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                              { value: 'cbo1_b', 
                                                                label: i`field.label.partA.cbo1_b`, 
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_b_input1_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_b_input2_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_b_input3_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_b_input4_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_b_input5_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_b_input6_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7b`}
                                                                    </CompositeField><br />{i`field.label.partA.option1_cbo1_b_Attach`}
                                                                    
                                                                    <br /><br /><b>{i`field.label.partA.option1_cbo1_b_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach1_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                     <br /><b>{i`field.label.partA.option1_cbo1_b_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach2_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                     <DependsOn fields="option1_cbo1_b_Attach1_join1_practiceItemOne,option1_cbo1_b_Attach2_join1_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                                    
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                        { value: 'cbo1_c', 
                                                           label: i`field.label.partA.cbo1_c`, 
                                                            view: () => (
                                                                <div>
                                                                 <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                    {i`field.label.partA.cbo1_c_Part1`}
                                                                 <Field.Text name="cbo1_c_input1_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part2`}
                                                                 <Field.Text name="cbo1_c_input2_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part3`}
                                                                <Field.Text name="cbo1_c_input3_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part4`}
                                                                <Field.Text name="cbo1_c_input4_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part5`}
                                                                <Field.Text name="cbo1_c_input5_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part6`}
                                                                <Field.Text name="cbo1_c_input6_join1_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part7`}
                                                                </CompositeField>
                                                                <br />{i`field.label.partA.option1_cbo1_c_Attach`}<br />
                                                                
                                                                <br /><b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach1_join1_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '1 MB',
                                                                    fileSize: '1 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach2_join1_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '3 MB',
                                                                    fileSize: '3 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                
                                                                <DependsOn fields="option1_cbo1_c_Attach1_join1_practiceItemOne,option1_cbo1_c_Attach2_join1_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                          
                                                          
                                                                </div>
                                                                ), 
                                                            },
                                                              { value: 'cbo1_d', 
                                                                label: (<span><DependsOn fields="registrationType_join1_practiceItemOne">
                                                                  {(registrationType_join1_practiceItemOne) => {
                                                                    let view;
                                                                    let hide = true;
                                                                    if (registrationType_join1_practiceItemOne == 'cbo1_d') {
                                                                      hide = false;
                                                                    }
                                                                  return (
                                                                      <div>
                                                                        <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_d_Part1`}
                                                                      <Field.Text name="cbo1_d_input1_join1_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part2`}
                                                                      <Field.Text name="cbo1_d_input2_join1_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part3`}
                                                                    </CompositeField><br />
                                                                      </div>
                                                                    );
                                                                    }}
                                                                  </DependsOn></span>),
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_d_input3_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_d_input4_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_d_input5_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_d_input6_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_d_input7_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_d_input8_join1_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7`}
                                                                    </CompositeField>
                                                                    <br />{i`field.label.partA.option1_cbo1_c_Attach`} <br />                   
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />     
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach1_join1_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach1_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />     
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach2_join1_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach2_join1_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_d_Attach1_join1_practiceItemOne,option1_cbo1_d_Attach2_join1_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn> 
                                                                  </div>
                                                                ),  
                                                              },
                                                          ]}
                                                          required
                                                        />
                                                        </div>
                                                      );
                                                    } else if (value == 'option2') {
                                                      view = (
                                                        <div>
                                                        <Field.File
                                                            key="option2Attach1_join1_practiceItemOne" 
                                                            name="option2Attach1_join1_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach1`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                              }}
                                                            required
                                                          />
                                                          <Field.File
                                                            key="option2Attach2_join1_practiceItemOne" 
                                                            name="option2Attach2_join1_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach2`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                              }}
                                                            required
                                                          />
                                                          
                                                          <DependsOn fields="option2Attach1_join1_practiceItemOne,option2Attach2_join1_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />

                                                                      
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          </div>
                                                      );
                                                    } else if (value == 'option3') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option3Attach_join1_practiceItemOne"
                                                            name="option3Attach_join1_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                          />
                                                      );
                                                    } else if (value == 'option4') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option4Attach_join1_practiceItemOne"
                                                            name="option4Attach_join1_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                        />
                                                      );
                                                    }
                                                    return view;
                                                    }
                                                  }
                                                  </DependsOn>
                                                </div>
                                              }
                                              {parseInt(value) >= 2 && 
                                                <div>
                                                  <hr />
                                                  <h3>{i`field.label.partA.organiserNameTwo`}</h3>
                                                  <Field.Text name="organiserNameTwo_practiceItemOneChi" label={i`field.label.partA.organiserNameTwoChi`} size="20" check={{ required: true, maxLength: 50 }} />
                                                  
                                                  <Field.Text name="organiserNameTwo_practiceItemOneEng" label={i`field.label.partA.organiserNameTwoEng`} size="20" check={{ required: true,maxLength: 120 }} />

                                                  <Field.Text name="organiserNameTwo_unitChi" label={i`field.label.partA.organiserNameOne_unitChi`} size="20" check={{ maxLength: 30 }} />
                                                  <Field.Text name="organiserNameTwo_unitEng" label={i`field.label.partA.unitEng`} size="20" check={{ maxLength: 100 }} />
                                                  
                                                  <Field.SelectMultiple name="organiserNameTwo_fundingScheme" label={(<span>{i`(vii)`}{i`field.label.partA.organiserNamefundingScheme_1`}<b><u>{i`field.label.partA.fundingScheme_2`}</u></b>{i`field.label.partA.fundingScheme_3`}</span>)}
                                                   options={[
                                                    { value: 'international', label: i`field.label.partA.international` },
                                                    { value: 'youthexchange', label: i`field.label.partA.youthexchange` },
                                                    { value: 'youthinternship', label: i`field.label.partA.youthinternship` },
                                                    ]}
                                                  />
                                                  
                                                  
                                                  
                                                  <Field.Select
                                                    name="registrationStatus_organiserTwo_practiceItemOne" label={i`field.label.partA.registrationStatus_organiserTwo`}
                                                    options={[
                                                        { value: 'option1', label: i`field.label.partA.registrationOption1` },
                                                        { value: 'option2', label: (<span>{i`field.label.partA.registrationOption2Part1`}<i><b>{i`field.label.partA.registrationOption2Part2`}</b></i>{i`)`}</span>) },
                                                        { value: 'option3', label: i`field.label.partA.registrationOption3` },
                                                        { value: 'option4', label: i`field.label.partA.registrationOption4` },
                                                    ]}
                                                    required
                                                  />
                                                  <DependsOn fields="registrationStatus_organiserTwo_practiceItemOne">
                                                  {
                                                    (value) => {
                                                    let view;
                                                    if (value == 'option1') {
                                                      view = (
                                                        <div>
                                                        <Message type="info">{<span>{i`field.label.partA.option1AttachPartA`}<b><u>{i`field.label.partA.option1AttachPartB`}</u></b>{i`field.label.partA.option1AttachPartC`}</span>}</Message>
                                                        <Field.Select
                                                          name="registrationType_join2_practiceItemOne" label={i`field.label.partA.registrationType`}
                                                          options={[
                                                              { value: 'cbo1_a', 
                                                                label: i`field.label.partA.cbo1_a`,               
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_a_Part1`}
                                                                      <Field.Text name="cbo1_a_input1_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part2`}
                                                                      <Field.Text name="cbo1_a_input2_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part3`}
                                                                      <Field.Text name="cbo1_a_input3_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part4`}
                                                                      <Field.Text name="cbo1_a_input4_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part5`}
                                                                      <Field.Text name="cbo1_a_input5_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part6`}
                                                                      <Field.Text name="cbo1_a_input6_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part7`}
                                                                    </CompositeField><br />{i`field.label.partA.option1_cbo1_a_Attach`}<br />
                                                                    
                                                                     <br /><b>{i`field.label.partA.option1_cbo1_a_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_a_Attach1_join2_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach1_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                       
                                                                      }}
                                                                      required
                                                                    />
 
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_a_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File
                                                                      key="option1_cbo1_a_Attach2_join2_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach2_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_a_Attach1_join2_practiceItemOne,option1_cbo1_a_Attach2_join2_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />

                                                                      
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                                    
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                              { value: 'cbo1_b', 
                                                                label: i`field.label.partA.cbo1_b`, 
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_b_input1_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_b_input2_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_b_input3_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_b_input4_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_b_input5_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_b_input6_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7b`}
                                                                    </CompositeField><br />{i`field.label.partA.option1_cbo1_b_Attach`}<br />
                                                                    
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_b_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach1_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_b_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach2_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_b_Attach1_join2_practiceItemOne,option1_cbo1_b_Attach2_join2_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                          
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                              { value: 'cbo1_c', 
                                                           label: i`field.label.partA.cbo1_c`, 
                                                            view: () => (
                                                                <div>
                                                                 <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                    {i`field.label.partA.cbo1_c_Part1`}
                                                                 <Field.Text name="cbo1_c_input1_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part2`}
                                                                 <Field.Text name="cbo1_c_input2_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part3`}
                                                                <Field.Text name="cbo1_c_input3_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part4`}
                                                                <Field.Text name="cbo1_c_input4_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part5`}
                                                                <Field.Text name="cbo1_c_input5_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part6`}
                                                                <Field.Text name="cbo1_c_input6_join2_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part7`}
                                                                </CompositeField><br />{i`field.label.partA.option1_cbo1_c_Attach`}<br />
                                                                
                                                                <br /><b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach1_join2_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '1 MB',
                                                                    fileSize: '1 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach2_join2_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '3 MB',
                                                                    fileSize: '3 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                
                                                                <DependsOn fields="option1_cbo1_c_Attach1_join2_practiceItemOne,option1_cbo1_c_Attach2_join2_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                          
                                                                </div>
                                                                ), 
                                                            },
                                                            { value: 'cbo1_d', 
                                                                label: (<span><DependsOn fields="registrationType_join2_practiceItemOne">
                                                                {(registrationType_join2_practiceItemOne) => {
                                                                  let view;
                                                                  let hide = true;
                                                                  if (registrationType_join2_practiceItemOne == 'cbo1_d') {
                                                                    hide = false;
                                                                  }
                                                                return (
                                                                  <div>
                                                                     <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_d_Part1`}
                                                                      <Field.Text name="cbo1_d_input1_join2_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part2`}
                                                                      <Field.Text name="cbo1_d_input2_join2_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}}  /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part3`}
                                                                    </CompositeField><br />
                                                                  </div>
                                                                );
                                                                }}
                                                                  </DependsOn></span>),
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_d_input3_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_d_input4_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_d_input5_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_d_input6_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_d_input7_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_d_input8_join2_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7`}
                                                                    </CompositeField><br />{i`field.label.partA.option1_cbo1_c_Attach`}<br />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach1_join2_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach1_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach2_join2_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach2_join2_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    
                                                                    <DependsOn fields="option1_cbo1_d_Attach1_join2_practiceItemOne,option1_cbo1_d_Attach2_join2_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                          
                                                                  </div>
                                                                ),  
                                                              },
                                                          ]}
                                                          required
                                                        />
                                                        </div>
                                                      );
                                                    } else if (value == 'option2') {
                                                      view = (
                                                        <div>
                                                        <Field.File
                                                            
                                                            key="option2Attach1_join2_practiceItemOne" 
                                                            name="option2Attach1_join2_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach1`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                            }}
                                                            required
                                                          />
                                                          <Field.File
                                                            
                                                            key="option2Attach2_join2_practiceItemOne" 
                                                            name="option2Attach2_join2_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach2`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                            }}
                                                            required
                                                          />
                                                          
                                                          <DependsOn fields="option2Attach1_join2_practiceItemOne,option2Attach2_join2_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />

                                                                      
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                        </div>
                                                      );
                                                    } else if (value == 'option3') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option3Attach_join2_practiceItemOne" 
                                                            name="option3Attach_join2_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                          />
                                                      );
                                                    } else if (value == 'option4') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option4Attach_join2_practiceItemOne"
                                                            name="option4Attach_join2_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                          />
                                                      );
                                                    }
                                                    return view;
                                                    }
                                                  }
                                                  </DependsOn>
                                                </div>
                                              }
                                              {parseInt(value) >= 3 && 
                                                <div>
                                                  <hr />
                                                  <h3>{i`field.label.partA.organiserNameThree`}</h3>
                                                  <Field.Text name="organiserNameThree_practiceItemOne" label={i`field.label.partA.organiserNameThreeChi`} size="20" check={{ required: true, maxLength: 50 }} />
                                                  <Field.Text name="organiserNameThree_practiceItemOneEng" label={i`field.label.partA.organiserNameThreeEng`} size="20" check={{ required: true,maxLength: 120 }} />

                                                  <Field.Text name="organiserNameThree_unitChi" label={i`field.label.partA.organiserNameOne_unitChi`} size="20" check={{ maxLength: 30 }} />
                                                  <Field.Text name="organiserNameThree_unitEng" label={i`field.label.partA.unitEng`} size="20" check={{ maxLength: 100 }} />
                                                  
                                                  <Field.SelectMultiple name="organiserNameThree_fundingScheme" label={(<span>{i`(x)`}{i`field.label.partA.organiserNamefundingScheme_1`}<b><u>{i`field.label.partA.fundingScheme_2`}</u></b>{i`field.label.partA.fundingScheme_3`}</span>)}
                                                   options={[
                                                    { value: 'international', label: i`field.label.partA.international` },
                                                    { value: 'youthexchange', label: i`field.label.partA.youthexchange` },
                                                    { value: 'youthinternship', label: i`field.label.partA.youthinternship` },
                                                    ]}
                                                  />
                                                  
                                                  
                                                  
                                                  
                                                  <Field.Select
                                                    name="registrationStatus_organiserThree_practiceItemOne" label={i`field.label.partA.registrationStatus_organiserThree`}
                                                    options={[
                                                        { value: 'option1', label: i`field.label.partA.registrationOption1` },
                                                        { value: 'option2', label: (<span>{i`field.label.partA.registrationOption2Part1`}<i><b>{i`field.label.partA.registrationOption2Part2`}</b></i>{i`)`}</span>) },
                                                        { value: 'option3', label: i`field.label.partA.registrationOption3` },
                                                        { value: 'option4', label: i`field.label.partA.registrationOption4` },
                                                    ]}
                                                    required
                                                  />
                                                  <DependsOn fields="registrationStatus_organiserThree_practiceItemOne">
                                                  {
                                                    (value) => {
                                                    let view;
                                                    if (value == 'option1') {
                                                      view = (
                                                        <div>
                                                        <Message type="info">{<span>{i`field.label.partA.option1AttachPartA`}<b><u>{i`field.label.partA.option1AttachPartB`}</u></b>{i`field.label.partA.option1AttachPartC`}</span>}</Message>
                                                        <Field.Select
                                                          name="registrationType_join3_practiceItemOne" label={i`field.label.partA.registrationType`}
                                                          options={[
                                                              { value: 'cbo1_a', 
                                                                label: i`field.label.partA.cbo1_a`,               
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_a_Part1`}
                                                                      <Field.Text name="cbo1_a_input1_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part2`}
                                                                      <Field.Text name="cbo1_a_input2_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part3`}
                                                                      <Field.Text name="cbo1_a_input3_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part4`}
                                                                      <Field.Text name="cbo1_a_input4_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part5`}
                                                                      <Field.Text name="cbo1_a_input5_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part6`}
                                                                      <Field.Text name="cbo1_a_input6_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_a_Part7`}
                                                                    </CompositeField><br />{i`field.label.partA.option1_cbo1_a_Attach`}<br />
                                                                    
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_a_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_a_Attach1_join3_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach1_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_a_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_a_Attach2_join3_practiceItemOne"
                                                                      name="option1_cbo1_a_Attach2_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        
                                                                      }}
                                                                      required
                                                                    />
                                                                    <DependsOn fields="option1_cbo1_a_Attach1_join3_practiceItemOne,option1_cbo1_a_Attach2_join3_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                                    
                                                                    
                                                                    
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                              { value: 'cbo1_b', 
                                                                label: i`field.label.partA.cbo1_b`, 
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_b_input1_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_b_input2_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_b_input3_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_b_input4_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_b_input5_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_b_input6_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7b`}
                                                                    </CompositeField>
                                                                    
                                                                    <br />{i`field.label.partA.option1_cbo1_b_Attach`}<br />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_b_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach1_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_b_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    
                                                                    <Field.File 
                                                                      
                                                                      name="option1_cbo1_b_Attach2_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_b_Attach1_join3_practiceItemOne,option1_cbo1_b_Attach2_join3_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                                    
                                                                  </div>
                                                                ), 
                                                              },
                                                        { value: 'cbo1_c', 
                                                           label: i`field.label.partA.cbo1_c`, 
                                                            view: () => (
                                                                <div>
                                                                 <CompositeField hideLabel={true} layout="sentense" style={{ marginLeft: "1.5em" }}>
                                                                    {i`field.label.partA.cbo1_c_Part1`}
                                                                 <Field.Text name="cbo1_c_input1_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part2`}
                                                                 <Field.Text name="cbo1_c_input2_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part3`}
                                                                <Field.Text name="cbo1_c_input3_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part4`}
                                                                <Field.Text name="cbo1_c_input4_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part5`}
                                                                <Field.Text name="cbo1_c_input5_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part6`}
                                                                <Field.Text name="cbo1_c_input6_join3_practiceItemOne" hideLabel={true} required check={{ maxLength: 5, }} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                    {i`field.label.partA.cbo1_c_Part7`}
                                                                </CompositeField>
                                                                <br />{i`field.label.partA.option1_cbo1_c_Attach`}<br />
                                                               
                                                               
                                                               <b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach1_join3_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '1 MB',
                                                                    fileSize: '1 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                <Field.File 
                                                                    
                                                                    name="option1_cbo1_c_Attach2_join3_practiceItemOne" 
                                                                    check={{
                                                                    fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                    totalFileSize: '3 MB',
                                                                    fileSize: '3 MB',
                                                                    minFiles: 1,
                                                                    maxFiles: 1,
                                                                    }}
                                                                    required
                                                                />
                                                                
                                                                <DependsOn fields="option1_cbo1_c_Attach1_join3_practiceItemOne,option1_cbo1_c_Attach2_join3_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                                
                                                                </div>
                                                                ), 
                                                            },
                                                              { value: 'cbo1_d', 
                                                                label: (<span><DependsOn fields="registrationType_join3_practiceItemOne">
                                                                {(registrationType_join3_practiceItemOne) => {
                                                                  let view;
                                                                  let hide = true;
                                                                  if (registrationType_join3_practiceItemOne == 'cbo1_d') {
                                                                    hide = false;
                                                                  }
                                                                return (
                                                                  <div>
                                                                     <CompositeField hideLabel={true} layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_d_Part1`}
                                                                      <Field.Text name="cbo1_d_input1_join3_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part2`}
                                                                      <Field.Text name="cbo1_d_input2_join3_practiceItemOne" inputProps={{disabled:hide}} hideLabel={true} check={{ maxLength: 5, required:!hide}}  /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_d_Part3`}
                                                                    </CompositeField><br />
                                                                  </div>
                                                                );
                                                                }}
                                                                  </DependsOn></span>),
                                                                view: () => (
                                                                  <div>
                                                                    <CompositeField layout="sentense" style={{wordBreak:'break-all', textAlign:'justify'}}>
                                                                      {i`field.label.partA.cbo1_b_Part1`}
                                                                      <Field.Text name="cbo1_d_input3_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part2`}
                                                                      <Field.Text name="cbo1_d_input4_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part3`}
                                                                      <Field.Text name="cbo1_d_input5_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part4`}
                                                                      <Field.Text name="cbo1_d_input6_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part5`}
                                                                      <Field.Text name="cbo1_d_input7_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part6`}
                                                                      <Field.Text name="cbo1_d_input8_join3_practiceItemOne" check={{ maxLength: 5, required:true}} /><sup><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b></sup>
                                                                      {i`field.label.partA.cbo1_b_Part7`}
                                                                    </CompositeField>
                                                                    <br />{i`field.label.partA.option1_cbo1_c_Attach`}<br />
                                                                    
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach1`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach1_join3_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach1_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '1 MB',
                                                                        fileSize: '1 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <br /><b>{i`field.label.partA.option1_cbo1_c_Attach2`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b><br />
                                                                    <Field.File 
                                                                      
                                                                      key="option1_cbo1_d_Attach2_join3_practiceItemOne"
                                                                      name="option1_cbo1_d_Attach2_join3_practiceItemOne" 
                                                                      check={{
                                                                        fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                                        totalFileSize: '3 MB',
                                                                        fileSize: '3 MB',
                                                                        minFiles: 1,
                                                                        maxFiles: 1,
                                                                      }}
                                                                      required
                                                                    />
                                                                    
                                                                    <DependsOn fields="option1_cbo1_d_Attach1_join3_practiceItemOne,option1_cbo1_d_Attach2_join3_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                          
                                                                    
                                                                  </div>
                                                                ),  
                                                              },
                                                          ]}
                                                          required
                                                        />
                                                        </div>
                                                      );
                                                    } else if (value == 'option2') {
                                                      view = (
                                                        <div>
                                                        <Field.File
                                                            
                                                            key="option2Attach1_join3_practiceItemOne" 
                                                            name="option2Attach1_join3_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach1`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                            }}
                                                            required
                                                          />
                                                          <Field.File
                                                            
                                                            key="option2Attach2_join3_practiceItemOne" 
                                                            name="option2Attach2_join3_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach2`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '1 MB',
                                                              fileSize: '1 MB',
                                                              minFiles: 1,
                                                              maxFiles: 1,
                                                            }}
                                                            required
                                                          />
                                                          
                                                          
                                                          <DependsOn fields="option2Attach1_join3_practiceItemOne,option2Attach2_join3_practiceItemOne">
                                                          {(value1 , value2) => {
                                                              let view;
                                                              if (isEmpty(value1) || isEmpty(value2)) {
                                                                  view = (
                                                                      <div>
                                                                     <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>{i`field.label.partA.option2AttachMessage1`} </b> <br /><br />
                                                                      </div>)}
                                                                  return view;
                                                              
                                                          }}
                                                          </DependsOn>
                                                          
                                                        </div>
                                                      );
                                                    } else if (value == 'option3') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option3Attach_join3_practiceItemOne" 
                                                            name="option3Attach_join3_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                          />
                                                      );
                                                    } else if (value == 'option4') {
                                                      view = (
                                                        <Field.File 
                                                            multiple
                                                            key="option4Attach_join3_practiceItemOne"
                                                            name="option4Attach_join3_practiceItemOne"
                                                            label={i`field.label.partA.option2Attach`} 
                                                            check={{
                                                              fileExt: ['JPG','JPEG', 'PNG', 'PDF', 'DOC', 'DOCX'],
                                                              totalFileSize: '3 MB',
                                                              fileSize: '3 MB',
                                                              minFiles: 1,
                                                              maxFiles: 3,
                                                            }}
                                                            required
                                                          />
                                                      );
                                                    }
                                                    return view;
                                                    }
                                                  }
                                                  </DependsOn>
                                                </div>
                                              }
                                            </div>
                                          
											




                                          
                                          
                                          
                                          
                                          
                                          
                                          );
                                        }
                                        return view;
                                      }
                                    }
                                  </DependsOn>
                                </div>  
                              );
                              return view;
                            }
                            return view;
                          }
                        }
                        
                      </DependsOn>
                      


        
        
        
    </Section>    
    </div>
  ),
};
