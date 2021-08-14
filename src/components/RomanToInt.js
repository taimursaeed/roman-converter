import React, { useState } from 'react';
import RomanNumerals from '../utils/RomanNumerals';
import InputField from './InputField';
import ConverterLayout from './ConverterLayout';
export default function RomanToInt() {
  const [toInt, setToInt] = useState('');

  const handleChange = (value) => {
    const res = RomanNumerals.fromRoman(value);
    setToInt(res);
  };

  return (
    <ConverterLayout
      title=" Convert Roman to Arabic Numerals"
      from="Roman"
      to="Arabic"
      input={
        <InputField
          label="Roman Numerals"
          placeholder="Enter Roman Numerals"
          onChange={handleChange}
          type="text"
        />
      }
      output={toInt}
    />
  );
}
