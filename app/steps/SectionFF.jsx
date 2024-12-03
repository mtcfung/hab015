/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, DependsOn, Message, CompositeField, PersonalInfo, isEmpty, FieldList, Validate, ExternalLink } from 'govhk-form-core';
//import timeSlotsConfig from './timeslot';
import { element } from 'prop-types';

const checkF = (groupRepChi,groupRepTitle,groupRepJob,groupRepTelNum,groupRepEmail,itemRepOneChi,itemRepOneTitle,itemRepOneJob,itemRepOneTelNum,itemRepOneEmail,itemRepTwoChi,itemRepTwoTitle,itemRepTwoJob,itemRepTwoTelNum,itemRepTwoEmail,itemRepThreeChi,itemRepThreeTitle,itemRepThreeJob,itemRepThreeTelNum,itemRepThreeEmail,itemRepFourChi,itemRepFourTitle,itemRepFourJob,itemRepFourTelNum,itemRepFourEmail,itemRepFiveChi,itemRepFiveTitle,itemRepFiveJob,itemRepFiveTelNum,itemRepFiveEmail) => {
  const errors = {};
  if (!isEmpty(groupRepChi) && !isEmpty(groupRepTitle) && !isEmpty(groupRepJob) && !isEmpty(groupRepTelNum) && !isEmpty(groupRepEmail)) {
    if ((groupRepChi == itemRepOneChi  && groupRepTitle == itemRepOneTitle && groupRepJob == itemRepOneJob && groupRepTelNum == itemRepOneTelNum && groupRepEmail == itemRepOneEmail) ||  
    (groupRepChi == itemRepTwoChi  && groupRepTitle == itemRepTwoTitle && groupRepJob == itemRepTwoJob && groupRepTelNum == itemRepTwoTelNum && groupRepEmail == itemRepTwoEmail) || 
    (groupRepChi == itemRepThreeChi  && groupRepTitle == itemRepThreeTitle && groupRepJob == itemRepThreeJob && groupRepTelNum == itemRepThreeTelNum && groupRepEmail == itemRepThreeEmail) || 
    (groupRepChi == itemRepFourChi  && groupRepTitle == itemRepFourTitle && groupRepJob == itemRepFourJob && groupRepTelNum == itemRepFourTelNum && groupRepEmail == itemRepFourEmail) || 
    (groupRepChi == itemRepFiveChi  && groupRepTitle == itemRepFiveTitle && groupRepJob == itemRepFiveJob && groupRepTelNum == itemRepFiveTelNum && groupRepEmail == itemRepFiveEmail)) {
      errors.$ = { checkFValidate: true };
    }
  }
  return errors;
};

export default {
  title: ({ i }) => i`step1.partF`,
  content: ({ i }) => (
    <div>
      <Section title={i`step1.partF`}>
      
      <b>{i`field.label.partF.title`}</b>
        <Message type="info">{<span>{i`field.label.partF.note1`}<br/>{i`field.label.partF.note2`}<br/>{i`field.label.partF.note3`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}</Message>
        
        
        
        
        <PersonalInfo.ChiFullName name="groupRepChi" label={i`field.label.partF.groupRepChi`} check={{ required: true, maxLength: 6 }} />
        <PersonalInfo.FullName name="groupRepEng" label={i`field.label.partF.groupRepEng`} />
        
        
        <Field.Select
          name="groupRepTitle"
          label={i`稱謂:`}
          required
          options={[
            { value: 'mr', label: i`先生` },
            { value: 'ms', label: i`女士` },
          ]}
          inline
        />
        <Field.Text name="groupRepJob" label={i`field.label.partF.groupRepJob`} size="20" check={{ required: true, maxLength: 50 }} />
        <Field.Text name="groupRepTelNum" label={i`field.label.partF.groupRepTelNum`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
        <PersonalInfo.Email name="groupRepEmail" label={i`field.label.partF.email`} required check={{ required: true, minLength: 5, maxLength: 70 }} />
        
        <b>{i`field.label.partF.groupRepAddr`}</b><b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b>
        {<Message type="info">{i`field.label.partF.note4`}</Message>}
        <Field.Textarea name="groupRepAddr" label={i`field.label.partF.groupRepAddr`} hideLabel check={{ required: true, maxLength: 150 }} />
        
        
        
        <b>{i`field.label.partF.Responsible`}</b>
        <Message type="info">{<span>{i`field.label.partF.note5`}<br/>{i`field.label.partF.note6`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}</Message>
        <PersonalInfo.ChiFullName name="ResponsiblegroupRepChi" label={i`field.label.partF.groupRepChi`} check={{ required: true, maxLength: 6 }} />
        <PersonalInfo.FullName name="ResponsiblegroupRepEng" label={i`field.label.partF.groupRepEng`} />
        
        
        <Field.Select
          name="ResponsiblegroupRepTitle"
          label={i`稱謂:`}
          required
          options={[
            { value: 'mr', label: i`先生` },
            { value: 'ms', label: i`女士` },
          ]}
          inline
        />
        <Field.Text name="ResponsiblegroupRepJob" label={i`field.label.partF.groupRepJob`} size="20" check={{ required: true, maxLength: 50 }} />
        <Field.Text name="ResponsiblegroupRepTelNumOffice" label={i`field.label.partF.groupRepTelNumOffice`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
        <Field.Text name="ResponsiblegroupRepTelNumMobile" label={i`field.label.partF.groupRepTelNumMobile`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
        <PersonalInfo.Email name="ResponsiblegroupRepEmail" label={i`field.label.partF.email`} required check={{ required: true, minLength: 5, maxLength: 70 }} />

        
        
        <DependsOn fields="ResponsiblegroupRepChi,groupRepChi,ResponsiblegroupRepJob,groupRepJob">
        {(dResponsiblegroupRepChi,dgroupRepChi,dResponsiblegroupRepJob,dgroupRepJob) => {
            let view;
            
            if(dResponsiblegroupRepChi == dgroupRepChi && dResponsiblegroupRepJob == dgroupRepJob){
                    view = ( <Message type="info">{i`field.label.partF.note7`}</Message>)
                
            };
            return view;
        }}</DependsOn>
 
        
      </Section>
      <DependsOn fields="joinNum">
          {
            (value) => {
            let view;
            if (!isEmpty(value)) {
              view = (
                <div>
                  {value >= 1 && 
                    <Section title={i`field.label.partF.itemRepOne`}>
                    <Message type="info">{<span>{i`field.label.partF.note8`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}</Message>
                     <PersonalInfo.ChiFullName name="itemRepOneChi" label={i`field.label.partF.groupRepChi`} check={{ required: true, maxLength: 6 }} />
                    <PersonalInfo.FullName name="itemRepOneEng" label={i`field.label.partF.groupRepEng`} />
                     
                      <Field.Select
                        name="itemRepOneTitle"
                        label={i`稱謂`}
                        required
                        options={[
                          { value: 'mr', label: i`先生` },
                          { value: 'ms', label: i`女士` },
                        ]}
                        inline
                      />
                      <Field.Text name="itemRepOneJob" label={i`field.label.partF.groupRepJob`} size="20" check={{ required: true,  maxLength: 50 }} />
                      <Field.Text name="itemRepOneTelNum" label={i`field.label.partF.groupRepTelNum`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
                      <PersonalInfo.Email name="itemRepOneEmail" label={i`field.label.partF.email`} required check={{ required: true, minLength: 5, maxLength: 70 }} />
                      <Field.Textarea name="itemRepOnegroupRepAddr" label={i`field.label.partF.groupRepAddr`} check={{ required: true, maxLength: 150 }} />
                      
                      
                      
                      
                      
                   </Section>
                  }
                  {value >= 2 &&
                    <Section title={i`field.label.partF.itemRepTwo`}>
                    <Message type="info">{<span>{i`field.label.partF.note8`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}</Message>
                    <PersonalInfo.ChiFullName name="itemRepTwoChi" label={i`field.label.partF.groupRepChi`} check={{ required: true, maxLength: 6 }} />
                    <PersonalInfo.FullName name="itemRepTwoEng" label={i`field.label.partF.groupRepEng`} />
                    
                      <Field.Select
                        name="itemRepTwoTitle"
                        label={i`稱謂`}
                        required
                        options={[
                          { value: 'mr', label: i`先生` },
                          { value: 'ms', label: i`女士` },
                        ]}
                        inline
                      />
                      <Field.Text name="itemRepTwoJob" label={i`field.label.partF.groupRepJob`} size="20" check={{ required: true, maxLength: 50 }} />
                      <Field.Text name="itemRepTwoTelNum" label={i`field.label.partF.groupRepTelNum`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
                      <PersonalInfo.Email name="itemRepTwoEmail" label={i`field.label.partF.email`} required check={{ required: true, minLength: 5, maxLength: 70 }} />
                      <Field.Textarea name="itemRepTwogroupRepAddr" label={i`field.label.partF.groupRepAddr`} check={{ required: true, maxLength: 150 }} />




                      </Section>
                  }
                  {value >= 3 &&
                    <Section title={i`field.label.partF.itemRepThree`}>
                    <Message type="info">{<span>{i`field.label.partF.note8`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}</Message>
                    <PersonalInfo.ChiFullName name="itemRepThreeChi" label={i`field.label.partF.groupRepChi`} check={{ required: true, maxLength: 6 }} />
                    
                    <PersonalInfo.FullName name="itemRepThreeEng" label={i`field.label.partF.groupRepEng`} />
                      <Field.Select
                        name="itemRepThreeTitle"
                        label={i`稱謂`}
                        required
                        options={[
                          { value: 'mr', label: i`先生` },
                          { value: 'ms', label: i`女士` },
                        ]}
                        inline
                      />
                      <Field.Text name="itemRepThreeJob" label={i`field.label.partF.groupRepJob`} size="20" check={{ required: true, maxLength: 50 }} />
                      <Field.Text name="itemRepThreeTelNum" label={i`field.label.partF.groupRepTelNum`} check={{ required: true, charset: 'digits', minLength: 8, maxLength: 15 }} />
                      <PersonalInfo.Email name="itemRepThreeEmail" label={i`field.label.partF.email`} required check={{ required: true, minLength: 5, maxLength: 70 }} />
                      <Field.Textarea name="itemRepThreegroupRepAddr" label={i`field.label.partF.groupRepAddr`} check={{ required: true, maxLength: 150 }} />




                  </Section>
                  }
                  
                  
                  
                  
                </div>
              );
            }
            return view;
          }
        }
      </DependsOn>
      <Validate fields="groupRepChi,groupRepTitle,groupRepJob,groupRepTelNum,groupRepEmail,itemRepOneChi,itemRepOneTitle,itemRepOneJob,itemRepOneTelNum,itemRepOneEmail,itemRepTwoChi,itemRepTwoTitle,itemRepTwoJob,itemRepTwoTelNum,itemRepTwoEmail,itemRepThreeChi,itemRepThreeTitle,itemRepThreeJob,itemRepThreeTelNum,itemRepThreeEmail,itemRepFourChi,itemRepFourTitle,itemRepFourJob,itemRepFourTelNum,itemRepFourEmail,itemRepFiveChi,itemRepFiveTitle,itemRepFiveJob,itemRepFiveTelNum,itemRepFiveEmail"
          test={(groupRepChi,groupRepTitle,groupRepJob,groupRepTelNum,groupRepEmail,itemRepOneChi,itemRepOneTitle,itemRepOneJob,itemRepOneTelNum,itemRepOneEmail,itemRepTwoChi,itemRepTwoTitle,itemRepTwoJob,itemRepTwoTelNum,itemRepTwoEmail,itemRepThreeChi,itemRepThreeTitle,itemRepThreeJob,itemRepThreeTelNum,itemRepThreeEmail,itemRepFourChi,itemRepFourTitle,itemRepFourJob,itemRepFourTelNum,itemRepFourEmail,itemRepFiveChi,itemRepFiveTitle,itemRepFiveJob,itemRepFiveTelNum,itemRepFiveEmail) => 
          (checkF(groupRepChi,groupRepTitle,groupRepJob,groupRepTelNum,groupRepEmail,itemRepOneChi,itemRepOneTitle,itemRepOneJob,itemRepOneTelNum,itemRepOneEmail,itemRepTwoChi,itemRepTwoTitle,itemRepTwoJob,itemRepTwoTelNum,itemRepTwoEmail,itemRepThreeChi,itemRepThreeTitle,itemRepThreeJob,itemRepThreeTelNum,itemRepThreeEmail,itemRepFourChi,itemRepFourTitle,itemRepFourJob,itemRepFourTelNum,itemRepFourEmail,itemRepFiveChi,itemRepFiveTitle,itemRepFiveJob,itemRepFiveTelNum,itemRepFiveEmail)
          )}
        messages={{checkFValidate: () => i`errors.checkF`,}}
      />
      <DependsOn fields="inputNum,join,joinNum,joinTwo,joinNumTwo,joinThree,joinNumThree,joinFour,joinNumFour,joinFive,joinNumFive">
        {
          (inputNum,join,joinNum,joinTwo,joinNumTwo,joinThree,joinNumThree,joinFour,joinNumFour,joinFive,joinNumFive) => {
          let view;
          let max = 1;
          if (!isEmpty(inputNum) && inputNum >= 1) {
            if (!isEmpty(join) && join == 'y') {
              if (!isEmpty(joinNum)) {
                max += parseInt(joinNum);
              }
            }
          } 
          if (!isEmpty(inputNum) && inputNum >= 2) {
            if (!isEmpty(joinTwo) && joinTwo == 'y') {
              if (!isEmpty(joinNumTwo)) {
                max += parseInt(joinNumTwo);
              }
            }
          } 
          if (!isEmpty(inputNum) && inputNum >= 3) {
            if (!isEmpty(joinThree) && joinThree == 'y') {
              if (!isEmpty(joinNumThree)) {
                max += parseInt(joinNumThree);
              }
            }
          } 
          if (!isEmpty(inputNum) && inputNum >= 4) {
            if (!isEmpty(joinFour) && joinFour == 'y') {
              if (!isEmpty(joinNumFour)) {
                max += parseInt(joinNumFour);
              }
            }
          } 
          if (!isEmpty(inputNum) && inputNum >= 5) {
            if (!isEmpty(joinFive) && joinFive == 'y') {
              if (!isEmpty(joinNumFive)) {
                max += parseInt(joinNumFive);
              }
            }
          } 
          view = (
            <div>
              <Section title={i`field.label.partF.attachmentTitle`}>
                <div>
                <Field.File 
                multiple
                name="partF_attachment"
                label={(<span>{i`field.label.partF.attachment`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>)}
                check={{
                  fileExt: ['DOC', 'DOCX', 'JPEG', 'JPG', 'PDF', 'PNG'],
                  maxFiles: 4,
                   totalFileSize:"1 MB",
                }}
                messages={{minFiles: () => i`errors.partF_attachment`}}
                required
                />
                </div>
              </Section>
            </div>
            );
          return view;
          }
        }
        </DependsOn>
    </div>
  ),
};
