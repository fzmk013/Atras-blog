import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // FONTS SIZES
    --font-size-10: clamp(10px, 1vw, 10px);
    --font-size-12: clamp(8px, 1.2vw, 12px);
    --font-size-14: clamp(9px, 1.4vw, 14px);
    --font-size-16: clamp(10px, 1.6vw, 16px);
    --font-size-18: clamp(9px, 1.8vw, 18px);
    --font-size-20: clamp(10px, 2vw, 20px);
    --font-size-24: clamp(16px, 2vw, 24px);
    --font-size-26: clamp(18px, 2.2vw, 26px);
    --font-size-28: clamp(20px, 2.3vw, 28px);
    --font-size-30: clamp(25px, 2.5vw, 30px);
    --font-size-32: clamp(28px, 2.5vw, 32px);
    --font-size-40: clamp(36px, 3vw, 40px);
    --font-size-48: clamp(44px, 3.5vw, 48px);

    // FONTS WEIGHT
    --font-weight-light: 400;
    --font-weight-regular: 500;
    --font-weight-medium: 600;
    --font-weight-bold: 700;

   &, &.light-mode {

    /* Grey */
    --color-grey-0 : #ffffff;

      /* Green Palette from Figma (Group 1) */
      --color-primary-100: #D0FDBD;
      --color-primary-200: #8AE749;
      --color-primary-300: #6FBC3A;
      --color-primary-400: #56922B;
      --color-primary-500: #3D6B1D;
      --color-primary-600: #264610;
      --color-primary-700: #112405;

      /* Green Palette from Figma (Group 2) */
      --color-secondary-100: #9BFE71;
      --color-secondary-200: #69D71C;
      --color-secondary-300: #53AC14;
      --color-secondary-400: #3D830D;
      --color-secondary-500: #295C06;
      --color-secondary-600: #163802;
      --color-secondary-700: #061600;


      /* Green Palette from Figma (Group 3) */
      --color-tertiary-100: #ADEE7F;
      --color-tertiary-200: #8DC367;
      --color-tertiary-300: #6F9A50;
      --color-tertiary-400: #52733A;
      --color-tertiary-500: #374F26;
      --color-tertiary-600: #1E2D13;
      --color-tertiary-700: #0B1305;

      --color-danger: #FF6B6B; 
      --backdrop-color: rgba(255, 255, 255, 0.1);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

      --image-grayscale: 0;
      --image-opacity: 100%;

      /* Red Palette for Machines */
      --color-red-100 : #FF5950;
      --color-red-200 : #FF3B30;
      --color-red-300 : #C91C12;
      --color-red-400 : #D8291F;

    /* green palete for machines */
      --color-green-100 : #87F9CF;
      --color-green-200 : #8AE749;
      --color-green-300 : #50AD10;
      --color-green-400 : rgba(56, 101, 24, 0.2);


    /* orange palete for machines */
      --color-orange-100 : #F6C77C;
      --color-orange-200 : #E7AA49;
      --color-orange-300 : #D7890D;
      --color-orange-400 : #FAA111;
    }

  &.dark-mode {
    --font-color-default: #0000;

    /* --background-color :  #272728; */

      /* Grey */
      --color-grey-0: #fff;


      --color-primary-100 : #8AE7491A;
      --color-primary-200 : #87F9CF;
      --color-primary-400: #4ED9A5;
      --color-primary-500 : #3EB287;
      --color-primary-600 : #3AAE83;

      // for spinner
       --color-secondary-600 : #52ba16ff;

      --color-grey-50: #111827;
      // --color-grey-100: #101014; //خوشگله
      --color-grey-100: #272728; //اسهال
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #A6ABA4; // the transition from figma (line)
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;


      --color-danger: #FF6B6B; 
      
    /* Red Palette for Machines */
      --color-red-200 : #FF5950;

      --color-red-100 : #FF5950;


    /* green palete for machines */
      --color-green-200 : #87F9CF;

    /* orange palete for machines */
      --color-orange-200 : #F6C77C;

      --backdrop-color: rgba(0, 0, 0, 0.3);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

      --image-grayscale: 10%;
      --image-opacity: 90%;
    }

       --color-brand-500 : #007AFF;

    // BORDER RADIUS
    --border-radius-tiny: 2px;
    --border-radius-xs: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: all ease-in-out 0.5s;
  }

  html {
    font-size: clamp(50%, 0.5vw + 0.8rem, 62.5%);
    background-color: #212121;

  }

  body {
    font-family: 'IRANSans', Arial, sans-serif; 
    color: var(--color-grey-0);
    
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;

    transition: all ease-in-out 0.5s;
  }

  input,
  button,
  textarea,
  select {
    /* font: inherit; */
    /* color: inherit; */

    outline: none; 

    &:focus {
      outline: none;
    }

  /* background: none !important; */


  }

  button {
    cursor: pointer;
    /* background-color:  !important; */
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    color: var(--color-grey-500);
    top: auto; bottom: 100%;
  }
  

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  span,
  label,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }


  select {
  &::-webkit-scrollbar-track {
    background: var(--color-grey-0);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #6c757d, #adb5bd);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #5a6268, #868e96);
  }

  scrollbar-color: #888 var(--color-grey-0);
  scrollbar-width: thin;
  }

  


`;

export default GlobalStyles;