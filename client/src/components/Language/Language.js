import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import EngLish from '../../image/gb.png';
import VietNam from '../../image/vn.png';
import Korea from '../../image/kr.png';
import China from '../../image/cn.png';
import './Language.css';
function Language() {
  const [lang, setLang] = useState('en');
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(lang);
    console.log('Changed!');
    return () => {
      i18n.changeLanguage(lang);
      console.log('unmount!');
    };
  }, [lang, i18n]);
  //  giá trị mà đã được đồng ý thực thi

  function handleChangeSelect(event) {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
  return (
    <FormControl className="SelectBoxCountry">
      <InputLabel id="demo-simple-select-label">{t('language.choose')}</InputLabel>

      <Select
        value={lang}
        onChange={handleChangeSelect}
      >
        <MenuItem value="en">
          <img src={EngLish} alt="Flag" width="50px" height="30px" />&nbsp; English
      </MenuItem>
        <MenuItem value="chi">
          <img src={China} alt="Flag" width="50px" height="30px" />&nbsp; China
      </MenuItem>
        <MenuItem value="ko">
          <img src={Korea} alt="Flag" width="50px" height="30px" />&nbsp; Korea
      </MenuItem>
        <MenuItem value="vn">
          <img src={VietNam} alt="Flag" width="50px" height="30px" />&nbsp; Viet Nam
      </MenuItem>
      </Select>
    </FormControl>
  );
}
export default Language;