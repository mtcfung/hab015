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

    const i_hk = i18nByLocale('zh-HK');


    const mapping = {
      ...flattenToStringMap(data),
    };
    const _pdf_concat_array = [];
    _pdf_concat_array.push(pdf.defaultAck(form, submit));

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
    if (regiondlistTwo === 'othercountry') {
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


      //country handle start//
    const countryOne = get(data, 'countryOne', '');
    const countryTwo = get(data, 'countryTwo', '');
    const countryThree = get(data, 'countryThree', '');
    const countryFour = get(data, 'countryFour', '');
    const countryFive = get(data, 'countryFive', '');


    if (countryOne == 'othercountry') {mappingb2.countryOneValue = '其他';}
    if (countryOne == '厄瓜多爾') {mappingb2.countryOneValue = '厄瓜多爾';}
    if (countryOne == '巴西') {mappingb2.countryOneValue = '巴西';}
    if (countryOne == '巴拿馬') {mappingb2.countryOneValue = '巴拿馬';}
    if (countryOne == '古巴') {mappingb2.countryOneValue = '古巴';}	
    if (countryOne == '尼加拉瓜') {mappingb2.countryOneValue = '尼加拉瓜';}
    if (countryOne == '多米尼加') {mappingb2.countryOneValue = '多米尼加';}		
    if (countryOne == '阿根廷') {mappingb2.countryOneValue = '阿根廷';}		
    if (countryOne == '洪都拉斯') {mappingb2.countryOneValue = '洪都拉斯';}		
    if (countryOne == '玻利維亞') {mappingb2.countryOneValue = '玻利維亞';}
    if (countryOne == '哥倫比亞') {mappingb2.countryOneValue = '哥倫比亞';}
    if (countryOne == '哥斯達黎加') {mappingb2.countryOneValue = '哥斯達黎加';}
    if (countryOne == '烏拉圭') {mappingb2.countryOneValue = '烏拉圭';}
    if (countryOne == '秘魯') {mappingb2.countryOneValue = '秘魯';}	
    if (countryOne == '智利') {mappingb2.countryOneValue = '智利';}		
    if (countryOne == '薩爾瓦多') {mappingb2.countryOneValue = '薩爾瓦多';}		
    if (countryOne == '加拿大') {mappingb2.countryOneValue = '加拿大';}		
    if (countryOne == '美國') {mappingb2.countryOneValue = '美國';}		
    if (countryOne == '墨西哥') {mappingb2.countryOneValue = '墨西哥';}	
    if (countryOne == '澳洲') {mappingb2.countryOneValue = '澳洲';}	
    if (countryOne == '新西蘭') {mappingb2.countryOneValue = '新西蘭';}	
    if (countryOne == '丹麥') {mappingb2.countryOneValue = '丹麥';}	
    if (countryOne == '冰島') {mappingb2.countryOneValue = '冰島';}		
    if (countryOne == '芬蘭') {mappingb2.countryOneValue = '芬蘭';}	
    if (countryOne == '挪威') {mappingb2.countryOneValue = '挪威';}	
    if (countryOne == '瑞典') {mappingb2.countryOneValue = '瑞典';}		
    if (countryOne == '比利時') {mappingb2.countryOneValue = '比利時';}	
    if (countryOne == '西班牙') {mappingb2.countryOneValue = '西班牙';}	
    if (countryOne == '法國') {mappingb2.countryOneValue = '法國';}		
    if (countryOne == '英國') {mappingb2.countryOneValue = '英國';}		
    if (countryOne == '梵蒂岡') {mappingb2.countryOneValue = '梵蒂岡';}		
    if (countryOne == '荷蘭') {mappingb2.countryOneValue = '荷蘭';}		
    if (countryOne == '意大利') {mappingb2.countryOneValue = '意大利';}		
    if (countryOne == '愛爾蘭') { mappingb2.countryOneValue = '愛爾蘭';}		
    if (countryOne == '瑞士') { mappingb2.countryOneValue = '瑞士';}		
    if (countryOne == '葡萄牙') {mappingb2.countryOneValue = '葡萄牙';}		
    if (countryOne == '德國') {mappingb2.countryOneValue = '德國';}		
    if (countryOne == '盧森堡') {mappingb2.countryOneValue = '盧森堡';}
    if (countryOne == '土耳其') {mappingb2.countryOneValue = '土耳其';}
    if (countryOne == '白俄羅斯') {mappingb2.countryOneValue = '白俄羅斯';}
    if (countryOne == '立陶宛') {mappingb2.countryOneValue = '立陶宛';}
    if (countryOne == '匈牙利') {mappingb2.countryOneValue = '匈牙利';}
    if (countryOne == '克羅地亞') {mappingb2.countryOneValue = '克羅地亞';}
    if (countryOne == '希臘') {mappingb2.countryOneValue = '希臘';}
    if (countryOne == '拉脫維亞') {mappingb2.countryOneValue = '拉脫維亞';}
    if (countryOne == '波斯尼亞和黑塞哥維那') {mappingb2.countryOneValue = '波斯尼亞和黑塞哥維那';}
    if (countryOne == '波蘭') {mappingb2.countryOneValue = '波蘭';}
    if (countryOne == '阿爾巴尼亞') {mappingb2.countryOneValue = '阿爾巴尼亞';}
    if (countryOne == '保加利亞') {mappingb2.countryOneValue = '保加利亞';}
    if (countryOne == '捷克') {mappingb2.countryOneValue = '捷克';}
    if (countryOne == '斯洛文尼亞') {mappingb2.countryOneValue = '斯洛文尼亞';}
    if (countryOne == '黑山') {mappingb2.countryOneValue = '黑山';}
    if (countryOne == '塞浦路斯') {mappingb2.countryOneValue = '塞浦路斯';}	
    if (countryOne == '塞爾維亞') {mappingb2.countryOneValue = '塞爾維亞';}
    if (countryOne == '奧地利') {mappingb2.countryOneValue = '奧地利';}
    if (countryOne == '愛沙尼亞') {mappingb2.countryOneValue = '愛沙尼亞';}
    if (countryOne == '羅馬尼亞') {mappingb2.countryOneValue = '羅馬尼亞';}
    if (countryOne == '巴林') {mappingb2.countryOneValue = '巴林';}
    if (countryOne == '卡塔爾') {mappingb2.countryOneValue = '卡塔爾';}
    if (countryOne == '沙特阿拉伯') {mappingb2.countryOneValue = '沙特阿拉伯';}
    if (countryOne == '坦桑尼亞') {mappingb2.countryOneValue = '坦桑尼亞';}
    if (countryOne == '肯亞') {mappingb2.countryOneValue = '肯亞';}
    if (countryOne == '阿聯酋') {mappingb2.countryOneValue = '阿聯酋';}
    if (countryOne == '南非') {mappingb2.countryOneValue = '南非';}
    if (countryOne == '迦納') {mappingb2.countryOneValue = '迦納';}
    if (countryOne == '烏干達') {mappingb2.countryOneValue = '烏干達';}
    if (countryOne == '摩洛哥') {mappingb2.countryOneValue = '摩洛哥';}
    if (countryOne == '盧旺達') {mappingb2.countryOneValue = '盧旺達';}
    if (countryOne == '日本') {mappingb2.countryOneValue = '日本';}
    if (countryOne == '韓國') {mappingb2.countryOneValue = '韓國';}
    if (countryOne == '老撾') {mappingb2.countryOneValue = '老撾';}
    if (countryOne == '汶萊') {mappingb2.countryOneValue = '汶萊';}
    if (countryOne == '東帝汶') {mappingb2.countryOneValue = '東帝汶';}
    if (countryOne == '柬埔寨') {mappingb2.countryOneValue = '柬埔寨';}
    if (countryOne == '泰國') {mappingb2.countryOneValue = '泰國';}
    if (countryOne == '馬來西亞') {mappingb2.countryOneValue = '馬來西亞';}
    if (countryOne == '菲律賓') {mappingb2.countryOneValue = '菲律賓';}
    if (countryOne == '越南') {mappingb2.countryOneValue = '越南';}
    if (countryOne == '新加坡') {mappingb2.countryOneValue = '新加坡';}
    if (countryOne == '緬甸') {mappingb2.countryOneValue = '緬甸';}
    if (countryOne == '不丹') {mappingb2.countryOneValue = '不丹';}
    if (countryOne == '尼泊爾') {mappingb2.countryOneValue = '尼泊爾';}
    if (countryOne == '印度') {mappingb2.countryOneValue = '印度';}
    if (countryOne == '孟加拉') {mappingb2.countryOneValue = '孟加拉';}
    if (countryOne == '馬爾代夫') {mappingb2.countryOneValue = '馬爾代夫';}
    if (countryOne == '斯里蘭卡') {mappingb2.countryOneValue = '斯里蘭卡';}
    if (countryOne == '土庫曼') {mappingb2.countryOneValue = '土庫曼';}
    if (countryOne == '緬甸') {mappingb2.countryOneValue = '緬甸';}  
    if (countryOne == '吉爾吉斯') {mappingb2.countryOneValue = '吉爾吉斯';}
    if (countryOne == '亞美尼亞') {mappingb2.countryOneValue = '亞美尼亞';}
    if (countryOne == '阿塞拜疆') {mappingb2.countryOneValue = '阿塞拜疆';}
    if (countryOne == '哈薩克') {mappingb2.countryOneValue = '哈薩克';}
    if (countryOne == '格魯吉亞') {mappingb2.countryOneValue = '格魯吉亞';}
    if (countryOne == '烏茲別克') {mappingb2.countryOneValue = '烏茲別克';}
    if (countryOne == '塔吉克') {mappingb2.countryOneValue = '塔吉克';}
    if (countryOne == '蒙古') {mappingb2.countryOneValue = '蒙古';}
    if (countryOne == '印尼') {mappingb2.countryOneValue = '印尼';}
    if (countryOne == '斯洛伐克') {mappingb2.countryOneValue = '斯洛伐克';}


    if (countryTwo == 'othercountry') {mappingb2.countryTwoValue = '其他';}
if (countryTwo == '厄瓜多爾') {mappingb2.countryTwoValue = '厄瓜多爾';}
if (countryTwo == '巴西') {mappingb2.countryTwoValue = '巴西';}
if (countryTwo == '巴拿馬') {mappingb2.countryTwoValue = '巴拿馬';}
if (countryTwo == '古巴') {mappingb2.countryTwoValue = '古巴';}	
if (countryTwo == '尼加拉瓜') {mappingb2.countryTwoValue = '尼加拉瓜';}		
if (countryTwo == '多米尼加') {mappingb2.countryTwoValue = '多米尼加';}		
if (countryTwo == '阿根廷') {mappingb2.countryTwoValue = '阿根廷';}		
if (countryTwo == '洪都拉斯') {mappingb2.countryTwoValue = '洪都拉斯';}		
if (countryTwo == '玻利維亞') {mappingb2.countryTwoValue = '玻利維亞';}
if (countryTwo == '哥倫比亞') {mappingb2.countryTwoValue = '哥倫比亞';}
if (countryTwo == '哥斯達黎加') {mappingb2.countryTwoValue = '哥斯達黎加';}
if (countryTwo == '烏拉圭') {mappingb2.countryTwoValue = '烏拉圭';}
if (countryTwo == '秘魯') {mappingb2.countryTwoValue = '秘魯';}	
if (countryTwo == '智利') {mappingb2.countryTwoValue = '智利';}		
if (countryTwo == '薩爾瓦多') {mappingb2.countryTwoValue = '薩爾瓦多';}		
if (countryTwo == '加拿大') {mappingb2.countryTwoValue = '加拿大';}		
if (countryTwo == '美國') {mappingb2.countryTwoValue = '美國';}		
if (countryTwo == '墨西哥') {mappingb2.countryTwoValue = '墨西哥';}	
if (countryTwo == '澳洲') {mappingb2.countryTwoValue = '澳洲';}	
if (countryTwo == '新西蘭') {mappingb2.countryTwoValue = '新西蘭';}	
if (countryTwo == '丹麥') {mappingb2.countryTwoValue = '丹麥';}	
if (countryTwo == '冰島') {mappingb2.countryTwoValue = '冰島';}		
if (countryTwo == '芬蘭') {mappingb2.countryTwoValue = '芬蘭';}	
if (countryTwo == '挪威') {mappingb2.countryTwoValue = '挪威';}	
if (countryTwo == '瑞典') {mappingb2.countryTwoValue = '瑞典';}		
if (countryTwo == '比利時') {mappingb2.countryTwoValue = '比利時';}	
if (countryTwo == '西班牙') {mappingb2.countryTwoValue = '西班牙';}	
if (countryTwo == '法國') {mappingb2.countryTwoValue = '法國';}		
if (countryTwo == '英國') {mappingb2.countryTwoValue = '英國';}		
if (countryTwo == '梵蒂岡') {mappingb2.countryTwoValue = '梵蒂岡';}		
if (countryTwo == '荷蘭') {mappingb2.countryTwoValue = '荷蘭';}		
if (countryTwo == '意大利') {mappingb2.countryTwoValue = '意大利';}		
if (countryTwo == '愛爾蘭') { mappingb2.countryTwoValue = '愛爾蘭';}		
if (countryTwo == '瑞士') { mappingb2.countryTwoValue = '瑞士';}		
if (countryTwo == '葡萄牙') {mappingb2.countryTwoValue = '葡萄牙';}		
if (countryTwo == '德國') {mappingb2.countryTwoValue = '德國';}		
if (countryTwo == '盧森堡') {mappingb2.countryTwoValue = '盧森堡';}
if (countryTwo == '土耳其') {mappingb2.countryTwoValue = '土耳其';}
if (countryTwo == '白俄羅斯') {mappingb2.countryTwoValue = '白俄羅斯';}
if (countryTwo == '立陶宛') {mappingb2.countryTwoValue = '立陶宛';}
if (countryTwo == '匈牙利') {mappingb2.countryTwoValue = '匈牙利';}
if (countryTwo == '克羅地亞') {mappingb2.countryTwoValue = '克羅地亞';}
if (countryTwo == '希臘') {mappingb2.countryTwoValue = '希臘';}
if (countryTwo == '拉脫維亞') {mappingb2.countryTwoValue = '拉脫維亞';}
if (countryTwo == '波斯尼亞和黑塞哥維那') {mappingb2.countryTwoValue = '波斯尼亞和黑塞哥維那';}
if (countryTwo == '波蘭') {mappingb2.countryTwoValue = '波蘭';}
if (countryTwo == '阿爾巴尼亞') {mappingb2.countryTwoValue = '阿爾巴尼亞';}
if (countryTwo == '保加利亞') {mappingb2.countryTwoValue = '保加利亞';}
if (countryTwo == '捷克') {mappingb2.countryTwoValue = '捷克';}
if (countryTwo == '斯洛文尼亞') {mappingb2.countryTwoValue = '斯洛文尼亞';}
if (countryTwo == '黑山') {mappingb2.countryTwoValue = '黑山';}
if (countryTwo == '塞浦路斯') {mappingb2.countryTwoValue = '塞浦路斯';}	
if (countryTwo == '塞爾維亞') {mappingb2.countryTwoValue = '塞爾維亞';}
if (countryTwo == '奧地利') {mappingb2.countryTwoValue = '奧地利';}
if (countryTwo == '愛沙尼亞') {mappingb2.countryTwoValue = '愛沙尼亞';}
if (countryTwo == '羅馬尼亞') {mappingb2.countryTwoValue = '羅馬尼亞';}
if (countryTwo == '巴林') {mappingb2.countryTwoValue = '巴林';}
if (countryTwo == '卡塔爾') {mappingb2.countryTwoValue = '卡塔爾';}
if (countryTwo == '沙特阿拉伯') {mappingb2.countryTwoValue = '沙特阿拉伯';}
if (countryTwo == '坦桑尼亞') {mappingb2.countryTwoValue = '坦桑尼亞';}
if (countryTwo == '肯亞') {mappingb2.countryTwoValue = '肯亞';}
if (countryTwo == '阿聯酋') {mappingb2.countryTwoValue = '阿聯酋';}
if (countryTwo == '南非') {mappingb2.countryTwoValue = '南非';}
if (countryTwo == '迦納') {mappingb2.countryTwoValue = '迦納';}
if (countryTwo == '烏干達') {mappingb2.countryTwoValue = '烏干達';}
if (countryTwo == '摩洛哥') {mappingb2.countryTwoValue = '摩洛哥';}
if (countryTwo == '盧旺達') {mappingb2.countryTwoValue = '盧旺達';}
if (countryTwo == '日本') {mappingb2.countryTwoValue = '日本';}
if (countryTwo == '韓國') {mappingb2.countryTwoValue = '韓國';}
if (countryTwo == '老撾') {mappingb2.countryTwoValue = '老撾';}
if (countryTwo == '汶萊') {mappingb2.countryTwoValue = '汶萊';}
if (countryTwo == '東帝汶') {mappingb2.countryTwoValue = '東帝汶';}
if (countryTwo == '柬埔寨') {mappingb2.countryTwoValue = '柬埔寨';}
if (countryTwo == '泰國') {mappingb2.countryTwoValue = '泰國';}
if (countryTwo == '馬來西亞') {mappingb2.countryTwoValue = '馬來西亞';}
if (countryTwo == '菲律賓') {mappingb2.countryTwoValue = '菲律賓';}
if (countryTwo == '越南') {mappingb2.countryTwoValue = '越南';}
if (countryTwo == '新加坡') {mappingb2.countryTwoValue = '新加坡';}
if (countryTwo == '緬甸') {mappingb2.countryTwoValue = '緬甸';}
if (countryTwo == '不丹') {mappingb2.countryTwoValue = '不丹';}
if (countryTwo == '尼泊爾') {mappingb2.countryTwoValue = '尼泊爾';}
if (countryTwo == '印度') {mappingb2.countryTwoValue = '印度';}
if (countryTwo == '孟加拉') {mappingb2.countryTwoValue = '孟加拉';}
if (countryTwo == '馬爾代夫') {mappingb2.countryTwoValue = '馬爾代夫';}
if (countryTwo == '斯里蘭卡') {mappingb2.countryTwoValue = '斯里蘭卡';}
if (countryTwo == '土庫曼') {mappingb2.countryTwoValue = '土庫曼';}
if (countryTwo == '緬甸') {mappingb2.countryTwoValue = '緬甸';}  
if (countryTwo == '吉爾吉斯') {mappingb2.countryTwoValue = '吉爾吉斯';}
if (countryTwo == '亞美尼亞') {mappingb2.countryTwoValue = '亞美尼亞';}
if (countryTwo == '阿塞拜疆') {mappingb2.countryTwoValue = '阿塞拜疆';}
if (countryTwo == '哈薩克') {mappingb2.countryTwoValue = '哈薩克';}
if (countryTwo == '格魯吉亞') {mappingb2.countryTwoValue = '格魯吉亞';}
if (countryTwo == '烏茲別克') {mappingb2.countryTwoValue = '烏茲別克';}
if (countryTwo == '塔吉克') {mappingb2.countryTwoValue = '塔吉克';}
if (countryTwo == '蒙古') {mappingb2.countryTwoValue = '蒙古';}
if (countryTwo == '印尼') {mappingb2.countryTwoValue = '印尼';}
if (countryTwo  == '斯洛伐克') {mappingb2.countryTwoValue = '斯洛伐克';}

if (countryThree == 'othercountry') {mappingb2.countryThreeValue = '其他';}
if (countryThree == '厄瓜多爾') {mappingb2.countryThreeValue = '厄瓜多爾';}
if (countryThree == '巴西') {mappingb2.countryThreeValue = '巴西';}
if (countryThree == '巴拿馬') {mappingb2.countryThreeValue = '巴拿馬';}
if (countryThree == '古巴') {mappingb2.countryThreeValue = '古巴';}	
if (countryThree == '尼加拉瓜') {mappingb2.countryThreeValue = '尼加拉瓜';}		
if (countryThree == '多米尼加') {mappingb2.countryThreeValue = '多米尼加';}		
if (countryThree == '阿根廷') {mappingb2.countryThreeValue = '阿根廷';}		
if (countryThree == '洪都拉斯') {mappingb2.countryThreeValue = '洪都拉斯';}		
if (countryThree == '玻利維亞') {mappingb2.countryThreeValue = '玻利維亞';}
if (countryThree == '哥倫比亞') {mappingb2.countryThreeValue = '哥倫比亞';}
if (countryThree == '哥斯達黎加') {mappingb2.countryThreeValue = '哥斯達黎加';}
if (countryThree == '烏拉圭') {mappingb2.countryThreeValue = '烏拉圭';}
if (countryThree == '秘魯') {mappingb2.countryThreeValue = '秘魯';}	
if (countryThree == '智利') {mappingb2.countryThreeValue = '智利';}		
if (countryThree == '薩爾瓦多') {mappingb2.countryThreeValue = '薩爾瓦多';}		
if (countryThree == '加拿大') {mappingb2.countryThreeValue = '加拿大';}		
if (countryThree == '美國') {mappingb2.countryThreeValue = '美國';}		
if (countryThree == '墨西哥') {mappingb2.countryThreeValue = '墨西哥';}	
if (countryThree == '澳洲') {mappingb2.countryThreeValue = '澳洲';}	
if (countryThree == '新西蘭') {mappingb2.countryThreeValue = '新西蘭';}	
if (countryThree == '丹麥') {mappingb2.countryThreeValue = '丹麥';}	
if (countryThree == '冰島') {mappingb2.countryThreeValue = '冰島';}		
if (countryThree == '芬蘭') {mappingb2.countryThreeValue = '芬蘭';}	
if (countryThree == '挪威') {mappingb2.countryThreeValue = '挪威';}	
if (countryThree == '瑞典') {mappingb2.countryThreeValue = '瑞典';}		
if (countryThree == '比利時') {mappingb2.countryThreeValue = '比利時';}	
if (countryThree == '西班牙') {mappingb2.countryThreeValue = '西班牙';}	
if (countryThree == '法國') {mappingb2.countryThreeValue = '法國';}		
if (countryThree == '英國') {mappingb2.countryThreeValue = '英國';}		
if (countryThree == '梵蒂岡') {mappingb2.countryThreeValue = '梵蒂岡';}		
if (countryThree == '荷蘭') {mappingb2.countryThreeValue = '荷蘭';}		
if (countryThree == '意大利') {mappingb2.countryThreeValue = '意大利';}		
if (countryThree == '愛爾蘭') { mappingb2.countryThreeValue = '愛爾蘭';}		
if (countryThree == '瑞士') { mappingb2.countryThreeValue = '瑞士';}		
if (countryThree == '葡萄牙') {mappingb2.countryThreeValue = '葡萄牙';}		
if (countryThree == '德國') {mappingb2.countryThreeValue = '德國';}		
if (countryThree == '盧森堡') {mappingb2.countryThreeValue = '盧森堡';}
if (countryThree == '土耳其') {mappingb2.countryThreeValue = '土耳其';}
if (countryThree == '白俄羅斯') {mappingb2.countryThreeValue = '白俄羅斯';}
if (countryThree == '立陶宛') {mappingb2.countryThreeValue = '立陶宛';}
if (countryThree == '匈牙利') {mappingb2.countryThreeValue = '匈牙利';}
if (countryThree == '克羅地亞') {mappingb2.countryThreeValue = '克羅地亞';}
if (countryThree == '希臘') {mappingb2.countryThreeValue = '希臘';}
if (countryThree == '拉脫維亞') {mappingb2.countryThreeValue = '拉脫維亞';}
if (countryThree == '波斯尼亞和黑塞哥維那') {mappingb2.countryThreeValue = '波斯尼亞和黑塞哥維那';}
if (countryThree == '波蘭') {mappingb2.countryThreeValue = '波蘭';}
if (countryThree == '阿爾巴尼亞') {mappingb2.countryThreeValue = '阿爾巴尼亞';}
if (countryThree == '保加利亞') {mappingb2.countryThreeValue = '保加利亞';}
if (countryThree == '捷克') {mappingb2.countryThreeValue = '捷克';}
if (countryThree == '斯洛文尼亞') {mappingb2.countryThreeValue = '斯洛文尼亞';}
if (countryThree == '黑山') {mappingb2.countryThreeValue = '黑山';}
if (countryThree == '塞浦路斯') {mappingb2.countryThreeValue = '塞浦路斯';}	
if (countryThree == '塞爾維亞') {mappingb2.countryThreeValue = '塞爾維亞';}
if (countryThree == '奧地利') {mappingb2.countryThreeValue = '奧地利';}
if (countryThree == '愛沙尼亞') {mappingb2.countryThreeValue = '愛沙尼亞';}
if (countryThree == '羅馬尼亞') {mappingb2.countryThreeValue = '羅馬尼亞';}
if (countryThree == '巴林') {mappingb2.countryThreeValue = '巴林';}
if (countryThree == '卡塔爾') {mappingb2.countryThreeValue = '卡塔爾';}
if (countryThree == '沙特阿拉伯') {mappingb2.countryThreeValue = '沙特阿拉伯';}
if (countryThree == '坦桑尼亞') {mappingb2.countryThreeValue = '坦桑尼亞';}
if (countryThree == '肯亞') {mappingb2.countryThreeValue = '肯亞';}
if (countryThree == '阿聯酋') {mappingb2.countryThreeValue = '阿聯酋';}
if (countryThree == '南非') {mappingb2.countryThreeValue = '南非';}
if (countryThree == '迦納') {mappingb2.countryThreeValue = '迦納';}
if (countryThree == '烏干達') {mappingb2.countryThreeValue = '烏干達';}
if (countryThree == '摩洛哥') {mappingb2.countryThreeValue = '摩洛哥';}
if (countryThree == '盧旺達') {mappingb2.countryThreeValue = '盧旺達';}
if (countryThree == '日本') {mappingb2.countryThreeValue = '日本';}
if (countryThree == '韓國') {mappingb2.countryThreeValue = '韓國';}
if (countryThree == '老撾') {mappingb2.countryThreeValue = '老撾';}
if (countryThree == '汶萊') {mappingb2.countryThreeValue = '汶萊';}
if (countryThree == '東帝汶') {mappingb2.countryThreeValue = '東帝汶';}
if (countryThree == '柬埔寨') {mappingb2.countryThreeValue = '柬埔寨';}
if (countryThree == '泰國') {mappingb2.countryThreeValue = '泰國';}
if (countryThree == '馬來西亞') {mappingb2.countryThreeValue = '馬來西亞';}
if (countryThree == '菲律賓') {mappingb2.countryThreeValue = '菲律賓';}
if (countryThree == '越南') {mappingb2.countryThreeValue = '越南';}
if (countryThree == '新加坡') {mappingb2.countryThreeValue = '新加坡';}
if (countryThree == '緬甸') {mappingb2.countryThreeValue = '緬甸';}
if (countryThree == '不丹') {mappingb2.countryThreeValue = '不丹';}
if (countryThree == '尼泊爾') {mappingb2.countryThreeValue = '尼泊爾';}
if (countryThree == '印度') {mappingb2.countryThreeValue = '印度';}
if (countryThree == '孟加拉') {mappingb2.countryThreeValue = '孟加拉';}
if (countryThree == '馬爾代夫') {mappingb2.countryThreeValue = '馬爾代夫';}
if (countryThree == '斯里蘭卡') {mappingb2.countryThreeValue = '斯里蘭卡';}
if (countryThree == '土庫曼') {mappingb2.countryThreeValue = '土庫曼';}
if (countryThree == '緬甸') {mappingb2.countryThreeValue = '緬甸';}  
if (countryThree == '吉爾吉斯') {mappingb2.countryThreeValue = '吉爾吉斯';}
if (countryThree == '亞美尼亞') {mappingb2.countryThreeValue = '亞美尼亞';}
if (countryThree == '阿塞拜疆') {mappingb2.countryThreeValue = '阿塞拜疆';}
if (countryThree == '哈薩克') {mappingb2.countryThreeValue = '哈薩克';}
if (countryThree == '格魯吉亞') {mappingb2.countryThreeValue = '格魯吉亞';}
if (countryThree == '烏茲別克') {mappingb2.countryThreeValue = '烏茲別克';}
if (countryThree == '塔吉克') {mappingb2.countryThreeValue = '塔吉克';}
if (countryThree == '蒙古') {mappingb2.countryThreeValue = '蒙古';}
if (countryThree == '印尼') {mappingb2.countryThreeValue = '印尼';}
if (countryThree == '斯洛伐克') {mappingb2.countryThreeValue = '斯洛伐克';}

if (countryFour == 'othercountry') {mappingb2.countryFourValue = '其他';}
if (countryFour == '厄瓜多爾') {mappingb2.countryFourValue = '厄瓜多爾';}
if (countryFour == '巴西') {mappingb2.countryFourValue = '巴西';}
if (countryFour == '巴拿馬') {mappingb2.countryFourValue = '巴拿馬';}
if (countryFour == '古巴') {mappingb2.countryFourValue = '古巴';}	
if (countryFour == '尼加拉瓜') {mappingb2.countryFourValue = '尼加拉瓜';}		
if (countryFour == '多米尼加') {mappingb2.countryFourValue = '多米尼加';}		
if (countryFour == '阿根廷') {mappingb2.countryFourValue = '阿根廷';}		
if (countryFour == '洪都拉斯') {mappingb2.countryFourValue = '洪都拉斯';}		
if (countryFour == '玻利維亞') {mappingb2.countryFourValue = '玻利維亞';}
if (countryFour == '哥倫比亞') {mappingb2.countryFourValue = '哥倫比亞';}
if (countryFour == '哥斯達黎加') {mappingb2.countryFourValue = '哥斯達黎加';}
if (countryFour == '烏拉圭') {mappingb2.countryFourValue = '烏拉圭';}
if (countryFour == '秘魯') {mappingb2.countryFourValue = '秘魯';}	
if (countryFour == '智利') {mappingb2.countryFourValue = '智利';}		
if (countryFour == '薩爾瓦多') {mappingb2.countryFourValue = '薩爾瓦多';}		
if (countryFour == '加拿大') {mappingb2.countryFourValue = '加拿大';}		
if (countryFour == '美國') {mappingb2.countryFourValue = '美國';}		
if (countryFour == '墨西哥') {mappingb2.countryFourValue = '墨西哥';}	
if (countryFour == '澳洲') {mappingb2.countryFourValue = '澳洲';}	
if (countryFour == '新西蘭') {mappingb2.countryFourValue = '新西蘭';}	
if (countryFour == '丹麥') {mappingb2.countryFourValue = '丹麥';}	
if (countryFour == '冰島') {mappingb2.countryFourValue = '冰島';}		
if (countryFour == '芬蘭') {mappingb2.countryFourValue = '芬蘭';}	
if (countryFour == '挪威') {mappingb2.countryFourValue = '挪威';}	
if (countryFour == '瑞典') {mappingb2.countryFourValue = '瑞典';}		
if (countryFour == '比利時') {mappingb2.countryFourValue = '比利時';}	
if (countryFour == '西班牙') {mappingb2.countryFourValue = '西班牙';}	
if (countryFour == '法國') {mappingb2.countryFourValue = '法國';}		
if (countryFour == '英國') {mappingb2.countryFourValue = '英國';}		
if (countryFour == '梵蒂岡') {mappingb2.countryFourValue = '梵蒂岡';}		
if (countryFour == '荷蘭') {mappingb2.countryFourValue = '荷蘭';}		
if (countryFour == '意大利') {mappingb2.countryFourValue = '意大利';}		
if (countryFour == '愛爾蘭') { mappingb2.countryFourValue = '愛爾蘭';}		
if (countryFour == '瑞士') { mappingb2.countryFourValue = '瑞士';}		
if (countryFour == '葡萄牙') {mappingb2.countryFourValue = '葡萄牙';}		
if (countryFour == '德國') {mappingb2.countryFourValue = '德國';}		
if (countryFour == '盧森堡') {mappingb2.countryFourValue = '盧森堡';}
if (countryFour == '土耳其') {mappingb2.countryFourValue = '土耳其';}
if (countryFour == '白俄羅斯') {mappingb2.countryFourValue = '白俄羅斯';}
if (countryFour == '立陶宛') {mappingb2.countryFourValue = '立陶宛';}
if (countryFour == '匈牙利') {mappingb2.countryFourValue = '匈牙利';}
if (countryFour == '克羅地亞') {mappingb2.countryFourValue = '克羅地亞';}
if (countryFour == '希臘') {mappingb2.countryFourValue = '希臘';}
if (countryFour == '拉脫維亞') {mappingb2.countryFourValue = '拉脫維亞';}
if (countryFour == '波斯尼亞和黑塞哥維那') {mappingb2.countryFourValue = '波斯尼亞和黑塞哥維那';}
if (countryFour == '波蘭') {mappingb2.countryFourValue = '波蘭';}
if (countryFour == '阿爾巴尼亞') {mappingb2.countryFourValue = '阿爾巴尼亞';}
if (countryFour == '保加利亞') {mappingb2.countryFourValue = '保加利亞';}
if (countryFour == '捷克') {mappingb2.countryFourValue = '捷克';}
if (countryFour == '斯洛文尼亞') {mappingb2.countryFourValue = '斯洛文尼亞';}
if (countryFour == '黑山') {mappingb2.countryFourValue = '黑山';}
if (countryFour == '塞浦路斯') {mappingb2.countryFourValue = '塞浦路斯';}	
if (countryFour == '塞爾維亞') {mappingb2.countryFourValue = '塞爾維亞';}
if (countryFour == '奧地利') {mappingb2.countryFourValue = '奧地利';}
if (countryFour == '愛沙尼亞') {mappingb2.countryFourValue = '愛沙尼亞';}
if (countryFour == '羅馬尼亞') {mappingb2.countryFourValue = '羅馬尼亞';}
if (countryFour == '巴林') {mappingb2.countryFourValue = '巴林';}
if (countryFour == '卡塔爾') {mappingb2.countryFourValue = '卡塔爾';}
if (countryFour == '沙特阿拉伯') {mappingb2.countryFourValue = '沙特阿拉伯';}
if (countryFour == '坦桑尼亞') {mappingb2.countryFourValue = '坦桑尼亞';}
if (countryFour == '肯亞') {mappingb2.countryFourValue = '肯亞';}
if (countryFour == '阿聯酋') {mappingb2.countryFourValue = '阿聯酋';}
if (countryFour == '南非') {mappingb2.countryFourValue = '南非';}
if (countryFour == '迦納') {mappingb2.countryFourValue = '迦納';}
if (countryFour == '烏干達') {mappingb2.countryFourValue = '烏干達';}
if (countryFour == '摩洛哥') {mappingb2.countryFourValue = '摩洛哥';}
if (countryFour == '盧旺達') {mappingb2.countryFourValue = '盧旺達';}
if (countryFour == '日本') {mappingb2.countryFourValue = '日本';}
if (countryFour == '韓國') {mappingb2.countryFourValue = '韓國';}
if (countryFour == '老撾') {mappingb2.countryFourValue = '老撾';}
if (countryFour == '汶萊') {mappingb2.countryFourValue = '汶萊';}
if (countryFour == '東帝汶') {mappingb2.countryFourValue = '東帝汶';}
if (countryFour == '柬埔寨') {mappingb2.countryFourValue = '柬埔寨';}
if (countryFour == '泰國') {mappingb2.countryFourValue = '泰國';}
if (countryFour == '馬來西亞') {mappingb2.countryFourValue = '馬來西亞';}
if (countryFour == '菲律賓') {mappingb2.countryFourValue = '菲律賓';}
if (countryFour == '越南') {mappingb2.countryFourValue = '越南';}
if (countryFour == '新加坡') {mappingb2.countryFourValue = '新加坡';}
if (countryFour == '緬甸') {mappingb2.countryFourValue = '緬甸';}
if (countryFour == '不丹') {mappingb2.countryFourValue = '不丹';}
if (countryFour == '尼泊爾') {mappingb2.countryFourValue = '尼泊爾';}
if (countryFour == '印度') {mappingb2.countryFourValue = '印度';}
if (countryFour == '孟加拉') {mappingb2.countryFourValue = '孟加拉';}
if (countryFour == '馬爾代夫') {mappingb2.countryFourValue = '馬爾代夫';}
if (countryFour == '斯里蘭卡') {mappingb2.countryFourValue = '斯里蘭卡';}
if (countryFour == '土庫曼') {mappingb2.countryFourValue = '土庫曼';}
if (countryFour == '緬甸') {mappingb2.countryFourValue = '緬甸';}  
if (countryFour == '吉爾吉斯') {mappingb2.countryFourValue = '吉爾吉斯';}
if (countryFour == '亞美尼亞') {mappingb2.countryFourValue = '亞美尼亞';}
if (countryFour == '阿塞拜疆') {mappingb2.countryFourValue = '阿塞拜疆';}
if (countryFour == '哈薩克') {mappingb2.countryFourValue = '哈薩克';}
if (countryFour == '格魯吉亞') {mappingb2.countryFourValue = '格魯吉亞';}
if (countryFour == '烏茲別克') {mappingb2.countryFourValue = '烏茲別克';}
if (countryFour == '塔吉克') {mappingb2.countryFourValue = '塔吉克';}
if (countryFour == '蒙古') {mappingb2.countryFourValue = '蒙古';}
if (countryFour == '印尼') {mappingb2.countryFourValue = '印尼';}
if (countryFour == '斯洛伐克') {mappingb2.countryFourValue = '斯洛伐克';}

if (countryFive == 'othercountry') {mappingb2.countryFiveValue = '其他';}
if (countryFive == '厄瓜多爾') {mappingb2.countryFiveValue = '厄瓜多爾';}
if (countryFive == '巴西') {mappingb2.countryFiveValue = '巴西';}
if (countryFive == '巴拿馬') {mappingb2.countryFiveValue = '巴拿馬';}
if (countryFive == '古巴') {mappingb2.countryFiveValue = '古巴';}	
if (countryFive == '尼加拉瓜') {mappingb2.countryFiveValue = '尼加拉瓜';}		
if (countryFive == '多米尼加') {mappingb2.countryFiveValue = '多米尼加';}		
if (countryFive == '阿根廷') {mappingb2.countryFiveValue = '阿根廷';}		
if (countryFive == '洪都拉斯') {mappingb2.countryFiveValue = '洪都拉斯';}		
if (countryFive == '玻利維亞') {mappingb2.countryFiveValue = '玻利維亞';}
if (countryFive == '哥倫比亞') {mappingb2.countryFiveValue = '哥倫比亞';}
if (countryFive == '哥斯達黎加') {mappingb2.countryFiveValue = '哥斯達黎加';}
if (countryFive == '烏拉圭') {mappingb2.countryFiveValue = '烏拉圭';}
if (countryFive == '秘魯') {mappingb2.countryFiveValue = '秘魯';}	
if (countryFive == '智利') {mappingb2.countryFiveValue = '智利';}		
if (countryFive == '薩爾瓦多') {mappingb2.countryFiveValue = '薩爾瓦多';}		
if (countryFive == '加拿大') {mappingb2.countryFiveValue = '加拿大';}		
if (countryFive == '美國') {mappingb2.countryFiveValue = '美國';}		
if (countryFive == '墨西哥') {mappingb2.countryFiveValue = '墨西哥';}	
if (countryFive == '澳洲') {mappingb2.countryFiveValue = '澳洲';}	
if (countryFive == '新西蘭') {mappingb2.countryFiveValue = '新西蘭';}	
if (countryFive == '丹麥') {mappingb2.countryFiveValue = '丹麥';}	
if (countryFive == '冰島') {mappingb2.countryFiveValue = '冰島';}		
if (countryFive == '芬蘭') {mappingb2.countryFiveValue = '芬蘭';}	
if (countryFive == '挪威') {mappingb2.countryFiveValue = '挪威';}	
if (countryFive == '瑞典') {mappingb2.countryFiveValue = '瑞典';}		
if (countryFive == '比利時') {mappingb2.countryFiveValue = '比利時';}	
if (countryFive == '西班牙') {mappingb2.countryFiveValue = '西班牙';}	
if (countryFive == '法國') {mappingb2.countryFiveValue = '法國';}		
if (countryFive == '英國') {mappingb2.countryFiveValue = '英國';}		
if (countryFive == '梵蒂岡') {mappingb2.countryFiveValue = '梵蒂岡';}		
if (countryFive == '荷蘭') {mappingb2.countryFiveValue = '荷蘭';}		
if (countryFive == '意大利') {mappingb2.countryFiveValue = '意大利';}		
if (countryFive == '愛爾蘭') { mappingb2.countryFiveValue = '愛爾蘭';}		
if (countryFive == '瑞士') { mappingb2.countryFiveValue = '瑞士';}		
if (countryFive == '葡萄牙') {mappingb2.countryFiveValue = '葡萄牙';}		
if (countryFive == '德國') {mappingb2.countryFiveValue = '德國';}		
if (countryFive == '盧森堡') {mappingb2.countryFiveValue = '盧森堡';}
if (countryFive == '土耳其') {mappingb2.countryFiveValue = '土耳其';}
if (countryFive == '白俄羅斯') {mappingb2.countryFiveValue = '白俄羅斯';}
if (countryFive == '立陶宛') {mappingb2.countryFiveValue = '立陶宛';}
if (countryFive == '匈牙利') {mappingb2.countryFiveValue = '匈牙利';}
if (countryFive == '克羅地亞') {mappingb2.countryFiveValue = '克羅地亞';}
if (countryFive == '希臘') {mappingb2.countryFiveValue = '希臘';}
if (countryFive == '拉脫維亞') {mappingb2.countryFiveValue = '拉脫維亞';}
if (countryFive == '波斯尼亞和黑塞哥維那') {mappingb2.countryFiveValue = '波斯尼亞和黑塞哥維那';}
if (countryFive == '波蘭') {mappingb2.countryFiveValue = '波蘭';}
if (countryFive == '阿爾巴尼亞') {mappingb2.countryFiveValue = '阿爾巴尼亞';}
if (countryFive == '保加利亞') {mappingb2.countryFiveValue = '保加利亞';}
if (countryFive == '捷克') {mappingb2.countryFiveValue = '捷克';}
if (countryFive == '斯洛文尼亞') {mappingb2.countryFiveValue = '斯洛文尼亞';}
if (countryFive == '黑山') {mappingb2.countryFiveValue = '黑山';}
if (countryFive == '塞浦路斯') {mappingb2.countryFiveValue = '塞浦路斯';}	
if (countryFive == '塞爾維亞') {mappingb2.countryFiveValue = '塞爾維亞';}
if (countryFive == '奧地利') {mappingb2.countryFiveValue = '奧地利';}
if (countryFive == '愛沙尼亞') {mappingb2.countryFiveValue = '愛沙尼亞';}
if (countryFive == '羅馬尼亞') {mappingb2.countryFiveValue = '羅馬尼亞';}
if (countryFive == '巴林') {mappingb2.countryFiveValue = '巴林';}
if (countryFive == '卡塔爾') {mappingb2.countryFiveValue = '卡塔爾';}
if (countryFive == '沙特阿拉伯') {mappingb2.countryFiveValue = '沙特阿拉伯';}
if (countryFive == '坦桑尼亞') {mappingb2.countryFiveValue = '坦桑尼亞';}
if (countryFive == '肯亞') {mappingb2.countryFiveValue = '肯亞';}
if (countryFive == '阿聯酋') {mappingb2.countryFiveValue = '阿聯酋';}
if (countryFive == '南非') {mappingb2.countryFiveValue = '南非';}
if (countryFive == '迦納') {mappingb2.countryFiveValue = '迦納';}
if (countryFive == '烏干達') {mappingb2.countryFiveValue = '烏干達';}
if (countryFive == '摩洛哥') {mappingb2.countryFiveValue = '摩洛哥';}
if (countryFive == '盧旺達') {mappingb2.countryFiveValue = '盧旺達';}
if (countryFive == '日本') {mappingb2.countryFiveValue = '日本';}
if (countryFive == '韓國') {mappingb2.countryFiveValue = '韓國';}
if (countryFive == '老撾') {mappingb2.countryFiveValue = '老撾';}
if (countryFive == '汶萊') {mappingb2.countryFiveValue = '汶萊';}
if (countryFive == '東帝汶') {mappingb2.countryFiveValue = '東帝汶';}
if (countryFive == '柬埔寨') {mappingb2.countryFiveValue = '柬埔寨';}
if (countryFive == '泰國') {mappingb2.countryFiveValue = '泰國';}
if (countryFive == '馬來西亞') {mappingb2.countryFiveValue = '馬來西亞';}
if (countryFive == '菲律賓') {mappingb2.countryFiveValue = '菲律賓';}
if (countryFive == '越南') {mappingb2.countryFiveValue = '越南';}
if (countryFive == '新加坡') {mappingb2.countryFiveValue = '新加坡';}
if (countryFive == '緬甸') {mappingb2.countryFiveValue = '緬甸';}
if (countryFive == '不丹') {mappingb2.countryFiveValue = '不丹';}
if (countryFive == '尼泊爾') {mappingb2.countryFiveValue = '尼泊爾';}
if (countryFive == '印度') {mappingb2.countryFiveValue = '印度';}
if (countryFive == '孟加拉') {mappingb2.countryFiveValue = '孟加拉';}
if (countryFive == '馬爾代夫') {mappingb2.countryFiveValue = '馬爾代夫';}
if (countryFive == '斯里蘭卡') {mappingb2.countryFiveValue = '斯里蘭卡';}
if (countryFive == '土庫曼') {mappingb2.countryFiveValue = '土庫曼';}
if (countryFive == '緬甸') {mappingb2.countryFiveValue = '緬甸';}  
if (countryFive == '吉爾吉斯') {mappingb2.countryFiveValue = '吉爾吉斯';}
if (countryFive == '亞美尼亞') {mappingb2.countryFiveValue = '亞美尼亞';}
if (countryFive == '阿塞拜疆') {mappingb2.countryFiveValue = '阿塞拜疆';}
if (countryFive == '哈薩克') {mappingb2.countryFiveValue = '哈薩克';}
if (countryFive == '格魯吉亞') {mappingb2.countryFiveValue = '格魯吉亞';}
if (countryFive == '烏茲別克') {mappingb2.countryFiveValue = '烏茲別克';}
if (countryFive == '塔吉克') {mappingb2.countryFiveValue = '塔吉克';}
if (countryFive == '蒙古') {mappingb2.countryFiveValue = '蒙古';}
if (countryFive == '印尼') {mappingb2.countryFiveValue = '印尼';}
if (countryFive == '斯洛伐克') {mappingb2.countryFiveValue = '斯洛伐克';}


//country handle finish//

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
    pageNo2++;

    const mappingc = {
      ...flattenToStringMap(data),
      pageNo2,
    };


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartC.pdf`,
      mapping: mappingc,
    }));

    pageNo2++;



    const D1InternaltionExchangeHistoryFieldListDATA = get(data, 'D1InternaltionExchangeHistoryFieldList', []);
    const D2YouthInternshipExchangeHistoryFieldListDATA = get(data, 'D2YouthInternshipExchangeHistoryFieldList', []);
    
    //let D20_PreviousExchangeItem0 = D2YouthInternshipExchangeHistoryFieldListDATA.0.D2i_PreviousExchangeItem

    if (isEmpty(D1InternaltionExchangeHistoryFieldListDATA) && isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA)) {
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

    if (!isEmpty(D1InternaltionExchangeHistoryFieldListDATA) && isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA)) {
      const mappingd1 = {
        ...flattenToStringMap(data),
        pageNo2,
      };

     
      if (D1InternaltionExchangeHistoryFieldListDATA.length > 0){
        for (let i = 0; i < D1InternaltionExchangeHistoryFieldListDATA.length; i++) {
          if (i == 0){
            //mappingd1[`201718A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
            mappingd1[`201920A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
            mappingd1[`202324A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
            mappingd1[`202425A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
          }
        if (i == 1){
          //mappingd1[`201718B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
          mappingd1[`201920B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
          mappingd1[`202324B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
          mappingd1[`202425B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
      }
          if (i == 2){
        //mappingd1[`201718C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
        mappingd1[`201920C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
        mappingd1[`202324C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
        mappingd1[`202425C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
    }
        
  }
        _pdf_concat_array.push(pdf.merge({
          file: `${form.formId}_PartD_1.pdf`,
          mapping: mappingd1,
  
        }));
        
      }
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


    if (!isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA) && isEmpty(D1InternaltionExchangeHistoryFieldListDATA)) {
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

      if (D2YouthInternshipExchangeHistoryFieldListDATA.length > 0){

        //const d2 = get(data, 'D2YouthInternshipExchangeHistoryFieldList', []);
        let templistnoD2 = D2YouthInternshipExchangeHistoryFieldListDATA;
       // let temp0 = templist[0].D2i_PreviousExchangeItem;
        //let temp1 = templist[1].D2i_PreviousExchangeItem ;

        for (let i = 0; i < D2YouthInternshipExchangeHistoryFieldListDATA.length; i++) {
          if (i == 0){
            let temp0noD2 = templistnoD2[0].D2i_PreviousExchangeItem;
            mappingd2[`D2i_PreviousExchangeItem0`] = `${i_hk.translate(`field.label.${temp0noD2}`)}`;
          }
          if (i == 1){
            let temp1noD2 = templistnoD2[1].D2i_PreviousExchangeItem;
            mappingd2[`D2i_PreviousExchangeItem1`] = `${i_hk.translate(`field.label.${temp1noD2}`)}`;
          }
          if (i == 2){
            let temp2noD2 = templistnoD2[2].D2i_PreviousExchangeItem;
            mappingd2[`D2i_PreviousExchangeItem2`] = `${i_hk.translate(`field.label.${temp2noD2}`)}`;
          }
          if (i == 3){
            let temp3noD2 = templistnoD2[3].D2i_PreviousExchangeItem;
            mappingd2[`D2i_PreviousExchangeItem3`] = `${i_hk.translate(`field.label.${temp3noD2}`)}`;
          }
          if (i == 4){
            let temp4noD2 = templistnoD2[4].D2i_PreviousExchangeItem;
            mappingd2[`D2i_PreviousExchangeItem4`] = `${i_hk.translate(`field.label.${temp4noD2}`)}`;
          }

        }

        _pdf_concat_array.push(pdf.merge({
          file: `${form.formId}_PartD_2.pdf`,
          mapping: mappingd2,

        }));

      }


      pageNo2++;
    }

    //if (!isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA) && !isEmpty(D1InternaltionExchangeHistoryFieldListDATA)) {
      const mappingd1 = {
        ...flattenToStringMap(data),
        pageNo2,
      };

     
      if (!isEmpty(D1InternaltionExchangeHistoryFieldListDATA) && !isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA)) {
        //const D1InternaltionExchangeHistoryFieldListDATALIST = D1InternaltionExchangeHistoryFieldListDATA;


        if (D1InternaltionExchangeHistoryFieldListDATA.length > 0){
          for (let i = 0; i < D1InternaltionExchangeHistoryFieldListDATA.length; i++) {
            if (i == 0){
              //mappingd1[`201718A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
              mappingd1[`201920A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
              mappingd1[`202324A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
              mappingd1[`202425A`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
          }
          if (i == 1){
            //mappingd1[`201718B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
            mappingd1[`201920B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
            mappingd1[`202324B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
            mappingd1[`202425B`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
        }
        if (i == 2){
          //mappingd1[`201718C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201718') ? 'Yes' : '') : '';
          mappingd1[`201920C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('201920') ? 'Yes' : '') : '';
          mappingd1[`202324C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202324') ? 'Yes' : '') : '';
          mappingd1[`202425C`] = !isEmpty(D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem) ? (D1InternaltionExchangeHistoryFieldListDATA[i].D1i_PreviousExchangeItem.includes('202425') ? 'Yes' : '') : '';
      }
          
     }
          _pdf_concat_array.push(pdf.merge({
            file: `${form.formId}_PartD_1.pdf`,
            mapping: mappingd1,
    
          }));
          
        }
        pageNo2++;

      

      //if (!isEmpty(D2YouthInternshipExchangeHistoryFieldListDATA)) {
      const mappingd2Q1Q2 = {
        ...flattenToStringMap(data),
        pageNo2,
      };



      
      if (D2YouthInternshipExchangeHistoryFieldListDATA.length > 0){

        //const d2 = get(data, 'D2YouthInternshipExchangeHistoryFieldList', []);
        let templist = D2YouthInternshipExchangeHistoryFieldListDATA;
       // let temp0 = templist[0].D2i_PreviousExchangeItem;
        //let temp1 = templist[1].D2i_PreviousExchangeItem ;

        for (let i = 0; i < D2YouthInternshipExchangeHistoryFieldListDATA.length; i++) {
          if (i == 0){
            let temp0 = templist[0].D2i_PreviousExchangeItem;
            mappingd2Q1Q2[`D2i_PreviousExchangeItem0`] = `${i_hk.translate(`field.label.${temp0}`)}`;
          }
          if (i == 1){
            let temp1 = templist[1].D2i_PreviousExchangeItem;
            mappingd2Q1Q2[`D2i_PreviousExchangeItem1`] = `${i_hk.translate(`field.label.${temp1}`)}`;
          }
          if (i == 2){
            let temp2 = templist[2].D2i_PreviousExchangeItem;
            mappingd2Q1Q2[`D2i_PreviousExchangeItem2`] = `${i_hk.translate(`field.label.${temp2}`)}`;
          }
          if (i == 3){
            let temp3 = templist[3].D2i_PreviousExchangeItem;
            mappingd2Q1Q2[`D2i_PreviousExchangeItem3`] = `${i_hk.translate(`field.label.${temp3}`)}`;
          }
          if (i == 4){
            let temp4 = templist[4].D2i_PreviousExchangeItem;
            mappingd2Q1Q2[`D2i_PreviousExchangeItem4`] = `${i_hk.translate(`field.label.${temp4}`)}`;
          }

        }

        //mappingd2Q1Q2[`D2i_PreviousExchangeItem0`] = `${i_hk.translate(`field.label.${temp0}`)}`;



        
        //for (let i = 0; i < D2YouthInternshipExchangeHistoryFieldListDATA.length; i++) {
          //if (i == 0){
            //let temp0 = tempD2YouthInternshipExchangeHistoryFieldListDATA[0].D2i_PreviousExchangeItem;
           // mappingd2[`D2i_PreviousExchangeItem0`] = temp0;
          // mappingd2Q1Q2[`D2i_PreviousExchangeItem0`] = "hihihihi";
           
           //let temp1 = i_hk.translate(`field.label.201718Exchange`); 
           //let temp1 = tempD2YouthInternshipExchangeHistoryFieldListDATA[1].D2i_PreviousExchangeItem;
           // mappingd2[`D2i_PreviousExchangeItem1`] = `${i_hk.translate(`field.label.${temp1}`)}`;
            //mappingd2[`D2i_PreviousExchangeItem1`] = parsestring(temp1);
           //mappingd2[`D2i_PreviousExchangeItem1`] = "22222222222";
            //mappingd2[`D2i_PreviousExchangeItem0`] = i18n.translate(`field.label.201718Exchange`); 
            //if ( temp0 == '201718Exchange'){mappingd2.D2i_PreviousExchangeItem0 = "2017-18年度「青年內地交流資助計劃」";}

          //}

        //}
          _pdf_concat_array.push(pdf.merge({
            file: `${form.formId}_PartD_2.pdf`,
            mapping: mappingd2Q1Q2,
    
          }));
        
        
      }
      
      /*
      if (D2YouthInternshipExchangeHistoryFieldListDATA.length > 0){
          for (let i = 0; i < D2YouthInternshipExchangeHistoryFieldListDATA.length; i++) {
            if (i == 0){

              if str
                mappingd2.D2i_PreviousExchangeItem0 = i_hk.translate(i`field.label.partD2iOptionA`);
            }
          }
        }
      
      mappingd2.D2i_PreviousExchangeItem0 = i_hk.translate
     */
        
      pageNo2++;
    };

    //const pageNotmp = pageNo2 + 1;
    

    const mappingd3 = {
      ...flattenToStringMap(data),
      pageNo2,
     // pageNotmp,
    };


    const D3OtherHistoryFieldListDATA = get(data, 'D3OtherHistoryFieldList', []);

    for (let i = 0; i < D3OtherHistoryFieldListDATA.length; i++) {
      mappingd3[`D3viGovtsupport${i}`] = D3OtherHistoryFieldListDATA[i].D3viGovtsupport;
    }

    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartD_3.pdf`,
      mapping: mappingd3,

    }));
    pageNo2++;
    //pageNotmp = pageNotmp + 1;
    const pageNo3 = pageNo2 + 1;
    const pageNo4 = pageNo3 + 1;


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
      pageNo4,
    };

    const monthNames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const t = new Date(submit.submitTime);
    mappingef.date = t.getDate() < 10 ? `0${t.getDate()}/${monthNames[t.getMonth()]}/${t.getFullYear()}` : `${t.getDate()}/${monthNames[t.getMonth()]}/${t.getFullYear()}`;


    _pdf_concat_array.push(pdf.merge({
      file: `${form.formId}_PartEF.pdf`,
      mapping: mappingef,

    }));



    
// ------------------------------handle XML
const i18n = i18nByLocale('zh-HK');

const convertPartBCheckbox2str = (list1, i_hk) => {
  let result = '';
  let isFirst = true;

  if (!isEmpty(list1)) {
    for (let i = 0; i < list1.length; i++) {
      if (isFirst) {
        isFirst = false;
        result = `${i_hk.translate(`field.label.partB.${list1[i]}`)}`;
      } else {
        result += ',' + `${i_hk.translate(`field.label.partB.${list1[i]}`)}`;
      }
    }
  }

  return result;
};

const convertToIndustryString = (selectedValues, i18n) => {

  let result = '';
  let isFirst = true;
  if (!isEmpty(selectedValues)) {
    for (let i = 0; i < selectedValues.length; i++) {
      if (isFirst) {
        isFirst = false;
        result = `${i18n.translate(`field.label.${selectedValues[i]}`)}`;
      } else {
        result += ',' + `${i18n.translate(`field.label.${selectedValues[i]}`)}`;
      }
    }
  } else {
    result = '';
  }
  return result;
};

//handle AsiaOrNot

const checkday14limited = (regiondlistOne, regiondlistTwo, regiondlistThree, regiondlistFour, regiondlistFive) => {
        
  let daylimited =21;
  
    if (!isEmpty(regiondlistOne)) {
        if (regiondlistOne.includes('japanKorea')|| regiondlistOne.includes('EastsouthAsia') || regiondlistOne.includes('southAsia') || regiondlistOne.includes('midwestnorthAsia')) {
          daylimited=14;
          
  
        } else {
            daylimited=21;
  
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
  
    return daylimited;
  };
  
  //End Handling AsiaOrNot
  

data.fundingScheme = convertPartBCheckbox2str(get(data, 'fundingScheme', []), i_hk);
data.theme = convertPartBCheckbox2str(get(data, 'theme', []), i_hk);
data.Q19vSelectMultiple = convertPartBCheckbox2str(get(data, 'Q19vSelectMultiple', []), i_hk);
data.organiserNameOne_fundingScheme = convertPartBCheckbox2str(get(data, 'organiserNameOne_fundingScheme', []), i_hk);
data.organiserNameTwo_fundingScheme = convertPartBCheckbox2str(get(data, 'organiserNameTwo_fundingScheme', []), i_hk);
data.organiserNameThree_fundingScheme = convertPartBCheckbox2str(get(data, 'organiserNameThree_fundingScheme', []), i_hk);
data.AsiaOrNot = checkday14limited(regiondlistOne, regiondlistTwo, regiondlistThree, regiondlistFour, regiondlistFive);


if (!isEmpty(data.registrationStatus)) {
  if (data.registrationStatus == 'option1') {
    data.registrationStatus = i18n.translate(`field.label.partA.registrationOption1a`);
  } else if (data.registrationStatus == 'option2') {
    data.registrationStatus = `${i18n`field.label.partA.registrationOption2Part1`}${i18n`field.label.partA.registrationOption2Part2`}`;
  } else if (data.registrationStatus == 'option3') {
    data.registrationStatus = i18n.translate(`field.label.partA.registrationOption3a`);
  } else if (data.registrationStatus == 'option4') {
    data.registrationStatus = i18n.translate(`field.label.partA.registrationOption4a`);
  }
}

if (!isEmpty(data.registrationType)) {
  if (data.registrationType == 'cbo1_a') {
    data.registrationType = i18n.translate(`field.label.partA.cbo1_a`);
  } else if (data.registrationType == 'cbo1_b') {
    data.registrationType= i18n.translate(i18n`field.label.partA.cbo1_b`);
  } else if (data.registrationType == 'cbo1_c') {
    data.registrationType= i18n.translate(i18n`field.label.partA.cbo1_c`);
  } else if (data.registrationType == 'cbo1_d') {
    data.registrationType= i18n.translate(`${i18n`field.label.partA.cbo1_d_Part1`} ${data.cbo1_d_input1} ${i18n`field.label.partA.cbo1_d_Part2`} ${data.cbo1_d_input2} ${i18n`field.label.partA.cbo1_d_Part3`} ${i18n`field.label.partA.cbo1_b_Part1`} ${data.cbo1_d_input3} ${i18n`field.label.partA.cbo1_b_Part2`} ${data.cbo1_d_input4} ${i18n`field.label.partA.cbo1_b_Part3`} ${data.cbo1_d_input5} ${i18n`field.label.partA.cbo1_b_Part4`} ${data.cbo1_d_input6} ${i18n`field.label.partA.cbo1_b_Part5`} ${data.cbo1_d_input7} ${i18n`field.label.partA.cbo1_b_Part6`} ${data.cbo1_d_input8} ${i18n`field.label.partA.cbo1_b_Part7`}`);
  }
}

if (!isEmpty(data.join)) {
  if (data.join == 'y') {
    data.join = i18n`field.label.partA.y`;
  } else if (data.join == 'n') {
    data.join = i18n`field.label.partA.n`;
  }
}

if (!isEmpty(data.registrationStatus_organiserOne_practiceItemOne)) {
  if (data.registrationStatus_organiserOne_practiceItemOne == 'option1') {
    data.registrationStatus_organiserOne_practiceItemOne = i18n`field.label.partA.registrationOption1a`;
  } else if (data.registrationStatus_organiserOne_practiceItemOne == 'option2') {
    data.registrationStatus_organiserOne_practiceItemOne = `${i18n`field.label.partA.registrationOption2Part1`}${i18n`field.label.partA.registrationOption2Part2`}`;
  } else if (data.registrationStatus_organiserOne_practiceItemOne == 'option3') {
    data.registrationStatus_organiserOne_practiceItemOne = i18n`field.label.partA.registrationOption3a`;
  } else if (data.registrationStatus_organiserOne_practiceItemOne == 'option4') {
    data.registrationStatus_organiserOne_practiceItemOne = i18n`field.label.partA.registrationOption4a`;
  }
}

if (!isEmpty(data.registrationType_join1_practiceItemOne)) {
  if (data.registrationType_join1_practiceItemOne == 'cbo1_a') {
    data.registrationType_join1_practiceItemOne = i18n`field.label.partA.cbo1_a`;
  } else if (data.registrationType_join1_practiceItemOne == 'cbo1_b') {
    data.registrationType_join1_practiceItemOne = i18n`field.label.partA.cbo1_b`;
  }else if (data.registrationType_join1_practiceItemOne == 'cbo1_c') {
    data.registrationType_join1_practiceItemOne = i18n`field.label.partA.cbo1_c`;
  }else if (data.registrationType_join1_practiceItemOne == 'cbo1_d') {
    data.registrationType_join1_practiceItemOne = `${i18n`field.label.partA.cbo1_b_Part1`} ${data.cbo1_d_input1_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part2`} ${data.cbo1_d_input2_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part3`} ${data.cbo1_d_input3_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part4`} ${data.cbo1_d_input4_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part5`} ${data.cbo1_d_input5_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part6`} ${data.cbo1_d_input6_join1_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part7`}`;
  }
}

if (!isEmpty(data.registrationStatus_organiserTwo_practiceItemOne)) {
  if (data.registrationStatus_organiserTwo_practiceItemOne == 'option1') {
    data.registrationStatus_organiserTwo_practiceItemOne = i18n`field.label.partA.registrationOption1a`;
  } else if (data.registrationStatus_organiserTwo_practiceItemOne == 'option2') {
    data.registrationStatus_organiserTwo_practiceItemOne = `${i18n`field.label.partA.registrationOption2Part1`}${i18n`field.label.partA.registrationOption2Part2`}`;
  } else if (data.registrationStatus_organiserTwo_practiceItemOne == 'option3') {
    data.registrationStatus_organiserTwo_practiceItemOne = i18n`field.label.partA.registrationOption3a`;
  } else if (data.registrationStatus_organiserTwo_practiceItemOne == 'option4') {
    data.registrationStatus_organiserTwo_practiceItemOne = i18n`field.label.partA.registrationOption4a`;
  }
}

if (!isEmpty(data.registrationType_join2_practiceItemOne)) {
  if (data.registrationType_join2_practiceItemOne == 'cbo1_a') {
    data.registrationType_join2_practiceItemOne = i18n`field.label.partA.cbo1_a`;
  } else if (data.registrationType_join2_practiceItemOne == 'cbo1_b') {
    data.registrationType_join2_practiceItemOne = i18n`field.label.partA.cbo1_b`;
  } else if (data.registrationType_join2_practiceItemOne == 'cbo1_c') {
    data.registrationType_join2_practiceItemOne = i18n`field.label.partA.cbo1_c`;
  } else if (data.registrationType_join2_practiceItemOne == 'cbo1_d') {
    data.registrationType_join2_practiceItemOne = `${i18n`field.label.partA.cbo1_d_Part1`} ${data.cbo1_d_input1_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_d_Part2`} ${data.cbo1_d_input2_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_d_Part3`} ${i18n`field.label.partA.cbo1_b_Part1`} ${data.cbo1_d_input3_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part2`} ${data.cbo1_d_input4_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part3`} ${data.cbo1_d_input5_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part4`} ${data.cbo1_d_input6_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part5`} ${data.cbo1_d_input7_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part6`} ${data.cbo1_d_input8_join2_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part7`}`;
  }
}

if (!isEmpty(data.registrationStatus_organiserThree_practiceItemOne)) {
  if (data.registrationStatus_organiserThree_practiceItemOne == 'option1') {
    data.registrationStatus_organiserThree_practiceItemOne = i18n`field.label.partA.registrationOption1a`;
  } else if (data.registrationStatus_organiserThree_practiceItemOne == 'option2') {
    data.registrationStatus_organiserThree_practiceItemOne = `${i18n`field.label.partA.registrationOption2Part1`}${i18n`field.label.partA.registrationOption2Part2`}`;
  } else if (data.registrationStatus_organiserThree_practiceItemOne == 'option3') {
    data.registrationStatus_organiserThree_practiceItemOne = i18n`field.label.partA.registrationOption3a`;
  } else if (data.registrationStatus_organiserThree_practiceItemOne == 'option4') {
    data.registrationStatus_organiserThree_practiceItemOne = i18n`field.label.partA.registrationOption4a`;
  }
}

if (!isEmpty(data.registrationType_join3_practiceItemOne)) {
  if (data.registrationType_join3_practiceItemOne == 'cbo1_a') {
    data.registrationType_join3_practiceItemOne = i18n`field.label.partA.cbo1_a`;
  } else if (data.registrationType_join3_practiceItemOne == 'cbo1_b') {
    data.registrationType_join3_practiceItemOne = i18n`field.label.partA.cbo1_b`;
  } else if (data.registrationType_join3_practiceItemOne == 'cbo1_c') {
    data.registrationType_join3_practiceItemOne = i18n`field.label.partA.cbo1_c`;
  } else if (data.registrationType_join3_practiceItemOne == 'cbo1_d') {
    data.registrationType_join3_practiceItemOne = `${i18n`field.label.partA.cbo1_d_Part1`} ${data.cbo1_d_input1_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_d_Part2`} ${data.cbo1_d_input2_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_d_Part3`} ${i18n`field.label.partA.cbo1_b_Part1`} ${data.cbo1_d_input3_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part2`} ${data.cbo1_d_input4_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part3`} ${data.cbo1_d_input5_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part4`} ${data.cbo1_d_input6_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part5`} ${data.cbo1_d_input7_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part6`} ${data.cbo1_d_input8_join3_practiceItemOne} ${i18n`field.label.partA.cbo1_b_Part7`}`;
  }
}


if (!isEmpty(data.groupRepTitle)) {
  if (data.groupRepTitle == 'mr') {
    data.groupRepTitle = i18n`field.label.partF.mr`;
  } else if (data.groupRepTitle == 'ms') {
    data.groupRepTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.itemRepOneTitle)) {
  if (data.itemRepOneTitle == 'mr') {
    data.itemRepOneTitle = i18n`field.label.partF.mr`;
  } else if (data.itemRepOneTitle == 'ms') {
    data.itemRepOneTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.itemRepTwoTitle)) {
  if (data.itemRepTwoTitle == 'mr') {
    data.itemRepTwoTitle = i18n`field.label.partF.mr`;
  } else if (data.itemRepTwoTitle == 'ms') {
    data.itemRepTwoTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.itemRepThreeTitle)) {
  if (data.itemRepThreeTitle == 'mr') {
    data.itemRepThreeTitle = i18n`field.label.partF.mr`;
  } else if (data.itemRepThreeTitle == 'ms') {
    data.itemRepThreeTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.itemRepFourTitle)) {
  if (data.itemRepFourTitle == 'mr') {
    data.itemRepFourTitle = i18n`field.label.partF.mr`;
  } else if (data.itemRepFourTitle == 'ms') {
    data.itemRepFourTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.itemRepFiveTitle)) {
  if (data.itemRepFiveTitle == 'mr') {
    data.itemRepFiveTitle = i18n`field.label.partF.mr`;
  } else if (data.itemRepFiveTitle == 'ms') {
    data.itemRepFiveTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.ResponsiblegroupRepTitle)) {
  if (data.ResponsiblegroupRepTitle == 'mr') {
    data.ResponsiblegroupRepTitle = i18n`field.label.partF.mr`;
  } else if (data.ResponsiblegroupRepTitle == 'ms') {
    data.ResponsiblegroupRepTitle = i18n`field.label.partF.ms`;
  }
}

if (!isEmpty(data.radiobox_1_comp)) {
  if (data.radiobox_1_comp == 'option1') {
    data.radiobox_1_comp = i18n`component1.radiobox_1_comp.options.option1`;
  } else if (data.radiobox_1_comp == 'option2') {
    data.radiobox_1_comp = i18n`component1.radiobox_1_comp.options.option2`;
  }
}


if (!isEmpty(data.agreementUpload)) {
  if (data.agreementUpload == 'yes') {
    data.agreementUpload = i18n.translate(`component1.agreementUpload.options.yes`);
  } else if (data.agreementUpload == 'no') {
    data.agreementUpload = i18n.translate(`component1.agreementUpload.options.no`);
  }
}


if (!isEmpty(data.regiondlistOne)) {
  if (data.regiondlistOne == 'CSAmerica') {
    data.regiondlistOne = i18n.translate(`dropdown_region.latinAmerica`);
  } else if (data.regiondlistOne == 'northAmerica') {
    data.regiondlistOne = i18n.translate(`dropdown_region.northAmerica`);
  } else if (data.regiondlistOne == 'northEurope') {
    data.regiondlistOne = i18n.translate(`dropdown_region.northEurope`);
  }else if (data.regiondlistOne == 'westEurope') {
    data.regiondlistOne = i18n.translate(`dropdown_region.westEurope`);
  }else if (data.regiondlistOne == 'midEastEurope') {
    data.regiondlistOne = i18n.translate(`dropdown_region.MidEastEurope`);
  }else if (data.regiondlistOne == 'midEast_africa') {
    data.regiondlistOne = i18n.translate(`dropdown_region.MidEast`);
  }else if (data.regiondlistOne == 'japanKorea') {
    data.regiondlistOne = i18n.translate(`dropdown_region.JapKorea`);
  }else if (data.regiondlistOne == 'EastsouthAsia') {
    data.regiondlistOne = i18n.translate(`dropdown_region.southeastAsia`);
  }else if (data.regiondlistOne == 'southAsia') {
    data.regiondlistOne = i18n.translate(`dropdown_region.southAsia`);
  }else if (data.regiondlistOne == 'midwestnorthAsia') {
    data.regiondlistOne = i18n.translate(`dropdown_region.midwestAsia`);
  }else if (data.regiondlistOne == 'NZAus') {
    data.regiondlistOne = i18n.translate(`dropdown_region.australiaNewsealand`);
  }
}

if (!isEmpty(data.regiondlistTwo)) {
  if (data.regiondlistTwo == 'CSAmerica') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.latinAmerica`);
  } else if (data.regiondlistTwo == 'northAmerica') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.northAmerica`);
  } else if (data.regiondlistTwo == 'northEurope') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.northEurope`);
  }else if (data.regiondlistTwo == 'westEurope') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.westEurope`);
  }else if (data.regiondlistTwo == 'midEastEurope') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.MidEastEurope`);
  }else if (data.regiondlistTwo == 'midEast_africa') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.MidEast`);
  }else if (data.regiondlistTwo == 'japanKorea') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.JapKorea`);
  }else if (data.regiondlistTwo == 'EastsouthAsia') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.southeastAsia`);
  }else if (data.regiondlistTwo == 'southAsia') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.southAsia`);
  }else if (data.regiondlistTwo == 'midwestnorthAsia') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.midwestAsia`);
  }else if (data.regiondlistTwo == 'NZAus') {
    data.regiondlistTwo = i18n.translate(`dropdown_region.australiaNewsealand`);
  }
}

if (!isEmpty(data.regiondlistThree)) {
  if (data.regiondlistThree == 'CSAmerica') {
    data.regiondlistThree = i18n.translate(`dropdown_region.latinAmerica`);
  } else if (data.regiondlistThree == 'northAmerica') {
    data.regiondlistThree = i18n.translate(`dropdown_region.northAmerica`);
  } else if (data.regiondlistThree == 'northEurope') {
    data.regiondlistThree = i18n.translate(`dropdown_region.northEurope`);
  }else if (data.regiondlistThree == 'westEurope') {
    data.regiondlistThree = i18n.translate(`dropdown_region.westEurope`);
  }else if (data.regiondlistThree == 'midEastEurope') {
    data.regiondlistThree = i18n.translate(`dropdown_region.MidEastEurope`);
  }else if (data.regiondlistThree == 'midEast_africa') {
    data.regiondlistThree = i18n.translate(`dropdown_region.MidEast`);
  }else if (data.regiondlistThree == 'japanKorea') {
    data.regiondlistThree = i18n.translate(`dropdown_region.JapKorea`);
  }else if (data.regiondlistThree == 'EastsouthAsia') {
    data.regiondlistThree = i18n.translate(`dropdown_region.southeastAsia`);
  }else if (data.regiondlistThree == 'southAsia') {
    data.regiondlistThree = i18n.translate(`dropdown_region.southAsia`);
  }else if (data.regiondlistThree == 'midwestnorthAsia') {
    data.regiondlistThree = i18n.translate(`dropdown_region.midwestAsia`);
  }else if (data.regiondlistThree == 'NZAus') {
    data.regiondlistThree = i18n.translate(`dropdown_region.australiaNewsealand`);
  }
}

if (!isEmpty(data.regiondlistFour)) {
  if (data.regiondlistFour == 'CSAmerica') {
    data.regiondlistFour = i18n.translate(`dropdown_region.latinAmerica`);
  } else if (data.regiondlistFour == 'northAmerica') {
    data.regiondlistFour = i18n.translate(`dropdown_region.northAmerica`);
  } else if (data.regiondlistFour == 'northEurope') {
    data.regiondlistFour = i18n.translate(`dropdown_region.northEurope`);
  }else if (data.regiondlistFour == 'westEurope') {
    data.regiondlistFour = i18n.translate(`dropdown_region.westEurope`);
  }else if (data.regiondlistFour == 'midEastEurope') {
    data.regiondlistFour = i18n.translate(`dropdown_region.MidEastEurope`);
  }else if (data.regiondlistFour == 'midEast_africa') {
    data.regiondlistFour = i18n.translate(`dropdown_region.MidEast`);
  }else if (data.regiondlistFour == 'japanKorea') {
    data.regiondlistFour = i18n.translate(`dropdown_region.JapKorea`);
  }else if (data.regiondlistFour == 'EastsouthAsia') {
    data.regiondlistFour = i18n.translate(`dropdown_region.southeastAsia`);
  }else if (data.regiondlistFour == 'southAsia') {
    data.regiondlistFour = i18n.translate(`dropdown_region.southAsia`);
  }else if (data.regiondlistFour == 'midwestnorthAsia') {
    data.regiondlistFour = i18n.translate(`dropdown_region.midwestAsia`);
  }else if (data.regiondlistFour == 'NZAus') {
    data.regiondlistFour = i18n.translate(`dropdown_region.australiaNewsealand`);
  }
}

if (!isEmpty(data.regiondlistFive)) {
  if (data.regiondlistFive == 'CSAmerica') {
    data.regiondlistFive = i18n.translate(`dropdown_region.latinAmerica`);
  } else if (data.regiondlistFive == 'northAmerica') {
    data.regiondlistFive = i18n.translate(`dropdown_region.northAmerica`);
  } else if (data.regiondlistFive == 'northEurope') {
    data.regiondlistFive = i18n.translate(`dropdown_region.northEurope`);
  }else if (data.regiondlistFive == 'westEurope') {
    data.regiondlistFive = i18n.translate(`dropdown_region.westEurope`);
  }else if (data.regiondlistFive == 'midEastEurope') {
    data.regiondlistFive = i18n.translate(`dropdown_region.MidEastEurope`);
  }else if (data.regiondlistFive == 'midEast_africa') {
    data.regiondlistFive = i18n.translate(`dropdown_region.MidEast`);
  }else if (data.regiondlistFive == 'japanKorea') {
    data.regiondlistFive = i18n.translate(`dropdown_region.JapKorea`);
  }else if (data.regiondlistFive == 'EastsouthAsia') {
    data.regiondlistFive = i18n.translate(`dropdown_region.southeastAsia`);
  }else if (data.regiondlistFive == 'southAsia') {
    data.regiondlistFive = i18n.translate(`dropdown_region.southAsia`);
  }else if (data.regiondlistFive == 'midwestnorthAsia') {
    data.regiondlistFive = i18n.translate(`dropdown_region.midwestAsia`);
  }else if (data.regiondlistFive == 'NZAus') {
    data.regiondlistFive = i18n.translate(`dropdown_region.australiaNewsealand`);
  }
}




if (!isEmpty(data.beltRoadOne)) {
  if (data.beltRoadOne == 'y') {
  data.beltRoadOne = i18n`field.label.partA.beltRoadQY`;
  } else if (data.beltRoadOne == 'n') {
  data.beltRoadOne = i18n`field.label.partA.beltRoadQn`;
  }
  }
  
  if (!isEmpty(data.beltRoadTwo)) {
  if (data.beltRoadTwo == 'y') {
  data.beltRoadTwo = i18n`field.label.partA.beltRoadQY`;
  } else if (data.beltRoadTwo == 'n') {
  data.beltRoadTwo = i18n`field.label.partA.beltRoadQn`;
  }
  }
  
  if (!isEmpty(data.beltRoadThree)) {
  if (data.beltRoadThree == 'y') {
  data.beltRoadThree = i18n`field.label.partA.beltRoadQY`;
  } else if (data.beltRoadThree == 'n') {
  data.beltRoadThree = i18n`field.label.partA.beltRoadQn`;
  }
  }
  
  if (!isEmpty(data.beltRoadFour)) {
  if (data.beltRoadFour == 'y') {
  data.beltRoadFour = i18n`field.label.partA.beltRoadQY`;
  } else if (data.beltRoadFour == 'n') {
  data.beltRoadFour = i18n`field.label.partA.beltRoadQn`;
  }
  }
  if (!isEmpty(data.beltRoadFive)) {
  if (data.beltRoadFive == 'y') {
  data.beltRoadFive = i18n`field.label.partA.beltRoadQY`;
  } else if (data.beltRoadFive == 'n') {
  data.beltRoadFive = i18n`field.label.partA.beltRoadQn`;
  }
  }

  

if (!isEmpty(data.Q19iOptionAB)) {
  if (data.Q19iOptionAB == 'Q19iYes') {
      data.Q19iOptionAB = i18n`field.label.partA.beltRoadQY`;
  } else if (data.Q19iOptionAB == 'Q19iNo') {
      data.Q19iOptionAB = i18n`field.label.partA.beltRoadQn`;
   }
  }

if(!isEmpty(data.countryOne)){if (data.countryOne == 'othercountry') {data.countryOne = '其他';}}
if(!isEmpty(data.countryTwo)){if (data.countryTwo == 'othercountry') {data.countryTwo = '其他';}}
if(!isEmpty(data.countryThree)){if (data.countryThree == 'othercountry') {data.countryThree = '其他';}}
if(!isEmpty(data.countryFour)){if (data.countryFour == 'othercountry') {data.countryFour = '其他';}}
if(!isEmpty(data.countryFive)){if (data.countryFive == 'othercountry') {data.countryFive = '其他';}}




/*
  
  
  if (!isEmpty(data.Q19iiOptionAB)) {
  if (data.Q19iiOptionAB != 'Q19iiNo') {
  data.Q19iiOptionAB.translate(i18n`field.label.partA.beltRoadQY`);
  } else if (data.Q19iiOptionAB == 'Q19iiNo') {
  data.Q19iiOptionAB.translate(i18n`field.label.partA.beltRoadQn`);
  }
  }
  
  
  
  if (!isEmpty(data.Q19iiiOptionAB)) {
  if (data.Q19iiiOptionAB != 'Q19iiiNo') {
  data.Q19iiiOptionAB.translate(i18n`field.label.partA.beltRoadQY`);
  } else if (data.Q19iiiOptionAB == 'Q19iiiNo') {
  data.Q19iiiOptionAB.translate(i18n`field.label.partA.beltRoadQn`);
  }
  }

*/



//-----------------------------------from HAB010 finish---------------------


 return [
      pdf.concat(
                _pdf_concat_array,
                `${submit.trnId}_HYAB.pdf`
            ),
      xml.convert({ form, submit, data }, dataTypes, `${submit.trnId}_HYAB.xml`, { flatten: true }),
    ];
  },
  validate: (submission, setResult) => {
    validateForm(submission, steps).then((result) => {
      setResult(result);
    });
  },
};