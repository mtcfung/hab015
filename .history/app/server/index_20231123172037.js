/* eslint-disable no-shadow */
/**
 * This is the entry file for backend server service (for server-side validation and data conversion)
 */
import { pdf, xml, flattenToStringMap, validateForm, i18nByLocale } from 'govhk-form-core';
import moment from 'moment';
import get from 'lodash/get';
import '../l10n';
import steps from '../steps';


import { isEmpty } from 'govhk-form-core';












export default {
  convert: ({ form, submit, data }, dataTypes) => {
    const mapping = {
      ...flattenToStringMap(data),
    };
    const _pdf_concat_array = [];
    const mappinga = {
      ...flattenToStringMap(data),
      Declaration1: get(data, 'Declaration1', '') ? 'Yes' : '',
    };


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_partA.pdf`,
      mapping: mappinga,
    }));


    let pageNo = 4;
    const join = get(data, 'join', '');
    if (join == 'y') {
      const joinNum = get(data, 'joinNum', '');
      if (parseInt(joinNum) >= 1) {
        const HAB015_partA_item1_p1 = {
          ...flattenToStringMap(data),
          pageNo,
          joinNum,
        };
          // _pdf_concat_array.push(pdf.merge({
          //   file: `${form.formId}_partA_item1_p1.pdf`,
          //   mapping: HAB015_partA_item1_p1,
          // }));
        _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
          file: `${form.formId}_partA_item1_p1.pdf`,
          mapping: HAB015_partA_item1_p1,
        });
        pageNo++;
      }

      if (parseInt(joinNum) >= 2) {
        const HAB015_partA_item1_p2 = {
          ...flattenToStringMap(data),
          pageNo,
          joinNum,
        };
        _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
          file: `${form.formId}_partA_item1_p2.pdf`,
          mapping: HAB015_partA_item1_p2,
        });
        pageNo++;
      }
      if (parseInt(joinNum) >= 3) {
        const HAB015_partA_item1_p3 = {
          ...flattenToStringMap(data),
          pageNo,
          joinNum,
        };
        _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
          file: `${form.formId}_partA_item1_p3.pdf`,
          mapping: HAB015_partA_item1_p3,
        });
        pageNo++;
      }
    }


    const mappingb1 = {
      ...flattenToStringMap(data),
      pageNo,
    };

    _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
      file: `${form.formId}_partB_1.pdf`,
      mapping: mappingb1,
    });
    pageNo = pageNo + 1;

    const mappingb2 = {
      ...flattenToStringMap(data),
      pageNo,

    };
    const regiondlistOne = get(data, 'regiondlistOne', '');
    const regiondlistTwo = get(data, 'regiondlistTwo', '');
    const regiondlistThree = get(data, 'regiondlistThree', '');
    const regiondlistFour = get(data, 'regiondlistFour', '');
    const regiondlistFive = get(data, 'regiondlistFive', '');


    if (regiondlistOne == 'CSAmerica') {
      mappingb2.regiondlistOneValue = '中南美';
    }
    if (regiondlistOne == 'northAmerica') {
      mappingb2.regiondlistOneValue = '北美';
    }
    if (regiondlistOne == 'NZAus') {
      mappingb2.regiondlistOneValue = '澳洲及新西蘭';
    }
    if (regiondlistOne == 'northEurope') {
      mappingb2.regiondlistOneValue = '北歐';
    }
    if (regiondlistOne == 'westEurope') {
      mappingb2.regiondlistOneValue = '西歐';
    }
    if (regiondlistOne == 'midEastEurope') {
      mappingb2.regiondlistOneValue = '中歐及東歐';
    }
    if (regiondlistOne == 'midEast_africa') {
      mappingb2.regiondlistOneValue = '中東及非洲';
    }
    if (regiondlistOne == 'japanKorea') {
      mappingb2.regiondlistOneValue = '日韓';
    }
    if (regiondlistOne == 'EastsouthAsia') {
      mappingb2.regiondlistOneValue = '東南亞';
    }
    if (regiondlistOne == 'southAsia') {
      mappingb2.regiondlistOneValue = '南亞';
    }
    if (regiondlistOne == 'midwestnorthAsia') {
      mappingb2.regiondlistOneValue = '中亞、西亞及東北亞';
    }
    if (regiondlistOne == 'othercountry') {
      mappingb2.regiondlistOneValue = '其他';
    }


    if (regiondlistTwo == 'CSAmerica') {
      mappingb2.regiondlistTwoValue = '中南美';
    }
    if (regiondlistTwo == 'northAmerica') {
      mappingb2.regiondlistTwoValue = '北美';
    }
    if (regiondlistTwo == 'NZAus') {
      mappingb2.regiondlistTwoValue = '澳洲及新西蘭';
    }
    if (regiondlistTwo == 'northEurope') {
      mappingb2.regiondlistTwoValue = '北歐';
    }
    if (regiondlistTwo == 'westEurope') {
      mappingb2.regiondlistTwoValue = '西歐';
    }
    if (regiondlistTwo == 'midEastEurope') {
      mappingb2.regiondlistTwoValue = '中歐及東歐';
    }
    if (regiondlistTwo == 'midEast_africa') {
      mappingb2.regiondlistTwoValue = '中東及非洲';
    }
    if (regiondlistTwo == 'japanKorea') {
      mappingb2.regiondlistTwoValue = '日韓';
    }
    if (regiondlistTwo == 'EastsouthAsia') {
      mappingb2.regiondlistTwoValue = '東南亞';
    }
    if (regiondlistTwo == 'southAsia') {
      mappingb2.regiondlistTwoValue = '南亞';
    }
    if (regiondlistTwo == 'midwestnorthAsia') {
      mappingb2.regiondlistTwoValue = '中亞、西亞及東北亞';
    }
    if (regiondlistTwo == 'othercountry') {
      mappingb2.regiondlistTwoValue = '其他';
    }


    if (regiondlistThree == 'CSAmerica') {
      mappingb2.regiondlistThreeValue = '中南美';
    }
    if (regiondlistThree == 'northAmerica') {
      mappingb2.regiondlistThreeValue = '北美';
    }
    if (regiondlistThree == 'NZAus') {
      mappingb2.regiondlistThreeValue = '澳洲及新西蘭';
    }
    if (regiondlistThree == 'northEurope') {
      mappingb2.regiondlistThreeValue = '北歐';
    }
    if (regiondlistThree == 'westEurope') {
      mappingb2.regiondlistThreeValue = '西歐';
    }
    if (regiondlistThree == 'midEastEurope') {
      mappingb2.regiondlistThreeValue = '中歐及東歐';
    }
    if (regiondlistThree == 'midEast_africa') {
      mappingb2.regiondlistThreeValue = '中東及非洲';
    }
    if (regiondlistThree == 'japanKorea') {
      mappingb2.regiondlistThreeValue = '日韓';
    }
    if (regiondlistThree == 'EastsouthAsia') {
      mappingb2.regiondlistThreeValue = '東南亞';
    }
    if (regiondlistThree == 'southAsia') {
      mappingb2.regiondlistThreeValue = '南亞';
    }
    if (regiondlistThree == 'midwestnorthAsia') {
      mappingb2.regiondlistThreeValue = '中亞、西亞及東北亞';
    }
    if (regiondlistThree == 'othercountry') {
      mappingb2.regiondlistThreeValue = '其他';
    }

    if (regiondlistFour == 'CSAmerica') {
      mappingb2.regiondlistFourValue = '中南美';
    }
    if (regiondlistFour == 'northAmerica') {
      mappingb2.regiondlistFourValue = '北美';
    }
    if (regiondlistFour == 'NZAus') {
      mappingb2.regiondlistFourValue = '澳洲及新西蘭';
    }
    if (regiondlistFour == 'northEurope') {
      mappingb2.regiondlistFourValue = '北歐';
    }
    if (regiondlistFour == 'westEurope') {
      mappingb2.regiondlistFourValue = '西歐';
    }
    if (regiondlistFour == 'midEastEurope') {
      mappingb2.regiondlistFourValue = '中歐及東歐';
    }
    if (regiondlistFour == 'midEast_africa') {
      mappingb2.regiondlistFourValue = '中東及非洲';
    }
    if (regiondlistFour == 'japanKorea') {
      mappingb2.regiondlistFourValue = '日韓';
    }
    if (regiondlistFour == 'EastsouthAsia') {
      mappingb2.regiondlistFourValue = '東南亞';
    }
    if (regiondlistFour == 'southAsia') {
      mappingb2.regiondlistFourValue = '南亞';
    }
    if (regiondlistFour == 'midwestnorthAsia') {
      mappingb2.regiondlistFourValue = '中亞、西亞及東北亞';
    }
    if (regiondlistFour == 'othercountry') {
      mappingb2.regiondlistFourValue = '其他';
    }

    if (regiondlistFive == 'CSAmerica') {
      mappingb2.regiondlistFiveValue = '中南美';
    }
    if (regiondlistFive == 'northAmerica') {
      mappingb2.regiondlistFiveValue = '北美';
    }
    if (regiondlistFive == 'NZAus') {
      mappingb2.regiondlistFiveValue = '澳洲及新西蘭';
    }
    if (regiondlistFive == 'northEurope') {
      mappingb2.regiondlistFiveValue = '北歐';
    }
    if (regiondlistFive == 'westEurope') {
      mappingb2.regiondlistFiveValue = '西歐';
    }
    if (regiondlistFive == 'midEastEurope') {
      mappingb2.regiondlistFiveValue = '中歐及東歐';
    }
    if (regiondlistFive == 'midEast_africa') {
      mappingb2.regiondlistFiveValue = '中東及非洲';
    }
    if (regiondlistFive == 'japanKorea') {
      mappingb2.regiondlistFiveValue = '日韓';
    }
    if (regiondlistFive == 'EastsouthAsia') {
      mappingb2.regiondlistFiveValue = '東南亞';
    }
    if (regiondlistFive == 'southAsia') {
      mappingb2.regiondlistFiveValue = '南亞';
    }
    if (regiondlistFive == 'midwestnorthAsia') {
      mappingb2.regiondlistFiveValue = '中亞、西亞及東北亞';
    }
    if (regiondlistFive == 'othercountry') {
      mappingb2.regiondlistFiveValue = '其他';
    }


    const inputCountryNo = get(data, 'InputCountryNo', '');

    if (parseInt(inputCountryNo) == 1) {
      _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
        file: `${form.formId}_PartB_2_1.pdf`,
        mapping: mappingb2,
      });
      pageNo++;
    }
    if (parseInt(inputCountryNo) == 2) {
      _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
        file: `${form.formId}_PartB_2_2.pdf`,
        mapping: mappingb2,
      });
      pageNo++;
    }
    if (parseInt(inputCountryNo) == 3) {
      _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
        file: `${form.formId}_PartB_2_3.pdf`,
        mapping: mappingb2,
      });
      pageNo++;
    }
    if (parseInt(inputCountryNo) == 4) {
      _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
        file: `${form.formId}_PartB_2_4.pdf`,
        mapping: mappingb2,
      });
      pageNo++;
    }
    if (parseInt(inputCountryNo) == 5) {
      _pdf_concat_array[_pdf_concat_array.length] = pdf.merge({
        file: `${form.formId}_PartB_2_5.pdf`,
        mapping: mappingb2,
      });
      pageNo++;
    }

    let pageNo2 = pageNo + 1;

    const mappingb3 = {
      ...flattenToStringMap(data),
      pageNo,
      pageNo2,
    };


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartB_3.pdf`,
      mapping: mappingb3,
    }));


    const mappingc = {
      ...flattenToStringMap(data),
    };


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartC.pdf`,
      mapping: mappingc,
    }));

    pageNo2 = 12;

    if (isEmpty(get(data, 'D1InternaltionExchangeHistoryFieldList', [])) && isEmpty(get(data, 'D2YouthInternshipExchangeHistoryFieldList', []))) {
      const mappingdnono = {
        ...flattenToStringMap(data),
        pageNo2,
      };

      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_nono.pdf`,
        mapping: mappingdnono,
      }));
      pageNo2++;
    }

    if (!isEmpty(get(data, 'D1InternaltionExchangeHistoryFieldList', [])) && isEmpty(get(data, 'D2YouthInternshipExchangeHistoryFieldList', []))) {
      const mappingd1 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_1.pdf`,
        mapping: mappingd1,

      }));
      pageNo2++;


      const mappingdnoD1 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_noD1.pdf`,
        mapping: mappingdnoD1,

      }));
      pageNo2++;
    }


    if (!isEmpty(get(data, 'D2YouthInternshipExchangeHistoryFieldList', [])) && isEmpty(get(data, 'D1InternaltionExchangeHistoryFieldList', []))) {
      const mappingnoD2 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_noD2.pdf`,
        mapping: mappingnoD2,

      }));
      pageNo2++;


      const mappingd2 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_2.pdf`,
        mapping: mappingd2,

      }));
      pageNo2++;
    }

    if (!isEmpty(get(data, 'D2YouthInternshipExchangeHistoryFieldList', [])) && !isEmpty(get(data, 'D1InternaltionExchangeHistoryFieldList', []))) {
      const mappingd1 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_1.pdf`,
        mapping: mappingd1,

      }));
      pageNo2++;


      const mappingd2 = {
        ...flattenToStringMap(data),
        pageNo2,
      };


      _pdf_concat_array.push(pdf.merge({
        file: `${form.formId}_PartD_2.pdf`,
        mapping: mappingd2,

      }));
      pageNo2++;
    }


    const mappingd3 = {
      ...flattenToStringMap(data),
      pageNo2,
    };


    const D3OtherHistoryFieldList = get(data, 'D3OtherHistoryFieldList', []);


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartD_3.pdf`,
      mapping: mappingd3,

    }));

    pageNo2++;
    const pageNo3 = pageNo2 + 1;


    const mappingef = {
      ...flattenToStringMap(data),
      partE_Cb1: get(data, 'partE_Cb1', '') ? 'Yes' : '',
      partE_Cb2: get(data, 'partE_Cb2', '') ? 'Yes' : '',
      partE_Cb3: get(data, 'partE_Cb3', '') ? 'Yes' : '',
      partE_Cb4: get(data, 'partE_Cb4', '') ? 'Yes' : '',
      partE_Cb5: get(data, 'partE_Cb5', '') ? 'Yes' : '',
      partE_Cb6: get(data, 'partE_Cb6', '') ? 'Yes' : '',
      partE_Cb7: get(data, 'partE_Cb7', '') ? 'Yes' : '',
      submitemail: get(data, 'submitAck.ackEmail', ''),
      pageNo2,
      pageNo3,
    };

    const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const t = new Date(submit.submitTime);
    mappingef.date = t.getDate() < 10 ? `0${t.getDate()}/${monthNames[t.getMonth()]}/${t.getFullYear()}` : `${t.getDate()}/${monthNames[t.getMonth()]}/${t.getFullYear()}`;


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartEF.pdf`,
      mapping: mappingef,

    }));

    const i_hk = i18nByLocale('zh-HK');
    //const i_cn = i18nByLocale('zh-CN');
    //const i_en = i18nByLocale('en');
    
    const convertPartBCheckbox2str= (list1, i_hk) => {
    let result = '';
    let isFirst = true;
          if (!isEmpty(list1))
    {
            for (let i =0; i< list1.length;i++) {
              if (isFirst) {
                isFirst= false;
                result= `${ i_hk.translate(`field.label.partB.${list1[i]}`)}`;
              } else {
                result+= ','+ `${ i_hk.translate(`field.label.partB.${list1[i]}`)}`;
              }
            }
          }
    
          return result;
    
        };
    
    data.fundingScheme= convertPartBCheckbox2strPartA(get(data,'fundingScheme',[]), i_hk);
    data.organiserNameOne_fundingScheme=convertPartBCheckbox2strPartA(get(data,'fundingScheme',[]), i_hk);
    
    data.theme = convertPartBCheckbox2str(get(data,'theme',[]), i_hk);
    
    data.Q19vSelectMultiple = convertPartBCheckbox2str(get(data,'Q19vSelectMultiple',[]), i_hk);




    return [
      pdf.concat(
                _pdf_concat_array,
                `${submit.trnId}_HYAB.pdf`
            ),
      xml.convert({ form, submit, data }, dataTypes, `${submit.trnId}_HYAB.xml`),
    ];
  },
  validate: (submission, setResult) => {
    validateForm(submission, steps).then((result) => {
      setResult(result);
    });
  },
};
