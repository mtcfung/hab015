import React from 'react';
import { Message,Field,DependsOn,PersonalInfo,Section,Validate,validation,Condition,CompositeField,FieldList,Layout,isEmpty,CustomTotalPrice,ExternalLink } from 'govhk-form-core';
import moment from 'moment';

const countries = i => [
    { value: '厄瓜多爾', label: i`厄瓜多爾`, country:`CSAmerica` },
    { value: '巴西', label: i`latinAmerica.brazil`, country:`CSAmerica` },
    { value: '巴拿馬', label: i`latinAmerica.Panama`, country: `CSAmerica` },
    { value: '古巴', label: i`latinAmerica.cuba`, country: `CSAmerica` },
    { value: '尼加拉瓜', label: i`latinAmerica.nicaragua`, country: `CSAmerica` },
    { value: '多米尼加', label: i`多米尼加`, country: `CSAmerica` },
    { value: '阿根廷', label: i`latinAmerica.argentina`, country: `CSAmerica` },
    { value: '洪都拉斯', label: i`latinAmerica.Honduras`, country: `CSAmerica` },
    { value: '玻利維亞', label: i`latinAmerica.bolivia`, country: `CSAmerica` },
    { value: '哥倫比亞', label: i`latinAmerica.Colombia`, country: `CSAmerica` }, 
    { value: '哥斯達黎加', label: i`哥斯達黎加`, country: `CSAmerica`},
    { value: '烏拉圭', label: i`latinAmerica.Uruguay`, country: `CSAmerica` }, 
    { value: '秘魯', label: i`latinAmerica.peru`, country: `CSAmerica` },
    { value: '智利', label: i`latinAmerica.Chile`, country: `CSAmerica` }, 	
    { value: '薩爾瓦多', label: i`latinAmerica.ElSalvador`, country: `CSAmerica` },
    { value: '加拿大', label: i`加拿大`, country: `northAmerica` },
	{ value: '美國', label: i`美國`, country: `northAmerica` },
    { value: '墨西哥', label: i`墨西哥`, country: `northAmerica` },
    { value: '澳洲', label: i`澳洲`, country: `NZAus` },
    { value: '新西蘭', label: i`新西蘭`, country: `NZAus` },
	{ value: '丹麥', label: i`丹麥`, country: `northEurope` },
	{ value: '冰島', label: i`冰島`, country: `northEurope` },
	{ value: '芬蘭', label: i`芬蘭`, country: `northEurope` },
	{ value: '挪威', label: i`挪威`, country: `northEurope` },
	{ value: '瑞典', label: i`瑞典`, country: `northEurope` },
	{ value: '比利時', label: i`比利時`, country: `westEurope` },
	{ value: '西班牙', label: i`西班牙`, country: `westEurope` },
	{ value: '法國', label: i`法國`, country: `westEurope` },
	{ value: '英國', label: i`英國`, country: `westEurope` },
	{ value: '梵蒂岡', label: i`梵蒂岡`, country: `westEurope` },
	{ value: '荷蘭', label: i`荷蘭`, country: `westEurope` },
	{ value: '意大利', label: i`意大利`, country: `westEurope` },
	{ value: '愛爾蘭', label: i`愛爾蘭`, country: `westEurope` },
	{ value: '瑞士', label: i`瑞士`, country: `westEurope` },
	{ value: '葡萄牙', label: i`葡萄牙`, country: `westEurope` },
	{ value: '德國', label: i`德國`, country: `westEurope` },
	{ value: '盧森堡', label: i`盧森堡`, country: `westEurope` },
	{ value: '土耳其', label: i`土耳其`, country: `midEastEurope` },
	{ value: '白俄羅斯', label: i`白俄羅斯`, country: `midEastEurope` },
    { value: '立陶宛', label: i`立陶宛`, country: `midEastEurope` },
    { value: '匈牙利', label: i`匈牙利`, country: `midEastEurope` },
    { value: '克羅地亞', label: i`克羅地亞`, country: `midEastEurope` },
    { value: '希臘', label: i`希臘`, country: `midEastEurope` },
    { value: '拉脫維亞', label: i`拉脫維亞`, country: `midEastEurope` },
    { value: '波斯尼亞和黑塞哥維那', label: i`波斯尼亞和黑塞哥維那`, country: `midEastEurope` },
    { value: '波蘭', label: i`波蘭`, country: `midEastEurope` },
    { value: '阿爾巴尼亞', label: i`阿爾巴尼亞`, country: `midEastEurope` },
    { value: '保加利亞', label: i`保加利亞`, country: `midEastEurope` },
    { value: '捷克', label: i`捷克`, country: `midEastEurope` },
    { value: '斯洛文尼亞', label: i`斯洛文尼亞`, country: `midEastEurope` },
    { value: '斯洛伐克', label: i`斯洛伐克`, country: `midEastEurope` },
    { value: '黑山', label: i`黑山`, country: `midEastEurope` },
    { value: '塞浦路斯', label: i`塞浦路斯`, country: `midEastEurope` },
    { value: '塞爾維亞', label: i`塞爾維亞`, country: `midEastEurope` },
    { value: '奧地利', label: i`奧地利`, country: `midEastEurope` },
    { value: '愛沙尼亞', label: i`愛沙尼亞`, country: `midEastEurope` },
    { value: '羅馬尼亞', label: i`羅馬尼亞`, country: `midEastEurope` },
    { value: '巴林', label: i`巴林`, country: `midEast_africa` },
    { value: '卡塔爾', label: i`卡塔爾`, country: `midEast_africa` },
    { value: '沙特阿拉伯', label: i`沙特阿拉伯`, country: `midEast_africa` },
    { value: '坦桑尼亞', label: i`坦桑尼亞`, country: `midEast_africa` },
    { value: '肯亞', label: i`肯亞`, country: `midEast_africa` },
    { value: '阿聯酋', label: i`阿聯酋`, country: `midEast_africa` },
    { value: '南非', label: i`南非`, country: `midEast_africa` },
    { value: '迦納', label: i`迦納`, country: `midEast_africa` },
    { value: '烏干達', label: i`烏干達`, country: `midEast_africa` },
    { value: '摩洛哥', label: i`摩洛哥`, country: `midEast_africa` },
    { value: '盧旺達', label: i`盧旺達`, country: `midEast_africa` },
	{ value: '日本', label: i`日本`, country: `japanKorea` },
	{ value: '韓國', label: i`韓國`, country: `japanKorea` },

    { value: '印尼', label: i`印尼`, country: `EastsouthAsia` },
    { value: '老撾', label: i`老撾`, country: `EastsouthAsia` },
    { value: '汶萊', label: i`汶萊`, country: `EastsouthAsia` },
    { value: '東帝汶', label: i`東帝汶`, country: `EastsouthAsia` },
    { value: '柬埔寨', label: i`柬埔寨`, country: `EastsouthAsia` },
    { value: '泰國', label: i`泰國`, country: `EastsouthAsia` },	
	{ value: '馬來西亞', label: i`馬來西亞`, country: `EastsouthAsia` },	
	{ value: '菲律賓', label: i`菲律賓`, country: `EastsouthAsia` },
	{ value: '越南', label: i`越南`, country: `EastsouthAsia` },
    { value: '新加坡', label: i`新加坡`, country: `EastsouthAsia` },
    { value: '緬甸', label: i`緬甸`, country: `EastsouthAsia` },
    { value: '不丹', label: i`不丹`, country: `southAsia` },
	{ value: '尼泊爾', label: i`尼泊爾`, country: `southAsia` },
	{ value: '印度', label: i`印度`, country: `southAsia` },
	{ value: '孟加拉', label: i`孟加拉`, country: `southAsia` },
	{ value: '馬爾代夫', label: i`馬爾代夫`, country: `southAsia` },
	{ value: '斯里蘭卡', label: i`斯里蘭卡`, country: `southAsia` },
    { value: '土庫曼', label: i`土庫曼`, country: `midwestnorthAsia` },
    { value: '吉爾吉斯', label: i`吉爾吉斯`, country: `midwestnorthAsia` },
    { value: '亞美尼亞', label: i`亞美尼亞`, country: `midwestnorthAsia` },
    { value: '阿塞拜疆', label: i`阿塞拜疆`, country: `midwestnorthAsia` },
    { value: '哈薩克', label: i`哈薩克`, country: `midwestnorthAsia` },
    { value: '格魯吉亞', label: i`格魯吉亞`, country: `midwestnorthAsia` },
    { value: '烏茲別克', label: i`烏茲別克`, country: `midwestnorthAsia` },
    { value: '塔吉克', label: i`塔吉克`, country: `midwestnorthAsia` },
    { value: '蒙古', label: i`蒙古`, country: `midwestnorthAsia` },
    ];
    
const style = `
table, th, td {
  border-color:#cfd4d4;
  border-style:double;
  width: 850px;
},
#govhkForm th {
  text-align: center; !important;
}
`;

const cauculatePeriod = (startDate,endDate) => {
    
  let startDateValue = new Date(moment(startDate));
  let endDateValue = new Date(moment(endDate));
  let inputStartDate = moment(startDate);
  let inputEndDate = moment(endDate);
  let differenceInDate = 0;
  if(endDateValue.getTime() > startDateValue.getTime()){
      if (inputEndDate.diff(inputStartDate, 'days') > 0) {
        differenceInDate = inputEndDate.diff(inputStartDate, 'days') + 1;
      }
  }
  return differenceInDate;
};

const checkDate = (startDate,endDate) => {
  let startDateValue = new Date(moment(startDate));
  let endDateValue = new Date(moment(endDate));
  const errors = {};
  if(startDateValue.getTime() > endDateValue.getTime()){
    errors.$ = { dateValidate: true };
  }
  return errors;
};



let days=21;
let daylimited=21;

const checkday14limited = (regiondlistOne,regiondlistTwo,regiondlistThree,regiondlistFour,regiondlistFive,DateAppliedInternational) => {
        
         console.log("INSIDE function Show daylimited");
           console.log(daylimited);

        if (!isEmpty(regiondlistOne)) {
            if (regiondlistOne.includes('japanKorea')|| regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) {
              daylimited=14;
              
 
            } else {
                daylimited=21;
                console.log("inside function 2");
                 console.log(daylimited);

            }
          }
          
                  if (!isEmpty(regiondlistTwo)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistThree)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistFour)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia')) && (regiondlistFour.includes('japanKorea') || regiondlistFour.includes('EastsouthAsia') || regiondlistFour.includes('southAsia') || regiondlistFour.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistFive)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia')) && (regiondlistFour.includes('japanKorea') || regiondlistFour.includes('EastsouthAsia') || regiondlistFour.includes('southAsia') || regiondlistFour.includes('midwestnorthAsia')) && (regiondlistFive.includes('japanKorea') || regiondlistFive.includes('EastsouthAsia') || regiondlistFive.includes('southAsia') || regiondlistFive.includes('midwestnorthAsia'))) {
                daylimited = 14;




            } else {
                daylimited = 21;

            }
        }
        
          
          
          
          
         console.log("inside function DateAppliedInternational");
console.log(DateAppliedInternational);

console.log("inside functiondaylimited"); 
          console.log(daylimited);
          
        const errors = {};
        if(DateAppliedInternational > daylimited && daylimited==14){
            console.log("inside fuunction error");
                 console.log(daylimited);
          errors.$ = { checkday14limited: true };
        }
        return errors;
      };
      
const checkday21limited = (regiondlistOne,regiondlistTwo,regiondlistThree,regiondlistFour,regiondlistFive,DateAppliedInternational) => {
        
         console.log("INSIDE function 21212121 Show daylimited");
           console.log(daylimited);

        if (!isEmpty(regiondlistOne)) {
            if (regiondlistOne.includes('japanKorea')|| regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) {
              daylimited=14;
              
 
            } else {
                daylimited=21;
                console.log("inside function 2");
                 console.log(daylimited);

            }
          }
          
                            if (!isEmpty(regiondlistTwo)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistThree)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistFour)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia')) && (regiondlistFour.includes('japanKorea') || regiondlistFour.includes('EastsouthAsia') || regiondlistFour.includes('southAsia') || regiondlistFour.includes('midwestnorthAsia'))) {
                daylimited = 14;


            } else {
                daylimited = 21;


            }
        }
        if (!isEmpty(regiondlistFive)) {
            if ((regiondlistOne.includes('japanKorea') || regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) && (regiondlistTwo.includes('japanKorea') || regiondlistTwo.includes('EastsouthAsia') || regiondlistTwo.includes('southAsia') || regiondlistTwo.includes('midwestnorthAsia')) && (regiondlistThree.includes('japanKorea') || regiondlistThree.includes('EastsouthAsia') || regiondlistThree.includes('southAsia') || regiondlistThree.includes('midwestnorthAsia')) && (regiondlistFour.includes('japanKorea') || regiondlistFour.includes('EastsouthAsia') || regiondlistFour.includes('southAsia') || regiondlistFour.includes('midwestnorthAsia')) && (regiondlistFive.includes('japanKorea') || regiondlistFive.includes('EastsouthAsia') || regiondlistFive.includes('southAsia') || regiondlistFive.includes('midwestnorthAsia'))) {
                daylimited = 14;




            } else {
                daylimited = 21;

            }
        }
          
         console.log("inside function 2122121 DateAppliedInternational");
console.log(DateAppliedInternational);

console.log("inside 212121 functiondaylimited"); 
          console.log(daylimited);
          
        const errors = {};
        if(DateAppliedInternational > daylimited && daylimited==21){
            console.log("inside fuunction error");
                 console.log(daylimited);
          errors.$ = { checkday21limited: true };
        }
        return errors;
      };
      
      

  
export default {
  title: ({ i }) => i`step2.SectionB.title`,
  
  
  content: ({ i }) => (
    <div>
        <Section
    title={i`step2.SectionB.title`}
    >
    <Field.Text
    name="ItemName"
        label={i`component1.ItemName.label`}
    check={ {
            maxLength:100,
    } }
    required
/>
<Field.Textarea
    name="description"
    label={i`component1.description.label`}
    check={ {
            maxLength:150,
    } }
    required
/>
<Field.SelectMultiple
    name="theme"
    label={i`component1.theme.label`}
    options={ [
{ value:'option1', label:i`component1.theme.options.option1` }, 
{ value:'option2', label:i`component1.theme.options.option2` }, 
{ value:'option3', label:i`component1.theme.options.option3` }, 
{ value:'option4', label:i`component1.theme.options.option4` }, 
{ value:'option5', label:i`component1.theme.options.option5` }, 
{ value:'option6', label:i`component1.theme.options.option6` }, 
{ value:'option7', label:i`component1.theme.options.option7` }, 
{ value:'option8', label:i`component1.theme.options.option8` }, 
{ value:'option9', label:i`component1.theme.options.option9` }, 
{ value:'option10', label:i`component1.theme.options.option10` }, 
{ value:'option11', label:i`component1.theme.options.option11` }, 
{ value:'option12', label:i`component1.theme.options.option12` }, 
{ value:'option13', label:i`component1.theme.options.option13` }, 
{ value:'option14', label:i`component1.theme.options.option14` }, 
{ value:'option15', label:i`component1.theme.options.option15` }, 
{ value:'option16', label:i`component1.theme.options.option16` }, 
{ value:'Other', label:i`component1.theme.options.Other` }, 
] }
    defaultValue={ [] }
    check={ { maxItems: 3,   } }
    inline
    required
/>

<DependsOn fields="theme">
{(value) => {
  let view;
  if (!isEmpty(value) && value.includes('Other')) {
    return (
      <div>
      <Field.Text name="othertheme" label={i`請註明並以四字為限`} check={ {maxLength:4,charset:"chinese",}}/>
      </div>
      )
  }
  return view;
}
}
</DependsOn>




<Field.Select
    name="radiobox_1_comp"
    label={i`component1.radiobox_1_comp.label`}
    options={ [
{ value:'option1', label:i`component1.radiobox_1_comp.options.option1` }, 
{ value:'option2', label:i`component1.radiobox_1_comp.options.option2` }, 
] }
    required
    inline
/>
<Field.Select
    name="agreementUpload"
    label={i`component1.agreementUpload.label`}
    options={ [
{ value:'yes', label:i`component1.agreementUpload.options.yes` }, 
{ value:'no', label:i`component1.agreementUpload.options.no` }, 
] }
    required
    inline
/>
<DependsOn field="agreementUpload" >
     {(_agreementUpload_v) => {
        if (((new String(_agreementUpload_v).toString()) == (new String("yes").toString()))) {
            return (
                <div>
                <Field.File
    name="field_file_1_comp"
    label={i`component1.field_file_1_comp.label`}
    check={ {
            fileExt:['doc', 'docx', 'pdf', 'jpg', 'jpeg', 'png'],
            fileSize:"1 MB",
    } }
/>
                </div>
            );
        }
     }}
</DependsOn>
<DependsOn field="agreementUpload" >
     {(_agreementUpload_v) => {
        if (((new String(_agreementUpload_v).toString()) == (new String("no").toString()))) {
            return (
                <div>
                <Message
    type="info "
    name="message_2_comp"
    >
          { i`component1.message_2_comp.content.line_0` }<br/>
</Message>

            </div>
            );
        }
        else {
            return (
                <Field.Text
    name="field_text_2_comp"
        label={i`component1.field_text_2_comp.label`}
    check={ {
            maxLength:500,
    } }
    required
/>
                );
            
        }
     }}
</DependsOn>






<Field.Integer name="InputCountryNo" label={i`component1.InputCountryNo.label`} check={ {"max": 5, "min": 1} } required />



<style>{`
#theme div {
    margin-right: 10px !important; 
    margin-left: 0px !important; 
    padding-left: 0px !important; 
    padding-right: 0px !important; 
    width: 150px !important; 
}
table, th, td {
  border-color:#cfd4d4;
  border-style:double;
  width: 850px;
},
#govhkForm th {
  text-align: center; !important;
}
`}</style>

{i`field.label.partB.regionItem`}
<DependsOn fields="InputCountryNo"> 
                                    {
                                      (value)=> {
                                        let view;
                                        if (!isEmpty(value)) {
                                          view = (
                                            <div>
                                              {parseInt(value) >= 1 && 
                                                <div>
                                                  <hr />
                                                  <h3>{i`field.label.partB.regionOneItem`}</h3>
                                                  
                                                  <Field.Select  name="regiondlistOne" label={i`dropdown_regionOne.label`}
                                                  optionGroups={ [
                                                         { value:'CSAmerica', label:i`dropdown_region.latinAmerica` }, 
                                                         { value:'northAmerica', label:i`dropdown_region.northAmerica` }, 
                                                         { value:'NZAus', label:i`NZAus` }, 
                                                         { value:'northEurope', label:i`northEurope` }, 
                                                         { value:'westEurope', label:i`westEurope` }, 
                                                         { value:'midEastEurope', label:i`midEastEurope` }, 
                                                         { value:'midEast_africa', label:i`midEast_africa` }, 
                                                         { value:'japanKorea', label:i`japanKorea` }, 
                                                         { value:'EastsouthAsia', label:i`EastsouthAsia` }, 
                                                         { value:'southAsia', label:i`southAsia` }, 
                                                         { value:'midwestnorthAsia', label:i`midwestnorthAsia` }, 
                                                        ] }
                                                    required/>
                                                    
                                                    
                                                  <DependsOn field="regiondlistOne">
                                                  {regiondlistOne => (
                                                      
                                                  <Field.Dropdown 
                                                  name="countryOne" id="countryOne" label={i`dropdown_countryOne.label`}
                                                  options={countries(i).filter(option => !regiondlistOne || option.country === regiondlistOne)}
                                                  required/>
                                                      
                                                 )}
                                                </DependsOn> 
                                                
                                                
                
                                             
                                                <Field.Text name="cityOne" label={i`field.label.partA.City`} check={{maxLength:100,}} required/>
                                                  
                                                  
                                                  
                                                  
                                             
                                             
                                             <Field.Select name="beltRoadOne" label={i`field.label.partA.beltRoadQ`}
                                                   options={[
                                                    { value: 'y', label: i`field.label.partA.beltRoadQY` },
                                                    { value: 'n', label: i`field.label.partA.beltRoadQn` },
                                                    ]}
                                             required/>
                                             
                                                </div>
                                              }
                                              {parseInt(value) >= 2 && 
                                                <div>
                                                  <hr />
                                                  <h3>{i`field.label.partB.regionTwoItem`}</h3>
                                                  
                                                  <Field.Select  name="regiondlistTwo" label={i`dropdown_regionTwo.label`}
                                                  optionGroups={ [
                                                         { value:'CSAmerica', label:i`dropdown_region.latinAmerica` }, 
                                                         { value:'northAmerica', label:i`dropdown_region.northAmerica` }, 
                                                         { value:'NZAus', label:i`NZAus` }, 
                                                         { value:'northEurope', label:i`northEurope` }, 
                                                         { value:'westEurope', label:i`westEurope` }, 
                                                         { value:'midEastEurope', label:i`midEastEurope` }, 
                                                         { value:'midEast_africa', label:i`midEast_africa` }, 
                                                         { value:'japanKorea', label:i`japanKorea` }, 
                                                         { value:'EastsouthAsia', label:i`EastsouthAsia` }, 
                                                         { value:'southAsia', label:i`southAsia` }, 
                                                         { value:'midwestnorthAsia', label:i`midwestnorthAsia` },
                                                        ] }
                                                    required/>
                                                    
                                                    
                                                  <DependsOn field="regiondlistTwo">
                                                  {regiondlistTwo => (
                                                      
                                                  <Field.Dropdown 
                                                  name="countryTwo" id="countryTwo" label={i`dropdown_countryTwo.label`}
                                                  options={countries(i).filter(option => !regiondlistTwo || option.country === regiondlistTwo)}
                                                  required/>
                                                      
                                                 )}
                                                </DependsOn> 
                                             
                                                <Field.Text name="cityTwo" label={i`field.label.partA.City`} check={{maxLength:100,}} required/>                                                  
                                                  
                                                  
                                                  
                                            
                                             
                                             <Field.Select name="beltRoadTwo" label={i`field.label.partA.beltRoadQ`}
                                                   options={[
                                                    { value: 'y', label: i`field.label.partA.beltRoadQY` },
                                                    { value: 'n', label: i`field.label.partA.beltRoadQn` },
                                                    ]}
                                             required/>
                                             
                                            
                                             
                                                </div>
                                              }
                                              {parseInt(value) >= 3 && 
                                                
												<div>
                                                  <hr />
                                                  <h3>{i`field.label.partB.regionThreeItem`}</h3>
                                                  
                                                  <Field.Select  name="regiondlistThree" label={i`dropdown_regionThree.label`}
                                                  optionGroups={ [
                                                         { value:'CSAmerica', label:i`dropdown_region.latinAmerica` }, 
                                                         { value:'northAmerica', label:i`dropdown_region.northAmerica` }, 
                                                         { value:'NZAus', label:i`NZAus` }, 
                                                         { value:'northEurope', label:i`northEurope` }, 
                                                         { value:'westEurope', label:i`westEurope` }, 
                                                         { value:'midEastEurope', label:i`midEastEurope` }, 
                                                         { value:'midEast_africa', label:i`midEast_africa` }, 
                                                         { value:'japanKorea', label:i`japanKorea` }, 
                                                         { value:'EastsouthAsia', label:i`EastsouthAsia` }, 
                                                         { value:'southAsia', label:i`southAsia` }, 
                                                         { value:'midwestnorthAsia', label:i`midwestnorthAsia` }, 
                                                        ] }
                                                    required/>
                                                    
                                                    
                                                  <DependsOn field="regiondlistThree">
                                                  {regiondlistThree => (
                                                      
                                                  <Field.Dropdown 
                                                  name="countryThree" id="countryThree" label={i`dropdown_countryThree.label`}
                                                  options={countries(i).filter(option => !regiondlistThree || option.country === regiondlistThree)}
                                                  required/>
                                                      
                                                 )}
                                                </DependsOn> 
                                                <Field.Text name="cityThree" label={i`field.label.partA.City`} check={{maxLength:100,}} required/>                                                 
                                                  
                                                
                                                  
                                                  
                                            
                                             
                                             <Field.Select name="beltRoadThree" label={i`field.label.partA.beltRoadQ`}
                                                   options={[
                                                    { value: 'y', label: i`field.label.partA.beltRoadQY` },
                                                    { value: 'n', label: i`field.label.partA.beltRoadQn` },
                                                    ]}
                                             required/>
                                             
                                             
                                             
                                                </div>
                                              }
                                              {parseInt(value) >= 4 && 
                                                <div>
												 <hr />
                                                  <h3>{i`field.label.partB.regionFourItem`}</h3>
                                                  
                                                  <Field.Select  name="regiondlistFour" label={i`dropdown_regionFour.label`}
                                                  optionGroups={ [
                                                         { value:'CSAmerica', label:i`dropdown_region.latinAmerica` }, 
                                                         { value:'northAmerica', label:i`dropdown_region.northAmerica` }, 
                                                         { value:'NZAus', label:i`NZAus` }, 
                                                         { value:'northEurope', label:i`northEurope` }, 
                                                         { value:'westEurope', label:i`westEurope` }, 
                                                         { value:'midEastEurope', label:i`midEastEurope` }, 
                                                         { value:'midEast_africa', label:i`midEast_africa` }, 
                                                         { value:'japanKorea', label:i`japanKorea` }, 
                                                         { value:'EastsouthAsia', label:i`EastsouthAsia` }, 
                                                         { value:'southAsia', label:i`southAsia` }, 
                                                         { value:'midwestnorthAsia', label:i`midwestnorthAsia` },
                                                        ] }
                                                    required/>
                                                    
                                                    
                                                  <DependsOn field="regiondlistFour">
                                                  {regiondlistFour => (
                                                      
                                                  <Field.Dropdown 
                                                  name="countryFour" id="countryFour" label={i`dropdown_countryFour.label`}
                                                  options={countries(i).filter(option => !regiondlistFour || option.country === regiondlistFour)}
                                                  required/>
                                                      
                                                 )}
                                                </DependsOn> 
                                                <Field.Text name="cityFour" label={i`field.label.partA.City`} check={{maxLength:100,}} required/>                                              
                                                  
                                                
                                                  
                                                  
                                           
                                             
                                             <Field.Select name="beltRoadFour" label={i`field.label.partA.beltRoadQ`}
                                                   options={[
                                                    { value: 'y', label: i`field.label.partA.beltRoadQY` },
                                                    { value: 'n', label: i`field.label.partA.beltRoadQn` },
                                                    ]}
                                             required/>
                                             
                                             
                                             
                                                </div>
                                              }
                                              {parseInt(value) >= 5 && 
                                                <div>
												<hr />
                                                  <h3>{i`field.label.partB.regionFiveItem`}</h3>
                                                  
                                                  <Field.Select  name="regiondlistFive" label={i`dropdown_regionFive.label`}
                                                  optionGroups={ [
                                                         { value:'CSAmerica', label:i`dropdown_region.latinAmerica` }, 
                                                         { value:'northAmerica', label:i`dropdown_region.northAmerica` }, 
                                                         { value:'NZAus', label:i`NZAus` }, 
                                                         { value:'northEurope', label:i`northEurope` }, 
                                                         { value:'westEurope', label:i`westEurope` }, 
                                                         { value:'midEastEurope', label:i`midEastEurope` }, 
                                                         { value:'midEast_africa', label:i`midEast_africa` }, 
                                                         { value:'japanKorea', label:i`japanKorea` }, 
                                                         { value:'EastsouthAsia', label:i`EastsouthAsia` }, 
                                                         { value:'southAsia', label:i`southAsia` }, 
                                                         { value:'midwestnorthAsia', label:i`midwestnorthAsia` }, 
                                                        ] }
                                                    required/>
                                                    
                                                    
                                                  <DependsOn field="regiondlistFive">
                                                  {regiondlistFive => (
                                                      
                                                  <Field.Dropdown 
                                                  name="countryFive" id="countryFive" label={i`dropdown_countryFive.label`}
                                                  options={countries(i).filter(option => !regiondlistFive || option.country === regiondlistFive)}
                                                  required/>
                                                      
                                                 )}
                                                </DependsOn> 
                                                <Field.Text name="cityFive" label={i`field.label.partA.City`} check={{maxLength:100,}} required/>                                              
                                                  
                                              
                                                  
                                                  
                                            
                                             
                                             <Field.Select name="beltRoadFive" label={i`field.label.partA.beltRoadQ`}
                                                   options={[
                                                    { value: 'y', label: i`field.label.partA.beltRoadQY` },
                                                    { value: 'n', label: i`field.label.partA.beltRoadQn` },
                                                    ]}
                                             required/>
                                             
                                            
                                             
                                                </div>
                                              }
                                            </div>
                                          );
                                        }
                                        return view;
                                      }
                                    }
                                  </DependsOn>
                                  </Section>
                                  
                                  <Section title={i`section_2_comp.title`}>
                                  <Message type="info">{i`field.label.partA.tourMsg1`}</Message>
                                  <Message type="info">{i`field.label.partA.tourMsg2`}</Message>
                                  
                                  <table>
          <tr>
            <th></th>
            <th>往海外交流團</th>
            <th>回訪香港交流團</th>
          </tr>
          <tr>
            <th>交流團日數 </th>
            <th>
            <CompositeField layout="sentense">
            {i`由`}
           
            <Field.Date
              name="startDateOverseas"
              check={{
                afterToday: true,
                onOrAfter : "2024-04-01",
                onOrBefore: "2025-05-31",
               }}
               config={{ min:"2024-04-01" ,max:"2025-05-31"}}
             />
           
            
         
           
           
            
            
            <br/> {i`至`}
            <Field.Date
              name="endDateOverseas"
              check={{
                afterToday: true,
                onOrAfter : "2024-04-01",
                onOrBefore: "2025-05-31",
               }}
               config={{ min:"2024-04-01" ,max:"2025-05-31"}}
            />
                      <Field.Text name="errormessage" hideLabel={true} disabled={true} size={0.1}/>
             </CompositeField>
           
 <Validate fields="startDateOverseas,endDateOverseas"
              test={(startDateOverseas,endDateOverseas) => {
                const errorscheckDate = checkDate(startDateOverseas,endDateOverseas)   
                let errors = {}
                errors.$ = { ...errorscheckDate.$,}
                if(isEmpty(errors.$))errors = {}
                return errors;
              }}
              messages={{dateValidate: () => i`errors.dateValidate`,}}
            />

 
           
 
            



    
            
            
           
            
            </th>
            <th>
            
            
            <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                            <div>
                            <CompositeField layout="sentense">{i`由`}
                            <Field.Date name="startDateHK"
                            check={{afterToday: true,onOrAfter : "2024-04-01",onOrBefore: "2025-05-31",}}
                            config={{ min:"4/1/2024" ,max:"05/31/2025"}}
                            />
                            </CompositeField>
                            
                            <CompositeField layout="sentense">{i`至`}
                            <Field.Date name="endDateHK"
                            check={{afterToday: true,onOrAfter : "2024-04-01",onOrBefore: "2025-05-31",}}
                            config={{ min:"4/1/2024" ,max:"05/31/2025"}}
                            />
                            </CompositeField>
                            
                            <Validate fields="startDateHK,endDateHK"
              test={(startDateHK,endDateHK) => {
                const errorscheckDate = checkDate(startDateHK,endDateHK)   
                let errors = {}
                errors.$ = { ...errorscheckDate.$,}
                if(isEmpty(errors.$))errors = {}
                return errors;
              }}
              messages={{dateValidate: () => i`errors.dateValidate`,}}
            />
                   
                            
                            
                            
                            
                            </div>
                            )
                    }return view;
                    
                    }
            }
            </DependsOn>
            
            
            

            
            
            </th>
          </tr>
          <tr>
            <td>交流團日數  (自動計算)</td>
            <td><DependsOn fields="startDateOverseas,endDateOverseas" >
    {(startDateOverseas,endDateOverseas) => {
    
        let numOfDays = 0;
        
        if (!isEmpty(startDateOverseas) && !isEmpty(endDateOverseas)) {
            numOfDays = cauculatePeriod(startDateOverseas,endDateOverseas);
        }
            
        return (
            <div><CompositeField layout="sentense">
                    <Field.Integer
                        name="numOfDay"
                        dynamicValue={numOfDays}
                        disabled={true}
                    /> {i`日`}
                </CompositeField>
            </div>
        );
    }}
</DependsOn></td>
            <td>
            
             <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                             <DependsOn fields="startDateHK,endDateHK" >
                                 {(startDateHK,endDateHK) => {
    
                                    let numOfDaysHK = 0;
       
                                     if (!isEmpty(startDateHK) && !isEmpty(endDateHK)) {
                                        numOfDaysHK = cauculatePeriod(startDateHK,endDateHK);
                                    }
                                        
                                    return (
                                        <div><CompositeField layout="sentense">
                                                <Field.Integer
                                                    name="numOfDayHK"
                                                    dynamicValue={numOfDaysHK}
                                                    disabled={true}
                                                /> {i`日`}
                                            </CompositeField>
                                        </div>
                                    );
                                }}
                            </DependsOn>
                            )
                    }return view;
                }
            }
            </DependsOn>



</td>
          </tr>
          <tr>
          
           <td>申請資助的交流團日數</td>
           <td>
           
           <div>
             <CompositeField layout="sentense">
            <Field.Integer name="DateAppliedInternational" check={{min: 0,max:99}}> required</Field.Integer> {i`日`}
        
        
        </CompositeField>     
         
         <Validate fields="regiondlistOne,regiondlistTwo,regiondlistThree,regiondlistFour,regiondlistFive,DateAppliedInternational"
              test={(AregiondlistOne,AregiondlistTwo,AregiondlistThree,AregiondlistFour,AregiondlistFive,ADateAppliedInternational) => {
                  
                const errorcheckday14limited = checkday14limited(AregiondlistOne,AregiondlistTwo,AregiondlistThree,AregiondlistFour,AregiondlistFive,ADateAppliedInternational)   
            
                 console.log("INSIDE Validate Show daylimited");
           console.log(daylimited);

                let errors = {}
                errors.$ = { ...errorcheckday14limited.$,}
                
                if(isEmpty(errors.$))errors = {}
                return errors;
              }}
              messages={{checkday14limited: () => i`errors.checkday14limited`,}}
              
              
            /> 
            
            <Validate fields="regiondlistOne,regiondlistTwo,regiondlistThree,regiondlistFour,regiondlistFive,DateAppliedInternational"
              test={(AregiondlistOne,AregiondlistTwo,AregiondlistThree,AregiondlistFour,AregiondlistFive,ADateAppliedInternational) => {
                  
                const errorcheckday21limited = checkday21limited(AregiondlistOne,AregiondlistTwo,AregiondlistThree,AregiondlistFour,AregiondlistFive,ADateAppliedInternational)   
            
                 console.log("INSIDE Validate Show212121 daylimited");
           console.log(daylimited);

                let errors = {}
                errors.$ = { ...errorcheckday21limited.$,}
                
                if(isEmpty(errors.$))errors = {}
                return errors;
              }}
              messages={{checkday21limited: () => i`errors.checkday21limited`,}}
              
              
            /> 
            
            
           
            

          
            
      
      
     </div>
             
                     
             
             
        </td>
           
         <td>
         <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                            <div>
                            <CompositeField layout="sentense">
                            <Field.Integer name="DateAppliedHK" check={{min: 2,max: 7}}> required</Field.Integer> {i`日`}
                            </CompositeField>
                            
                            </div>
                            )
                    }return view;
                    
            }
            }
            </DependsOn>
            
            
 
    
    
                  
           
           
           
            
            
            
            
            
            <DependsOn fields="DateAppliedHK">
            {(value) => {
                let view;
                if (value > 7) {
                    view = (
                        <div> 
                        <Message type="info">{i`field.label.partB.HKExchangeOnly7days`}</Message>
                        </div>
                        )}
                        return view;}}
            </DependsOn>

            
            
            
            
            
           
                            
                            
        </td>
           
          </tr>  
        </table>
        
        
            
        
        
       
       
    
    
    
    
    
 </Section>
 
  <Section title={i`field.label.partB.Q10Title`}>
  
  <Message type="info">{<span>{i`field.label.partB.Q10Titlemessage1`}<br />{i`field.label.partB.Q10Titlemessage1a`}<br />{i`field.label.partB.Q10Titlemessage1bi`}<br />{i`field.label.partB.Q10Titlemessage1bii`}<br />{i`field.label.partB.Q10Titlemessage1c`}<br />{i`field.label.partB.Q10Titlemessage2`}<br />{i`field.label.partB.Q10Titlemessage3`}</span>}</Message>
  
  
  
  
  <table>
          <tr>
            <th></th>
            <th>往海外交流團 <br /> 香港參加者 </th>
            <th>回訪香港交流團 <br /> 海外參加者</th>
            </tr>
            <tr>
                <th>12-17歲青年</th>
                 <th>
            
                    <div><CompositeField layout="sentense">{i`(i)`}
                             <Field.Integer name="OverseasnumOfParticipants1224" check={{min: 0,max: 30}} required/>{i`numOfParticipants`}
                        </CompositeField>
                    </div>
                 </th>
                 <th>
                <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                            <div>
                            <CompositeField layout="sentense">{i`(iv)`}
                             <Field.Integer name="HKnumOfParticipants1224" defaultValue={0} check={{min: 0,max: 30}} required />{i`numOfParticipants`}
                            </CompositeField>
                            
                            </div>
                            )
                    }
                    
                    return view;}
            }
            </DependsOn>
                
            </th>
        </tr>
        <tr>
        <th>18-35歲青年</th>
                <th>
            
                    <div><CompositeField layout="sentense">{i`(ii)`}
                             <Field.Integer name="OverseasnumOfParticipants2535" check={{min: 0,max: 30}} />{i`numOfParticipants`}
                        </CompositeField>
                    </div>
                    
                    
                    
                    
                 </th>
                 <th>
                    <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                            <div><CompositeField layout="sentense">{i`(v)`}
                             <Field.Integer name="HKnumOfParticipants2535" defaultValue={0} check={{min: 0,max: 30}} />{i`numOfParticipants`}
                        </CompositeField>
                        
                                       
                    </div>
                            )
                    }
                    
                    return view;}
            }
            </DependsOn>
            
            
                    
                    
                    
                 </th>
        </tr>
        
        <tr>
        <th>小計 (自動計算) </th>
        <th>
        
                    <DependsOn fields="OverseasnumOfParticipants2535,OverseasnumOfParticipants1224">
                    {(doOverseasnumOfParticipants2535,OverseasnumOfParticipants1224) => {
                        let view;
                        let TOTALOverseanumOfParticipants1235 = 0;
                        TOTALOverseanumOfParticipants1235 = doOverseasnumOfParticipants2535 + OverseasnumOfParticipants1224;
                        view = (
                        
                        
                        
                        
                          <CompositeField layout="sentense">{i`(iii)`}
                                <Field.Integer name="TOTALOverseanumOfParticipants1235" defaultValue={0} dynamicValue={`${TOTALOverseanumOfParticipants1235}`} disabled={true} required/>{i`numOfParticipants`}
                          </CompositeField>
                        );
                        return view;
                    }}
                </DependsOn>
                

                    
                    
                    
                    <Validate
                      fields="OverseasnumOfParticipants1224,OverseasnumOfParticipants2535"
                      test={(value1, value2) => {
                        let error;
                        if (!isEmpty(value1) && !isEmpty(value2) ) {
                           let totalvalue = value1 + value2; 
                          
                          if(totalvalue < 10 || totalvalue > 30){  
                          error = {
                            $: {
                              OverseasParticipantsNumberError: true,
                            },
                          };
                        }
                    }
                        return error;
                      }}
                      messages={{
                        OverseasParticipantsNumberError: () => i`合資格參加者數目必須為10至30人。`,
                      }}
                    />
                    
          
         </th> 
         <th>
         
         <DependsOn fields="radiobox_1_comp">
            {
                (value) => {
                    let view;
                    if (value == 'option1') {
                        view = (
                            <div>
                            <Message type="info">{i`field.label.partA.OutboundMsg`}</Message>
                            
                            </div>)
                        
                    }else if (value == 'option2') {
                        view = (
                            <div>
                         <DependsOn fields="HKnumOfParticipants2535,HKnumOfParticipants1224">
                    {(HKnumOfParticipants2535,HKnumOfParticipants1224) => {
                        let view;
                        let TOTALHKnumOfParticipants1235 = 0;
                        TOTALHKnumOfParticipants1235 = HKnumOfParticipants2535 + HKnumOfParticipants1224;
                        view = (
                          <CompositeField layout="sentense">{i`(iii)`}
                                <Field.Integer name="TOTALHKnumOfParticipants1235" defaultValue={0} dynamicValue={`${TOTALHKnumOfParticipants1235}`} disabled={true} required/>{i`numOfParticipants`}
                          </CompositeField>
                        );
                        return view;
                    }}
                </DependsOn>
                  
                  
                    
                     <Validate
                      fields="HKnumOfParticipants1224,HKnumOfParticipants2535"
                      test={(value1, value2) => {
                        let error;
                        if (!isEmpty(value1) && !isEmpty(value2) ) {
                           let totalvalue = value1 + value2; 
                          
                          if(totalvalue < 1 || totalvalue > 30){  
                          error = {
                            $: {
                              HKParticipantsNumberError: true,
                            },
                          };
                        }
                    }
                        return error;
                      }}
                      messages={{
                        HKParticipantsNumberError: () => i`合資格參加者數目必須為1至30人。`,
                      }}
                    />
 
 
 
 
 
                    
                    
                    
                    
                
                        </div>
                            )
                    }
                    
                    return view;}
            }
            </DependsOn>
        </th>

        </tr>
          
  </table>
  
  
                    
                    
                    
                <div>
                         <DependsOn fields="OverseasnumOfParticipants2535,OverseasnumOfParticipants1224,HKnumOfParticipants2535,HKnumOfParticipants1224">
                    {(OverseasnumOfParticipants2535,OverseasnumOfParticipants1224,HKnumOfParticipants2535,HKnumOfParticipants1224) => {
                        let view;
                        let WholeTOTALnumOfParticipants = 0;
                        
                        
                        
                        if (!isEmpty(OverseasnumOfParticipants2535) && !isEmpty(OverseasnumOfParticipants1224) && !isEmpty(HKnumOfParticipants2535) && !isEmpty(HKnumOfParticipants1224)) {
                            WholeTOTALnumOfParticipants = OverseasnumOfParticipants2535+OverseasnumOfParticipants1224+HKnumOfParticipants2535+HKnumOfParticipants1224;
                        } else {
                            WholeTOTALnumOfParticipants = OverseasnumOfParticipants2535+OverseasnumOfParticipants1224;
                        }
                        
                        view = (
                          <CompositeField layout="sentense">{i`field.label.partB.Q11Title`}
                                <Field.Integer name="WholeTOTALnumOfParticipants" defaultValue={0} dynamicValue={`${WholeTOTALnumOfParticipants}`} disabled={true} />{i`numOfParticipants`}
                          </CompositeField>
                        );
                        return view;
                    }}
                </DependsOn>
                </div>
                        
                        
                         <div>
                         <CompositeField layout="sentense">{i`field.label.partB.Q12Title`}<br />
                            <Message type="info">{<span>{i`field.label.partB.Q12Titlemessage1`}<br/>{i`field.label.partB.Q12Titlemessage2`}<br/>{i`field.label.partB.Q12Titlemessage3`}</span>}</Message>
                            <Field.Integer name="HKnumWorkers" check={{min:1}} />{i`numOfParticipants`}
                        </CompositeField>
                        
                        
                        <DependsOn fields="HKnumWorkers">
                        {(HKnumWorkers) => {
                            let view;
                            if (HKnumWorkers<1 && !isEmpty(HKnumWorkers)){
                                view = (<Message type="info">{<span>{i`field.label.partB.Q12MessageAA`}<br/>{i`field.label.partB.Q12Message`}</span>}</Message>);
                                
                            }
                            return view;}}   
                        </DependsOn>
                        

                        
                       </div>
                       
                       


                            



                       
                       
                       
                       
                       
                       
                       
                       <div>
                         <CompositeField layout="sentense">{i`field.label.partB.Q13Title`}<br />
                         <Field.Integer name="ApplyHKnumWorkers" check={{min: 0, max:6}} required/>{i`numOfParticipants`}
                         </CompositeField>
                         
                   
                          <Validate fields="OverseasnumOfParticipants2535,OverseasnumOfParticipants1224,ApplyHKnumWorkers"
                          test={(value1, value2,value3) => {
                              let error;
                              let HKsponsedWorker = 0;
                              let TotalOverseasnumOfParticipants = value1 + value2;
                                
                                if (!isEmpty(TotalOverseasnumOfParticipants)){
                                if (TotalOverseasnumOfParticipants >= 10 && TotalOverseasnumOfParticipants <= 19) {
                                    HKsponsedWorker =1;
                                }
                                 else if (TotalOverseasnumOfParticipants >= 20 && TotalOverseasnumOfParticipants <= 29) {
                                    HKsponsedWorker = 2;
                                }
                                 else if (TotalOverseasnumOfParticipants == 30) {
                                    HKsponsedWorker = 3;    
                                }
                                }
                              

                                if (value2 >= 10 && value2 <= 19) {
                                    HKsponsedWorker = HKsponsedWorker +1;
                                   }      
                                   else if (value2 >= 20 && value2 <= 29 ) {
                                    HKsponsedWorker = HKsponsedWorker + 2;
                                }   
                                else if (value2 == 30) {
                                    HKsponsedWorker = HKsponsedWorker + 3;
                                }

                                console.log("Validate:HKsponsedWorker");
                                console.log(HKsponsedWorker);

                                
                              if (value3 > HKsponsedWorker) {
                                  error = {
                                            ApplyHKnumWorkers: {
                                              mustEqual: true,
                                            },
                                          };
                                        }
                                    
                                        return error;
                                      }}
                                      messages={{
                                        mustEqual: () => i`輸入有錯誤，請檢視及重新輸入10. 預計合資格參加者數目及／或13. 申請資助的香港隨團工作人員數目。 `,
                                      }}
                            />
                            
                            <DependsOn fields="TOTALOverseanumOfParticipants1235,OverseasnumOfParticipants1224">
                            {(value1 , value2) => {
                                let view;
                                let HKsponsedWorker = 0;
                                
                                if (!isEmpty(value1) || isEmpty(value2)){
                                if (value1 >= 10 && value1 <= 19) {
                                    HKsponsedWorker =1;
                                }
                                 else if (value1 >= 20 && value1 <= 29) {
                                    HKsponsedWorker = 2;
                                }
                                 else if (value1 == 30) {
                                    HKsponsedWorker = 3;    
                                }
                                 console.log("Hello world!1111111"); 
                                console.log(HKsponsedWorker);
                                
                                if (value2 >= 10 && value2 <= 19) {
                                    HKsponsedWorker = HKsponsedWorker +1;
                                   }      
                                   else if (value2 >= 20 && value2 <= 29 ) {
                                    HKsponsedWorker = HKsponsedWorker + 2;
                                }   
                                else if (value2 == 30) {
                                    HKsponsedWorker = HKsponsedWorker + 3;
                                }
                                
                                console.log("Hello world!222222"); 
                                console.log(HKsponsedWorker);
                                 
                                
                            view = (
                                <Message type="info">{<span>{i`field.label.partB.Q13Titlemessage1`}{`${HKsponsedWorker}`}{i`field.label.partB.Q13Titlemessage2`}</span>}</Message>
                             )}
                             
                             return view;
                                
                            }}
                            </DependsOn>
                            
                    
                    
                    
                                          
                        
                            
                        
        
                       </div>
                       
                       
                       <div>
                         <CompositeField layout="sentense">{i`field.label.partB.Q14Title`}<br />
                         {i`港幣`}<Field.Integer name="ApplyAmount" check={{required: true, min: 0, }} />{i`元`}
                         </CompositeField>
                        
                        <Message type="info">{i`field.label.partB.Q14Message`}</Message>
                        
                       </div>
                       
                       
                       
                       
                       
                       
                     
                    
                  <br />
                  
                  <CompositeField layout="sentense">
                  {i`field.label.partB.Q16TitleA`}<br />
                  {i`field.label.partB.Q16TitleB`}<Field.Integer name="ApplyMarginAmount" check={{required: true, min: 0, }} />{i`元`}
                  </CompositeField> 
                  
                  
                  
                <br /><br />  
                
                <div>
                         <CompositeField layout="sentense">{i`field.label.partB.Q17newTitle`}<br />
                         
                         
                         <Field.Select
                              name="Q17new_AmountfromParticipantsYN"
                              label={i`field.label.partB.Q17newTitle`}
                              required
                              options={[
                                { value: 'y', label: i`會` },
                                { value: 'n', label: i`不會` },
                              ]}
                              inline
                            />
                            
                            
                         <DependsOn fields="Q17new_AmountfromParticipantsYN">
                         {(value) => {
                             let view;
                             if (value == 'y') {
                                 view = (
                                     <div>
                                 
                                 {i`（每位港幣$ ）`}<Field.Integer name="Q17new_AmountfromParticipants"  check={{required: true, min: 0, }} />
                                 </div>
                                 )}
                                 return view;
                             
                         }}
                         </DependsOn>   
                         
                         </CompositeField>
                        
                        
                        
                       </div>
                       
                       
                       
                       
                         <div>
                         <CompositeField layout="sentense">{i`field.label.partB.Q18NEWTitle`}
                         
                         
                         <Field.Select
                              name="Q18new_AmountfromParticipantsMoreThan10K"
                              label={i`field.label.partB.Q18NEWTitle`}
                              required
                              options={[
                                { value: 'y', label: i`會` },
                                { value: 'n', label: i`不會` },
                              ]}
                              inline
                            />
                            
                            
                         <DependsOn fields="Q18new_AmountfromParticipantsMoreThan10K">
                         {(value) => {
                             let view;
                             if (value == 'y') {
                                 view = (
                                     <div>
                                 
                                 {i`請提供理據（如適用）`}<Field.Text name="Q18new_AmountfromParticipantsMoreThan10KExplaination"  required />
                                 </div>
                                 )}
                                 return view;
                             
                         }}
                         </DependsOn>   
                         
                         </CompositeField>
                        
                        
                        
                       </div>
                       
                       
                       
                       
                {i`field.label.partB.Q19Title`}
                <br />
                
                <Field.Select name="Q19iOptionAB" label={i`field.label.partB.Q19iTitle`}
                options={ [
                    { value:'Q19iYes', label:i`是`, view: () => (
                        <Field.Text name="Q19iOptionYesTextbox" label={i`field.label.partB.Q19iYesOption`} size={40} />
                        ) }, { value:'Q19iNo', label:i`否` }, ] }
                 inline/>
                <br />
                
                <Field.Select name="Q19iiOptionAB" label={i`field.label.partB.Q19iiTitle`}
                options={ [
                    { value:'Q19iiYes', label:i`是`, view: () => (
                        <Field.Text name="Q19iiOptionYesTextbox" label={i`field.label.partB.Q19iYesOption`} size={40} />
                        ) }, { value:'Q19iiNo', label:i`否` }, ] }
                inline
                />     
                  
                <Field.Select name="Q19iiiOptionAB" label={i`field.label.partB.Q19iiiTitle`}
                required
                options={[
                    { value: 'Q19iiiYes', label: i`是` },
                    { value: 'Q19iiiNo', label: i`否` },
                ]}
                 inline
                />  
                
              <DependsOn fields="Q19iiiOptionAB">
                              { (value) => {
                                let view;
                                if (!isEmpty(value) && value =='Q19iiiYes' ) {
                                  view = (
                                      
                                 
                     <Layout.Inline>            
                                
                     {i`field.label.partB.Q19ivDropdownOptionA`}<br/>
                     <Field.Integer name="Q19ivDropdownOptionANumber" label={i`數量：`} size={5} check={{ required: true }}/>     
                     <Field.Text name="Q19ivDropdownOptionAName" label={i`名稱:`} maxLength={500} size={30} check={{ required: true, maxLength: 500 }}/>  <br/>
                     
                     {i`field.label.partB.Q19ivDropdownOptionB`}<br/>
                     <Field.Integer name="Q19ivDropdownOptionBNumber" label={i`數量：`} size={5} check={{ required: true }}/>     
                     <Field.Text name="Q19ivDropdownOptionBName" label={i`名稱:`} maxLength={500} size={30} check={{ required: true, maxLength: 500 }}/>  <br/>
                     
                     {i`field.label.partB.Q19ivDropdownOptionC`}<br/>
                     <Field.Integer name="Q19ivDropdownOptionCNumber" label={i`數量：`} size={5} check={{ required: true }}/>     
                     <Field.Text name="Q19ivDropdownOptionCName" label={i`名稱:`} maxLength={500} size={30} check={{ required: true, maxLength: 500 }}/>  <br/>
                     
                     
                     {i`field.label.partB.Q19ivDropdownOptionD`}<br/>
                     <Field.Integer name="Q19ivDropdownOptionDNumber" label={i`數量：`} size={5} check={{ required: true }}/>     
                     <Field.Text name="Q19ivDropdownOptionDName" label={i`名稱:`} maxLength={500} size={30} check={{ required: true, maxLength: 500 }}/>  <br/>
                     
                     </Layout.Inline> 
                                      
                                      
                                      
                                      
                                      
                                      
                                      );
                                }
                                return view;
                              }
                              }
                </DependsOn>  

                <Field.SelectMultiple
                                name="Q19vSelectMultiple" label={i`field.label.partB.Q19vTitle`}
                                options={[
                                    { value: 'Q19vOptionA', label: i`field.label.partB.Q19vOptionA` },
                                    { value: 'Q19vOptionB', label: i`field.label.partB.Q19vOptionB` },
                                    { value: 'Q19vOptionC', label: i`field.label.partB.Q19vOptionC` },
                                    { value: 'Q19vOptionD', label: i`field.label.partB.Q19vOptionD` },
                                    { value: 'Q19vOptionE', label: i`field.label.partB.Q19vOptionE` },
                                    { value: 'Q19vOptionF', label: i`field.label.partB.Q19vOptionF`,view: () => (
                                        <Field.Text name="Q19vOptionOthersTextbox" check={{ maxLength: 100 }}/> ) },
                                ]}
                                required
                                check={{
                                          minItems: 1,
                                          
                                        }}
                              />

                
                                      
 </Section>
 
 </div>
 

 
),
    
};






