import React, { useState } from 'react';
import RomanNumerals from '../utils/RomanNumerals';
import InputField from './InputField';
import ConverterLayout from './ConverterLayout';
export default function IntToRoman() {
  const [toRoman, setToRoman] = useState('');

  const handleChange = (value) => {
    const res = RomanNumerals.toRoman(value);
    setToRoman(res);
  };

  return (
    <ConverterLayout
      title="Convert Arabic to Roman Numerals"
      from="Arabic"
      to="Roman"
      input={
        <InputField
          label="Arabic Numerals"
          placeholder="Enter Arabic Numerals"
          onChange={handleChange}
          type="number"
        />
      }
      output={toRoman}
    />
  );
}
