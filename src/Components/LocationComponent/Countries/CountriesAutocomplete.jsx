import { React } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { COUNTRY_NAMES } from '../../../Enums/CountryNames';
export const CountriesAutocomplete = () => {
  return (
    <div className=' '>
      <Autocomplete
        id='combo-box-demo'
        options={COUNTRY_NAMES}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='Countries' variant='outlined' />}
      />
    </div>
  );
};
export default CountriesAutocomplete;
