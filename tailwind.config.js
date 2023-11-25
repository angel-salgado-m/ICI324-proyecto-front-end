import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'uv-blue-100': '#C8EBFA',
        'uv-blue-200': '#94D3F6',
        'uv-blue-300': '#5CADE6',
        'uv-blue-400': '#3386CD',
        'uv-blue-500': '#0055AD',
        'uv-blue-600': '#004194',
        'uv-blue-700': '#00307C',
        'uv-blue-800': '#002264',
        'uv-blue-900': '#001853',

        'uv-green-100': '#DEF8CE',
        'uv-green-200': '#B7F1A1',
        'uv-green-300': '#80D66B',
        'uv-green-400': '#4DAD41',
        'uv-green-500': '#177714',
        'uv-green-600': '#0E6613',
        'uv-green-700': '#0A5514',
        'uv-green-800': '#064514',
        'uv-green-900': '#033914',

        'uv-sky-blue-100': '#C7F4F9',
        'uv-sky-blue-200': '#92E4F4',
        'uv-sky-blue-300': '#59C1DE',
        'uv-sky-blue-400': '#2F95BE',
        'uv-sky-blue-500': '#006093',
        'uv-sky-blue-600': '#004A7E',
        'uv-sky-blue-700': '#003769',
        'uv-sky-blue-800': '#002755',
        'uv-sky-blue-900': '#001C46',

        'uv-orange-100': '#FCEFCB',
        'uv-orange-200': '#F9DA99',
        'uv-orange-300': '#EDBC64',
        'uv-orange-400': '#DB9B3C',
        'uv-orange-500': '#C46F07',
        'uv-orange-600': '#A85705',
        'uv-orange-700': '#8D4203',
        'uv-orange-800': '#713002',
        'uv-orange-900': '#5E2301',

        'uv-red-100': '#F9DDD0',
        'uv-red-200': '#F4B5A3',
        'uv-red-300': '#DE7E70',
        'uv-red-400': '#BE4D48',
        'uv-red-500': '#931A20',
        'uv-red-600': '#7E1321',
        'uv-red-700': '#690D22',
        'uv-red-800': '#550820',
        'uv-red-900': '#46041F',

        'uv-purple-100': '#EFD7F9',
        'uv-purple-200': '#D3B3F4',
        'uv-purple-300': '#B180E0',
        'uv-purple-400': '#925DC2',
        'uv-purple-500': '#750099',
        'uv-purple-600': '#5E007E',
        'uv-purple-700': '#4A0069',
        'uv-purple-800': '#370055',
        'uv-purple-900': '#2A0046',

        'uv-yellow-100': '#F9F1D7',
        'uv-yellow-200': '#F4E4B3',
        'uv-yellow-300': '#EFD880',
        'uv-yellow-400': '#E4C14D',
        'uv-yellow-500': '#D6A11A',
        'uv-yellow-600': '#B37F05',
        'uv-yellow-700': '#8F6503',
        'uv-yellow-800': '#714F02',
        'uv-yellow-900': '#5E3F01',

        'uv-gray-100': '#F9F9F9',
        'uv-gray-200': '#F4F4F4',
        'uv-gray-300': '#EFEFEF',
        'uv-gray-400': '#E4E4E4',
        'uv-gray-500': '#D6D6D6',
        'uv-gray-600': '#B3B3B3',
        'uv-gray-700': '#8F8F8F',
        'uv-gray-800': '#717171',
        'uv-gray-900': '#5E5E5E',

        'uv-black-100': '#A4A4A4',
        'uv-black-200': '#848484',
        'uv-black-300': '#6E6E6E',
        'uv-black-400': '#585858',
        'uv-black-500': '#424242',
        'uv-black-600': '#2E2E2E',
        'uv-black-700': '#1C1C1C',
        'uv-black-800': '#151515',
        'uv-black-900': '#000000',

        'base-1': '#3e4d64',
        'base-2': '#86B1CD',
        'base-3': '#43516E',
        'base-4': '#5d6a81',
        'base-5': '#5d6a81',
        'base-6': '#909fb3',
        'base-7': '#707679',
        'base-8': '#b2b2b0',
        'base-9': '#54acd8',
        'base-10': '#3A608A',

        'login-1': '#5C87AC',
        'login-2': '#b8ddef',
        
        'boton-1': '#5C87AC',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
