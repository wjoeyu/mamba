import React from 'react';

export const closeX = () => {
    return(
        <svg focusable="false" viewBox="0 0 32 32">
            <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 "></polygon>
        </svg>
    );
};

export const calendar = (classN) => {
    return(
        <svg className={classN} viewBox="0 0 32 32">
          <rect x="16" y="16" width="2" height="2"></rect>
          <rect x="20" y="16" width="2" height="2"></rect>
          <rect x="20" y="20" width="2" height="2"></rect>
          <rect x="16" y="20" width="2" height="2"></rect>
          <rect x="8" y="20" width="2" height="2"></rect>
          <rect x="8" y="24" width="2" height="2"></rect>
          <rect x="16" y="24" width="2" height="2"></rect>
          <rect x="12" y="16" width="2" height="2"></rect>
          <rect x="12" y="20" width="2" height="2"></rect>
          <rect x="12" y="24" width="2" height="2"></rect>
          <path d="M22,2V0h-2v2h-8V0h-2v2H2v30h28V2H22z M28,30H4V12h24V30z M28,10H4V4h6v2h2V4h8v2h2V4h6V10z"></path>
        </svg>
    );
};

export const clear = () => {
    return(
        <svg focusable="false" viewBox="0 0 32 32">
          <polygon points="24.485,27.314 27.314,24.485 18.828,16 27.314,7.515 24.485,4.686 16,13.172 7.515,4.686 4.686,7.515 13.172,16 4.686,24.485 7.515,27.314 16,18.828 ">
          </polygon>
        </svg>
    );
};

export const checkmark = (classN) => {
    return(
        <svg className={classN}
          viewBox="0 0 32 32">
          <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
        </svg>
    )
};

export const descIcon = () => {
    return(
        <svg className ="desc-icon" viewBox="0 0 32 32">
          <path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"></path>
        </svg>
    )
};
