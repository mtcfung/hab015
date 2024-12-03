import React from 'react';
import { ExternalLink,Section,CustomTotalPrice,Field } from 'govhk-form-core';


export default {
  title: ({ i }) => i`step.SectionC.title`,
  
  
  content: ({ i }) => (
    <div>
        <Section
    title={i`component.SectionC_Desc.title`}
    >
                                    <Field.File 
                                        name="BudgetUploadExcelFile" 
                                        label={<span>{i`field.label.partB.BudgetUploadExcelFileA`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}
                                        check={{
                                          fileExt: ['XLS', 'XLSX'],
                                          maxFiles: 1,
                                          totalFileSize:"1 MB",
                                        }}
                                        required
                                      />
                                      <b>{i`field.label.partB.BudgetUploadExcelFile2`}</b>
                                      <ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>
                                      {i`field.label.partB.BudgetUploadExcelFileC`}
                                      <b style={{ color: '#b30000', 'font-size': '16px', marginLeft: '5px' }}>*</b>
                                      <br />
                                      {i`field.label.partC.2_1`}
                                      <br />
                                      {i`field.label.partC.2_2`}
                                      <br />
                                      {i`field.label.partC.2_3`}
                                      <br />
                                      {i`field.label.partC.2_4`}
                                      <br />
                                      {i`field.label.partC.2_5`}
                                      <br />
                                      {i`field.label.partC.2_6`}
                                      <br />
                                      {i`field.label.partC.2_7`}
                                      <br />
                                      {i`field.label.partC.2_8`}
                                      <br />
                                      {i`field.label.partC.2_9`}
                                      <br />
                                      {i`field.label.partC.2_10`}
                                      <br />
                                      {i`field.label.partC.2_11`}
                                      <br />
<Field.File
    name="ProposalUploadExcelFile"
    label={i`component.ProposalUploadExcelFile.label`}
    multiple
    check={ {
            maxFiles:2,
            fileExt:['doc', 'docx', 'pdf'],
            minFiles:1,
            totalFileSize:"3 MB",
    } }
    hideLabel
    required
/>
<Field.File 
                                        name="ScheduleUploadFile" 
                                        label={<span>{i`field.label.partC.ScheduleUpload`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`field.label.partB.BudgetUploadExcelFileC`}</span>}
                                        check={{
                                          fileExt: ['DOC', 'DOCX','PDF'],
                                          maxFiles: 1,
                                          totalFileSize:"1 MB",
                                        }}
                                        required
                                      />
</Section>

    </div>
  ),
};
